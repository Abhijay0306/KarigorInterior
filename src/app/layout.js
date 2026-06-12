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
  title: "Karigor Interior",
  description: "A global luxury interior design studio. Spaces crafted for extraordinary living.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${jost.variable}`}>
      <body>
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
