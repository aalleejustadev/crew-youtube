import { Hero } from "@/components/landing/hero"
import { HowItWorks } from "@/components/landing/how-it-works"
import { Marquee } from "@/components/landing/marquee"
import { SiteHeader } from "@/components/landing/site-header"

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <HowItWorks />
        <Marquee />
      </main>
    </>
  )
}
