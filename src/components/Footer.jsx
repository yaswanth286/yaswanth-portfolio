import { Mail, Heart, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal, navLinks } from '../config/data';

export default function Footer() {
  const year = new Date().getFullYear();

  const scrollTo = (href) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative border-t border-white/5 pt-12 pb-8">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
                <Code2 size={16} className="text-white" />
              </div>
              <span className="font-bold text-white text-lg">
                Yaswanth<span className="text-blue-400">.</span>
              </span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed max-w-xs">{personal.title}</p>
            <div className="flex items-center gap-3 mt-4">
              <a
                href={personal.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500 transition-all duration-200"
              >
                <GithubIcon size={15} />
              </a>
              <a
                href={personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (placeholder)"
                title="Update LinkedIn URL in src/config/data.js"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-blue-500 transition-all duration-200"
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href={`mailto:${personal.email}`}
                aria-label="Email"
                className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-500 hover:text-white hover:border-violet-500 transition-all duration-200"
              >
                <Mail size={15} />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-slate-500 text-sm hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm mb-4 uppercase tracking-wider">Contact</h3>
            <div className="space-y-2">
              <a
                href={`mailto:${personal.email}`}
                className="flex items-center gap-2 text-slate-500 text-sm hover:text-blue-400 transition-colors duration-200 break-all"
              >
                <Mail size={13} className="flex-shrink-0" />
                {personal.email}
              </a>
              <p className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="text-slate-600">📍</span>
                {personal.location}
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-600 text-xs text-center sm:text-left">
            © {year} Yaswanth Yadlapalli. All rights reserved.
          </p>
          <p className="text-slate-600 text-xs flex items-center gap-1">
            Built with <Heart size={11} className="text-red-400/80" fill="currentColor" /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
