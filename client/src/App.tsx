import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import Features from "@/pages/features";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import Login from "@/pages/login";
import Signup from "@/pages/signup";
import ForgotPassword from "@/pages/forgot-password";
import Dashboard from "@/pages/dashboard";
import StartTrial from "@/pages/start-trial";
import About from "@/pages/about";
import Privacy from "@/pages/privacy";
import Terms from "@/pages/terms";
import Cookies from "@/pages/cookies";
import Help from "@/pages/help";
import Navigation from "@/components/navigation";
import Footer from "@/components/footer";

function Router() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Switch>
        {/* Authentication pages - no navigation/footer */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/forgot-password" component={ForgotPassword} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/start-trial" component={StartTrial} />
        
        {/* Informational pages - no navigation/footer */}
        <Route path="/about" component={About} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route path="/cookies" component={Cookies} />
        <Route path="/help" component={Help} />
        
        {/* Main website pages - with navigation/footer */}
        <Route path="/">
          {() => (
            <>
              <Navigation />
              <Home />
              <Footer />
            </>
          )}
        </Route>
        <Route path="/features">
          {() => (
            <>
              <Navigation />
              <Features />
              <Footer />
            </>
          )}
        </Route>
        <Route path="/pricing">
          {() => (
            <>
              <Navigation />
              <Pricing />
              <Footer />
            </>
          )}
        </Route>
        <Route path="/contact">
          {() => (
            <>
              <Navigation />
              <Contact />
              <Footer />
            </>
          )}
        </Route>
        
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
