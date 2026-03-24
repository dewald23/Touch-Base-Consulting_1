import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="bg-brand-green-dark border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-6 group">
              <Logo className="w-10 h-10 text-brand-gold group-hover:text-brand-gold-light transition-colors" />
              <span className="font-display font-bold text-xl tracking-tight">
                Touch Base <span className="text-brand-gold">Consulting</span>
              </span>
            </Link>
            <p className="text-slate-400 max-w-sm leading-relaxed">
              High-Tech AI. High-Touch Local Service. Expert web design and SEO in the Overberg, Hermanus.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Solutions</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-slate-400 hover:text-brand-gold transition-colors">AI Web Design</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-gold transition-colors">Precision SEO</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-gold transition-colors">Content Strategy</Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-brand-gold transition-colors">Data Analytics</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Insights</h4>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-slate-400 hover:text-brand-gold transition-colors">All Articles</Link></li>
              <li><Link to="/blog/hermanus-local-seo-playbook" className="text-slate-400 hover:text-brand-gold transition-colors">Local SEO Playbook</Link></li>
              <li><Link to="/blog/ai-retailers-time-saving" className="text-slate-400 hover:text-brand-gold transition-colors">AI for Retailers</Link></li>
              <li><Link to="/blog/google-analytics-guide" className="text-slate-400 hover:text-brand-gold transition-colors">Analytics Guide</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6">Legal & Contact</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="mailto:customerservice@touchbaseconsulting.co.za" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-brand-gold transition-colors break-words"
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
                  className="text-slate-400 hover:text-brand-gold transition-colors"
                >
                  WhatsApp: +27 75 090 8984
                </a>
              </li>
              <li><span className="text-slate-400">Hermanus, Overberg</span></li>
              <li><Link to="/about" className="text-slate-400 hover:text-brand-gold transition-colors">Privacy Policy</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-brand-gold transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Touch Base Consulting. All rights reserved.</p>
          <p>Designed with AI in Hermanus.</p>
        </div>
      </div>
    </footer>
  );
}
