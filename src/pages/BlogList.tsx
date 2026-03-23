import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import { blogPosts } from '../data/blog';
import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';

export function BlogList() {
  return (
    <div className="pt-20">
      <SEO 
        title="Blog & Insights" 
        description="Expert local SEO strategies and digital marketing insights for Hermanus and Overberg businesses."
      />
      
      {/* Header Section */}
      <section className="py-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-green to-brand-green -z-10" />
        
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 tracking-tight">
              Digital Marketing <span className="text-brand-gold">Insights</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Expert local SEO strategies, AI automation tips, and digital marketing guides to help your Hermanus business grow.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid Section */}
      <section className="py-20 px-6 bg-brand-green-light/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-brand-green rounded-2xl overflow-hidden border border-white/5 hover:border-brand-gold/30 transition-colors group flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block relative overflow-hidden aspect-video">
                  <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <span className="bg-brand-gold text-brand-green text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </Link>
                
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  
                  <Link to={`/blog/${post.slug}`} className="block group-hover:text-brand-gold transition-colors">
                    <h2 className="text-2xl font-display font-bold mb-4 leading-tight">
                      {post.title}
                    </h2>
                  </Link>
                  
                  <p className="text-slate-300 mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <Link 
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-2 text-brand-gold font-semibold hover:gap-3 transition-all mt-auto"
                  >
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
