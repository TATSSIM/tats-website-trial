import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Results | Verified DGCA Performance | The Aviator Training School',
  description: 'Verified DGCA exam results every attempt. Batch 1 flying in Poland. Batch 2 departing June 2026. Evidence-backed results from TATS since November 2023.',
};

const milestones = [
  { date: 'Nov 2023', event: 'TATS Founded', desc: 'Campus opened on 3rd Floor, Mall of Travancore — directly opposite TRV Airport, Trivandrum.' },
  { date: 'Jan 2024', event: 'First Batch Enrolled', desc: 'Batch 1 cadets selected through our 3-layer aptitude and psychological screening. ~32% selection rate established.' },
  { date: '2024', event: 'DGCA Results — First Attempt', desc: 'Batch 1 cadets delivered strong results in their DGCA ground examinations. Mark sheets on file at campus.' },
  { date: '2024–25', event: 'Continued DGCA Performance', desc: 'Strong results maintained across all subsequent DGCA examination attempts. Every attempt on record.' },
  { date: 'Early 2025', event: 'Batch 1 Departs for Poland', desc: 'First cohort deployed to Gold Wings Aviation. Direct partnership operational.' },
  { date: '2025', event: 'Batch 1 Currently Flying', desc: 'Batch 1 cadets accumulating flight hours at Gold Wings Aviation, Poland.' },
  { date: 'Q2 2026', event: 'Batch 2 Deploys — June 2026', desc: 'Second cohort prepared and deploying to Poland. ATPL Integrated pathway launching.' },
];

export default function Results() {
  return (
    <InnerPageLayout>
      <div className="page-hero">
        <div>
          <span className="section-label">Verified Performance</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            Verified DGCA Results.<br />
            <strong>Every Attempt. On Record.</strong>
          </h1>
        </div>
      </div>

      {/* Banner */}
      <div style={{ padding: '0 5.5% 56px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv" style={{ marginBottom: 0 }}>
            <span style={{ fontSize: '3rem' }}>🏆</span>
            <div>
              <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.8rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 8 }}>
                Verified DGCA Results — Every Attempt
              </h2>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.8, maxWidth: 560 }}>
                Since TATS&apos;s inception in November 2023, every cadet who has sat the DGCA ground examinations has delivered strong results. This is not a selected sample — this is every attempt. Mark sheets are available for inspection at our campus.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="gold-divider" />

      {/* Batch status */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Batch Status</span>
          <h2 className="section-title rv d1">Where Our<br /><strong>Cadets Are Now.</strong></h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginTop: 32 }}>
            {[
              {
                batch: 'Batch 1',
                status: 'Flying in Poland',
                statusColor: 'rgba(0,220,80,.8)',
                desc: 'Batch 1 cadets are currently accumulating flight hours at Gold Wings Aviation, Poland. TATS has weekly visibility through Flight Logger.',
                icon: '✈️',
              },
              {
                batch: 'Batch 2',
                status: 'Deploying — June 2026',
                statusColor: 'var(--sky)',
                desc: 'Batch 2 is completing ground training and simulator preparation. Departure for Poland scheduled for June 2026.',
                icon: '🛫',
              },
            ].map((b, i) => (
              <div key={b.batch} className={`diff-card tilt-card rv d${i + 1}`}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <span style={{ fontSize: '2rem' }}>{b.icon}</span>
                  <span style={{
                    fontSize: '.58rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase',
                    padding: '3px 8px', borderRadius: 3,
                    background: 'rgba(0,0,0,.3)', color: b.statusColor,
                    border: `1px solid ${b.statusColor}33`,
                  }}>
                    {b.status}
                  </span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem', fontWeight: 600, marginBottom: 8 }}>
                  {b.batch}
                </h3>
                <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Timeline */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 800, margin: '0 auto' }}>
          <span className="section-label rv">Journey Since Nov 2023</span>
          <h2 className="section-title rv d1">A Timeline of<br /><strong>Milestones.</strong></h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0, marginTop: 32, paddingLeft: 20, borderLeft: '1px solid rgba(212,175,55,.15)' }}>
            {milestones.map((m, i) => (
              <div key={i} className={`rv d${(i % 4) + 1}`} style={{ padding: '0 0 32px 28px', position: 'relative' }}>
                <div style={{
                  position: 'absolute', left: -8, top: 4,
                  width: 14, height: 14, borderRadius: '50%',
                  background: 'var(--bg)', border: '2px solid var(--gold)',
                }} />
                <div style={{ fontSize: '.58rem', fontFamily: 'var(--font-share-mono), monospace', color: 'rgba(212,175,55,.5)', letterSpacing: '2px', textTransform: 'uppercase', marginBottom: 4 }}>
                  {m.date}
                </div>
                <h3 style={{ fontSize: '.88rem', fontWeight: 600, marginBottom: 4 }}>{m.event}</h3>
                <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.65 }}>{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>✈️</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                See the Results in Person
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7, maxWidth: 480 }}>
                Mark sheets from every DGCA attempt are available for inspection at our campus. Attend the Friday webinar and verify the results yourself.
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
