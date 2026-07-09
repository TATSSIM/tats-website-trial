import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'TATS 120 ATPL Integrated | New 2026 Programme | The Aviator Training School',
  description: 'New for 2026. Complete all 14 EASA ATPL subjects in India via Evionica CBT, then depart for Poland ready to fly from day one.',
};

export default function ATPLIntegrated() {
  return (
    <InnerPageLayout>
      <div className="page-hero">
        <div>
          <div style={{ display: 'inline-flex', gap: 8, marginBottom: 14 }}>
            <span style={{ fontSize: '.52rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 4, background: 'var(--sky)', color: '#0a0e14' }}>
              ⭐ NEW FOR 2026
            </span>
          </div>
          <span className="section-label">Integrated Pathway</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2rem, 4vw, 3.6rem)', fontWeight: 300 }}>
            TATS 120 ATPL Integrated<br />
            <strong>Theory Here. Flying There.</strong>
          </h1>
        </div>
      </div>

      {/* Stats */}
      <div style={{ padding: '0 5.5% 56px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div className="stat-strip rv">
            {[
              { n: '23', suf: ' months', label: 'Duration' },
              { n: '745', suf: '', label: 'ATPL Theory Hours' },
              { n: '14', suf: '', label: 'ATPL Subjects' },
              { n: '204', suf: '', label: 'Flight Hours (Poland)' },
            ].map(s => (
              <div key={s.label} className="stat-item">
                <span className="stat-number"><span data-count={s.n}>0</span>{s.suf}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 0 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <span className="section-label rv">What's Different</span>
            <h2 className="section-title rv d1">All 14 Subjects.<br /><strong>Completed in India.</strong></h2>
            <p className="section-body rv d2">
              In the standard TATS 120 pathway, ATPL theory is completed alongside flight training in Poland. In this integrated variant, <strong>the entire 745-hour EASA ATPL theory is completed in India</strong> via Evionica's evidence-based CBT platform.
            </p>
            <p className="section-body rv d3">
              Cadets then depart for Poland with all 14 subjects done — ready to fly immediately upon arrival, with no theory sitting alongside flight training.
            </p>
            <p className="section-body rv d4">
              The <strong>June 2026 intake</strong> completes 100% Evionica from India. Later intakes may complete 30% in India with the remainder alongside flight training.
            </p>
          </div>
          <div className="rv d2">
            <div className="glass-panel" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: 16, color: 'var(--gold)' }}>
                Integrated Outcomes
              </h3>
              {[
                'All 14 EASA ATPL subjects completed in India',
                '745 hours of CBT via Evionica',
                'Evidence-Based Learning Management System (LMS)',
                'Depart Poland — fly from day one',
                'EASA CPL(A) + Multi-Engine IR',
                'MCC Certificate',
                'DGCA Conversion Support',
              ].map(item => (
                <div key={item} style={{ display: 'flex', gap: 10, padding: '8px 0', borderBottom: '1px solid rgba(255,255,255,.04)', fontSize: '.76rem', color: 'rgba(255,255,255,.6)' }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0 }}>✓</span>
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Phases */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Three Phases</span>
          <h2 className="section-title rv d1" style={{ marginBottom: 32 }}>Structured.<br /><strong>Sequential.</strong></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {[
              {
                phase: 'Phase 1',
                title: 'DGCA Ground Classes',
                duration: '6–7 months in India',
                items: ['Meteorology', 'Air Navigation', 'Air Regulations', 'RTR (A) preparation', 'Foundation Physics & Maths'],
              },
              {
                phase: 'Phase 2',
                title: 'EASA ATPL Theory',
                duration: '745 hrs via Evionica CBT — India',
                items: ['All 14 ATPL subjects', 'Evidence-Based LMS', 'Progress tracking', '100% Evionica (June intake)', 'Tailored assessment + simulator prep alongside'],
              },
              {
                phase: 'Phase 3',
                title: 'Flight Training',
                duration: 'Gold Wings Aviation, Poland',
                items: ['Arrive. Fly immediately.', '200hrs single-engine', '17hrs multi-engine', 'No theory burden during training', 'Weekly Flight Logger updates'],
              },
            ].map((p, i) => (
              <div key={p.phase} className={`diff-card rv d${i + 1}`}>
                <div style={{ fontSize: '.52rem', fontWeight: 700, letterSpacing: '3px', textTransform: 'uppercase', color: 'var(--sky)', marginBottom: 6 }}>
                  {p.phase}
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: 4 }}>
                  {p.title}
                </h3>
                <p style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.3)', letterSpacing: '1px', marginBottom: 12, textTransform: 'uppercase' }}>
                  {p.duration}
                </p>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 5 }}>
                  {p.items.map(item => (
                    <li key={item} style={{ fontSize: '.74rem', color: 'rgba(255,255,255,.45)', display: 'flex', gap: 6 }}>
                      <span style={{ color: 'var(--gold)' }}>—</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* CTA */}
      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>⭐</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                June 2026 Intake — Now Open
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7 }}>
                Limited seats. Attend our Friday webinar to understand the full programme, fees, and selection process.
              </p>
            </div>
            <a href="https://forms.gle/sNmtSNYHzvG5PXxu7" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Webinar ↗
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
