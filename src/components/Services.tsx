import { motion } from 'motion/react';
import { Target, PenTool, LayoutTemplate, BarChart3 } from 'lucide-react';

const services = [
  {
    title: 'Precision SEO',
    description: 'Dominate local search results in Hermanus and beyond. We optimize for intent, not just keywords.',
    icon: Target,
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
  },
  {
    title: 'Content Strategy',
    description: 'AI-assisted content creation that resonates with your audience and establishes authority.',
    icon: PenTool,
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
  },
  {
    title: 'AI-Powered Web Design',
    description: 'High-converting, lightning-fast websites built with modern frameworks and intelligent UX.',
    icon: LayoutTemplate,
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
  },
  {
    title: 'Data-Driven Insights',
    description: 'Advanced analytics setup and reporting to track what matters and ignore the noise.',
    icon: BarChart3,
    color: 'text-brand-gold',
    bg: 'bg-brand-gold/10',
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 bg-brand-green-dark/30 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Our Strategic <span className="text-brand-gold">Services</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            Comprehensive digital solutions designed to elevate your brand and drive measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-brand-green/40 border border-white/10 hover:border-brand-gold/50 transition-colors flex flex-col sm:flex-row gap-6 items-start"
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
