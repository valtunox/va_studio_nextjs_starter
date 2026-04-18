'use client';

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const ITEMS = [
  {
    q: 'How does Lumina connect to my existing stack?',
    a: 'We ship native integrations with Salesforce, HubSpot, Segment, Snowflake, BigQuery, Postgres, Zendesk, Intercom, Slack, and 80+ other tools. You can also pipe data in via our REST API or webhooks — most customers are up and running in under an afternoon.',
  },
  {
    q: 'Is my customer data safe?',
    a: 'Yes. Lumina is SOC 2 Type II certified, GDPR compliant, and offers HIPAA-ready workspaces on Enterprise plans. All data is encrypted at rest (AES-256) and in transit (TLS 1.3). You can choose US, EU, or custom data residency.',
  },
  {
    q: 'Can I try Lumina before committing?',
    a: 'Absolutely — every plan starts with a 14-day free trial, no credit card required. You will get access to the full platform, sample datasets, and a customer engineer to walk you through a tailored proof of concept.',
  },
  {
    q: 'Who owns the data I send to Lumina?',
    a: 'You do. Always. We process data on your behalf as a sub-processor and never train models on your data without explicit consent. Raw data can be exported or wiped at any time from your workspace settings.',
  },
  {
    q: 'How is pricing calculated?',
    a: 'Growth is billed per workspace and scales with active users — not by seat or data volume. Enterprise includes custom limits, dedicated infrastructure, and a named customer engineer. We are happy to share a quote for your specific usage profile.',
  },
  {
    q: 'Do you offer discounts for startups, non-profits, or educational orgs?',
    a: 'Yes. YC and Techstars companies get 50% off the first year. Registered non-profits and accredited educational institutions receive a 40% standing discount. Reach out to our sales team with your documentation.',
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="divide-y divide-white/[0.06] rounded-2xl border border-white/[0.06] bg-white/[0.02]">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              className="flex w-full items-start justify-between gap-6 px-6 py-5 text-left transition-colors hover:bg-white/[0.02]"
              aria-expanded={isOpen}
            >
              <span className="text-base font-semibold text-white">{item.q}</span>
              <span
                className={`mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-white/10 transition-colors ${
                  isOpen ? 'bg-white text-slate-900' : 'text-white/60'
                }`}
              >
                {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
              </span>
            </button>
            <div
              className={`grid overflow-hidden transition-all duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="min-h-0">
                <p className="px-6 pb-6 text-sm leading-relaxed text-white/60">{item.a}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
