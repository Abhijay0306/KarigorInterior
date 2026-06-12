import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Interior Design Services | Modular Kitchen, Bedrooms, Offices",
  description: "Browse our turnkey interior design services in Kolkata. From luxury modular kitchens to residential planning and custom furniture designs.",
};

const SERVICES_LIST = [
  {
    num: "01",
    slug: "residential-interior-design",
    title: "Residential Interior Design",
    desc: "Bespoke full-home or room-specific layouts designed for modern living. We translate your lifestyle needs into a curated editorial home.",
    image: "/gallery-1.jpeg"
  },
  {
    num: "02",
    slug: "modular-kitchen",
    title: "Modular Kitchen Systems",
    desc: "Ergonomic, highly functional, and seamless German-style modular kitchens utilizing soft-close mechanisms, smart pantries, and quartz worktops.",
    image: "/gallery-2.jpeg"
  },
  {
    num: "03",
    slug: "bedroom-design",
    title: "Luxury Bedroom Design",
    desc: "Restful sanctuaries built around bespoke wall paneling, atmospheric indirect lighting configurations, and integrated closet systems.",
    image: "/gallery-3.jpeg"
  },
  {
    num: "04",
    slug: "living-room-design",
    title: "Living Room Design",
    desc: "A statement-making hub for hosting and relaxation, using curated textures, focal fireplaces/media units, and custom layouts.",
    image: "/hero.jpg"
  },
  {
    num: "05",
    slug: "office-interior",
    title: "Office & Commercial Interiors",
    desc: "Boost workplace productivity and elevate your brand image with designed workspaces, meeting rooms, and collaborative zones.",
    image: "/gallery-8.jpeg"
  },
  {
    num: "06",
    slug: "renovation",
    title: "Renovation & Remodeling",
    desc: "Breathing new life into old spaces. We handle structural changes, bathroom updates, and complete surface transformations.",
    image: "/gallery-7.jpeg"
  },
  {
    num: "07",
    slug: "space-planning",
    title: "Space Planning & 2D Layouts",
    desc: "Scale-accurate architectural zoning and layout mapping. We optimize circulation flows before purchasing any furniture.",
    image: "/section2.jpeg"
  },
  {
    num: "08",
    slug: "custom-furniture",
    title: "Custom Furniture & Millwork",
    desc: "Handcrafted beds, dining tables, sideboards, and floating vanities constructed from seasoned marine plywood in our local workshops.",
    image: "/gallery-5.jpg"
  },
  {
    num: "09",
    slug: "turnkey-solutions",
    title: "Turnkey Design & Execution",
    desc: "Stress-free design management. We handle 3D visuals, material procurement, contracting work, site supervision, and final handover.",
    image: "/gallery-6.jpg"
  },
];

export default function Services() {
  return (
    <main style={{ paddingTop: "100px" }}>
      {/* ─── HERO ─── */}
      <section style={{ background: "var(--cream)", padding: "80px 60px 60px" }}>
        <div className="reveal">
          <p className="section-label">Our Expertise</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: "300", color: "var(--black)", lineHeight: "1.1", marginBottom: "24px" }}>
            Fully integrated <br /><em>design &amp; build</em> services.
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(50,45,41,0.78)", maxWidth: "600px" }}>
            Explore our range of design specialties. We deliver custom furniture, full-home transformations, and high-performance modular setups.
          </p>
        </div>
      </section>

      {/* ─── GRID OF SERVICES ─── */}
      <section style={{ padding: "100px 60px", background: "var(--white)" }}>
        <div className="services-page-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", background: "var(--sand)" }}>
          {SERVICES_LIST.map((service) => (
            <Link 
              key={service.slug} 
              href={`/services/${service.slug}`}
              style={{ 
                background: "var(--white)", 
                padding: "32px", 
                position: "relative",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                minHeight: "480px",
                textDecoration: "none",
                color: "inherit"
              }}
            >
              <div>
                <div style={{ position: "relative", width: "100%", height: "220px", overflow: "hidden", marginBottom: "24px" }}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    style={{ objectFit: "cover" }}
                  />
                  <div 
                    style={{ 
                      fontFamily: "var(--font-cormorant)", 
                      fontSize: "56px", 
                      color: "rgba(255, 255, 255, 0.8)", 
                      position: "absolute", 
                      top: "12px", 
                      right: "16px",
                      lineHeight: 1,
                      zIndex: 2,
                      textShadow: "0 2px 4px rgba(0,0,0,0.4)"
                    }}
                  >
                    {service.num}
                  </div>
                </div>

                <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "24px", fontWeight: "400", color: "var(--black)", marginBottom: "12px", lineHeight: "1.2" }}>
                  {service.title}
                </h2>
                <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(50,45,41,0.78)", marginBottom: "32px" }}>
                  {service.desc}
                </p>
              </div>

              <div 
                style={{ 
                  fontSize: "11px", 
                  letterSpacing: "0.25em", 
                  textTransform: "uppercase", 
                  color: "var(--crimson)", 
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  fontWeight: "400"
                }}
              >
                Explore Service &rarr;
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ─── WORKFLOW SECTION ─── */}
      <section style={{ background: "var(--black)", color: "var(--cream)", padding: "120px 60px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "relative", zIndex: 1, maxWidth: "600px", marginBottom: "80px" }}>
          <p className="section-label" style={{ color: "var(--taupe)" }}>The Process</p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "44px", fontWeight: "300", color: "var(--white)" }}>How we bring <em>vision</em> to life</h2>
        </div>

        <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "40px", position: "relative", zIndex: 1 }}>
          <div>
            <span style={{ fontSize: "18px", fontFamily: "var(--font-cormorant)", color: "var(--white)", letterSpacing: "0.05em" }}>01 / CONSULTATION</span>
            <h4 style={{ fontFamily: "var(--font-cormorant)", fontSize: "20px", fontWeight: "400", margin: "12px 0 8px" }}>Zoning &amp; Budgeting</h4>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--taupe)" }}>
              We review your floorplan, analyze natural light angles, Vastu direction maps, and set a strict material cost budget.
            </p>
          </div>
          <div>
            <span style={{ fontSize: "18px", fontFamily: "var(--font-cormorant)", color: "var(--white)", letterSpacing: "0.05em" }}>02 / DESIGN</span>
            <h4 style={{ fontFamily: "var(--font-cormorant)", fontSize: "20px", fontWeight: "400", margin: "12px 0 8px" }}>3D &amp; Moodboards</h4>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--taupe)" }}>
              Our team prepares high-fidelity 3D renders and presents physically curated material trays (veneers, quartz, fabric swatches).
            </p>
          </div>
          <div>
            <span style={{ fontSize: "18px", fontFamily: "var(--font-cormorant)", color: "var(--white)", letterSpacing: "0.05em" }}>03 / PRODUCTION</span>
            <h4 style={{ fontFamily: "var(--font-cormorant)", fontSize: "20px", fontWeight: "400", margin: "12px 0 8px" }}>Millwork Crafting</h4>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--taupe)" }}>
              Bespoke furniture and modular panels are built under millimeter precision controls within our specialized workshops.
            </p>
          </div>
          <div>
            <span style={{ fontSize: "18px", fontFamily: "var(--font-cormorant)", color: "var(--white)", letterSpacing: "0.05em" }}>04 / INSTALLATION</span>
            <h4 style={{ fontFamily: "var(--font-cormorant)", fontSize: "20px", fontWeight: "400", margin: "12px 0 8px" }}>Handover</h4>
            <p style={{ fontSize: "14px", lineHeight: "1.6", color: "var(--taupe)" }}>
              We install cabinetry, style soft furnishings, verify finishing detail tolerances, and clean up for final layout handover.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
