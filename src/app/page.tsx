import Hero from "@/components/heroSection/Hero";
import BenefitsSection from "@/components/sections/BenefitsSection";
import BestsellersSection from "@/components/sections/BestsellersSection";
import FeaturedCollectionSection from "@/components/sections/FeaturedCollectionSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedCollectionSection />
      <BenefitsSection />
      <BestsellersSection />
      <TestimonialsSection />
      <NewsletterSection />
    </main>
  );
}
