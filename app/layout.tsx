import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavigationBar from "@/Components/NavigationBar";
import Footer from "@/Components/Footer";
import { Toaster } from "react-hot-toast";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Saelix UI",
  description: "A React/Next.js UI Component Library",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Providers>
          <NavigationBar />
          {children}
          <Toaster position="top-center" />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
