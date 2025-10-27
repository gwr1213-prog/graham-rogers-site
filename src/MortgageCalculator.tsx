import React, { useMemo, useState } from "react";

type Inputs = {
  homePrice: string;
  downPayment: string; // dollars
  interestRate: string; // annual % (e.g. 6.75)
  loanTermYears: string; // e.g. 30
  propertyTaxAnnual: string; // dollars / yr
  insuranceAnnual: string; // dollars / yr
  hoaMonthly: string; // dollars / mo
};

function toNum(v: string): number {
  const n = parseFloat(v.replace(/,/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function currency(n: number): string {
  return n.toLocaleString(undefined, { maximumFractionDigits: 2, minimumFractionDigits: 2 });
}

export default function MortgageCalculator() {
  const [inputs, setInputs] = useState<Inputs>({
    homePrice: "450000",
    downPayment: "45000",
    interestRate: "6.75",
    loanTermYears: "30",
    propertyTaxAnnual: "3600", // $300/mo
    insuranceAnnual: "1500",   // $125/mo
    hoaMonthly: "0",
  });

  const handle = (key: keyof Inputs) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setInputs((s) => ({ ...s, [key]: e.target.value }));

  const {
    principalAndInterest,
    monthlyTax,
    monthlyIns,
    monthlyHOA,
    totalMonthly,
    loanAmount,
  } = useMemo(() => {
    const price = toNum(inputs.homePrice);
    const down = toNum(inputs.downPayment);
    const rateAnnual = toNum(inputs.interestRate) / 100;
    const years = Math.max(1, Math.floor(toNum(inputs.loanTermYears)));
    const taxAnnual = toNum(inputs.propertyTaxAnnual);
    const insAnnual = toNum(inputs.insuranceAnnual);
    const hoa = toNum(inputs.hoaMonthly);

    const loan = Math.max(0, price - down);
    const n = years * 12;
    const r = rateAnnual / 12;

    // Standard amortization formula
    const pAndI =
      r > 0
        ? loan * (r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
        : loan / n;

    const taxM = taxAnnual / 12;
    const insM = insAnnual / 12;

    return {
      principalAndInterest: pAndI,
      monthlyTax: taxM,
      monthlyIns: insM,
      monthlyHOA: hoa,
      totalMonthly: pAndI + taxM + insM + hoa,
      loanAmount: loan,
    };
  }, [inputs]);

  const card: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
    marginTop: 16,
  };

  const row: React.CSSProperties = { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 12 };
  const label: React.CSSProperties = { fontSize: 12, color: "#475569", marginBottom: 6, display: "block" };
  const input: React.CSSProperties = {
    width: "100%",
    padding: "10px 12px",
    border: "1px solid #cbd5e1",
    borderRadius: 8,
    fontSize: 14,
  };
  const numBox: React.CSSProperties = {
    background: "#f8fafc",
    border: "1px solid #e5e7eb",
    borderRadius: 12,
    padding: 16,
  };
  const big: React.CSSProperties = { fontSize: 28, fontWeight: 700, color: "#0f172a", marginTop: 4 };

  return (
    <div style={{ padding: 20 }}>
      <h1 style={{ color: "#1d4ed8" }}>Mortgage Calculator</h1>
      <p style={{ color: "#334155", fontSize: 18, lineHeight: 1.6, maxWidth: 900 }}>
        Enter your details to estimate monthly cost (principal &amp; interest + taxes, insurance, and HOA).
      </p>

      <div style={card}>
        <div style={row}>
          <div>
            <label style={label}>Home Price ($)</label>
            <input value={inputs.homePrice} onChange={handle("homePrice")} style={input} inputMode="decimal" />
          </div>
          <div>
            <label style={label}>Down Payment ($)</label>
            <input value={inputs.downPayment} onChange={handle("downPayment")} style={input} inputMode="decimal" />
          </div>
          <div>
            <label style={label}>Interest Rate (% / year)</label>
            <input value={inputs.interestRate} onChange={handle("interestRate")} style={input} inputMode="decimal" />
          </div>
          <div>
            <label style={label}>Loan Term (years)</label>
            <input value={inputs.loanTermYears} onChange={handle("loanTermYears")} style={input} inputMode="numeric" />
          </div>
          <div>
            <label style={label}>Property Tax (annual $)</label>
            <input value={inputs.propertyTaxAnnual} onChange={handle("propertyTaxAnnual")} style={input} inputMode="decimal" />
          </div>
          <div>
            <label style={label}>Homeowners Insurance (annual $)</label>
            <input value={inputs.insuranceAnnual} onChange={handle("insuranceAnnual")} style={input} inputMode="decimal" />
          </div>
          <div>
            <label style={label}>HOA (monthly $)</label>
            <input value={inputs.hoaMonthly} onChange={handle("hoaMonthly")} style={input} inputMode="decimal" />
          </div>
        </div>
      </div>

      <div style={{ ...card, display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", gap: 12 }}>
        <div style={numBox}>
          <div style={{ color: "#64748b", fontSize: 12 }}>Loan Amount</div>
          <div style={big}>${currency(loanAmount)}</div>
        </div>
        <div style={numBox}>
          <div style={{ color: "#64748b", fontSize: 12 }}>Principal &amp; Interest</div>
          <div style={big}>${currency(principalAndInterest)}</div>
        </div>
        <div style={numBox}>
          <div style={{ color: "#64748b", fontSize: 12 }}>Taxes + Insurance + HOA</div>
          <div style={big}>${currency(monthlyTax + monthlyIns + monthlyHOA)}</div>
        </div>
        <div style={{ ...numBox, background: "#eef2ff", borderColor: "#c7d2fe" }}>
          <div style={{ color: "#4338ca", fontSize: 12, fontWeight: 600 }}>Estimated Monthly Total</div>
          <div style={{ ...big, color: "#1e293b" }}>${currency(totalMonthly)}</div>
        </div>
      </div>

      <p style={{ color: "#64748b", fontSize: 12, marginTop: 8 }}>
        Estimates only; consult your lender for exact terms. Taxes/insurance vary by property.
      </p>
    </div>
  );
}
