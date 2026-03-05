import { TopBanner } from "@/components/top-banner"
import { HeroSection } from "@/components/hero-section"
import { PainSection } from "@/components/pain-section"
import { ProblemSection } from "@/components/problem-section"
import { StorySection } from "@/components/story-section"
import { MechanismSection } from "@/components/mechanism-section"
import { SocialProofSection } from "@/components/social-proof-section"
import { OfferSection } from "@/components/offer-section"
import { UrgencyGuaranteeSection } from "@/components/urgency-guarantee-section"
import { FAQCloseSection } from "@/components/faq-close-section"
import { Footer } from "@/components/footer"
import { FacebookPixelEvents } from "@/components/facebook-pixel-events"

export default function Page() {
  return (
    <main>
      <TopBanner />
      <HeroSection />
      <PainSection />
      <ProblemSection />
      <StorySection />
      <MechanismSection />
      <SocialProofSection />
      <OfferSection />
      <UrgencyGuaranteeSection />
      <FAQCloseSection />
      <Footer />
      <FacebookPixelEvents />
    </main>
  )
}
