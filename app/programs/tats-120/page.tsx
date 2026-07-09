import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'TATS 120 | Commercial Pilot Programme | The Aviator Training School',
  description: 'Our flagship 23-month programme. Begin with zero aviation experience and graduate with EASA CPL(A), Multi-Engine IR, and a Frozen ATPL.',
};

export default function TATS120() {
  return (
    <InnerPageLayout>
      {/* Hero */}
      <div className="page-hero">
        <div>
          <span className="section-label">Flagship Programme</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            TATS 120<br />
            <strong>The Complete Pathway.</strong>
          </h1>
        </div>
      </div>

      {/* Key stats */}
      <div style={{ padding: '0 5.5% 56px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div className="stat-strip rv">
            {[
              { n: '23', suf: ' months', label: 'Duration' },
              { n: '204', suf: '', label: 'Flight Hours' },
              { n: '41', suf: '', label: 'Simulator Hours' },
              { n: '14', suf: '', label: 'ATPL Subjects' },
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
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <span className="section-label rv">Programme Overview</span>
            <h2 className="section-title rv d1">From Zero to<br /><strong>EASA CPL.</strong></h2>
            <p className="section-body rv d2">
              TATS 120 takes cadets from zero aviation background to a full EASA CPL(A) with Multi-Engine Instrument Rating, Frozen ATPL (14 subjects), and MCC Certificate — in 23 months.
            </p>
            <p className="section-body rv d3">
              <strong>Target:</strong> Students seeking a career as commercial pilots. No prior aviation experience required. What matters is the drive, the aptitude, and the willingness to commit.
            </p>
            <p className="section-body rv d4">
              <strong>Selection rate:</strong> ~32%. We assess through a tailored psychological and aptitude assessment, an academic test, and an MD interview. This ensures every cadet who enters the programme is genuinely ready.
            </p>
          </div>
          <div className="rv d2">
            <div className="glass-panel" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: 16, color: 'var(--gold)' }}>
                On Completion
              </h3>
              {[
                'EASA CPL(A) with Multi-Engine Instrument Rating',
                'Frozen ATPL (14 subjects)',
                'MCC Certificate',
                'JOC on Airbus A320 Full Flight Simulator',
                'UPRT (Upset Prevention & Recovery)',
                'FIKI (Flight Into Known Icing)',
                'International cross-country included',
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

      {/* India Phase */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Phase 1 — India</span>
          <h2 className="section-title rv d1">The Foundation<br /><strong>We Build Here.</strong></h2>
          <p className="section-body rv d2" style={{ maxWidth: 600, marginBottom: 32 }}>
            Before any cadet sets foot on a Polish airfield, they complete a structured foundation phase at our Trivandrum campus. This is what distinguishes TATS — cadets arrive in Poland prepared, not bewildered.
          </p>
          <div className="diff-grid">
            {[
              { icon: '📐', title: 'Foundation Physics & Maths', desc: 'Bridging any gaps before formal aviation theory begins.' },
              { icon: '📚', title: 'DGCA Ground School', desc: 'Met, Nav, Regulations, RTR (A) — comprehensive in-person coverage.' },
              { icon: '✈️', title: '20hrs Principles of Flight', desc: 'Dedicated aerodynamics module. Theory before the cockpit.' },
              { icon: '🖥', title: '20hrs Cessna 172 FBS', desc: 'Procedure training on a full flight simulator. Before Poland.' },
              { icon: '🧠', title: 'Tailored Assessment', desc: 'Psychologist-designed 3-layer screening — aptitude, academic & MD interview.' },
              { icon: '🏥', title: 'BLS Certification', desc: 'Basic Life Support — required for commercial pilot careers.' },
              { icon: '🗣', title: 'Communicative English', desc: 'ICAO Level 4 preparation. Twice-monthly sessions.' },
              { icon: '🏥', title: 'ATC Visits', desc: 'Live ATC observation at Trivandrum Airport.' },
              { icon: '🧘', title: 'Monthly MBCT', desc: 'Wing Cdr Dhanasree P V. High Performance Psychology sessions.' },
            ].map((item, i) => (
              <div key={item.title} className={`diff-card rv d${(i % 4) + 1}`}>
                <div style={{ fontSize: '1.2rem', marginBottom: 8 }}>{item.icon}</div>
                <h3 style={{ fontSize: '.8rem', fontWeight: 600, marginBottom: 5 }}>{item.title}</h3>
                <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.38)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Poland Phase */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <span className="section-label rv">Phase 2 — Poland</span>
            <h2 className="section-title rv d1">Gold Wings Aviation.<br /><strong>Direct Partnership.</strong></h2>
            <p className="section-body rv d2">
              Flight training is conducted exclusively at <strong>Gold Wings Aviation, Poland</strong> — an EASA Approved Training Organisation (ATO). Our partnership is direct: no intermediary, no sub-agent, no compromise on oversight.
            </p>
            <p className="section-body rv d3">
              TATS has weekly visibility into each cadet's training via <strong>Flight Logger</strong>. Families receive regular updates on their child's progress. Capt. Dragan Ivanovich provides Board-level oversight on training quality.
            </p>
            <div className="rv d4" style={{ marginTop: 20 }}>
              {[
                { label: 'Single-Engine Hours', value: '200 hrs' },
                { label: 'Multi-Engine Hours', value: '17 hrs' },
                { label: 'Training Organisation', value: 'EASA ATO' },
                { label: 'Partnership Type', value: 'Direct — no intermediary' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                  <span style={{ fontSize: '.74rem', color: 'rgba(255,255,255,.4)' }}>{item.label}</span>
                  <span style={{ fontSize: '.74rem', fontWeight: 600, color: 'rgba(255,255,255,.8)' }}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="rv d2">
            <div style={{ borderRadius: 11, overflow: 'hidden', height: 360, position: 'relative' }}>
              <Image
                src="https://images.unsplash.com/photo-1559628233-100c798642d0?w=700&q=75&fit=crop"
                alt="Flight training at Gold Wings Aviation, Poland"
                fill
                style={{ objectFit: 'cover', opacity: .72 }}
                sizes="(max-width: 1040px) 100vw, 500px"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* CTA */}
      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>✈️</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                Interested in TATS 120?
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7 }}>
                Attend our free Friday webinar. Fees, timeline, flying school, selection process — all covered with evidence.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="https://forms.gle/sNmtSNYHzvG5PXxu7" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Webinar ↗
              </a>
              <Link href="/programs" className="btn-ghost" style={{ textAlign: 'center' }}>
                All Programmes
              </Link>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
