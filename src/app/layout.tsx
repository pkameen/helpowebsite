import type { Metadata } from "next";
import "./globals.css";
import { siteConfig } from "../lib/site";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | HELPO`,
  },
  description: siteConfig.description,
  keywords: [
    "website development",
    "web app development",
    "business website design",
    "ecommerce website development",
    "custom web application",
    "software agency",
    "HELPO",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#020617] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}