"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { ArrowRight, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function CTASection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1E3A8A] to-[#1e293b]" />
      <div className="absolute inset-0 grid-bg opacity-20" />

      {/* Glowing orbs */}
      <div className="absolute top-1/2 left-1/4 h-64 w-64 rounded-full bg-[#10B981]/20 blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-1/4 h-64 w-64 rounded-full bg-[#1E3A8A]/40 blur-3xl -translate-y-1/2" />

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)",
          backgroundSize: "32px 32px"
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 32 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Shield icon */}
          <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 border border-white/20 mb-6">
            <Shield className="h-8 w-8 text-white" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white mb-5 leading-tight">
            Building a Safer Digital{" "}
            <span className="text-[#10B981]">Learning Environment</span>
          </h2>

          <p className="text-lg text-blue-200 max-w-2xl mx-auto leading-relaxed mb-10">
            Join hundreds of schools that use our platform to protect student data,
            maintain secure systems, and keep parents informed — all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="xl"
              className="bg-white text-[#1E3A8A] hover:bg-blue-50 shadow-2xl hover:shadow-white/20 font-semibold"
            >
              Explore Security Dashboard
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="xl"
              className="bg-transparent border-2 border-white/40 text-white hover:bg-white/10 hover:border-white/60 font-semibold"
            >
              Request a Demo
            </Button>
          </div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 mt-12"
          >
            {[
              "NIST 800-369 Compliant",
              "FERPA Aligned",
              "COPPA Compliant",
              "SOC 2 Ready",
            ].map((badge) => (
              <div key={badge} className="flex items-center gap-2 text-sm text-blue-200">
                <div className="h-1.5 w-1.5 rounded-full bg-[#10B981]" />
                {badge}
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
