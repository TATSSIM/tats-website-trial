import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Space_Grotesk, Share_Tech_Mono } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import JsonLd from "@/components/JsonLd";
import { SITE_URL, organizationSchema, localBusinessSchema } from "@/lib/seo";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: "The Aviator Training School | Beyond Pilots. Shaping Aviators. | Trivandrum",
    template: "%s | The Aviator Training School",
  },
  description:
    "Evidence-first aviation training in Trivandrum, Kerala. Verified DGCA results every attempt. EASA CPL pathway via Goldwings Flight Academy, Poland. Founded Nov 2023.",
  keywords: [
    "aviation training Kerala",
    "pilot training Trivandrum",
    "CPL training India",
    "DGCA ground classes Kerala",
    "commercial pilot course India",
    "flight school Kerala",
    "EASA CPL India",
    "pilot training institute near TRV airport",
    "aviation academy Thiruvananthapuram",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "The Aviator Training School",
    title: "The Aviator Training School | Beyond Pilots. Shaping Aviators.",
    description:
      "Evidence-first aviation training. Verified DGCA results every attempt. EASA CPL via Poland. Trivandrum, Kerala.",
    locale: "en_IN",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TATS cadets and faculty — The Aviator Training School, Trivandrum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Aviator Training School | Beyond Pilots. Shaping Aviators.",
    description:
      "Evidence-first aviation training. Verified DGCA results every attempt. EASA CPL via Poland. Trivandrum, Kerala.",
    images: ["/images/og-image.jpg"],
  },
};

export const viewport: Viewport = {
  themeColor: "#05080f",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${spaceGrotesk.variable} ${shareTechMono.variable}`}>
      <body className="antialiased">
        <JsonLd data={[organizationSchema(), localBusinessSchema()]} />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
