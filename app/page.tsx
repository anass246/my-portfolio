import React from 'react';
import { ExternalLink, Code2, Briefcase, Mail } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
const Github = (LucideIcons as any).Github || (LucideIcons as any).GithubIcon || Code2;
const Linkedin = (LucideIcons as any).Linkedin || (LucideIcons as any).LinkedinIcon || Briefcase;
export default function Portfolio() {
  const projects = [
    {
      title: "AI Video Platform",
      description: "SaaS platform built with Next.js and Laravel for AI-driven video processing. Integrated FFmpeg for media handling.",
      tech: ["Next.js", "Laravel", "PostgreSQL", "Tailwind"],
      link: "https://github.com/anass246/ai-video-platform",
    },
    {
      title: "Snack Anass - Full-stack Resto",
      description: "A complete restaurant management system with real-time reservations, food ordering, and a dynamic Admin Dashboard.",
      tech: ["Next.js", "Laravel", "PostgreSQL", "Tailwind CSS"],
      link: "https://github.com/anass246/project.resto",
    }
  ];

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-200 selection:bg-cyan-500/30 font-sans">
      {/* Hero Section */}
      <section className="max-w-4xl mx-auto pt-32 pb-20 px-6">
        <div className="inline-block px-3 py-1 text-sm font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20 mb-6">
          Available for Remote Work
        </div>
        <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
          Full-stack Developer
        </h1>
        <p className="text-lg md:text-xl text-slate-400 max-w-2xl mb-8 leading-relaxed">
          Based in Casablanca. Building high-performance SaaS using <span className="text-cyan-400">Next.js</span> and <span className="text-blue-400">Laravel</span>. Entrepreneur & Martial Arts enthusiast.
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="https://github.com/anass246" className="p-3 bg-slate-800 rounded-lg hover:bg-slate-700 transition-colors border border-slate-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4" />
            </svg>
          </a>
          <button className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all shadow-lg shadow-cyan-500/20">
            Download CV
          </button>
        </div>
      </section>

      {/* Projects Section */}
      <section className="max-w-4xl mx-auto py-20 px-6">
        <h2 className="flex items-center gap-2 text-2xl font-bold mb-12">
          <Code2 className="text-cyan-400" /> Featured Projects
        </h2>

        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-xl">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold group-hover:text-cyan-400 transition-colors">{project.title}</h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <ExternalLink size={20} className="text-slate-500 hover:text-cyan-400 transition-colors" />
                </a>
              </div>
              <p className="text-slate-400 mb-6">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 text-xs font-medium bg-cyan-500/10 text-cyan-400 rounded-full border border-cyan-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-4xl mx-auto py-12 px-6 border-t border-slate-800 text-center text-slate-500 text-sm">
        © 2026 Built with Next.js & Tailwind by Anass.
      </footer>
    </div>
  );
}