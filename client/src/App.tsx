
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router, Route, Switch } from "wouter";
import { useState } from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import KTLCareers from "./pages/KTLCareers";
import KTLInvestors from "./pages/KTLInvestors";
import PrivacyPolicy from "./pages/PrivacyPolicy";

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
            <Route path="/careers" component={KTLCareers} />
            <Route path="/investors" component={KTLInvestors} />
            <Route path="/privacy-policy" component={PrivacyPolicy} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
