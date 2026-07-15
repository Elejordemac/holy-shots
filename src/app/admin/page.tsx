"use client";

import { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import Logo from "@/components/Logo";

type Booking = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  instagram: string;
  equipment: string;
  pickup_date: string;
  return_date: string;
  purpose: string;
  id_type: string;
  id_photo_url: string;
  payment_method: string;
  receipt_url: string;
  status: string;
  total_amount: number;
  notes: string;
};

type Message = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  message: string;
  is_read: boolean;
};

type Equipment = {
  id: string;
  name: string;
  category: string;
  description: string;
  daily_rate: number;
  weekday_rate: number;
  features: string[];
  image_url: string;
  is_available: boolean;
  is_coming_soon: boolean;
};

type BlacklistEntry = {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  instagram: string;
  reason: string;
};

type Tab = "dashboard" | "bookings" | "messages" | "equipment" | "blacklist" | "calendar" | "customers";

function calculateDays(pickup: string, returnDate: string): number {
  const start = new Date(pickup);
  const end = new Date(returnDate);
  const diff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  return diff > 0 ? diff : 1;
}

function calculateTotal(pickup: string, returnDate: string, dailyRate: number): number {
  return calculateDays(pickup, returnDate) * dailyRate;
}

function getStatusMessage(status: string, name: string, equipment: string, pickup: string, returnDate: string): string {
  const messages: Record<string, string> = {
    confirmed: `Hi ${name}! Your booking for ${equipment} (${pickup} to ${returnDate}) has been CONFIRMED. Please prepare your valid ID for pickup. See you! - Holy Shots`,
    declined: `Hi ${name}, we're sorry but your booking for ${equipment} (${pickup} to ${returnDate}) has been DECLINED. Please contact us on Instagram for more details. - Holy Shots`,
    completed: `Hi ${name}! Your rental of ${equipment} has been marked as COMPLETED. Thank you for choosing Holy Shots! We hope to see you again. - Holy Shots`,
  };
  return messages[status] || "";
}

export default function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<Tab>("dashboard");
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [messages, setMessages] = useState<Message[]>([]);
  const [equipment, setEquipment] = useState<Equipment[]>([]);
  const [blacklist, setBlacklist] = useState<BlacklistEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    const [bookingsRes, messagesRes, equipmentRes, blacklistRes] = await Promise.all([
      supabase.from("bookings").select("*").order("created_at", { ascending: false }),
      supabase.from("messages").select("*").order("created_at", { ascending: false }),
      supabase.from("equipment").select("*").order("created_at", { ascending: true }),
      supabase.from("blacklist").select("*").order("created_at", { ascending: false }),
    ]);
    if (bookingsRes.data) setBookings(bookingsRes.data);
    if (messagesRes.data) setMessages(messagesRes.data);
    if (equipmentRes.data) setEquipment(equipmentRes.data);
    if (blacklistRes.data) setBlacklist(blacklistRes.data);
    setLoading(false);
  }, []);

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) { router.push("/admin/login"); return; }
      fetchData();
    };
    checkAuth();
  }, [router, fetchData]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/admin/login");
  };

  const updateBookingStatus = async (id: string, status: string) => {
    await supabase.from("bookings").update({ status }).eq("id", id);
    const booking = bookings.find(b => b.id === id);
    setBookings(bookings.map(b => b.id === id ? { ...b, status } : b));
    // Copy notification message
    if (booking) {
      const msg = getStatusMessage(status, booking.name, booking.equipment, booking.pickup_date, booking.return_date);
      navigator.clipboard.writeText(msg);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 3000);
    }
  };

  const markMessageRead = async (id: string) => {
    await supabase.from("messages").update({ is_read: true }).eq("id", id);
    setMessages(messages.map(m => m.id === id ? { ...m, is_read: true } : m));
  };

  const deleteMessage = async (id: string) => {
    await supabase.from("messages").delete().eq("id", id);
    setMessages(messages.filter(m => m.id !== id));
  };

  const deleteBooking = async (id: string) => {
    await supabase.from("bookings").delete().eq("id", id);
    setBookings(bookings.filter(b => b.id !== id));
  };

  const addToBlacklist = async (name: string, email: string, phone: string, instagram: string, reason: string) => {
    const { data } = await supabase.from("blacklist").insert({ name, email, phone, instagram, reason }).select().single();
    if (data) setBlacklist([data, ...blacklist]);
  };

  const removeFromBlacklist = async (id: string) => {
    await supabase.from("blacklist").delete().eq("id", id);
    setBlacklist(blacklist.filter(b => b.id !== id));
  };

  const exportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Instagram", "Equipment", "Pickup", "Return", "Days", "Status", "Payment", "Total"];
    const rows = bookings.map(b => {
      const days = calculateDays(b.pickup_date, b.return_date);
      const eq = equipment.find(e => e.name === b.equipment);
      const total = eq ? calculateTotal(b.pickup_date, b.return_date, eq.daily_rate) : b.total_amount || 0;
      return [b.name, b.email, b.phone, b.instagram, b.equipment, b.pickup_date, b.return_date, days, b.status, b.payment_method, total];
    });
    const csv = [headers, ...rows].map(r => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `holy-shots-bookings-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  // Stats
  const pendingBookings = bookings.filter(b => b.status === "pending").length;
  const confirmedBookings = bookings.filter(b => b.status === "confirmed").length;
  const completedBookings = bookings.filter(b => b.status === "completed").length;
  const unreadMessages = messages.filter(m => !m.is_read).length;
  const thisMonthBookings = bookings.filter(b => {
    const d = new Date(b.created_at);
    const now = new Date();
    return d.getMonth() === now.getMonth() && d.getFullYear() === now.getFullYear();
  });
  const totalRevenue = bookings.filter(b => b.status === "completed").reduce((acc, b) => {
    const eq = equipment.find(e => e.name === b.equipment);
    const total = eq ? calculateTotal(b.pickup_date, b.return_date, eq.daily_rate) : (b.total_amount || 0);
    return acc + total;
  }, 0);

  // Customer history
  const customers = Array.from(new Set(bookings.map(b => b.email))).map(email => {
    const customerBookings = bookings.filter(b => b.email === email);
    const latest = customerBookings[0];
    return {
      name: latest.name,
      email,
      phone: latest.phone,
      instagram: latest.instagram,
      totalBookings: customerBookings.length,
      totalSpent: customerBookings.reduce((acc, b) => {
        const eq = equipment.find(e => e.name === b.equipment);
        return acc + (eq ? calculateTotal(b.pickup_date, b.return_date, eq.daily_rate) : 0);
      }, 0),
      bookings: customerBookings,
    };
  });

  // Calendar data
  const getCalendarDays = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days: { day: number; booked: boolean; bookingName?: string }[] = [];
    for (let i = 0; i < firstDay; i++) days.push({ day: 0, booked: false });
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(d).padStart(2, "0")}`;
      const booking = bookings.find(b => {
        return (b.status === "confirmed" || b.status === "pending") && b.pickup_date <= dateStr && b.return_date >= dateStr;
      });
      days.push({ day: d, booked: !!booking, bookingName: booking?.name });
    }
    return days;
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-[#C5A044] text-lg">Loading...</div>
      </div>
    );
  }

  const navItems: { id: Tab; label: string; icon: string; badge?: number }[] = [
    { id: "dashboard", label: "Dashboard", icon: "📊" },
    { id: "bookings", label: "Bookings", icon: "📋", badge: pendingBookings },
    { id: "calendar", label: "Calendar", icon: "📅" },
    { id: "customers", label: "Customers", icon: "👥" },
    { id: "messages", label: "Messages", icon: "💬", badge: unreadMessages },
    { id: "equipment", label: "Equipment", icon: "📷" },
    { id: "blacklist", label: "Blacklist", icon: "🚫" },
  ];

  return (
    <div className="min-h-screen bg-gray-900 flex">
      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800 border-r border-gray-700 transform transition-transform lg:translate-x-0 lg:static ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-4 border-b border-gray-700">
          <div className="flex items-center gap-2">
            <Logo className="w-8 h-8" />
            <span className="text-white font-semibold">Holy Shots Admin</span>
          </div>
        </div>
        <nav className="p-3 space-y-1">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => { setActiveTab(item.id); setSidebarOpen(false); }}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${activeTab === item.id ? "bg-[#C5A044]/20 text-[#C5A044]" : "text-gray-400 hover:text-white hover:bg-gray-700"}`}
            >
              <span>{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge ? <span className="px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">{item.badge}</span> : null}
            </button>
          ))}
        </nav>
        <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-700">
          <button onClick={handleLogout} className="w-full px-3 py-2 text-sm text-red-400 hover:bg-red-500/10 rounded-lg transition-colors">Sign Out</button>
        </div>
      </aside>

      {sidebarOpen && <div className="fixed inset-0 bg-black/50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)} />}

      <main className="flex-1 min-h-screen">
        <header className="sticky top-0 z-30 bg-gray-900/95 backdrop-blur border-b border-gray-700 px-4 sm:px-6 py-3 flex items-center justify-between">
          <button onClick={() => setSidebarOpen(true)} className="lg:hidden text-gray-400">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
          <h1 className="text-white font-semibold text-lg capitalize">{activeTab}</h1>
          <button onClick={exportCSV} className="px-3 py-1.5 bg-gray-700 text-gray-300 text-xs rounded-lg hover:bg-gray-600 transition-colors">📥 Export CSV</button>
        </header>

        <div className="p-4 sm:p-6">

          {/* Dashboard */}
          {activeTab === "dashboard" && (
            <div className="space-y-6">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { label: "Pending", value: pendingBookings, color: "text-yellow-400" },
                  { label: "Confirmed", value: confirmedBookings, color: "text-blue-400" },
                  { label: "Completed", value: completedBookings, color: "text-green-400" },
                  { label: "This Month", value: thisMonthBookings.length, color: "text-[#C5A044]" },
                ].map(stat => (
                  <div key={stat.label} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                    <p className="text-gray-400 text-xs">{stat.label}</p>
                    <p className={`text-2xl font-bold mt-1 ${stat.color}`}>{stat.value}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <p className="text-gray-400 text-xs">Total Revenue</p>
                  <p className="text-2xl font-bold text-green-400 mt-1">₱{totalRevenue.toLocaleString()}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <p className="text-gray-400 text-xs">Unread Messages</p>
                  <p className="text-2xl font-bold text-[#C5A044] mt-1">{unreadMessages}</p>
                </div>
                <div className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                  <p className="text-gray-400 text-xs">Total Customers</p>
                  <p className="text-2xl font-bold text-purple-400 mt-1">{customers.length}</p>
                </div>
              </div>
              <div className="bg-gray-800 rounded-xl border border-gray-700 overflow-hidden">
                <div className="px-4 py-3 border-b border-gray-700"><h3 className="text-white font-medium text-sm">Recent Bookings</h3></div>
                <div className="divide-y divide-gray-700">
                  {bookings.slice(0, 5).map(b => {
                    const eq = equipment.find(e => e.name === b.equipment);
                    const total = eq ? calculateTotal(b.pickup_date, b.return_date, eq.daily_rate) : 0;
                    return (
                      <div key={b.id} className="px-4 py-3 flex items-center justify-between">
                        <div>
                          <p className="text-white text-sm font-medium">{b.name}</p>
                          <p className="text-gray-400 text-xs">{b.equipment} • {b.pickup_date} • ₱{total}</p>
                        </div>
                        <span className={`px-2 py-0.5 text-xs rounded-full ${b.status === "pending" ? "bg-yellow-500/20 text-yellow-400" : b.status === "confirmed" ? "bg-blue-500/20 text-blue-400" : b.status === "completed" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>{b.status}</span>
                      </div>
                    );
                  })}
                  {bookings.length === 0 && <p className="px-4 py-6 text-gray-500 text-center text-sm">No bookings yet</p>}
                </div>
              </div>
            </div>
          )}

          {/* Bookings */}
          {activeTab === "bookings" && (
            <div className="space-y-4">
              {bookings.map(b => {
                const eq = equipment.find(e => e.name === b.equipment);
                const days = calculateDays(b.pickup_date, b.return_date);
                const total = eq ? calculateTotal(b.pickup_date, b.return_date, eq.daily_rate) : 0;
                return (
                  <div key={b.id} className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-5">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-white font-semibold">{b.name}</h3>
                        <p className="text-gray-400 text-xs">{b.email} • {b.phone} • IG: {b.instagram}</p>
                      </div>
                      <span className={`self-start px-3 py-1 text-xs rounded-full font-medium ${b.status === "pending" ? "bg-yellow-500/20 text-yellow-400" : b.status === "confirmed" ? "bg-blue-500/20 text-blue-400" : b.status === "completed" ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}>{b.status}</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-3 text-sm mb-4">
                      <div><p className="text-gray-500 text-xs">Equipment</p><p className="text-gray-200">{b.equipment}</p></div>
                      <div><p className="text-gray-500 text-xs">Pickup</p><p className="text-gray-200">{b.pickup_date}</p></div>
                      <div><p className="text-gray-500 text-xs">Return</p><p className="text-gray-200">{b.return_date}</p></div>
                      <div><p className="text-gray-500 text-xs">Days</p><p className="text-gray-200">{days} day{days > 1 ? "s" : ""}</p></div>
                      <div><p className="text-gray-500 text-xs">Total</p><p className="text-[#C5A044] font-bold">₱{total.toLocaleString()}</p></div>
                    </div>
                    {b.purpose && <p className="text-gray-400 text-sm mb-3">Purpose: {b.purpose}</p>}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {b.id_photo_url && b.id_photo_url !== "Not uploaded" && <a href={b.id_photo_url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-lg hover:bg-gray-600">📎 View ID</a>}
                      {b.receipt_url && b.receipt_url !== "Not uploaded" && <a href={b.receipt_url} target="_blank" rel="noopener noreferrer" className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-lg hover:bg-gray-600">📎 View Receipt</a>}
                    </div>
                    {copiedId === b.id && <p className="text-green-400 text-xs mb-2">✓ Status message copied to clipboard — paste it to DM/text the client</p>}
                    <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-700">
                      {b.status !== "confirmed" && <button onClick={() => updateBookingStatus(b.id, "confirmed")} className="px-3 py-1.5 bg-blue-500/20 text-blue-400 text-xs rounded-lg hover:bg-blue-500/30">✓ Confirm</button>}
                      {b.status !== "completed" && <button onClick={() => updateBookingStatus(b.id, "completed")} className="px-3 py-1.5 bg-green-500/20 text-green-400 text-xs rounded-lg hover:bg-green-500/30">✓ Complete</button>}
                      {b.status !== "declined" && <button onClick={() => updateBookingStatus(b.id, "declined")} className="px-3 py-1.5 bg-red-500/20 text-red-400 text-xs rounded-lg hover:bg-red-500/30">✗ Decline</button>}
                      <button onClick={() => deleteBooking(b.id)} className="px-3 py-1.5 bg-gray-700 text-gray-400 text-xs rounded-lg hover:bg-gray-600">🗑 Delete</button>
                      <button onClick={() => addToBlacklist(b.name, b.email, b.phone, b.instagram, "Added from booking")} className="px-3 py-1.5 bg-gray-700 text-gray-400 text-xs rounded-lg hover:bg-gray-600">🚫 Blacklist</button>
                    </div>
                  </div>
                );
              })}
              {bookings.length === 0 && <p className="text-gray-500 text-center py-12">No bookings yet</p>}
            </div>
          )}

          {/* Calendar */}
          {activeTab === "calendar" && (
            <div className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-6">
              <h3 className="text-white font-semibold text-lg mb-4">{new Date().toLocaleString("default", { month: "long", year: "numeric" })}</h3>
              <div className="grid grid-cols-7 gap-1 mb-2">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(d => (
                  <div key={d} className="text-center text-gray-500 text-xs py-2">{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {getCalendarDays().map((day, i) => (
                  <div key={i} className={`aspect-square flex flex-col items-center justify-center rounded-lg text-sm relative ${day.day === 0 ? "" : day.booked ? "bg-[#C5A044]/20 border border-[#C5A044]/40" : "bg-gray-700/50 hover:bg-gray-700"} ${day.day === new Date().getDate() ? "ring-2 ring-[#C5A044]" : ""}`}>
                    {day.day > 0 && (
                      <>
                        <span className={`${day.booked ? "text-[#C5A044] font-bold" : "text-gray-300"}`}>{day.day}</span>
                        {day.booked && <span className="text-[8px] text-[#C5A044] truncate max-w-full px-0.5">{day.bookingName}</span>}
                      </>
                    )}
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-4 text-xs text-gray-400">
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-[#C5A044]/20 border border-[#C5A044]/40 rounded" /> Booked</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 bg-gray-700/50 rounded" /> Available</div>
                <div className="flex items-center gap-1"><div className="w-3 h-3 ring-2 ring-[#C5A044] rounded" /> Today</div>
              </div>
            </div>
          )}

          {/* Customers */}
          {activeTab === "customers" && (
            <div className="space-y-4">
              {customers.map(c => (
                <div key={c.email} className="bg-gray-800 rounded-xl border border-gray-700 p-4 sm:p-5">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-3">
                    <div>
                      <h3 className="text-white font-semibold">{c.name}</h3>
                      <p className="text-gray-400 text-xs">{c.email} • {c.phone} • IG: {c.instagram}</p>
                    </div>
                    <div className="flex gap-4 text-center">
                      <div><p className="text-[#C5A044] font-bold">{c.totalBookings}</p><p className="text-gray-500 text-xs">Bookings</p></div>
                      <div><p className="text-green-400 font-bold">₱{c.totalSpent.toLocaleString()}</p><p className="text-gray-500 text-xs">Total Spent</p></div>
                    </div>
                  </div>
                  <div className="space-y-2 mt-3 pt-3 border-t border-gray-700">
                    {c.bookings.map(b => {
                      const eq = equipment.find(e => e.name === b.equipment);
                      const total = eq ? calculateTotal(b.pickup_date, b.return_date, eq.daily_rate) : 0;
                      return (
                        <div key={b.id} className="flex items-center justify-between text-sm">
                          <div className="flex items-center gap-2">
                            <span className={`w-2 h-2 rounded-full ${b.status === "completed" ? "bg-green-400" : b.status === "confirmed" ? "bg-blue-400" : b.status === "pending" ? "bg-yellow-400" : "bg-red-400"}`} />
                            <span className="text-gray-300">{b.equipment}</span>
                            <span className="text-gray-500 text-xs">{b.pickup_date} → {b.return_date}</span>
                          </div>
                          <span className="text-gray-400 text-xs">₱{total}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
              {customers.length === 0 && <p className="text-gray-500 text-center py-12">No customers yet</p>}
            </div>
          )}

          {/* Messages */}
          {activeTab === "messages" && (
            <div className="space-y-3">
              {messages.map(m => (
                <div key={m.id} className={`bg-gray-800 rounded-xl border p-4 ${m.is_read ? "border-gray-700" : "border-[#C5A044]/30"}`}>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h3 className="text-white font-medium text-sm">{m.name}</h3>
                        {!m.is_read && <span className="w-2 h-2 bg-[#C5A044] rounded-full" />}
                      </div>
                      <p className="text-gray-400 text-xs">{m.email} • {new Date(m.created_at).toLocaleDateString()}</p>
                      <p className="text-gray-300 text-sm mt-2">{m.message}</p>
                    </div>
                    <div className="flex gap-1">
                      {!m.is_read && <button onClick={() => markMessageRead(m.id)} className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded hover:bg-gray-600">✓</button>}
                      <button onClick={() => deleteMessage(m.id)} className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded hover:bg-gray-600">🗑</button>
                      <a href={`mailto:${m.email}`} className="px-2 py-1 bg-[#C5A044]/20 text-[#C5A044] text-xs rounded hover:bg-[#C5A044]/30">↩ Reply</a>
                    </div>
                  </div>
                </div>
              ))}
              {messages.length === 0 && <p className="text-gray-500 text-center py-12">No messages yet</p>}
            </div>
          )}

          {/* Equipment */}
          {activeTab === "equipment" && (
            <div className="space-y-4">
              {equipment.map(eq => (
                <div key={eq.id} className="bg-gray-800 rounded-xl border border-gray-700 p-4 flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-white font-medium">{eq.name}</h3>
                      {eq.is_coming_soon && <span className="px-2 py-0.5 bg-yellow-500/20 text-yellow-400 text-xs rounded-full">Coming Soon</span>}
                      {eq.is_available && !eq.is_coming_soon && <span className="px-2 py-0.5 bg-green-500/20 text-green-400 text-xs rounded-full">Available</span>}
                    </div>
                    <p className="text-gray-400 text-xs mt-1">{eq.category} • ₱{eq.daily_rate}/day • ₱{eq.weekday_rate}/weekday</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Blacklist */}
          {activeTab === "blacklist" && (
            <div className="space-y-3">
              {blacklist.map(bl => (
                <div key={bl.id} className="bg-gray-800 rounded-xl border border-gray-700 p-4 flex items-center justify-between">
                  <div>
                    <h3 className="text-white font-medium text-sm">{bl.name}</h3>
                    <p className="text-gray-400 text-xs">{bl.email} • {bl.phone} • IG: {bl.instagram}</p>
                    <p className="text-red-400 text-xs mt-1">Reason: {bl.reason}</p>
                  </div>
                  <button onClick={() => removeFromBlacklist(bl.id)} className="px-3 py-1.5 bg-gray-700 text-gray-400 text-xs rounded-lg hover:bg-gray-600">Remove</button>
                </div>
              ))}
              {blacklist.length === 0 && <p className="text-gray-500 text-center py-12">No blacklisted users</p>}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
