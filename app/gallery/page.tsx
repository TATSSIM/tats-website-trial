import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import InnerPageLayout from '@/components/InnerPageLayout';
import { withBasePath } from '@/lib/basePath';

export const metadata: Metadata = {
  title: 'Gallery | Life at TATS | The Aviator Training School',
  description: 'Real cadets. Real classrooms. Real results. See life at The Aviator Training School — batch dispatch ceremonies, classroom sessions, and the journey to Poland.',
};

const VIDEOS = [
  {
    title: 'How to Become a Pilot',
    desc: 'Complete overview of the pathway — from ground zero to commercial airline pilot.',
    platform: 'youtube' as const,
    ytId: 'oYdIgpba-44',
  },
  {
    title: 'TATS 120 Programme',
    desc: 'Deep dive into the EASA CPL pathway — Poland, fees, timeline explained.',
    platform: 'instagram' as const,
    igUrl: 'https://www.instagram.com/reel/DSUE8OPATzD/',
  },
  {
    title: 'How TATS Chooses the Best Global Pathways',
    desc: 'How we evaluate and select flying schools — quality, safety, and cadet outcomes first.',
    platform: 'youtube' as const,
    ytId: 'Oj56YDQKrUs',
  },
  {
    title: 'TAPP 50 Explained',
    desc: 'For existing CPL holders. FI Rating, 240 hours, and airline prep pathway.',
    platform: 'coming-soon' as const,
  },
];

export default function Gallery() {
  return (
    <InnerPageLayout>

      {/* ── HERO ── */}
      <div className="page-hero">
        <div>
          <span className="section-label">Life at TATS</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            Our People.<br />
            <strong>Our Journey.</strong>
          </h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.4)', marginTop: 8, maxWidth: 420 }}>
            From the classroom in Trivandrum to the cockpit in Poland — every step documented.
          </p>
        </div>
      </div>

      {/* ── BATCH DISPATCH CEREMONIES ── */}
      <section className="page-section" style={{ paddingTop: 48 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Batch Dispatch Ceremonies</span>
          <h2 className="section-title rv d1">They Came. They Trained.<br /><strong>They Flew.</strong></h2>
          <p className="section-body rv d2" style={{ maxWidth: 480 }}>
            Every TATS batch that completes ground training and is cleared for Poland is honoured at a formal dispatch ceremony. These are the moments the journey becomes real.
          </p>

          {/* Hero batch photo */}
          <div className="rv d2" style={{ borderRadius: 12, overflow: 'hidden', marginTop: 32, marginBottom: 8, border: '1px solid rgba(255,255,255,.045)' }}>
            <Image
              src={withBasePath("/images/batch1-dispatch.jpg")}
              alt="Epaulette Ceremony of Winglet — TATS Trivandrum"
              width={1040}
              height={520}
              style={{ width: '100%', height: 480, objectFit: 'cover', objectPosition: 'center 20%', display: 'block' }}
            />
          </div>
          <p style={{ fontSize: '.62rem', color: 'rgba(255,255,255,.22)', letterSpacing: '2.5px', textTransform: 'uppercase', marginBottom: 20 }}>
            Epaulette Ceremony of Winglet
          </p>

          {/* 3-grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
            {[
              { src: '/images/batch2-dispatch.jpg', caption: 'Batch with Capt. Sujith Subhash' },
              { src: '/images/batch3-dispatch.jpg', caption: 'Aileron, Rudder Epaulette Ceremony' },
              { src: '/images/batch-rooftop.jpg',   caption: 'Capt. Rajat Ahuja' },
            ].map((photo, i) => (
              <div key={i} className={`rv d${i + 1}`} style={{ borderRadius: 9, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)' }}>
                <Image
                  src={photo.src}
                  alt={photo.caption}
                  width={340}
                  height={260}
                  style={{ width: '100%', height: 220, objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '8px 12px', background: 'rgba(10,14,20,.85)' }}>
                  <p style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.3)', letterSpacing: '1px' }}>{photo.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── CLASSROOM & CAMPUS ── */}
      <section className="page-section">
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Classroom &amp; Campus</span>
          <h2 className="section-title rv d1">3–4 Hours Daily.<br /><strong>In-Person. Every Day.</strong></h2>
          <p className="section-body rv d2" style={{ maxWidth: 480 }}>
            Our campus at Mall of Travancore is directly opposite Trivandrum International Airport. Cadets see real aircraft movements while studying — a constant reminder of what they are training for.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 32 }}>
            <div className="rv d2" style={{ borderRadius: 9, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)' }}>
              <Image
                src={withBasePath("/images/classroom-session.jpg")}
                alt="Monthly MBCT session with Wing Cdr Dhanasree P V"
                width={500}
                height={360}
                style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 600, marginBottom: 3 }}>Monthly MBCT Session</p>
                <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.32)' }}>Wing Cdr Dhanasree P V (Retd IAF) · High Performance Psychologist</p>
              </div>
            </div>
            <div className="rv d3" style={{ borderRadius: 9, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)' }}>
              <Image
                src={withBasePath("/images/students-campus.jpg")}
                alt="TATS cadets at Mall of Travancore campus"
                width={500}
                height={360}
                style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 600, marginBottom: 3 }}>TATS Campus — Trivandrum</p>
                <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.32)' }}>3rd Floor, Mall of Travancore · Opposite TRV International Airport</p>
              </div>
            </div>
          </div>

          {/* Staff team */}
          <div className="rv" style={{ marginTop: 14, borderRadius: 9, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)' }}>
            <Image
              src={withBasePath("/images/staff-team.jpg")}
              alt="TATS faculty and staff team"
              width={1040}
              height={400}
              style={{ width: '100%', height: 340, objectFit: 'cover', objectPosition: 'center 30%', display: 'block' }}
            />
            <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
              <p style={{ fontSize: '.72rem', fontWeight: 600, marginBottom: 3 }}>The TATS Team</p>
              <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.32)' }}>Faculty, counsellors, and support staff — the people behind every cadet journey</p>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── WATCH & LEARN ── */}
      <section className="page-section">
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Watch &amp; Learn</span>
          <h2 className="section-title rv d1" style={{ marginBottom: 8 }}>
            Hear It From Us.<br /><strong>See For Yourself.</strong>
          </h2>
          <p className="section-body rv d2" style={{ maxWidth: 480, marginBottom: 36 }}>
            Programme explainers, podcast interviews, and campus tours — all in one place.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {VIDEOS.map((video, i) => (
              <div key={video.title} className={`rv d${i + 1}`}>
                <div style={{
                  background: 'rgba(10,14,20,.85)',
                  border: '1px solid rgba(255,255,255,.05)',
                  borderRadius: 11, overflow: 'hidden',
                }}>
                  {video.platform === 'youtube' && 'ytId' in video && video.ytId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.ytId}`}
                      style={{ width: '100%', height: 210, border: 'none', display: 'block' }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title={video.title}
                    />
                  ) : video.platform === 'instagram' && 'igUrl' in video ? (
                    <div style={{
                      height: 210,
                      background: 'linear-gradient(135deg, rgba(131,58,180,.08), rgba(253,29,29,.06), rgba(252,176,69,.06))',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      gap: 14, borderBottom: '1px solid rgba(255,255,255,.04)',
                    }}>
                      <div style={{
                        width: 52, height: 52, borderRadius: '50%',
                        background: 'linear-gradient(135deg, #833ab4, #fd1d1d, #fcb045)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ color: '#fff', fontSize: '1.3rem' }}>📷</span>
                      </div>
                      <a
                        href={video.igUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-ghost"
                        style={{ fontSize: '.62rem', padding: '7px 16px' }}
                      >
                        Watch on Instagram ↗
                      </a>
                    </div>
                  ) : (
                    <div style={{
                      height: 210, background: 'rgba(212,175,55,.03)',
                      display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                      gap: 10, borderBottom: '1px solid rgba(255,255,255,.04)',
                    }}>
                      <div style={{
                        width: 52, height: 52, borderRadius: '50%',
                        border: '1.5px solid rgba(212,175,55,.3)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <span style={{ color: 'var(--gold)', fontSize: '1.1rem', marginLeft: 4 }}>▶</span>
                      </div>
                      <span style={{ fontSize: '.6rem', color: 'rgba(255,255,255,.2)', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        Video Coming Soon
                      </span>
                    </div>
                  )}
                  <div style={{ padding: '14px 18px 18px' }}>
                    <h4 style={{ fontSize: '.82rem', fontWeight: 600, marginBottom: 5 }}>{video.title}</h4>
                    <p style={{ fontSize: '.7rem', color: 'rgba(255,255,255,.38)', lineHeight: 1.6 }}>{video.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── FLIGHT TRAINING PHASE ── */}
      <section className="page-section">
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Flight Training Phase</span>
          <h2 className="section-title rv d1">National Aviation Academy,<br /><strong>Serbia.</strong></h2>
          <p className="section-body rv d2" style={{ maxWidth: 500 }}>
            Flight training at the National Aviation Academy, Serbia. Our cadets in active training, building hours towards their commercial pilot licence.
          </p>

          {/* Flight training photos */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 36 }}>
            <div className="rv d1" style={{ borderRadius: 9, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)' }}>
              <Image
                src={withBasePath("/images/ft-grp.jpg")}
                alt="TATS cadets — Flight Training Serbia"
                width={500}
                height={360}
                style={{ width: '100%', height: 320, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 600, marginBottom: 3 }}>Flight Training Serbia</p>
                <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.32)' }}>National Aviation Academy - Serbia</p>
              </div>
            </div>
            <div className="rv d2" style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 14 }}>
              <div style={{ borderRadius: 9, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)' }}>
                <Image
                  src={withBasePath("/images/serbia-grp.jpg")}
                  alt="TATS cadet group — international training"
                  width={500}
                  height={200}
                  style={{ width: '100%', height: 152, objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '8px 12px 12px', background: 'rgba(10,14,20,.9)' }}>
                  <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.32)' }}>International training cohort</p>
                </div>
              </div>
              <div style={{ borderRadius: 9, overflow: 'hidden', border: '1px solid rgba(255,255,255,.04)' }}>
                <Image
                  src={withBasePath("/images/serbia.jpg")}
                  alt="TATS cadets — flight training phase"
                  width={500}
                  height={200}
                  style={{ width: '100%', height: 152, objectFit: 'cover', display: 'block' }}
                />
                <div style={{ padding: '8px 12px 12px', background: 'rgba(10,14,20,.9)' }}>
                  <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.32)' }}>Ready for the skies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rv" style={{ marginTop: 36 }}>
            <div style={{
              background: 'rgba(56,189,248,.04)',
              border: '1px solid rgba(56,189,248,.12)',
              borderRadius: 9, padding: '16px 20px',
              display: 'flex', alignItems: 'center', gap: 12,
              fontSize: '.76rem', color: 'rgba(56,189,248,.7)',
            }}>
              <span style={{ fontSize: '1.1rem', flexShrink: 0 }}>ℹ️</span>
              <span>Batch 1 cadets are currently flying in Poland. Live flight training updates are shared via <strong style={{ color: 'var(--sky)' }}>Flight Logger</strong> — accessible to enrolled families.</span>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── CTA ── */}
      <section className="page-section" style={{ paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>📸</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                Want to See More?
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7, maxWidth: 480 }}>
                Attend our Friday webinar and we will walk you through the full TATS journey — with photos, results, and certificates.
              </p>
            </div>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              <a href="https://forms.gle/sNmtSNYHzvG5PXxu7" target="_blank" rel="noopener noreferrer" className="btn-primary">
                Book Webinar ↗
              </a>
              <Link href="/results" className="btn-ghost">View Results →</Link>
            </div>
          </div>
        </div>
      </section>

    </InnerPageLayout>
  );
}
