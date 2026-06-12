import prisma from "@/lib/prisma";
import BlogSearchSection from "./BlogSearchSection";

export const metadata = {
  title: "Interior Design Journal | Vastu & Decor Tips | Karigor",
  description: "Read our expert tips on color psychology, Vastu-friendly room planning, modern modular kitchen trends, and budget-friendly luxury decoration ideas.",
};

const MOCK_BLOGS = [
  {
    id: "blog-1",
    title: "Vastu-Friendly Interiors: 5 Ancient Principles for Modern Homes",
    slug: "vastu-friendly-interiors-modern-homes",
    excerpt: "Discover how to balance the flow of energy in your apartment using Vastu guidelines for layout placement, directional alignment, and natural element balancing.",
    category: "Vastu-Friendly",
    tags: ["Vastu", "Home Decor", "Indian Culture"],
    coverImage: "/gallery-3.jpeg",
    createdAt: new Date("2026-05-10T10:00:00.000Z"),
  },
  {
    id: "blog-2",
    title: "The Ultimate Guide to Luxury Affordable Interiors",
    slug: "guide-luxury-affordable-interiors",
    excerpt: "How to achieve high-end editorial styling on a practical budget. Learn the designer secrets of material selection, focal lighting, and space layering.",
    category: "Affordable Luxury",
    tags: ["Budget Design", "Luxury", "Styling Tips"],
    coverImage: "/gallery-1.jpeg",
    createdAt: new Date("2026-05-18T10:00:00.000Z"),
  },
  {
    id: "blog-3",
    title: "Space-Saving Ideas for Compact Modern Apartments",
    slug: "space-saving-ideas-modern-apartments",
    excerpt: "Transform tiny floor plans with multifunctional custom furniture, hidden wall storages, and clever paint tricks that make rooms feel double their size.",
    category: "Space-Saving",
    tags: ["Apartment Living", "Space Planning", "Modular Furniture"],
    coverImage: "/gallery-5.jpg",
    createdAt: new Date("2026-05-24T10:00:00.000Z"),
  }
];

export default async function BlogPage() {
  let blogs = [];
  try {
    blogs = await prisma.blogPost.findMany({
      where: { published: true },
      orderBy: { createdAt: "desc" },
    });
    blogs = blogs.map(b => ({
      ...b,
      createdAt: b.createdAt.toISOString(),
      updatedAt: b.updatedAt.toISOString(),
    }));
  } catch (error) {
    console.warn("Database offline in Blog index page. Serving default Vastu and decor posts.", error.message);
    blogs = MOCK_BLOGS.map(b => ({
      ...b,
      createdAt: b.createdAt.toISOString(),
      updatedAt: b.createdAt.toISOString(),
    }));
  }

  // Gather categories
  const categories = ["All", ...new Set(blogs.map(b => b.category))];

  return (
    <main style={{ paddingTop: "100px" }}>
      {/* ─── HERO HEADER ─── */}
      <section style={{ background: "var(--cream)", padding: "80px 60px 60px" }}>
        <div className="reveal">
          <p className="section-label">Design Journal</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: "300", color: "var(--black)", lineHeight: "1.1", margin: 0 }}>
            Ideas &amp; <em>resources</em>.
          </h1>
        </div>
      </section>

      {/* ─── DYNAMIC BLOGS AREA ─── */}
      <BlogSearchSection initialBlogs={blogs} categories={categories} />
    </main>
  );
}
