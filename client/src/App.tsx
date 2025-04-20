import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import StaticHome from "@/pages/StaticHome";

// Determine if we should use the static version (either in production or if explicitly set)
const useStatic = import.meta.env.PROD || import.meta.env.VITE_USE_STATIC === 'true';

function Router() {
  // For development, we can test static mode by visiting /static
  return (
    <Switch>
      <Route path="/" component={useStatic ? StaticHome : Home} />
      <Route path="/static" component={StaticHome} />
      <Route component={NotFound} />
    </Switch>
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
