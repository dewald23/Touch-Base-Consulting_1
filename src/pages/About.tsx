import { Link } from 'react-router-dom';
import { Search, Target, Rocket, TrendingUp, Heart, Image as ImageIcon, PenTool, Settings } from 'lucide-react';
import { SEO } from '../components/SEO';

export function About() {
  return (
    <div className="min-h-screen bg-white text-brand-green-dark pt-32 pb-20">
      <SEO 
        title="About Us | Touch Base Consulting" 
        description="Strategy Meets Clarity. We bridge the gap between technical digital marketing and human-centric communication."
      />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl md:text-6xl font-display font-bold mb-4 tracking-tight">
            Touch Base Consulting
          </h1>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-brand-gold mb-6">
            Strategy Meets Clarity
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Touch Base Consulting bridges the gap between technical digital marketing and human-centric communication. We empower brands to build lasting credibility through a blend of analytical strategy, clean design, and high-level engagement.
          </p>
        </div>

        {/* Strategic Pillars (Grid Layout) */}
        <div className="mb-32">
          <h2 className="text-3xl font-bold mb-12 border-b border-slate-200 pb-4">Our Strategic Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <Heart className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="text-xl font-bold mb-4">Empathy-Driven Strategy</h3>
              <p className="text-slate-600 leading-relaxed">
                We solve human problems by understanding audience pain points.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <ImageIcon className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="text-xl font-bold mb-4">Visual Storytelling</h3>
              <p className="text-slate-600 leading-relaxed">
                Clean, professional visuals designed to build instant trust.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <PenTool className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="text-xl font-bold mb-4">Conversion-Focused Content</h3>
              <p className="text-slate-600 leading-relaxed">
                SEO-optimized blogs and social frameworks designed for action.
              </p>
            </div>
            <div className="bg-slate-50 p-8 rounded-2xl border border-slate-100">
              <Settings className="w-10 h-10 text-brand-gold mb-6" />
              <h3 className="text-xl font-bold mb-4">Technical Precision</h3>
              <p className="text-slate-600 leading-relaxed">
                8 years of expertise in SEO, PPC, and CRM automation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* The Advantage (Callout Block) */}
      <div className="bg-brand-green-dark text-white py-24 mb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">The Advantage</h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            We operate with a Subject Matter Expert mindset—taking full ownership and prioritizing clarity over fluff. By combining nearly a decade of digital expertise with high-level customer experience, we ensure your brand connects, not just reaches.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* 4-Step Framework (Numbered Cards) */}
        <div className="mb-24">
          <h2 className="text-3xl font-bold mb-12 border-b border-slate-200 pb-4">Our 4-Step Framework</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mt-6 md:mt-0">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-gold text-brand-green-dark font-bold rounded-full flex items-center justify-center text-xl shadow-md">1</div>
              <Search className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="text-lg font-bold mb-3">Analyze</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Identify digital footprint gaps.
              </p>
            </div>
            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mt-6 md:mt-0">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-gold text-brand-green-dark font-bold rounded-full flex items-center justify-center text-xl shadow-md">2</div>
              <Target className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="text-lg font-bold mb-3">Architect</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Build custom roadmaps via Landingsite.ai.
              </p>
            </div>
            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mt-6 md:mt-0">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-gold text-brand-green-dark font-bold rounded-full flex items-center justify-center text-xl shadow-md">3</div>
              <Rocket className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="text-lg font-bold mb-3">Execute</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Deploy high-quality content and lead-gen strategies.
              </p>
            </div>
            <div className="relative bg-white p-8 rounded-2xl border border-slate-200 shadow-sm mt-6 md:mt-0">
              <div className="absolute -top-6 -left-6 w-12 h-12 bg-brand-gold text-brand-green-dark font-bold rounded-full flex items-center justify-center text-xl shadow-md">4</div>
              <TrendingUp className="w-8 h-8 text-brand-green mb-4" />
              <h3 className="text-lg font-bold mb-3">Optimize</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Use data analytics to refine and scale.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-slate-50 rounded-3xl p-8 md:p-12 text-center border border-slate-100">
          <h2 className="text-3xl font-display font-bold mb-4">Ready to Dominate?</h2>
          <p className="text-slate-600 mb-8 max-w-2xl mx-auto text-lg">
            Stop leaving money on the table. Let's build a digital strategy that converts.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="https://wa.me/27750908984" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-green-dark text-white font-bold rounded-full hover:bg-brand-green transition-colors"
            >
              WhatsApp Us
            </a>
            <a 
              href="mailto:customerservice@touchbaseconsulting.co.za" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-green-dark border-2 border-brand-green-dark font-bold rounded-full hover:bg-slate-50 transition-colors"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
