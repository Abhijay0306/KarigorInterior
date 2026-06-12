import prisma from "@/lib/prisma";
import Image from "next/image";
import Link from "next/link";
import ProjectsFilterSection from "./ProjectsFilterSection";

export const metadata = {
  title: "Interior Design Portfolio | Luxury Showcases | Karigor",
  description: "Explore our finished residential interior designs, modular kitchen models, space designs, and customized cabinetry solutions in Kolkata.",
};

// Fallback project data if database connection fails
const MOCK_PROJECTS = [
  {
    id: "mock-1",
    title: "The Editorial Living Room",
    slug: "editorial-living-room",
    description: "A luxury minimalist living room designed for comfort and hosting, utilizing warm oak tones and soft boucle fabrics.",
    category: "Living Room Design",
    style: "Modern Luxury",
    budget: "Affordable Luxury",
    materials: "Travertine, French Oak, Boucle Fabric, Brushed Brass",
    heroImage: "/gallery-1.jpeg",
    galleryImages: ["/gallery-2.jpeg", "/gallery-3.jpeg"],
    beforeImage: "/gallery-7.jpeg",
    afterImage: "/gallery-1.jpeg",
    published: true,
    createdAt: new Date(),
  },
  {
    id: "mock-2",
    title: "Sleek Charcoal Modular Kitchen",
    slug: "charcoal-modular-kitchen",
    description: "A high-performance modular kitchen with seamless anti-fingerprint surfaces, hidden pantry systems, and premium Vastu-friendly layouts.",
    category: "Modular Kitchen",
    style: "Contemporary Minimalist",
    budget: "Premium",
    materials: "Quartz Countertops, Acrylic Cabinets, Integrated LED Lighting",
    heroImage: "/gallery-4.jpg",
    galleryImages: ["/gallery-5.jpg", "/gallery-6.jpg"],
    beforeImage: "/gallery-8.jpeg",
    afterImage: "/gallery-4.jpg",
    published: true,
    createdAt: new Date(),
  },
  {
    id: "mock-3",
    title: "Mid-Century Modern Bedroom Suite",
    slug: "mid-century-bedroom-suite",
    description: "A warm and inviting bedroom suite focusing on walnut paneling, soft atmospheric lighting, and space-saving built-in wardrobes.",
    category: "Bedroom Design",
    style: "Mid-Century Modern",
    budget: "Affordable Luxury",
    materials: "Walnut Veneer, Velvet Upholstery, Terrazzo Side Tables",
    heroImage: "/gallery-2.jpeg",
    galleryImages: ["/gallery-1.jpeg", "/gallery-3.jpeg"],
    beforeImage: null,
    afterImage: null,
    published: true,
    createdAt: new Date(),
  }
];

export default async function ProjectsPage() {
  let projects = [];
  try {
    projects = await prisma.project.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    // Serialize date objects for client components
    projects = projects.map(p => ({
      ...p,
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.warn("Database connection offline in Projects Page. Serving fallbacks.", error.message);
    projects = MOCK_PROJECTS.map(p => ({
      ...p,
      createdAt: p.createdAt.toISOString(),
      updatedAt: p.createdAt.toISOString(),
    }));
  }

  // Extract categories dynamically
  const categories = ["All", ...new Set(projects.map(p => p.category))];

  return (
    <main style={{ paddingTop: "100px" }}>
      {/* ─── TITLE BANNER ─── */}
      <section style={{ background: "var(--cream)", padding: "80px 60px 60px" }}>
        <div className="reveal">
          <p className="section-label">Selected Works</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: "300", color: "var(--black)", lineHeight: "1.1", margin: 0 }}>
            Our design <em>portfolio</em>.
          </h1>
        </div>
      </section>

      {/* ─── DYNAMIC FILTER GRID ─── */}
      <ProjectsFilterSection initialProjects={projects} categories={categories} />
    </main>
  );
}
