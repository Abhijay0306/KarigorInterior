"use client";

import { useState, useEffect, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

const defaultGalleryItems = [
  // New portfolio images
  { id: 1,  src: "/img-living-3.jpeg",  alt: "Elegant Living Room with Moulded Walls" },
  { id: 2,  src: "/img-dining.jpeg",    alt: "Luxury Dining Room with Gold Chandelier" },
  { id: 3,  src: "/img-bedroom-3.jpeg", alt: "Master Bedroom with Teal Accents" },
  { id: 4,  src: "/img-kitchen-2.jpeg", alt: "Modular Kitchen with Smart Appliances" },
  { id: 5,  src: "/img-living-4.jpeg",  alt: "Daytime Living Room with Natural Light" },
  { id: 6,  src: "/img-bedroom-1.jpeg", alt: "Contemporary Bedroom with Walk-in Wardrobe" },
  { id: 7,  src: "/img-foyer.jpeg",     alt: "Modern Foyer with Circular Mirror" },
  { id: 8,  src: "/img-kitchen-1.jpeg", alt: "L-Shaped Modular Kitchen in Grey" },
  { id: 9,  src: "/img-living-2.jpeg",  alt: "Living Room with French Mouldings" },
  { id: 10, src: "/img-bedroom-2.jpeg", alt: "Youth Bedroom with Pastel Tones" },
  { id: 11, src: "/img-living-1.jpeg",  alt: "TV Unit Living Room Design" },
  // Original gallery images
  { id: 12, src: "/gallery-1.jpeg",    alt: "Karigor Interior — Portfolio" },
  { id: 13, src: "/gallery-2.jpeg",    alt: "Karigor Interior — Portfolio" },
  { id: 14, src: "/gallery-3.jpeg",    alt: "Karigor Interior — Portfolio" },
  { id: 15, src: "/gallery-4.jpg",     alt: "Karigor Interior — Portfolio" },
  { id: 16, src: "/gallery-5.jpg",     alt: "Karigor Interior — Portfolio" },
  { id: 17, src: "/gallery-6.jpg",     alt: "Karigor Interior — Portfolio" },
  { id: 18, src: "/gallery-7.jpeg",    alt: "Karigor Interior — Portfolio" },
  { id: 19, src: "/gallery-8.jpeg",    alt: "Karigor Interior — Portfolio" },
];

export default function GalleryLightbox({ images }) {
  const [active, setActive] = useState(null); // index or null
  const [mounted, setMounted] = useState(false);
  
  const galleryItems = images && images.length > 0 ? images : defaultGalleryItems;

  const close = useCallback(() => setActive(null), []);

  const prev = useCallback((e) => {
    e.stopPropagation();
    setActive((i) => (i - 1 + galleryItems.length) % galleryItems.length);
  }, [galleryItems]);

  const next = useCallback((e) => {
    e.stopPropagation();
    setActive((i) => (i + 1) % galleryItems.length);
  }, [galleryItems]);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") setActive((i) => (i - 1 + galleryItems.length) % galleryItems.length);
      if (e.key === "ArrowRight") setActive((i) => (i + 1) % galleryItems.length);
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active, close, galleryItems]);

  // Create row contents with mapping back to original array indexes
  const row1 = [
    ...galleryItems.slice(0, 4),
    ...galleryItems.slice(0, 4),
    ...galleryItems.slice(0, 4),
    ...galleryItems.slice(0, 4)
  ].map((item, idx) => ({
    ...item,
    globalIndex: galleryItems.findIndex(g => g.src === item.src)
  }));
  
  const row2 = [
    ...galleryItems.slice(4, 8),
    ...galleryItems.slice(4, 8),
    ...galleryItems.slice(4, 8),
    ...galleryItems.slice(4, 8)
  ].map((item, idx) => ({
    ...item,
    globalIndex: galleryItems.findIndex(g => g.src === item.src)
  }));

  const renderLightbox = () => {
    if (active === null || !galleryItems[active] || !mounted) return null;

    const content = (
      <div className="lightbox-overlay" onClick={close} style={{ position: "fixed", inset: 0, zIndex: 99999, background: "rgba(0,0,0,0.92)", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <button className="lightbox-close" onClick={close} aria-label="Close" style={{ position: "absolute", top: "20px", right: "24px", background: "none", border: "none", color: "rgba(255,255,255,0.7)", fontSize: "28px", cursor: "pointer", zIndex: 10 }}>✕</button>

        <button className="lightbox-arrow lightbox-arrow-prev" onClick={prev} aria-label="Previous" style={{ position: "absolute", left: "20px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: "32px", cursor: "pointer", zIndex: 10 }}>&#8592;</button>

        <div className="lightbox-img-wrap" onClick={(e) => e.stopPropagation()} style={{ position: "relative", width: "min(90vw, 1100px)", height: "min(85vh, 780px)" }}>
          <Image
            src={galleryItems[active].src}
            alt={galleryItems[active].alt || "Karigor Portfolio Showcase"}
            fill
            sizes="100vw"
            style={{ objectFit: "contain" }}
            priority
          />
        </div>

        <button className="lightbox-arrow lightbox-arrow-next" onClick={next} aria-label="Next" style={{ position: "absolute", right: "20px", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "rgba(255,255,255,0.6)", fontSize: "32px", cursor: "pointer", zIndex: 10 }}>&#8594;</button>

        <p className="lightbox-counter" style={{ position: "absolute", bottom: "20px", left: "50%", transform: "translateX(-50%)", fontSize: "12px", letterSpacing: "0.2em", color: "rgba(255,255,255,0.4)" }}>{active + 1} / {galleryItems.length}</p>
      </div>
    );

    return createPortal(content, document.body);
  };

  return (
    <>
      <div className="gallery-carousel-wrapper">
        {/* Row 1 (scrolls left) */}
        <div className="gallery-carousel-row row-left">
          <div className="gallery-carousel-track">
            {row1.map((item, index) => (
              <div
                key={`r1-${index}`}
                className="gallery-carousel-item"
                style={{ position: "relative" }}
                onClick={() => setActive(item.globalIndex)}
                tabIndex={0}
                role="button"
                aria-label={`Open photo lightbox for ${item.alt || "Karigor Portfolio"}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(item.globalIndex);
                  }
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt || "Karigor Portfolio"}
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 (scrolls right) */}
        <div className="gallery-carousel-row row-right" style={{ marginTop: "24px" }}>
          <div className="gallery-carousel-track">
            {row2.map((item, index) => (
              <div
                key={`r2-${index}`}
                className="gallery-carousel-item"
                style={{ position: "relative" }}
                onClick={() => setActive(item.globalIndex)}
                tabIndex={0}
                role="button"
                aria-label={`Open photo lightbox for ${item.alt || "Karigor Portfolio"}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setActive(item.globalIndex);
                  }
                }}
              >
                <Image
                  src={item.src}
                  alt={item.alt || "Karigor Portfolio"}
                  fill
                  sizes="(max-width: 768px) 33vw, 20vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {renderLightbox()}
    </>
  );
}
