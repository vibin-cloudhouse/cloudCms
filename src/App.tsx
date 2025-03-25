
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/hooks/useTheme";
import Index from "./pages/Index";
import Pricing from "./pages/Pricing";
import AboutUs from "./pages/about";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/Blog/BlogDetail";
import KnowledgeBase from "./pages/KnowledgeBase";
import KnowledgeBaseCategory from "./pages/KnowledgeBase/KnowledgeBaseCategory";
import KnowledgeBaseArticle from "./pages/KnowledgeBase/KnowledgeBaseArticle";
import Docs from "./pages/Docs";
import DocDetail from "./pages/Docs/DocDetail";
import Features from "./pages/Features";
import ServerMigration from "./pages/ServerMigration";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiesPolicy from "./pages/legal/CookiesPolicy";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <BrowserRouter>
          <Toaster />
          <Sonner />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogDetail />} />
            <Route path="/kb" element={<KnowledgeBase />} />
            <Route path="/kb/:category" element={<KnowledgeBaseCategory />} />
            <Route path="/kb/:category/:slug" element={<KnowledgeBaseArticle />} />
            <Route path="/docs" element={<Docs />} />
            <Route path="/docs/:category/:article" element={<DocDetail />} />
            <Route path="/features" element={<Features />} />
            <Route path="/server-migration" element={<ServerMigration />} />
            <Route path="/legal/privacy" element={<PrivacyPolicy />} />
            <Route path="/legal/terms" element={<TermsOfService />} />
            <Route path="/legal/cookies" element={<CookiesPolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
