import { useEffect } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Privacy() {
  useEffect(() => {
    document.title = "Privacy Policy - RestaurantFlow";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", "RestaurantFlow Privacy Policy. Learn how we collect, use, and protect your personal information and restaurant data.");
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
          <h1 className="text-3xl font-bold text-slate-900 mb-4">Privacy Policy</h1>
          <p className="text-slate-600">Last updated: December 12, 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Personal Information</h4>
                <p className="text-slate-600">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support. This includes:
                </p>
                <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
                  <li>Name, email address, and contact information</li>
                  <li>Payment information (processed securely through third-party providers)</li>
                  <li>Restaurant information and business details</li>
                  <li>User preferences and settings</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Usage Information</h4>
                <p className="text-slate-600">
                  We automatically collect certain information about your use of our services, including:
                </p>
                <ul className="list-disc list-inside text-slate-600 mt-2 space-y-1">
                  <li>Log data and analytics information</li>
                  <li>Device information and IP addresses</li>
                  <li>Cookies and similar tracking technologies</li>
                  <li>Feature usage and performance metrics</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">We use the information we collect to:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Personalize and improve your experience</li>
                <li>Detect, investigate, and prevent fraudulent transactions</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-slate-600">
                We do not sell, trade, or otherwise transfer your personal information to third parties, 
                except in the following circumstances:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>With your explicit consent</li>
                <li>To service providers who assist in our operations (under strict confidentiality)</li>
                <li>To comply with legal obligations or protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>To protect the safety and security of our users and services</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                We implement appropriate technical and organizational security measures to protect your 
                personal information against unauthorized access, alteration, disclosure, or destruction:
              </p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>SSL/TLS encryption for data transmission</li>
                <li>Encryption of sensitive data at rest</li>
                <li>Regular security audits and monitoring</li>
                <li>Access controls and authentication measures</li>
                <li>Employee training on data protection practices</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Data Retention</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                We retain your personal information for as long as necessary to provide our services, 
                comply with legal obligations, resolve disputes, and enforce our agreements. When you 
                delete your account, we will delete or anonymize your personal information, except where 
                we are required to retain it by law.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">You have the following rights regarding your personal information:</p>
              <ul className="list-disc list-inside text-slate-600 space-y-2">
                <li>Access and review your personal information</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Delete your account and personal information</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Data portability (receive a copy of your data)</li>
                <li>Withdraw consent where processing is based on consent</li>
              </ul>
              <p className="text-slate-600 mt-4">
                To exercise these rights, please contact us at privacy@restaurantflow.com
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                We use cookies and similar technologies to enhance your experience, analyze usage, 
                and provide personalized content. You can manage your cookie preferences through 
                your browser settings, though this may affect some functionality.
              </p>
              <p className="text-slate-600">
                For more information about our use of cookies, please see our 
                <Link href="/cookies" className="text-primary hover:text-primary/80 ml-1">Cookie Policy</Link>.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                Your information may be transferred to and processed in countries other than your own. 
                We ensure appropriate safeguards are in place to protect your personal information in 
                accordance with this Privacy Policy and applicable data protection laws.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600">
                We may update this Privacy Policy from time to time. We will notify you of any material 
                changes by posting the new Privacy Policy on this page and updating the "Last updated" 
                date. Your continued use of our services after any changes constitutes acceptance of the 
                updated Privacy Policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-600 mb-4">
                If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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