import ContactForm from "@/components/ContactForm";
import BotanicalPattern from "@/components/BotanicalPattern";

export const metadata = {
  title: "Contact Karigor Studio | Book Interior Design Consultation",
  description: "Get in touch with Karigor Interior. Schedule your space planning and modular wardrobe consultation in Kolkata. Quick WhatsApp and phone options.",
};

export default function Contact() {
  return (
    <main style={{ paddingTop: "100px" }}>
      {/* ─── TITLE BANNER ─── */}
      <section style={{ background: "var(--black)", padding: "80px 60px 60px", position: "relative", overflow: "hidden" }}>
        <BotanicalPattern opacity={0.09} color="#AC9C8D" />
        <div className="reveal" style={{ position: "relative", zIndex: 1 }}>
          <p className="section-label" style={{ color: "var(--taupe)" }}>Connect</p>
          <h1 style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(48px, 6vw, 80px)", fontWeight: "300", color: "var(--white)", lineHeight: "1.1", margin: 0 }}>
            Let&apos;s begin a <em>conversation</em>.
          </h1>
        </div>
      </section>

      {/* ─── CONTACT SECTION ─── */}
      <section className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", padding: "100px 60px" }}>
        {/* Left column: Contact Details */}
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
          <div>
            <h2 style={{ fontFamily: "var(--font-cormorant)", fontSize: "36px", fontWeight: "300", marginBottom: "32px", color: "var(--black)" }}>
              Kolkata Design Studio
            </h2>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              <div>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--taupe)", marginBottom: "6px" }}>Address</p>
                <p style={{ fontSize: "16px", lineHeight: "1.6", color: "var(--black)" }}>
                  Karigor Interior Studio,<br />
                  2nd Floor, Salt Lake Sector V,<br />
                  Kolkata, West Bengal 700091
                </p>
              </div>

              <div>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--taupe)", marginBottom: "6px" }}>Direct Lines</p>
                <a href="tel:+919748850377" style={{ display: "block", fontSize: "16px", color: "var(--black)", textDecoration: "none", marginBottom: "4px" }}>+91 97488 50377</a>
                <a href="tel:+917439118285" style={{ display: "block", fontSize: "16px", color: "var(--black)", textDecoration: "none" }}>+91 74391 18285</a>
              </div>

              <div>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--taupe)", marginBottom: "6px" }}>Email Inquiries</p>
                <a href="mailto:karigorinterior55@gmail.com" style={{ fontSize: "16px", color: "var(--black)", textDecoration: "none" }}>karigorinterior55@gmail.com</a>
              </div>

              <div>
                <p style={{ fontSize: "11px", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--taupe)", marginBottom: "6px" }}>Service Coverage Areas</p>
                <p style={{ fontSize: "14px", lineHeight: "1.6", color: "rgba(50,45,41,0.78)" }}>
                  Serving Kolkata, Salt Lake, New Town, Rajarhat, South Kolkata, Howrah, and Hooghly regions.
                </p>
              </div>
            </div>
          </div>

          {/* Socials & WhatsApp integration */}
          <div style={{ marginTop: "56px", paddingTop: "40px", borderTop: "1px solid var(--sand)" }}>
            <a 
              href="https://wa.me/919748850377?text=Hi%20Karigor%20Interior%2C%20I%20would%20like%20to%20enquire%20about%20your%20services." 
              target="_blank" 
              rel="noopener noreferrer" 
              className="whatsapp-btn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ fill: "currentColor" }}>
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Right column: Form */}
        <div className="contact-form-box" style={{ background: "var(--cream)", padding: "60px 48px", border: "1px solid var(--sand)" }}>
          <h3 style={{ fontFamily: "var(--font-cormorant)", fontSize: "30px", fontWeight: "300", color: "var(--black)", marginBottom: "8px" }}>
            Schedule a Consultation
          </h3>
          <p style={{ fontSize: "14px", color: "rgba(50,45,41,0.78)", marginBottom: "32px", letterSpacing: "0.02em" }}>
            Fill out the details below. Our design principal will contact you within 24 hours to schedule a measurement review.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* ─── MAP WORKSPACE ─── */}
      <section id="map" className="map-section" style={{ padding: "0 60px 100px", position: "relative" }}>
        <div style={{ width: "100%", height: "450px", background: "var(--sand)", position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
          {/* A styled Google Map embed placeholder or custom visual */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.2818617833076!2d88.4312674!3d22.5686036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275ade57dd5e7%3A0xc00fdb21f8a846c4!2sSalt%20Lake%20Sector%20V%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: "grayscale(100%) invert(90%) contrast(120%)" }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Karigor Interior Kolkata Studio Map"
          />
        </div>
      </section>
    </main>
  );
}
