import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-brand-green-dark border-t border-white/10 pt-20 pb-10 font-sans">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 items-start">
          {/* Column 1: Brand */}
          <div className="md:pr-8">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <Logo className="w-10 h-10 text-brand-gold group-hover:text-brand-gold-light transition-colors" />
              <span className="font-display font-bold text-xl tracking-tight text-white">
                Touch Base <span className="text-brand-gold">Consulting</span>
              </span>
            </Link>
            <p className="text-[#E0E0E0] leading-relaxed">
              High-Tech AI. High-Touch Local Service. Expert web design and SEO in the Overberg, Hermanus.
            </p>
          </div>
          
          {/* Column 2: Solutions */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/services/ai-web-design" className="text-[#E0E0E0] hover:text-white transition-colors">AI Web Design</Link></li>
              <li><Link to="/services/precision-seo" className="text-[#E0E0E0] hover:text-white transition-colors">Precision SEO</Link></li>
              <li><Link to="/services/content-strategy" className="text-[#E0E0E0] hover:text-white transition-colors">Content Strategy</Link></li>
              <li><Link to="/services/data-analytics" className="text-[#E0E0E0] hover:text-white transition-colors">Data Analytics</Link></li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Resources</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-[#E0E0E0] hover:text-white transition-colors">All Articles</Link></li>
              <li><Link to="/blog/hermanus-local-seo-playbook" className="text-[#E0E0E0] hover:text-white transition-colors">Local SEO Playbook</Link></li>
              <li><Link to="/blog/ai-retailers-time-saving" className="text-[#E0E0E0] hover:text-white transition-colors">AI for Retailers</Link></li>
              <li><Link to="/blog/google-analytics-guide" className="text-[#E0E0E0] hover:text-white transition-colors">Analytics Guide</Link></li>
            </ul>
          </div>
          
          {/* Column 4: Contact & Legal */}
          <div className="flex flex-col h-full">
            <h4 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact & Legal</h4>
            <ul className="space-y-4 mb-8">
              <li>
                <a 
                  href="mailto:customerservice@touchbaseconsulting.co.za" 
                  rel="noopener noreferrer"
                  className="font-bold text-[#E0E0E0] hover:text-white transition-colors break-words"
                >
                  customerservice@touchbaseconsulting.co.za
                </a>
              </li>
              <li>
                <a 
                  href="https://wa.me/27750908984" 
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Chat with us on WhatsApp"
                  aria-label="Message +27 75 090 8984 via WhatsApp"
                  className="font-bold text-[#E0E0E0] hover:text-white transition-colors"
                >
                  WhatsApp: +27 75 090 8984
                </a>
              </li>
              <li><span className="text-[#E0E0E0]">Hermanus, Overberg</span></li>
            </ul>
            
            <div className="mt-auto pt-4 flex flex-col space-y-2">
              <Link to="/privacy" className="text-sm text-[#E0E0E0] opacity-80 hover:opacity-100 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-sm text-[#E0E0E0] opacity-80 hover:opacity-100 hover:text-white transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#E0E0E0] opacity-80">
          <p>© {new Date().getFullYear()} Touch Base Consulting. All rights reserved.</p>
          <p>Designed in Hermanus</p>
        </div>
      </div>
    </footer>
  );
}
