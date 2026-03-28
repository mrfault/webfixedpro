import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "WebFixedPro — Modern Web Solutions for Your Business",
  description:
    "WebFixedPro is a US-based web design and development agency. We build high-performance websites, e-commerce stores, and digital experiences that drive measurable results for ambitious businesses.",
  keywords: [
    "web design",
    "web development",
    "e-commerce",
    "SEO",
    "UI/UX design",
    "web agency",
    "US web agency",
    "website redesign",
  ],
  authors: [{ name: "WebFixedPro" }],
  openGraph: {
    title: "WebFixedPro — Modern Web Solutions for Your Business",
    description:
      "High-performance websites and digital experiences built for ambitious US businesses. Design, development, e-commerce, and SEO.",
    url: "https://webfixedpro.com",
    siteName: "WebFixedPro",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "WebFixedPro — Modern Web Solutions for Your Business",
    description:
      "High-performance websites and digital experiences built for ambitious US businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body
        className="min-h-screen antialiased"
        style={{ fontFamily: "var(--font-jakarta), sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
