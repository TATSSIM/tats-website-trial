import Link from 'next/link';

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--bg)', color: '#fff', textAlign: 'center',
      padding: '0 5%',
    }}>
      <span style={{
        fontFamily: 'var(--font-cormorant), Georgia, serif',
        fontSize: '6rem', fontWeight: 300, lineHeight: 1,
        color: 'rgba(212,175,55,0.2)',
      }}>404</span>
      <h1 style={{
        fontFamily: 'var(--font-cormorant), Georgia, serif',
        fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 300,
        marginTop: 16, marginBottom: 12,
      }}>
        Page Not Found
      </h1>
      <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.38)', marginBottom: 32 }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </p>
      <Link href="/" className="btn-primary">Return Home →</Link>
    </div>
  );
}
