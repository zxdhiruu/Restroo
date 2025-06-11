import { useEffect } from "react";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";

export default function Home() {
  useEffect(() => {
    document.title = "RestaurantFlow - Modern Restaurant Management Software";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Transform your restaurant management with our comprehensive SaaS platform. Handle orders, inventory, staff, and analytics all in one powerful solution.");
    }
  }, []);

  return (
    <div className="min-h-screen">
      <HeroSection />
      <FeaturesSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}
