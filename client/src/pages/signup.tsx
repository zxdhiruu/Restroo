import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { useAuthState } from "@/hooks/useAuth";
import { Eye, EyeOff, Check } from "lucide-react";

export default function Signup() {
  const [, setLocation] = useLocation();
  const { signup, isLoading, user } = useAuthState();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
  });

  useEffect(() => {
    document.title = "Sign Up - RestaurantFlow";
    
    if (user) {
      setLocation("/dashboard");
    }
  }, [user, setLocation]);

  useEffect(() => {
    const password = formData.password;
    setPasswordStrength({
      length: password.length >= 8,
      uppercase: /[A-Z]/.test(password),
      lowercase: /[a-z]/.test(password),
      number: /\d/.test(password),
    });
  }, [formData.password]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match. Please try again.",
        variant: "destructive"
      });
      return;
    }

    try {
      await signup(formData.email, formData.password, formData.firstName, formData.lastName);
      toast({
        title: "Welcome to RestaurantFlow!",
        description: "Your account has been created successfully.",
      });
      setLocation("/dashboard");
    } catch (error: any) {
      toast({
        title: "Sign Up Failed",
        description: error.message || "Failed to create account. Please try again.",
        variant: "destructive"
      });
    }
  };

  const handleGoogleSignup = () => {
    window.location.href = "/api/auth/google";
  };

  const isPasswordValid = Object.values(passwordStrength).every(Boolean);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <Link href="/">
            <h1 className="text-2xl font-bold text-primary cursor-pointer hover:text-primary/80 transition-colors mb-2">
              RestaurantFlow
            </h1>
          </Link>
          <CardTitle className="text-2xl text-slate-900">Create your account</CardTitle>
          <p className="text-slate-600">Start your 14-day free trial today</p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName" className="text-sm font-medium text-slate-700">
                  First name
                </Label>
                <Input
                  id="firstName"
                  type="text"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                  required
                  className="mt-2"
                />
              </div>
              <div>
                <Label htmlFor="lastName" className="text-sm font-medium text-slate-700">
                  Last name
                </Label>
                <Input
                  id="lastName"
                  type="text"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={(e) => setFormData(prev => ({ ...prev, lastName: e.target.value }))}
                  required
                  className="mt-2"
                />
              </div>
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="john@restaurant.com"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                required
                className="mt-2"
              />
            </div>
            
            <div>
              <Label htmlFor="password" className="text-sm font-medium text-slate-700">
                Password
              </Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={formData.password}
                  onChange={(e) => setFormData(prev => ({ ...prev, password: e.target.value }))}
                  required
                  className="pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-slate-400 hover:text-slate-600"
                >
                  {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              
              {formData.password && (
                <div className="mt-3 space-y-2">
                  <p className="text-sm text-slate-600">Password requirements:</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div className={`flex items-center ${passwordStrength.length ? 'text-green-600' : 'text-slate-400'}`}>
                      <Check className="h-3 w-3 mr-1" />
                      8+ characters
                    </div>
                    <div className={`flex items-center ${passwordStrength.uppercase ? 'text-green-600' : 'text-slate-400'}`}>
                      <Check className="h-3 w-3 mr-1" />
                      Uppercase letter
                    </div>
                    <div className={`flex items-center ${passwordStrength.lowercase ? 'text-green-600' : 'text-slate-400'}`}>
                      <Check className="h-3 w-3 mr-1" />
                      Lowercase letter
                    </div>
                    <div className={`flex items-center ${passwordStrength.number ? 'text-green-600' : 'text-slate-400'}`}>
                      <Check className="h-3 w-3 mr-1" />
                      Number
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div>
              <Label htmlFor="confirmPassword" className="text-sm font-medium text-slate-700">
                Confirm password
              </Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={(e) => setFormData(prev => ({ ...prev, confirmPassword: e.target.value }))}
                required
                className="mt-2"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90 py-3 font-semibold"
              disabled={isLoading || !isPasswordValid || formData.password !== formData.confirmPassword}
            >
              {isLoading ? "Creating account..." : "Create Account"}
            </Button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-slate-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-slate-500">Or continue with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignup}
              className="w-full mt-4 border-slate-300 text-slate-700 hover:bg-slate-50"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
          </div>

          <div className="mt-6 text-center">
            <span className="text-sm text-slate-600">
              Already have an account?{" "}
              <Link href="/login">
                <span className="text-primary hover:text-primary/80 font-medium cursor-pointer">
                  Sign in
                </span>
              </Link>
            </span>
          </div>

          <div className="mt-4 text-xs text-slate-500 text-center">
            By creating an account, you agree to our{" "}
            <Link href="/terms">
              <span className="text-primary hover:text-primary/80 cursor-pointer">Terms of Service</span>
            </Link>{" "}
            and{" "}
            <Link href="/privacy">
              <span className="text-primary hover:text-primary/80 cursor-pointer">Privacy Policy</span>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}