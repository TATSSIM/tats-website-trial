import type { Metadata } from 'next';
import Image from 'next/image';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'About | The Aviator Training School',
  description: 'Founded November 2023. Evidence-driven aviation training opposite Trivandrum International Airport, Kerala.',
};

export default function About() {
  return (
    <InnerPageLayout>
      {/* Hero */}
      <div className="page-hero">
        <div>
          <span className="section-label">Our Story</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            Founded on Evidence.<br />
            <strong>Built on Results.</strong>
          </h1>
        </div>
      </div>

      {/* Story */}
      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 56 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          <div>
            <span className="section-label rv">The Beginning</span>
            <h2 className="section-title rv d1">November 2023.<br /><strong>Trivandrum.</strong></h2>
            <p className="section-body rv d2">
              The Aviator Training School was founded in November 2023, located on the 3rd Floor of the Mall of Travancore — directly opposite Trivandrum International Airport, Kerala. Our founding premise was simple: <strong>every claim made to a prospective cadet must be backed by verifiable evidence.</strong>
            </p>
            <p className="section-body rv d3">
              Founded by <strong>Chintu Karthikeyan</strong>, TATS is located opposite Trivandrum International Airport — deliberate by design. Cadets see aircraft movements daily, reinforcing the reality of the profession they are preparing for.
            </p>
            <p className="section-body rv d4">
              Since inception, our cadets have delivered <strong>strong results in every DGCA examination attempt</strong>. Batch 1 is currently flying in Poland. Batch 2 departs June 2026.
            </p>
          </div>
          <div className="rv d2">
            <div className="glass-panel" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.3rem', fontWeight: 600, marginBottom: 20, color: 'var(--gold)' }}>
                Our Ideology
              </h3>
              {[
                { icon: '🔬', title: 'Evidence Over Reputation', desc: 'Every result verifiable. No manufactured rankings.' },
                { icon: '📐', title: 'Depth Over Shortcuts', desc: '3–4 hours daily offline classes. In-person, every day.' },
                { icon: '🪟', title: 'Transparency Over Marketing', desc: 'Fees, timeline, flying school, results — all disclosed upfront.' },
                { icon: '🎯', title: 'Mentorship Over Instruction', desc: 'MD involvement through the full journey. Not just enrollment.' },
              ].map(item => (
                <div key={item.title} className="rv" style={{
                  display: 'flex', gap: 14, padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,.04)',
                }}>
                  <span style={{ fontSize: '1.2rem', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                  <div>
                    <div style={{ fontSize: '.8rem', fontWeight: 600, marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.6 }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Leadership */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Leadership</span>
          <h2 className="section-title rv d1">The People<br /><strong>Behind TATS.</strong></h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20, marginTop: 32 }}>
            {[
              {
                name: 'Chintu Karthikeyan',
                role: 'Managing Director',
                bio: 'Founded TATS in November 2023 with a conviction that aviation training in Kerala needed a transparent, evidence-first approach. Personally involved in every cadet\'s journey — from selection to deployment.',
              },
              {
                name: 'Capt. Dragan Ivanovich',
                role: 'Board Advisor',
                bio: 'EASA Certified Flight Instructor and Class Rating Examiner. Brings international standards to TATS\'s Poland pathway and ensures training quality at Gold Wings Aviation meets the highest benchmarks.',
              },
              {
                name: 'Wing Commander Dhanasree P V (Retd)',
                role: 'High Performance Psychologist',
                bio: 'Retired Indian Air Force officer and psychologist specialising in MBCT (Mindfulness-Based Cognitive Therapy). Conducts monthly resilience sessions for TATS cadets — a programme unique in Kerala aviation training.',
              },
            ].map((person, i) => (
              <div key={person.name} className={`diff-card tilt-card rv d${i + 1}`}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%',
                  background: 'linear-gradient(135deg, var(--gold), var(--sky))',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '1.4rem', fontWeight: 700, color: '#0a0e14',
                  marginBottom: 14,
                }}>
                  {person.name[0]}
                </div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.1rem', fontWeight: 600, marginBottom: 4 }}>
                  {person.name}
                </h3>
                <p style={{ fontSize: '.58rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 12 }}>
                  {person.role}
                </p>
                <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.7 }}>{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Facility */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <span className="section-label rv">Our Facility</span>
            <h2 className="section-title rv d1">Opposite the<br /><strong>Airport. By Design.</strong></h2>
            <p className="section-body rv d2">
              Our campus is located on the <strong>3rd Floor, Mall of Travancore</strong>, directly opposite Trivandrum International Airport (TRV). This is not coincidental — daily aircraft movements keep cadets connected to the profession throughout their ground training.
            </p>
            <p className="section-body rv d3">
              Offline, in-person classes daily. Our simulator (Cessna 172 FBS) is on-site. Aptitude assessments, MBCT sessions, and Aviation English classes — all conducted at this facility.
            </p>
            <address className="rv d4" style={{
              fontStyle: 'normal', fontSize: '.78rem',
              color: 'rgba(255,255,255,.5)',
              borderLeft: '2px solid rgba(212,175,55,.3)',
              paddingLeft: 16, marginTop: 20, lineHeight: 2,
            }}>
              3rd Floor, Mall of Travancore<br />
              Opposite Trivandrum International Airport<br />
              Kerala 695024<br />
              <strong style={{ color: 'var(--gold)' }}>+91 62829 95979</strong>
            </address>
          </div>
          <div className="rv d2" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {/* Classroom photo */}
            <div style={{ borderRadius: 11, overflow: 'hidden', border: '1px solid rgba(255,255,255,.045)' }}>
              <Image
                src="/images/classroom-session.jpg"
                alt="TATS classroom — Monthly MBCT session"
                width={500}
                height={280}
                style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
              />
            </div>
            {/* Map */}
            <div style={{ borderRadius: 11, overflow: 'hidden', border: '1px solid rgba(255,255,255,.045)', height: 180 }}>
              <iframe
                src="https://maps.google.com/maps?q=Mall+of+Travancore+Thiruvananthapuram+Kerala&t=&z=16&ie=UTF8&iwloc=&output=embed"
                width="100%" height="100%"
                style={{ border: 'none', filter: 'invert(.9) hue-rotate(185deg) saturate(.65)' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="TATS Campus Map"
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
                Attend Our Friday Webinar
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7, maxWidth: 480 }}>
                Every Friday 7 PM IST. No pressure. No follow-up calls. Just complete, evidence-backed answers.
              </p>
            </div>
            <a href="https://forms.gle/sNmtSNYHzvG5PXxu7" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Register Free ↗
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
