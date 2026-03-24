import { Link } from 'react-router-dom';
import { ArrowLeft, BarChart3, Target, Lightbulb, CheckCircle2 } from 'lucide-react';

export function DataAnalytics() {
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
        
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Data Analytics</h1>
        <p className="text-xl text-slate-600 mb-12 leading-relaxed">
          Turn raw data into strategic decisions. We help you understand user behavior, track conversions, and optimize your digital ROI.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-2">Our Core Focus</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <BarChart3 className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Google Analytics 4</h3>
                <p className="text-slate-600">Expert GA4 setup and migration to ensure you are capturing accurate, future-proof data.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <Target className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Conversion Tracking</h3>
                <p className="text-slate-600">Precise tracking of leads, sales, and micro-conversions to measure true marketing effectiveness.</p>
              </div>
              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
                <Lightbulb className="w-10 h-10 text-brand-gold mb-4" />
                <h3 className="text-xl font-bold mb-3">Actionable Insights</h3>
                <p className="text-slate-600">Custom reporting dashboards that translate complex data into clear, actionable business strategies.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-6 border-b border-slate-200 pb-2">Why Choose Us?</h2>
            <ul className="space-y-4">
              {[
                'Custom Looker Studio dashboards tailored to your KPIs.',
                'Cross-domain tracking to follow users across your entire ecosystem.',
                'Regular strategy sessions to review data and adjust campaigns.',
                'Privacy-first tracking compliance (POPIA & GDPR ready).'
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
            Ready to stop the digital guesswork? Let's make your data work for you.
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
