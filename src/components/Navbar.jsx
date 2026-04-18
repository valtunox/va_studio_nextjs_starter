'use client';

import { useEffect, useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const LINKS = [
  { label: 'Product', href: '#product' },
  { label: 'Features', href: '#features' },
  { label: 'Customers', href: '#customers' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Docs', href: '#docs' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/[0.06] bg-[#07070a]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-x flex h-16 items-center justify-between">
        {/* Brand */}
        <a href="#top" className="flex items-center gap-2.5 text-white">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 via-fuchsia-500 to-rose-500 shadow-lg shadow-violet-500/30">
            <svg viewBox="0 0 24 24" className="h-4 w-4 text-white" fill="none">
              <path d="M4 20V4h4l8 12V4h4v16h-4L8 8v12H4z" fill="currentColor" />
            </svg>
          </span>
          <span className="font-display text-lg font-bold tracking-tight">Lumina</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
          <button
            type="button"
            className="ml-1 inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:text-white"
          >
            Resources
            <ChevronDown className="h-3.5 w-3.5" />
          </button>
        </nav>

        {/* CTAs */}
        <div className="hidden items-center gap-2 md:flex">
          <a
            href="#signin"
            className="rounded-md px-3 py-2 text-sm font-medium text-white/70 transition-colors hover:text-white"
          >
            Sign in
          </a>
          <a
            href="#trial"
            className="inline-flex items-center gap-1.5 rounded-md bg-white px-3.5 py-2 text-sm font-semibold text-slate-900 transition-all hover:bg-slate-100 hover:-translate-y-0.5"
          >
            Start free trial
          </a>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white/80 hover:bg-white/10 md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/[0.06] bg-[#07070a]/95 backdrop-blur-xl md:hidden">
          <div className="container-x flex flex-col gap-1 py-4">
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-white/80 hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-white/[0.06] pt-4">
              <a
                href="#signin"
                className="rounded-md border border-white/10 px-3 py-2.5 text-center text-sm font-semibold text-white/80"
              >
                Sign in
              </a>
              <a
                href="#trial"
                className="rounded-md bg-white px-3 py-2.5 text-center text-sm font-semibold text-slate-900"
              >
                Start free trial
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
