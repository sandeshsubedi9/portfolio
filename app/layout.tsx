import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarsCanvas from "@/components/sub/StarBackground";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";
import MobileNavbar from "@/components/main/mobile-navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sandesh Subedi Portfolio",
  description: "This is the portfolio of Sandesh Subedi, a web developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#04001b] overflow-y-scroll overflow-x-hidden antialiased`}
      >
        <StarsCanvas />
        <Navbar />
        <MobileNavbar />
        <Toaster />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
