export default function Home() {
  const card: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
  };
  const grid: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
    gap: 16,
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ marginBottom: 8 }}>Triangle Real Estate, Made Simple</h1>
      <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>
        I’m Graham Rogers, a REALTOR® serving Raleigh, Durham, Cary and the wider Triangle. Whether
        you’re buying your first home or selling your fifth, I’ll guide you with clear data, steady
        communication, and a calm plan.
      </p>

      <img
        src="/images/raleigh-hero.jpg"
        alt="Raleigh skyline at sunset"
        style={{
          width: "100%",
          height: 260,
          objectFit: "cover",
          borderRadius: 16,
          margin: "16px 0 24px",
        }}
      />

      <div style={grid}>
        <div style={card}>
          <h3 style={{ marginTop: 0 }}>Buy with Confidence</h3>
          <p style={{ marginTop: 8, color: "#475569" }}>
            Tour smart, price offers with comps, and understand the whole cost—mortgage, taxes,
            insurance and HOA—before you commit.
          </p>
        </div>
        <div style={card}>
          <h3 style={{ marginTop: 0 }}>Sell with a Plan</h3>
          <p style={{ marginTop: 8, color: "#475569" }}>
            Prep, pricing and presentation that attract strong offers and keep your timeline on track.
          </p>
        </div>
        <div style={card}>
          <h3 style={{ marginTop: 0 }}>Local + Practical</h3>
          <p style={{ marginTop: 8, color: "#475569" }}>
            Clear advice on neighborhoods, condition, and value—so you avoid surprises later.
          </p>
        </div>
      </div>

      <div style={{ marginTop: 20 }}>
        <a
          href="#contact"
          onClick={(e) => e.preventDefault()}
          style={{ color: "#2563eb", textDecoration: "underline" }}
        >
          Ready to talk? Head to the Contact page and tell me your timing.
        </a>
      </div>
    </div>
  );
}
