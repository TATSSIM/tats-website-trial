import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'TAPP 50 | Flight Instructor Rating | The Aviator Training School',
  description: 'For CPL holders. Flight Instructor Rating, 240 flight hours, and structured airline interview preparation.',
};

export default function TAPP50() {
  return (
    <InnerPageLayout>
      <div className="page-hero">
        <div>
          <span className="section-label">For CPL Holders</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            TAPP 50<br />
            <strong>Flight Instructor Pathway.</strong>
          </h1>
        </div>
      </div>

      <div style={{ padding: '0 5.5% 56px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div className="stat-strip rv">
            {[
              { n: '240', suf: '', label: 'Total Flight Hours (2026)' },
              { n: '1', suf: ' Rating', label: 'FI Rating' },
              { n: '100', suf: '%', label: 'Mentorship-Led' },
              { n: '0', suf: ' Commission', label: 'Taken by TATS' },
            ].map(s => (
              <div key={s.label} className="stat-item">
                <span className="stat-number"><span data-count={s.n}>0</span>{s.suf}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 0 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <span className="section-label rv">About TAPP 50</span>
            <h2 className="section-title rv d1">From CPL to<br /><strong>Instructor. To Airline.</strong></h2>
            <p className="section-body rv d2">
              TAPP 50 is designed for commercial pilot licence holders seeking a structured path to either a Flight Instructor rating or airline employment — or both.
            </p>
            <p className="section-body rv d3">
              The programme includes 240 total flight hours (2026), the FI rating process, mentorship throughout, and structured airline interview preparation. TATS earns zero commission from placement — our interest is in your career, not a referral fee.
            </p>
          </div>
          <div className="rv d2">
            <div className="glass-panel" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: 16, color: 'var(--gold)' }}>
                Programme Includes
              </h3>
              {[
                '240 total flight hours (2026 standard)',
                'Flight Instructor Rating pathway',
                'Airline interview preparation',
                'Structured mentorship programme',
                'Career guidance (zero commission model)',
                'TATS network support',
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

      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>🎯</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                Already Hold a CPL?
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7 }}>
                Discuss your hours, ratings, and career goals at our webinar. We'll tell you exactly how TAPP 50 can accelerate your path.
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
