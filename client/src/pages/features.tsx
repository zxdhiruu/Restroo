import { useEffect } from "react";
import FeaturesSection from "@/components/features-section";

export default function Features() {
  useEffect(() => {
    document.title = "Features - RestaurantFlow";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Discover RestaurantFlow's comprehensive features: order management, inventory control, staff scheduling, analytics dashboard, payment processing, and mobile app access.");
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <FeaturesSection />
    </div>
  );
}
