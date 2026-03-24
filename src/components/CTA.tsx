import { motion } from 'motion/react';
import { Mail, MessageCircle } from 'lucide-react';

export function CTA() {
  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-brand-green-dark/80" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-brand-gold/20 rounded-full blur-[120px]" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="text-5xl md:text-7xl font-display font-bold mb-8 leading-tight"
        >
          Ready to stop the <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold">
            digital guesswork?
          </span>
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto"
        >
          Let's build a data-driven strategy that turns clicks into clients. Partner with the leading AI web design agency in Hermanus.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a
            href="https://wa.me/27750908984"
            target="_blank"
            rel="noopener noreferrer"
            title="Chat with us on WhatsApp"
            aria-label="Message +27 75 090 8984 via WhatsApp"
            className="flex items-center justify-center gap-3 bg-white text-brand-green-dark px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1 w-full sm:w-auto min-h-[44px]"
            style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Us</span>
          </a>
          <a
            href="mailto:customerservice@touchbaseconsulting.co.za"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 bg-white text-brand-green-dark px-8 py-4 rounded-full font-bold transition-transform hover:-translate-y-1 w-full sm:w-auto min-h-[44px]"
            style={{ boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
          >
            <Mail className="w-5 h-5" />
            <span>Email Support</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
