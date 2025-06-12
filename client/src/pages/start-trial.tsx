import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { useAuthState } from "@/hooks/useAuth";
import { apiRequest } from "@/lib/queryClient";
import { CreditCard, Lock, Check } from "lucide-react";

export default function StartTrial() {
  const [, setLocation] = useLocation();
  const { user, isLoading: authLoading } = useAuthState();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("professional");
  const [paymentData, setPaymentData] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardholderName: "",
    billingAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "US"
    }
  });

  useEffect(() => {
    document.title = "Start Free Trial - RestaurantFlow";
    
    if (!authLoading && !user) {
      setLocation("/signup");
    }
  }, [user, authLoading, setLocation]);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      price: 49,
      description: "Perfect for small restaurants",
      features: ["Up to 50 orders/day", "Order management", "Basic inventory", "Email support"]
    },
    {
      id: "professional", 
      name: "Professional",
      price: 99,
      description: "For growing restaurants",
      features: ["Up to 200 orders/day", "Advanced analytics", "Staff management", "Priority support"],
      popular: true
    },
    {
      id: "enterprise",
      name: "Enterprise", 
      price: 199,
      description: "For restaurant chains",
      features: ["Unlimited orders", "Multi-location", "Custom integrations", "24/7 support"]
    }
  ];

  const selectedPlanData = plans.find(p => p.id === selectedPlan);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real implementation, you would use Stripe.js to tokenize the card
      // For demo purposes, we'll simulate the subscription creation
      const response = await apiRequest("POST", "/api/subscription/create", {
        plan: selectedPlan,
        paymentMethodId: "simulated_payment_method"
      });

      toast({
        title: "Trial Started Successfully!",
        description: "Your 14-day free trial has begun. Welcome to RestaurantFlow!",
      });
      
      setLocation("/dashboard");
    } catch (error: any) {
      toast({
        title: "Payment Failed",
        description: error.message || "Failed to process payment. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full" />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors mb-4">
              RestaurantFlow
            </h1>
          </Link>
          <h2 className="text-3xl font-bold text-slate-900">Start Your Free Trial</h2>
          <p className="text-slate-600 mt-2">14 days free, then ${selectedPlanData?.price}/month. Cancel anytime.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Plan Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Choose Your Plan</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {plans.map((plan) => (
                <div
                  key={plan.id}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    selectedPlan === plan.id
                      ? 'border-primary bg-primary/5'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center">
                      <input
                        type="radio"
                        checked={selectedPlan === plan.id}
                        onChange={() => setSelectedPlan(plan.id)}
                        className="mr-3"
                      />
                      <div>
                        <h3 className="font-semibold flex items-center">
                          {plan.name}
                          {plan.popular && (
                            <span className="ml-2 px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-full">
                              Popular
                            </span>
                          )}
                        </h3>
                        <p className="text-sm text-slate-600">{plan.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-lg font-bold">${plan.price}</p>
                      <p className="text-sm text-slate-500">/month</p>
                    </div>
                  </div>
                  <div className="ml-6">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm text-slate-600 mb-1">
                        <Check className="h-3 w-3 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Payment Form */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CreditCard className="h-5 w-5 mr-2" />
                Payment Information
              </CardTitle>
              <p className="text-sm text-slate-600">
                <Lock className="h-4 w-4 inline mr-1" />
                Your payment information is secure and encrypted
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="cardholderName">Cardholder Name</Label>
                  <Input
                    id="cardholderName"
                    value={paymentData.cardholderName}
                    onChange={(e) => setPaymentData(prev => ({ ...prev, cardholderName: e.target.value }))}
                    placeholder="John Doe"
                    required
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    value={paymentData.cardNumber}
                    onChange={(e) => setPaymentData(prev => ({ ...prev, cardNumber: formatCardNumber(e.target.value) }))}
                    placeholder="1234 5678 9012 3456"
                    maxLength={19}
                    required
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="expiryDate">Expiry Date</Label>
                    <Input
                      id="expiryDate"
                      value={paymentData.expiryDate}
                      onChange={(e) => setPaymentData(prev => ({ ...prev, expiryDate: formatExpiryDate(e.target.value) }))}
                      placeholder="MM/YY"
                      maxLength={5}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cvv">CVV</Label>
                    <Input
                      id="cvv"
                      value={paymentData.cvv}
                      onChange={(e) => setPaymentData(prev => ({ ...prev, cvv: e.target.value.replace(/\D/g, '') }))}
                      placeholder="123"
                      maxLength={4}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="street">Billing Address</Label>
                  <Input
                    id="street"
                    value={paymentData.billingAddress.street}
                    onChange={(e) => setPaymentData(prev => ({ 
                      ...prev, 
                      billingAddress: { ...prev.billingAddress, street: e.target.value }
                    }))}
                    placeholder="123 Main Street"
                    required
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      value={paymentData.billingAddress.city}
                      onChange={(e) => setPaymentData(prev => ({ 
                        ...prev, 
                        billingAddress: { ...prev.billingAddress, city: e.target.value }
                      }))}
                      placeholder="New York"
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state">State</Label>
                    <Select 
                      value={paymentData.billingAddress.state}
                      onValueChange={(value) => setPaymentData(prev => ({ 
                        ...prev, 
                        billingAddress: { ...prev.billingAddress, state: value }
                      }))}
                    >
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Select state" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="AL">Alabama</SelectItem>
                        <SelectItem value="CA">California</SelectItem>
                        <SelectItem value="FL">Florida</SelectItem>
                        <SelectItem value="NY">New York</SelectItem>
                        <SelectItem value="TX">Texas</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    value={paymentData.billingAddress.zipCode}
                    onChange={(e) => setPaymentData(prev => ({ 
                      ...prev, 
                      billingAddress: { ...prev.billingAddress, zipCode: e.target.value.replace(/\D/g, '') }
                    }))}
                    placeholder="12345"
                    maxLength={5}
                    required
                    className="mt-2"
                  />
                </div>

                <div className="bg-slate-50 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">Trial Summary</h3>
                  <div className="space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Plan: {selectedPlanData?.name}</span>
                      <span>${selectedPlanData?.price}/month</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>14-day free trial</span>
                      <span>-${selectedPlanData?.price}</span>
                    </div>
                    <div className="border-t pt-2 flex justify-between font-semibold">
                      <span>Due today</span>
                      <span>$0.00</span>
                    </div>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 py-3 font-semibold"
                  disabled={isLoading}
                >
                  {isLoading ? "Processing..." : "Start 14-Day Free Trial"}
                </Button>

                <p className="text-xs text-slate-500 text-center">
                  By starting your trial, you agree to our{" "}
                  <Link href="/terms">
                    <span className="text-primary hover:text-primary/80 cursor-pointer">Terms of Service</span>
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy">
                    <span className="text-primary hover:text-primary/80 cursor-pointer">Privacy Policy</span>
                  </Link>
                  . You can cancel anytime before your trial ends.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}