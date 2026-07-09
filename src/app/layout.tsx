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
  keywords: ["camera rental", "Canon G7X", "photography equipment", "videography", "camera for rent Philippines"],
  openGraph: {
    title: "Holy Shots | Premium Camera Rentals",
    description: "Rent premium cameras and equipment for your creative projects. Affordable rates, hassle-free experience.",
    type: "website",
    images: [
      {
        url: "/images/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Holy Shots - Premium Camera Rentals",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holy Shots | Premium Camera Rentals",
    description: "Rent premium cameras for your creative projects.",
    images: ["/images/og-image.svg"],
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
