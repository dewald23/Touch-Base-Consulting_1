import { MessageCircle, Mail } from 'lucide-react';

export function ContactSupport() {
  return (
    <section className="py-20 bg-brand-green border-t border-white/10">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-display">
          Contact & Support
        </h2>
        <p className="text-slate-300 mb-10 text-lg leading-relaxed">
          Need help or have a question? Our team is ready to assist you. Reach out to us via WhatsApp or Email for prompt support.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
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
        </div>
      </div>
    </section>
  );
}
