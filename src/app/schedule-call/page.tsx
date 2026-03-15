import { BeforeHeroSection } from '@/components';
import ContactForm from '@/components/UI/ScheduleCall/ContactForm';
import MeetingScheduler from '@/components/UI/ScheduleCall/MeetingScheduler';
import ContactInfo from '@/components/UI/ScheduleCall/ContactInfo';
import CTASection from '@/components/UI/ScheduleCall/CTASection';

export default function ScheduleCall() {
  return (
    <main>
      <BeforeHeroSection
        backgroundImage="/images/schedule-hero.jpg"
        title="SCHEDULE A CALL"
        taglineSpan="CONTACT US"
        taglineStrong="LET'S TALK"
      />
      <ContactForm />
      <MeetingScheduler />
      <ContactInfo />
      <CTASection />
    </main>
  );
}