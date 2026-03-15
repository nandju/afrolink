import { BeforeHeroSection } from '@/components';
import LatestArticles from '@/components/UI/Insights/LatestArticles';
import Categories from '@/components/UI/Insights/Categories';
import FeaturedInsight from '@/components/UI/Insights/FeaturedInsight';
import CTASection from '@/components/UI/Insights/CTASection';

export default function Insights() {
  return (
    <main>
      <BeforeHeroSection
        backgroundImage="/images/insights-hero.jpg"
        title="INSIGHTS & IDEAS"
        taglineSpan="OUR BLOG"
        taglineStrong="DIGITAL TRENDS"
      />
      <LatestArticles />
      <Categories />
      <FeaturedInsight />
      <CTASection />
    </main>
  );
}