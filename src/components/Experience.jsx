import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { experience } from '../config/data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">Professional journey</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Work{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Experience
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 sm:left-7 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: index * 0.15 }}
                className="relative flex gap-5 sm:gap-8"
              >
                {/* Icon */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/30 flex items-center justify-center shadow-lg shadow-violet-500/10">
                    <Briefcase size={18} className="text-violet-400" />
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 group pb-2">
                  <div
                    className="relative p-5 sm:p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/3 to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    <div className="relative">
                      {/* Header row */}
                      <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-white font-bold text-base sm:text-lg">{exp.role}</h3>
                          <p className="text-blue-400 font-semibold text-sm mt-0.5">{exp.company}</p>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-medium">
                            <Calendar size={11} />
                            {exp.period}
                          </span>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-medium">
                            {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <ul className="space-y-2 mt-4">
                        {exp.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2.5 text-slate-400 text-sm">
                            <ChevronRight
                              size={14}
                              className="text-blue-400 flex-shrink-0 mt-0.5"
                            />
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
