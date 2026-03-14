"use client"

import { Shield } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#1E3A8A]">
              <Shield className="h-4 w-4 text-white" />
            </div>
            <div>
              <span className="text-sm font-bold text-white">NIST 800-369</span>
              <span className="text-sm text-gray-400"> K-12 Security Dashboard</span>
            </div>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            {["Privacy Policy", "Terms of Use", "Accessibility", "Contact Us"].map((link) => (
              <a key={link} href="#" className="hover:text-white transition-colors duration-150">
                {link}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} NIST K-12 Security Dashboard. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-800 text-center text-xs text-gray-600">
          Designed to protect student privacy and support safe educational environments.
          Compliant with NIST 800-369, FERPA, COPPA, and CIPA guidelines.
        </div>
      </div>
    </footer>
  )
}
