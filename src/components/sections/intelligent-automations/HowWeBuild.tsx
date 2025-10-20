'use client'

export default function HowWeBuild() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 text-center">
      <p className="inline-flex items-center rounded-full bg-white/5 px-4 py-1 text-xs font-medium text-white/60 mb-4">
        How We Build It
      </p>

      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
        From Concept to <span className="text-sky-400">Production</span>
      </h2>

      <p className="mt-3 text-white/70 max-w-2xl mx-auto">
        Our systematic approach ensures your automations are built right the first time,
        with the flexibility to evolve as your needs change.
      </p>

      <div className="relative mt-12 flex justify-center">
        <div className="relative max-w-[1100px] w-full rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(56,189,248,0.15)]">
          <img
            src="/assets/images/from-concept-to-production.png"
            alt="Astrenox Intelligent Automation — From Concept to Production"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  )
}
