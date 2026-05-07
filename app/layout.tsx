import type { Metadata } from "next";
import "./globals.css";
import SonnerToaster from "../components/sonner-toaster";

export const metadata: Metadata = {
  title: "Aether | Michelin Star Restaurant — Fine Dining Experience",
  description: "An extraordinary culinary journey at Aether. A 3-Michelin starred restaurant in the heart of Paris. Experience world-class gastronomy, exquisite wine pairings, and unmatched ambiance.",
  icons: {
    icon: "/favicon.ico",
  },
  keywords: [
    "Michelin star restaurant",
    "fine dining",
    "luxury restaurant",
    "gourmet experience",
    "Paris fine dining",
    "3 Michelin stars",
    "chef tasting menu",
    "wine pairing",
    "Michelin starred chef",
  ],
  authors: [{ name: "Aether Restaurant" }],
  openGraph: {
    title: "Aether | 3-Michelin Star Restaurant",
    description: "Experience extraordinary fine dining. A cinematic culinary journey awaits at Aether — 3 Michelin stars, Paris.",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Aether - Michelin Star Restaurant",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aether | 3-Michelin Star Restaurant",
    description: "An exquisite fine dining experience in the heart of Paris.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Restaurant",
  name: "Aether",
  description: "3-Michelin starred restaurant offering an extraordinary culinary journey",
  address: {
    "@type": "PostalAddress",
    streetAddress: "18 Rue de la Paix",
    addressLocality: "Paris",
    postalCode: "75002",
    addressCountry: "FR",
  },
  telephone: "+33144555655",
  url: "https://aether-restaurant.com",
  image: "https://aether-restaurant.com/og-image.svg",
  starRating: {
    "@type": "Rating",
    ratingValue: "5",
    bestRating: "5",
  },
  priceRange: "€€€€",
  servesCuisine: ["French", "Contemporary", "Tasting Menu"],
  hasMenu: {
    "@type": "Menu",
    name: "Signature Tasting Menu",
    description: "A 12-course journey through seasonal ingredients and masterful technique",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className="min-h-full bg-[#0B0B0B] font-sans text-[#F5F1E8]"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <SonnerToaster />
      </body>
    </html>
  );
}
