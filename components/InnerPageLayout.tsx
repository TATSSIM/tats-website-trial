import Nav from './Nav';
import Footer from './Footer';
import { ScrollReveal, CounterAnimate, CardTilt, FloatingWhatsApp, BackToTop, MagneticButtons } from './PageClient';
import { withBasePath } from '@/lib/basePath';

interface Props {
  children: React.ReactNode;
}

export default function InnerPageLayout({ children }: Props) {
  return (
    <>
      <ScrollReveal />
      <CounterAnimate />
      <CardTilt />
      <MagneticButtons />
      <FloatingWhatsApp />
      <BackToTop />

      {/* ── Full-screen video background ── */}
      <div className="inner-bg">
        {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
        <video
          className="inner-bg-video"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
        >
          <source src={withBasePath("/videos/bg-tech.mp4")} type="video/mp4" />
        </video>
        {/* Overlay layers */}
        <div className="inner-bg-overlay" />
        <div className="inner-bg-vignette" />
      </div>

      <Nav />

      <div className="page-enter" style={{ position: 'relative', zIndex: 10 }}>
        {children}
        <Footer />
      </div>
    </>
  );
}
