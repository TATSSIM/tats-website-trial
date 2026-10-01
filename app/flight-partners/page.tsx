import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import InnerPageLayout from '@/components/InnerPageLayout';
import JsonLd from '@/components/JsonLd';
import { withBasePath } from '@/lib/basePath';
import { breadcrumbSchema } from '@/lib/seo';
import { ShieldCheck, Radio, Plane } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Flight Training Partners | The Aviator Training School',
  description: 'TATS cadets fly at Goldwings Flight Academy, Poland — our primary EASA training partner — and the National Aviation Academy, Vršac, Serbia, where Batch 1 trained. Direct partnerships, no intermediary.',
  alternates: { canonical: '/flight-partners' },
};

export default function FlightPartners() {
  return (
    <InnerPageLayout>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Flight Partners', path: '/flight-partners' }])} />

      <div className="page-hero">
        <div>
          <span className="section-label">Where Our Cadets Fly</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            Flight Training<br />
            <strong>Partners.</strong>
          </h1>
          <p style={{ fontSize: '.82rem', color: 'rgba(255,255,255,.55)', marginTop: 8, maxWidth: 560, lineHeight: 1.8 }}>
            Every TATS flight-training partnership is direct — no intermediary, no sub-agent — with weekly oversight via Flight Logger from the first flight hour to the last.
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
            <div style={{ borderRadius: 11, overflow: 'hidden', border: '1px solid rgba(255,255,255,.045)' }}>
              <Image
                src={withBasePath('/images/ft-grp.jpg')}
                alt="TATS cadets on the flight line at Goldwings Flight Academy, Poland"
                width={700}
                height={360}
                style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 600, marginBottom: 3 }}>Goldwings Flight Academy</p>
                <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.55)' }}>EASA ATO · Warsaw &amp; Kraków, Poland</p>
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

      <div className="gold-divider" />

      {/* ── Vršac — Secondary ── */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div className="md-grid-1" style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div className="rv d1" style={{ order: 2 }}>
            <div style={{ borderRadius: 11, overflow: 'hidden', border: '1px solid rgba(255,255,255,.045)' }}>
              <Image
                src={withBasePath('/images/serbia-grp.jpg')}
                alt="TATS Batch 1 cadets at the National Aviation Academy, Vršac, Serbia"
                width={700}
                height={360}
                style={{ width: '100%', height: 340, objectFit: 'cover', display: 'block' }}
              />
              <div style={{ padding: '10px 16px 14px', background: 'rgba(10,14,20,.9)' }}>
                <p style={{ fontSize: '.72rem', fontWeight: 600, marginBottom: 3 }}>National Aviation Academy</p>
                <p style={{ fontSize: '.63rem', color: 'rgba(255,255,255,.55)' }}>Vršac, Serbia</p>
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
