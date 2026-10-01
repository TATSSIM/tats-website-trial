import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Plane } from 'lucide-react';
import { withBasePath } from '@/lib/basePath';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema, courseSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'AC 48 | PPL Training Pathway in Serbia | The Aviator Training School',
  description: 'AC 48 is a Private Pilot Licence pathway in Serbia, built for working professionals in the Middle East — your first step towards a Commercial Pilot Licence.',
  alternates: { canonical: '/programs/ac-48' },
};

const SUBJECTS = [
  'Air Law',
  'Aircraft General Knowledge',
  'Flight Performance and Planning',
  'Human Performance and Limitations',
  'Meteorology',
  'Navigation',
  'Operational Procedures',
  'Principles of Flight',
  'Communication',
];

export default function AC48() {
  return (
    <InnerPageLayout>
      <JsonLd
        data={[
          breadcrumbSchema([
            { name: 'Home', path: '/' },
            { name: 'Programmes', path: '/programs' },
            { name: 'AC 48', path: '/programs/ac-48' },
          ]),
          courseSchema({
            name: 'AC 48 — PPL Training in Serbia',
            description: 'AC 48 is a Private Pilot Licence pathway in Serbia, built for working professionals in the Middle East — your first step towards a Commercial Pilot Licence.',
            path: '/programs/ac-48',
            timeToComplete: 'P3M',
          }),
        ]}
      />
      <div className="page-hero">
        <div>
          <span className="section-label">PPL Pathway for Working Professionals</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            AC 48<br />
            <strong>PPL Training in Serbia.</strong>
          </h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.55)', marginTop: 8, maxWidth: 520, lineHeight: 1.8 }}>
            Built for working professionals in the Middle East. Earn your Private Pilot Licence in Serbia — your first step towards a Commercial Pilot Licence.
          </p>
        </div>
      </div>

      <div style={{ padding: '0 5.5% 56px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div className="stat-strip rv">
            {[
              { n: '9', suf: '', label: 'Ground Subjects' },
              { n: '10', suf: '', label: 'Simulator Hours Included' },
              { n: '3', suf: ' months', label: 'Consecutive Flying Window' },
              { n: '3', suf: ' steps', label: 'CAD Exam to Final Checks' },
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
          backgroundImage: `url(${withBasePath('/images/serbia-grp.jpg')})`,
          backgroundSize: 'cover', backgroundPosition: 'center', height: 340,
          display: 'flex', alignItems: 'flex-end', border: '1px solid rgba(255,255,255,.045)',
        }}>
          <div style={{ padding: '18px 24px', background: 'linear-gradient(to top, rgba(0,0,0,.75), transparent)', width: '100%' }}>
            <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.75)' }}>AC 48 cadets on the flight line in Serbia</p>
          </div>
        </div>
      </div>

      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 0 }}>
        <div className="md-grid-1" style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <span className="section-label rv">Eligibility</span>
            <h2 className="section-title rv d1">Who Can<br /><strong>Apply.</strong></h2>
            <p className="section-body rv d2">
              AC 48 is open to candidates who meet the minimum requirements below before applying.
            </p>
            <p className="section-body rv d3">
              <strong>Training happens in Serbia.</strong> By joining, the candidate understands and agrees that they will be sent to Serbia to complete flight training and obtain their PPL.
            </p>
          </div>
          <div className="rv d2">
            <div className="glass-panel" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: 16, color: 'var(--gold)' }}>
                Minimum Requirements
              </h3>
              {[
                { step: '01', title: 'Academic Qualification', desc: 'Plus Two (12th) certificate with Maths & Physics.' },
                { step: '02', title: 'Medical Fitness', desc: 'A Class 2 EASA Medical.' },
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
          <span className="section-label rv">Training Modules</span>
          <h2 className="section-title rv d1" style={{ marginBottom: 24 }}>Ground &amp; Simulator<br /><strong>Preparation.</strong></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 16 }}>
            <div className="glass-panel rv d1" style={{ padding: '26px 24px' }}>
              <div style={{ fontFamily: 'var(--font-share-mono), monospace', fontSize: '.6rem', color: 'var(--gold)', opacity: .6, marginBottom: 8 }}>MODULE 1</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: 6 }}>Evionica Online Training</h3>
              <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7, marginBottom: 14 }}>
                Nine subjects, delivered as self-study with doubt-clearance sessions. Extra sessions are available on request.
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {SUBJECTS.map((s, i) => (
                  <li key={s} style={{ fontSize: '.74rem', color: 'rgba(255,255,255,.6)', display: 'flex', gap: 10 }}>
                    <span style={{ fontFamily: 'var(--font-share-mono), monospace', fontSize: '.6rem', color: 'var(--gold)', opacity: .5, marginTop: 2 }}>{String(i + 1).padStart(2, '0')}</span>
                    {s}
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass-panel rv d2" style={{ padding: '26px 24px' }}>
              <div style={{ fontFamily: 'var(--font-share-mono), monospace', fontSize: '.6rem', color: 'var(--gold)', opacity: .6, marginBottom: 8 }}>MODULE 2</div>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: 6 }}>Simulator Training</h3>
              <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>
                Ten hours of simulator training are included in the package and completed before you go for flight training.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div className="md-grid-1" style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56 }}>
          <div>
            <span className="section-label rv">Timeline</span>
            <h2 className="section-title rv d1">When Training<br /><strong>Happens.</strong></h2>
            <p className="section-body rv d2">
              Flight training begins only after ground training has been completed.
            </p>
            <p className="section-body rv d3">
              <strong>Best time to fly: April to September.</strong> Students choose three consecutive months from these options.
            </p>
          </div>
          <div className="rv d2">
            <div className="glass-panel" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: 16, color: 'var(--gold)' }}>
                Three Steps
              </h3>
              {[
                { step: '01', title: 'PPL CAD Exam', desc: 'Complete the PPL ground examination.' },
                { step: '02', title: 'Practical Training', desc: 'Flight training in Serbia across your chosen three-month window.' },
                { step: '03', title: 'Final Checks', desc: 'Final checks to complete your Private Pilot Licence.' },
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

      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ flexShrink: 0, color: 'var(--gold)' }}><Plane size={38} strokeWidth={1.25} /></span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                Ready to Enrol in AC 48?
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7, maxWidth: 520 }}>
                Enrolment requires completing the Registration Document. Talk to our team — Monday to Saturday, 9:30 AM to 5:30 PM (IST) — or attend our Friday webinar for a full walkthrough.
              </p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <a href="https://webinar.theaviatortraining.com/screening" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Webinar ↗
              </a>
              <Link href="/contact" className="btn-ghost" style={{ textAlign: 'center' }}>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
