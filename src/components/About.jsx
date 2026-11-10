import { motion } from 'framer-motion';
import { GraduationCap, Star, Briefcase, Code2 } from 'lucide-react';
import { personal, achievements } from '../config/data';

const iconMap = { GraduationCap, Star, Briefcase, Code2 };

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">Get to know me</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">Me</span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-4 text-slate-400 leading-relaxed">
              {personal.about.map((para, i) => (
                <p key={i} className="text-sm sm:text-base">
                  {para}
                </p>
              ))}
            </div>

            {/* Quick info pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                { label: 'The Apollo University', color: 'blue' },
                { label: 'B.Tech CSE', color: 'violet' },
                { label: 'CGPA 9.32/10', color: 'green' },
                { label: 'Open to Opportunities', color: 'amber' },
              ].map(({ label, color }) => {
                const colors = {
                  blue: 'border-blue-500/30 bg-blue-500/5 text-blue-300',
                  violet: 'border-violet-500/30 bg-violet-500/5 text-violet-300',
                  green: 'border-green-500/30 bg-green-500/5 text-green-300',
                  amber: 'border-amber-500/30 bg-amber-500/5 text-amber-300',
                };
                return (
                  <span
                    key={label}
                    className={`px-3 py-1 rounded-full border text-xs font-medium ${colors[color]}`}
                  >
                    {label}
                  </span>
                );
              })}
            </div>
          </motion.div>

          {/* Achievement cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {achievements.map((item) => {
              const Icon = iconMap[item.icon] || Code2;
              return (
                <motion.div
                  key={item.label}
                  variants={itemVariants}
                  className="group relative p-5 rounded-2xl border border-white/5 bg-white/3 backdrop-blur-sm hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 cursor-default"
                  style={{ background: 'rgba(255,255,255,0.02)' }}
                >
                  {/* Glow on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center mb-3 group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-all duration-300">
                      <Icon size={20} className="text-blue-400" />
                    </div>
                    <p className="text-white font-semibold text-sm leading-snug">{item.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
