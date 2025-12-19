import React from 'react';
import { Github, Linkedin, Calendar, Terminal } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto text-center">
        <FadeIn>
          <div className="mb-8">
            <div className="w-40 h-40 mx-auto mb-6 rounded-full p-1 bg-gradient-to-br from-blue-500 to-purple-600 shadow-xl shadow-blue-500/20">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBwb3J0cmFpdHxlbnwwfHx8fDE3NjU1MjIxNjB8MA&ixlib=rb-4.1.0&q=80&w=400" 
                alt="Masoud Sharifipour"
                className="w-full h-full rounded-full object-cover bg-slate-800"
              />
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            Masoud Sharifipour
          </h1>
          
          <p className="text-xl md:text-2xl text-blue-400 mb-8 font-light">
            Engineering Manager & Technical Leader
          </p>
          
          <p className="text-lg text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Building resilient teams, defining scalable architectures, and empowering engineering cultures.
            Focused on creating high-impact technical systems and improving customer experiences.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="https://www.linkedin.com/in/masoudsharifipour/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-600/25"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
            
            <a 
              href="https://github.com/masoudsharifipour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-slate-700 text-white rounded-lg hover:bg-slate-600 transition-all hover:scale-105 border border-slate-600"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            
            <a 
              href="https://adplist.org/mentors/maosud-sharifipour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-all hover:scale-105 shadow-lg shadow-purple-600/25"
            >
              <Calendar className="w-5 h-5" />
              Book a Mentorship
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
