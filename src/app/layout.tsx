import type { Metadata, Viewport } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";

/* ─── Font setup ─────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-manrope",
  display: "swap",
});

/* ─── SEO Metadata ───────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "AELLA BY AYA — Luxury Skincare, Coming Soon",
  description:
    "Discover a new standard of luxury skincare. Crafted with pristine ingredients to reveal your skin's innate luminescence. AELLA BY AYA — arriving soon.",
  keywords: ["luxury skincare", "cosmetics", "beauty brand", "Aella", "Aya", "coming soon"],
  authors: [{ name: "AELLA BY AYA" }],
  openGraph: {
    title: "AELLA BY AYA — Luxury Skincare",
    description: "L'essence de la beauté naturelle. Coming soon.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AELLA BY AYA — Luxury Skincare",
    description: "L'essence de la beauté naturelle. Coming soon.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#fff8f4",
};

/* ─── Root Layout ─────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable}`}>
      <body className="nacre-bg text-on-surface min-h-screen flex flex-col antialiased">
        {children}
      </body>
    </html>
  );
}
