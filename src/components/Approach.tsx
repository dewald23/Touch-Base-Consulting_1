import { motion } from 'motion/react';
import { Search, Map, Zap, LineChart } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Audit & Research',
    description: 'Deep dive into your current digital footprint, competitor analysis, and market opportunities.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Strategy & Roadmap',
    description: 'Developing a customized AI-driven plan tailored to your specific business goals.',
    icon: Map,
  },
  {
    number: '03',
    title: 'Delivery & Implementation',
    description: 'Executing the strategy with precision, from web development to content creation.',
    icon: Zap,
  },
  {
    number: '04',
    title: 'Analyze & Iterate',
    description: 'Continuous monitoring, A/B testing, and refinement to maximize ROI.',
    icon: LineChart,
  },
];

export function Approach() {
  return (
    <section id="approach" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Our Approach to <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold">
                Digital Marketing
              </span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              We don't just build websites; we engineer digital growth engines. Our methodology ensures every decision is backed by data and aligned with your business objectives.
            </p>
            
            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-green-dark border border-white/10 flex items-center justify-center text-brand-gold font-mono font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                      {step.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-brand-gold/10 to-brand-green-light/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-brand-green-dark/50 backdrop-blur-sm p-8">
              <div className="aspect-square rounded-2xl overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop" 
                  alt="Data Analysis Dashboard" 
                  className="object-cover w-full h-full opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-green-dark via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
