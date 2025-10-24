import React, { useState } from "react";

/* ------- Pages (inline to keep it simple) ------- */

function Home() {
  return (
    <div style={{ padding: 20 }}>
      {/* Full-width skyline image */}
      <img
        src="/images/raleigh-hero.jpg"
        alt="Raleigh skyline at sunset"
        style={{
          width: "100%",
          height: 380,
          objectFit: "cover",
          borderRadius: 16,
          display: "block",
          marginBottom: 24,
        }}
      />

      {/* Headline under the image */}
      <h1 style={{ color: "#1d4ed8", fontSize: 36, marginBottom: 12 }}>
        Local Expertise. Personal Service. Real Results.
      </h1>

      {/* Supporting text */}
      <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>
        Helping buyers and sellers navigate the Triangle market with clear communication,
        professional guidance, and results-focused service — from first conversation
        through closing day.
      </p>
    </div>
  );
}



function About() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#1d4ed8" }}>About Graham Rogers, REALTOR®</h1>
      <p style={{ color: "#334155" }}>
        I'm Graham Rogers, a REALTOR® serving Raleigh/Durham and the Triangle. My background includes construction,
        project management, leading technical operations teams, and training both technical and customer service
        professionals. That experience sharpened my eye for detail and keeps the process organized and low-stress for you.
      </p>

      {/* Headshot – no crop */}
      <img
        src="/images/graham-headshot.png"
        alt="Graham Rogers headshot"
        style={{
          maxWidth: 300,
          width: "100%",
          height: "auto",      // shows full image
          borderRadius: 16,
          objectFit: "contain",
          display: "block",
          marginTop: 20,
        }}
      />
    </div>
  );
}

function Contact() {

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#1d4ed8" }}>Contact Graham Rogers</h1>

      <form
        action="https://formspree.io/f/xvgwbyag"
        method="POST"
        style={{ display: "flex", flexDirection: "column", maxWidth: 420, gap: 10 }}
      >
        <label>First Name</label>
        <input type="text" name="firstName" required style={input} />

        <label>Last Name</label>
        <input type="text" name="lastName" required style={input} />

        <label>Email</label>
        <input type="email" name="email" required style={input} />

        <label>Message</label>
        <textarea name="message" rows={4} required style={{ ...input, resize: "vertical" }} />

        <button
          type="submit"
          style={{
            background: "#2563eb",
            color: "#fff",
            border: "1px solid #1d4ed8",
            borderRadius: 12,
            padding: "10px 16px",
            cursor: "pointer",
            marginTop: 6,
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
}

function Buyers() {
  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#1d4ed8" }}>Buyer Resources</h1>
      <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>
        Whether you’re a first-time buyer or moving up, this page will help you prepare for a
        successful home purchase in the Triangle market. More tools and guidance will be added here,
        including lender contacts, timelines, and a step-by-step buyer guide.
      </p>
    </div>
  );
}

function Sellers() {
  const item: React.CSSProperties = { marginBottom: 8 };
  const card: React.CSSProperties = { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginTop: 12 };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#1d4ed8" }}>Seller Resources</h1>
      <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>
        Selling in Raleigh/Durham and across the Triangle? I’ll help you prep, price, and present your home
        to maximize interest and achieve a strong result with minimal hassle.
      </p>

      <div style={card}>
        <h2 style={{ color: "#0f172a", fontSize: 20, marginBottom: 10 }}>Smart Prep Checklist</h2>
        <ul style={{ color: "#334155", paddingLeft: 18, margin: 0 }}>
          <li style={item}>Declutter key rooms; remove excess furniture to open up space</li>
          <li style={item}>Fix easy wins (loose handles, touch-up paint, squeaky doors)</li>
          <li style={item}>Enhance curb appeal (fresh mulch, trimmed shrubs, clean entry)</li>
          <li style={item}>Deep clean kitchens/baths; brighten with fresh white towels</li>
          <li style={item}>Neutralize strong odors; add light, simple staging accents</li>
          <li style={item}>Gather records (upgrades, service history, utility averages)</li>
        </ul>
      </div>

      <div style={card}>
        <h2 style={{ color: "#0f172a", fontSize: 20, marginBottom: 10 }}>Pricing & Strategy</h2>
        <p style={{ color: "#334155", margin: 0 }}>
          I’ll provide a data-driven comparative market analysis (CMA), recommend a launch strategy,
          and review offer terms so you’re confident at every step.
        </p>
      </div>

      <div style={card}>
        <h2 style={{ color: "#0f172a", fontSize: 20, marginBottom: 10 }}>Request Your CMA</h2>
        <p style={{ color: "#334155", marginTop: 0 }}>
          Want a clear picture of your home’s value and timeline? Use the Contact page and include your address—I'll follow up with a tailored CMA.
        </p>
      </div>
    </div>
  );
}



/* ------- Shared styles ------- */

const input: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #cbd5e1",
  outline: "none",
};

/* ------- App (simple tab nav) ------- */

export default function App() {
const [page, setPage] = useState<"home" | "about" | "buyers" | "sellers" | "contact">("home");



  return (
    <div style={{ fontFamily: "sans-serif", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <header
        style={{
          backgroundColor: "#0a2342",
          color: "white",
          padding: "14px 20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 10,
        }}
      >
        <h2 style={{ margin: 0 }}>Graham Rogers, REALTOR®</h2>
       <nav>
        <button onClick={() => setPage("home")} style={navBtn(page === "home")}>Home</button>
        <button onClick={() => setPage("about")} style={navBtn(page === "about")}>About</button>
        <button onClick={() => setPage("buyers")} style={navBtn(page === "buyers")}>Buyers</button>
        <button onClick={() => setPage("sellers")} style={navBtn(page === "sellers")}>Sellers</button>
        <button onClick={() => setPage("contact")} style={navBtn(page === "contact")}>Contact</button>
      </nav>


      </header>

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "buyers" && <Buyers />}
        {page === "sellers" && <Sellers />}
        {page === "contact" && <Contact />}
     </main>


      <footer
        style={{
          textAlign: "center",
          padding: 20,
          backgroundColor: "#0a2342",
          color: "white",
          marginTop: 40,
        }}
      >
        <p>© {new Date().getFullYear()} Graham Rogers, REALTOR®. All rights reserved.</p>
      </footer>
    </div>
  );
}

function navBtn(active: boolean): React.CSSProperties {
  return {
    background: "none",
    border: "none",
    color: active ? "#60a5fa" : "white",
    cursor: "pointer",
    marginLeft: 18,
    fontSize: 16,
  };
}
