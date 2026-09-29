import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Fly Direct | For DGCA-Cleared Candidates | The Aviator Training School',
  description: 'An Integrated ATPL pathway for candidates who have already cleared Meteorology, Navigation and Regulation. 100% of EASA ATPL theory in India, then flight training in Poland — 15 months to EASA CPL and Multi-Engine IR.',
};

export default function FlyDirect() {
  return (
    <InnerPageLayout>
      <div className="page-hero">
        <div>
          <span className="section-label">Integrated ATPL Pathway</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            Fly Direct<br />
            <strong>For DGCA-Cleared Candidates.</strong>
          </h1>
        </div>
      </div>

      <div style={{ padding: '0 5.5% 56px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div className="stat-strip rv">
            {[
              { n: '15', suf: ' months', label: 'Duration' },
              { n: '204', suf: '', label: 'Flight Hours' },
              { n: '41', suf: '', label: 'Simulator Hours' },
              { n: '21', suf: '', label: 'Jet Orientation (A320)' },
            ].map(s => (
              <div key={s.label} className="stat-item">
                <span className="stat-number"><span data-count={s.n}>0</span>{s.suf}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Photo banner */}
      <div className="rv" style={{ padding: '0 5.5% 56px', position: 'relative', zIndex: 10 }}>
        <div style={{
          maxWidth: 1040, margin: '0 auto', borderRadius: 11, overflow: 'hidden',
          backgroundImage: `url(${withBasePath('/images/batch2-dispatch.jpg')})`,
          backgroundSize: 'cover', backgroundPosition: 'center', height: 340,
          display: 'flex', alignItems: 'flex-end', border: '1px solid rgba(255,255,255,.045)',
        }}>
          <div style={{ padding: '18px 24px', background: 'linear-gradient(to top, rgba(0,0,0,.75), transparent)', width: '100%' }}>
            <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.75)' }}>A Fly Direct cohort, ready to depart for Poland</p>
          </div>
        </div>
      </div>

      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 0 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <span className="section-label rv">Who This Is For</span>
            <h2 className="section-title rv d1">Already Cleared<br /><strong>DGCA Ground?</strong></h2>
            <p className="section-body rv d2">
              Fly Direct is TATS&apos;s Integrated ATPL airline pathway. If you have already cleared Meteorology, Navigation, and Regulation (with at least one RTR paper strongly recommended), you can join directly — <strong>100% of the 960-hour EASA ATPL theory is completed in India</strong> while your visa is processed, so you arrive in Poland academically ready to fly.
            </p>
            <p className="section-body rv d3">
              Admission follows a structured screening process. Selected candidates then complete two to three weeks of mandatory pre-training — Principles of Flight and 20 hours of Cessna 172 simulator training — before departing for Poland.
            </p>
            <p className="section-body rv d4" style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.55)' }}>
              Candidates who have not cleared Navigation but perform well in screening may be offered Navigation and RTR training as an add-on.
            </p>
          </div>
          <div className="rv d2">
            <div className="glass-panel" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: 16, color: 'var(--gold)' }}>
                Programme Pathway
              </h3>
              {[
                { step: '01', title: 'Academic Eligibility', desc: 'Meteorology, Navigation and Regulation cleared. At least one RTR paper strongly recommended.' },
                { step: '02', title: 'Screening Interview', desc: 'Technical understanding of the cleared subjects, plus attitude, intent and suitability through a psychological assessment.' },
                { step: '03', title: 'Seat Reservation & LMS Access', desc: 'Selected candidates confirm their seat and gain access to the TATS Learning Management System.' },
                { step: '04', title: 'Mandatory Pre-Training', desc: '2–3 weeks: Principles of Flight and 20 hours of Cessna 172 simulator — taxi, take-off, basic manoeuvres, landing, circuits and a solo check.' },
                { step: '05', title: 'EASA ATPL Theory in India', desc: '100% of the 960-hour EASA ATPL theory completed in India while your visa is processed.' },
                { step: '06', title: 'Flight Training in Poland', desc: 'Goldwings Flight Academy, Warsaw & Kraków. 204 flight hrs + 41 simulator hrs across six stages. EASA CPL + Multi-Engine IR.' },
              ].map(s => (
                <div key={s.step} style={{ display: 'flex', gap: 12, padding: '10px 0', borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                  <span style={{ fontFamily: 'var(--font-share-mono), monospace', fontSize: '.6rem', color: 'var(--gold)', opacity: .5, flexShrink: 0, marginTop: 2 }}>{s.step}</span>
                  <div>
                    <div style={{ fontSize: '.76rem', fontWeight: 600, marginBottom: 2 }}>{s.title}</div>
                    <div style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.55)' }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">On Completion</span>
          <h2 className="section-title rv d1" style={{ marginBottom: 24 }}>What You Leave<br /><strong>Poland With.</strong></h2>
          <div className="diff-grid">
            {[
              { title: 'EASA CPL + Multi-Engine IR', desc: 'Commercial Pilot Licence with Multi-Engine Instrument Rating.' },
              { title: 'A-UPRT', desc: 'Airplane Upset Prevention & Recovery Training.' },
              { title: 'MCC + JOC (A320)', desc: 'Multi-Crew Cooperation and 21 hours of Jet Orientation on a fixed-base Airbus A320 simulator.' },
              { title: 'International Cross-Country', desc: '5 hours of international cross-country flying as part of Instrument Rating training.' },
              { title: 'Cold Weather Operations', desc: 'Real winter flying exposure on FIKI-certified aircraft (Flight Into Known Icing).' },
              { title: 'LOFT', desc: 'Line Oriented Flight Training. Terms and conditions may apply at the signing of the Flight Training Agreement.' },
              { title: 'ELP & CAA Exams', desc: 'English Language Proficiency and CAA examinations cleared as part of the programme.' },
              { title: 'DGCA India Support', desc: 'Logbook alignment and documentation support for your DGCA India licence application on return.' },
            ].map((item, i) => (
              <div key={item.title} className={`diff-card rv d${(i % 4) + 1}`}>
                <h3 style={{ fontSize: '.8rem', fontWeight: 600, marginBottom: 5 }}>{item.title}</h3>
                <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>⚡</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                Ready to Fly Direct?
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7 }}>
                Book our Friday webinar. Bring your DGCA clearance details. We'll map your exact pathway to EASA CPL.
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
