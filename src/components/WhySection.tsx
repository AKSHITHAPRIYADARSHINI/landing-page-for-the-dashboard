"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Database, Key, Eye, Monitor } from "lucide-react"

const points = [
  {
    icon: Database,
    title: "Student Data Protection",
    description: "Every piece of student information is protected with strict access controls and encryption.",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: Key,
    title: "Secure Login & Access Control",
    description: "Only authorized staff can access sensitive systems, with every login tracked and verified.",
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Eye,
    title: "Monitoring Cyber Threats",
    description: "Continuous monitoring detects and blocks potential threats before they impact students.",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Monitor,
    title: "Safe Educational Technology",
    description: "Every tool and app used in school is vetted for safety and compliance with privacy laws.",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
}

export default function WhySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Subtle background */}
      <div className="absolute inset-0 grid-bg opacity-50" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#1E3A8A] bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4 uppercase tracking-wider">
            Why It Matters
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-5 leading-tight">
            Schools Handle Sensitive Data{" "}
            <span className="gradient-text">Every Day</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            This platform helps institutions monitor and improve cybersecurity while
            giving parents and teachers <strong className="text-[#0f172a]">clear transparency</strong>{" "}
            into how systems are protected — without the technical jargon.
          </p>
        </motion.div>

        {/* Points grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {points.map((point) => {
            const Icon = point.icon
            return (
              <motion.div
                key={point.title}
                variants={itemVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`group rounded-2xl border ${point.border} bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default`}
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${point.bg} ${point.border} border mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 ${point.color}`} />
                </div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">{point.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed">{point.description}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-[#1E3A8A] to-[#1e40af] p-8 text-white text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle at 20% 50%, white 1px, transparent 1px), radial-gradient(circle at 80% 20%, white 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }}
          />
          <div className="relative">
            <h3 className="text-xl font-bold mb-2">Trusted by Schools Across the Country</h3>
            <p className="text-blue-200 text-sm max-w-xl mx-auto">
              Our platform aligns with federal guidelines to help schools meet their duty of care to protect every student&apos;s personal information.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
