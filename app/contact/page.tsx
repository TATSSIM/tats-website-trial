import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';

export const metadata: Metadata = {
  title: 'Contact | The Aviator Training School',
  description: 'Contact TATS. Register for our free Friday 7 PM webinar. Mall of Travancore, opposite Trivandrum International Airport.',
};

export default function Contact() {
  return (
    <InnerPageLayout>
      <div className="page-hero">
        <div>
          <span className="section-label">Every Friday · 7 PM IST</span>
          <h1 className="section-title" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 4rem)', fontWeight: 300 }}>
            One Webinar.<br />
            <strong>Complete Clarity.</strong>
          </h1>
        </div>
      </div>

      <section className="page-section" style={{ minHeight: 'auto', paddingTop: 40 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'start' }}>
          {/* Left: Webinar register */}
          <div>
            <span className="section-label rv">Free Weekly Webinar</span>
            <h2 className="section-title rv d1">No Pressure.<br /><strong>No Follow-Up Calls.</strong></h2>
            <p className="section-body rv d2">
              Our webinar is not a sales pitch. It's an honest walkthrough of everything a prospective cadet and their family needs to know — fees, timeline, flying school, selection process, and results. We'll answer every question with documentation.
            </p>
            <div className="rv d3" style={{
              background: 'rgba(56,189,248,.055)',
              border: '1px solid rgba(56,189,248,.15)',
              borderRadius: 8, padding: '12px 16px',
              display: 'flex', alignItems: 'center', gap: 10,
              fontSize: '.74rem', color: 'var(--sky)',
              marginBottom: 24,
            }}>
              <span style={{ fontSize: '1.1rem' }}>🕖</span>
              Every Friday · 7:00 PM IST · Online · Free
            </div>
            <div className="rv d4">
              <a
                href="https://forms.gle/sNmtSNYHzvG5PXxu7"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
                style={{ display: 'inline-flex', marginBottom: 16, fontSize: '.8rem', padding: '14px 32px' }}
              >
                Register Free ↗
              </a>
              <p style={{ fontSize: '.66rem', color: 'rgba(255,255,255,.2)', letterSpacing: '1px' }}>
                No follow-up calls. No pressure. One click to register.
              </p>
            </div>
          </div>

          {/* Right: Contact details */}
          <div className="rv d2">
            <div className="glass-panel" style={{ padding: '28px 24px' }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.2rem', fontWeight: 600, marginBottom: 20, color: 'var(--gold)' }}>
                Direct Contact
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {[
                  { icon: '📞', label: 'Primary', value: '+91 62829 95979', href: 'tel:+916282995979' },
                  { icon: '📞', label: 'Secondary', value: '+91 62825 85548', href: 'tel:+916282585548' },
                  { icon: '✉', label: 'General', value: 'info@theaviatortraining.com', href: 'mailto:info@theaviatortraining.com' },
                  { icon: '✉', label: 'Admissions', value: 'lekshmi@theaviatortraining.com', href: 'mailto:lekshmi@theaviatortraining.com' },
                ].map(c => (
                  <a
                    key={c.value}
                    href={c.href}
                    style={{
                      display: 'flex', gap: 12, alignItems: 'flex-start',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,.018)',
                      border: '1px solid rgba(255,255,255,.035)',
                      borderRadius: 7, textDecoration: 'none',
                      transition: 'border-color .3s',
                    }}
                  >
                    <span style={{ color: 'var(--gold)', flexShrink: 0, marginTop: 1 }}>{c.icon}</span>
                    <div>
                      <div style={{ fontSize: '.5rem', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'rgba(255,255,255,.3)', marginBottom: 2 }}>
                        {c.label}
                      </div>
                      <div style={{ fontSize: '.76rem', color: 'rgba(255,255,255,.7)' }}>{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>

              <div style={{ marginTop: 20, paddingTop: 20, borderTop: '1px solid rgba(255,255,255,.06)' }}>
                <div style={{ fontSize: '.52rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: 'var(--gold)', marginBottom: 10 }}>
                  Campus
                </div>
                <address style={{ fontStyle: 'normal', fontSize: '.76rem', color: 'rgba(255,255,255,.45)', lineHeight: 1.9 }}>
                  3rd Floor, Mall of Travancore<br />
                  Opposite Trivandrum International Airport<br />
                  Thiruvananthapuram, Kerala 695024
                </address>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="gold-divider" />

      {/* Map */}
      <section className="page-section" style={{ minHeight: 'auto' }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <span className="section-label rv">Location</span>
          <h2 className="section-title rv d1">Opposite the Airport.<br /><strong>By Design.</strong></h2>
          <div className="rv d2" style={{ borderRadius: 13, overflow: 'hidden', border: '1px solid rgba(255,255,255,.045)', height: 420, marginTop: 28 }}>
            <iframe
              src="https://maps.google.com/maps?q=Mall+of+Travancore+Thiruvananthapuram+Kerala&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%" height="100%"
              style={{ border: 'none', filter: 'invert(.9) hue-rotate(185deg) saturate(.65)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TATS Campus Location"
            />
          </div>
        </div>
      </section>

      <section className="page-section" style={{ minHeight: 'auto', paddingBottom: 80 }}>
        <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto' }}>
          <div className="cta-banner rv">
            <span style={{ fontSize: '2.4rem' }}>📅</span>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontFamily: 'var(--font-cormorant), Georgia, serif', fontSize: '1.5rem', fontWeight: 600, color: 'var(--gold)', marginBottom: 5 }}>
                This Friday · 7 PM IST
              </h3>
              <p style={{ fontSize: '.78rem', color: 'rgba(255,255,255,.43)', lineHeight: 1.7 }}>
                Join us online. Bring your questions. We'll answer all of them — with evidence.
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
