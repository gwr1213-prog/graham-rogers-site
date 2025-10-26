import React, { useState } from "react";

import Home from "./Home";
import About from "./About";
import MortgageCalculator from "./MortgageCalculator";
import Contact from "./Contact";

/* ------- Inline pages that don't have their own files ------- */

function Buyers() {
  const card: React.CSSProperties = { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginTop: 12 };
  const item: React.CSSProperties = { marginBottom: 8 };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#1d4ed8" }}>Buyer Resources</h1>
      <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>
        Whether this is your first home or your fifth, here’s a simple path to get ready, tour smart, and write a
        confident offer in the Triangle market.
      </p>

      <div style={card}>
        <h2 style={{ color: "#0f172a", fontSize: 20, marginBottom: 10 }}>Quick-Start Steps</h2>
        <ul style={{ color: "#334155", paddingLeft: 18, margin: 0 }}>
          <li style={item}>Clarify must-haves vs. nice-to-haves (beds, baths, commute, yard, schools).</li>
          <li style={item}>Get pre-approved (not just pre-qualified) to know your true budget.</li>
          <li style={item}>Set a search area: Raleigh, Durham, Cary, Garner, Knightdale, Clayton, Fuquay-Varina, Wake Forest, Holly Springs.</li>
          <li style={item}>Watch monthly costs: mortgage, taxes, insurance, HOA, utilities, maintenance.</li>
        </ul>
      </div>

      <div style={card}>
        <h2 style={{ color: "#0f172a", fontSize: 20, marginBottom: 10 }}>Touring Tips</h2>
        <ul style={{ color: "#334155", paddingLeft: 18, margin: 0 }}>
          <li style={item}>Look past staging—focus on roof/HVAC age, windows, moisture, grading, crawlspace access.</li>
          <li style={item}>Check layout flow, natural light, storage, noise, parking.</li>
          <li style={item}>Note commute at your actual travel time; visit the street morning/evening.</li>
          <li style={item}>Estimate near-term projects (paint, flooring, fixtures) to plan budget.</li>
        </ul>
      </div>

      <div style={card}>
        <h2 style={{ color: "#0f172a", fontSize: 20, marginBottom: 10 }}>Offer Strategy</h2>
        <ul style={{ color: "#334155", paddingLeft: 18, margin: 0 }}>
          <li style={item}>We’ll review comps and days-on-market to price your offer with data.</li>
          <li style={item}>Strengthen terms: due diligence/earnest money, timeline, contingencies.</li>
          <li style={item}>Ask for what matters: seller paid items, repairs, appliance inclusions.</li>
          <li style={item}>Keep a clean contract and communicate clearly to reduce seller risk.</li>
        </ul>
      </div>

      <div style={card}>
        <h2 style={{ color: "#0f172a", fontSize: 20, marginBottom: 10 }}>Next Up</h2>
        <p style={{ color: "#334155", marginTop: 0 }}>
          I’ll connect you with trusted local lenders and inspectors, and we’ll add a simple mortgage calculator here.
          When you’re ready to tour, use the Contact page to share days/times that work best.
        </p>
      </div>
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

function Testimonials() {
  const card: React.CSSProperties = { background: "#fff", border: "1px solid #e5e7eb", borderRadius: 12, padding: 16, marginTop: 12 };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#1d4ed8" }}>Testimonials</h1>
      <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>
        A few words from folks I’ve helped in the Triangle. I’m grateful for the trust clients place in me as their REALTOR®.
      </p>

      <div style={card}>
        <blockquote style={{ borderLeft: "4px solid #2563eb", paddingLeft: 12, margin: 0, color: "#334155" }}>
          “Clear communication and attention to detail from start to finish. We felt informed and supported at every step.”
          <footer style={{ marginTop: 8, fontSize: 14, color: "#475569" }}>— Satisfied Client</footer>
        </blockquote>
      </div>

      <div style={card}>
        <blockquote style={{ borderLeft: "4px solid #2563eb", paddingLeft: 12, margin: 0, color: "#334155" }}>
          <p style={{ marginTop: 0 }}>
            This was my first time buying a home, so I needed a lot of guidance. It's not a simple process by any means, but Graham took care of everything.
            His diligence allowed me and my wife the time and energy to put all our focus into searching for homes.
          </p>
          <p>
            Graham was always ready to set up house tours, and he was great at accommodating our varied schedules. As a former contractor and long-time Raleigh resident, he knows what to look out for.
            His insights and expertise go well beyond average.
          </p>
          <p>
            Aside from being well-versed vis-a-vis house matters, Graham is personable and patient. He fielded my many questions like a champ and genuinely wanted to share his wisdom. I feel as though my house knowledge increased several fold during this journey.
          </p>
          <p>
            After a months-long search, in the end, it was Graham who spotted the home we chose. He paid careful attention to our preferences and vision for the future and was able to find the perfect place for us.
            It's been a little over a month since we moved in, and we're ecstatic.
          </p>
          <p>
            I'm incredibly grateful to Graham for his kindness, guidance, and support. If you retain Graham as an agent, you can be certain that he'll put your needs before all else.
            He's also a skilled gardener who grows everything under the sun; he will share the love.
          </p>
          <footer style={{ marginTop: 8, fontSize: 14, color: "#475569" }}>— John A. Kappler III</footer>
        </blockquote>
      </div>
    </div>
  );
}

function MarketTrends() {
  const card: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
  };
  const row: React.CSSProperties = { display: "flex", gap: 16, flexWrap: "wrap" };
  const tile: React.CSSProperties = {
    flex: "1 1 220px",
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
  };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#1d4ed8" }}>Triangle Market Trends</h1>
      <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>
        A quick snapshot of what’s happening around Raleigh/Durham and the Triangle.
        I update this page monthly. If you need a neighborhood-specific read, reach out and
        I’ll pull a custom report.
      </p>

      <div style={{ ...row, marginTop: 12 }}>
        <div style={tile}>
          <div style={{ color: "#475569", fontSize: 14 }}>Median Sale Price</div>
          <div style={{ color: "#0f172a", fontSize: 24, fontWeight: 700 }}>$—</div>
          <div style={{ color: "#64748b", fontSize: 12 }}>Raleigh/Durham (Monthly)</div>
        </div>
        <div style={tile}>
          <div style={{ color: "#475569", fontSize: 14 }}>Days on Market</div>
          <div style={{ color: "#0f172a", fontSize: 24, fontWeight: 700 }}>—</div>
          <div style={{ color: "#64748b", fontSize: 12 }}>Median (Monthly)</div>
        </div>
        <div style={tile}>
          <div style={{ color: "#475569", fontSize: 14 }}>List-to-Sale Ratio</div>
          <div style={{ color: "#0f172a", fontSize: 24, fontWeight: 700 }}>—%</div>
          <div style={{ color: "#64748b", fontSize: 12 }}>All property types</div>
        </div>
      </div>

      <div style={card}>
        <h2 style={{ color: "#0f172a", fontSize: 20, marginBottom: 10 }}>This Month’s Notes</h2>
        <ul style={{ color: "#334155", paddingLeft: 18, margin: 0 }}>
          <li>Inventory: —</li>
          <li>Buyer activity: —</li>
          <li>Pricing: —</li>
        </ul>
      </div>

      <div style={card}>
        <h2 style={{ color: "#0f172a", fontSize: 20, marginBottom: 10 }}>Monthly Report (PDF)</h2>
        <p style={{ color: "#334155", marginTop: 0 }}>
          I post a fresh PDF each month. If you’d like this delivered to your inbox, use the Contact page and ask for the monthly update.
        </p>
        <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "#2563eb", textDecoration: "underline" }}>
          View latest PDF (coming soon)
        </a>
      </div>
    </div>
  );
}

/* ------- helper for nav button style ------- */
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

/* ------- App (simple tab nav) ------- */
export default function App() {
  const [page, setPage] = useState<
    "home" | "about" | "buyers" | "sellers" | "testimonials" | "market" | "calculator" | "contact"
  >("home");

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
          <button onClick={() => setPage("testimonials")} style={navBtn(page === "testimonials")}>Testimonials</button>
          <button onClick={() => setPage("market")} style={navBtn(page === "market")}>Market Trends</button>
          <button onClick={() => setPage("calculator")} style={navBtn(page === "calculator")}>
            Mortgage Calculator
          </button>
          <button onClick={() => setPage("contact")} style={navBtn(page === "contact")}>Contact</button>
        </nav>
      </header>

      <main style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
        {page === "home" && <Home />}
        {page === "about" && <About />}
        {page === "buyers" && <Buyers />}
        {page === "sellers" && <Sellers />}
        {page === "testimonials" && <Testimonials />}
        {page === "market" && <MarketTrends />}
        {page === "calculator" && <MortgageCalculator />}
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

