import type { Metadata } from 'next';
import Link from 'next/link';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Programmes | The Aviator Training School',
  description: 'Four pathways to a commercial pilot licence — TATS 120, ATPL Integrated, Fly Direct, and TAPP 50.',
};

const programs = [
  {
    id: 'tats-120',
    icon: '🛩',
    badge: 'Beginners',
    badgeStyle: { background: 'rgba(212,175,55,.08)', color: 'var(--gold)' },
    name: 'TATS 120',
    subtitle: '23 months · Ground up',
    duration: '23 months',
    target: 'Students with no prior aviation training',
    outcomes: ['EASA CPL(A) + Multi-Engine Instrument Rating', 'Frozen ATPL (14 subjects)', 'MCC Certificate', 'JOC on Airbus A320 Full Flight Simulator', 'UPRT, FIKI, International cross-country'],
    img: 'https://images.unsplash.com/photo-1474302770737-173ee21bab63?w=800&q=75&fit=crop',
    desc: 'Our flagship programme. Begin with zero aviation experience and graduate with an EASA CPL(A), Multi-Engine Instrument Rating, and a Frozen ATPL — ready for airline type rating.',
  },
  {
    id: 'atpl-integrated',
    icon: '⭐',
    badge: 'NEW · 2026',
    badgeStyle: { background: 'var(--sky)', color: '#0a0e14' },
    name: 'TATS 120 ATPL Integrated',
    subtitle: '23 months · ATPL theory in India',
    duration: '23 months',
    target: 'Beginners who prefer completing ATPL theory in India',
    outcomes: ['Full EASA ATPL theory (745 hrs) via Evionica CBT', '14 ATPL subjects completed before Poland', 'Depart and fly immediately upon arrival', 'DGCA Conversion Support', 'MCC Certificate'],
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=75&fit=crop',
    desc: 'New for 2026. Complete all 745 hours of EASA ATPL theory in India via Evionica\'s evidence-based CBT system, then depart for Poland ready to fly from day one.',
  },
  {
    id: 'fly-direct',
    icon: '⚡',
    badge: 'DGCA-Cleared',
    badgeStyle: { background: 'rgba(212,175,55,.08)', color: 'var(--gold)' },
    name: 'Fly Direct',
    subtitle: '15–16 months · Skip ground',
    duration: '15–16 months',
    target: 'Candidates who have cleared DGCA ground examinations',
    outcomes: ['200hrs single-engine + 17hrs multi-engine', 'EASA CPL(A) + IR', 'DGCA to EASA conversion', 'Bridge prep + 20hrs simulator before Poland', 'Airline Crew Orientation'],
    img: 'https://images.unsplash.com/photo-1559628233-100c798642d0?w=800&q=75&fit=crop',
    desc: 'For candidates who have already cleared DGCA ground examinations. Skip the theory phase and proceed directly to flight training, with a structured bridge programme and 20hrs simulator prep.',
  },
  {
    id: 'tapp-50',
    icon: '🎯',
    badge: 'CPL Holders',
    badgeStyle: { background: 'rgba(212,175,55,.08)', color: 'var(--gold)' },
    name: 'TAPP 50',
    subtitle: 'Flight Instructor Rating',
    duration: 'Varies',
    target: 'CPL holders seeking FI rating or airline preparation',
    outcomes: ['240 total flight hours (2026)', 'Flight Instructor Rating', 'Airline Interview Preparation', 'Structured mentorship programme', 'Career pathway guidance'],
    img: 'https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?w=800&q=75&fit=crop',
    desc: 'For commercial pilot licence holders seeking a Flight Instructor rating or structured pathway to airline employment. Includes mentorship and airline interview preparation.',
  },
];

export default function ProgramsIndex() {
  return (
    <InnerPageLayout>
      <div className="page-hero">
        <div>
          <span className="section-label">Our Programmes</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            Four Pathways.<br />
            <strong>One Standard.</strong>
          </h1>
        </div>
      </div>

      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 56, flexDirection: 'column' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <p className="section-body rv" style={{ maxWidth: 600, marginBottom: 40 }}>
            Whether you're starting from zero or already hold a commercial licence, TATS has a structured, evidence-backed pathway for you. All programmes are delivered in partnership with <strong>Gold Wings Aviation, Poland</strong> — directly, with no intermediary.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
            {programs.map((prog, i) => (
              <div key={prog.id} className={`rv d${(i % 3) + 1}`} style={{
                display: 'grid', gridTemplateColumns: '280px 1fr',
                background: 'rgba(10,14,20,.85)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255,255,255,.045)',
                borderRadius: 11, overflow: 'hidden',
                transition: 'border-color .3s, transform .3s',
              }}>
                {/* Image */}
                <div style={{
                  backgroundImage: `url(${prog.img})`,
                  backgroundSize: 'cover', backgroundPosition: 'center',
                  minHeight: 220,
                }} />
                {/* Content */}
                <div style={{ padding: '28px 28px' }}>
                  <div style={{ display: 'flex', gap: 8, marginBottom: 12, flexWrap: 'wrap' }}>
                    <span style={{ fontSize: '.48rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '2px 8px', borderRadius: 3, ...prog.badgeStyle }}>
                      {prog.badge}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.4rem', fontWeight: 600, marginBottom: 4 }}>
                    {prog.name}
                  </h2>
                  <p style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.26)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 12 }}>
                    {prog.subtitle}
                  </p>
                  <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', lineHeight: 1.7, marginBottom: 14 }}>
                    {prog.desc}
                  </p>
                  <div style={{ marginBottom: 18 }}>
                    <div style={{ fontSize: '.54rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 8 }}>
                      Outcomes
                    </div>
                    <ul style={{ listStyle: 'none', display: 'flex', flexWrap: 'wrap', gap: '4px 12px' }}>
                      {prog.outcomes.map(o => (
                        <li key={o} style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.45)', display: 'flex', gap: 5 }}>
                          <span style={{ color: 'var(--gold)' }}>—</span> {o}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link href={`/programs/${prog.id}`} className="btn-primary" style={{ fontSize: '.64rem', padding: '10px 20px' }}>
                    Full Programme Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>❓</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                Not sure which programme is right for you?
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7, maxWidth: 480 }}>
                Attend our free webinar — every Friday 7 PM IST. We'll walk through all pathways, answer every question, and help you decide based on your specific situation.
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
