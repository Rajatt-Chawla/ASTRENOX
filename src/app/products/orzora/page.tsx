import type { Metadata } from "next"
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "Orzora — The Market Research Copilot",
  description: "Uncover the why behind customer behavior—fast, deep, and incentivized. Launch multilingual studies, blend expert intelligence, and automate next steps.",
  alternates: { canonical: "/products/orzora" },
}

const Band = ({ children }: { children: React.ReactNode }) => (
  <div className="rounded-xl border border-border-soft bg-surface-card p-5 hover:shadow-card transition-all duration-med">
    {children}
  </div>
)

export default function OrzoraPage() {
  return (
    <main className="bg-bg-base text-white min-h-screen">
      <Navigation />
      
      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
          The Market Research Copilot
        </div>
        <h1 className="mt-4 text-h1 md:text-display-md font-extrabold leading-tight text-text-primary">
          Uncover the Why Behind Customer Behavior—Fast, Deep, and Incentivized
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lead text-text-secondary">
          Orzora unifies AI research, expert intelligence, and tokenized
          participation with automation workflows, so you launch multilingual
          studies in minutes, collect richer qualitative answers, and trigger
          next steps across your stack.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/get-started"
            className="rounded-full bg-accent-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-cta-solid-hover transition-all duration-fast shadow-card"
          >
            Start Free Trial
          </a>
          <a
            href="mailto:Prajwal@astrentech.com"
            className="rounded-full border border-cta-outline-border px-5 py-2.5 text-sm font-medium hover:bg-cta-outline-hover-bg transition-all duration-fast"
          >
            Book a Demo
          </a>
        </div>

        {/* Proof badges */}
        <ul className="mt-6 grid gap-3 sm:grid-cols-2 md:grid-cols-3 text-sm text-text-secondary">
          {[
            "Insights in 24–72 hours (median)",
            "70+ languages (auto-detect)",
            "60–80% lower cost vs. moderated qual/expert calls",
            "Built-in fraud & bias controls",
            "DPDP/GDPR-ready consent & audit logs",
          ].map((x) => (
            <li
              key={x}
              className="rounded-full bg-surface-card border border-border-soft px-4 py-2 text-center"
            >
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* 3 Pillars */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Why Orzora Wins</h2>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {/* 1 */}
          <Band>
            <h3 className="font-semibold text-text-primary">1) Instant Research (Speed to Insight)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Context → Questions: paste goals/audience/assets; Orzora drafts 5–20 questions with bias & clarity checks.</li>
              <li>• Conversational or form studies with skip/branch logic.</li>
              <li>• Multilingual at scale (70+), mobile-first, low-bandwidth.</li>
              <li>• Pilot & versioning; distribution with tracking & SLAs.</li>
            </ul>
          </Band>
          {/* 2 */}
          <Band>
            <h3 className="font-semibold text-text-primary">2) AI Interviewer (Depth & Data Quality)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Adaptive probing, contradiction surfacing, clarifications.</li>
              <li>• Quality controls: honeypots, speeders, device/IP heuristics, consistency scoring.</li>
              <li>• Open-end enrichment: tags, entities, sentiment, quote mining.</li>
              <li>• Executive-ready outputs with driver trees & highlight reels.</li>
            </ul>
          </Band>
          {/* 3 */}
          <Band>
            <h3 className="font-semibold text-text-primary">3) Expert & Public Intelligence (Scale + Domain Depth)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Respondents ("Janta"): inclusive reach, transparent ORZ rewards.</li>
              <li>• Experts/SMEs: async Q&A with evidence & ratings—no scheduling.</li>
              <li>• Unified analysis: crowd + expert signals with segment cuts and confidence.</li>
            </ul>
          </Band>
        </div>
      </section>

      {/* Dashboard */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Orzora Intelligence Dashboard</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2 text-text-secondary">
          {[
            "Adaptive Research Studio: create briefs, generate questions, configure screeners/quotas, launch pilots, and publish.",
            "AI Interviewer Panel: live monitoring of probe depth & completion quality with fraud metrics.",
            "Proactive Insights: theme clustering, sentiment shifts, anomaly flags, & next best actions.",
            "Incentives & Marketplace (ORZ): earnings, vesting, redemption, referrals, upcoming drops.",
            "Automation Copilot (Coming Soon): Ask → Decide → Do across Slack, Sheets, Notion, Drive, Jira, CRM, Email.",
            "Compliance & Security: DPDP/GDPR consent, audit logs, retention & export controls.",
          ].map((x) => (
            <li key={x} className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med">
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">How It Works — From Brief to Decision</h2>
        <ol className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 text-sm text-text-secondary">
          {[
            "Create Project — objectives, cohorts, quotas, assets.",
            "Generate Questions — multi-format with bias checks; edit & preview.",
            "Pilot & Lock — validate comprehension & timing; finalize.",
            "Launch Study — conversational or form; screeners, branching, fraud controls.",
            "Add Expert Depth — route nuanced sub-questions to vetted SMEs; rate/annotate.",
            "Analyze & Decide — explore 'why', export CSV/PDF, share one-pagers.",
            "Automate Next Steps (coming soon) — create tasks, handoffs, targeted follow-ups.",
          ].map((x, i) => (
            <li key={i} className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med">
              {x}
            </li>
          ))}
        </ol>
      </section>

      {/* Token incentives */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Token Incentives & Marketplace — Earn, Vest, Redeem (ORZ)</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Band>
            <ul className="space-y-2 text-sm text-white/80">
              <li>• Respondents: earn 1–5 ORZ per qualified completion; quality bonuses.</li>
              <li>• Experts: 10–50 ORZ per task; reputation tiers unlock premiums.</li>
              <li>• Vesting tiers: 30/90/180/365 days with multipliers, VIP drops, fee discounts.</li>
              <li>• (Upcoming) Marketplace: redeem for products, coupons, software, and compliant digital assets.</li>
              <li>• Referrals: brands list coupons or redirect to store; earn while running research.</li>
              <li>• Controls: disclosures, KYC thresholds, regional availability & rate limits.</li>
            </ul>
            <p className="mt-3 text-xs text-text-muted">
              Example: Complete 10 tasks @3 ORZ = 30 ORZ. Vest 90 days → early marketplace access +5% multiplier; redeem 20 ORZ for a software coupon, save 10 ORZ for a drop.
            </p>
          </Band>
          <Band>
            <h3 className="font-semibold text-text-primary">Proactive Insights — Answers That Find You</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Theme evolution & sentiment with intensity by segment.</li>
              <li>• Contradiction/risk flags where intent ≠ behavior.</li>
              <li>• Recommendations & auto-briefs for follow-ups.</li>
            </ul>
          </Band>
        </div>
      </section>

      {/* Who it's for */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Who It&apos;s For — Practical Applications</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "E-commerce & D2C: PDP copy tests, UX clarity, pricing tests",
            "BFSI: Product comprehension, risk appetite, trust signals",
            "Healthcare: Patient experience, consent clarity, service perception",
            "SaaS & B2B: PMF validation, pricing research, feature prioritization",
            "Public Sector / Civic: Policy comprehension, community feedback, service delivery",
          ].map((x) => (
            <li key={x} className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med">
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* Comparison */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Comparison — Old Way vs. Orzora</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <Band>
            <h3 className="font-semibold text-text-primary">Old Way (Pain)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Weeks to design, recruit, schedule, moderate, translate, analyze</li>
              <li>• Expensive expert calls; tiny samples; language barriers</li>
              <li>• Thin "what" without the why; survey fraud</li>
              <li>• Fragmented stack; manual reporting & handoffs</li>
            </ul>
          </Band>
          <Band>
            <h3 className="font-semibold text-text-primary">Orzora (Advantage)</h3>
            <ul className="mt-2 space-y-2 text-sm text-text-secondary">
              <li>• Live in hours; first themes in 24–72 hours</li>
              <li>• Adaptive conversational AI for deeper signals</li>
              <li>• Async expert layer at a fraction of cost</li>
              <li>• Fraud & bias controls; multilingual by default</li>
              <li>• Token incentives boost completes & retention</li>
              <li>• Automation copilot to act on insights (coming soon)</li>
            </ul>
          </Band>
        </div>
      </section>

      {/* Security */}
      <section className="mx-auto max-w-6xl px-4 py-10">
        <h2 className="text-h2 font-bold text-text-primary">Security & Compliance — Enterprise-Grade by Default</h2>
        <ul className="mt-4 grid gap-4 md:grid-cols-2">
          {[
            "DPDP/GDPR consent, purpose limitation, data minimization",
            "Encryption at rest & in transit; secrets rotation; RBAC",
            "Audit trails & immutable logs for reporting",
            "Data Residency options & configurable retention; vuln scans & IR",
          ].map((x) => (
            <li key={x} className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med">
              {x}
            </li>
          ))}
        </ul>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-surface-card border border-border-soft px-8 py-10 text-center shadow-glow-secondary">
          <h3 className="text-h2 font-bold text-text-primary">Start in Minutes</h3>
          <p className="mt-2 text-text-secondary">
            Launch your first study today, see first themes this week, and
            automate the next action—all in one place.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="/get-started"
              className="rounded-full bg-accent-primary text-white px-6 py-2.5 text-sm font-semibold hover:bg-cta-solid-hover transition-all duration-fast shadow-card"
            >
              Get Started
            </a>
            <a
              href="mailto:Prajwal@astrentech.com"
              className="rounded-full border border-cta-outline-border px-6 py-2.5 text-sm font-medium hover:bg-cta-outline-hover-bg transition-all duration-fast"
            >
              Book a Demo
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

