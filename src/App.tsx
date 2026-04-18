import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import PostEditor from "./pages/PostEditor";
import AdminMessages from "./pages/AdminMessages";
import Press from "./pages/Press";
import Conversation from "./pages/Conversation";
import Podcast from "./pages/Podcast";
import Now from "./pages/Now";
import AdminNowPage from "./pages/AdminNowPage";
import AdminLayout from "./components/admin/AdminLayout";
import { ScrollToTop } from "./components/ScrollToTop";
import TheIdea from "./pages/TheIdea";
import MyStory from "./pages/MyStory";
import OnStage from "./pages/OnStage";
import Writing from "./pages/Writing";
import TheBook from "./pages/TheBook";
import ExternalRedirect from "./components/ExternalRedirect";
import { SPEAKERS_ACADEMY_URL } from "./config/site";
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
          <Routes>
            <Route path="/" element={<Index />} />

            {/* Credibility hub IA */}
            <Route path="/the-idea" element={<TheIdea />} />
            <Route path="/my-story" element={<MyStory />} />
            <Route path="/on-stage" element={<OnStage />} />
            <Route path="/podcast" element={<Podcast />} />
            <Route path="/writing" element={<Writing />} />
            <Route path="/the-book" element={<TheBook />} />

            {/* Book Ferry → external agent (Speakers Academy) */}
            <Route path="/book" element={<ExternalRedirect to={SPEAKERS_ACADEMY_URL} />} />
            <Route path="/contact" element={<ExternalRedirect to={SPEAKERS_ACADEMY_URL} />} />

            {/* Legacy → new IA redirects */}
            <Route path="/about" element={<Navigate to="/my-story" replace />} />
            <Route path="/speaking" element={<Navigate to="/on-stage" replace />} />
            <Route path="/blog" element={<Navigate to="/writing" replace />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/blog-archive" element={<Blog />} />

            {/* Existing pages still in use */}
            <Route path="/now" element={<Now />} />
            <Route path="/press" element={<Press />} />

            {/* Easter egg / hidden */}
            <Route path="/conversation" element={<Conversation />} />

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
