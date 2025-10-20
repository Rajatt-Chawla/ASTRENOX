import type { Metadata } from "next"
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: "Santrix — Enterprise AI Copilot for Search, Deal Desk & B2B Workflow Automation",
  description: "Unify context → answer → action. Santrix delivers source-cited enterprise search, proposal automation, and RFQ→PO workflows with audit-ready controls.",
  keywords: [
    "enterprise ai copilot",
    "ai deal desk",
    "enterprise search with citations",
    "b2b workflow automation",
    "rfq automation",
    "quote automation",
    "proposal automation",
    "india ai platform",
    "dubai ai platform",
    "cognitive memory fabric",
    "tender automation",
    "BOM parsing",
    "approval routing",
    "audit logs",
    "RBAC",
    "data residency UAE India",
    "human in the loop automation",
  ],
  alternates: { canonical: "/products/santrix" },
}

const Section = ({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) => (
  <section className="mx-auto max-w-6xl px-4 py-10">
    <h2 className="text-h2 font-bold text-text-primary">{title}</h2>
    <div className="mt-4 text-text-secondary">{children}</div>
  </section>
)

export default function SantrixPage() {
  return (
    <main className="bg-bg-base text-white min-h-screen">
      <Navigation />
      
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "Santrix — The Enterprise AI Copilot",
            applicationCategory: "BusinessApplication",
            operatingSystem: "Cloud",
            offers: { "@type": "Offer", price: "5000.00", priceCurrency: "INR" },
            description: "Enterprise AI copilot unifying search, decision intelligence and B2B workflow automation with audit-ready controls.",
          }),
        }}
      />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 pt-24 pb-10 text-center">
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-accent-primary/18 border border-accent-primary/35 text-accent-primary text-sm font-semibold mb-6">
          Santrix — The Enterprise AI Copilot
        </div>
        <h1 className="mt-4 text-h1 md:text-display-md font-extrabold leading-tight text-text-primary">
          The Business Copilot for Modern Teams
        </h1>
        <p className="mx-auto mt-4 max-w-3xl text-lead text-text-secondary">
          Built for executives, product owners, and operations leaders, Santrix
          unifies enterprise search, decision intelligence, and business process
          automation into one cognitive platform. Move from{" "}
          <strong>context → answer → action</strong> with audit-ready precision
          and measurable ROI.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a
            href="/get-started"
            className="rounded-full bg-accent-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-cta-solid-hover transition-all duration-fast shadow-card"
          >
            Get Started
          </a>
          <a
            href="mailto:Prajwal@astrentech.com"
            className="rounded-full border border-cta-outline-border px-5 py-2.5 text-sm font-medium hover:bg-cta-outline-hover-bg transition-all duration-fast"
          >
            Book a Demo
          </a>
          <span className="text-xs text-text-muted">
            Starts from <strong className="text-accent-secondary">₹5k</strong>
          </span>
        </div>
        <div className="mt-6 text-sm text-text-secondary">
          <strong>Who it&apos;s for:</strong> Revenue, operations, delivery, and
          back-office teams in mid-to-large enterprises.
        </div>
        <div className="mt-2 text-sm text-text-secondary">
          <strong className="text-text-primary">What it does:</strong> Finds the right information instantly,
          drafts proposals/SoWs, automates RFQ→PO→Invoice workflows, and flags
          risks/opportunities before they matter.
        </div>
        <div className="mt-2 text-sm text-text-secondary">
          <strong>Why it&apos;s different:</strong> The{" "}
          <em>Cognitive Memory Fabric</em> preserves organizational context, so
          every interaction improves the next.
        </div>
      </section>

      {/* Primary outcomes */}
      <Section title="Primary Outcomes">
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            "Proposal/SoW turnaround −50–70%",
            "Knowledge retrieval time −80–90% (with citations)",
            "Eligible document intake automated ≥65% with <2% critical field error",
            "SLA breaches −25–30% via exception routing and approvals",
          ].map((x) => (
            <li
              key={x}
              className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med"
            >
              {x}
            </li>
          ))}
        </ul>
      </Section>

      {/* Intelligence Dashboard */}
      <Section title="Santrix Intelligence Dashboard">
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            "Enterprise Search — Ask natural questions across GDrive, Slack, Salesforce, Jira, SharePoint, email, and 30+ sources. Get source-cited, permission-aware answers in seconds.",
            "AI Copilot — 'Ask → Decide → Do.' Create first-draft proposals, apply pricing/policy guardrails, and route approvals with one click.",
            "Proactive Insights — See leading indicators of opportunity or risk based on usage patterns, pipeline health, exceptions, and policy deviations.",
            "Compliance Layer — RBAC, audit logs, region deploys (India & UAE), and PII controls built in.",
          ].map((x) => (
            <li
              key={x}
              className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med"
            >
              {x}
            </li>
          ))}
        </ul>
      </Section>

      {/* Core Modules */}
      <Section title="Core Modules">
        <div className="grid gap-6 md:grid-cols-3">
          {/* 1) Enterprise Search */}
          <div className="rounded-xl border border-border-soft bg-surface-card p-6 hover:shadow-card transition-all duration-med">
            <h3 className="font-semibold">1) Enterprise Search</h3>
            <p className="mt-1 text-sm text-white/70">
              Company-aware search and Q&A returning <strong>cited answers</strong>
              —not summaries—across files, email, chats, tickets, and CRM/ERP
              records.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Permission-aware retrieval; multi-turn Q&A; English + optional Arabic/Hinglish.</li>
              <li>• "Answer + next action" suggestions.</li>
              <li>• Accuracy dashboards with human scoring and provenance.</li>
            </ul>
            <p className="mt-3 text-sm text-white/70">
              <strong>Impact:</strong> 80–90% faster access to context; ≥95%
              citation presence for factual answers.
            </p>
          </div>

          {/* 2) AI Deal Desk */}
          <div className="rounded-xl border border-border-soft bg-surface-card p-6 hover:shadow-card transition-all duration-med">
            <h3 className="font-semibold">2) AI Deal Desk</h3>
            <p className="mt-1 text-sm text-white/70">
              Rev-ops copilot that drafts proposals/SoWs in minutes, enforces
              margin floors and policy clauses, and manages approvals.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Use CRM opportunity context + precedent clauses & pricing histories.</li>
              <li>• Redline handling & regenerate-by-section; approval matrices with SLAs & audit trails.</li>
              <li>• Deviation capture to reduce leakage and standardize terms.</li>
            </ul>
            <p className="mt-3 text-sm text-white/70">
              <strong>Impact:</strong> Proposal cycle time −50–70%; redline
              cycles −30–40%; improved margin discipline.
            </p>
          </div>

          {/* 3) B2B Workflow Automation */}
          <div className="rounded-xl border border-border-soft bg-surface-card p-6 hover:shadow-card transition-all duration-med">
            <h3 className="font-semibold">3) B2B Workflow Automation</h3>
            <p className="mt-1 text-sm text-white/70">
              Intake & execution engine that reads emails/PDFs, extracts
              fields, creates/updates ERP & CRM records, and routes exceptions
              with human-in-the-loop controls.
            </p>
            <ul className="mt-3 space-y-2 text-sm">
              <li>• Document classification & field extraction with confidence thresholds.</li>
              <li>• Exception queues, dual-control approvals, reconciliation reports.</li>
              <li>• API-first write-backs and immutable logs for audits.</li>
            </ul>
            <p className="mt-3 text-sm text-white/70">
              <strong>Impact:</strong> Eligible docs automated ≥65%; critical
              field error &lt;2%; SLA breaches −25–30%.
            </p>
          </div>
        </div>
      </Section>

      {/* How it works */}
      <Section title="How Santrix Works (High-Level Architecture)">
        <ul className="space-y-2">
          <li>
            <strong>Connect (Data Plane)</strong> — Securely link CRM, ERP,
            file stores, chat, email, ticketing. Normalize content, tag metadata,
            and index with original permissions preserved.
          </li>
          <li>
            <strong>Understand (Intelligence Plane)</strong> — Retrieve, reason,
            and verify with the Cognitive Memory Fabric, which links documents,
            decisions, and prior outcomes.
          </li>
          <li>
            <strong>Act (Action Plane)</strong> — Execute tasks (draft
            proposals, submit quotes, create POs/tickets), route approvals, and
            update systems with full traceability.
          </li>
          <li>
            <strong>Learn (Continuous Improvement)</strong> — Every answer,
            draft, and approval enriches enterprise memory, improving speed,
            accuracy, and policy compliance over time.
          </li>
        </ul>
      </Section>

      {/* Reasons */}
      <Section title="Why Teams Choose Santrix">
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            "Unified Intelligence: Search, decisions, and workflows in one system—no tool-sprawl.",
            "Trust by Design: Source-cited answers, permission awareness, and human-in-the-loop for high-impact actions.",
            "Enterprise-Grade Controls: RBAC, SSO/SAML, audit logs, PII redaction, and regional hosting (India & Dubai).",
            "Fast Time-to-Value: Week-1 cited answers; Week-2 first-draft proposals; Week-4 automated intake at scale.",
          ].map((x) => (
            <li
              key={x}
              className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med"
            >
              {x}
            </li>
          ))}
        </ul>
      </Section>

      {/* Integrations */}
      <Section title="Integrations & Interoperability">
        <p>
          <strong>Systems:</strong> Salesforce, HubSpot, Dynamics, SAP/Oracle/NetSuite, Jira, ServiceNow, Slack/Teams,
          Google/Microsoft 365, Drive/SharePoint/Box/Notion, and more.
        </p>
        <p className="mt-2">
          <strong>APIs & Webhooks:</strong> Event-driven automations, custom
          actions, partner connectors.{" "}
          <strong>Data Safety:</strong> Read-only onboarding, staged write-backs,
          environment tiering (sandbox → pilot → prod).
        </p>
      </Section>

      {/* Security */}
      <Section title="Security & Compliance (Enterprise-Ready)">
        <ul className="grid gap-4 md:grid-cols-3">
          <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <strong>Access & Identity</strong> — SSO/SAML, SCIM, granular RBAC,
            approval rules.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <strong>Data Protection</strong> — Encryption at rest/in transit,
            data residency, PII redaction, configurable retention.
          </li>
          <li className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <strong>Auditability</strong> — End-to-end action logs, reason-of-record,
            exportable evidence for audits.
          </li>
        </ul>
      </Section>

      {/* Who benefits */}
      <Section title="Who Benefits Most">
        <ul className="grid gap-4 md:grid-cols-2">
          {[
            "Manufacturing & Distribution: RFQ/BOM handling, price consistency, order accuracy.",
            "Construction & EPC: Tender/BOQ assembly, compliance packs, variation orders.",
            "IT & Consulting: SoW drafting, precedent clauses, approval SLAs.",
            "Logistics & Supply Chain: Order intake from PDFs, exception routing, SLA assurance.",
            "Public Sector (Pilot): Tender analysis, policy retrieval with citations, full provenance.",
          ].map((x) => (
            <li
              key={x}
              className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med"
            >
              {x}
            </li>
          ))}
        </ul>
      </Section>

      {/* Outcomes you can measure */}
      <Section title="Outcomes You Can Measure">
        <ul className="grid gap-4 md:grid-cols-3">
          {[
            "Proposal/SoW First Draft: ≤ 5 minutes",
            "Answer Latency (p95): ≤ 3 seconds with citations",
            "Automation Coverage: ≥ 65% eligible docs; <2% critical field error",
            "Adoption: ≥ 70% weekly active users in pilot cohorts",
            "ROI: 3–5× efficiency gains within the first year",
          ].map((x) => (
            <li
              key={x}
              className="rounded-xl border border-border-soft bg-surface-card p-4 hover:shadow-card transition-all duration-med"
            >
              {x}
            </li>
          ))}
        </ul>
      </Section>

      {/* Final CTA */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl bg-surface-card border border-border-soft px-8 py-10 text-center shadow-glow-secondary">
          <h3 className="text-h2 font-bold text-text-primary">Start in Minutes</h3>
          <p className="mt-2 text-text-secondary">
            Launch your first automation today, discover instant insights this
            week, and watch your business processes scale themselves — all in
            one unified platform.
          </p>
          <p className="mt-1 text-text-secondary">
            Experience the Difference: Get cited answers, context-aware
            proposals, and automated workflows in days.
          </p>
          <p className="mt-1 text-text-secondary">
            Drive Measurable Impact: Cut turnaround times by 70% and unlock
            enterprise-grade efficiency with zero setup hassle.
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

