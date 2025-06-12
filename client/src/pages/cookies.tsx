import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Cookies() {
  useEffect(() => {
    document.title = "Cookie Policy - RestaurantFlow";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "RestaurantFlow Cookie Policy. Learn about how we use cookies and similar tracking technologies on our website and services.");
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
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Cookie Policy</h1>
          <p className="text-slate-600">Last updated: December 12, 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Cookies are small text files that are stored on your device when you visit our website. 
                They help us provide you with a better experience by remembering your preferences, 
                keeping you signed in, and helping us understand how you use our services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Essential Cookies</h4>
                <p className="text-slate-600 mb-2">
                  These cookies are necessary for our website to function properly. They enable core 
                  functionality such as security, network management, and accessibility.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Authentication and session management</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and performance</li>
                  <li>Remembering your cookie preferences</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Functional Cookies</h4>
                <p className="text-slate-600 mb-2">
                  These cookies enable enhanced functionality and personalization, such as remembering 
                  your preferences and settings.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Language and region preferences</li>
                  <li>User interface customizations</li>
                  <li>Form data and progress saving</li>
                  <li>Feature usage preferences</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Analytics Cookies</h4>
                <p className="text-slate-600 mb-2">
                  These cookies help us understand how visitors interact with our website by collecting 
                  and reporting information anonymously.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Page views and user journeys</li>
                  <li>Time spent on pages</li>
                  <li>Click tracking and heatmaps</li>
                  <li>Error reporting and diagnostics</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Marketing Cookies</h4>
                <p className="text-slate-600 mb-2">
                  These cookies are used to deliver relevant advertisements and track the effectiveness 
                  of our marketing campaigns.
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>Targeted advertising</li>
                  <li>Campaign performance tracking</li>
                  <li>Social media integration</li>
                  <li>Retargeting and remarketing</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                We may use third-party services that set their own cookies. These services include:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Google Analytics:</strong> For website analytics and performance tracking</li>
                <li><strong>Stripe:</strong> For secure payment processing</li>
                <li><strong>Google OAuth:</strong> For authentication services</li>
                <li><strong>Intercom:</strong> For customer support and communication</li>
                <li><strong>Hotjar:</strong> For user experience analysis and heatmaps</li>
              </ul>
              <p className="text-slate-600 mt-4">
                These third parties have their own privacy policies and cookie practices. We recommend 
                reviewing their policies to understand how they use cookies.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing Your Cookie Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Browser Settings</h4>
                <p className="text-slate-600 mb-2">
                  Most web browsers allow you to control cookies through their settings. You can:
                </p>
                <ul className="list-disc list-inside text-slate-600 space-y-1">
                  <li>View and delete existing cookies</li>
                  <li>Block cookies from specific websites</li>
                  <li>Block third-party cookies</li>
                  <li>Clear all cookies when you close your browser</li>
                  <li>Set your browser to notify you when cookies are set</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Our Cookie Banner</h4>
                <p className="text-slate-600">
                  When you first visit our website, you'll see a cookie banner that allows you to accept 
                  or decline non-essential cookies. You can change your preferences at any time by 
                  clicking the "Cookie Preferences" link in our website footer.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Impact of Disabling Cookies</h4>
                <p className="text-slate-600">
                  While you can disable cookies, doing so may affect your experience on our website. 
                  Some features may not work properly, and you may need to re-enter information more frequently.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookie Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                Different cookies have different lifespans:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li><strong>Session Cookies:</strong> Deleted when you close your browser</li>
                <li><strong>Persistent Cookies:</strong> Remain on your device for a set period or until manually deleted</li>
                <li><strong>Authentication Cookies:</strong> Typically expire after 30 days of inactivity</li>
                <li><strong>Preference Cookies:</strong> Usually persist for 1-2 years</li>
                <li><strong>Analytics Cookies:</strong> Generally expire after 2 years</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Updates to This Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices 
                or for legal, operational, or regulatory reasons. Any changes will be posted on this page 
                with an updated "Last updated" date.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="text-slate-600 space-y-1">
                <p>Email: privacy@restaurantflow.com</p>
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
          <Link href="/privacy">
            <Button className="bg-primary hover:bg-primary/90">
              Privacy Policy
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}