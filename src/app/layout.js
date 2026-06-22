import { Cormorant_Garamond, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollTriggerManager from "@/components/ScrollTriggerManager";
import PageTransition from "@/components/PageTransition";
import SmoothScroll from "@/components/SmoothScroll";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const jost = Jost({
  weight: ["200", "300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-jost",
});

export const metadata = {
  title: "Interior Designer in Kolkata | Affordable Luxury Home Design | Karigor Interior",
  description: "Award-winning interior design studio in Kolkata delivering affordable luxury residences, modular kitchens, and turnkey renovations since 2014. Book a free consultation.",
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "InteriorDesigner",
    "name": "Karigor Interior",
    "url": "https://karigorinterior.com/",
    "telephone": "+91 97488 50377",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Kolkata",
      "addressRegion": "West Bengal",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 22.5726,
      "longitude": 88.3639
    },
    "openingHours": "Mo,Tu,We,Th,Fr 10:00-19:00",
    "priceRange": "₹₹₹",
    "sameAs": [
      "https://www.instagram.com/karigorinterior/"
    ]
  };

  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ScrollTriggerManager />
        <PageTransition />
        <SmoothScroll />
        <Header />
        <div className="page-content">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
