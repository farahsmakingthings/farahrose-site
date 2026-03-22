import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Art from "./pages/Art";
import Shop from "./pages/Shop";
import Experimental from "./pages/Experimental";
import About from "./pages/About";
import ShopSuccess from "./pages/ShopSuccess";
import CustomCursor from "./components/CustomCursor";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/work" component={Work} />
      <Route path="/art" component={Art} />
      <Route path="/shop" component={Shop} />
      <Route path="/experimental" component={Experimental} />
      <Route path="/about" component={About} />
      <Route path="/shop/success" component={ShopSuccess} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <CustomCursor />
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
