import { useParams, Navigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, Calendar, User, Tag } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { blogPosts } from '../data/blog';
import { CTA } from '../components/CTA';
import { SEO } from '../components/SEO';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  return (
    <div className="pt-20">
      <SEO 
        title={post.title} 
        description={post.excerpt}
        image={post.imageUrl}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-gold/10 via-brand-green to-brand-green -z-10" />
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-brand-gold hover:text-brand-gold-light mb-8 transition-colors font-semibold"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400 mb-6">
              <span className="bg-brand-gold/20 text-brand-gold px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <User className="w-4 h-4" />
                <span>{post.author}</span>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {post.title}
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 -mt-10 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-2xl overflow-hidden shadow-2xl shadow-black/50 aspect-video md:aspect-[21/9]"
          >
            <img 
              src={post.imageUrl} 
              alt={post.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="prose prose-invert prose-lg prose-brand max-w-none"
          >
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </motion.div>
          
          <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                <User className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm text-slate-400">Written by</p>
                <p className="font-bold text-lg">{post.author}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-slate-400">
              <Tag className="w-4 h-4" />
              <span>{post.category}</span>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
