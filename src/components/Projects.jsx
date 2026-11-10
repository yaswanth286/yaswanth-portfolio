import { motion } from 'framer-motion';
import { ExternalLink, ChevronDown, ChevronUp, AlertCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../config/data';

const techColors = [
  'bg-blue-500/10 text-blue-300 border-blue-500/20',
  'bg-violet-500/10 text-violet-300 border-violet-500/20',
  'bg-cyan-500/10 text-cyan-300 border-cyan-500/20',
  'bg-indigo-500/10 text-indigo-300 border-indigo-500/20',
  'bg-sky-500/10 text-sky-300 border-sky-500/20',
  'bg-purple-500/10 text-purple-300 border-purple-500/20',
];

function ProjectCard({ project, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col rounded-2xl border border-white/5 overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-blue-500/10"
      style={{ background: 'rgba(255,255,255,0.02)' }}
    >
      {/* Gradient hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/3 via-transparent to-violet-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

      {/* Project cover illustration */}
      <div className="relative h-44 bg-gradient-to-br from-slate-800 to-slate-900 border-b border-white/5 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              'linear-gradient(#60a5fa 1px, transparent 1px), linear-gradient(90deg, #60a5fa 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        />
        {/* Decorative shapes */}
        <div className="relative flex items-center justify-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500/30 to-violet-500/30 border border-blue-500/30 backdrop-blur-sm flex items-center justify-center">
            <span className="text-2xl font-extrabold text-blue-300">{project.title.charAt(0)}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            {[70, 50, 60].map((w, i) => (
              <div
                key={i}
                style={{ width: w }}
                className="h-1.5 rounded-full bg-gradient-to-r from-blue-400/40 to-violet-400/40"
              />
            ))}
          </div>
        </div>
        {/* Project number badge */}
        <div className="absolute top-3 right-3 w-7 h-7 rounded-full bg-slate-900/80 border border-white/10 flex items-center justify-center">
          <span className="text-slate-400 text-xs font-bold">{String(project.id).padStart(2, '0')}</span>
        </div>
      </div>

      {/* Content */}
      <div className="relative flex flex-col flex-1 p-5 sm:p-6">
        <h3 className="text-white font-bold text-base sm:text-lg mb-2 group-hover:text-blue-300 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {project.technologies.map((tech, i) => (
            <span
              key={tech}
              className={`px-2.5 py-0.5 rounded-full text-xs font-medium border ${techColors[i % techColors.length]}`}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap gap-2.5 mt-auto">
          {project.github ? (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-600 text-slate-300 text-xs font-medium hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-200"
            >
              <GithubIcon size={14} />
              GitHub
            </a>
          ) : (
            <span
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 text-slate-500 text-xs font-medium cursor-default"
              title={project.githubNote || 'Repository not public'}
            >
              <AlertCircle size={14} />
              {project.githubNote || 'Repo on request'}
            </span>
          )}

          {project.live ? (
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600/80 to-violet-600/80 text-white text-xs font-medium hover:from-blue-500 hover:to-violet-500 transition-all duration-200"
            >
              <ExternalLink size={14} />
              Live Demo
            </a>
          ) : project.liveNote ? (
            <span
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg border border-slate-700 text-slate-500 text-xs font-medium cursor-default"
              title={project.liveNote}
            >
              <AlertCircle size={14} />
              {project.liveNote}
            </span>
          ) : null}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const visibleProjects = projects;

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">Things I've built</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            All{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Projects
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
        </motion.div>

        {/* Project grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>


      </div>
    </section>
  );
}
