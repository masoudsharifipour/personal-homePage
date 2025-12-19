import React, { useEffect, useState } from 'react';
import { BookOpen, ExternalLink, Loader2 } from 'lucide-react';
import { FadeIn } from './FadeIn';

interface BlogPost {
  title: string;
  pubDate: string;
  link: string;
  guid: string;
  thumbnail: string;
  description: string;
}

export function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // Using rss2json service to convert RSS feed to JSON
        const response = await fetch(
          'https://api.rss2json.com/v1/api.json?rss_url=https://virgool.io/feed/@masoudsharifi'
        );
        const data = await response.json();
        
        if (data.status === 'ok') {
          setPosts(data.items.slice(0, 3)); // Display latest 3 posts
        } else {
          setError(true);
        }
      } catch (err) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) {
    return (
      <section className="py-24 px-6 bg-slate-900/50">
        <div className="flex justify-center">
          <Loader2 className="w-8 h-8 text-blue-500 animate-spin" />
        </div>
      </section>
    );
  }

  if (error || posts.length === 0) {
    return null; // Don't show section if fetch fails
  }

  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-white">Latest Articles</h2>
            <a 
              href="https://virgool.io/@masoudsharifi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 flex items-center gap-2 transition-colors"
            >
              View all posts
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <FadeIn key={post.guid} delay={index * 0.2}>
              <a 
                href={post.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col h-full bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:-translate-y-1"
              >
                {post.thumbnail && (
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={post.thumbnail} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="p-6 flex-1 flex flex-col">
                  <div className="text-xs text-blue-400 mb-3 flex items-center gap-2">
                    <BookOpen className="w-3 h-3" />
                    {new Date(post.pubDate).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </div>
                  
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  
                  {/* Removing HTML tags from description for clean preview */}
                  <p className="text-slate-400 text-sm line-clamp-3 mb-4 flex-1">
                    {post.description.replace(/<[^>]+>/g, '')}
                  </p>
                  
                  <span className="text-sm font-medium text-blue-400 group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Read article <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
