"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, CheckCircle, Cpu, Key } from "lucide-react"
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from "recharts"

const metrics = [
  {
    icon: Shield,
    label: "Security Compliance Score",
    value: "94%",
    sub: "Based on NIST 800-369 standards",
    color: "text-blue-700",
    bg: "bg-blue-50",
    border: "border-blue-100",
    barColor: "#1E3A8A",
    barValue: 94,
  },
  {
    icon: CheckCircle,
    label: "Incident Resolution Rate",
    value: "98%",
    sub: "Average resolved within 4 hours",
    color: "text-emerald-700",
    bg: "bg-emerald-50",
    border: "border-emerald-100",
    barColor: "#10B981",
    barValue: 98,
  },
  {
    icon: Cpu,
    label: "Device Security Status",
    value: "97%",
    sub: "Devices patched and encrypted",
    color: "text-violet-700",
    bg: "bg-violet-50",
    border: "border-violet-100",
    barColor: "#7C3AED",
    barValue: 97,
  },
  {
    icon: Key,
    label: "Authentication Protection",
    value: "100%",
    sub: "Multi-factor auth enforced",
    color: "text-amber-700",
    bg: "bg-amber-50",
    border: "border-amber-100",
    barColor: "#F59E0B",
    barValue: 100,
  },
]

const barData = metrics.map((m) => ({
  name: m.label.split(" ").slice(0, 2).join(" "),
  value: m.barValue,
  color: m.barColor,
}))

export default function MetricsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold text-[#1E3A8A] bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-4 uppercase tracking-wider">
            Security Metrics & Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-5 leading-tight">
            Real Numbers,{" "}
            <span className="gradient-text">Real Accountability</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            We believe transparency builds trust. Here are the key metrics your school
            can track — all explained in plain language.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: stat cards */}
          <div className="grid sm:grid-cols-2 gap-4">
            {metrics.map((m, i) => {
              const Icon = m.icon
              return (
                <motion.div
                  key={m.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  whileHover={{ y: -6, transition: { duration: 0.2 } }}
                  className={`rounded-2xl border ${m.border} bg-white p-6 shadow-sm hover:shadow-lg transition-all duration-300 cursor-default`}
                >
                  <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${m.bg} mb-4`}>
                    <Icon className={`h-5 w-5 ${m.color}`} />
                  </div>
                  <div className={`text-4xl font-extrabold ${m.color} mb-1`}>{m.value}</div>
                  <div className="text-sm font-semibold text-[#0f172a] mb-1">{m.label}</div>
                  <div className="text-xs text-[#64748b]">{m.sub}</div>

                  {/* Progress bar */}
                  <div className="mt-4 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={isInView ? { width: `${m.barValue}%` } : {}}
                      transition={{ duration: 1.2, delay: 0.5 + i * 0.1, ease: "easeOut" }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: m.barColor }}
                    />
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Right: bar chart */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="rounded-2xl border border-gray-100 bg-white shadow-sm p-6"
          >
            <h3 className="text-base font-bold text-[#0f172a] mb-1">All Metrics at a Glance</h3>
            <p className="text-sm text-[#64748b] mb-6">Percentage scores across key security areas</p>

            <ResponsiveContainer width="100%" height={280}>
              <BarChart data={barData} layout="vertical" margin={{ top: 0, right: 20, left: 10, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tick={{ fill: "#94a3b8", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  tickFormatter={(v) => `${v}%`}
                />
                <YAxis
                  type="category"
                  dataKey="name"
                  tick={{ fill: "#475569", fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  width={90}
                />
                <Tooltip
                  contentStyle={{
                    background: "white",
                    border: "1px solid #e2e8f0",
                    borderRadius: 10,
                    fontSize: 12,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.08)",
                  }}
                  formatter={(value) => [`${value}%`, "Score"]}
                  cursor={{ fill: "#f8fafc" }}
                />
                <Bar dataKey="value" radius={[0, 6, 6, 0]} maxBarSize={36}>
                  {barData.map((entry, i) => (
                    <Cell key={i} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>

            <div className="mt-4 pt-4 border-t border-gray-100 text-xs text-[#94a3b8] text-center">
              Data refreshed automatically · Last updated today
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
