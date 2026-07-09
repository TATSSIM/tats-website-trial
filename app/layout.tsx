import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk, Share_Tech_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space",
  display: "swap",
});

const shareTechMono = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-share-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "The Aviator Training School | Beyond Pilots. Shaping Aviators. | Trivandrum",
    template: "%s | The Aviator Training School",
  },
  description:
    "Evidence-first aviation training in Trivandrum, Kerala. Verified DGCA results every attempt. EASA CPL pathway via Gold Wings Aviation, Poland. Founded Nov 2023.",
  keywords: [
    "aviation training Kerala",
    "pilot training Trivandrum",
    "CPL training India",
    "DGCA ground classes Kerala",
    "commercial pilot course India",
    "flight school Kerala",
    "EASA CPL India",
  ],
  openGraph: {
    type: "website",
    siteName: "The Aviator Training School",
    title: "The Aviator Training School | Beyond Pilots. Shaping Aviators.",
    description:
      "Evidence-first aviation training. Verified DGCA results every attempt. EASA CPL via Poland. Trivandrum, Kerala.",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable} ${shareTechMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
