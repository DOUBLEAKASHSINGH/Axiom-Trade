import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Header from "@/components/molecules/Header";
import NavBar from "@/components/organisms/NavBar";
import Providers from '@/components/Providers'

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Axiom Trade",
  description: "Next-generation trading platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} min-h-screen bg-[#040507] font-sans antialiased`}>
        <Providers>
          <NavBar />
          <main className="flex-1 pt-16">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
