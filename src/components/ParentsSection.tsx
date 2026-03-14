"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Lock, UserCheck, Building2, Activity, MessageCircle } from "lucide-react"

const benefits = [
  {
    icon: Lock,
    title: "Data Protection Practices",
    description:
      "Learn exactly how your child's name, grades, and personal information are kept safe and who has access.",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
  },
  {
    icon: UserCheck,
    title: "Secure Login Systems",
    description:
      "Every teacher and staff member uses verified login credentials, so unauthorized people can't access student records.",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
  },
  {
    icon: Building2,
    title: "Vendor Safety Checks",
    description:
      "Every app or platform used in your child's classroom is reviewed for privacy compliance before being approved.",
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-100",
  },
  {
    icon: Activity,
    title: "System Monitoring",
    description:
      "School systems are watched around the clock. If something unusual happens, it's detected and addressed quickly.",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-100",
  },
]

export default function ParentsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="parents" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />

      {/* Decorative gradient */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-emerald-50/80 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-blue-50/80 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-xs font-semibold text-[#10B981] bg-emerald-50 border border-emerald-100 rounded-full px-4 py-1.5 mb-4 uppercase tracking-wider">
              For Parents
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-5 leading-tight">
              Transparency You Can{" "}
              <span className="gradient-text">Count On</span>
            </h2>
            <p className="text-lg text-[#475569] leading-relaxed mb-8">
              You don&apos;t need to be a tech expert to understand how your child&apos;s school keeps data safe.
              Our dashboard translates complex security information into clear, simple summaries — just for you.
            </p>

            {/* Communication card */}
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl bg-blue-50">
                  <MessageCircle className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-[#0f172a] mb-1">Monthly Security Updates</h3>
                  <p className="text-sm text-[#64748b] leading-relaxed">
                    Parents receive easy-to-read monthly summaries showing the school&apos;s security score,
                    any incidents that occurred, and how they were resolved.
                  </p>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <div className="flex items-center gap-2 mb-2">
                  <div className="h-2 w-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-medium text-[#334155]">Last update: March 1, 2026</span>
                </div>
                <div className="rounded-lg bg-gray-50 p-3 text-xs text-[#475569] leading-relaxed">
                  <strong className="text-[#0f172a]">School Security Summary:</strong> This month your school&apos;s security
                  score improved to <strong className="text-emerald-600">94%</strong>. All student devices are up-to-date.
                  3 minor incidents were detected and resolved within 4 hours.
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: benefit cards */}
          <div className="space-y-4">
            {benefits.map((b, i) => {
              const Icon = b.icon
              return (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, x: 32 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  whileHover={{ x: -4, transition: { duration: 0.15 } }}
                  className={`flex items-start gap-4 rounded-xl border ${b.border} bg-white p-5 shadow-sm hover:shadow-md transition-all duration-200 cursor-default`}
                >
                  <div className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl ${b.bg}`}>
                    <Icon className={`h-5 w-5 ${b.color}`} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f172a] mb-1">{b.title}</h3>
                    <p className="text-sm text-[#64748b] leading-relaxed">{b.description}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
