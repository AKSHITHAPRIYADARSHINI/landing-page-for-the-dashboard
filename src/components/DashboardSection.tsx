"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Shield, Cpu, AlertTriangle, Bell, TrendingUp } from "lucide-react"
import {
  RadialBarChart,
  RadialBar,
  PolarAngleAxis,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

const securityScore = [{ value: 94, fill: "#10B981" }]

const trendData = [
  { month: "Sep", incidents: 8 },
  { month: "Oct", incidents: 12 },
  { month: "Nov", incidents: 6 },
  { month: "Dec", incidents: 4 },
  { month: "Jan", incidents: 7 },
  { month: "Feb", incidents: 3 },
]

const highlights = [
  {
    icon: Shield,
    label: "Security Posture",
    detail: "Overall risk level and compliance score",
    color: "text-blue-600",
    bg: "bg-blue-50",
  },
  {
    icon: Cpu,
    label: "Device Compliance",
    detail: "Which devices are up-to-date and protected",
    color: "text-violet-600",
    bg: "bg-violet-50",
  },
  {
    icon: AlertTriangle,
    label: "Recent Incidents",
    detail: "A log of all security events and resolutions",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Bell,
    label: "Security Alerts",
    detail: "Instant notifications for any unusual activity",
    color: "text-rose-600",
    bg: "bg-rose-50",
  },
  {
    icon: TrendingUp,
    label: "Risk Levels",
    detail: "Visual risk trends across your district",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
]

export default function DashboardSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="dashboard" className="py-24 bg-white relative overflow-hidden">
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
            Dashboard Overview
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0f172a] mb-5 leading-tight">
            One Central View of{" "}
            <span className="gradient-text">School Security</span>
          </h2>
          <p className="text-lg text-[#475569] max-w-2xl mx-auto leading-relaxed">
            The dashboard brings everything together in one easy-to-read place —
            no technical background required.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Left: Mock dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="relative rounded-2xl border border-gray-200 bg-[#0f172a] shadow-2xl overflow-hidden animate-pulse-glow">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-700/50">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
                  <div className="h-3 w-3 rounded-full bg-green-500/80" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="text-gray-400 text-xs font-mono">Security Overview — Lincoln Elementary</div>
                </div>
              </div>

              {/* Dashboard interior */}
              <div className="p-5 space-y-4">
                {/* Top row: score + stats */}
                <div className="grid grid-cols-3 gap-3">
                  {/* Radial score */}
                  <div className="col-span-1 rounded-xl bg-[#1e293b] p-4 flex flex-col items-center justify-center">
                    <div className="text-xs text-gray-400 mb-1 font-medium">Security Score</div>
                    <ResponsiveContainer width="100%" height={80}>
                      <RadialBarChart
                        cx="50%" cy="80%"
                        innerRadius="70%" outerRadius="100%"
                        startAngle={180} endAngle={0}
                        data={securityScore}
                        barSize={10}
                      >
                        <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                        <RadialBar dataKey="value" background={{ fill: "#334155" }} cornerRadius={4} />
                      </RadialBarChart>
                    </ResponsiveContainer>
                    <div className="text-2xl font-extrabold text-emerald-400 -mt-2">94%</div>
                  </div>

                  {/* Stat cards */}
                  <div className="col-span-2 grid grid-cols-2 gap-3">
                    {[
                      { label: "Devices Monitored", value: "342", sub: "98% secure", color: "text-blue-400" },
                      { label: "Open Incidents", value: "3", sub: "↓ 2 this week", color: "text-amber-400" },
                      { label: "Compliance Rate", value: "91%", sub: "NIST aligned", color: "text-emerald-400" },
                      { label: "Vendors Reviewed", value: "28", sub: "All approved", color: "text-violet-400" },
                    ].map((s) => (
                      <div key={s.label} className="rounded-xl bg-[#1e293b] p-3">
                        <div className={`text-xl font-bold ${s.color}`}>{s.value}</div>
                        <div className="text-xs text-gray-400 leading-tight">{s.label}</div>
                        <div className="text-xs text-gray-500 mt-0.5">{s.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Incident trend chart */}
                <div className="rounded-xl bg-[#1e293b] p-4">
                  <div className="text-xs text-gray-400 font-medium mb-3">Incident Trend (Last 6 Months)</div>
                  <ResponsiveContainer width="100%" height={100}>
                    <AreaChart data={trendData} margin={{ top: 0, right: 0, left: -30, bottom: 0 }}>
                      <defs>
                        <linearGradient id="incidentGrad" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                          <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                        </linearGradient>
                      </defs>
                      <XAxis dataKey="month" tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
                      <YAxis tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
                      <Tooltip
                        contentStyle={{ background: "#0f172a", border: "1px solid #334155", borderRadius: 8, fontSize: 11 }}
                        labelStyle={{ color: "#94a3b8" }}
                        itemStyle={{ color: "#10B981" }}
                      />
                      <Area type="monotone" dataKey="incidents" stroke="#10B981" strokeWidth={2} fill="url(#incidentGrad)" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                {/* Alerts list */}
                <div className="rounded-xl bg-[#1e293b] p-4">
                  <div className="text-xs text-gray-400 font-medium mb-2">Recent Security Events</div>
                  <div className="space-y-2">
                    {[
                      { dot: "bg-red-400", msg: "Unauthorized login attempt blocked — 3rd Floor Lab", time: "5m ago" },
                      { dot: "bg-emerald-400", msg: "All student devices patched successfully", time: "2h ago" },
                      { dot: "bg-blue-400", msg: "New vendor assessment completed — ReadingApp Pro", time: "1d ago" },
                    ].map((e, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <div className={`mt-1 h-2 w-2 rounded-full ${e.dot} flex-shrink-0`} />
                        <span className="text-gray-300 flex-1">{e.msg}</span>
                        <span className="text-gray-500 flex-shrink-0">{e.time}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: highlights */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="lg:col-span-2 space-y-4"
          >
            <div className="mb-6">
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">What You Can See</h3>
              <p className="text-sm text-[#64748b] leading-relaxed">
                The dashboard provides a centralized, plain-language view of everything that matters for keeping your school safe.
              </p>
            </div>

            {highlights.map((h, i) => {
              const Icon = h.icon
              return (
                <motion.div
                  key={h.label}
                  initial={{ opacity: 0, x: 16 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.08 }}
                  whileHover={{ x: 4, transition: { duration: 0.15 } }}
                  className="flex items-start gap-4 rounded-xl border border-gray-100 bg-white p-4 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-200 cursor-default"
                >
                  <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg ${h.bg}`}>
                    <Icon className={`h-5 w-5 ${h.color}`} />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0f172a]">{h.label}</div>
                    <div className="text-xs text-[#64748b] mt-0.5 leading-relaxed">{h.detail}</div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
