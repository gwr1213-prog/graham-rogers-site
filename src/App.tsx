import React, { useState } from "react";

/** Simple drop-in components to replace the preview-only UI imports **/
function Card(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} style={{ border: "1px solid #e5e7eb", borderRadius: 16, boxShadow: "0 1px 2px rgba(0,0,0,0.05)", ...(props.style || {}) }} />;
}
function CardContent(props: React.HTMLAttributes<HTMLDivElement>) {
  return <div {...props} style={{ padding: 16, ...(props.style || {}) }} />;
}
function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      style={{
        background: "#2563eb",
        color: "#fff",
        border: "1px solid #1d4ed8",
        borderRadius: 12,
        padding: "10px 16px",
        cursor: "pointer",
        ...(props.style || {}),
      }}
    />
  );
}

/** THE PAGE CONTENT **/
export default function App() {
  // Contact form state (wired to Formspree)
  const [form, setForm] = useState({ first: "", last: "", email: "", phone: "", message: "", gotcha: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const onChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErrorMsg("");
    if (form.gotcha) return; // honeypot
    setStatus("sending");
    try {
      const endpoint = "https://formspree.io/f/xvgwbyag"; // your live Formspree endpoint
      const fd = new FormData();
      fd.append("first", form.first);
      fd.append("last", form.last);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("message", form.message);
      fd.append("_subject", `[Website] Inquiry from ${form.first} ${form.last}`);

      const res = await fetch(endpoint, { method: "POST", headers: { Accept: "application/json" }, body: fd });
      if (res.ok) {
        setStatus("success");
        setForm({ first: "", last: "", email: "", phone: "", message: "", gotcha: "" });
      } else {
        const data = await res.json().catch(() => ({}));
        setErrorMsg((data && (data as any).error) || "There was a problem sending your message.");
        setStatus("error");
      }
    } catch (err: any) {
      setErrorMsg(err?.message || "There was a problem sending your message.");
      setStatus("error");
    }
  }

  return (
    <div style={{ minHeight: "100vh", background: "#f8fafc", padding: 24 }}>
      <div style={{ maxWidth: 900, margin: "0 auto" }}>
        <h1 style={{ fontSize: 28, fontWeight: 800, marginBottom: 16, color: "#1d4ed8" }}>Preview Hub (All Pages)</h1>

        {/* SEO copy block (for your reference) */}
        <details style={{ background: "#f1f5f9", border: "1px solid #e2e8f0", borderRadius: 12, padding: 16, marginBottom: 24 }}>
          <summary style={{ fontWeight: 600, cursor: "pointer" }}>SEO Titles & Meta Descriptions</summary>
          <div style={{ marginTop: 12, fontSize: 14, color: "#334155" }}>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>Homepage</div>
              <pre>&lt;title&gt;Graham Rogers, REALTOR® – Raleigh/Durham Real Estate&lt;/title&gt;
&lt;meta name="description" content="Personalized real estate service in the Raleigh/Durham area. Helping buyers and sellers find success with clear communication and local insight." /&gt;</pre>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>About Me</div>
              <pre>&lt;title&gt;About Graham Rogers – Raleigh/Durham REALTOR®&lt;/title&gt;
&lt;meta name="description" content="Graham Rogers’ background in construction, project management, and leadership helps clients make confident real estate decisions in the Triangle." /&gt;</pre>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>Buyer Resources</div>
              <pre>&lt;title&gt;Buyer’s Guide – Start Your Raleigh/Durham Home Search&lt;/title&gt;
&lt;meta name="description" content="Guidance for every step of your home-buying journey with expert tips and a built-in mortgage calculator." /&gt;</pre>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>Seller Resources</div>
              <pre>&lt;title&gt;Seller’s Guide – Sell Your Home with Confidence&lt;/title&gt;
&lt;meta name="description" content="Practical tools and insights to price, prepare, and market your home for success in Raleigh/Durham." /&gt;</pre>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>Home Valuation</div>
              <pre>&lt;title&gt;Home Valuation – Find Out What Your Raleigh/Durham Home is Worth&lt;/title&gt;
&lt;meta name="description" content="Request a professional valuation or market analysis to understand your home’s value in today’s Triangle market." /&gt;</pre>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>Market Trends</div>
              <pre>&lt;title&gt;Market Trends – Raleigh/Durham Real Estate Insights&lt;/title&gt;
&lt;meta name="description" content="Monthly updates and insights on housing trends across the Triangle." /&gt;</pre>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>Testimonials</div>
              <pre>&lt;title&gt;Client Reviews – What Homeowners Say About Graham Rogers&lt;/title&gt;
&lt;meta name="description" content="See what clients say about Graham Rogers’ hands-on, service-first approach to buying and selling homes." /&gt;</pre>
            </div>
            <div style={{ marginBottom: 12 }}>
              <div style={{ fontWeight: 600 }}>Contact</div>
              <pre>&lt;title&gt;Contact Graham Rogers – Raleigh/Durham REALTOR®&lt;/title&gt;
&lt;meta name="description" content="Get in touch for buying, selling, or real estate advice in the Triangle. Expect prompt, professional communication." /&gt;</pre>
            </div>
          </div>
        </details>

        {/* Homepage */}
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#1d4ed8" }}>Homepage</h2>
          <img
            src="/images/raleigh-hero.jpg"
            alt="Raleigh skyline at sunset"
            style={{ width: "100%", height: 220, objectFit: "cover", borderRadius: 16, marginBottom: 16 }}
          />
          <p style={{ color: "#334155" }}>
            Buying or selling a home is more than a transaction—it's a major life step. My focus is on delivering personal service, with clear communication and Triangle market knowledge.
          </p>
        </section>

        {/* About Me */}
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#1d4ed8" }}>About Me</h2>
          <img
            src="/images/graham-headshot.png"
            alt="Graham Rogers, REALTOR® in Raleigh/Durham"
            style={{ width: 176, height: 176, objectFit: "cover", borderRadius: 16, marginBottom: 16 }}
          />
          <p style={{ color: "#334155" }}>
            I'm Graham Rogers, a REALTOR® serving Raleigh/Durham and the Triangle. My path into real estate was shaped by hands-on experience across multiple fields: construction, project management,
            leading high-performing technical operations teams, and training both technical and customer service professionals. Those roles sharpened my eye for detail, my ability to organize complex
            processes, and my commitment to helping people succeed.
          </p>
        </section>

        {/* Testimonials */}
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#1d4ed8" }}>Testimonials</h2>

          <Card>
            <CardContent>
              <blockquote style={{ borderLeft: "4px solid #2563eb", paddingLeft: 12, fontStyle: "italic" }}>
                “Graham made the buying process seamless. Clear communication and attention to detail at every step.”
                <footer style={{ marginTop: 8, fontSize: 14 }}>- A Happy Buyer</footer>
              </blockquote>
            </CardContent>
          </Card>

          <div style={{ height: 12 }} />

          <Card>
            <CardContent>
              <blockquote style={{ borderLeft: "4px solid #2563eb", paddingLeft: 12, fontStyle: "italic" }}>
                “When it was time to sell, Graham guided us with confidence. We sold quickly and for top dollar. A fantastic REALTOR®.”
                <footer style={{ marginTop: 8, fontSize: 14 }}>- Satisfied Seller</footer>
              </blockquote>
            </CardContent>
          </Card>

          <div style={{ height: 12 }} />

          <Card>
            <CardContent>
              <blockquote style={{ borderLeft: "4px solid #2563eb", paddingLeft: 12, fontStyle: "italic" }}>
                <p>
                  This was my first time buying a home, so I needed a lot of guidance. It's not a simple process by any means, but Graham took care of everything. His diligence allowed me and my wife
                  the time and energy to put all our focus into searching for homes.
                </p>
                <br />
                <p>
                  Graham was always ready to set up house tours, and he was great at accommodating our varied schedules. As a former contractor and long-time Raleigh resident, he knows what to look out
                  for. His insights and expertise go well beyond average.
                </p>
                <br />
                <p>
                  Aside from being well-versed vis-a-vis house matters, Graham is personable and patient. He fielded my many questions like a champ and genuinely wanted to share his wisdom. I feel as
                  though my house knowledge increased several fold during this journey.
                </p>
                <br />
                <p>
                  After a months-long search, in the end, it was Graham who spotted the home we chose. He paid careful attention to our preferences and vision for the future and was able to find the
                  perfect place for us. It's been a little over a month since we moved in, and we're ecstatic.
                </p>
                <br />
                <p>
                  I'm incredibly grateful to Graham for his kindness, guidance, and support. If you retain Graham as an agent, you can be certain that he'll put your needs before all else. He's also a
                  skilled gardener who grows everything under the sun; he will share the love.
                </p>
                <br />
                <p>-John A. Kappler III</p>
              </blockquote>
            </CardContent>
          </Card>
        </section>

        {/* Contact */}
        <section style={{ marginBottom: 28 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700, marginBottom: 8, color: "#1d4ed8" }}>Contact</h2>

          {status === "success" && (
            <div style={{ marginBottom: 12, padding: "10px 12px", borderRadius: 12, border: "1px solid #bbf7d0", background: "#f0fdf4", color: "#166534" }}>
              Thanks! Your message has been sent. I'll be in touch shortly.
            </div>
          )}
          {status === "error" && (
            <div style={{ marginBottom: 12, padding: "10px 12px", borderRadius: 12, border: "1px solid #fecaca", background: "#fef2f2", color: "#991b1b" }}>
              {errorMsg || "Something went wrong. Please try again."}
            </div>
          )}

          <Card>
            <CardContent>
              <form onSubmit={onSubmit} style={{ display: "grid", gap: 12 }}>
                <div>
                  <label htmlFor="first" style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                    First Name
                  </label>
                  <input id="first" name="first" value={form.first} onChange={onChange} required style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="last" style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                    Last Name
                  </label>
                  <input id="last" name="last" value={form.last} onChange={onChange} required style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                    Email
                  </label>
                  <input id="email" type="email" name="email" value={form.email} onChange={onChange} required style={inputStyle} />
                </div>
                <div>
                  <label htmlFor="phone" style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    value={form.phone}
                    onChange={onChange}
                    inputMode="tel"
                    pattern="[-0-9().+ ]{7,}"
                    placeholder="(Optional)"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="message" style={{ display: "block", fontSize: 14, marginBottom: 4 }}>
                    How can I help?
                  </label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={onChange} required style={{ ...inputStyle, resize: "vertical" }} />
                </div>

                {/* Honeypot field (hidden) */}
                <input type="text" name="gotcha" value={form.gotcha} onChange={onChange} style={{ display: "none" }} aria-hidden="true" />

                <div>
                  <Button type="submit" disabled={status === "sending"}>
                    {status === "sending" ? "Sending…" : "Send Message"}
                  </Button>
                  <span style={{ marginLeft: 8, fontSize: 12, color: "#64748b" }}>By submitting, you agree to be contacted about your inquiry.</span>
                </div>
              </form>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  borderRadius: 12,
  border: "1px solid #cbd5e1",
  outline: "none",
};

