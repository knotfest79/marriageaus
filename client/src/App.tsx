import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

// Pages
import Home from "@/pages/Home";
import WhoWeAre from "@/pages/WhoWeAre";
import Requirements from "@/pages/Requirements";
import Equality from "@/pages/Equality";
import Contact from "@/pages/Contact";
import Offices from "@/pages/Offices";
import Gallery from "@/pages/Gallery";
import Promise from "@/pages/Promise";
import WonderLaw from "@/pages/WonderLaw";
import NoimForm from "@/pages/NoimForm";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/who-we-are" component={WhoWeAre} />
          <Route path="/requirements" component={Requirements} />
          <Route path="/equality" component={Equality} />
          <Route path="/contact" component={Contact} />
          <Route path="/offices" component={Offices} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/promise" component={Promise} />
          <Route path="/wonder-law" component={WonderLaw} />
          <Route path="/noim-form" component={NoimForm} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
