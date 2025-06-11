import { Card, CardContent } from "@/components/ui/card";
import { 
  ClipboardList, 
  Package, 
  Users, 
  BarChart3, 
  CreditCard, 
  Smartphone 
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: ClipboardList,
      title: "Order Management",
      description: "Streamline order processing from online, phone, and in-house orders with real-time tracking and automated notifications."
    },
    {
      icon: Package,
      title: "Inventory Control",
      description: "Track ingredients, manage suppliers, and get automated alerts for low stock levels to prevent shortages."
    },
    {
      icon: Users,
      title: "Staff Management",
      description: "Schedule shifts, track performance, manage payroll, and communicate with your team all in one place."
    },
    {
      icon: BarChart3,
      title: "Analytics Dashboard",
      description: "Get insights into sales trends, popular items, peak hours, and customer behavior with comprehensive reporting."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Accept all payment methods, split bills, handle tips, and integrate with popular POS systems seamlessly."
    },
    {
      icon: Smartphone,
      title: "Mobile App",
      description: "Manage your restaurant on-the-go with our mobile app. Check sales, approve schedules, and monitor operations anywhere."
    }
  ];

  return (
    <section id="features" className="py-16 lg:py-24 gradient-features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
            Everything You Need to Run Your Restaurant
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From order management to staff scheduling, our comprehensive platform handles every aspect of your restaurant operations.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <Card key={index} className="group p-8 bg-slate-50 border-transparent hover:bg-white hover:shadow-xl transition-all duration-300 hover:border-slate-200">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary transition-colors duration-300">
                    <IconComponent className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
        
        {/* Feature Showcase */}
        <div className="bg-slate-900 rounded-3xl p-8 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                See Your Dashboard in Action
              </h3>
              <p className="text-slate-300 text-lg leading-relaxed mb-8">
                Our intuitive dashboard gives you a complete overview of your restaurant's performance. Monitor sales, track orders, and manage operations with real-time data visualization.
              </p>
              <div className="space-y-4">
                {[
                  "Real-time order tracking",
                  "Customizable reporting", 
                  "Multi-location support"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className="h-5 w-5 bg-green-400 rounded-full flex items-center justify-center mr-3">
                      <svg className="h-3 w-3 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-slate-300">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Restaurant dashboard interface" 
                className="rounded-2xl shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
