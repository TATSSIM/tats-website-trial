import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/seo';
import { TestTube, BookOpen, PlaneTakeoff, Handshake, Brain, Smartphone, GraduationCap, MessagesSquare } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Why TATS | Eight Pillars of Excellence | The Aviator Training School',
  description: 'Eight pillars that set TATS apart: tailored assessment, daily offline classes, direct Poland partnership, MBCT, Aviation English, and more.',
  alternates: { canonical: '/why-tats' },
};

const differentiators = [
  {
    n: '01', Icon: TestTube,
    title: 'Tailored Assessment — ~32% Acceptance',
    summary: 'We select carefully. So every cadet who enters is genuinely ready.',
    body: `Every prospective cadet undergoes a 3-layer assessment before acceptance. First, a psychological evaluation designed by our instructors and high performance psychologist, Wing Commander Dhanasree P V. Second, an academic assessment covering foundation physics, mathematics, and reasoning. Third, a direct interview with the MD.

Our acceptance rate is approximately 32%. This is not a marketing figure — it reflects the genuine rigour of the selection process. We believe the right selection protects both the cadet and the programme's outcomes.`,
  },
  {
    n: '02', Icon: BookOpen,
    title: '3–4 Hours Daily Offline Classes at Campus',
    summary: 'In-person, every day. Not recorded videos. Not occasional sessions.',
    body: `Ground school at TATS is conducted offline, in-person, at our Trivandrum campus, daily. 3–4 hours per day. This is not a live-streamed session — it is a physical classroom with a dedicated faculty member present.

The distinction matters: aviation theory is complex, and the depth required for DGCA and EASA standards cannot be achieved through passive watching. Daily offline instruction builds the kind of knowledge that holds up under examination pressure.`,
  },
  {
    n: '03', Icon: PlaneTakeoff,
    title: 'Cessna 172 FBS — 20 Hours Procedure Training',
    summary: 'Cadets fly a simulator before they fly a real aircraft. By design.',
    body: `TATS operates a Cessna 172 Fixed-Base Simulator (FBS) on-site. Every cadet in the TATS 120 and Fly Direct programmes completes 20 hours of procedure training before departing for Poland.

This is not a familiarisation exercise. It is structured procedure training — cockpit flows, radio calls, circuit work, emergency procedures. Cadets who arrive in Poland having already built this muscle memory progress significantly faster than those who haven't.`,
  },
  {
    n: '04', Icon: Handshake,
    title: 'Direct Poland Partnership — Goldwings Flight Academy',
    summary: 'No intermediary. No sub-agent. Full oversight, every week.',
    body: `TATS's partnership with Goldwings Flight Academy, Poland, is direct. There is no intermediary, no sub-agent, and no third party between us and the flying school. This is not common in Indian aviation training.

What direct means practically: TATS has weekly visibility into each cadet's flight training progress. Capt. Dragan Ivanovich — our Board Advisor, an EASA CFI and Class Rating Examiner — provides ongoing training quality oversight. When something needs to change, we can change it.`,
  },
  {
    n: '05', Icon: Brain,
    title: 'Monthly MBCT — Wing Cdr Dhanasree P V',
    summary: 'Mental resilience training. Unique in Kerala aviation.',
    body: `Monthly Mindfulness-Based Cognitive Therapy (MBCT) sessions are conducted by Wing Commander Dhanasree P V (Retired IAF) — a qualified High Performance Psychologist with extensive experience in aviation psychology.

This programme is unique in Kerala aviation training. The demands of flight training — especially abroad, separated from family, under the pressures of skill acquisition and examination — require a resilience infrastructure. MBCT sessions are part of the TATS programme, not an optional add-on.`,
  },
  {
    n: '06', Icon: Smartphone,
    title: 'Flight Logger — Family Updates from Poland',
    summary: "Families receive updates on their child's training progress.",
    body: `TATS uses Flight Logger to provide families with regular updates on their cadet's training progress in Poland. Parents who have invested significantly — financially and emotionally — in their child's aviation journey should not be waiting months for information.

Flight Logger provides structured visibility: training milestones, flight hours completed, and progress notes. This is not real-time tracking — it is meaningful, regular communication about how training is progressing.`,
  },
  {
    n: '07', Icon: GraduationCap,
    title: 'DGCA Conversion + Airline Crew Orientation',
    summary: "The training doesn't end when you land back from Poland.",
    body: `Completing flight training in Poland and returning to India with an EASA licence is not the end of the TATS pathway. We provide structured support for DGCA Licence Conversion — the process of converting an EASA CPL to a DGCA licence valid for operations in India.

We also conduct Airline Crew Orientation sessions — preparing cadets for the interview process, assessment norms, and expectations of airline type rating selection. The TATS relationship continues through to employment.`,
  },
  {
    n: '08', Icon: MessagesSquare,
    title: 'Aviation English — Twice Monthly',
    summary: 'ICAO Level 4 is not optional. We prepare for it.',
    body: `Aviation English is a prerequisite for commercial pilot operations. ICAO Level 4 is the minimum standard required for international operations. TATS conducts Aviation English sessions twice monthly throughout the programme.

These sessions focus on the specific register of aviation communication — ATC phraseology, crew coordination language, pilot reporting standards, and interview communication. Strong English is not an advantage. It is a requirement.`,
  },
];

export default function WhyTATS() {
  return (
    <InnerPageLayout>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Why TATS', path: '/why-tats' }])} />
      <div className="page-hero">
        <div>
          <span className="section-label">Our Differentiators</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            Eight Pillars.<br />
            <strong className="gold-shimmer">All Verifiable.</strong>
          </h1>
        </div>
      </div>

      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 40, flexDirection: 'column' }}>
        <div style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
          <p className="section-body rv" style={{ marginBottom: 48 }}>
            We could write a list of claims. Every aviation school does. Instead, we&apos;ve documented each differentiator in full — what it means, why it matters, and why it&apos;s uncommon. Click any item to read the full context.
          </p>

          <div className="diff-grid">
            {differentiators.map((d, i) => (
              <details key={d.n} className={`diff-card tilt-card rv d${(i % 4) + 1}`}>
                <summary className="diff-card-inner" style={{ display: 'block' }}>
                  <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                    <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(212,175,55,.055)', border: '1px solid rgba(212,175,55,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                      <d.Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '.5rem', fontFamily: 'var(--font-share-mono), monospace', color: 'rgba(212,175,55,.35)', letterSpacing: '2px', marginBottom: 5 }}>
                        {d.n}
                      </div>
                      <h2 style={{ fontSize: '.92rem', fontWeight: 700, marginBottom: 7, color: 'rgba(255,255,255,.9)', lineHeight: 1.3 }}>
                        {d.title}
                      </h2>
                      <p style={{ fontSize: '.78rem', fontWeight: 600, color: 'var(--gold)', lineHeight: 1.5 }}>
                        {d.summary}
                      </p>
                    </div>
                    <span className="diff-expand-icon" style={{ flexShrink: 0, fontSize: '1.3rem', fontWeight: 300, lineHeight: 1, color: 'rgba(212,175,55,.4)' }}>+</span>
                  </div>
                </summary>
                <div className="diff-card-body" style={{ marginTop: 18, paddingTop: 18, borderTop: '1px solid rgba(255,255,255,.06)', fontSize: '.8rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.9, whiteSpace: 'pre-line' }}>
                  {d.body}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>🎯</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                See the Evidence Yourself
              </h3>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7, maxWidth: 480 }}>
                Attend our Friday webinar. Bring your questions. We&apos;ll back every claim above with documentation.
              </p>
            </div>
            <a href="https://forms.gle/sNmtSNYHzvG5PXxu7" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Free Webinar ↗
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
