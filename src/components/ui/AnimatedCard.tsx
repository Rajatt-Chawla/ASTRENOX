'use client'

import { motion } from "framer-motion"
import { ReactNode } from "react"

const anims = [
  { hidden: { y: 16, opacity: 0 }, show: { y: 0, opacity: 1, transition: { type: "spring", damping: 20, stiffness: 220 } } }, // slide-up
  { hidden: { scale: .96, opacity: 0 }, show: { scale: 1, opacity: 1, transition: { duration: .45 } } },                 // scale-in
  { hidden: { y: 0, opacity: 0 }, show: { y: [0, -6, 0], opacity: 1, transition: { duration: .6 } } },                      // soft bounce
  { hidden: { x: -16, opacity: 0 }, show: { x: 0, opacity: 1, transition: { type: "spring", damping: 18, stiffness: 220 } } },// slide-left
  { hidden: { rotateX: 12, opacity: 0 }, show: { rotateX: 0, opacity: 1, transition: { duration: .5 } } },                // tilt-in
]

export function AnimatedCard({ i, children, className = "" }: { i: number, children: ReactNode, className?: string }) {
  const v = anims[i % anims.length]
  return (
    <motion.div
      variants={v}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
      className={`group relative rounded-2xl border border-white/10 bg-white/[0.03] p-6 ${className}`}
    >
      {/* faint sea-green glow */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
        style={{
          background:
            "radial-gradient(120px 60px at 20% 10%, rgba(45,212,191,0.12), transparent 60%), radial-gradient(160px 80px at 80% 90%, rgba(45,212,191,0.10), transparent 60%)",
          filter: "blur(2px)",
          mixBlendMode: "screen",
        }}
      />
      {children}
    </motion.div>
  )
}

