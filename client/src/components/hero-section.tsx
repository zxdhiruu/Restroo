import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="pt-24 pb-16 lg:pt-32 lg:pb-24 gradient-hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-center">
          <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left animate-fade-in-up">
            <h1 className="text-4xl font-bold text-slate-900 tracking-tight sm:text-5xl lg:text-6xl">
              Streamline Your{" "}
              <span className="text-primary">Restaurant Operations</span>
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              Transform your restaurant management with our comprehensive SaaS platform. 
              Handle orders, inventory, staff, and analytics all in one powerful solution.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Start 14-Day Free Trial
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={scrollToContact}
                className="border-2 border-slate-300 text-slate-700 px-8 py-4 text-lg font-semibold hover:border-primary hover:text-primary transition-all duration-300"
              >
                Schedule Demo
              </Button>
            </div>
            <div className="mt-6 flex items-center justify-center lg:justify-start space-x-6 text-sm text-slate-500">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                No setup fees
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                Cancel anytime
              </div>
            </div>
          </div>
          <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
            <img 
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern restaurant interior" 
              className="w-full rounded-2xl shadow-2xl ring-1 ring-black ring-opacity-5" 
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
