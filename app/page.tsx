import { ClosingCta } from "@/components/landing/closing-cta"
import { Faq } from "@/components/landing/faq"
import { Features } from "@/components/landing/features"
import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Marquee } from "@/components/landing/marquee"
import { Safety } from "@/components/landing/safety"
import { SiteHeader } from "@/components/landing/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Marquee />
        <Features />
        <Safety />
        <Faq />
        <ClosingCta />
      </main>
    </>
  )
}
