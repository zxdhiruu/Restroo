import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Link } from "wouter";

export default function PricingSection() {
  const plans = [
    {
      name: "Starter",
      description: "Perfect for small restaurants",
      price: 49,
      period: "/month",
      limit: "Up to 50 orders/day",
      features: [
        "Order management",
        "Basic inventory tracking",
        "Email support",
        "Mobile app access"
      ],
      buttonText: "Start Free Trial",
      popular: false
    },
    {
      name: "Professional",
      description: "For growing restaurants",
      price: 99,
      period: "/month",
      limit: "Up to 200 orders/day",
      features: [
        "Everything in Starter",
        "Advanced analytics",
        "Staff management",
        "Priority support",
        "API access"
      ],
      buttonText: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      description: "For restaurant chains",
      price: 199,
      period: "/month",
      limit: "Unlimited orders",
      features: [
        "Everything in Professional",
        "Multi-location management",
        "Custom integrations",
        "Dedicated account manager",
        "24/7 phone support"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Choose the perfect plan for your restaurant. No hidden fees, no long-term contracts.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative ${
                plan.popular 
                  ? "bg-primary text-white border-2 border-primary transform hover:scale-105 shadow-2xl" 
                  : "bg-white border border-slate-200 hover:shadow-xl"
              } transition-all duration-300`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="text-center pb-8 pt-8">
                <h3 className={`text-xl font-semibold mb-2 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 ${plan.popular ? "text-primary-100" : "text-slate-500"}`}>
                  {plan.description}
                </p>
                <div className={`text-4xl font-bold mb-2 ${plan.popular ? "text-white" : "text-slate-900"}`}>
                  ${plan.price}
                  <span className={`text-lg font-normal ${plan.popular ? "text-primary-100" : "text-slate-500"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`text-sm ${plan.popular ? "text-primary-100" : "text-slate-500"}`}>
                  {plan.limit}
                </p>
              </CardHeader>
              
              <CardContent className="pb-8">
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className={`h-5 w-5 mr-3 ${plan.popular ? "text-green-400" : "text-green-500"}`} />
                      <span className={plan.popular ? "text-primary-50" : "text-slate-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Link href={plan.buttonText === "Contact Sales" ? "/contact" : "/signup"}>
                  <Button 
                    className={`w-full py-3 px-6 font-semibold transition-colors duration-300 ${
                      plan.popular 
                        ? "bg-white text-primary hover:bg-slate-50" 
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                    }`}
                  >
                    {plan.buttonText}
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-slate-600 mb-4">All plans include a 14-day free trial. No credit card required.</p>
          <p className="text-sm text-slate-500">
            Need a custom solution?{" "}
            <button 
              onClick={() => {
                const element = document.getElementById("contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="text-primary hover:text-primary/80 font-medium underline"
            >
              Contact our sales team
            </button>
          </p>
        </div>
      </div>
    </section>
  );
}
