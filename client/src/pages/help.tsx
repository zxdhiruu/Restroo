import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Search, Book, MessageCircle, Mail, Phone, FileText } from "lucide-react";

export default function Help() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFaqs, setFilteredFaqs] = useState<any[]>([]);

  useEffect(() => {
    document.title = "Help Center - RestaurantFlow";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "Get help with RestaurantFlow. Find answers to common questions, access documentation, and contact our support team.");
    }
  }, []);

  const faqs = [
    {
      id: "getting-started",
      category: "Getting Started",
      question: "How do I set up my restaurant in RestaurantFlow?",
      answer: "After signing up, you'll be guided through our onboarding process. Start by adding your restaurant details, menu items, and staff information. Our setup wizard will walk you through each step, and you can always contact support if you need assistance."
    },
    {
      id: "billing",
      category: "Billing & Plans",
      question: "How does the 14-day free trial work?",
      answer: "Your free trial includes full access to all features of your chosen plan for 14 days. No credit card is required to start, and you can cancel anytime during the trial period without being charged."
    },
    {
      id: "orders",
      category: "Order Management",
      question: "How do I process online orders?",
      answer: "Online orders appear in your dashboard in real-time. You can accept, modify, or decline orders, update preparation times, and notify customers of status changes. All orders are automatically logged for reporting and analytics."
    },
    {
      id: "inventory",
      category: "Inventory",
      question: "How do I track inventory and set low-stock alerts?",
      answer: "Navigate to the Inventory section to add items, set current stock levels, and configure minimum thresholds. When stock falls below your set limit, you'll receive automatic alerts via email and in-app notifications."
    },
    {
      id: "staff",
      category: "Staff Management",
      question: "Can I schedule staff and track working hours?",
      answer: "Yes! Use the Staff Management module to create schedules, track clock-in/out times, manage payroll, and communicate with your team. Staff can access their schedules through the mobile app."
    },
    {
      id: "payments",
      category: "Payments",
      question: "What payment methods do you support?",
      answer: "We support all major credit cards, debit cards, and digital wallets through our secure payment processing. We also integrate with popular POS systems for seamless payment handling."
    },
    {
      id: "mobile",
      category: "Mobile App",
      question: "Is there a mobile app for restaurant owners?",
      answer: "Yes! Our mobile app allows you to manage your restaurant on-the-go. Monitor sales, approve schedules, check inventory, and receive important notifications wherever you are."
    },
    {
      id: "reports",
      category: "Analytics & Reports",
      question: "What kind of reports can I generate?",
      answer: "You can generate detailed reports on sales, popular items, peak hours, staff performance, inventory turnover, and customer trends. All reports can be exported to PDF or Excel formats."
    },
    {
      id: "integrations",
      category: "Integrations",
      question: "Does RestaurantFlow integrate with other systems?",
      answer: "Yes! We integrate with popular POS systems, accounting software, delivery platforms, and payment processors. Our Enterprise plan includes custom integration support."
    },
    {
      id: "support",
      category: "Support",
      question: "How can I contact customer support?",
      answer: "You can reach us via email, live chat, or phone. Starter plan includes email support, Professional includes priority email and chat, and Enterprise includes 24/7 phone support with a dedicated account manager."
    }
  ];

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredFaqs(faqs);
    } else {
      const filtered = faqs.filter(faq => 
        faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchQuery.toLowerCase()) ||
        faq.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredFaqs(filtered);
    }
  }, [searchQuery]);

  const categories = [
    {
      name: "Getting Started",
      icon: Book,
      description: "Setup guides and basic tutorials"
    },
    {
      name: "Order Management",
      icon: FileText,
      description: "Processing and tracking orders"
    },
    {
      name: "Billing & Plans",
      icon: MessageCircle,
      description: "Subscription and payment questions"
    },
    {
      name: "Support",
      icon: MessageCircle,
      description: "Get help from our team"
    }
  ];

  const contactOptions = [
    {
      type: "Email Support",
      description: "Get help via email (All plans)",
      contact: "support@restaurantflow.com",
      responseTime: "Within 24 hours",
      icon: Mail
    },
    {
      type: "Live Chat",
      description: "Chat with our team (Professional+)",
      contact: "Available in-app",
      responseTime: "Within 2 hours",
      icon: MessageCircle
    },
    {
      type: "Phone Support",
      description: "Call our support team (Enterprise)",
      contact: "+1 (555) 123-4567",
      responseTime: "24/7 availability",
      icon: Phone
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
      <section className="py-16 bg-gradient-to-br from-slate-50 to-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Help Center</h1>
          <p className="text-xl text-slate-600 mb-8">
            Find answers to common questions and get help with RestaurantFlow
          </p>
          
          {/* Search Bar */}
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-400" />
            </div>
            <Input
              type="text"
              placeholder="Search for help articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 py-3 text-lg"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Quick Categories */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Browse by Category</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => {
              const IconComponent = category.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{category.name}</h3>
                    <p className="text-sm text-slate-600">{category.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Frequently Asked Questions
              {searchQuery && (
                <span className="text-lg font-normal text-slate-600 ml-2">
                  ({filteredFaqs.length} results)
                </span>
              )}
            </h2>
            
            <Accordion type="single" collapsible className="space-y-4">
              {filteredFaqs.map((faq) => (
                <AccordionItem key={faq.id} value={faq.id} className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left font-medium text-slate-900 hover:text-primary">
                    <div>
                      <span className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full mr-3">
                        {faq.category}
                      </span>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>

            {filteredFaqs.length === 0 && searchQuery && (
              <Card className="p-8 text-center">
                <CardContent>
                  <p className="text-slate-600 mb-4">
                    No results found for "{searchQuery}"
                  </p>
                  <p className="text-sm text-slate-500">
                    Try different keywords or browse our categories above
                  </p>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Contact Support */}
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Support</h2>
            <div className="space-y-4">
              {contactOptions.map((option, index) => {
                const IconComponent = option.icon;
                return (
                  <Card key={index}>
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <IconComponent className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-slate-900 mb-1">{option.type}</h3>
                          <p className="text-sm text-slate-600 mb-2">{option.description}</p>
                          <p className="text-sm font-medium text-slate-900">{option.contact}</p>
                          <p className="text-xs text-slate-500">{option.responseTime}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Quick Links */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Quick Links</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link href="/contact">
                  <Button variant="outline" className="w-full justify-start">
                    Schedule a Demo
                  </Button>
                </Link>
                <Link href="/about">
                  <Button variant="outline" className="w-full justify-start">
                    About RestaurantFlow
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" className="w-full justify-start">
                    View Pricing Plans
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}