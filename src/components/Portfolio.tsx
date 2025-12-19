import React from 'react';
import { ExternalLink, Code2, Globe, Rocket, MessageSquare } from 'lucide-react';
import { FadeIn } from './FadeIn';

// Placeholder images from Unsplash (using the URLs I found)
const projects = [
  {
    title: 'Alibaba Travel Platform',
    category: 'Engineering Management',
    image: 'https://images.unsplash.com/photo-1761292630740-d821dc203975?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cmF2ZWwlMjB0ZWNobm9sb2d5JTIwYXBwfGVufDF8fHx8MTc2NTUyMjE2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Leading engineering teams for Hotel, Tour, Stays, Activities, and Insurance products. Focusing on scalable architecture and high availability.',
    icon: Globe,
    tags: ['Architecture', 'Leadership', 'High Scale']
  },
  {
    title: 'CS Automation System',
    category: 'System Design',
    image: 'https://images.unsplash.com/photo-1594025741991-b617eddab677?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjdXN0b21lciUyMHNlcnZpY2UlMjBhdXRvbWF0aW9uJTIwY2hhdGJvdHxlbnwxfHx8fDE3NjU1MjIxNjZ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Automated flight change notifications and refund services, significantly reducing call center costs and improving customer experience.',
    icon: MessageSquare,
    tags: ['Automation', 'Cost Reduction', 'Optimization']
  },
  {
    title: 'Backend Academy',
    category: 'Education & Mentorship',
    image: 'https://images.unsplash.com/photo-1558301204-e3226482a77b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBtZW50b3JzaGlwJTIwY2xhc3Nyb29tfGVufDF8fHx8MTc2NTUyMjE2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Founded an academy to bridge the gap between academia and industry, mentoring young engineers to become production-ready developers.',
    icon: Rocket,
    tags: ['Mentorship', 'Education', 'Community']
  },
  {
    title: 'Mspsoft',
    category: 'Content Platform',
    image: 'https://images.unsplash.com/photo-1607431067517-fda93b3e0aee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzaWFuJTIwd2ViJTIwZGV2ZWxvcG1lbnQlMjBjb2RlfGVufDF8fHx8MTc2NTUyMjE2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A platform dedicated to publishing Farsi content for developers, contributing to the early growth of the Iranian tech community.',
    icon: Code2,
    tags: ['Content', 'Open Source', 'Community']
  }
];

export function Portfolio() {
  return (
    <section className="py-24 px-6 bg-slate-900/50">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A collection of projects and initiatives I've led, built, or founded throughout my career.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={index}
                  className="group relative bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-500/50 transition-all hover:shadow-2xl hover:shadow-blue-500/10"
                >
                  {/* Image Overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/20 transition-all z-10" />
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 z-20 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-blue-300 border border-blue-500/30">
                      {project.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h3>
                      <Icon className="w-5 h-5 text-slate-500 group-hover:text-blue-400 transition-colors" />
                    </div>
                    
                    <p className="text-slate-400 mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="px-2 py-1 bg-slate-900 rounded text-xs text-slate-500 border border-slate-700"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
