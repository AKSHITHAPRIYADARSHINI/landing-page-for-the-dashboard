"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Activity, AlertTriangle, Cpu, Building2, CheckCircle } from "lucide-react"

const features = [
  {
    icon: Activity,
    title: "Security Monitoring",
    description:
      "Track system security status and detect potential risks in real time. Get a clear picture of your school's overall security health at a glance.",
    color: "text-blue-700",
    gradient: "from-blue-500 to-blue-700",
    bg: "bg-blue-50",
    highlights: ["Real-time status updates", "Risk score tracking", "Automated alerts"],
  },
  {
    icon: AlertTriangle,
    title: "Incident Tracking",
    description:
      "Identify and respond to cybersecurity incidents quickly. Every incident is logged, tracked, and resolved with clear steps and timelines.",
    color: "text-amber-700",
    gradient: "from-amber-500 to-orange-600",
    bg: "bg-amber-50",
    highlights: ["Incident timeline view", "Response tracking", "Resolution reporting"],
  },
  {
    icon: Cpu,
    title: "Device Security",
    description:
      "Monitor school devices for patch status and encryption. Ensure every laptop, tablet, and computer meets security standards.",
    color: "text-violet-700",
    gradient: "from-violet-500 to-purple-700",
    bg: "bg-violet-50",
    highlights: ["Patch compliance", "Encryption status", "Device inventory"],
  },
  {
    icon: Building2,
    title: "Vendor Risk Management",
    description:
      "Assess third-party educational technology providers. Know which tools meet safety standards before they're used in your school.",
    color: "text-rose-700",
    gradient: "from-rose-500 to-red-600",
    bg: "bg-rose-50",
    highlights: ["Vendor assessments", "App safety ratings", "Privacy compliance"],
  },
  {
    icon: CheckCircle,
    title: "Compliance Monitoring",
    description:
      "Track security practices aligned with NIST cybersecurity standards. Stay confident that your school meets required security benchmarks.",
    color: "text-emerald-700",
    gradient: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50",
    highlights: ["NIST framework alignment", "Compliance score", "Audit-ready reports"],
  },
]

export default function FeaturesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="features" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#10B981] bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-4 uppercase tracking-wider">
            Key Features
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-5 leading-tight">
            Everything You Need to{" "}
            <span className="gradient-text">Stay Secure</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Five core capabilities that work together to give your school complete
            visibility and control over its cybersecurity posture.
          </p>
        </motion.div>

        {/* Feature cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className={`group relative rounded-2xl bg-white border border-gray-100 p-6 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden ${i === 4 ? "sm:col-span-2 lg:col-span-1" : ""}`}
              >
                {/* Top gradient accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} rounded-t-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg} mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`h-6 w-6 ${feature.color}`} />
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{feature.title}</h3>
                <p className="text-sm text-[#64748b] leading-relaxed mb-4">{feature.description}</p>

                {/* Highlights list */}
                <ul className="space-y-1.5">
                  {feature.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2 text-xs text-[#475569]">
                      <div className={`h-1.5 w-1.5 rounded-full bg-gradient-to-r ${feature.gradient} flex-shrink-0`} />
                      {h}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
