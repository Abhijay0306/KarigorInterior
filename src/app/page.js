import prisma from "@/lib/prisma";
import Link from "next/link";
import Image from "next/image";
import GalleryLightbox from "@/components/GalleryLightbox";
import ContactForm from "@/components/ContactForm";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import BotanicalPattern from "@/components/BotanicalPattern";

// Fallbacks if database is offline during build/dev
const MOCK_PROJECTS = [
  {
    id: "mock-1",
    title: "The Grand Living Suite",
    slug: "editorial-living-room",
    category: "Living Room Design",
    style: "Modern Luxury",
    heroImage: "/img-living-3.jpeg",
    beforeImage: "/gallery-1.jpeg",
    afterImage: "/img-living-3.jpeg",
  },
  {
    id: "mock-2",
    title: "Luxury Modular Kitchen",
    slug: "charcoal-modular-kitchen",
    category: "Modular Kitchen",
    style: "Contemporary Minimalist",
    heroImage: "/img-kitchen-2.jpeg",
    beforeImage: "/gallery-4.jpg",
    afterImage: "/img-kitchen-2.jpeg",
  },
  {
    id: "mock-3",
    title: "Master Bedroom Sanctuary",
    slug: "mid-century-bedroom-suite",
    category: "Bedroom Design",
    style: "Contemporary Luxury",
    heroImage: "/img-bedroom-3.jpeg",
    beforeImage: "/gallery-2.jpeg",
    afterImage: "/img-bedroom-3.jpeg",
  }
];

const MOCK_BLOGS = [
  {
    id: "blog-1",
    title: "Vastu-Friendly Interiors: 5 Ancient Principles for Modern Homes",
    slug: "vastu-friendly-interiors-modern-homes",
    excerpt: "Discover how to balance the flow of energy in your apartment using Vastu guidelines.",
    category: "Vastu-Friendly",
    coverImage: "/img-dining.jpeg",
  },
  {
    id: "blog-2",
    title: "The Ultimate Guide to Luxury Affordable Interiors",
    slug: "guide-luxury-affordable-interiors",
    excerpt: "How to achieve high-end editorial styling on a practical budget.",
    category: "Affordable Luxury",
    coverImage: "/gallery-3.jpeg",
  }
];

const SERVICES_LIST = [
  {
    num: "01",
    slug: "residential-interior-design",
    title: "Residential Interior Design",
    desc: "Complete layouts designed for modern apartments. We translate your lifestyle into a curated editorial home.",
  },
  {
    num: "02",
    slug: "modular-kitchen",
    title: "Modular Kitchen Systems",
    desc: "Ergonomic modular kitchens utilizing soft-close hinges, quartz slabs, and customized dry pantry cabinets.",
  },
  {
    num: "03",
    slug: "bedroom-design",
    title: "Luxury Bedroom Design",
    desc: "Restful bedrooms featuring bespoke headboard woodworks, warm linear LED rails, and concealed wardrobe systems.",
  },
  {
    num: "04",
    slug: "living-room-design",
    title: "Living Room Design",
    desc: "A statement-making hub for hosting and rest, matching marble fireplace columns with plush linen seating layouts.",
  },
];

export default async function Home() {
  let featuredProjects = [];
  let latestBlogs = [];

  try {
    featuredProjects = await prisma.project.findMany({
      where: { published: true },
      take: 3,
      orderBy: { createdAt: "desc" },
    });
  } catch {
    featuredProjects = MOCK_PROJECTS;
  }

  try {
    latestBlogs = await prisma.blogPost.findMany({
      where: { published: true },
      take: 2,
      orderBy: { createdAt: "desc" },
    });
  } catch {
    latestBlogs = MOCK_BLOGS;
  }

  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="hero">
        <div className="hero-bg" style={{ overflow: "hidden" }}>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              zIndex: 0
            }}
          >
            <source src="/Hero_Video.mp4" type="video/mp4" />
          </video>
          {/* Overlay gradient for text readability */}
          <div 
            style={{ 
              position: "absolute", 
              inset: 0, 
              background: "linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 25%, transparent 50%)",
              zIndex: 1
            }} 
          />
        </div>
        <div className="hero-content">
          <p className="hero-eyebrow">INTERIOR DESIGN · ARCHITECTURE · PROJECT MANAGEMENT</p>
          <h1>Spaces crafted for<br /><em>extraordinary</em> living.</h1>
          <p className="hero-desc">Karigor Interior was founded on the belief that exceptional design should be within reach—delivered through a seamless integration of architecture, interiors, and project management within one cohesive studio.</p>
          <div className="hero-actions">
            <Link href="/services" className="btn-primary">SERVICES</Link>
            <Link href="/contact" className="btn-outline">ENQUIRE</Link>
          </div>
        </div>
        <div className="hero-scroll">Scroll</div>
      </section>

      {/* ─── MARQUEE ─── */}
      <div className="marquee-bar">
        <div className="marquee-track">
          <span className="marquee-item">Luxury Residences <span className="marquee-dot"></span></span>
          <span className="marquee-item">Commercial Interiors <span className="marquee-dot"></span></span>
          <span className="marquee-item">Architecture <span className="marquee-dot"></span></span>
          <span className="marquee-item">Bespoke Craftsmanship <span className="marquee-dot"></span></span>
          <span className="marquee-item">Project Management <span className="marquee-dot"></span></span>
          <span className="marquee-item">Hospitality Design <span className="marquee-dot"></span></span>
          <span className="marquee-item">International Projects <span className="marquee-dot"></span></span>
        </div>
      </div>

      {/* ─── INTRO / ABOUT ─── */}
      <section className="intro">
        <div className="intro-left">
          <div className="reveal">
            <p className="section-label">What We Do</p>
            <h2 className="section-title">Redefining luxury through <em>vision</em> and craft</h2>
          </div>
          <p className="intro-body reveal">
            Karigor Interior was founded on a profound appreciation for the fusion of creativity and thoughtful design — enveloped within a service that is as personal as it is professional. We believe that a beautifully crafted space is not a privilege reserved for the few, but a considered investment that every home and business deserves.
          </p>
          <p className="intro-body reveal" style={{ marginTop: "20px" }}>
            Guided by refined expertise, our designers span the creative disciplines — from interior architecture and space planning to project management and bespoke craftsmanship — working closely within your vision and budget to bring every project to fruition with artistry, transparency, and decades of mastery.
          </p>
          
          <div className="intro-stats reveal">
            <div>
              <div className="stat-num">10+</div>
              <div className="stat-label">Years of Excellence</div>
            </div>
            <div>
              <div className="stat-num">180+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div>
              <div className="stat-num">100%</div>
              <div className="stat-label">Client Satisfaction</div>
            </div>
          </div>
        </div>
        
        <div className="intro-right reveal">
          <div className="intro-image-block">
            <div className="img-card img-card-main" style={{ backgroundImage: "url('/img-living-3.jpeg')", backgroundSize: "cover", backgroundPosition: "center" }}>
            </div>
            <div className="img-card img-card-accent">
              <p className="img-card-accent-text">Craft, vision &amp; unrivalled expertise</p>
            </div>
            <div className="intro-tag">Est. 2014</div>
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC BEFORE/AFTER SHOWCASE ─── */}
      <section style={{ background: "var(--white)", padding: "120px 60px" }}>
        <div className="before-after-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "center" }}>
          <div>
            <p className="section-label">Renovations</p>
            <h2 className="section-title" style={{ marginBottom: "28px" }}>
              See the <em>difference</em>.
            </h2>
            <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(50,45,41,0.78)", marginBottom: "36px" }}>
              We transform dated spaces into modern luxury masterpieces. Use the slider tool to compare our structural adjustments, carpentry finish updates, and lighting renovations.
            </p>
            <Link href="/projects" className="btn-primary">View All Transformations</Link>
          </div>

          <div>
            <BeforeAfterSlider 
              beforeSrc="/before.png" 
              afterSrc="/after.png" 
              beforeAlt="Empty room — before Karigor Interior" 
              afterAlt="Transformed living room — after Karigor Interior" 
              height="450px"
            />
          </div>
        </div>
      </section>

      {/* ─── DYNAMIC FEATURED PORTFOLIO SHOWCASE ─── */}
      <section className="projects" style={{ borderTop: "1px solid var(--sand)" }}>
        <div className="projects-header reveal" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p className="section-label">Selected Works</p>
            <h2 className="section-title">Featured <em>portfolios</em></h2>
          </div>
          <Link href="/projects" className="btn-ghost" style={{ color: "var(--black)", borderColor: "var(--black)" }}>View Portfolio</Link>
        </div>

        <div className="projects-grid">
          {featuredProjects.slice(0, 3).map((project, index) => {
            const isLarge = index === 0;
            const bgClass = index === 0 ? "project-bg-1" : index === 1 ? "project-bg-2" : "project-bg-3";
            return (
              <div 
                key={project.id || index} 
                className={`project-card ${isLarge ? "project-card-large" : "project-card-sm"}`}
              >
                <div 
                  className={`project-bg ${bgClass}`}
                  style={{ backgroundImage: `url(${project.heroImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
                />
                <div className="project-lines"></div>
                <div className="project-overlay"></div>
                <div className="project-info">
                  <p className="project-location">{project.category}</p>
                  <h3 className="project-name">{project.title}</h3>
                  <Link href={`/projects/${project.slug}`} className="project-link">
                    View Details
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ─── STATIC GALLERY LIGHTBOX PREVIEW ─── */}
      <section style={{ background: "var(--cream)", padding: "120px 60px" }}>
        <div className="section-header-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }}>
          <div>
            <p className="section-label">Inspiration</p>
            <h2 className="section-title">Design <em>snaps</em></h2>
          </div>
          <Link href="/gallery" className="btn-ghost" style={{ color: "var(--black)", borderColor: "var(--black)" }}>Open Gallery</Link>
        </div>
        <GalleryLightbox />
      </section>

      {/* ─── SERVICES OVERVIEW ─── */}
      <section className="services">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
          <div>
            <p className="section-label">Core Specialties</p>
            <h2 className="section-title">A fully <em>integrated</em> studio</h2>
          </div>
          <Link href="/services" className="btn-ghost" style={{ color: "var(--cream)", borderColor: "rgba(239,233,225,0.4)" }}>View All Services</Link>
        </div>

        <div className="services-grid">
          {SERVICES_LIST.map((service, index) => (
            <div key={index} className="service-card reveal">
              <div className="service-num">{service.num}</div>
              <h3 className="service-title" style={{ fontSize: "22px" }}>{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <Link href={`/services/${service.slug}`} className="service-link">Learn More</Link>
            </div>
          ))}
        </div>
      </section>

      {/* ─── DYNAMIC BLOG JOURNAL HIGHLIGHTS ─── */}
      <section style={{ background: "var(--white)", padding: "120px 60px" }}>
        <div className="section-header-row" style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "60px" }}>
          <div>
            <p className="section-label">Design Journal</p>
            <h2 className="section-title">Latest <em>articles</em></h2>
          </div>
          <Link href="/blog" className="btn-ghost" style={{ color: "var(--black)", borderColor: "var(--black)" }}>Go To Blog</Link>
        </div>

        <div className="blog-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px" }}>
          {latestBlogs.slice(0, 2).map((blog) => (
            <Link 
              href={`/blog/${blog.slug}`} 
              key={blog.id} 
              style={{ textDecoration: "none", color: "inherit", display: "block" }}
              className="group"
            >
              <div style={{ position: "relative", height: "320px", width: "100%", overflow: "hidden", backgroundColor: "var(--sand)", marginBottom: "20px" }}>
                <Image
                  src={blog.coverImage}
                  alt={blog.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover", transition: "transform 0.4s ease" }}
                  className="hover-zoom-img"
                />
              </div>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--crimson)", display: "block", marginBottom: "6px" }}>
                {blog.category}
              </span>
              <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "26px", fontWeight: "400", margin: "0 0 10px" }}>
                {blog.title}
              </h3>
              <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(50,45,41,0.78)" }}>
                {blog.excerpt}
              </p>
            </Link>
          ))}
        </div>

      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section className="philosophy">
        <div className="philosophy-bg"></div>
        <div className="philosophy-lines"></div>
        <div className="philosophy-content">
          <blockquote className="philosophy-quote">
            <span className="reveal-line">
              <span>&quot;Luxury is not about excess — it is about intention.</span>
            </span>
            <span className="reveal-line">
              <span>We bring <em style={{ color: "var(--crimson)", fontStyle: "normal" }}>exceptional design</em> within reach,</span>
            </span>
            <span className="reveal-line">
              <span>crafting spaces that resonate with beauty, purpose, and enduring value.&quot;</span>
            </span>
          </blockquote>
          <p className="philosophy-attr reveal reveal-delay-2">Karigor Interior — Studio Philosophy</p>
        </div>
        <div className="philosophy-deco">&ldquo;</div>
      </section>

      {/* ─── CONTACT / FORM ─── */}
      <div className="cta-section" id="contact">
        <div className="cta-left" style={{ position: "relative", overflow: "hidden" }}>
          <Image
            src="/cta-left.png"
            alt="Interior Design Studio"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ objectFit: "cover", zIndex: 0 }}
          />
          <div 
            style={{ 
              position: "absolute", 
              inset: 0, 
              background: "linear-gradient(135deg, rgba(114,56,61,0.85) 0%, rgba(114,56,61,0.3) 100%)", 
              zIndex: 1 
            }} 
          />
          <div style={{ position: "relative", zIndex: 2 }}>
            <p className="cta-tag">Begin a Conversation</p>
            <h2 className="cta-title">Let&apos;s create something extraordinary.</h2>
            <p className="cta-sub">Interior Design · Architecture · Project Management</p>
          </div>
          <div style={{ position: "relative", zIndex: 2 }}>
            <p style={{ fontSize: "12px", color: "rgba(250,248,245,0.85)", letterSpacing: "0.1em", marginBottom: "8px" }}>Studio, Kolkata</p>
            <a href="mailto:karigorinterior55@gmail.com" style={{ display: "block", fontSize: "13px", color: "rgba(250,248,245,0.85)", letterSpacing: "0.05em", textDecoration: "none" }}>karigorinterior55@gmail.com</a>
            <a href="tel:+919748850377" style={{ display: "block", fontSize: "13px", color: "rgba(250,248,245,0.85)", letterSpacing: "0.05em", marginTop: "6px", textDecoration: "none" }}>+91 97488 50377</a>
            <a href="tel:+917439118283" style={{ display: "block", fontSize: "13px", color: "rgba(250,248,245,0.85)", letterSpacing: "0.05em", marginTop: "4px", textDecoration: "none" }}>+91 74391 18283</a>
          </div>
        </div>
        <div className="cta-right">
          <h3 className="cta-right-title">Make an enquiry</h3>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
