import { useEffect } from "react";
import PricingSection from "@/components/pricing-section";

export default function Pricing() {
  useEffect(() => {
    document.title = "Pricing - RestaurantFlow";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Choose the perfect RestaurantFlow plan for your restaurant. Simple, transparent pricing with no hidden fees. Start with a 14-day free trial.");
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <PricingSection />
    </div>
  );
}
