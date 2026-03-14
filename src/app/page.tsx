import Header from "@/components/Header"
import HeroSection from "@/components/HeroSection"
import WhySection from "@/components/WhySection"
import FeaturesSection from "@/components/FeaturesSection"
import DashboardSection from "@/components/DashboardSection"
import ParentsSection from "@/components/ParentsSection"
import MetricsSection from "@/components/MetricsSection"
import UsersSection from "@/components/UsersSection"
import CTASection from "@/components/CTASection"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <WhySection />
        <FeaturesSection />
        <DashboardSection />
        <ParentsSection />
        <MetricsSection />
        <UsersSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
