import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useParams } from "react-router-dom";
import { LanguageProvider } from "@/i18n/LanguageContext";
import Index from "./pages/Index";
import About from "./pages/About";
import AboutSection from "./pages/AboutSection";
import Services from "./pages/Services";
import BlogNews from "./pages/BlogNews";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function LegacyPublicationRedirect({ type }: { type: 'news' | 'blog' }) {
  const { id } = useParams();
  const target = id
    ? `/publications/${type}/${id}`
    : type === 'blog'
      ? '/publications/blog'
      : '/publications';
  return <Navigate to={target} replace />;
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/about/:sectionId" element={<AboutSection />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/:id" element={<Services />} />
            <Route path="/publications" element={<BlogNews />} />
            <Route path="/publications/:type" element={<BlogNews />} />
            <Route path="/publications/:type/:id" element={<BlogNews />} />
            {/* Legacy redirects */}
            <Route path="/news" element={<Navigate to="/publications" replace />} />
            <Route path="/news/:id" element={<LegacyPublicationRedirect type="news" />} />
            <Route path="/blog" element={<Navigate to="/publications/blog" replace />} />
            <Route path="/blog/:id" element={<LegacyPublicationRedirect type="blog" />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
