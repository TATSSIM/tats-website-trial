import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import InnerPageLayout from '@/components/InnerPageLayout';
import JsonLd from '@/components/JsonLd';
import YouTubeFacade from '@/components/YouTubeFacade';
import { withBasePath } from '@/lib/basePath';
import { breadcrumbSchema, SITE_URL } from '@/lib/seo';
import { ShieldCheck, Radio, Plane, Gauge, Award, Users, Snowflake, Wrench, Building2, Landmark } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Goldwings Flight Academy & National Aviation Academy Vršac | TATS Flight Partners',
  description: 'TATS is a direct flight-training partner — not an agent or commission-based intermediary — with Goldwings Flight Academy, Poland (primary) and the National Aviation Academy, Vršac, Serbia (Batch 1). No sub-agent, no intermediary, full oversight every week.',
  alternates: { canonical: '/flight-partners' },
};

const VIDEOS = {
  poland: { ytId: 'Ry0SDEny5lY', title: 'The ATPL Integrated Program — Why TATS120 Trains in Poland' },
  vrsac:  { ytId: 'Oj56YDQKrUs', title: 'How TATS Choose the Best Global Pathways for Our Pilot Cadets | Serbia Visit' },
};

function videoSchema(v: { ytId: string; title: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: v.title,
    description: v.title,
    thumbnailUrl: `https://i.ytimg.com/vi/${v.ytId}/hqdefault.jpg`,
    embedUrl: `https://www.youtube.com/embed/${v.ytId}`,
    contentUrl: `https://www.youtube.com/watch?v=${v.ytId}`,
    publisher: { '@type': 'EducationalOrganization', name: 'The Aviator Training School', url: SITE_URL },
  };
}

export default function FlightPartners() {
  return (
    <InnerPageLayout>
      <JsonLd
        data={[
          breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Flight Partners', path: '/flight-partners' }]),
          videoSchema(VIDEOS.poland),
          videoSchema(VIDEOS.vrsac),
        ]}
      />

      <div className="page-hero">
        <div>
          <span className="section-label">Where Our Cadets Fly</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            Flight Training<br />
            <strong>Partners.</strong>
          </h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.55)', marginTop: 8, maxWidth: 560, lineHeight: 1.8 }}>
            TATS is a direct flight-training partner — not an agent, broker, or commission-based intermediary — with both academies below. Every partnership comes with weekly oversight via Flight Logger, from the first flight hour to the last.
          </p>
        </div>
      </div>

      {/* ── Goldwings — Primary ── */}
      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 40 }}>
        <div className="md-grid-1" style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <span style={{ fontSize: '.52rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 4, background: 'rgba(212,175,55,.1)', color: 'var(--gold)', display: 'inline-block', marginBottom: 14 }}>
              Primary Partner
            </span>
            <h2 className="section-title rv d1">Goldwings Flight Academy.<br /><strong>Poland.</strong></h2>
            <p className="section-body rv d2">
              Goldwings Flight Academy is an <strong>EASA Approved Training Organisation (ATO)</strong> operating from Warsaw and Kraków. It is where TATS 120, TATS 120 ATPL Integrated, and Fly Direct cadets complete their flight training — the main pathway for most TATS cadets.
            </p>
            <p className="section-body rv d3">
              The partnership is direct: no intermediary, no sub-agent, no third party between TATS and the flying school. Capt. Dragan Ivanovich — TATS&apos;s Board Advisor, an EASA Certified Flight Instructor and Class Rating Examiner — provides ongoing training quality oversight, with weekly visibility into every cadet&apos;s progress via Flight Logger.
            </p>
            <div className="rv d4" style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/programs/tats-120" className="btn-ghost">TATS 120 →</Link>
              <Link href="/programs/fly-direct" className="btn-ghost">Fly Direct →</Link>
            </div>
          </div>
          <div className="rv d2">
            <div style={{ borderRadius: 11, overflow: 'hidden', border: '1px solid rgba(255,255,255,.045)', marginBottom: 14 }}>
              <div style={{ background: '#0a1a3c', height: 260, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Image
                  src={withBasePath('/images/goldwings-logo.jpg')}
                  alt="Goldwings Flight Academy official logo"
                  width={180}
                  height={180}
                  style={{ borderRadius: 14, width: 180, height: 180 }}
                />
              </div>
              <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 600, marginBottom: 3 }}>Goldwings Flight Academy</p>
                <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.55)' }}>EASA ATO · Warsaw &amp; Kraków, Poland</p>
              </div>
            </div>
            <div style={{ borderRadius: 11, overflow: 'hidden', border: '1px solid rgba(255,255,255,.045)' }}>
              <YouTubeFacade ytId={VIDEOS.poland.ytId} title={VIDEOS.poland.title} />
              <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 600 }}>{VIDEOS.poland.title}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stat strip */}
      <div style={{ padding: '0 5.5% 56px', position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: 1040, margin: '0 auto' }}>
          <div className="stat-strip rv">
            {[
              { icon: ShieldCheck, label: 'EASA Approved Training Organisation' },
              { icon: Plane,       label: 'Warsaw & Kraków Bases' },
              { icon: Radio,       label: 'Weekly Flight Logger Oversight' },
            ].map(s => (
              <div key={s.label} className="stat-item" style={{ textAlign: 'center' }}>
                <s.icon size={22} strokeWidth={1.5} color="var(--gold)" style={{ marginBottom: 8 }} />
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fleet & Facilities */}
      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 0, flexDirection: 'column' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="eyebrow-pill rv">Fleet &amp; Facilities</span>
          <h2 className="section-title rv d1" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 300, margin: '10px 0 28px' }}>
            A 17-aircraft fleet. <strong>Real airline outcomes.</strong>
          </h2>
          <div className="diff-grid">
            {[
              {
                Icon: Plane, title: '17 Training Aircraft',
                desc: 'Cessna 152 (×3) and Cessna 172 (×4) for single-engine VFR/IFR, AT-3 (×4) and Diamond DA-20, Diamond DA-42, Piper Seneca III, Piper Arrow V for multi-engine and advanced training, plus a Pilatus PC-12 NG for turboprop type rating.',
              },
              {
                Icon: Gauge, title: 'Three Simulators',
                desc: 'A Diamond DA-42 FNPT II, a full-motion Cessna 182 FNPT II, and an Airbus A320 FNPT II for Multi-Crew Cooperation — the same JOC simulator training built into the TATS 120 syllabus.',
              },
              {
                Icon: Snowflake, title: 'Cold-Weather Flying',
                desc: 'Poland’s winters mean TATS cadets get real FIKI (Flight Into Known Icing) exposure as part of training — conditions a Kerala-based academy simply cannot offer.',
              },
              {
                Icon: Wrench, title: 'In-House Maintenance',
                desc: 'Goldwings holds its own EASA Part-145 maintenance and CAMO (Continuing Airworthiness Management) approvals — the fleet is maintained in-house, not outsourced.',
              },
              {
                Icon: Award, title: 'AOC Holder',
                desc: 'Goldwings also holds an Air Operator Certificate (AOC), placing it a tier above training-only schools in regulatory standing and operational maturity.',
              },
              {
                Icon: Users, title: '1,000+ Graduates',
                desc: 'Goldwings alumni now fly for Ryanair, LOT Polish Airlines, Wizz Air, Enter Air, and Turkish Airlines — the career outcome TATS cadets are training toward.',
              },
            ].map((item, i) => (
              <div key={item.title} className={`diff-card tilt-card rv d${(i % 4) + 1}`}>
                <div className="diff-card-inner">
                  <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(212,175,55,.055)', border: '1px solid rgba(212,175,55,.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--gold)', marginBottom: 14 }}>
                    <item.Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: '.86rem', fontWeight: 700, marginBottom: 8, color: 'rgba(255,255,255,.88)' }}>{item.title}</h3>
                  <p style={{ fontSize: '.74rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '.64rem', color: 'rgba(255,255,255,.3)', marginTop: 16 }}>
            Fleet, simulator, and certification details sourced from Goldwings Flight Academy&apos;s official site, <a href="https://www.goldwings.pl/en/home" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.45)' }}>goldwings.pl</a>.
          </p>
        </div>
      </section>

      <div className="gold-divider" />

      {/* ── Vršac — Secondary ── */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div className="md-grid-1" style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div className="rv d1" style={{ order: 2 }}>
            <div style={{ borderRadius: 11, overflow: 'hidden', border: '1px solid rgba(255,255,255,.045)', marginBottom: 14 }}>
              <Image
                src={withBasePath('/images/serbia-grp.jpg')}
                alt="TATS Batch 1 cadets at the National Aviation Academy, Vršac, Serbia"
                width={700}
                height={360}
                style={{ width: '100%', height: 300, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 600, marginBottom: 3 }}>National Aviation Academy</p>
                <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.55)' }}>Vršac, Serbia</p>
              </div>
            </div>
            <div style={{ borderRadius: 11, overflow: 'hidden', border: '1px solid rgba(255,255,255,.045)' }}>
              <YouTubeFacade ytId={VIDEOS.vrsac.ytId} title={VIDEOS.vrsac.title} />
              <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 600 }}>{VIDEOS.vrsac.title}</p>
              </div>
            </div>
          </div>
          <div style={{ order: 1 }}>
            <span style={{ fontSize: '.52rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', padding: '3px 10px', borderRadius: 4, background: 'rgba(56,189,248,.1)', color: 'var(--sky)', display: 'inline-block', marginBottom: 14 }}>
              Secondary Partner · Batch 1
            </span>
            <h2 className="section-title rv d2">National Aviation Academy.<br /><strong>Vršac, Serbia.</strong></h2>
            <p className="section-body rv d3">
              Vršac is where TATS&apos;s very first batch took to the sky. <strong>Batch 1 is currently flying at the National Aviation Academy, Vršac, Serbia</strong> — and every Batch 1 cadet completed their Solo in under 15 hours.
            </p>
            <p className="section-body rv d4">
              As with Goldwings, TATS maintains direct weekly visibility into Batch 1&apos;s training progress through Flight Logger — the same evidence-first oversight standard applied across every flight-training partner.
            </p>
            <div className="rv d5" style={{ marginTop: 28, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Link href="/journey" className="btn-ghost">Batch 1 Status →</Link>
              <Link href="/gallery" className="btn-ghost">See The Gallery →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Fleet & Facilities — Vršac */}
      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 0, flexDirection: 'column' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="eyebrow-pill rv">Fleet &amp; Facilities</span>
          <h2 className="section-title rv d1" style={{ fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 300, margin: '10px 0 28px' }}>
            A government-run academy. <strong>Decades of history.</strong>
          </h2>
          <div className="diff-grid">
            {[
              {
                Icon: Plane, title: 'Cessna 172 Fleet + Piper Seneca',
                desc: 'A fleet of classic and G1000 glass-cockpit Cessna 172s for single-engine VFR/IFR training, plus the Piper PA-34 Seneca for multi-engine class training.',
              },
              {
                Icon: Gauge, title: 'ALSIM FNPT II Simulator',
                desc: 'An ALSIM FNPT II flight training device for instrument and procedural training before cadets log real hours in the air.',
              },
              {
                Icon: Landmark, title: 'Government-Owned Academy',
                desc: 'Operated by the SMATSA Aviation Academy (formerly Jat Airways Flight Academy) and owned by the Government of Serbia — a national training institution, not a private operator.',
              },
              {
                Icon: Building2, title: 'Five Hangars, Own Airfield',
                desc: 'Vršac Airfield (ICAO: LYVR) has five hangars, a dedicated classroom building, and a control tower — with three runways, including a 1,000m asphalt strip.',
              },
              {
                Icon: Wrench, title: 'EASA Part-145 Certified',
                desc: 'The Academy’s Maintenance Department has held EASA Part-145 light-aircraft maintenance certification since 2005.',
              },
              {
                Icon: Snowflake, title: 'Batch 1’s Proving Ground',
                desc: 'Where TATS sent its very first cadets — every Batch 1 pilot soloed in under 15 hours, the result TATS now measures every batch against.',
              },
            ].map((item, i) => (
              <div key={item.title} className={`diff-card tilt-card rv d${(i % 4) + 1}`}>
                <div className="diff-card-inner">
                  <div style={{ width: 38, height: 38, borderRadius: 9, background: 'rgba(56,189,248,.07)', border: '1px solid rgba(56,189,248,.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--sky)', marginBottom: 14 }}>
                    <item.Icon size={18} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: '.86rem', fontWeight: 700, marginBottom: 8, color: 'rgba(255,255,255,.88)' }}>{item.title}</h3>
                  <p style={{ fontSize: '.74rem', color: 'rgba(255,255,255,.55)', lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: '.64rem', color: 'rgba(255,255,255,.3)', marginTop: 16 }}>
            Fleet and facility details sourced from the Academy&apos;s official site, <a href="https://www.vakademija.edu.rs" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,.45)' }}>vakademija.edu.rs</a>, and public airfield records.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>🤝</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                Direct Partnerships. No Intermediary.
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7, maxWidth: 480 }}>
                Attend our Friday webinar to see exactly how TATS oversees training quality at both academies, every single week.
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
