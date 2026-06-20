"use client";

import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function ScrollTriggerManager() {
  const pathname = usePathname();

  useGSAP(() => {
    // 1. Clear any existing ScrollTriggers to prevent duplicate triggers on navigation
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // 2. Animate all elements with '.reveal' class (headings, blocks)
    const reveals = gsap.utils.toArray(".reveal");
    reveals.forEach((el) => {
      // Set initial styles via GSAP to avoid flash of unstyled content
      gsap.set(el, { opacity: 0, y: 36 });
      
      gsap.to(el, {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      });
    });

    // 3. Staggered reveal for grid items and cards
    const grids = [
      { selector: ".projects-grid", items: ".project-card" },
      { selector: ".services-grid", items: ".service-card" },
      { selector: ".blog-grid", items: ".group" },
      { selector: ".services-page-grid", items: "a" },
    ];

    grids.forEach(({ selector, items }) => {
      const grid = document.querySelector(selector);
      if (grid) {
        const cards = gsap.utils.toArray(items, grid);
        if (cards.length > 0) {
          gsap.set(cards, { opacity: 0, y: 44 });
          
          gsap.to(cards, {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: grid,
              start: "top 84%",
              toggleActions: "play none none none",
            },
          });
        }
      }
    });

    // 4. Staggered intro stats reveal (Intro section on home and about pages)
    const statsGrid = document.querySelector(".intro-stats");
    if (statsGrid) {
      const stats = gsap.utils.toArray(".intro-stats > div", statsGrid);
      if (stats.length > 0) {
        gsap.set(stats, { opacity: 0, y: 30 });
        
        gsap.to(stats, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: statsGrid,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
    }

    // 5. Special staggered about page pillars reveal
    const pillarsGrid = document.querySelector(".about-pillars-grid");
    if (pillarsGrid) {
      const pillars = gsap.utils.toArray(".about-pillar-card", pillarsGrid);
      if (pillars.length > 0) {
        gsap.set(pillars, { opacity: 0, y: 40 });
        
        gsap.to(pillars, {
          opacity: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: pillarsGrid,
            start: "top 88%",
            toggleActions: "play none none none",
          },
        });
      }
    }

    // 6. Staggered reveal for philosophy quote lines
    const quote = document.querySelector(".philosophy-quote");
    if (quote) {
      const lines = gsap.utils.toArray(".reveal-line > span", quote);
      if (lines.length > 0) {
        gsap.set(lines, { yPercent: 110 });
        
        gsap.to(lines, {
          yPercent: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quote,
            start: "top 86%",
            toggleActions: "play none none none",
          },
        });
      }
    }

    // Refresh scroll triggers after setting up everything
    ScrollTrigger.refresh();
  }, { dependencies: [pathname], revertOnUpdate: true });

  return null;
}
