"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const WEB3FORMS_KEY = "761d712e-4187-40f6-bd4f-0d900f022c94";

const equipment = [
  { id: "canon-g7x-iii", name: "Canon G7X Mark III", dailyRate: 600, weekdayRate: 800 },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    instagram: "",
    equipment: "canon-g7x-iii",
    startDate: "",
    endDate: "",
    purpose: "",
    idType: "",
    agreeTerms: false,
  });
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
    } else if (step === 2) {
      setStep(3);
    } else {
      // Submit to Web3Forms
      setSubmitting(true);
      try {
        const selectedEquipment = equipment.find((eq) => eq.id === formData.equipment);
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            access_key: WEB3FORMS_KEY,
            subject: `New Booking: ${formData.name} — ${selectedEquipment?.name}`,
            from_name: "Holy Shots Website",
            // Customer details
            "Full Name": formData.name,
            "Email": formData.email,
            "Phone": formData.phone,
            "Instagram": formData.instagram,
            "Equipment": selectedEquipment?.name,
            "Pickup Date": formData.startDate,
            "Return Date": formData.endDate,
            "Purpose": formData.purpose || "Not specified",
            "ID Type": formData.idType,
            "Payment Method": paymentMethod,
            "Agreed to Terms": "Yes",
          }),
        });
        const result = await response.json();
        if (result.success) {
          setSubmitted(true);
        } else {
          alert("Something went wrong. Please DM us on Instagram instead.");
        }
      } catch {
        alert("Network error. Please DM us on Instagram instead.");
      } finally {
        setSubmitting(false);
      }
    }
  };

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="pt-16 min-h-screen bg-gray-50 flex items-center justify-center">
          <div className="max-w-md mx-auto text-center p-8">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Reservation Submitted!
            </h2>
            <p className="text-gray-500 mb-6">
              We&apos;ll confirm your booking via Instagram DM within 1-2 hours.
              Please keep your proof of payment ready.
            </p>
            <Link
              href="/"
              className="inline-block px-6 py-3 bg-[#C5A044] text-white rounded-full hover:bg-[#A6852E] transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 py-12">
          {/* Progress steps */}
          <div className="flex items-center justify-center mb-12">
            {[1, 2, 3].map((s) => (
              <div key={s} className="flex items-center">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                    step >= s
                      ? "bg-[#C5A044] text-white"
                      : "bg-gray-200 text-gray-500"
                  }`}
                >
                  {s}
                </div>
                {s < 3 && (
                  <div
                    className={`w-16 h-0.5 ${
                      step > s ? "bg-[#C5A044]" : "bg-gray-200"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">
              {step === 1 && "Reserve Equipment"}
              {step === 2 && "Choose Payment Method"}
              {step === 3 && "Confirm & Pay"}
            </h1>
            <p className="mt-2 text-gray-500">
              {step === 1 && "Fill in your details and rental preferences"}
              {step === 2 && "Select your preferred payment method"}
              {step === 3 && "Scan the QR code to complete payment"}
            </p>
          </div>

          <form onSubmit={handleSubmit}>
            {/* Step 1: Details */}
            {step === 1 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="booking-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="booking-name"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-colors text-sm"
                      placeholder="Juan Dela Cruz"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      id="booking-phone"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-colors text-sm"
                      placeholder="09XX XXX XXXX"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="booking-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="booking-email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-colors text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-ig" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Instagram Handle *
                    </label>
                    <input
                      type="text"
                      id="booking-ig"
                      required
                      value={formData.instagram}
                      onChange={(e) =>
                        setFormData({ ...formData, instagram: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-colors text-sm"
                      placeholder="@yourusername"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-equipment" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Equipment *
                  </label>
                  <select
                    id="booking-equipment"
                    value={formData.equipment}
                    onChange={(e) =>
                      setFormData({ ...formData, equipment: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-colors text-sm"
                  >
                    {equipment.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.name} — ₱{item.dailyRate}/day | ₱{item.weekdayRate}/weekdays
                      </option>
                    ))}
                  </select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="booking-start" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Pickup Date *
                    </label>
                    <input
                      type="date"
                      id="booking-start"
                      required
                      value={formData.startDate}
                      onChange={(e) =>
                        setFormData({ ...formData, startDate: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="booking-end" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Return Date *
                    </label>
                    <input
                      type="date"
                      id="booking-end"
                      required
                      value={formData.endDate}
                      onChange={(e) =>
                        setFormData({ ...formData, endDate: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-colors text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="booking-purpose" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Purpose of Rental
                  </label>
                  <textarea
                    id="booking-purpose"
                    rows={3}
                    value={formData.purpose}
                    onChange={(e) =>
                      setFormData({ ...formData, purpose: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-colors text-sm resize-none"
                    placeholder="Vlogging, event coverage, travel, etc."
                  />
                </div>

                <div>
                  <label htmlFor="booking-id" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Valid ID Type *
                  </label>
                  <select
                    id="booking-id"
                    required
                    value={formData.idType}
                    onChange={(e) =>
                      setFormData({ ...formData, idType: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#C5A044] focus:ring-1 focus:ring-[#C5A044] outline-none transition-colors text-sm"
                  >
                    <option value="">Select ID type</option>
                    <option value="national-id">National ID</option>
                    <option value="drivers-license">Driver&apos;s License</option>
                    <option value="passport">Passport</option>
                    <option value="school-id">School ID</option>
                    <option value="company-id">Company ID</option>
                  </select>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="agree-terms"
                    required
                    checked={formData.agreeTerms}
                    onChange={(e) =>
                      setFormData({ ...formData, agreeTerms: e.target.checked })
                    }
                    className="mt-0.5 w-4 h-4 accent-[#C5A044]"
                  />
                  <label htmlFor="agree-terms" className="text-sm text-gray-500">
                    I agree to the{" "}
                    <a
                      href="/#terms"
                      className="text-[#C5A044] hover:underline"
                    >
                      Terms & Conditions
                    </a>{" "}
                    of Holy Shots camera rental.
                  </label>
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-3.5 bg-[#C5A044] text-white font-medium rounded-full hover:bg-[#A6852E] transition-colors mt-4"
                >
                  Continue to Payment
                </button>
              </div>
            )}

            {/* Step 2: Payment method */}
            {step === 2 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-5">
                <div className="space-y-3">
                  {["GCash", "BPI", "UnionBank"].map((method) => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-colors ${
                        paymentMethod === method
                          ? "border-[#C5A044] bg-[#C5A044]/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-semibold text-gray-900">
                            {method}
                          </p>
                          <p className="text-sm text-gray-500">
                            {method === "GCash" && "Pay via GCash QR Code"}
                            {method === "BPI" && "Pay via BPI Transfer"}
                            {method === "UnionBank" && "Pay via UnionBank Transfer"}
                          </p>
                        </div>
                        <div
                          className={`w-5 h-5 rounded-full border-2 ${
                            paymentMethod === method
                              ? "border-[#C5A044] bg-[#C5A044]"
                              : "border-gray-300"
                          }`}
                        >
                          {paymentMethod === method && (
                            <svg
                              className="w-full h-full text-white"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 pt-4">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="flex-1 px-8 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-[#C5A044] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={!paymentMethod}
                    className="flex-1 px-8 py-3.5 bg-[#C5A044] text-white font-medium rounded-full hover:bg-[#A6852E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* Step 3: QR Code */}
            {step === 3 && (
              <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8 space-y-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-2">
                    Paying via <span className="font-semibold text-[#C5A044]">{paymentMethod}</span>
                  </p>
                  <p className="text-2xl font-bold text-gray-900">
                    Scan QR Code to Pay
                  </p>
                </div>

                {/* QR Code Placeholder */}
                <div className="w-64 h-64 mx-auto bg-gray-100 rounded-2xl border-2 border-dashed border-gray-300 flex items-center justify-center">
                  <div className="text-center">
                    <svg
                      className="w-16 h-16 mx-auto text-gray-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
                      />
                    </svg>
                    <p className="mt-3 text-sm text-gray-400">
                      {paymentMethod} QR Code
                    </p>
                    <p className="text-xs text-gray-300 mt-1">
                      (Replace with actual QR)
                    </p>
                  </div>
                </div>

                <div className="bg-[#C5A044]/5 rounded-xl p-4 border border-[#C5A044]/20">
                  <p className="text-sm text-gray-600 text-center">
                    After payment, please send your proof of payment (screenshot)
                    to our Instagram{" "}
                    <a
                      href="https://instagram.com/holyshots"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#C5A044]"
                    >
                      @holyshots
                    </a>{" "}
                    for confirmation.
                  </p>
                </div>

                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(2)}
                    className="flex-1 px-8 py-3.5 border border-gray-300 text-gray-700 font-medium rounded-full hover:border-[#C5A044] transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 px-8 py-3.5 bg-[#C5A044] text-white font-medium rounded-full hover:bg-[#A6852E] transition-colors disabled:opacity-50"
                  >
                    {submitting ? "Submitting..." : "I've Completed Payment"}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </main>
      <Footer />
    </>
  );
}
