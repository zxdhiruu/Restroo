import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Phone, Mail, MessageCircle, Check } from "lucide-react";

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  restaurantName: string;
  restaurantType: string;
  message: string;
}

export default function ContactSection() {
  const { toast } = useToast();
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    restaurantName: "",
    restaurantType: "",
    message: ""
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted!",
        description: "Thank you for your interest! We'll contact you within 24 hours to schedule your demo.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        restaurantName: "",
        restaurantType: "",
        message: ""
      });
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to submit demo request. Please try again.",
        variant: "destructive"
      });
    }
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    contactMutation.mutate(formData);
  };

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      subtitle: "Monday-Friday, 9am-6pm EST"
    },
    {
      icon: Mail,
      title: "Email",
      value: "hello@restaurantflow.com",
      subtitle: "We'll respond within 24 hours"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      value: "Available 24/7",
      subtitle: "Click the chat icon to get instant help"
    }
  ];

  const demoFeatures = [
    "Personalized platform walkthrough",
    "Custom solutions for your restaurant",
    "Q&A with restaurant management experts",
    "ROI calculation and pricing options"
  ];

  return (
    <section id="contact" className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">
              Ready to Transform Your Restaurant?
            </h2>
            <p className="text-xl text-slate-600">
              Schedule a personalized demo and see how RestaurantFlow can streamline your operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl font-semibold text-slate-900">
                  Schedule Your Demo
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@restaurant.com"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="restaurantName" className="text-sm font-medium text-slate-700">
                      Restaurant Name
                    </Label>
                    <Input
                      id="restaurantName"
                      type="text"
                      placeholder="Your Restaurant Name"
                      value={formData.restaurantName}
                      onChange={(e) => handleInputChange("restaurantName", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="restaurantType" className="text-sm font-medium text-slate-700">
                      Restaurant Type
                    </Label>
                    <Select value={formData.restaurantType} onValueChange={(value) => handleInputChange("restaurantType", value)}>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select restaurant type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="fast-casual">Fast Casual</SelectItem>
                        <SelectItem value="fine-dining">Fine Dining</SelectItem>
                        <SelectItem value="cafe">Café</SelectItem>
                        <SelectItem value="quick-service">Quick Service</SelectItem>
                        <SelectItem value="bar-grill">Bar & Grill</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                      Tell us about your needs
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="What challenges are you facing with your current restaurant management?"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 py-3 font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
                    disabled={contactMutation.isPending}
                  >
                    {contactMutation.isPending ? "Submitting..." : "Schedule My Demo"}
                  </Button>
                </form>
              </CardContent>
            </Card>
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-slate-900 mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0">
                          <div className="bg-primary/10 w-10 h-10 rounded-lg flex items-center justify-center">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                        </div>
                        <div className="ml-4">
                          <h4 className="text-lg font-medium text-slate-900">{info.title}</h4>
                          <p className="text-slate-600">{info.value}</p>
                          <p className="text-sm text-slate-500">{info.subtitle}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              
              {/* Benefits */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h4 className="text-lg font-semibold text-slate-900 mb-4">
                    What you'll get in your demo:
                  </h4>
                  <ul className="space-y-3">
                    {demoFeatures.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-3" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
