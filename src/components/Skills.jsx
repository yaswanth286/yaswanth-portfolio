import { motion } from 'framer-motion';
import { skillCategories } from '../config/data';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};
const chipVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: 'easeOut' } },
};

const conceptColors = [
  'from-blue-500/20 to-blue-600/10 border-blue-500/25 text-blue-300',
  'from-violet-500/20 to-violet-600/10 border-violet-500/25 text-violet-300',
  'from-indigo-500/20 to-indigo-600/10 border-indigo-500/25 text-indigo-300',
  'from-cyan-500/20 to-cyan-600/10 border-cyan-500/25 text-cyan-300',
  'from-purple-500/20 to-purple-600/10 border-purple-500/25 text-purple-300',
  'from-sky-500/20 to-sky-600/10 border-sky-500/25 text-sky-300',
  'from-fuchsia-500/20 to-fuchsia-600/10 border-fuchsia-500/25 text-fuchsia-300',
  'from-teal-500/20 to-teal-600/10 border-teal-500/25 text-teal-300',
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
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
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">What I work with</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Technical{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Skills
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
        </motion.div>

        {/* Categories */}
        <div className="space-y-10">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIndex * 0.08 }}
            >
              {/* Category title */}
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px flex-1 bg-gradient-to-r from-blue-500/20 to-transparent" />
                <h3 className="text-slate-400 text-xs font-semibold uppercase tracking-widest whitespace-nowrap">
                  {category.title}
                </h3>
                <div className="h-px flex-1 bg-gradient-to-l from-violet-500/20 to-transparent" />
              </div>

              {/* Skills grid */}
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={chipVariants}
                    className="group relative"
                  >
                    {skill.icon ? (
                      /* Tech chip with logo */
                      <div className="flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/8 bg-white/3 hover:border-blue-500/40 hover:bg-blue-500/5 transition-all duration-200 cursor-default hover:-translate-y-0.5 hover:shadow-md hover:shadow-blue-500/10"
                        style={{ background: 'rgba(255,255,255,0.025)' }}>
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          width={20}
                          height={20}
                          className="w-5 h-5 object-contain"
                          loading="lazy"
                          onError={(e) => { e.currentTarget.style.display = 'none'; }}
                        />
                        <span className="text-slate-300 text-sm font-medium group-hover:text-white transition-colors">
                          {skill.name}
                        </span>
                      </div>
                    ) : (
                      /* Concept chip — colorful pill */
                      <div
                        className={`px-4 py-2.5 rounded-xl border bg-gradient-to-br text-sm font-medium transition-all duration-200 cursor-default hover:-translate-y-0.5 ${conceptColors[skillIndex % conceptColors.length]}`}
                      >
                        {skill.name}
                      </div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
