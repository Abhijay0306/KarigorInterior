import Image from "next/image";
import Link from "next/link";
import BotanicalPattern from "@/components/BotanicalPattern";

export const metadata = {
  title: "About Karigor Studio | High-End Affordable Interior Design",
  description: "Learn about the brand story, design philosophy, and leadership of Karigor Interior, delivering premium luxury interiors at accessible price points.",
};

export default function About() {
  return (
    <main style={{ paddingTop: "100px" }}>
      {/* ─── HERO ─── */}
      <section className="about-hero" style={{ background: "var(--cream)", padding: "80px 60px 60px" }}>
        <div className="reveal visible" style={{ maxWidth: "800px" }}>
          <p className="section-label">Our Story</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: "300", color: "var(--black)", lineHeight: "1.1", marginBottom: "24px" }}>
            Uncompromising craft. <br /><em>Accessible</em> luxury.
          </h1>
          <p style={{ fontSize: "18px", lineHeight: "1.8", color: "rgba(50,45,41,0.78)", maxWidth: "720px" }}>
            Karigor Interior was founded to challenge the notion that high-end design belongs only to the few. We craft spaces that marry luxury aesthetics with absolute budget transparency.
          </p>
        </div>
      </section>

      {/* ─── FOUNDER PROFILE ─── */}
      <section className="about-profile-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "center", padding: "120px 60px" }}>
        <div className="about-profile-img" style={{ position: "relative", height: "750px", width: "100%", background: "var(--cream)", overflow: "hidden" }}>
          <Image
            src="/Sangita Banerjee.png"
            alt="Sangeeta Banerjee, Founder and Principal Designer of Karigor Interior"
            fill
            sizes="(max-width: 600px) 100vw, (max-width: 900px) 100vw, 45vw"
            style={{ objectFit: "cover", objectPosition: "center center" }}
            priority
          />
          <div style={{ position: "absolute", bottom: "0", right: "0", background: "var(--crimson)", color: "var(--white)", padding: "16px 28px", fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", zIndex: 2 }}>
            Est. 2014 / Kolkata
          </div>
        </div>

        <div className="reveal visible">
          <p className="section-label">Creative Leadership</p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: "300", marginBottom: "20px" }}>
            Crafted under the vision of <em>Sangeeta Banerjee</em>
          </h2>
          <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(50,45,41,0.78)", marginBottom: "16px" }}>
            As Founder and Principal Designer, Sangeeta Banerjee envisioned a studio where the finest details of architectural planning, Vastu compliance, and custom carpentry could converge under a single, client-focused workflow.
          </p>
          <p style={{ fontSize: "16px", lineHeight: "1.9", color: "rgba(50,45,41,0.78)", marginBottom: "24px" }}>
            Over the past decade, the Karigor team has delivered more than 180 high-end projects across Kolkata and neighboring regions. By partnering directly with premium workshops and modular systems developers, the studio bypasses intermediate markups to pass substantial savings directly onto homeowners.
          </p>

          <div className="about-mission-vision" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "24px", paddingTop: "24px", borderTop: "1px solid var(--sand)" }}>
            <div>
              <h4 style={{ fontFamily: "var(--font-cormorant)", fontSize: "20px", fontWeight: "400", color: "var(--crimson)", marginBottom: "8px" }}>Our Mission</h4>
              <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(50,45,41,0.78)" }}>
                To democratize luxury design through material innovation, structural transparency, and client-centric workflows.
              </p>
            </div>
            <div>
              <h4 style={{ fontFamily: "var(--font-cormorant)", fontSize: "20px", fontWeight: "400", color: "var(--crimson)", marginBottom: "8px" }}>Our Vision</h4>
              <p style={{ fontSize: "14px", lineHeight: "1.7", color: "rgba(50,45,41,0.78)" }}>
                To become the leading luxury-value residential studio globally, proving that high design can be built sustainably.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY ─── */}
      <section id="philosophy" style={{ position: "relative", background: "var(--black)", padding: "140px 60px", overflow: "hidden", color: "var(--cream)" }}>
        <BotanicalPattern opacity={0.08} color="#AC9C8D" id="about-philosophy" />
        <div style={{ position: "relative", zIndex: 2, maxWidth: "800px" }}>
          <p className="section-label" style={{ color: "var(--taupe)" }}>Design Philosophy</p>
          <blockquote style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(26px, 3.5vw, 44px)", fontWeight: "300", fontStyle: "italic", lineHeight: "1.5", marginBottom: "36px" }}>
            &quot;A home should not be a monument to a designer&apos;s ego. It must be an organic extension of the client&apos;s lifestyle, organized with Vastu harmony and constructed with materials that stand the test of decades.&quot;
          </blockquote>
          <p style={{ fontSize: "11px", letterSpacing: "0.3em", textTransform: "uppercase", color: "var(--taupe)", display: "flex", alignItems: "center", gap: "16px" }}>
            <span style={{ width: "30px", height: "1px", background: "var(--crimson)" }}></span> The Karigor Creed — Sangeeta Banerjee
          </p>
        </div>
      </section>

      {/* ─── WHY CHOOSE US ─── */}
      <section style={{ padding: "120px 60px", background: "var(--white)" }}>
        <div style={{ textAlign: "center", maxWidth: "600px", margin: "0 auto 80px" }}>
          <p className="section-label" style={{ justifyContent: "center" }}>Why Karigor</p>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "44px", fontWeight: "300" }}>The Pillars of our <em>service</em></h2>
        </div>

        <div className="about-pillars-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "40px" }}>
          <div style={{ background: "var(--cream)", padding: "40px 32px", border: "1px solid var(--sand)" }}>
            <div style={{ fontSize: "36px", fontFamily: "var(--font-cormorant)", color: "var(--crimson)", marginBottom: "16px" }}>01</div>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: "400", marginBottom: "12px" }}>Direct Workshops</h3>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "rgba(50,45,41,0.78)" }}>
              We source and manufacture custom upholstery, kitchens, and modular storage units from our private mills. This cuts secondary middlemen costs by up to 35%.
            </p>
          </div>

          <div style={{ background: "var(--cream)", padding: "40px 32px", border: "1px solid var(--sand)" }}>
            <div style={{ fontSize: "36px", fontFamily: "var(--font-cormorant)", color: "var(--crimson)", marginBottom: "16px" }}>02</div>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: "400", marginBottom: "12px" }}>Vastu-First Design</h3>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "rgba(50,45,41,0.78)" }}>
              Every structural layout is optimized according to flow zoning principles and Vedic directional sciences to build health, abundance, and peace.
            </p>
          </div>

          <div style={{ background: "var(--cream)", padding: "40px 32px", border: "1px solid var(--sand)" }}>
            <div style={{ fontSize: "36px", fontFamily: "var(--font-cormorant)", color: "var(--crimson)", marginBottom: "16px" }}>03</div>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "22px", fontWeight: "400", marginBottom: "12px" }}>Turnkey Execution</h3>
            <p style={{ fontSize: "15px", lineHeight: "1.8", color: "rgba(50,45,41,0.78)" }}>
              From initial structural calculations and civil alterations to the final staging of accessories, we handle everything under one contract.
            </p>
          </div>
        </div>
      </section>

      {/* ─── AWARDS & TRUST ─── */}
      <section style={{ background: "var(--cream)", padding: "80px 60px", borderTop: "1px solid var(--sand)", borderBottom: "1px solid var(--sand)" }}>
        <div className="about-credentials-grid" style={{ display: "grid", gridTemplateColumns: "1fr 2fr", gap: "60px", alignItems: "center" }}>
          <div>
            <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "28px", fontWeight: "300", margin: 0 }}>Studio Credentials &amp; Recognition</h3>
          </div>
          <div style={{ display: "flex", gap: "40px", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 160px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--crimson)" }}>EST. 2014</span>
              <p style={{ fontSize: "15px", fontWeight: "400", margin: "4px 0" }}>10+ Years of Practice</p>
            </div>
            <div style={{ flex: "1 1 160px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--crimson)" }}>KOLKATA</span>
              <p style={{ fontSize: "15px", fontWeight: "400", margin: "4px 0" }}>180+ Completed Projects</p>
            </div>
            <div style={{ flex: "1 1 160px" }}>
              <span style={{ fontSize: "11px", letterSpacing: "0.2em", color: "var(--crimson)" }}>CLIENT RATING</span>
              <p style={{ fontSize: "15px", fontWeight: "400", margin: "4px 0" }}>4.9/5 Average Review Score</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BANNER CTA ─── */}
      <section style={{ textAlign: "center", padding: "100px 60px", background: "var(--crimson)", color: "var(--white)", position: "relative", overflow: "hidden" }}>
        <BotanicalPattern opacity={0.14} color="#EFE9E1" id="about-cta" />
        <div style={{ position: "relative", zIndex: 1 }}>
          <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: "300", marginBottom: "20px" }}>
            Let&apos;s co-create your signature home.
          </h2>
          <p style={{ fontSize: "16px", color: "rgba(250,248,245,0.85)", marginBottom: "36px", maxWidth: "720px", margin: "0 auto 36px" }}>
            Connect with our design team today for a spatial consultation and modular material review.
          </p>
          <Link href="/contact" className="btn-primary btn-primary-black">
            Schedule Consultation
          </Link>
        </div>
      </section>
    </main>
  );
}
