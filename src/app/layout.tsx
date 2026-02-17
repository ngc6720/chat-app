import type { Metadata } from "next";
import "./globals.css";

import { Inter } from "next/font/google";
const font = Inter({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Cat",
  description: "Cat the cat's chat app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${font.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
