import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import { education } from '../config/data';

export default function Education() {
  return (
    <section id="education" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">Academic background</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">Education</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-violet-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-10">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative flex gap-6 sm:gap-8"
              >
                {/* Timeline dot */}
                <div className="flex-shrink-0 relative z-10">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-violet-600/20 to-blue-600/20 border border-violet-500/30 flex items-center justify-center shadow-lg shadow-violet-500/10">
                    {index === 0 ? (
                      <GraduationCap size={20} className="text-violet-400" />
                    ) : (
                      <BookOpen size={20} className="text-blue-400" />
                    )}
                  </div>
                </div>

                {/* Card */}
                <div className="flex-1 group">
                  <div className="relative p-5 sm:p-6 rounded-2xl border border-white/5 hover:border-violet-500/30 transition-all duration-300"
                    style={{ background: 'rgba(255,255,255,0.02)' }}>
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-violet-500/3 to-blue-500/3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative">
                      {/* Period badge */}
                      <span className="inline-block px-3 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-xs font-mono font-medium mb-3">
                        {edu.period}
                      </span>

                      <h3 className="text-white font-bold text-base sm:text-lg mb-1">{edu.degree}</h3>
                      <p className="text-slate-400 text-sm mb-2">{edu.institution}</p>

                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20">
                        <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                        <span className="text-blue-300 text-xs font-semibold">{edu.score}</span>
                      </div>
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
