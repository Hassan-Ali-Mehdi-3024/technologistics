import AboutHero from "@/components/about/hero"
import OurStory from "@/components/about/our-story"
import MissionValues from "@/components/about/mission-values"
import Team from "@/components/about/team"
import CallToAction from "@/components/about/call-to-action"
import { SparklesCore } from "@/components/sparkles"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      {/* Ambient background with moving particles */}
      <div className="h-full w-full absolute inset-0 z-0">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <AboutHero />
        <OurStory />
        <MissionValues />
        <Team />
        <CallToAction />
        <Footer />
      </div>
    </main>
  )
}
