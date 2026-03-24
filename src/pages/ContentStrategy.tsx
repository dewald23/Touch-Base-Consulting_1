import { Link } from 'react-router-dom';
import { ArrowLeft, PenTool, BookOpen, Layers, CheckCircle2 } from 'lucide-react';

export function ContentStrategy() {
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
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Content Strategy</h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Engage your audience and build brand loyalty with compelling, AI-enhanced content that tells your unique story across all platforms.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-2">Our Core Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <PenTool className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">AI-Assisted Copywriting</h3>
                <p className="text-slate-600">Leveraging advanced AI tools to produce high-quality, engaging copy at scale without losing the human touch.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <BookOpen className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Brand Storytelling</h3>
                <p className="text-slate-600">Crafting authentic narratives that resonate with your target audience and differentiate you from competitors.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <Layers className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Multi-Channel Consistency</h3>
                <p className="text-slate-600">Ensuring your brand voice remains unified across your website, social media, emails, and ads.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-2">Why Choose Us?</h2>
            <ul className="space-y-4">
              {[
                'Content calendars that keep your marketing organized and proactive.',
                'SEO-optimized writing that ranks well and reads naturally.',
                'Deep audience research to ensure content relevance and impact.',
                'Performance tracking to double down on what works best.'
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
            Ready to stop the digital guesswork? Let's craft a message that your audience can't ignore.
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
