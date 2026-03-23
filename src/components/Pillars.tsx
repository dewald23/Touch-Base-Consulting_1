import { motion } from 'motion/react';
import { Layers, Eye, ShieldCheck } from 'lucide-react';

const pillars = [
  {
    title: 'Foundation',
    description: 'Robust, scalable architecture built for speed and security. We lay the groundwork for a digital presence that lasts.',
    icon: Layers,
    color: 'from-brand-gold to-brand-gold-light',
  },
  {
    title: 'Visibility',
    description: 'Data-driven SEO and content strategies that put you in front of the right audience at the right time.',
    icon: Eye,
    color: 'from-brand-gold to-brand-gold-light',
  },
  {
    title: 'Authority',
    description: 'Establishing your brand as the go-to expert in your industry through thought leadership and trust signals.',
    icon: ShieldCheck,
    color: 'from-brand-gold to-brand-gold-light',
  },
];

export function Pillars() {
  return (
    <section id="system" className="py-24 bg-brand-green-dark/50 border-y border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
            The 3-Pillar System for <br />
            <span className="text-brand-gold">AI Web Design in Hermanus</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            A proven framework that combines artificial intelligence with local market expertise to build high-performing websites.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-brand-green/50 border border-white/10 hover:bg-brand-green transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              
              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${pillar.color} flex items-center justify-center mb-8 shadow-lg`}>
                <pillar.icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-2xl font-display font-bold mb-4 text-white">
                {pillar.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
