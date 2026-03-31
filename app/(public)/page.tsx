import {
  HeroSection,
  HowItConnectsSection,
  StartTrackPrepSection,
  OpenRolesSection,
  ClosingAlertBanner,
  TestimonialsSection,
  CTASection,
} from "@/components/HomePageSections";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItConnectsSection />
      <StartTrackPrepSection />
      <OpenRolesSection />
      <ClosingAlertBanner />
      <TestimonialsSection />
      <CTASection />
    </>
  );
}