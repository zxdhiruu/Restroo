import { useEffect } from "react";
import ContactSection from "@/components/contact-section";

export default function Contact() {
  useEffect(() => {
    document.title = "Contact - RestaurantFlow";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get in touch with RestaurantFlow. Schedule a personalized demo, contact our sales team, or reach out for support. We're here to help transform your restaurant operations.");
    }
  }, []);

  return (
    <div className="min-h-screen pt-16">
      <ContactSection />
    </div>
  );
}
