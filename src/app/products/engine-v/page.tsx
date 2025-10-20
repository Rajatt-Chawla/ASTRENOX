import type { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: 'Engine V - AI Workflow Automation Platform | Astrenox',
  description: 'Build and deploy intelligent automation workflows with Engine V. Connect data sources, orchestrate AI models, and automate complex business processes.',
}

export default function EngineV() {
  return (
    <main className="min-h-screen bg-bg-base text-white">
      <Navigation />

      {/* HERO */}
      <section className="mx-auto max-w-6xl px-4 py-16 pt-24 text-center">
        <h1 className="text-h1 md:text-display-md font-extrabold tracking-tight text-text-primary">
          <span className="gradient-text">
            Engine V
          </span>
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lead text-text-secondary">
          Visual workflow automation platform that connects data sources, orchestrates AI models, and automates complex business processes without code.
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
              Building AI-powered automations requires expensive engineering resources, complex infrastructure setup, and months of development. 
              Traditional automation tools lack AI capabilities and don't scale with business needs.
            </p>
          </div>
          <div className="rounded-xl border border-border-soft bg-surface-card p-6 hover:shadow-card transition-all duration-med">
            <h3 className="text-lg font-semibold text-text-primary">Our Solution</h3>
            <p className="mt-2 text-sm text-text-secondary leading-relaxed">
              Engine V provides a visual workflow builder that lets you design, test, and deploy AI-powered automations in days, not months. 
              Connect 30+ data sources, use any AI model, and scale infinitely—all without writing code.
            </p>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <h2 className="text-h2 font-bold text-text-primary mb-6">Key Features</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "Visual Workflow Builder", d: "Drag-and-drop interface for creating complex automations." },
            { t: "30+ Integrations", d: "Connect to your favorite tools and data sources instantly." },
            { t: "Multi-Model AI", d: "Use OpenAI, Anthropic, Google, or custom models in workflows." },
            { t: "Real-time Monitoring", d: "Track workflow execution and performance metrics live." },
            { t: "Version Control", d: "Rollback changes and test workflows before deployment." },
            { t: "Enterprise Security", d: "SOC 2 compliant with end-to-end encryption." },
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
            { s: "Connect", d: "Link your data sources and AI providers through secure integrations." },
            { s: "Configure", d: "Build workflows visually with drag-and-drop blocks and logic." },
            { s: "Go live", d: "Deploy workflows with one click and monitor performance in real-time." }
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
          <p className="mt-2 text-text-secondary">Simple monthly plan. Unlimited workflows.</p>
          <a href="/get-started" className="mt-6 inline-flex items-center gap-2 rounded-full bg-accent-primary text-white px-5 py-2.5 text-sm font-semibold hover:bg-cta-solid-hover transition-all duration-fast shadow-card">
            Start now <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <Footer />
    </main>
  )
}

