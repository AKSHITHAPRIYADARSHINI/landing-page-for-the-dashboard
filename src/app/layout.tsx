import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NIST 800-369 K-12 Security Dashboard — Protecting Student Data",
  description:
    "A cybersecurity dashboard designed for educational institutions to monitor security, manage risks, and ensure student data protection. Built for teachers, administrators, and parents.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased bg-[#F8FAFC]">
        {children}
      </body>
    </html>
  );
}
