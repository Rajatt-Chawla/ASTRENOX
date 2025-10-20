'use client'

export default function OurApproach() {
  return (
    <section id="our-approach" className="relative mx-auto max-w-6xl px-4 py-14">
      {/* Pill */}
      <div className="mb-6 flex justify-center">
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80">
          Our Foundational Methodologies
        </span>
      </div>

      <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
        Systematic Approach to{" "}
        <span className="bg-gradient-to-r from-sky-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
          AI Transformation
        </span>
      </h2>

      {/* Background glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 40% at 50% 10%, rgba(56,189,248,.2), transparent 60%), radial-gradient(50% 30% at 10% 60%, rgba(99,102,241,.18), transparent 60%)",
          mixBlendMode: "screen",
          filter: "blur(2px)",
        }}
      />

      <div className="mt-12 grid items-center gap-10 md:grid-cols-2">
        {/* LEFT: bottleneck summary */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
          <div className="mb-3 text-lg font-semibold">Find the bottleneck. Focus the force.</div>
          <p className="text-sm text-white/75">
            Whole-system analysis to spot flow constraints and failure modes, then apply leverage where it moves ROI most.
          </p>
          <ul className="mt-5 space-y-3 text-sm">
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-sky-400" />
              <span><strong>System Flow Analysis</strong> — map data/process/decision flows</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-indigo-400" />
              <span><strong>Constraint Identification</strong> — pinpoint high-leverage improvements</span>
            </li>
            <li className="flex gap-2">
              <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-cyan-400" />
              <span><strong>Failure Mode Analysis</strong> — understand breakpoints & resilience</span>
            </li>
          </ul>
        </div>

        {/* RIGHT: neon flywheel */}
        <div className="relative mx-auto max-w-md">
          <svg
            viewBox="0 0 400 400"
            className="w-full drop-shadow-[0_10px_40px_rgba(56,189,248,0.25)]"
          >
            <defs>
              <radialGradient id="glow" cx="50%" cy="50%" r="60%">
                <stop offset="0%" stopColor="rgba(56,189,248,0.35)" />
                <stop offset="100%" stopColor="rgba(56,189,248,0)" />
              </radialGradient>
              <linearGradient id="segA" x1="0" x2="1">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="100%" stopColor="#60a5fa" />
              </linearGradient>
              <linearGradient id="segB" x1="0" x2="1">
                <stop offset="0%" stopColor="#60a5fa" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
              <linearGradient id="segC" x1="0" x2="1">
                <stop offset="0%" stopColor="#34d399" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
            </defs>

            {/* Soft glow */}
            <circle cx="200" cy="200" r="190" fill="url(#glow)" />

            {/* Flywheel segments (3 × 120°) */}
            {/* THINK */}
            <path d="M200,200 L200,20 A180,180 0 0,1 355.9,110 Z"
              fill="none" stroke="url(#segA)" strokeWidth="22" strokeLinecap="round"/>
            {/* ALIGN */}
            <path d="M200,200 L355.9,110 A180,180 0 0,1 300,335.3 Z"
              fill="none" stroke="url(#segB)" strokeWidth="22" strokeLinecap="round"/>
            {/* EXECUTE */}
            <path d="M200,200 L300,335.3 A180,180 0 0,1 200,20 Z"
              fill="none" stroke="url(#segC)" strokeWidth="22" strokeLinecap="round"/>

            {/* Center ring */}
            <circle cx="200" cy="200" r="72" fill="rgba(12,18,28,0.9)" stroke="rgba(255,255,255,0.08)" strokeWidth="1"/>
            <text x="200" y="194" textAnchor="middle" fontSize="12" fill="#9fb3c8">Framework</text>
            <text x="200" y="214" textAnchor="middle" fontSize="14" fontWeight="700" fill="#e6f4ff">Think • Align • Execute</text>

            {/* Labels */}
            <text x="200" y="40" textAnchor="middle" fontSize="12" fill="#bfe7ff">THINK</text>
            <text x="340" y="130" textAnchor="middle" fontSize="12" fill="#c9c7ff">ALIGN</text>
            <text x="278" y="350" textAnchor="middle" fontSize="12" fill="#bfffe8">EXECUTE</text>
          </svg>

          {/* Callouts */}
          <div className="mt-5 grid grid-cols-1 gap-3 text-sm">
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <div className="font-semibold">THINK</div>
              <div className="text-white/75">Direction, Readiness, Foundation</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <div className="font-semibold">ALIGN</div>
              <div className="text-white/75">Value-scored portfolio, governance cadence</div>
            </div>
            <div className="rounded-lg border border-white/10 bg-white/[0.03] p-3">
              <div className="font-semibold">EXECUTE</div>
              <div className="text-white/75">Playbooks → scale, dashboards, continuous improvement</div>
            </div>
          </div>
        </div>
      </div>

      {/* Unified CTA Band */}
      <div className="relative overflow-hidden py-16">
        {/* Background gradient band */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-sky-500/10 via-blue-500/10 to-cyan-500/10 blur-2xl"
        />

        <div className="relative mx-auto max-w-3xl px-4 text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Ready to Transform Your Business?
          </h3>
          <p className="mt-3 text-base text-white/75 max-w-xl mx-auto">
            See our complete AI Transformation approach and get started with a strategic assessment.
          </p>

          <a
            href="/ai-transformation#framework"
            className="mt-6 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-sky-500 via-blue-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 transition hover:opacity-90"
          >
            See our AI Transformation approach →
          </a>
        </div>
      </div>
    </section>
  )
}
