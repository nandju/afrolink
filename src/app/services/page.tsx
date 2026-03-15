import { BeforeHeroSection } from '@/components';
import OurExpertise from '@/components/UI/Services/OurExpertise';
import OurProcess from '@/components/UI/Services/OurProcess';
import WhyChooseAfroLink from '@/components/UI/Services/WhyChooseAfroLink';
import CTASection from '@/components/UI/Services/CTASection';

export default function Services() {
  return (
    <main>
      <BeforeHeroSection
        backgroundImage="/images/services-hero.jpg"
        title="DIGITAL COMMUNICATION SERVICES"
        taglineSpan="OUR SERVICES"
        taglineStrong="DIGITAL EXPERTISE"
      />
      <OurExpertise />
      <OurProcess />
      <WhyChooseAfroLink />
      <CTASection />
    </main>
  );
}