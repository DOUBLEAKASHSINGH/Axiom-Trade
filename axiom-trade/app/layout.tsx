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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${inter.variable} min-h-screen bg-background font-sans antialiased`}>
        <Providers>
          <Header />
          <NavBar className="border-b" />
          <main className="flex-1">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
