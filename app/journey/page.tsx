import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import InnerPageLayout from '@/components/InnerPageLayout';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Journey | Milestones | The Aviator Training School',
  description: 'The TATS journey since November 2023 — milestones, batch status, and student life at The Aviator Training School, Trivandrum.',
};

const milestones = [
  { date: 'Nov 2023', event: 'TATS Founded', desc: 'Campus opened on 3rd Floor, Mall of Travancore — directly opposite TRV Airport, Trivandrum.' },
  { date: 'Jan 2024', event: 'First Batch Enrolled', desc: 'Batch 1 cadets selected through our 3-layer aptitude and psychological screening. ~32% selection rate established.' },
  { date: '2024', event: 'DGCA Results — First Attempt', desc: 'Batch 1 cadets delivered strong results in their DGCA ground examinations. Mark sheets on file at campus.' },
  { date: '2024–25', event: 'Continued DGCA Performance', desc: 'Strong results maintained across all subsequent DGCA examination attempts. Every attempt on record.' },
  { date: 'Early 2025', event: 'Batch 1 Departs for Flight Training', desc: 'First cohort deployed to Vršac, Serbia. Direct partnership operational.' },
  { date: '2025', event: 'Batch 1 — Solo Under 15 Hours', desc: 'All Batch 1 cadets completed their Solo in under 15 hours and are currently in flight training at Vršac, Serbia.' },
  { date: 'Q2 2026', event: 'Batch 2 Deploys — June 2026', desc: 'Second cohort prepared and deploying for flight training. ATPL Integrated pathway launching.' },
];

const studentLifePhotos = [
  { src: '/images/batch1-dispatch.jpg', caption: 'Epaulette Ceremony of Winglet' },
  { src: '/images/classroom-session.jpg', caption: 'Monthly MBCT Session' },
  { src: '/images/students-campus.jpg', caption: 'TATS Campus — Trivandrum' },
  { src: '/images/ft-grp.jpg', caption: 'Flight Training — Serbia' },
];

export default function Journey() {
  return (
    <InnerPageLayout>
      <div className="page-hero">
        <div>
          <span className="section-label">Our Journey</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            From Trivandrum<br />
            <strong>To The Skies Over Europe.</strong>
          </h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.4)', marginTop: 8, maxWidth: 460 }}>
            Every milestone since November 2023 — and the people who lived it.
          </p>
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
                status: 'Flying in Vršac, Serbia',
                statusColor: 'rgba(0,220,80,.8)',
                desc: 'Batch 1 cadets are currently in flight training at Vršac, Serbia. All cadets have completed their Solo in under 15 hours. TATS has weekly visibility through Flight Logger.',
                icon: '✈️',
              },
              {
                batch: 'Batch 2',
                status: 'Deploying — June 2026',
                statusColor: 'var(--sky)',
                desc: 'Batch 2 is completing ground training and simulator preparation. Departure for Gold Wings Aviation, Radom, Poland scheduled for June 2026.',
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

      {/* Student Life */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Student Life</span>
          <h2 className="section-title rv d1">Life Behind<br /><strong>The Journey.</strong></h2>
          <p className="section-body rv d2" style={{ maxWidth: 480 }}>
            The classroom in Trivandrum, the dispatch ceremonies, the flight line in Serbia — moments from the cadets living this journey.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginTop: 32 }}>
            {studentLifePhotos.map((photo, i) => (
              <div key={photo.src} className={`rv d${i + 1}`} style={{ borderRadius: 9, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)' }}>
                <Image
                  src={withBasePath(photo.src)}
                  alt={photo.caption}
                  width={280}
                  height={220}
                  style={{ width: '100%', height: 180, objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '8px 10px', background: 'rgba(10,14,20,.85)' }}>
                  <p style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.3)', letterSpacing: '.5px' }}>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rv d5" style={{ marginTop: 28 }}>
            <Link href="/gallery" className="btn-ghost">View Full Gallery →</Link>
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
                See the Journey in Person
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7, maxWidth: 480 }}>
                Mark sheets from every DGCA attempt are available for inspection at our campus. Attend the Friday webinar and see it for yourself.
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
