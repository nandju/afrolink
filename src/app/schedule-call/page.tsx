import { BeforeHeroSection } from '@/components';
import ContactForm from '@/components/UI/ScheduleCall/ContactForm';
import MeetingScheduler from '@/components/UI/ScheduleCall/MeetingScheduler';
import ContactInfo from '@/components/UI/ScheduleCall/ContactInfo';
import CTASection from '@/components/UI/ScheduleCall/CTASection';
import FloatingActionButton from '@/components/UI/ScheduleCall/FloatingActionButton';

export default function ScheduleCall() {
  return (
    <main>
      <BeforeHeroSection
        backgroundImage="/images/schedule-hero.jpg"
        title="PLANIFIER UN APPEL"
        taglineSpan="CONTACTEZ-NOUS"
        taglineStrong="PARLONS-EN"
      />
      <ContactForm />
      {/* <MeetingScheduler />
      <ContactInfo />
      <CTASection /> */}
      <FloatingActionButton />
    </main>
  );
}