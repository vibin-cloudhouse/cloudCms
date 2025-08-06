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
import KnowledgeBaseArticle from "./pages/KnowledgeBase/KnowledgeBaseArticle";
import Docs from "./pages/Docs";
import DocDetail from "./pages/Docs/DocDetail";
import Features from "./pages/Features";
import ServerMigration from "./pages/ServerMigration";
import PrivacyPolicy from "./pages/legal/PrivacyPolicy";
import TermsOfService from "./pages/legal/TermsOfService";
import CookiesPolicy from "./pages/legal/CookiesPolicy";
import ChangeLog from "./pages/ChangeLog";
import AlternativesPage from "./pages/Alternatives";
import RunCloudComparison from "./pages/Alternatives/RunCloud";
import NotFound from "./pages/NotFound";
import CookieBanner from "./components/CookieBanner";
import KnowledgeBasePage from "./pages/Knowledge";
import KnowledgeBaseCategory from "./pages/KnowledgeBase/KnowledgeBaseCategory";
import KnowledgeBaseCategoryPage from "./pages/KnowledgeBase/KnowledgeBaseCategoryPage";
import { HelmetProvider } from 'react-helmet-async';
import DefaultSeo from "./components/DefaultSeo";
import Security from "./pages/Security";
import GDPRPolicy from "./pages/legal/GdprPolicy";
import RefundPolicy from "./pages/legal/RefundPolicy";
import DataManagementPage from "./pages/Features/DataManagementPage";
import ServerManagementPage from "./pages/Features/ServerManagement";
const queryClient = new QueryClient();

const App = () => {
  const helmetContext = {};
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider context={helmetContext}>
        <DefaultSeo />
        <ThemeProvider>
          <TooltipProvider>
            <BrowserRouter>
              <Toaster />
              <Sonner />
              <Routes>
                <Route path="/" element={<Index />} />KnowledgeBasePage
                <Route path="/pricing" element={<Pricing />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogDetail />} />
                <Route path="/knowledgebase" element={<KnowledgeBase />} />
                <Route path="/knowledgebase/:category" element={<KnowledgeBaseCategoryPage />} />
                <Route path="/knowledgebase/:category/:slug" element={<KnowledgeBaseArticle />} />
                <Route path="/docs" element={<Docs />} />
                <Route path="/docs/:category/:article" element={<DocDetail />} />
                <Route path="/features" element={<Features />} />
                <Route path="/server-migration" element={<ServerMigration />} />
                <Route path="/legal/privacy" element={<PrivacyPolicy />} />
                <Route path="/legal/terms" element={<TermsOfService />} />
                <Route path="/legal/cookie" element={<CookiesPolicy />} />
                <Route path="/legal/GDPR" element={<GDPRPolicy />} />
                <Route path="/legal/refund" element={<RefundPolicy />} />
                <Route path="/changelog" element={<ChangeLog />} />
                <Route path="/alternatives" element={<AlternativesPage />} />
                <Route path="/security" element={<Security />} />
                <Route path="/data" element={<DataManagementPage/>} />
                <Route path="/servermanagement" element={<ServerManagementPage/>} />

                <Route path="/alternatives/runcloud" element={<RunCloudComparison />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
              <CookieBanner />
            </BrowserRouter>
          </TooltipProvider>
        </ThemeProvider>
      </HelmetProvider>
    </QueryClientProvider>
  )
};

export default App;