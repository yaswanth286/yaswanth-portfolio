
import { motion } from 'framer-motion';
import { Mail, Phone, Send } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal } from '../config/data';

export default function Contact() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone.replace(/\s/g, '')}`,
    },
    {
      icon: GithubIcon,
      label: 'GitHub',
      value: `github.com/${personal.githubUsername}`,
      href: personal.github,
    },
    {
      icon: LinkedinIcon,
      label: 'LinkedIn',
      value: 'linkedin.com/in/yaswanth22',
      href: personal.linkedin,
    },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-violet-400 font-mono text-sm tracking-widest uppercase mb-2">
            Get in touch
          </p>

          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Let's{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">
              Connect
            </span>
          </h2>

          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full" />

          <p className="text-slate-400 text-sm sm:text-base mt-6 max-w-xl mx-auto leading-relaxed">
            I'm always interested in connecting with developers, exploring
            opportunities and working on interesting projects. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-12">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={label !== 'Email' && label !== 'Phone' ? '_blank' : undefined}
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl border border-white/5 hover:border-blue-500/30 transition-all duration-300"
                style={{ background: 'rgba(255,255,255,0.02)' }}
              >
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 border border-blue-500/20 flex items-center justify-center flex-shrink-0 group-hover:from-blue-500/25 group-hover:to-violet-500/25 transition-all">
                  <Icon size={18} className="text-blue-400" />
                </div>

                <div className="min-w-0">
                  <p className="text-slate-500 text-xs font-medium uppercase tracking-wider">
                    {label}
                  </p>

                  <p className="text-sm font-medium truncate text-slate-300 group-hover:text-white transition-colors">
                    {value}
                  </p>
                </div>
              </a>
            ))}
          </motion.div>

          {/* Email Contact Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="lg:col-span-3"
          >
            <div
              className="p-8 sm:p-10 rounded-2xl border border-white/5 text-center h-full flex flex-col items-center justify-center"
              style={{ background: 'rgba(255,255,255,0.02)' }}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500/15 to-violet-500/15 border border-blue-500/20 flex items-center justify-center mb-6">
                <Mail size={30} className="text-blue-400" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3">
                Let's Work Together
              </h3>

              <p className="text-slate-400 text-sm leading-relaxed max-w-md mb-8">
                Have an opportunity, a project idea, or just want to connect?
                I'd love to hear from you. Send me an email!
              </p>

              <a
                href={`mailto:${personal.email}?subject=${encodeURIComponent('Portfolio Contact')}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold text-sm hover:from-blue-500 hover:to-violet-500 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                <Send size={17} />
                Email Me
              </a>

              <p className="text-slate-500 text-xs mt-5">
                {personal.email}
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
