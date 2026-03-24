import {
  FAQ,
  Featured,
  FinancialFuture,
  FinancilaFreedom,
  HeroSection,
  IntroSection,
  JoinSection,
  OffersSection,
  BeforeHeroSection,
} from '@/components';

export default function Home() {
  return (
    <main>
      <BeforeHeroSection />
      <HeroSection />
      <Featured /> 
      <OffersSection />
      <FinancilaFreedom />
      {/* <FinancialFuture /> */}
      {/* <IntroSection /> */}
      {/* <JoinSection /> */}
      <FAQ />
    </main>
  );
}
