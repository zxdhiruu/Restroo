import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Terms() {
  useEffect(() => {
    document.title = "Terms of Service - RestaurantFlow";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "RestaurantFlow Terms of Service. Read our terms and conditions for using our restaurant management platform and services.");
    }
  }, []);

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

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Terms of Service</h1>
          <p className="text-slate-600">Last updated: December 12, 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                By accessing or using RestaurantFlow's services, you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are 
                prohibited from using or accessing this site and our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Description of Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                RestaurantFlow provides a cloud-based restaurant management platform that includes:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Order management and tracking systems</li>
                <li>Inventory control and supplier management</li>
                <li>Staff scheduling and payroll management</li>
                <li>Analytics and reporting tools</li>
                <li>Payment processing integration</li>
                <li>Mobile application access</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts and Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                To use our services, you must create an account and provide accurate, complete information. 
                You are responsible for:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
                <li>Ensuring your account information remains current and accurate</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Subscription and Payment Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Subscription Plans</h4>
                <p className="text-slate-600">
                  We offer various subscription plans with different features and pricing. All plans include 
                  a 14-day free trial period.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Payment</h4>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Subscription fees are billed monthly or annually in advance</li>
                  <li>All fees are non-refundable except as required by law</li>
                  <li>We may change our pricing with 30 days' notice</li>
                  <li>Failed payments may result in service suspension</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Cancellation</h4>
                <p className="text-slate-600">
                  You may cancel your subscription at any time. Cancellation will be effective at the end 
                  of your current billing period, and you will retain access until that time.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Acceptable Use Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">You agree not to use our services to:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Violate any applicable laws or regulations</li>
                <li>Transmit harmful, offensive, or inappropriate content</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt our services</li>
                <li>Use our services for any illegal or fraudulent activities</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Resell or redistribute our services without permission</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Data and Privacy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Your privacy is important to us. Our collection and use of your information is governed by our 
                <Link href="/privacy" className="text-primary hover:text-primary/80 ml-1">Privacy Policy</Link>, 
                which is incorporated into these terms by reference.
              </p>
              <p className="text-slate-600">
                You retain ownership of your data. We will not access, use, or disclose your data except as 
                necessary to provide our services or as required by law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Intellectual Property</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                RestaurantFlow and its services are protected by copyright, trademark, and other intellectual 
                property laws. You acknowledge that:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>We retain all rights to our platform, software, and content</li>
                <li>You receive a limited, non-exclusive license to use our services</li>
                <li>You may not copy, modify, or distribute our proprietary materials</li>
                <li>Any feedback you provide may be used by us without compensation</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Service Availability and Support</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Uptime</h4>
                <p className="text-slate-600">
                  We strive to maintain 99.9% uptime but do not guarantee uninterrupted service. 
                  Scheduled maintenance will be announced in advance when possible.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Support</h4>
                <p className="text-slate-600">
                  Support levels vary by subscription plan. We provide email support for all plans, 
                  with priority support and phone access for higher-tier plans.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Disclaimers and Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Disclaimers</h4>
                <p className="text-slate-600">
                  Our services are provided "as is" without warranties of any kind. We disclaim all 
                  warranties, express or implied, including merchantability and fitness for a particular purpose.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Limitation of Liability</h4>
                <p className="text-slate-600">
                  To the maximum extent permitted by law, RestaurantFlow shall not be liable for any 
                  indirect, incidental, special, or consequential damages. Our total liability shall 
                  not exceed the amount paid by you in the 12 months preceding the claim.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Indemnification</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                You agree to indemnify and hold harmless RestaurantFlow from any claims, damages, or 
                expenses arising from your use of our services, violation of these terms, or infringement 
                of any third-party rights.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Termination</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Either party may terminate this agreement at any time. We may suspend or terminate your 
                access immediately for:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Violation of these terms</li>
                <li>Non-payment of fees</li>
                <li>Illegal or harmful activities</li>
                <li>Extended periods of inactivity</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Upon termination, you may export your data for 30 days, after which it will be deleted.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Governing Law and Disputes</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                These terms are governed by the laws of California, United States. Any disputes will be 
                resolved through binding arbitration in San Francisco, California, except for:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-1">
                <li>Claims for intellectual property infringement</li>
                <li>Small claims court matters</li>
                <li>Injunctive relief requests</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>13. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                We may update these terms from time to time. Material changes will be notified via email 
                or through our service. Continued use after changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>14. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                If you have questions about these Terms of Service, please contact us:
              </p>
              <div className="text-slate-600 space-y-1">
                <p>Email: legal@restaurantflow.com</p>
                <p>Phone: +1 (555) 123-4567</p>
                <p>Address: 123 Tech Street, San Francisco, CA 94105</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <Link href="/">
            <Button variant="outline" className="mr-4">
              Back to Home
            </Button>
          </Link>
          <Link href="/contact">
            <Button className="bg-primary hover:bg-primary/90">
              Contact Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}