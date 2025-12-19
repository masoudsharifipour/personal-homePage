import React from 'react';
import { Mail, Calendar, Linkedin, Github } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Contact() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Let's Connect
          </h2>
        </FadeIn>
          
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <FadeIn delay={0.1}>
            <a 
              href="https://www.linkedin.com/in/masoudsharifipour/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-blue-500 transition-all group hover:bg-slate-800 h-full flex items-center"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-blue-600/20 rounded-xl flex items-center justify-center group-hover:bg-blue-600/30 transition-colors shrink-0">
                  <Linkedin className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">LinkedIn</div>
                  <div className="text-slate-400">Professional Network</div>
                </div>
              </div>
            </a>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <a 
              href="mailto:hi@masoudsharifipour.ir"
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-green-500 transition-all group hover:bg-slate-800 h-full flex items-center"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-green-600/20 rounded-xl flex items-center justify-center group-hover:bg-green-600/30 transition-colors shrink-0">
                  <Mail className="w-8 h-8 text-green-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white mb-1 group-hover:text-green-400 transition-colors">Email Me</div>
                  <div className="text-slate-400 break-all">hi@masoudsharifipour.ir</div>
                </div>
              </div>
            </a>
          </FadeIn>

          <FadeIn delay={0.3}>
            <a 
              href="https://github.com/masoudsharifipour"
              target="_blank"
              rel="noopener noreferrer"
              className="p-8 bg-slate-800/50 rounded-2xl border border-slate-700 hover:border-slate-500 transition-all group hover:bg-slate-800 h-full flex items-center"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-slate-600/20 rounded-xl flex items-center justify-center group-hover:bg-slate-600/30 transition-colors shrink-0">
                  <Github className="w-8 h-8 text-slate-400" />
                </div>
                <div>
                  <div className="text-xl font-bold text-white mb-1 group-hover:text-slate-300 transition-colors">GitHub</div>
                  <div className="text-slate-400">Code & Projects</div>
                </div>
              </div>
            </a>
          </FadeIn>
        </div>
        
        <FadeIn delay={0.4}>
          <div className="p-10 bg-gradient-to-r from-purple-900/30 to-blue-900/30 rounded-2xl border border-white/10 text-center backdrop-blur-sm">
            <Calendar className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Book a Mentorship Session
            </h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              Whether you're looking for career advice, technical guidance, or leadership mentoring, 
              I'm here to help you grow and succeed in your engineering journey.
            </p>
            <a 
              href="https://adplist.org/mentors/maosud-sharifipour"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-purple-600 text-white font-medium rounded-xl hover:bg-purple-700 transition-all hover:scale-105 shadow-lg shadow-purple-600/20"
            >
              Schedule on ADPList
            </a>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-500">
              © {new Date().getFullYear()} Masoud Sharifipour. All rights reserved.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
