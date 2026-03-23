import { motion } from 'motion/react';
import { Globe2, Handshake } from 'lucide-react';

export function GlobalLocal() {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-gold/10 to-brand-green-light/20 blur-3xl rounded-full" />
            <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-brand-green-dark/50 backdrop-blur-sm p-8 flex flex-col gap-8">
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                <Globe2 className="w-12 h-12 text-brand-gold" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Global Systems</h4>
                  <p className="text-sm text-slate-400">Enterprise-grade AI tools and frameworks</p>
                </div>
              </div>
              <div className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10">
                <Handshake className="w-12 h-12 text-white" />
                <div>
                  <h4 className="text-xl font-bold text-white mb-1">Local Handshake</h4>
                  <p className="text-sm text-slate-400">Deep understanding of the Overberg market</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-display font-bold mb-6 leading-tight"
            >
              Global Systems. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-gold-light to-brand-gold">
                Local Handshake.
              </span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-400 mb-8 leading-relaxed"
            >
              We bring Silicon Valley technology to the Overberg. You get the power of advanced AI marketing systems combined with the personalized, face-to-face service of a local partner who understands your community.
            </motion.p>
            <motion.ul 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-4 text-slate-300"
            >
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold" />
                Face-to-face strategy sessions in Hermanus
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold" />
                AI-driven market analysis
              </li>
              <li className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-brand-gold" />
                Tailored solutions for local businesses
              </li>
            </motion.ul>
          </div>
        </div>
      </div>
    </section>
  );
}
