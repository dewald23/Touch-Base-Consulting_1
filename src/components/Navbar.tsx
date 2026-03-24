import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-brand-green-dark/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <Logo className="w-10 h-10 text-brand-gold group-hover:text-brand-gold-light transition-colors" />
          <span className="font-display font-bold text-xl tracking-tight">
            Touch Base <span className="text-brand-gold">Consulting</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-brand-gold' : 'text-slate-300 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/27750908984"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with us on WhatsApp"
            aria-label="Message +27 75 090 8984 via WhatsApp"
            className="flex items-center justify-center gap-2 bg-white text-brand-green-dark px-5 py-2.5 rounded-full text-sm font-bold transition-transform hover:-translate-y-0.5 min-h-[44px]"
            style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          >
            <MessageCircle className="w-4 h-4" />
            <span>WhatsApp Us</span>
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 right-0 bg-brand-green-dark border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-lg font-medium transition-colors ${location.pathname === link.href ? 'text-brand-gold' : 'text-slate-300 hover:text-white'}`}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="https://wa.me/27750908984"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with us on WhatsApp"
            aria-label="Message +27 75 090 8984 via WhatsApp"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 bg-white text-brand-green-dark px-5 py-3 rounded-xl text-center font-bold transition-transform hover:-translate-y-0.5 min-h-[44px]"
            style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
        </motion.div>
      )}
    </header>
  );
}
