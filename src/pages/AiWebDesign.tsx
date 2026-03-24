import { Link } from 'react-router-dom';
import { ArrowLeft, Layout, Smartphone, Edit3, CheckCircle2 } from 'lucide-react';

export function AiWebDesign() {
  return (
    <div className="min-h-screen bg-white text-brand-green-dark pt-32 pb-20">
      <div className="max-w-4xl mx-auto px-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-brand-green hover:text-brand-green-dark font-medium mb-8 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">AI Web Design</h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          We build stunning, high-performance websites powered by the latest AI technology to ensure your business stands out and converts visitors into loyal customers.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-2">Our Core Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <Layout className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Conversion-Optimized</h3>
                <p className="text-slate-600">Landing sites designed with user psychology in mind to maximize lead generation and sales.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <Smartphone className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Mobile-First Design</h3>
                <p className="text-slate-600">Flawless experiences across all devices, ensuring your site looks perfect on smartphones and tablets.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <Edit3 className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Chat-to-Edit Flexibility</h3>
                <p className="text-slate-600">Innovative AI-driven editing capabilities allowing for rapid iterations and seamless updates.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-2">Why Choose Us?</h2>
            <ul className="space-y-4">
              {[
                'Lightning-fast load times for better SEO and user retention.',
                'Modern, clean aesthetics tailored to your brand identity.',
                'Scalable architecture that grows with your business.',
                'Integrated analytics to track visitor behavior from day one.'
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-brand-green shrink-0 mt-0.5" />
                  <span className="text-lg text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-brand-green-dark text-white rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-display font-bold mb-4">Start Your Project</h2>
          <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg">
            Ready to stop the digital guesswork? Let's build a website that works as hard as you do.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/27750908984" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-slate-100 transition-colors"
            >
              WhatsApp Us
            </a>
            <a 
              href="mailto:customerservice@touchbaseconsulting.co.za" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark font-bold rounded-full hover:bg-slate-100 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
