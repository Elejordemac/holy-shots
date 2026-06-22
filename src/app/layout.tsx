import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holy Shots | Premium Camera Rentals",
  description:
    "Rent premium cameras and equipment for your creative projects. Canon G7X Mark III and more available for daily and weekly rentals.",
  keywords: ["camera rental", "Canon G7X", "photography equipment", "videography"],
  openGraph: {
    title: "Holy Shots | Premium Camera Rentals",
    description: "Rent premium cameras and equipment for your creative projects.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-[family-name:var(--font-geist-sans)]">
        {children}
      </body>
    </html>
  );
}
