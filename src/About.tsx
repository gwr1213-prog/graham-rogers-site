export default function About() {
  const card: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    marginTop: 12,
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>About Graham Rogers, REALTOR®</h1>
      <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>
        I help Triangle buyers and sellers make clear, confident decisions. Clients work with me for
        steady communication, practical guidance on home condition and value, and a process that
        reduces stress from first conversation to closing.
      </p>

      <div style={card}>
        <h3 style={{ marginTop: 0 }}>How I Work</h3>
        <ul style={{ margin: 0, paddingLeft: 18, color: "#475569", lineHeight: 1.6 }}>
          <li>Upfront strategy: timeline, budget, must-haves and tradeoffs.</li>
          <li>Data you can use: comps, days-on-market, pricing and terms.</li>
          <li>Calm project management: lenders, inspectors, contractors and closing.</li>
        </ul>
      </div>

      <div style={card}>
        <h3 style={{ marginTop: 0 }}>Service Area</h3>
        <p style={{ marginTop: 8, color: "#475569" }}>
          Raleigh, Durham, Cary, Apex, Garner, Knightdale, Clayton, Fuquay-Varina, Wake Forest,
          Holly Springs and nearby communities.
        </p>
      </div>

      <div style={card}>
        <h3 style={{ marginTop: 0 }}>Next Step</h3>
        <p style={{ marginTop: 8, color: "#475569" }}>
          Tell me your timing and goals on the Contact page. I’ll reply with a simple plan for your
          situation—no pressure.
        </p>
      </div>
    </div>
  );
}
