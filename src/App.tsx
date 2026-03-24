import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { ServicesPage } from './pages/ServicesPage';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { BlogList } from './pages/BlogList';
import { BlogPost } from './pages/BlogPost';
import { AiWebDesign } from './pages/AiWebDesign';
import { PrecisionSeo } from './pages/PrecisionSeo';
import { ContentStrategy } from './pages/ContentStrategy';
import { DataAnalytics } from './pages/DataAnalytics';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-brand-green text-slate-50 font-sans selection:bg-brand-gold/30 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/ai-web-design" element={<AiWebDesign />} />
            <Route path="/services/precision-seo" element={<PrecisionSeo />} />
            <Route path="/services/content-strategy" element={<ContentStrategy />} />
            <Route path="/services/data-analytics" element={<DataAnalytics />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
