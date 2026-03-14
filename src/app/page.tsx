"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Sparkles } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Accordion } from "@/components/animate-ui/accordion";
import { Shine } from "@/components/animate-ui/primitives/effects/shine";
import { Tilt, TiltContent } from "@/components/animate-ui/primitives/effects/tilt";
import { GradientText } from "@/components/animate-ui/primitives/texts/gradient";
import { TypingText, TypingTextCursor } from "@/components/animate-ui/primitives/texts/typing";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const implementationAreas = [
  "Student Data Protection",
  "Secure Authentication",
  "Device Security Monitoring",
  "Vendor Risk Management",
  "Incident Tracking",
  "Compliance Monitoring",
  "Access Logging",
  "Audit Trail",
  "Parent Security Communication",
  "Security Metrics Visibility",
];

const faqs = [
  {
    id: "q-1",
    question: "What is the NIST 800-369 K-12 Security Dashboard?",
    answer:
      "It is a clear school security dashboard that helps teams and families understand how student information and digital systems are being protected.",
  },
  {
    id: "q-2",
    question: "How does this help protect student data?",
    answer:
      "It gives school teams one place to monitor protection status, spot concerns quickly, and follow up before small issues become bigger problems.",
  },
  {
    id: "q-3",
    question: "Can parents view security-related information?",
    answer:
      "Yes. Schools can share simple security updates so parents understand what safeguards are active and how student data is being protected.",
  },
  {
    id: "q-4",
    question: "What kinds of risks does the dashboard monitor?",
    answer:
      "It tracks account safety, device health, alerts, and response progress so staff can act quickly and keep school systems stable.",
  },
  {
    id: "q-5",
    question: "Who uses this dashboard in a school?",
    answer:
      "Administrators, school staff, and teachers use it directly, while parents benefit through clearer communication and stronger trust.",
  },
  {
    id: "q-6",
    question: "Does the dashboard support compliance tracking?",
    answer:
      "Yes. It provides a clear view of progress so schools can stay organized and maintain strong security practices over time.",
  },
];

const audienceCards = [
  {
    title: "Parents",
    image: "/parent-transparency.svg",
    description:
      "Understand how student data is protected and how schools communicate security clearly.",
  },
  {
    title: "Teachers",
    image: "/teacher-visibility.svg",
    description:
      "Use secure school systems with confidence and visibility into safe digital practices.",
  },
  {
    title: "Administrators",
    image: "/admin-oversight.svg",
    description:
      "Monitor compliance, incidents, devices, and risk from one central dashboard.",
  },
];

export default function Home() {
  const items = useMemo(() => [...implementationAreas, ...implementationAreas], []);
  const [pointer, setPointer] = useState({ x: 50, y: 45 });

  return (
    <main
      id="home"
      className="relative overflow-hidden"
      onMouseMove={(event) => {
        const x = (event.clientX / window.innerWidth) * 100;
        const y = (event.clientY / window.innerHeight) * 100;
        setPointer({ x, y });
      }}
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <motion.div
          animate={{ x: pointer.x * 0.2, y: pointer.y * 0.15 }}
          transition={{ type: "spring", stiffness: 30, damping: 24 }}
          className="absolute -left-20 top-16 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl dark:bg-blue-400/20"
        />
        <motion.div
          animate={{ x: pointer.x * -0.16, y: pointer.y * 0.18 }}
          transition={{ type: "spring", stiffness: 30, damping: 24 }}
          className="absolute right-8 top-44 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl dark:bg-cyan-400/20"
        />
        <motion.div
          animate={{ x: pointer.x * 0.1, y: pointer.y * -0.15 }}
          transition={{ type: "spring", stiffness: 30, damping: 24 }}
          className="absolute bottom-10 left-1/3 h-64 w-64 rounded-full bg-emerald-500/20 blur-3xl dark:bg-emerald-400/20"
        />
      </div>

      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/95 backdrop-blur-md">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3.5 sm:px-6">
          <a href="#home" className="max-w-64 text-[15px] font-semibold leading-tight text-slate-900 dark:text-white sm:max-w-none">
            NIST 800-369 K-12 Security Dashboard
          </a>
          <nav className="hidden items-center gap-5 text-sm font-medium text-slate-900 dark:text-slate-200 md:flex">
            <a href="#home" className="transition-colors hover:text-blue-700 dark:hover:text-cyan-300">Home</a>
            <a href="#features" className="transition-colors hover:text-blue-700 dark:hover:text-cyan-300">Features</a>
            <a href="#dashboard" className="transition-colors hover:text-blue-700 dark:hover:text-cyan-300">Dashboard</a>
            <a href="#faq" className="transition-colors hover:text-blue-700 dark:hover:text-cyan-300">FAQ</a>
            <a href="#contact" className="transition-colors hover:text-blue-700 dark:hover:text-cyan-300">Contact</a>
          </nav>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Shine duration={6} loop loopDelay={2.5} deg={12} enable enableOnHover asChild>
              <Button size="lg" className="hidden sm:inline-flex" onClick={() => document.getElementById("dashboard")?.scrollIntoView()}>
                Explore the Dashboard
              </Button>
            </Shine>
          </div>
        </div>
      </header>

      <div className="pt-[76px]">
      <section className="mx-auto grid w-full max-w-6xl items-center gap-10 px-4 pb-24 pt-8 sm:px-6 md:grid-cols-2 md:gap-14 md:pt-10">
        <motion.div className="min-w-0" initial={false} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }}>
          <Badge className="mb-4">Trusted Security Visibility</Badge>
          <GradientText
            className="max-w-[15ch] text-[clamp(2.15rem,5.1vw,4.2rem)] font-bold leading-[1.08] tracking-[-0.02em] [text-wrap:balance]"
            text="Protecting Student Data & School Systems"
            neon={false}
          />
          <div className="mt-6 min-h-24">
            <TypingText
              delay={20}
              holdDelay={2000}
              className="max-w-xl text-base text-slate-800 md:text-lg dark:text-slate-300"
              text="A secure and easy-to-understand dashboard that helps schools monitor cybersecurity, manage risks, and communicate protection measures to teachers and parents."
              loop={false}
            >
              <TypingTextCursor className="!ml-1 !h-5 !w-1 rounded-full" />
            </TypingText>
          </div>
          <p className="font-serif-accent mt-4 text-lg text-slate-800 dark:text-slate-200">
            Built to make digital safety clear, calm, and consistent for every school community.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <Shine duration={6} loop loopDelay={2.5} deg={12} enable enableOnHover asChild>
              <Button size="lg" onClick={() => document.getElementById("dashboard")?.scrollIntoView()}>
                Explore the Dashboard
              </Button>
            </Shine>
            <Button variant="outline" size="lg" onClick={() => document.getElementById("why")?.scrollIntoView()}>
              Learn More
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="relative min-w-0"
        >
          <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-blue-600/20 via-cyan-500/20 to-emerald-500/20 blur-2xl" />
          <Card className="relative overflow-hidden rounded-3xl">
            <Image
              src="/dashboard-preview.svg"
              alt="NIST K-12 security dashboard preview"
              width={1200}
              height={760}
              className="h-auto w-full"
              priority
            />
            <CardContent className="grid gap-3 pt-4 sm:grid-cols-3">
              {[
                ["Security Score", "94%"],
                ["Devices Protected", "1,482"],
                ["Active Alerts", "3"],
              ].map(([label, value]) => (
                <motion.div
                  key={label}
                  whileHover={{ y: -4 }}
                  className="rounded-xl border border-border/70 bg-background/85 p-4"
                >
                  <p className="font-mono-metric text-xs uppercase tracking-wide text-slate-700 dark:text-slate-300">{label}</p>
                  <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">{value}</p>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </section>

      <section id="features" className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl text-slate-900 dark:text-white">NIST 800-369 Implementation Areas</h2>
          <Badge>Always Visible</Badge>
        </div>
        <div className="overflow-hidden rounded-2xl border border-border/70 bg-card/85 p-3">
          <div className="marquee-track flex w-max gap-3">
            {items.map((item, index) => (
              <motion.div
                key={`${item}-${index}`}
                whileHover={{ y: -3 }}
                className="rounded-full border border-border/70 bg-background/90 px-4 py-2 text-sm text-slate-700 shadow-sm dark:text-slate-200"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section id="why" className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <Card className="rounded-3xl">
          <CardHeader>
            <CardTitle className="text-2xl text-slate-900 dark:text-white">Why it matters</CardTitle>
            <CardDescription className="max-w-3xl text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Schools protect sensitive student information every day. This dashboard helps schools stay secure,
              supports teachers with safer systems, and gives parents clearer visibility into how digital protection is
              managed.
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <h2 className="mb-6 text-2xl text-slate-900 dark:text-white">Dashboard Benefits by Audience</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {audienceCards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
            >
              <Tilt>
                <TiltContent>
                  <Card className="overflow-hidden rounded-3xl transition-transform hover:-translate-y-1">
                    <div className="relative h-44 w-full bg-slate-100 dark:bg-slate-900">
                      <Image src={card.image} alt={`${card.title} dashboard view`} fill className="object-cover" />
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl text-slate-900 dark:text-white">{card.title}</CardTitle>
                      <CardDescription className="text-slate-700 dark:text-slate-300">
                        {card.description}
                      </CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <div className="inline-flex items-center gap-2 rounded-full bg-accent/70 px-3 py-1 text-xs text-slate-800 dark:text-slate-200">
                        <ShieldCheck className="h-3.5 w-3.5" />
                        School trust and safety
                      </div>
                    </CardFooter>
                  </Card>
                </TiltContent>
              </Tilt>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="dashboard" className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-2xl text-slate-900 dark:text-white">Dashboard Preview</h2>
          <Badge>Simple, Actionable, Trusted</Badge>
        </div>
        <Card className="rounded-3xl">
          <CardContent className="grid gap-4 p-6 lg:grid-cols-3">
            {[
              ["Security Score", "94%", "Strong overall posture"],
              ["Devices Protected", "1,482", "District-wide endpoint coverage"],
              ["Active Alerts", "3", "Low active risk at this time"],
            ].map(([name, value, note]) => (
              <motion.div key={name} whileHover={{ y: -4 }} className="rounded-2xl border border-border/70 bg-background/85 p-5">
                <p className="font-mono-metric text-xs uppercase tracking-wide text-slate-700 dark:text-slate-300">{name}</p>
                <p className="mt-2 text-3xl font-semibold text-slate-900 dark:text-white">{value}</p>
                <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{note}</p>
              </motion.div>
            ))}
            <div className="rounded-2xl border border-border/70 bg-background/85 p-5 lg:col-span-2">
              <p className="font-mono-metric mb-4 text-xs uppercase tracking-wide text-slate-700 dark:text-slate-300">Incident Status</p>
              <div className="space-y-3">
                {[
                  ["Account Safety Review", "Contained"],
                  ["Vendor Security Check", "In Progress"],
                  ["Policy Validation", "Verified"],
                ].map(([item, state]) => (
                  <div key={item} className="flex items-center justify-between rounded-xl bg-muted/45 px-4 py-3">
                    <span className="text-sm text-slate-800 dark:text-slate-200">{item}</span>
                    <span className="text-sm font-semibold text-primary">{state}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="rounded-2xl border border-border/70 bg-background/85 p-5">
              <p className="font-mono-metric mb-4 text-xs uppercase tracking-wide text-slate-700 dark:text-slate-300">Compliance Progress</p>
              <div className="h-2 rounded-full bg-muted">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "89%" }}
                  transition={{ duration: 0.9 }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-emerald-500 dark:from-blue-400 dark:via-cyan-400 dark:to-emerald-400"
                />
              </div>
              <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">89% completed for this review cycle.</p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="faq" className="mx-auto w-full max-w-6xl px-4 pb-24 sm:px-6">
        <h2 className="mb-6 text-2xl text-slate-900 dark:text-white">Frequently Asked Questions</h2>
        <Accordion items={faqs} />
      </section>

      <section id="contact" className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <Card className="gradient-flow-surface rounded-3xl bg-gradient-to-r from-blue-700 via-cyan-500 to-emerald-500 text-slate-900 dark:from-blue-300 dark:via-cyan-300 dark:to-emerald-300 dark:text-slate-950">
          <CardContent className="grid gap-6 p-8 md:grid-cols-[minmax(0,1fr)_auto] md:items-center md:gap-8 md:p-10">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold md:text-3xl">Build a safer digital learning environment</h2>
              <p className="font-serif-accent mt-3 text-lg leading-relaxed opacity-95">
                Support school communities with clear, trusted visibility into digital protection.
              </p>
            </div>
            <Shine duration={6} loop loopDelay={2.5} deg={12} enable enableOnHover asChild>
              <Button
                size="lg"
                className="w-full border border-slate-200 bg-white text-slate-900 shadow-sm hover:bg-slate-100 sm:w-auto dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:hover:bg-slate-900"
                onClick={() => document.getElementById("dashboard")?.scrollIntoView()}
              >
                Explore the Dashboard
              </Button>
            </Shine>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-border/70 py-8">
        <div className="mx-auto grid w-full max-w-6xl gap-5 px-4 text-sm text-slate-700 dark:text-slate-300 sm:px-6 md:grid-cols-[1fr_auto] md:items-center">
          <div className="space-y-2">
            <p className="font-semibold text-slate-900 dark:text-white">NIST 800-369 K-12 Security Dashboard</p>
            <p>Helping schools protect student data with clarity, consistency, and trust.</p>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-border/70 bg-card/70 px-3 py-1.5 text-xs text-slate-700 dark:text-slate-300">
              <Sparkles className="h-3.5 w-3.5" />
              Trusted K-12 security communication
            </div>
          </div>
          <div className="flex flex-wrap gap-5 md:justify-end">
            <a href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Privacy</a>
            <a href="#" className="transition-colors hover:text-slate-900 dark:hover:text-white">Security</a>
            <a href="#contact" className="transition-colors hover:text-slate-900 dark:hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
      </div>
    </main>
  );
}
