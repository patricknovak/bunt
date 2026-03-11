import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ChatBot from "@/components/chat/ChatBot";
import JsonLd from "@/components/shared/JsonLd";
import DarkModeToggle from "@/components/shared/DarkModeToggle";
import "./globals.css";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

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
  icons: {
    icon: `${basePath}/favicon.svg`,
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: "Bunt & Associates",
    title: "Bunt & Associates | Transportation Planning & Engineering",
    description:
      "Western Canada's leading transportation planning and engineering consulting firm with AI-powered tools.",
    images: [
      {
        url: `${basePath}/og-image.svg`,
        width: 1200,
        height: 630,
        alt: "Bunt & Associates - Transportation Planning & Engineering",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bunt & Associates | Transportation Planning & Engineering",
    description:
      "AI-powered transportation planning and engineering solutions.",
    images: [`${basePath}/og-image.svg`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <JsonLd />
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag('js',new Date());gtag('config','${process.env.NEXT_PUBLIC_GA_ID}');`,
              }}
            />
          </>
        )}
      </head>
      <body className="antialiased bg-background text-foreground dark:bg-gray-950 dark:text-gray-100">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
        <ChatBot />
        <DarkModeToggle />
      </body>
    </html>
  );
}
