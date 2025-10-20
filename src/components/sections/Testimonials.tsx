'use client'

import { useEffect, useRef, useState } from "react"

const TESTIMONIALS = [
  `Astrenox helped us spot bottlenecks and ship AI features faster than planned. Clear ROI, zero fluff.`,
  `Their engineering-first approach turned vague ideas into reliable automations that actually scale.`,
  `From audit to rollout, the execution cadence kept everyone aligned and unblocked.`,
  `Great balance of strategy and hands-on build—quick wins without losing the long-term plan.`,
  `Dashboards and feedback loops made impact obvious; we iterated weekly with confidence.`,
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const timer = useRef<number | null>(null)

  // auto-rotate every 4.5s; pauses on hover and respects reduced-motion
  const start = () => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    stop()
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length)
    }, 4500)
  }
  const stop = () => {
    if (timer.current) window.clearInterval(timer.current)
    timer.current = null
  }

  useEffect(() => {
    start()
    return stop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <section id="testimonials" className="mx-auto max-w-6xl px-4 py-16">
      <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">
        What Our Clients Say
      </h2>
      <p className="mt-3 text-center text-white/70">
        Real feedback. No names or titles—only outcomes.
      </p>

      {/* carousel */}
      <div
        className="relative mt-10 overflow-hidden rounded-2xl"
        onMouseEnter={stop}
        onMouseLeave={start}
        aria-roledescription="carousel"
        aria-label="Client testimonials"
      >
        <ul
          className="flex transition-transform duration-500 will-change-transform"
          style={{
            transform: `translateX(calc(-${index} * 100%))`,
            width: `${TESTIMONIALS.length * 100}%`,
          }}
        >
          {TESTIMONIALS.map((t, i) => (
            <li
              key={i}
              className="w-full shrink-0 px-2 sm:px-3 md:px-4"
              role="group"
              aria-roledescription="slide"
              aria-label={`Testimonial ${i + 1} of ${TESTIMONIALS.length}`}
            >
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {/* show 4 boxes per slide; slice 4 around the current pivot */}
                {arrange4(i).map((text, k) => (
                  <blockquote
                    key={k}
                    className="rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-sm leading-relaxed text-white/90 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]"
                  >
                    <span className="mb-2 block text-lg">"</span>
                    {text}
                  </blockquote>
                ))}
              </div>
            </li>
          ))}
        </ul>

        {/* dots */}
        <div className="mt-6 flex justify-center gap-2">
          {TESTIMONIALS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-1.5 w-6 rounded-full transition ${
                i === index ? "bg-white/90" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

// helper: returns 4 testimonials starting at pivot i (wraps around)
function arrange4(pivot: number) {
  const data = TESTIMONIALS
  const out = []
  for (let k = 0; k < 4; k++) out.push(data[(pivot + k) % data.length])
  return out
}
