import React from 'react';
import { Briefcase, GraduationCap, Users, Code } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Experience() {
  const experiences = [
    {
      title: 'Engineering Manager',
      company: 'Alibaba',
      period: 'Current',
      description: 'Leading multiple engineering teams (Hotel, Tour, Stays, Activities, Insurance). Managing 25+ engineers, defining scalable architectures, and aligning technical strategy with business goals.',
      icon: Briefcase,
      color: 'text-blue-400',
      bg: 'bg-blue-600/20'
    },
    {
      title: 'Technical Team Lead',
      company: 'Customer Service Excellence Team',
      period: 'Previous',
      description: 'Reduced call center costs through automation, restructured services, and designed impactful systems like automated flight change notifications and refund services.',
      icon: Users,
      color: 'text-purple-400',
      bg: 'bg-purple-600/20'
    },
    {
      title: 'Founder & Mentor',
      company: 'Backend Academy',
      period: 'Previous',
      description: 'Founded an academy to help young engineers from academia transition into industry-ready developers through mentorship and practical training.',
      icon: GraduationCap,
      color: 'text-green-400',
      bg: 'bg-green-600/20'
    },
    {
      title: 'Co-founder',
      company: 'Mspsoft',
      period: 'Early Career',
      description: 'Co-founded a platform dedicated to publishing Farsi content for developers, contributing to the growth of the Iranian tech community.',
      icon: Code,
      color: 'text-amber-400',
      bg: 'bg-amber-600/20'
    }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Professional Journey
          </h2>
        </FadeIn>
          
        <div className="relative border-l-2 border-slate-700 ml-6 md:ml-10 space-y-12">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <FadeIn key={index} delay={index * 0.2} className="relative pl-8 md:pl-12 group">
                {/* Timeline Node */}
                <div className={`absolute -left-[9px] top-0 w-4 h-4 rounded-full border-2 border-slate-900 ${exp.color.replace('text-', 'bg-')} transition-transform group-hover:scale-125`} />
                
                <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-slate-500 transition-all">
                  <div className="flex flex-col md:flex-row md:items-start gap-4 mb-4">
                    <div className={`w-12 h-12 ${exp.bg} rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <Icon className={`w-6 h-6 ${exp.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {exp.title}
                      </h3>
                      <div className={`${exp.color} font-medium`}>
                        {exp.company}
                      </div>
                    </div>
                    <div className="md:ml-auto text-sm text-slate-500 font-mono bg-slate-900/50 px-3 py-1 rounded-full self-start">
                      {exp.period}
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
