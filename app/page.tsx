import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import YouTubeFacade from '@/components/YouTubeFacade';
import {
  ScrollReveal, CounterAnimate, CardTilt, NavDots,
  FloatingWhatsApp, BackToTop, MagneticButtons,
  TextScramble, ScrollProgressBar, ParallaxHero, TypographyParallax,
} from '@/components/PageClient';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'The Aviator Training School | Beyond Pilots. Shaping Aviators. | Trivandrum',
  description: 'Evidence-first aviation training. EASA CPL pathway. Trivandrum, Kerala. Founded Nov 2023.',
  alternates: { canonical: '/' },
};

const NAV_SECTIONS = [
  { id: 'hero',     label: 'Home'     },
  { id: 'about',    label: 'About'    },
  { id: 'programs', label: 'Programs' },
  { id: 'why',      label: 'Why TATS' },
  { id: 'results',  label: 'Results'  },
  { id: 'contact',  label: 'Contact'  },
];

const TESTIMONIALS = [
  {
    name: 'Delbin Mathew',
    role: 'Batch 1 — Currently Flying',
    quote: 'TATS does not let you settle for approximations. Every question is answered with evidence. I cleared all 14 ATPL subjects before leaving India, and felt the difference from day one in the cockpit.',
    initial: 'D',
  },
  {
    name: 'Jebin Georgy Koshy',
    role: 'Batch 2 — Departing June 2026',
    quote: 'The selection process was tough — three rounds, a psychologist interview, an MD conversation. That rigour is exactly why I chose TATS. You trust people who scrutinised you that carefully.',
    initial: 'J',
  },
  {
    name: 'Shahana',
    role: 'Batch 1 — DGCA Cleared',
    quote: 'The simulator time before Poland changed everything. My first flight abroad was not overwhelming — it was familiar. The 20 hours on the FBS made all the difference.',
    initial: 'S',
  },
];

const VIDEOS = [
  {
    title: 'How to Become a Pilot',
    desc: 'Complete overview — from ground zero to commercial airline pilot.',
    platform: 'youtube' as const,
    ytId: 'oYdIgpba-44',
    thumb: 'https://img.youtube.com/vi/oYdIgpba-44/maxresdefault.jpg',
  },
  {
    title: 'TATS 120 Programme',
    desc: 'Deep dive into the EASA CPL pathway — Poland, fees, and timeline.',
    platform: 'instagram' as const,
    igUrl: 'https://www.instagram.com/reel/DSUE8OPATzD/',
  },
  {
    title: 'How TATS Chooses the Best Global Pathways',
    desc: 'How we evaluate flying schools — quality, safety, cadet outcomes.',
    platform: 'youtube' as const,
    ytId: 'Oj56YDQKrUs',
    thumb: 'https://img.youtube.com/vi/Oj56YDQKrUs/maxresdefault.jpg',
  },
  {
    title: 'From Kerala to EASA Flight Instructor',
    desc: 'For existing CPL holders. FI Rating, 240 hours, and airline prep.',
    platform: 'youtube' as const,
    ytId: '8wppC4JbMno',
    thumb: 'https://img.youtube.com/vi/8wppC4JbMno/maxresdefault.jpg',
  },
];

export default function Home() {
  return (
    <>
      {/* ── Client-side effects ── */}
      <ScrollReveal />
      <CounterAnimate />
      <CardTilt />
      <MagneticButtons />
      <FloatingWhatsApp />
      <BackToTop />
      <TextScramble />
      <ScrollProgressBar />
      <ParallaxHero />
      <TypographyParallax />
      <NavDots sections={NAV_SECTIONS} />

      <Nav />

      {/* ════════════════════════════════════
          HERO — background scoped inside section
      ════════════════════════════════════ */}
      <section id="hero">
        <div id="cockpit-scene">
          <div id="bg-photo" />
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video id="bg-video" autoPlay muted loop playsInline aria-hidden="true">
            <source src={withBasePath("/videos/cessna-circuit.mp4")} type="video/mp4" />
          </video>
          <div id="hero-grid" />
          <div id="bg-overlay" />
          <div id="bg-vignette" />
          <div id="panel-fade" />
        </div>
        <div id="hero-scan" />
        <div className="hud-corner hud-corner-tl" />
        <div className="hud-corner hud-corner-tr" />
        <div className="hud-corner hud-corner-bl" />
        <div className="hud-corner hud-corner-br" />
        <span className="hud-coord hud-coord-tl">08°29′N 76°57′E · VOTV · TRV</span>
        <span className="hud-coord hud-coord-br">EST. NOV 2023 · KERALA · INDIA</span>

        <div style={{ maxWidth: 860, position: 'relative', zIndex: 10 }}>
          <span className="hero-school-label hero-el">
            The Aviator Training School · Trivandrum
          </span>

          <div data-parallax-speed="-0.09">
            <span className="hero-tagline-1 hero-el d1">BEYOND</span>
          </div>

          <div data-parallax-speed="-0.15" style={{ marginTop: '-.04em' }}>
            <span className="hero-tagline-1 hero-el d2">PILOTS</span>
          </div>

          <div className="hero-rule hero-el d3" data-parallax-speed="-0.06" style={{ maxWidth: 520 }}>
            <div className="hero-rule-line" />
            <span className="hero-rule-diamond">◆</span>
            <div style={{ flex: 1, height: 1, background: 'linear-gradient(to right, rgba(212,175,55,.55), rgba(212,175,55,.12))', maxWidth: 240 }} />
          </div>

          <div data-parallax-speed="-0.22">
            <span className="hero-tagline-2 hero-el d4">Shaping Aviators</span>
          </div>

          <p className="hero-el d5" style={{
            fontSize: '.82rem', color: 'rgba(255,255,255,.5)',
            marginTop: '2.8vh', marginBottom: '3.5vh',
            maxWidth: 460, lineHeight: 1.8, letterSpacing: '.3px',
          }}>
            Evidence-first aviation training institute.
            Kerala&apos;s only programme with verified DGCA results,
            direct EASA pathway, and a 32% selection rate.
          </p>

          <div className="hero-el d6" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', alignItems: 'center' }}>
            <a href="https://forms.gle/sNmtSNYHzvG5PXxu7" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Free Webinar
              <span className="btn-icon">↗</span>
            </a>
            <a
              href="https://wa.me/916282995979?text=Hi%2C%20I%27m%20interested%20in%20TATS%20programmes"
              target="_blank" rel="noopener noreferrer"
              className="btn-ghost"
              style={{ borderColor: 'rgba(37,211,102,.35)', color: 'rgba(37,211,102,.82)' }}
            >
              WhatsApp Us ↗
            </a>
            <Link href="/programs" className="btn-ghost">Explore Programs</Link>
          </div>

          <div className="hero-el d7" style={{
            marginTop: '3vh',
            display: 'inline-flex', alignItems: 'center', gap: 9,
            fontSize: '.56rem', fontWeight: 700, letterSpacing: 3,
            textTransform: 'uppercase', color: 'rgba(212,175,55,.55)',
            border: '1px solid rgba(212,175,55,.18)', padding: '5px 14px',
            borderRadius: 100, background: 'rgba(212,175,55,.03)',
          }}>
            <span style={{ position: 'relative', width: 7, height: 7, flexShrink: 0 }}>
              <span style={{ position: 'absolute', inset: 0, borderRadius: '50%', background: 'var(--gold)', animation: 'pulse-ring 1.9s ease-out infinite' }} />
              <span style={{ position: 'absolute', inset: '1px', borderRadius: '50%', background: 'var(--gold)', animation: 'blink 1.5s infinite' }} />
            </span>
            Every Friday · 7 PM IST · Free Webinar
          </div>
        </div>

        <div className="scroll-indicator">
          <div className="scroll-mouse" />
          <span className="scroll-indicator-label">Scroll</span>
        </div>
      </section>

      {/* ════════════════════════════════════
          PAGE CONTENT
      ════════════════════════════════════ */}
      <div style={{ position: 'relative', zIndex: 10, background: 'var(--bg)' }}>

        {/* ── WHO WE ARE ── */}
        <section id="about" className="page-section" style={{ position: 'relative', overflow: 'hidden' }}>
          <span className="section-num">01</span>
          <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 72, alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <div>
              <span className="eyebrow-pill rv-left">Our Story</span>
              <h2 className="section-title rv-left d1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)' }}>
                Founded on Evidence.<br /><strong>Built on Results.</strong>
              </h2>
              <p className="section-body rv d2">
                The Aviator Training School was founded in November 2023, opposite Trivandrum International Airport, Kerala. One conviction drove it: <strong>every claim made to a prospective cadet must be backed by verifiable evidence.</strong>
              </p>
              <p className="section-body rv d3">
                Kerala had no shortage of aviation coaching institutes. Most competed on reputation. None disclosed their flying school upfront. We built TATS to be the opposite — transparent about everything, from fees to flying school to results.
              </p>
              <p className="section-body rv d4">
                Our cadets clear DGCA theory with <strong>strong, consistent results</strong>, then proceed to flight training at Gold Wings Aviation, Poland — where we maintain direct weekly oversight via Flight Logger.
              </p>
              <div className="rv d5" style={{ marginTop: 32 }}>
                <Link href="/about" className="btn-ghost">Our Full Story →</Link>
              </div>
            </div>

            <div className="rv-right d1">
              <div className="glass-panel" style={{ padding: '38px 30px' }}>
                <p style={{ fontFamily: 'var(--font-share-mono), monospace', fontSize: '.5rem', letterSpacing: '3px', color: 'rgba(212,175,55,.42)', textTransform: 'uppercase', marginBottom: 24 }}>
                  CORE IDEOLOGY
                </p>
                {[
                  { icon: '🔬', title: 'Evidence Over Reputation',    desc: 'Mark sheets verifiable at campus. No manufactured claims.' },
                  { icon: '📐', title: 'Depth Over Shortcuts',        desc: '3–4 hrs daily offline. In-person, every single day.' },
                  { icon: '🪟', title: 'Transparency Over Marketing', desc: 'Fees, timeline, flying school — all disclosed upfront.' },
                  { icon: '🎯', title: 'Mentorship, Not Instruction', desc: 'MD personally involved through the full cadet journey.' },
                ].map((item, i) => (
                  <div key={item.title} style={{ display: 'flex', gap: 16, padding: '18px 0', borderBottom: i < 3 ? '1px solid rgba(255,255,255,.05)' : 'none' }}>
                    <span style={{ fontSize: '1.15rem', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                    <div>
                      <div style={{ fontSize: '.82rem', fontWeight: 600, marginBottom: 4, color: 'rgba(255,255,255,.88)' }}>{item.title}</div>
                      <div style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.36)', lineHeight: 1.65 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ── PROGRAMMES ── */}
        <section id="programs" className="page-section" style={{ flexDirection: 'column', alignItems: 'flex-start', position: 'relative', overflow: 'hidden' }}>
          <span className="section-num">02</span>
          <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <span className="eyebrow-pill rv">Our Programmes</span>
            <h2 className="section-title rv d1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', marginBottom: 44 }}>
              Four Pathways.<br /><strong>One Standard.</strong>
            </h2>

            <div className="program-grid">
              {[
                {
                  id: 'tats-120',
                  badge: { text: 'Beginners', sky: false },
                  name: 'TATS 120',
                  tag: '23 months · From zero to CPL',
                  bullets: ['EASA CPL(A) + Multi-Engine IR', 'Frozen ATPL (14 subjects)', 'Gold Wings Aviation, Poland', 'India ground + FBS simulator prep'],
                  img: '/images/batch1-dispatch.jpg',
                },
                {
                  id: 'atpl-integrated',
                  badge: { text: '⭐ NEW — June 2026', sky: true },
                  name: 'TATS 120 ATPL Integrated',
                  tag: '23 months · Full ATPL theory in India',
                  bullets: ['Complete EASA ATPL theory in India', '745 hrs Evionica CBT platform', 'Arrive in Poland, fly immediately', 'June 2026 intake open'],
                  img: '/images/ft-grp.jpg',
                },
                {
                  id: 'fly-direct',
                  badge: { text: 'DGCA-Cleared', sky: false },
                  name: 'Fly Direct',
                  tag: '15–16 months · Skip the grind',
                  bullets: ['For DGCA ground-cleared cadets', 'Bridge prep + 20 hrs simulator', '200 hrs + 17 hrs Multi-Engine', 'DGCA to EASA conversion pathway'],
                  img: '/images/students-campus.jpg',
                },
                {
                  id: 'tapp-50',
                  badge: { text: 'CPL Holders', sky: false },
                  name: 'TAPP 50',
                  tag: 'Flight Instructor rating pathway',
                  bullets: ['240 total flight hours (2026)', 'FI Rating pathway', 'Airline interview preparation', 'Structured mentorship'],
                  img: '/images/tapp50-cadets.jpg',
                },
              ].map((prog, i) => (
                <div key={prog.id} className={`program-card-outer rv-3d d${i + 1}`}>
                  <div className={`program-card ${prog.id === 'atpl-integrated' ? 'featured' : ''}`}>
                    <div className="program-card-img">
                      <Image src={prog.img} alt={prog.name} fill style={{ objectFit: 'cover', opacity: .6 }} sizes="(max-width: 1040px) 100vw, 500px" />
                      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, transparent 40%, rgba(5,8,15,.92) 100%)' }} />
                      <span style={{
                        position: 'absolute', top: 12, left: 14,
                        fontSize: '.5rem', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase',
                        padding: '3px 9px', borderRadius: 100,
                        background: prog.badge.sky ? 'var(--sky)' : 'rgba(5,8,15,.85)',
                        color: prog.badge.sky ? '#05080f' : 'var(--gold)',
                        border: prog.badge.sky ? 'none' : '1px solid rgba(212,175,55,.28)',
                        backdropFilter: 'blur(8px)',
                      }}>
                        {prog.badge.text}
                      </span>
                    </div>
                    <div className="program-card-body">
                      <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 700, marginBottom: 4 }}>{prog.name}</h3>
                      <p style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.3)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: 16 }}>{prog.tag}</p>
                      <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 9, marginBottom: 22 }}>
                        {prog.bullets.map(b => (
                          <li key={b} style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.5)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                            <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 1, fontSize: '.68rem' }}>—</span>{b}
                          </li>
                        ))}
                      </ul>
                      <Link href={`/programs/${prog.id}`} className="btn-ghost" style={{ fontSize: '.62rem', padding: '8px 18px' }}>Learn More →</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rv" style={{ textAlign: 'center', marginTop: 38 }}>
              <Link href="/programs" className="btn-ghost">View All Programmes →</Link>
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ── WHY TATS ── */}
        <section id="why" className="page-section" style={{ flexDirection: 'column', alignItems: 'flex-start', position: 'relative', overflow: 'hidden' }}>
          <span className="section-num">03</span>
          <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <span className="eyebrow-pill rv">Why Choose TATS</span>
            <h2 className="section-title rv d1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', marginBottom: 44 }}>
              Eight Pillars.<br /><strong>Every Batch. Every Time.</strong>
            </h2>
            <div className="diff-grid">
              {[
                { icon: '🧪', title: 'Tailored Assessment',       desc: '~32% acceptance. Psychologist-designed 3-layer aptitude screening.' },
                { icon: '📚', title: '3–4 hrs Daily Offline',     desc: 'In-person, every day at our campus. Never outsourced, never online-only.' },
                { icon: '🛫', title: 'Cessna 172 FBS',            desc: '20 hrs procedure training before Poland. Cadets arrive genuinely ready.' },
                { icon: '🤝', title: 'Direct Poland Partnership', desc: 'Gold Wings Aviation. No intermediary. Weekly oversight via Flight Logger.' },
                { icon: '🧘', title: 'Monthly MBCT',              desc: 'Wing Cdr Dhanasree P V (Retd IAF). Unique in Kerala aviation training.' },
                { icon: '📱', title: 'Flight Logger Access',      desc: 'Families receive regular updates on cadet training progress from Poland.' },
                { icon: '🎓', title: 'Conversion Support',        desc: 'Airline Crew Orientation + post-training pathway guidance included.' },
                { icon: '🗣', title: 'Aviation English',          desc: 'Twice-monthly ICAO Level 4 sessions. Communication is a license requirement.' },
              ].map((item, i) => (
                <div key={item.title} className={`diff-card tilt-card rv d${(i % 4) + 1}`}>
                  <div className="diff-card-inner">
                    <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(212,175,55,.055)', border: '1px solid rgba(212,175,55,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', marginBottom: 14 }}>
                      {item.icon}
                    </div>
                    <h3 style={{ fontSize: '.86rem', fontWeight: 700, marginBottom: 8, color: 'rgba(255,255,255,.88)' }}>{item.title}</h3>
                    <p style={{ fontSize: '.74rem', color: 'rgba(255,255,255,.38)', lineHeight: 1.7 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rv" style={{ textAlign: 'center', marginTop: 38 }}>
              <Link href="/why-tats" className="btn-ghost">All Differentiators →</Link>
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ── RESULTS ── */}
        <section id="results" className="page-section" style={{ flexDirection: 'column', alignItems: 'flex-start', position: 'relative', overflow: 'hidden', padding: '72px 5.5%' }}>
          <span className="section-num">04</span>
          <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <span className="eyebrow-pill rv">Verified Results</span>
            <h2 className="section-title rv d1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', marginBottom: 32 }}>
              Strong Results.<br /><strong>Every Batch. On Record.</strong>
            </h2>
            <div className="cta-banner rv-3d d2">
              <span style={{ fontSize: '2.8rem', flexShrink: 0 }}>🏆</span>
              <div>
                <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.6rem', fontWeight: 700, color: 'var(--gold)', marginBottom: 8 }}>
                  Verified DGCA Results — Every Attempt
                </h3>
                <p style={{ fontSize: '.84rem', color: 'rgba(255,255,255,.44)', lineHeight: 1.82, maxWidth: 500 }}>
                  Since inception, our cadets have delivered strong results in every DGCA examination. Mark sheets available at our campus — no manufactured claims, no selective presentation.
                </p>
              </div>
            </div>
            <div className="rv d3" style={{ marginTop: 28 }}>
              <Link href="/results" className="btn-ghost" style={{ borderRadius: 6 }}>View Full Results →</Link>
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ── TESTIMONIALS ── */}
        <section className="page-section" style={{ flexDirection: 'column', alignItems: 'flex-start', position: 'relative', overflow: 'hidden' }}>
          <span className="section-num">05</span>
          <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <span className="eyebrow-pill rv">Cadet Voices</span>
            <h2 className="section-title rv d1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', marginBottom: 44 }}>
              Hear It From<br /><strong>Our Cadets.</strong>
            </h2>
            <div className="testimonial-grid">
              {TESTIMONIALS.map((t, i) => (
                <div key={t.name} className={`testimonial-card-outer tilt-card rv-3d d${i + 1}`}>
                <div className="testimonial-card">
                  <div style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '4.2rem', lineHeight: .7, color: 'rgba(212,175,55,.16)',
                    fontWeight: 700, userSelect: 'none',
                  }}>&ldquo;</div>
                  <p style={{ fontSize: '.84rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.84, flex: 1 }}>
                    {t.quote}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14, borderTop: '1px solid rgba(255,255,255,.05)', paddingTop: 18 }}>
                    <div style={{
                      width: 42, height: 42, borderRadius: '50%', flexShrink: 0,
                      background: 'linear-gradient(135deg, rgba(212,175,55,.28), rgba(212,175,55,.08))',
                      border: '1px solid rgba(212,175,55,.22)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '.95rem', fontWeight: 700, color: 'var(--gold)',
                      fontFamily: 'var(--font-cormorant), Georgia, serif',
                    }}>
                      {t.initial}
                    </div>
                    <div>
                      <div style={{ fontSize: '.84rem', fontWeight: 700, marginBottom: 3, color: 'rgba(255,255,255,.88)' }}>{t.name}</div>
                      <div style={{ fontSize: '.57rem', color: 'var(--gold)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>{t.role}</div>
                    </div>
                  </div>
                </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ── WATCH & LEARN ── */}
        <section style={{ padding: '88px 5.5%', position: 'relative', zIndex: 10, overflow: 'hidden' }}>
          <span className="section-num">06</span>
          <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <span className="eyebrow-pill rv">Watch &amp; Learn</span>
            <h2 className="section-title rv d1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.8rem)', marginBottom: 12 }}>
              Hear It From Us.<br /><strong>See For Yourself.</strong>
            </h2>
            <p className="section-body rv d2" style={{ maxWidth: 480, marginBottom: 44 }}>
              Programme walkthroughs, our podcast, and interviews — everything to watch before the webinar.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
              {VIDEOS.map((video, i) => (
                <div key={video.title} className={`rv-3d d${i + 1}`}>
                  <div className="video-card" style={{
                    background: 'rgba(5,8,15,.92)', border: '1px solid rgba(255,255,255,.055)',
                    borderRadius: 12, overflow: 'hidden',
                  }}>
                    {video.platform === 'youtube' && 'ytId' in video && video.ytId ? (
                      <YouTubeFacade ytId={video.ytId} title={video.title} thumb={'thumb' in video ? video.thumb as string : undefined} />
                    ) : video.platform === 'instagram' && 'igUrl' in video ? (
                      <div style={{
                        height: 210,
                        background: 'linear-gradient(135deg, rgba(131,58,180,.09), rgba(253,29,29,.06), rgba(252,176,69,.07))',
                        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                        gap: 14, borderBottom: '1px solid rgba(255,255,255,.04)',
                      }}>
                        <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ color: '#fff', fontSize: '1.4rem' }}>📷</span>
                        </div>
                        <a href={video.igUrl} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '.63rem', padding: '7px 18px' }}>
                          Watch on Instagram ↗
                        </a>
                      </div>
                    ) : (
                      <div style={{ height: 210, background: 'rgba(212,175,55,.02)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 10, borderBottom: '1px solid rgba(255,255,255,.04)' }}>
                        <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1.5px solid rgba(212,175,55,.28)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <span style={{ color: 'var(--gold)', fontSize: '1.2rem', marginLeft: 4 }}>▶</span>
                        </div>
                        <span style={{ fontSize: '.56rem', color: 'rgba(255,255,255,.18)', letterSpacing: '2.5px', textTransform: 'uppercase' }}>Coming Soon</span>
                      </div>
                    )}
                    <div style={{ padding: '16px 20px 20px' }}>
                      <h4 style={{ fontSize: '.86rem', fontWeight: 700, marginBottom: 6, color: 'rgba(255,255,255,.9)' }}>{video.title}</h4>
                      <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.36)', lineHeight: 1.65 }}>{video.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="rv" style={{ textAlign: 'center', marginTop: 34 }}>
              <Link href="/gallery" className="btn-ghost">Visit Gallery &amp; Media →</Link>
            </div>
          </div>
        </section>

        <div className="gold-divider" />

        {/* ── WEBINAR CTA ── */}
        <section id="contact" className="page-section" style={{ flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
          <div style={{ maxWidth: 600, margin: '0 auto', position: 'relative', zIndex: 2 }}>
            <span
              className="eyebrow-pill rv"
              data-scramble="EVERY FRIDAY · 7 PM IST · FREE WEBINAR"
              data-scramble-delay="200"
              style={{ display: 'block', textAlign: 'center' }}
            >
              EVERY FRIDAY · 7 PM IST · FREE WEBINAR
            </span>
            <h2 className="section-title rv d1" style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)', textAlign: 'center' }}>
              One Webinar.<br /><strong>Complete Clarity.</strong>
            </h2>
            <p className="section-body rv d2" style={{ textAlign: 'center', maxWidth: 480, margin: '0 auto 36px' }}>
              No follow-up calls. No pressure. Every question answered — fees, timeline, flying school, results — with verifiable evidence.
            </p>
            <div className="rv d3" style={{ display: 'flex', gap: 9, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 40 }}>
              {['Fees & Timeline', 'Flying School', 'DGCA Results', 'Selection Process', 'Career Pathway'].map(feat => (
                <span key={feat} style={{
                  fontSize: '.6rem', color: 'rgba(255,255,255,.48)',
                  border: '1px solid rgba(255,255,255,.1)', padding: '4px 12px', borderRadius: 40,
                  background: 'rgba(255,255,255,.022)',
                }}>
                  ✓ {feat}
                </span>
              ))}
            </div>
            <div className="rv d4" style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 32 }}>
              <a href="https://forms.gle/sNmtSNYHzvG5PXxu7" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Register Free
                <span className="btn-icon">↗</span>
              </a>
              <a
                href="https://wa.me/916282995979?text=Hi%2C%20I%27m%20interested%20in%20TATS%20programmes"
                target="_blank" rel="noopener noreferrer"
                className="btn-ghost"
                style={{ borderColor: 'rgba(37,211,102,.35)', color: 'rgba(37,211,102,.82)' }}
              >
                WhatsApp Us ↗
              </a>
              <a href="tel:+916282995979" className="btn-ghost">+91 62829 95979</a>
            </div>
            <p className="rv d5" style={{ fontSize: '.56rem', color: 'rgba(255,255,255,.16)', letterSpacing: '2px', textTransform: 'uppercase' }}>
              info@theaviatortraining.com · Mall of Travancore, Kerala 695024
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
