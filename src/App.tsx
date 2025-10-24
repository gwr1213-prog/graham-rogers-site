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
  const [page, setPage] = useState<"home" | "about" | "contact">("home");

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
          <button onClick={() => setPage("contact")} style={navBtn(page === "contact")}>Contact</button>
        </nav>
      </header>

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
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
