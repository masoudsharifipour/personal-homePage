import React from 'react';
import { Server, Users, Terminal, Cpu, Brain, Rocket } from 'lucide-react';
import { FadeIn } from './FadeIn';

export function Skills() {
  const skillCategories = [
    {
      icon: Users,
      title: 'Leadership',
      skills: ['Engineering Management', 'Team Building', 'Strategic Planning', 'Hiring & Retention']
    },
    {
      icon: Server,
      title: 'Architecture',
      skills: ['Scalable Systems', 'Microservices', 'Distributed Systems', 'High Availability']
    },
    {
      icon: Cpu,
      title: 'Technical Stack',
      skills: ['Backend Development', 'System Design', 'Cloud Infrastructure', 'API Design']
    },
    {
      icon: Brain,
      title: 'Methodologies',
      skills: ['Agile/Scrum', 'CI/CD Pipelines', 'DevOps Culture', 'Technical Debt Mgmt']
    },
    {
      icon: Terminal,
      title: 'Automation',
      skills: ['Process Automation', 'Cost Optimization', 'Workflow Efficiency', 'Tooling']
    },
    {
      icon: Rocket,
      title: 'Mentorship',
      skills: ['Career Coaching', 'Technical Growth', 'Knowledge Sharing', 'Community Building']
    }
  ];

  return (
    <section className="py-24 px-6 bg-slate-800/30">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <div 
                  key={index}
                  className="p-6 bg-slate-900/50 rounded-xl border border-slate-700 hover:border-blue-500 transition-all hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-blue-600/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-400" />
                    </div>
                    <h3 className="text-white font-semibold">
                      {category.title}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-slate-400 flex items-center gap-2 text-sm">
                        <span className="w-1.5 h-1.5 bg-blue-400 rounded-full"></span>
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
