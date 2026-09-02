'use client';

import { useState } from 'react';

const POSTS = [
  {
    slug: 'https://theaviatortraining.com/2025/12/10/tats-bulletin-vol-4/',
    category: 'TATS Bulletin',
    date: 'December 2025',
    title: 'TATS Bulletin Vol. 4 — In Honour of Wing Cdr Namash Sayal',
    excerpt: 'A tribute issue for Wing Commander Namash Sayal, distinguished LCA Tejas test pilot, who made the ultimate sacrifice at the Dubai Airshow 2025 in service of advancing India’s aviation programme.',
    readTime: 'Magazine Issue',
  },
  {
    slug: 'https://theaviatortraining.com/2025/11/05/tats-bulletin-vol-3/',
    category: 'TATS Bulletin',
    date: 'November 2025',
    title: 'TATS Bulletin Vol. 3 — Winglet Batch Epaulette Ceremony',
    excerpt: 'A letter from the expert marking the winglet batch epaulette ceremony — reflecting on the rigour of training and the cadets’ commitment to mastering the art and science of flight.',
    readTime: 'Magazine Issue',
  },
  {
    slug: 'https://theaviatortraining.com/2025/10/23/tats-bulletin/',
    category: 'TATS Bulletin',
    date: 'October 2025',
    title: 'TATS Bulletin Vol. 2 — Letter From the Director',
    excerpt: 'A reflection on the character, courage, and conviction behind The Aviator Training School, at a defining moment in the institution’s journey.',
    readTime: 'Magazine Issue',
  },
  {
    slug: 'https://theaviatortraining.com/2025/09/12/tats-bulletin-first-edition/',
    category: 'TATS Bulletin',
    date: 'September 2025',
    title: 'TATS Bulletin — First Edition: The Universal Blueprint',
    excerpt: 'How ground school creates safe pilots. TATS’s curriculum spans seven critical disciplines forming a universal blueprint for aviation, applicable worldwide.',
    readTime: 'Magazine Issue',
  },
];

const CATEGORIES = ['All', 'TATS Bulletin'];

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
                <a href={featured.slug} target="_blank" rel="noopener noreferrer" className="btn-ghost" style={{ fontSize: '.63rem', padding: '6px 16px' }}>
                  Read Article ↗
                </a>
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
                    <span style={{ fontSize: '.58rem', color: 'rgba(255,255,255,.55)', letterSpacing: '1.5px', textTransform: 'uppercase' }}>
                      {post.date} · {post.readTime}
                    </span>
                    <a href={post.slug} target="_blank" rel="noopener noreferrer" style={{ fontSize: '.64rem', color: 'var(--gold)', fontWeight: 600, textDecoration: 'none', letterSpacing: '.5px' }}>
                      Read ↗
                    </a>
                  </div>
                </article>
              ))}
            </div>
          ) : filtered.length === 0 && (
            <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.55)', textAlign: 'center', padding: '40px 0' }}>
              No articles in this category yet — check back soon.
            </p>
          )}

          <div className="rv" style={{ marginTop: 36, textAlign: 'center' }}>
            <p style={{ fontSize: '.72rem', color: 'rgba(255,255,255,.55)', letterSpacing: '1.5px' }}>
              New TATS Bulletin issues published monthly — check back for the latest edition.
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
