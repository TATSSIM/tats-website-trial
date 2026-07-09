'use client';

import { useState } from 'react';
import Link from 'next/link';

const POSTS = [
  {
    slug: '#',
    category: 'DGCA Exams',
    date: 'May 2025',
    title: 'How to Approach the DGCA Air Regulation Paper',
    excerpt: 'Air Regulation is consistently the highest-failure subject in DGCA theory. Here is how TATS cadets prepare — and consistently clear it in the first attempt.',
    readTime: '6 min read',
  },
  {
    slug: '#',
    category: 'Flight Training',
    date: 'April 2025',
    title: 'Why We Chose Poland for Flight Training — And What That Means for Your Licence',
    excerpt: 'EASA CPL vs DGCA CPL. The difference in global mobility, airline acceptance, and career options — explained honestly.',
    readTime: '8 min read',
  },
  {
    slug: '#',
    category: 'Career Guidance',
    date: 'March 2025',
    title: 'The Real Cost of Becoming a Commercial Pilot in India (2025)',
    excerpt: 'From DGCA ground school to CPL issuance. A breakdown of every cost — with no hidden numbers.',
    readTime: '10 min read',
  },
  {
    slug: '#',
    category: 'Mental Performance',
    date: 'February 2025',
    title: 'Why MBCT Is Part of Our Curriculum — And Why It Should Be Standard',
    excerpt: "Mindfulness-Based Cognitive Therapy isn't a wellness trend. For high-stakes careers like aviation, it is a performance tool. Wing Cdr Dhanasree P V explains.",
    readTime: '5 min read',
  },
  {
    slug: '#',
    category: 'Programme Deep-Dives',
    date: 'January 2025',
    title: 'TATS 120 vs TATS 120 ATPL Integrated — Which Is Right for You?',
    excerpt: 'Both lead to an EASA CPL with frozen ATPL. The difference is in how and where you complete your ATPL theory — and what that means for your preparation.',
    readTime: '7 min read',
  },
  {
    slug: '#',
    category: 'Transparency',
    date: 'December 2024',
    title: 'What Does "Direct Partnership" Actually Mean in Aviation Training?',
    excerpt: 'Sub-agents, commissions, and third-party school placements are common in the industry. Here is why TATS operates differently — and what you should ask any school before enrolling.',
    readTime: '6 min read',
  },
];

const CATEGORIES = ['All', 'DGCA Exams', 'Flight Training', 'Career Guidance', 'Mental Performance', 'Programme Deep-Dives', 'Transparency'];

export default function BlogContent() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filtered = activeCategory === 'All'
    ? POSTS
    : POSTS.filter(p => p.category === activeCategory);

  const featured  = filtered[0];
  const remaining = filtered.slice(1);

  return (
    <>
      {/* ── HERO ── */}
      <div className="page-hero">
        <div>
          <span className="section-label">Insights &amp; Guidance</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            The TATS Blog.<br />
            <strong className="gold-shimmer">Evidence. Explained.</strong>
          </h1>
          <p style={{ fontSize: '.85rem', color: 'rgba(255,255,255,.42)', marginTop: 8, maxWidth: 440 }}>
            Honest answers to the questions every prospective cadet should be asking — but often doesn&apos;t know to ask.
          </p>
        </div>
      </div>

      {/* ── CATEGORY FILTER ── */}
      <section className="page-section" style={{ paddingTop: 32, paddingBottom: 0 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="rv" style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {CATEGORIES.map(cat => {
              const isActive = cat === activeCategory;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: isActive ? 'rgba(212,175,55,.1)' : 'transparent',
                    border: `1px solid ${isActive ? 'rgba(212,175,55,.35)' : 'rgba(255,255,255,.08)'}`,
                    color: isActive ? 'var(--gold)' : 'rgba(255,255,255,.42)',
                    fontSize: '.63rem', fontWeight: 600, letterSpacing: '1.5px',
                    textTransform: 'uppercase', padding: '6px 14px', borderRadius: 4,
                    cursor: 'pointer', transition: 'all .22s',
                  }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FEATURED POST ── */}
      {featured && (
        <section className="page-section" style={{ paddingTop: 36, paddingBottom: 0 }}>
          <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
            <div className="rv" style={{
              background: 'linear-gradient(135deg, rgba(212,175,55,.06), rgba(212,175,55,.02))',
              border: '1px solid rgba(212,175,55,.14)',
              borderRadius: 13, padding: '36px 40px',
              transition: 'border-color .3s',
            }}>
              <span style={{
                fontSize: '.52rem', fontWeight: 700, letterSpacing: '2.5px', textTransform: 'uppercase',
                color: 'var(--sky)', background: 'rgba(56,189,248,.08)',
                border: '1px solid rgba(56,189,248,.22)', padding: '3px 10px', borderRadius: 3,
                display: 'inline-block', marginBottom: 18,
              }}>
                Featured
              </span>
              <h2 style={{
                fontFamily: 'var(--font-cormorant), Georgia, serif',
                fontSize: 'clamp(1.4rem, 3vw, 2.1rem)', fontWeight: 300, lineHeight: 1.2, marginBottom: 12,
              }}>
                {featured.title}
              </h2>
              <p style={{ fontSize: '.83rem', color: 'rgba(255,255,255,.46)', lineHeight: 1.78, maxWidth: 620, marginBottom: 22 }}>
                {featured.excerpt}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
                <span style={{ fontSize: '.6rem', color: 'rgba(212,175,55,.5)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  {featured.category} · {featured.date} · {featured.readTime}
                </span>
                <Link href={featured.slug} className="btn-ghost" style={{ fontSize: '.63rem', padding: '6px 16px' }}>
                  Read Article →
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── POST GRID ── */}
      <section className="page-section" style={{ paddingTop: 36 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          {remaining.length > 0 ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
              {remaining.map((post, i) => (
                <article
                  key={post.slug + i}
                  className={`rv d${(i % 3) + 1}`}
                  style={{
                    background: 'rgba(10,14,20,.82)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255,255,255,.04)',
                    borderRadius: 11, padding: '24px 22px',
                    transition: 'border-color .35s, transform .35s, box-shadow .35s',
                    display: 'flex', flexDirection: 'column',
                  }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,175,55,.12)';
                    (e.currentTarget as HTMLElement).style.transform = 'translateY(-4px)';
                    (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 32px rgba(0,0,0,.35)';
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,.04)';
                    (e.currentTarget as HTMLElement).style.transform = '';
                    (e.currentTarget as HTMLElement).style.boxShadow = '';
                  }}
                >
                  <div style={{ marginBottom: 14 }}>
                    <span style={{
                      fontSize: '.52rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                      color: 'var(--gold)', background: 'rgba(212,175,55,.06)',
                      padding: '2px 8px', borderRadius: 3, display: 'inline-block',
                    }}>
                      {post.category}
                    </span>
                  </div>
                  <h3 style={{
                    fontFamily: 'var(--font-cormorant), Georgia, serif',
                    fontSize: '1.12rem', fontWeight: 600, lineHeight: 1.3,
                    marginBottom: 10, flex: 1,
                  }}>
                    {post.title}
                  </h3>
                  <p style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.4)', lineHeight: 1.72, marginBottom: 16 }}>
                    {post.excerpt}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: 'auto' }}>
                    <span style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.22)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      {post.date} · {post.readTime}
                    </span>
                    <Link href={post.slug} style={{ fontSize: '.64rem', color: 'var(--gold)', fontWeight: 600, textDecoration: 'none', letterSpacing: '.5px' }}>
                      Read →
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          ) : filtered.length === 0 && (
            <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.3)', textAlign: 'center', padding: '40px 0' }}>
              No articles in this category yet — check back soon.
            </p>
          )}

          <div className="rv" style={{ marginTop: 36, textAlign: 'center' }}>
            <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.22)', letterSpacing: '1.5px' }}>
              More articles coming soon. Topics include medical fitness, type ratings, and airline hiring in India.
            </p>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── CTA ── */}
      <section className="page-section" style={{ paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>✍️</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                Have a Question We Haven&apos;t Covered?
              </h3>
              <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.44)', lineHeight: 1.7, maxWidth: 480 }}>
                Every Friday 7 PM IST — attend our free webinar and ask anything, live.
              </p>
            </div>
            <a href="https://forms.gle/sNmtSNYHzvG5PXxu7" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Free Webinar ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
