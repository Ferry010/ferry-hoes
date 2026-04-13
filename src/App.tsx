import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Speaking from "./pages/Speaking";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import PostEditor from "./pages/PostEditor";
import AdminMessages from "./pages/AdminMessages";
import About from "./pages/About";
import Press from "./pages/Press";
import Podcast from "./pages/Podcast";
import Contact from "./pages/Contact";
import Now from "./pages/Now";
import AdminNowPage from "./pages/AdminNowPage";
import AdminLayout from "./components/admin/AdminLayout";
import { ScrollToTop } from "./components/ScrollToTop";
import IndexNavigation from "./components/IndexNavigation";
import CookieConsent from "./components/CookieConsent";
import { usePageTracking } from "./hooks/usePageTracking";

const queryClient = new QueryClient();

const PageTracker = () => {
  usePageTracking();
  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <PageTracker />
          <IndexNavigation />
          <CookieConsent />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/speaking" element={<Speaking />} />
            <Route path="/about" element={<About />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/now" element={<Now />} />
            <Route path="/press" element={<Press />} />
            <Route path="/admin" element={<AdminLogin />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="messages" element={<AdminMessages />} />
              <Route path="posts/new" element={<PostEditor />} />
              <Route path="posts/:id" element={<PostEditor />} />
              <Route path="now" element={<AdminNowPage />} />
            </Route>
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
