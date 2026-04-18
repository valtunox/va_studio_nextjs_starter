import { Github, Twitter, Linkedin, Youtube } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Product',
    links: ['Overview', 'Features', 'Integrations', 'Pricing', 'Changelog', 'Roadmap'],
  },
  {
    title: 'Solutions',
    links: ['For Product teams', 'For Sales', 'For Customer Success', 'For Startups', 'For Enterprise'],
  },
  {
    title: 'Resources',
    links: ['Documentation', 'Guides', 'API Reference', 'Community', 'Status', 'Security'],
  },
  {
    title: 'Company',
    links: ['About', 'Customers', 'Careers', 'Partners', 'Contact', 'Press kit'],
  },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.06] bg-[#07070a]">
      {/* Top gradient line */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand + newsletter */}
          <div>
            <a href="#top" className="inline-flex items-center gap-2.5 text-white">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 shadow-lg shadow-violet-500/30">
                <svg viewBox="0 0 24 24" className="h-5 w-5 text-white" fill="none">
                  <path d="M4 20V4h4l8 12V4h4v16h-4L8 8v12H4z" fill="currentColor" />
                </svg>
              </span>
              <span className="font-display text-xl font-bold tracking-tight">Lumina</span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/50">
              The customer intelligence platform for modern teams. Turn every signal into revenue.
            </p>

            <form
              action="#subscribe"
              className="mt-6 flex w-full max-w-sm items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] p-1 pl-3 focus-within:border-white/20"
            >
              <input
                type="email"
                placeholder="you@company.com"
                className="flex-1 bg-transparent py-2 text-sm text-white placeholder:text-white/30 focus:outline-none"
                aria-label="Email address"
              />
              <button
                type="submit"
                className="shrink-0 rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-slate-900 hover:bg-slate-100"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-white/30">
              Monthly product updates. Unsubscribe anytime.
            </p>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                {col.title}
              </h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom row */}
        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-white/[0.06] pt-8 md:flex-row md:items-center">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:gap-5">
            <p className="text-xs text-white/40">© 2026 Lumina Systems, Inc. All rights reserved.</p>
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="text-white/40 hover:text-white/70">Privacy</a>
              <a href="#" className="text-white/40 hover:text-white/70">Terms</a>
              <a href="#" className="text-white/40 hover:text-white/70">Cookies</a>
              <a href="#" className="text-white/40 hover:text-white/70">DPA</a>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] font-medium text-white/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              All systems operational
            </span>
            <a href="#" aria-label="GitHub" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white/50 hover:text-white hover:border-white/20">
              <Github className="h-4 w-4" />
            </a>
            <a href="#" aria-label="Twitter" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white/50 hover:text-white hover:border-white/20">
              <Twitter className="h-4 w-4" />
            </a>
            <a href="#" aria-label="LinkedIn" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white/50 hover:text-white hover:border-white/20">
              <Linkedin className="h-4 w-4" />
            </a>
            <a href="#" aria-label="YouTube" className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/10 text-white/50 hover:text-white hover:border-white/20">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
