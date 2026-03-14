"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Settings2, BookOpen, Heart } from "lucide-react"

const users = [
  {
    icon: Settings2,
    role: "Administrators",
    tagline: "Full visibility, full control.",
    description:
      "School and district administrators manage security policies, review compliance reports, and ensure the entire institution meets required cybersecurity standards.",
    capabilities: [
      "Set and enforce security policies",
      "Review compliance reports",
      "Manage user access levels",
      "Oversee incident response",
    ],
    gradient: "from-[#1E3A8A] to-[#1e40af]",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-700",
    badge: "Full Access",
    badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
  },
  {
    icon: BookOpen,
    role: "Teachers",
    tagline: "Focused, safe, and empowered.",
    description:
      "Teachers access secure school systems knowing that their login is protected, their student data is safe, and any potential security issue will be flagged automatically.",
    capabilities: [
      "Secure access to student records",
      "Know which apps are approved",
      "Receive security guidance",
      "Report concerns easily",
    ],
    gradient: "from-[#10B981] to-[#059669]",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-700",
    badge: "Educator Access",
    badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
  },
  {
    icon: Heart,
    role: "Parents",
    tagline: "Peace of mind, always.",
    description:
      "Parents gain clear, jargon-free insight into how their child's school protects sensitive information. No technical expertise required — just straightforward updates.",
    capabilities: [
      "Monthly security summaries",
      "Data protection status",
      "Approved app & vendor list",
      "Contact school about concerns",
    ],
    gradient: "from-[#7C3AED] to-[#6d28d9]",
    iconBg: "bg-violet-100",
    iconColor: "text-violet-700",
    badge: "Parent View",
    badgeColor: "bg-violet-50 text-violet-700 border-violet-200",
  },
]

export default function UsersSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="users" className="py-24 bg-[#F8FAFC] relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />

      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-br from-blue-50/60 to-emerald-50/60 blur-3xl -z-10" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#7C3AED] bg-violet-50 border border-violet-100 rounded-full px-4 py-1.5 mb-4 uppercase tracking-wider">
            Who Uses This Dashboard
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-5 leading-tight">
            Built for{" "}
            <span className="gradient-text">Every Stakeholder</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            Whether you manage the school, teach in the classroom, or are a parent
            at home — this platform speaks your language.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {users.map((user, i) => {
            const Icon = user.icon
            return (
              <motion.div
                key={user.role}
                initial={{ opacity: 0, y: 32 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="group relative rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-default"
              >
                {/* Top gradient bar */}
                <div className={`h-1.5 bg-gradient-to-r ${user.gradient}`} />

                <div className="p-7">
                  {/* Icon + badge row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${user.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`h-7 w-7 ${user.iconColor}`} />
                    </div>
                    <span className={`text-xs font-semibold border rounded-full px-3 py-1 ${user.badgeColor}`}>
                      {user.badge}
                    </span>
                  </div>

                  <h3 className="text-2xl font-extrabold text-[#0f172a] mb-1">{user.role}</h3>
                  <p className="text-sm font-medium text-[#64748b] mb-3 italic">{user.tagline}</p>
                  <p className="text-sm text-[#475569] leading-relaxed mb-6">{user.description}</p>

                  {/* Capabilities */}
                  <ul className="space-y-2">
                    {user.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2.5">
                        <div className={`mt-0.5 h-4 w-4 rounded-full bg-gradient-to-br ${user.gradient} flex items-center justify-center flex-shrink-0`}>
                          <svg className="h-2.5 w-2.5 text-white" fill="none" viewBox="0 0 12 12">
                            <path d="M2 6l3 3 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <span className="text-sm text-[#334155]">{cap}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
