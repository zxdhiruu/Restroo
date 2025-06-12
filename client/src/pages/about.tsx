import { useEffect } from "react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Award, Heart } from "lucide-react";

export default function About() {
  useEffect(() => {
    document.title = "About Us - RestaurantFlow";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Learn about RestaurantFlow's mission to revolutionize restaurant management. Meet our team and discover our commitment to helping restaurants succeed.");
    }
  }, []);

  const values = [
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously evolve our platform with cutting-edge technology to stay ahead of industry needs."
    },
    {
      icon: Heart,
      title: "Customer Success",
      description: "Your success is our success. We're committed to providing exceptional support and solutions."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "We work closely with restaurant owners to understand their challenges and build solutions together."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from product quality to customer service."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      image: "https://images.unsplash.com/photo-1494790108755-2616b332c3db?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Former restaurant owner with 15 years of industry experience. Passionate about solving real-world restaurant challenges."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder", 
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Tech veteran with expertise in scalable systems. Previously led engineering teams at major SaaS companies."
    },
    {
      name: "Emily Johnson",
      role: "Head of Product",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300",
      bio: "Product strategist focused on user experience. Expert in translating complex workflows into intuitive interfaces."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/">
              <h1 className="text-xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors">
                RestaurantFlow
              </h1>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="ghost" className="text-slate-600 hover:text-primary">
                  Sign In
                </Button>
              </Link>
              <Link href="/signup">
                <Button className="bg-primary hover:bg-primary/90 text-white">
                  Start Free Trial
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            About RestaurantFlow
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We're on a mission to revolutionize restaurant management by providing powerful, 
            intuitive tools that help restaurant owners focus on what they do best - creating amazing experiences for their customers.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  RestaurantFlow was born from frustration. Our founders, Sarah and Marcus, witnessed firsthand 
                  the challenges restaurant owners face with outdated, complicated management systems that 
                  hindered rather than helped their operations.
                </p>
                <p>
                  After working with hundreds of restaurant owners, we realized that most solutions in the 
                  market were either too complex, too expensive, or simply didn't address the real problems 
                  restaurants face every day.
                </p>
                <p>
                  We set out to build something different - a platform that's powerful enough for enterprise 
                  chains yet simple enough for a single-location family restaurant. Today, we're proud to 
                  serve thousands of restaurants worldwide, helping them streamline operations and grow their business.
                </p>
              </div>
            </div>
            <div>
              <img 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400" 
                alt="Restaurant kitchen team working together" 
                className="rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 lg:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Values</h2>
            <p className="text-xl text-slate-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-3">{value.title}</h3>
                    <p className="text-slate-600">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-slate-600">
              The passionate people behind RestaurantFlow
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="p-0">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-lg font-semibold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-sm text-slate-600">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Restaurant?</h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Join thousands of restaurant owners who trust RestaurantFlow to manage their operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button size="lg" variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 px-8">
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}