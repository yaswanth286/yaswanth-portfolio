import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Star, GitFork, BookOpen, AlertCircle } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { personal } from '../config/data';

const { githubUsername } = personal;

function StatCard({ icon: Icon, label, value, color }) {
  return (
    <div className="flex flex-col items-center justify-center p-4 rounded-2xl border border-white/5 bg-white/2 hover:border-blue-500/20 transition-all duration-200"
      style={{ background: 'rgba(255,255,255,0.02)' }}>
      <Icon size={20} className={`mb-2 ${color}`} />
      <p className="text-white font-bold text-xl">{value ?? '—'}</p>
      <p className="text-slate-500 text-xs mt-0.5">{label}</p>
    </div>
  );
}

export default function GitHubStats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchStats() {
      try {
        const res = await fetch(`https://api.github.com/users/${githubUsername}`);
        if (!res.ok) throw new Error('Failed');
        const data = await res.json();
        setStats(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, []);

  return (
    <section id="github" className="py-24 relative">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <p className="text-blue-400 font-mono text-sm tracking-widest uppercase mb-2">Open source activity</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            GitHub{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              Statistics
            </span>
          </h2>
          <div className="mt-4 mx-auto w-16 h-0.5 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full" />
        </motion.div>

        {/* Stats cards */}
        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8 animate-pulse">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-24 rounded-2xl bg-white/3" />
            ))}
          </div>
        ) : error ? (
          <div className="flex items-center justify-center gap-2 text-slate-500 mb-8 py-8">
            <AlertCircle size={18} />
            <span className="text-sm">Could not load GitHub stats. Check your connection.</span>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10"
          >
            <StatCard icon={BookOpen} label="Public Repos" value={stats?.public_repos} color="text-blue-400" />
            <StatCard icon={Star} label="Followers" value={stats?.followers} color="text-violet-400" />
            <StatCard icon={GitFork} label="Following" value={stats?.following} color="text-cyan-400" />
            <StatCard icon={GithubIcon} label="GitHub" value="Active" color="text-slate-400" />
          </motion.div>
        )}

        {/* Contribution calendar via github-readme-stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="space-y-4"
        >
          {/* Stats card */}
          <div className="rounded-2xl border border-white/5 overflow-hidden p-1"
            style={{ background: 'rgba(255,255,255,0.02)' }}>
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=transparent&hide_border=true&title_color=60a5fa&icon_color=818cf8&text_color=94a3b8&bg_color=00000000&count_private=true`}
              alt="GitHub Stats"
              className="w-full rounded-xl"
              loading="lazy"
              onError={(e) => {
                e.currentTarget.parentElement.innerHTML =
                  '<p class="text-slate-500 text-sm text-center py-6">GitHub stats widget unavailable — visit github.com/' + githubUsername + '</p>';
              }}
            />
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {/* Streak stats */}
            <div className="rounded-2xl border border-white/5 overflow-hidden p-1"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              <img
                src={`https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=transparent&hide_border=true&ring=60a5fa&fire=818cf8&currStreakLabel=94a3b8&sideLabels=94a3b8&dates=64748b&background=00000000`}
                alt="GitHub Streak"
                className="w-full rounded-xl"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.parentElement.innerHTML =
                    '<p class="text-slate-500 text-sm text-center py-6">Streak stats unavailable</p>';
                }}
              />
            </div>

            {/* Top languages */}
            <div className="rounded-2xl border border-white/5 overflow-hidden p-1"
              style={{ background: 'rgba(255,255,255,0.02)' }}>
              <img
                src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&layout=compact&theme=transparent&hide_border=true&title_color=60a5fa&text_color=94a3b8&bg_color=00000000&langs_count=8`}
                alt="Top Languages"
                className="w-full rounded-xl"
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.parentElement.innerHTML =
                    '<p class="text-slate-500 text-sm text-center py-6">Language stats unavailable</p>';
                }}
              />
            </div>
          </div>

          {/* GitHub profile link */}
          <div className="text-center pt-2">
            <a
              href={personal.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-600 text-slate-400 text-sm font-medium hover:border-blue-500 hover:text-blue-400 hover:bg-blue-500/5 transition-all duration-200"
            >
              <GithubIcon size={16} />
              View GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
