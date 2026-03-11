import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Bunt & Associates | Transportation Planning & Engineering",
    template: "%s | Bunt & Associates",
  },
  description:
    "Western Canada's leading transportation planning and engineering consulting firm. AI-powered traffic analysis, sustainable transportation planning, and innovative design solutions.",
  keywords: [
    "transportation planning",
    "traffic engineering",
    "transportation consulting",
    "traffic impact assessment",
    "sustainable transportation",
    "road safety",
    "parking planning",
    "Western Canada",
    "Vancouver",
    "Calgary",
    "Edmonton",
    "AI traffic analysis",
  ],
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Bunt & Associates",
    title: "Bunt & Associates | Transportation Planning & Engineering",
    description:
      "Western Canada's leading transportation planning and engineering consulting firm with AI-powered tools.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunt & Associates | Transportation Planning & Engineering",
    description:
      "AI-powered transportation planning and engineering solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <ChatBot />
      </body>
    </html>
  );
}
