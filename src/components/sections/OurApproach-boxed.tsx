'use client'

/**
 * Fallback "Think → Align → Execute" boxed layout (no SVG)
 * 
 * This is an alternative to the flywheel version if you prefer a simpler card-based layout.
 * To use this version, simply rename it to OurApproach.tsx or import it instead of the flywheel version.
 */

export default function OurApproachBoxed() {
  return (
    <section id="our-approach" className="mx-auto max-w-6xl px-4 py-14">
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

      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {[
          {
            t: "THINK",
            b1: "Direction — align vision & KPIs",
            b2: "Readiness — people, process, tech",
            b3: "Foundation — target architecture",
          },
          {
            t: "ALIGN",
            b1: "Focus — value-scored use-cases",
            b2: "Coordination — governance & cadence",
            b3: "",
          },
          {
            t: "EXECUTE",
            b1: "Engine — pilots → scale playbooks",
            b2: "Insight — dashboards & recs",
            b3: "Refinement — feedback loops",
          },
        ].map((x, i) => (
          <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="mb-2 text-sm tracking-wider text-white/80">{x.t}</div>
            <ul className="space-y-2 text-sm text-white/75">
              <li>• {x.b1}</li>
              <li>• {x.b2}</li>
              {x.b3 && <li>• {x.b3}</li>}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

