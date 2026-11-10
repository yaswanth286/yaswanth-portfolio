
import { motion } from 'framer-motion';
import { Mail, Download, ExternalLink, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal, resumeConfig } from '../config/data';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
});

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_#1e1b4b_0%,_#0a0f1e_50%,_#000308_100%)]" />

        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-blue-600/10 blur-3xl"
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />

        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-violet-600/8 blur-3xl"
          animate={{ x: [0, -25, 0], y: [0, 25, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />

        <motion.div
          className="absolute top-1/2 right-1/3 w-64 h-64 rounded-full bg-indigo-500/6 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, 30, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              'linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

          {/* Left content */}
          <div className="flex-1 text-center lg:text-left">
            <motion.p
              {...fadeUp(0.1)}
              className="text-blue-400 font-mono text-sm sm:text-base tracking-widest uppercase mb-3"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              {...fadeUp(0.2)}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-tight mb-3"
            >
              {personal.name.split(' ').map((word, i) => (
                <span
                  key={i}
                  className={
                    i === 1
                      ? 'block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-violet-400 to-blue-300'
                      : 'block'
                  }
                >
                  {word}
                </span>
              ))}
            </motion.h1>

            <motion.p
              {...fadeUp(0.3)}
              className="text-lg sm:text-xl text-slate-400 font-medium mb-6"
            >
              {personal.title}
            </motion.p>

            <motion.p
              {...fadeUp(0.4)}
              className="text-slate-400 text-sm sm:text-base leading-relaxed max-w-xl mx-auto lg:mx-0 mb-4"
            >
              {personal.heroDescription}
            </motion.p>

            <motion.p
              {...fadeUp(0.45)}
              className="flex items-center justify-center lg:justify-start gap-1.5 text-slate-500 text-sm mb-8"
            >
              <MapPin size={14} className="text-blue-400" />
              {personal.location}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              {...fadeUp(0.5)}
              className="flex flex-wrap gap-3 justify-center lg:justify-start mb-8"
            >
              <a
                href={resumeConfig.viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-violet-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                <ExternalLink size={16} />
                View Resume
              </a>

              <a
                href={resumeConfig.downloadFile}
                download={resumeConfig.downloadFilename}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-600 text-slate-300 font-semibold text-sm hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Download size={16} />
                Download CV
              </a>

              <button
                onClick={scrollToContact}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-violet-500/50 text-violet-400 font-semibold text-sm hover:border-violet-400 hover:bg-violet-500/10 transition-all duration-300 hover:-translate-y-0.5"
              >
                <Mail size={16} />
                Contact Me
              </button>
            </motion.div>

            {/* Social icons */}
            <motion.div
              {...fadeUp(0.6)}
              className="flex items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <GithubIcon size={18} />
              </a>

              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <LinkedinIcon size={18} />
              </a>

              <a
                href={`mailto:${personal.email}`}
                aria-label="Send Email"
                className="w-10 h-10 rounded-full border border-slate-700 flex items-center justify-center text-slate-400 hover:text-white hover:border-violet-500 hover:bg-violet-500/10 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Mail size={18} />
              </a>
            </motion.div>
          </div>

          {/* Right — Profile photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            className="flex-shrink-0"
          >
            <div className="relative">

              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-blue-500/30 via-violet-500/20 to-transparent blur-lg" />

              {/* Rotating border */}
              <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-blue-500 via-violet-500 to-blue-400 opacity-70 animate-spin-slow" />

              {/* Actual profile photo */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-2 border-slate-700 overflow-hidden">
                <img
                  src="/profile.jpg.jpeg"
                  alt="Yaswanth Yadlapalli"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Status badge */}
              <div className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-slate-900/90 backdrop-blur-sm border border-slate-700 rounded-full px-3 py-1">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-slate-300 font-medium">
                  Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-slate-600 text-xs tracking-widest uppercase font-mono">
            Scroll
          </span>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="w-0.5 h-8 bg-gradient-to-b from-blue-400 to-transparent rounded-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
