import React from 'react';
import { Target, Users, Server, Lightbulb } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function About() {
  const passions = [
    {
      icon: Users,
      text: 'Engineering leadership and team building'
    },
    {
      icon: Server,
      text: 'Software architecture and scalable backend systems'
    },
    {
      icon: Lightbulb,
      text: 'Developer mentorship and tech community impact'
    },
    {
      icon: Target,
      text: 'Using automation to solve real-world business problems'
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-800/30 relative">
      <div className="max-w-5xl mx-auto">
          <div className="flex flex-col gap-16">
            
            {/* Intro */}
            <FadeIn>
              <div className="text-center max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">About Me</h2>
                <p className="text-lg text-slate-300 leading-relaxed">
                  👋 Hello! I'm Masoud Sharifipour, an experienced Engineering Manager and former Technical Team Lead with a deep passion for software engineering, product development, and building high-impact technical teams. Over the past decade, I’ve grown from a curious software developer into a results-driven leader—focused on creating scalable systems, improving customer experience, and empowering engineering cultures.
                </p>
              </div>
            </FadeIn>

            <div className="grid md:grid-cols-2 gap-12 mt-8">
              {/* Current Role */}
              <FadeIn delay={0.2} className="h-full">
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-blue-500/50 transition-colors h-full">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-blue-500 rounded-full"></span>
                    Current Role
                  </h3>
                  <p className="text-slate-400 leading-relaxed">
                    At <strong>Alibaba</strong>, I currently lead multiple engineering teams across products like Hotel, Tour, Stays, Activities, and Insurance, managing over 25 engineers including 2 team leads. My mission is to build resilient teams, define scalable architectures, and bring alignment between technical strategy and business goals.
                  </p>
                </div>
              </FadeIn>

              {/* Past Experience Narrative */}
              <FadeIn delay={0.4} className="h-full">
                <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700/50 hover:border-purple-500/50 transition-colors h-full">
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center gap-3">
                    <span className="w-2 h-8 bg-purple-500 rounded-full"></span>
                    Past Experience
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-4">
                    Previously, I led the <strong>Customer Service Excellence Team</strong>, where we significantly reduced call center costs through automation, restructured services, and designed impactful systems like automated flight change notifications and refund services.
                  </p>
                  <p className="text-slate-400 leading-relaxed">
                    I also founded and mentored the <strong>Backend Academy</strong>, helping young engineers transition into industry-ready developers. Before that, I co-founded <strong>Mspsoft</strong>, a platform dedicated to publishing Farsi content for developers.
                  </p>
                </div>
              </FadeIn>
            </div>

            {/* Passions */}
            <div className="mt-8">
              <FadeIn delay={0.2}>
                <h3 className="text-2xl font-bold text-center text-white mb-10">What I'm Passionate About</h3>
              </FadeIn>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {passions.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <FadeIn key={index} delay={0.3 + (index * 0.1)}>
                      <div 
                        className="p-6 bg-slate-800/50 rounded-xl border border-slate-700 flex flex-col items-center text-center gap-4 hover:bg-slate-800 transition-colors h-full"
                      >
                        <div className="w-12 h-12 bg-blue-600/10 rounded-full flex items-center justify-center text-blue-400">
                          <Icon size={24} />
                        </div>
                        <p className="text-slate-300 text-sm font-medium">{item.text}</p>
                      </div>
                    </FadeIn>
                  );
                })}
              </div>
            </div>

            {/* Motto */}
            <FadeIn delay={0.6}>
              <div className="mt-12 text-center">
                <div className="inline-block p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-2xl border border-white/10 backdrop-blur-sm">
                  <h4 className="text-sm uppercase tracking-wider text-slate-500 mb-2">My Motto</h4>
                  <p className="text-2xl md:text-3xl font-light text-white italic">
                    “There is no secret to success ➡️ It’s hard work!”
                  </p>
                </div>
              </div>
            </FadeIn>

          </div>
      </div>
    </section>
  );
}
