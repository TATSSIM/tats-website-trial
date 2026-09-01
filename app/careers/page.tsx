import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';
import { Plane } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Careers | The Aviator Training School',
  description: 'Join The Aviator Training School. Current opening: Ground School Pilot Training Instructor, Trivandrum, Kerala.',
};

const RESPONSIBILITIES = [
  { title: 'Curriculum Delivery', desc: 'Deliver high-quality instruction in Air Navigation, Air Regulations, and Aircraft Systems through engaging, interactive sessions.' },
  { title: 'Medical Test Guidance', desc: "Guide students through the medical examination process and help address concerns around their pilot's medical certificate." },
  { title: 'Incident/Accident Evaluation', desc: 'Facilitate case studies on incident and accident evaluation, fostering safety awareness and risk mitigation.' },
  { title: 'Psychological Aptitude Development', desc: 'Collaborate with psychologists to assess and enhance cadet psychological aptitude through one-on-one sessions.' },
  { title: 'Airport Visits & Familiarisation Trips', desc: 'Organise airport visits and guided tours into airline operations, aircraft handling, and ground operations.' },
  { title: 'Flight Simulator Sessions', desc: 'Facilitate simulator sessions, guiding students through scenarios that build confidence and situational awareness.' },
  { title: 'English Language Proficiency', desc: 'Communicate instructional material clearly — English is the universal language of aviation.' },
  { title: 'Individualised Support', desc: 'Conduct one-on-one mentorship sessions addressing each student’s specific learning needs and goals.' },
];

const QUALIFICATIONS = [
  'Valid pilot’s licence (CPL) with relevant ratings and endorsements',
  'Extensive aviation experience, preferably as a certified flight instructor or airline pilot',
  'In-depth knowledge of aviation theory, regulations, and procedures',
  'Strong communication and interpersonal skills',
  'Proficiency in English, spoken and written',
  'Experience conducting training sessions, workshops, or seminars is desirable',
  'Excellent organisational skills and attention to detail',
  'Commitment to safety, professionalism, and continuous learning',
];

export default function Careers() {
  return (
    <InnerPageLayout>
      <div className="page-hero">
        <div>
          <span className="section-label">Join The Team</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            Shape the Next<br />
            <strong>Generation of Aviators.</strong>
          </h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.4)', marginTop: 8, maxWidth: 460 }}>
            Current openings at The Aviator Training School, Trivandrum.
          </p>
        </div>
      </div>

      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 40 }}>
        <div style={{ width: '100%', maxWidth: 840, margin: '0 auto' }}>
          <span className="section-label rv">Open Position</span>
          <h2 className="section-title rv d1">Ground School<br /><strong>Pilot Training Instructor.</strong></h2>
          <p className="section-body rv d2">
            As a Ground School Training Instructor specialising in pilot training, your primary role is to prepare students for their journey into the skies by providing comprehensive theoretical knowledge and practical insights — nurturing and shaping the next generation of aviators.
          </p>

          <div className="rv d3" style={{ marginTop: 32 }}>
            <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 16 }}>
              Key Responsibilities
            </h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
              {RESPONSIBILITIES.map((r, i) => (
                <div key={r.title} style={{ padding: '16px 0', borderBottom: i < RESPONSIBILITIES.length - 1 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
                  <div style={{ fontSize: '.82rem', fontWeight: 600, marginBottom: 4, color: 'rgba(255,255,255,.85)' }}>{r.title}</div>
                  <div style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.7 }}>{r.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="rv d4" style={{ marginTop: 36 }}>
            <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 16 }}>
              Qualifications &amp; Skills
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
              {QUALIFICATIONS.map(q => (
                <li key={q} style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 1, fontSize: '.68rem' }}>—</span>{q}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ color: 'var(--gold)' }}><Plane size={38} strokeWidth={1.25} /></span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                Apply Now
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7, maxWidth: 480 }}>
                Join us in shaping the future of aviation. Send your CV and cover letter to our team.
              </p>
            </div>
            <a href="mailto:info@theaviatortraining.com?subject=Application%3A%20Ground%20School%20Pilot%20Training%20Instructor" className="btn-primary">
              Apply via Email ↗
            </a>
          </div>
        </div>
      </section>
    </InnerPageLayout>
  );
}
