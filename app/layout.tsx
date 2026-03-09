import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import { ConsentBanner } from "@/components/ConsentBanner";
import { LenisProvider } from "@/components/LenisProvider";
import { LoaderGate } from "@/components/LoaderGate";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai.adzzat.com";
const OG_IMAGE_PATH = "/og.png";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "Adzzat | Frontier AI Data for Foundation Models",
  description:
    "Expert-curated datasets for complex reasoning and agentic workflows. Pipeline-ready data for Y-Combinator backed labs—RLHF, SFT, agentic traces, and simulation environments. DPDP compliant.",
  keywords: [
    "AI training data",
    "foundation models",
    "RLHF",
    "agentic workflows",
    "ML data",
    "Adzzat",
  ],
  authors: [{ name: "Adzzat" }],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: "Adzzat",
    title: "Adzzat | Frontier AI Data for Foundation Models",
    description:
      "Expert-curated datasets for complex reasoning and agentic workflows. Pipeline-ready data for YC-backed labs—RLHF, SFT, agentic traces, simulation. DPDP compliant.",
    images: [
      {
        url: OG_IMAGE_PATH.startsWith("http") ? OG_IMAGE_PATH : `${SITE_URL}${OG_IMAGE_PATH}`,
        width: 1200,
        height: 630,
        alt: "Adzzat - Frontier AI Data",
      },
    ],
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Adzzat | Frontier AI Data for Foundation Models",
    description:
      "Expert-curated datasets for complex reasoning and agentic workflows. Pipeline-ready data for YC-backed labs. DPDP compliant.",
    images: [OG_IMAGE_PATH.startsWith("http") ? OG_IMAGE_PATH : `${SITE_URL}${OG_IMAGE_PATH}`],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Apply theme before paint (prevents flash) - defaults to dark */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(() => {
  try {
    const saved = localStorage.getItem("theme");
    const theme = saved || "dark";
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  } catch (_) {}
})();`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} antialiased dark overflow-x-hidden`}
      >
        <LenisProvider>
          <LoaderGate>{children}</LoaderGate>
          <ConsentBanner />
        </LenisProvider>
      </body>
    </html>
  );
}
