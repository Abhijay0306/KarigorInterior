import prisma from "@/lib/prisma";
import GalleryGridSection from "./GalleryGridSection";

export const metadata = {
  title: "Interior Design Media Gallery | Karigor Studio",
  description: "Browse high-resolution photographs of our modular kitchens, living rooms, bedrooms, and commercial spaces. Open interactive image lightbox.",
};

const MOCK_PROJECTS = [
  {
    category: "Living Room Design",
    heroImage: "/img-living-3.jpeg",
    galleryImages: ["/img-living-2.jpeg", "/img-living-4.jpeg", "/img-living-1.jpeg", "/gallery-1.jpeg", "/gallery-5.jpg", "/gallery-6.jpg"],
  },
  {
    category: "Modular Kitchen",
    heroImage: "/img-kitchen-2.jpeg",
    galleryImages: ["/img-kitchen-1.jpeg", "/gallery-4.jpg"],
  },
  {
    category: "Bedroom Design",
    heroImage: "/img-bedroom-3.jpeg",
    galleryImages: ["/img-bedroom-1.jpeg", "/img-bedroom-2.jpeg", "/gallery-2.jpeg", "/gallery-3.jpeg"],
  },
  {
    category: "Dining Room",
    heroImage: "/img-dining.jpeg",
    galleryImages: ["/gallery-7.jpeg"],
  },
  {
    category: "Foyer & Entrance",
    heroImage: "/img-foyer.jpeg",
    galleryImages: ["/gallery-8.jpeg"],
  },
];

export default async function GalleryPage() {
  let projects = [];
  try {
    projects = await prisma.project.findMany({
      where: { published: true },
      select: {
        category: true,
        heroImage: true,
        galleryImages: true,
      }
    });
  } catch (error) {
    console.warn("Database connection offline in Gallery Page. Serving mock images.", error.message);
    projects = MOCK_PROJECTS;
  }

  // Aggregate all images across projects
  const images = [];
  projects.forEach((proj) => {
    // Add hero image
    if (proj.heroImage) {
      images.push({
        src: proj.heroImage,
        alt: `${proj.category} Design Idea`,
        category: proj.category,
      });
    }
    // Add gallery images
    if (proj.galleryImages && Array.isArray(proj.galleryImages)) {
      proj.galleryImages.forEach((img) => {
        images.push({
          src: img,
          alt: `${proj.category} Design Detail`,
          category: proj.category,
        });
      });
    }
  });

  // Unique categories list
  const categories = ["All", ...new Set(images.map(img => img.category))];

  return (
    <main style={{ paddingTop: "100px" }}>
      {/* ─── HERO HEADER ─── */}
      <section style={{ background: "var(--cream)", padding: "80px 60px 60px" }}>
        <div className="reveal">
          <p className="section-label">Media Showcase</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: "300", color: "var(--black)", lineHeight: "1.1", margin: 0 }}>
            Visual <em>inspiration</em>.
          </h1>
        </div>
      </section>

      {/* ─── GALLERY WRAPPER ─── */}
      <GalleryGridSection allImages={images} categories={categories} />
    </main>
  );
}
