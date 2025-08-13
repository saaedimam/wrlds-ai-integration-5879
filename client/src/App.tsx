
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FireCatProject from "./pages/FireCatProject";
import SportRetailProject from "./pages/SportRetailProject";
import WorkwearProject from "./pages/WorkwearProject";
import HockeyProject from "./pages/HockeyProject";
import PetProject from "./pages/PetProject";
import TechDetails from "./pages/TechDetails";
import DevelopmentProcess from "./pages/DevelopmentProcess";
import About from "./pages/About";
import Careers from "./pages/Careers";
import KTLCareers from "./pages/KTLCareers";
import KTLInvestors from "./pages/KTLInvestors";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Blog from "./pages/Blog";
import BlogPostDetail from "./pages/BlogPostDetail";

const App = () => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <Switch>
            <Route path="/" component={Index} />
            <Route path="/projects/firecat" component={FireCatProject} />
            <Route path="/projects/sport-retail" component={SportRetailProject} />
            <Route path="/projects/workwear" component={WorkwearProject} />
            <Route path="/projects/hockey" component={HockeyProject} />
            <Route path="/projects/pet-tracker" component={PetProject} />
            <Route path="/tech-details" component={TechDetails} />
            <Route path="/development-process" component={DevelopmentProcess} />
            <Route path="/about" component={About} />
            <Route path="/careers" component={KTLCareers} />
            <Route path="/investors" component={KTLInvestors} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route path="/blog" component={Blog} />
            <Route path="/blog/:slug" component={BlogPostDetail} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
