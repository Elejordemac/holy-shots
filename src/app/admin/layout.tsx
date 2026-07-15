import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Holy Shots",
  description: "Holy Shots admin dashboard",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
