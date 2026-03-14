"use client"

import { motion } from "framer-motion"
import { Shield, ArrowRight, ChevronDown, Lock, Activity, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: "easeOut" as const },
  }),
}

function DashboardIllustration() {
  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#1E3A8A]/20 via-[#10B981]/10 to-[#1E3A8A]/10 blur-2xl scale-105 animate-pulse-glow" />

      {/* Main dashboard card */}
      <motion.div
        initial={{ opacity: 0, y: 30, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
        className="relative rounded-2xl border border-gray-200 bg-white shadow-2xl overflow-hidden"
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-gray-800">
          <div className="flex gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-500" />
            <div className="h-3 w-3 rounded-full bg-yellow-500" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>
          <div className="flex-1 flex justify-center">
            <div className="bg-[#1e293b] text-gray-400 text-xs px-3 py-0.5 rounded-full font-mono">
              K-12 Security Dashboard
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-5 bg-[#F8FAFC]">
          {/* Top stat cards */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            {[
              { label: "Security Score", value: "94%", color: "text-emerald-600", bg: "bg-emerald-50", border: "border-emerald-200", icon: "✓" },
              { label: "Devices Secure", value: "342", color: "text-blue-700", bg: "bg-blue-50", border: "border-blue-200", icon: "🖥" },
              { label: "Active Alerts", value: "3", color: "text-amber-600", bg: "bg-amber-50", border: "border-amber-200", icon: "⚠" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.1 }}
                className={`rounded-xl p-3 border ${stat.bg} ${stat.border}`}
              >
                <div className="text-lg font-bold">{stat.icon}</div>
                <div className={`text-lg font-bold ${stat.color}`}>{stat.value}</div>
                <div className="text-xs text-gray-500 leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>

          {/* Progress bars */}
          <div className="rounded-xl bg-white border border-gray-200 p-4 mb-3 shadow-sm">
            <div className="text-xs font-semibold text-gray-700 mb-3">Security Compliance</div>
            {[
              { label: "Data Protection", pct: 96, color: "bg-emerald-500" },
              { label: "Device Security", pct: 88, color: "bg-blue-600" },
              { label: "Vendor Safety", pct: 79, color: "bg-violet-500" },
            ].map((bar, i) => (
              <div key={bar.label} className="mb-2 last:mb-0">
                <div className="flex justify-between text-xs text-gray-500 mb-1">
                  <span>{bar.label}</span>
                  <span className="font-medium">{bar.pct}%</span>
                </div>
                <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${bar.pct}%` }}
                    transition={{ duration: 1, delay: 1 + i * 0.15, ease: "easeOut" }}
                    className={`h-full rounded-full ${bar.color}`}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Recent incidents list */}
          <div className="rounded-xl bg-white border border-gray-200 p-4 shadow-sm">
            <div className="text-xs font-semibold text-gray-700 mb-2">Recent Incidents</div>
            {[
              { text: "Suspicious login blocked", time: "2m ago", color: "bg-red-400" },
              { text: "Device patch applied", time: "1h ago", color: "bg-emerald-400" },
              { text: "New vendor reviewed", time: "3h ago", color: "bg-blue-400" },
            ].map((item, i) => (
              <motion.div
                key={item.text}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex items-center gap-2.5 py-1.5 border-b border-gray-50 last:border-0"
              >
                <div className={`h-2 w-2 rounded-full ${item.color} flex-shrink-0`} />
                <span className="text-xs text-gray-700 flex-1">{item.text}</span>
                <span className="text-xs text-gray-400">{item.time}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Floating badges */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.3 }}
        className="absolute -left-6 top-1/3 glass-card rounded-xl px-3 py-2 shadow-lg flex items-center gap-2 animate-float"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-100">
          <Lock className="h-3.5 w-3.5 text-emerald-600" />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-800">Data Protected</div>
          <div className="text-xs text-gray-500">NIST Compliant</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -right-6 top-2/3 glass-card rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
        style={{ animationDelay: "2s" }}
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-100">
          <Activity className="h-3.5 w-3.5 text-blue-600" />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-800">Real-time Monitoring</div>
          <div className="text-xs text-gray-500">24/7 Active</div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="absolute -top-4 right-16 glass-card rounded-xl px-3 py-2 shadow-lg flex items-center gap-2"
      >
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-amber-100">
          <Bell className="h-3.5 w-3.5 text-amber-600" />
        </div>
        <div>
          <div className="text-xs font-bold text-gray-800">Instant Alerts</div>
          <div className="text-xs text-gray-500">Auto-response</div>
        </div>
      </motion.div>
    </div>
  )
}

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden hero-gradient grid-bg">
      {/* Background orbs */}
      <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-[#1E3A8A]/6 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 h-96 w-96 rounded-full bg-[#10B981]/6 blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1.5 mb-6"
            >
              <Shield className="h-3.5 w-3.5 text-[#1E3A8A]" />
              <span className="text-xs font-semibold text-[#1E3A8A] tracking-wide uppercase">
                NIST 800-369 Certified
              </span>
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0f172a] leading-[1.1] tracking-tight mb-6"
            >
              Protecting{" "}
              <span className="gradient-text">Student Data</span>
              <br />& School Systems
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-lg text-[#475569] leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              A cybersecurity dashboard designed for educational institutions to monitor
              security, manage risks, and ensure student data protection — in plain language
              that everyone can understand.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <Button size="xl" className="text-base font-semibold">
                View Security Dashboard
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="xl" className="text-base font-semibold">
                Learn How We Protect Data
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-6 justify-center lg:justify-start mt-10"
            >
              {[
                { value: "10,000+", label: "Students Protected" },
                { value: "99.8%", label: "Uptime" },
                { value: "< 4min", label: "Incident Response" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-extrabold text-[#1E3A8A]">{stat.value}</div>
                  <div className="text-xs text-[#64748b] font-medium">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative"
          >
            <DashboardIllustration />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-gray-400"
      >
        <span className="text-xs font-medium">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 4, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.div>
      </motion.div>
    </section>
  )
}
