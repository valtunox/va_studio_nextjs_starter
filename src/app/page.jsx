import {
  ArrowRight, Play, Sparkles, Shield, Zap, LineChart, Users2, Bot,
  Globe, Database, Workflow, Check, CheckCircle2, Star, Quote,
} from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Faq from '@/components/Faq';

/* ---------- Data ---------- */

const LOGOS = [
  'ACME CORP', 'STELLAR', 'NORTHPEAK', 'VERTEX', 'MERIDIAN',
  'LUMINA LABS', 'QUANTA', 'HORIZON', 'APEX', 'NIMBUS',
];

const BENTO = [
  {
    icon: LineChart, tag: 'Analytics',
    title: 'Product analytics that answer the question',
    desc: 'Event tracking, funnels, cohorts, and retention — all in one place, no SQL required.',
    span: 'lg:col-span-4',
  },
  {
    icon: Bot, tag: 'AI Copilot',
    title: 'Ask any question about your customers',
    desc: 'Lumina Copilot writes the query, charts the answer, and explains the trend.',
    span: 'lg:col-span-2',
  },
  {
    icon: Users2, tag: 'Customer 360',
    title: 'Every signal on every customer',
    desc: 'Unify product, sales, and support data into a single, actionable profile.',
    span: 'lg:col-span-2',
  },
  {
    icon: Workflow, tag: 'Automations',
    title: 'Trigger the right play at the right time',
    desc: 'Send alerts to Slack, sync to Salesforce, or hand off to Intercom — instantly.',
    span: 'lg:col-span-2',
  },
  {
    icon: Shield, tag: 'Security',
    title: 'SOC 2, GDPR, and HIPAA-ready',
    desc: 'Enterprise-grade controls with custom data residency and immutable audit logs.',
    span: 'lg:col-span-2',
  },
];

const DEEP_FEATURES = [
  {
    eyebrow: 'For product teams',
    title: 'Ship the features that move the needle.',
    copy: 'Measure adoption, spot friction, and run experiments without a data team. Lumina turns raw events into decisions your roadmap can act on.',
    bullets: [
      'Funnels, retention, and cohort analysis in seconds',
      'Auto-instrumentation — no tracking code to babysit',
      'Experiment with A/B tests and feature flags built-in',
    ],
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80&auto=format&fit=crop',
    align: 'right',
  },
  {
    eyebrow: 'For revenue teams',
    title: 'Stop guessing which accounts to work.',
    copy: 'Lumina scores every account by fit and intent, then pipes the hottest opportunities straight into your CRM with context reps can actually use.',
    bullets: [
      'Real-time fit and intent scoring for every account',
      'Native sync to Salesforce, HubSpot, and Pipedrive',
      'Slack alerts when a target account shows buying signals',
    ],
    image:
      'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80&auto=format&fit=crop',
    align: 'left',
  },
];

const STATS = [
  { value: '12,480+', label: 'Teams on Lumina' },
  { value: '3.2×',    label: 'Avg revenue lift' },
  { value: '< 90s',   label: 'Median query time' },
  { value: '99.99%',  label: 'Uptime SLA' },
];

const TESTIMONIALS = [
  {
    quote:
      'We replaced four point tools with Lumina. Our revenue team ships experiments in a day instead of a quarter.',
    name: 'Sarah Chen',
    role: 'VP Product · Meridian Health',
    avatar: 'https://i.pravatar.cc/80?img=47',
    company: 'Meridian',
  },
  {
    quote:
      'The AI copilot has replaced at least two BI analysts on our team. And the answers are better.',
    name: 'Marcus Alvarez',
    role: 'CFO · Vertex Robotics',
    avatar: 'https://i.pravatar.cc/80?img=12',
    company: 'Vertex',
  },
  {
    quote:
      'Support, sales, and product finally share the same source of truth. Churn is down 38% in six months.',
    name: 'Priya Natarajan',
    role: 'Head of CS · Stellar Labs',
    avatar: 'https://i.pravatar.cc/80?img=32',
    company: 'Stellar',
  },
];

const PLANS = [
  {
    name: 'Starter',
    price: '$0',
    cadence: 'forever free',
    blurb: 'Everything a small team needs to get started.',
    features: [
      'Up to 5 users',
      '1M events per month',
      'Core analytics & dashboards',
      'Community support',
    ],
    cta: 'Get started free',
    featured: false,
  },
  {
    name: 'Growth',
    price: '$79',
    cadence: 'per workspace / month',
    blurb: 'For scaling teams ready to turn data into revenue.',
    features: [
      'Unlimited users',
      '25M events per month',
      'AI copilot & automations',
      'Native CRM & Slack sync',
      'SAML SSO & SCIM',
      'Priority 24/7 support',
    ],
    cta: 'Start 14-day trial',
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'talk to sales',
    blurb: 'For regulated industries and global organizations.',
    features: [
      'Dedicated infrastructure',
      'HIPAA workspace & data residency',
      'Named customer engineer',
      'Custom MSA & procurement review',
      '99.99% uptime SLA',
    ],
    cta: 'Contact sales',
    featured: false,
  },
];

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-[#07070a] text-white">
      <Navbar />

      {/* =============================================== */}
      {/* HERO                                            */}
      {/* =============================================== */}
      <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
        {/* Grid background with radial mask */}
        <div className="pointer-events-none absolute inset-0 grid-bg mask-radial opacity-60" />
        {/* Glow orbs */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[540px] w-[900px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[140px]" />
        <div className="pointer-events-none absolute -right-40 top-40 h-[320px] w-[420px] rounded-full bg-fuchsia-500/10 blur-[110px]" />
        <div className="pointer-events-none absolute -left-20 bottom-0 h-[260px] w-[380px] rounded-full bg-indigo-500/10 blur-[110px]" />

        <div className="container-x relative">
          {/* Announcement */}
          <div className="flex justify-center">
            <a
              href="#changelog"
              className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/70 backdrop-blur transition-colors hover:border-white/20 hover:text-white"
            >
              <span className="inline-flex items-center gap-1 rounded-full bg-violet-500/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-violet-300">
                <Sparkles className="h-3 w-3" />
                New
              </span>
              <span>Lumina Copilot · now in general availability</span>
              <ArrowRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Headline */}
          <div className="rise-in mx-auto mt-8 max-w-4xl text-center">
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
              Turn every customer{' '}
              <span className="gradient-text italic">signal</span>
              <br className="hidden sm:block" /> into revenue.
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-white/60 sm:text-lg">
              Lumina is the customer intelligence platform for modern go-to-market teams.
              Product, sales, and support — one system of record, one source of truth.
            </p>
          </div>

          {/* CTAs */}
          <div className="rise-in mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#trial"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-lg shadow-white/10 transition-all hover:-translate-y-0.5 hover:bg-slate-100 sm:w-auto"
            >
              Start free trial
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#demo"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white backdrop-blur transition-colors hover:border-white/20 hover:bg-white/[0.06] sm:w-auto"
            >
              <Play className="h-4 w-4 text-violet-300" />
              Watch 2-minute demo
            </a>
          </div>
          <p className="mt-4 text-center text-xs text-white/40">
            No credit card required · Free for 14 days · Cancel anytime
          </p>

          {/* Hero visual */}
          <div className="rise-in mx-auto mt-16 max-w-5xl">
            <div className="shadow-ring relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-white/[0.06] to-white/[0.01] p-1.5">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=85&auto=format&fit=crop"
                  alt="Lumina dashboard preview"
                  className="h-auto w-full object-cover"
                />
                {/* Floating chips */}
                <div className="absolute left-5 top-5 hidden items-center gap-2 rounded-lg border border-white/10 bg-black/60 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur md:flex">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  Live data · 42 events/sec
                </div>
                <div className="absolute bottom-5 right-5 hidden items-center gap-3 rounded-lg border border-white/10 bg-black/60 px-4 py-2.5 backdrop-blur md:flex">
                  <LineChart className="h-4 w-4 text-violet-300" />
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-white/50">MRR</p>
                    <p className="text-sm font-bold">+$184K <span className="text-xs font-medium text-emerald-400">↑ 18%</span></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* LOGO CLOUD                                      */}
      {/* =============================================== */}
      <section className="relative border-y border-white/[0.06] py-14">
        <div className="container-x">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.18em] text-white/40">
            Trusted by 12,000+ teams at the companies building what&apos;s next
          </p>
        </div>
        <div className="mt-8 overflow-hidden">
          <div className="marquee flex w-max items-center gap-16 whitespace-nowrap px-8">
            {[...LOGOS, ...LOGOS].map((logo, i) => (
              <span
                key={i}
                className="font-display text-lg font-bold tracking-[0.18em] text-white/30 transition-colors hover:text-white/60"
              >
                {logo}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* BENTO FEATURES                                  */}
      {/* =============================================== */}
      <section id="features" className="section relative">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
              The platform
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              One platform. <span className="gradient-text italic">Every signal.</span>
            </h2>
            <p className="mt-4 text-base text-white/60">
              Replace your tangle of dashboards, scripts, and Slack threads with a single system
              purpose-built for modern revenue teams.
            </p>
          </div>

          <div className="mt-14 grid gap-4 lg:grid-cols-6">
            {BENTO.map((b) => {
              const Icon = b.icon;
              return (
                <article
                  key={b.title}
                  className={`group relative overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all hover:-translate-y-1 hover:border-white/[0.12] hover:bg-white/[0.04] ${b.span}`}
                >
                  <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-500/10 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/20 to-fuchsia-500/10 ring-1 ring-violet-500/20">
                      <Icon className="h-5 w-5 text-violet-300" />
                    </div>
                    <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-violet-300/80">
                      {b.tag}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-bold leading-tight">{b.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/50">{b.desc}</p>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* STATS                                           */}
      {/* =============================================== */}
      <section className="relative border-y border-white/[0.06] bg-gradient-to-b from-white/[0.02] to-transparent py-20">
        <div className="container-x">
          <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="text-center md:text-left">
                <p className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
                  <span className="gradient-text">{s.value}</span>
                </p>
                <p className="mt-2 text-sm text-white/50">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* DEEP FEATURES (split blocks)                    */}
      {/* =============================================== */}
      <section id="product" className="section">
        <div className="container-x space-y-28">
          {DEEP_FEATURES.map((f) => (
            <div
              key={f.title}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                f.align === 'left' ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div>
                <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
                  {f.eyebrow}
                </span>
                <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-white/60">{f.copy}</p>
                <ul className="mt-6 space-y-3">
                  {f.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-white/80">
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/30">
                        <Check className="h-3 w-3 text-emerald-400" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200"
                >
                  Learn more
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                </a>
              </div>

              <div className="shadow-ring relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-1.5">
                <img
                  src={f.image}
                  alt=""
                  className="h-80 w-full rounded-xl object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* =============================================== */}
      {/* INTEGRATIONS STRIP                              */}
      {/* =============================================== */}
      <section className="relative py-20">
        <div className="container-x">
          <div className="grid items-center gap-10 rounded-3xl border border-white/[0.06] bg-gradient-to-br from-white/[0.04] to-white/[0.01] p-10 lg:grid-cols-2">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-white/70">
                <Database className="h-3.5 w-3.5 text-violet-300" />
                100+ integrations
              </div>
              <h3 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
                Connects to the tools your team already uses.
              </h3>
              <p className="mt-4 text-white/60">
                Salesforce, HubSpot, Snowflake, Segment, Slack, Intercom, Zendesk, Postgres,
                BigQuery, Stripe, and 90+ more. No engineer required.
              </p>
              <a
                href="#docs"
                className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-300 hover:text-violet-200"
              >
                Browse the integration library
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            </div>

            <div className="grid grid-cols-4 gap-3">
              {[
                'Slack', 'Salesforce', 'HubSpot', 'Segment',
                'Snowflake', 'BigQuery', 'Postgres', 'Stripe',
                'Intercom', 'Zendesk', 'Linear', 'Notion',
              ].map((tool) => (
                <div
                  key={tool}
                  className="flex h-20 items-center justify-center rounded-xl border border-white/[0.06] bg-white/[0.02] p-3 text-center text-xs font-semibold text-white/70 transition-all hover:border-white/[0.12] hover:bg-white/[0.04] hover:text-white"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* TESTIMONIALS                                    */}
      {/* =============================================== */}
      <section id="customers" className="section relative">
        <div className="pointer-events-none absolute inset-x-0 top-1/2 h-96 bg-gradient-to-r from-violet-600/5 via-fuchsia-500/5 to-rose-500/5 blur-3xl" />
        <div className="container-x relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
              Customer stories
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Loved by teams who <span className="gradient-text italic">ship</span>.
            </h2>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/60">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <span>4.9 out of 5 · 840+ reviews on G2</span>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <figure
                key={t.name}
                className="relative flex h-full flex-col justify-between gap-8 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-7 transition-colors hover:border-white/[0.12]"
              >
                <Quote className="h-6 w-6 text-violet-400/60" />
                <blockquote className="text-base leading-relaxed text-white/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="flex items-center gap-3 border-t border-white/[0.06] pt-5">
                  <img
                    src={t.avatar}
                    alt=""
                    className="h-11 w-11 rounded-full object-cover ring-2 ring-white/10"
                  />
                  <div>
                    <div className="text-sm font-semibold text-white">{t.name}</div>
                    <div className="text-xs text-white/50">{t.role}</div>
                  </div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* =============================================== */}
      {/* PRICING                                         */}
      {/* =============================================== */}
      <section id="pricing" className="section relative border-t border-white/[0.06]">
        <div className="container-x">
          <div className="mx-auto max-w-2xl text-center">
            <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
              Pricing
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Simple, <span className="gradient-text italic">honest</span> pricing.
            </h2>
            <p className="mt-4 text-white/60">
              Pay for the workspace, not per seat. Every plan includes unlimited read-only viewers.
            </p>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {PLANS.map((p) => (
              <div
                key={p.name}
                className={`relative flex flex-col rounded-2xl border p-8 ${
                  p.featured
                    ? 'border-violet-400/40 bg-gradient-to-b from-violet-500/[0.08] to-white/[0.02] glow-violet'
                    : 'border-white/[0.06] bg-white/[0.02]'
                }`}
              >
                {p.featured && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-lg shadow-violet-500/30">
                    Most popular
                  </span>
                )}
                <div>
                  <h3 className="font-display text-xl font-bold">{p.name}</h3>
                  <p className="mt-1 text-sm text-white/50">{p.blurb}</p>
                </div>
                <div className="mt-6 border-y border-white/[0.06] py-6">
                  <span className="font-display text-5xl font-bold tracking-tight">{p.price}</span>
                  <span className="ml-2 text-sm text-white/50">{p.cadence}</span>
                </div>
                <ul className="mt-6 flex-1 space-y-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      <span className="text-white/80">{f}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className={`mt-8 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold transition-all ${
                    p.featured
                      ? 'bg-white text-slate-900 hover:bg-slate-100 hover:-translate-y-0.5'
                      : 'border border-white/10 bg-white/[0.03] text-white hover:border-white/20 hover:bg-white/[0.06]'
                  }`}
                >
                  {p.cta}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-white/40">
            <Globe className="mr-1.5 inline h-3.5 w-3.5" />
            Billed in USD · Prices exclude local taxes · Annual plans save 20%
          </p>
        </div>
      </section>

      {/* =============================================== */}
      {/* FAQ                                             */}
      {/* =============================================== */}
      <section className="section">
        <div className="container-x grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
          <div>
            <span className="inline-block rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white/70">
              FAQ
            </span>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Questions, <span className="gradient-text italic">answered</span>.
            </h2>
            <p className="mt-4 text-white/60">
              Can&apos;t find what you&apos;re looking for?{' '}
              <a href="#contact" className="text-violet-300 hover:text-violet-200">
                Our team responds in under 2 hours.
              </a>
            </p>
            <div className="mt-8 rounded-xl border border-white/[0.06] bg-white/[0.02] p-5">
              <div className="flex items-center gap-3">
                <img
                  src="https://i.pravatar.cc/80?img=5"
                  alt=""
                  className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
                />
                <div>
                  <p className="text-sm font-semibold">Still on the fence?</p>
                  <p className="text-xs text-white/50">Talk to a product specialist — no pitch.</p>
                </div>
              </div>
              <a
                href="#demo"
                className="mt-4 inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-semibold text-white hover:border-white/20"
              >
                Book a 20-min demo
                <ArrowRight className="h-3 w-3" />
              </a>
            </div>
          </div>

          <Faq />
        </div>
      </section>

      {/* =============================================== */}
      {/* FINAL CTA                                       */}
      {/* =============================================== */}
      <section id="trial" className="relative py-20">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/20 via-fuchsia-500/10 to-slate-900 p-10 md:p-16">
            <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-violet-500/30 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-10 -left-10 h-72 w-72 rounded-full bg-fuchsia-500/20 blur-3xl" />
            <div className="relative grid items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
              <div>
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-violet-300">
                  <Zap className="h-4 w-4" />
                  Ready in 5 minutes
                </div>
                <h2 className="mt-4 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
                  Start turning signals{' '}
                  <span className="gradient-text italic">into revenue</span>.
                </h2>
                <p className="mt-5 max-w-xl text-base text-white/70">
                  Join 12,480+ teams running growth on Lumina. Your first 14 days are free — no
                  credit card, no obligation.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href="#trial-form"
                    className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-slate-900 hover:bg-slate-100 hover:-translate-y-0.5 transition-all"
                  >
                    Start free trial
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white hover:border-white/25 hover:bg-white/[0.08]"
                  >
                    Talk to sales
                  </a>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  { icon: Shield, label: 'SOC 2 Type II · GDPR · HIPAA-ready' },
                  { icon: Zap, label: 'Instant setup · no credit card required' },
                  { icon: Users2, label: 'Dedicated onboarding on every plan' },
                ].map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 backdrop-blur"
                  >
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500/25 to-fuchsia-500/15 ring-1 ring-violet-400/30">
                      <Icon className="h-4 w-4 text-violet-200" />
                    </span>
                    <span className="text-sm font-medium text-white/90">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
