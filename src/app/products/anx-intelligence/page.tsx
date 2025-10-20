import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'ANX Intelligence - AI-Powered Analytics Platform | Astrenox',
  description: 'Transform your data into actionable insights with ANX Intelligence. Our AI-powered analytics platform helps businesses make smarter decisions faster.',
}

export default function ANXIntelligence() {
  return (
    <main className="min-h-screen bg-bg-base text-white">
      <Navigation />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 pt-24 text-center">
        <h1 className="text-h1 md:text-display-md font-extrabold tracking-tight text-text-primary">
          <span className="gradient-text">
            ANX Intelligence
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lead text-text-secondary">
          AI-powered analytics platform that transforms your data into actionable insights, helping businesses make smarter decisions faster.
        </p>
        <div className="mt-6 flex justify-center gap-3">
          <a href="/get-started" className="inline-flex items-center gap-2 rounded-full bg-accent-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-cta-solid-hover transition-all duration-fast shadow-card">
            Get started <ArrowRight className="h-4 w-4" />
          </a>
          <a href="mailto:Prajwal@astrentech.com" className="rounded-full border border-cta-outline-border px-5 py-2.5 text-sm font-medium hover:bg-cta-outline-hover-bg transition-all duration-fast">
            Book a demo
          </a>
        </div>
      </section>

      {/* PROBLEM → SOLUTION */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border-soft bg-surface-card p-6 hover:shadow-card transition-all duration-med">
            <h3 className="text-lg font-semibold text-text-primary">The Problem</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Organizations struggle with fragmented data sources, manual reporting processes, and lack of real-time insights. 
              Traditional analytics tools are complex, expensive, and require extensive training to use effectively.
            </p>
          </div>
          <div className="rounded-xl border border-border-soft bg-surface-card p-6 hover:shadow-card transition-all duration-med">
            <h3 className="text-lg font-semibold text-text-primary">Our Solution</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              ANX Intelligence consolidates all your data sources into one intelligent platform. Our AI automatically surfaces 
              insights, predicts trends, and recommends actions—making advanced analytics accessible to everyone in your organization.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-h2 font-bold text-text-primary mb-6">Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Unified Data Hub", d: "Connect all your data sources in minutes with pre-built integrations." },
            { t: "AI-Powered Insights", d: "Automatically discover patterns and anomalies in your data." },
            { t: "Predictive Analytics", d: "Forecast trends and outcomes with advanced ML models." },
            { t: "Natural Language Queries", d: "Ask questions in plain English, get instant answers." },
            { t: "Real-time Dashboards", d: "Monitor KPIs and metrics that update automatically." },
            { t: "Custom Reports", d: "Generate beautiful reports with drag-and-drop builder." },
          ].map((f, i) => (
            <div key={f.t} className="rounded-xl border border-border-soft bg-surface-card p-6 hover:shadow-card transition-all duration-med">
              <h4 className="font-semibold text-text-primary">{f.t}</h4>
              <p className="mt-1 text-sm text-text-secondary">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-h2 font-bold text-text-primary mb-6">How it Works</h2>
        <ol className="grid gap-6 sm:grid-cols-3">
          {[
            { s: "Connect", d: "Link your databases, APIs, and SaaS tools through our secure connectors." },
            { s: "Configure", d: "Set up dashboards, alerts, and automated reports tailored to your needs." },
            { s: "Go live", d: "Start getting AI-powered insights and predictions immediately." }
          ].map((step, i) => (
            <li key={step.s} className="rounded-xl border border-border-soft bg-surface-card p-6 hover:shadow-card transition-all duration-med">
              <div className="mb-2 text-sm text-text-muted">Step 0{i + 1}</div>
              <div className="font-semibold text-lg text-text-primary">{step.s}</div>
              <p className="mt-1 text-sm text-text-secondary">{step.d}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* PRICING */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="rounded-3xl border border-border-soft bg-surface-card p-8 text-center shadow-glow-secondary">
          <div className="text-sm text-text-muted">Starts from</div>
          <div className="mt-1 text-display-md font-extrabold tracking-tight">
            <span className="gradient-text">₹5,000</span>
          </div>
          <p className="mt-2 text-text-secondary">Simple monthly plan. Scale as you grow.</p>
          <a href="/get-started" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-cta-solid-hover transition-all duration-fast shadow-card">
            Start now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

