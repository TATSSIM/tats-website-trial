'use client';

import { useEffect, useRef } from 'react';

/* ─────────────────────────────────────────
   SCROLL REVEAL (handles all rv classes)
───────────────────────────────────────── */
export function ScrollReveal() {
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          obs.unobserve(e.target);
        }
      }),
      { threshold: .06, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.rv, .rv-left, .rv-right, .rv-clip, .rv-3d').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}

/* ─────────────────────────────────────────
   COUNTER ANIMATE
───────────────────────────────────────── */
export function CounterAnimate() {
  useEffect(() => {
    function animate(el: HTMLElement) {
      const target = parseInt(el.dataset.count || '0');
      if (!target) return;
      let v = 0;
      const duration = 1400;
      const startTime = performance.now();
      const step = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        v = Math.round(eased * target);
        el.textContent = String(v);
        if (progress < 1) requestAnimationFrame(step);
        else el.textContent = String(target);
      };
      requestAnimationFrame(step);
    }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          animate(e.target as HTMLElement);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .3 });
    document.querySelectorAll('[data-count]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}

/* ─────────────────────────────────────────
   TEXT SCRAMBLE — Decrypting hacker effect
───────────────────────────────────────── */
export function TextScramble() {
  useEffect(() => {
    const CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$+×÷≡∞◆';

    function runScramble(el: HTMLElement) {
      const finalText = el.dataset.scramble || '';
      if (!finalText) return;

      const totalFrames = 60;
      let frame = 0;
      let rafId: number;

      const tick = () => {
        const progress = frame / totalFrames;
        el.textContent = finalText.split('').map((char, i) => {
          if (char === ' ') return ' ';
          // Characters reveal left to right
          if (i < Math.floor(progress * finalText.length)) return finalText[i];
          // Still scrambling
          return CHARS[Math.floor(Math.random() * CHARS.length)];
        }).join('');

        if (frame < totalFrames) {
          frame++;
          // Slow down near the end for dramatic effect
          const delay = frame > totalFrames * 0.7 ? 40 : 20;
          setTimeout(() => { rafId = requestAnimationFrame(tick); }, delay);
        } else {
          el.textContent = finalText;
        }
      };

      rafId = requestAnimationFrame(tick);
      return () => cancelAnimationFrame(rafId);
    }

    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          const el = e.target as HTMLElement;
          setTimeout(() => runScramble(el), el.dataset.scrambleDelay ? parseInt(el.dataset.scrambleDelay) : 0);
          obs.unobserve(e.target);
        }
      });
    }, { threshold: .5 });

    document.querySelectorAll('[data-scramble]').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);
  return null;
}

/* ─────────────────────────────────────────
   SCROLL PROGRESS BAR
───────────────────────────────────────── */
export function ScrollProgressBar() {
  useEffect(() => {
    const bar = document.querySelector('.scroll-progress') as HTMLElement | null;
    if (!bar) return;
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.width = total > 0 ? `${(scrolled / total) * 100}%` : '0%';
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return <div className="scroll-progress" />;
}

/* ─────────────────────────────────────────
   TYPOGRAPHY PARALLAX — each line at different Z depth
   Elements with [data-parallax-speed] move at their own rate,
   separating in Z-space as you scroll → genuine 3D depth
───────────────────────────────────────── */
export function TypographyParallax() {
  useEffect(() => {
    // Desktop only — mobile parallax feels wrong
    if (window.innerWidth < 900) return;
    const layers = document.querySelectorAll<HTMLElement>('[data-parallax-speed]');
    const vh = window.innerHeight;
    const update = () => {
      const y = window.scrollY;
      if (y > vh * 1.8) return; // only apply inside hero zone
      layers.forEach(layer => {
        const speed = parseFloat(layer.dataset.parallaxSpeed || '0');
        layer.style.transform = `translateY(${y * speed}px)`;
      });
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return null;
}

/* ─────────────────────────────────────────
   PARALLAX HERO — background scroll offset
───────────────────────────────────────── */
export function ParallaxHero() {
  useEffect(() => {
    const bgPhoto = document.getElementById('bg-photo');
    if (!bgPhoto) return;
    const update = () => {
      const y = window.scrollY;
      const speed = 0.28;
      // Only parallax while in viewport
      if (y < window.innerHeight) {
        bgPhoto.style.transform = `scale(1.08) translateY(${y * speed}px)`;
      }
    };
    window.addEventListener('scroll', update, { passive: true });
    return () => window.removeEventListener('scroll', update);
  }, []);
  return null;
}

/* ─────────────────────────────────────────
   CARD TILT (no translateY conflict)
───────────────────────────────────────── */
export function CardTilt() {
  useEffect(() => {
    const cards = document.querySelectorAll<HTMLElement>('.tilt-card');
    const handlers = Array.from(cards).map(card => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = (e.clientX - r.left) / r.width - .5;
        const y = (e.clientY - r.top) / r.height - .5;
        card.style.transform = `perspective(800px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg)`;
      };
      const leave = () => { card.style.transform = ''; };
      card.addEventListener('mousemove', move as EventListener);
      card.addEventListener('mouseleave', leave);
      return { card, move, leave };
    });
    return () => {
      handlers.forEach(({ card, move, leave }) => {
        card.removeEventListener('mousemove', move as EventListener);
        card.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
  return null;
}

/* ─────────────────────────────────────────
   NAV DOTS
───────────────────────────────────────── */
export function NavDots({ sections }: { sections: { id: string; label: string }[] }) {
  const activeRef = useRef<string>(sections[0]?.id ?? '');

  useEffect(() => {
    function update() {
      let current = sections[0].id;
      sections.forEach(({ id }) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 280) current = id;
      });
      activeRef.current = current;
      document.querySelectorAll<HTMLElement>('.nav-dot').forEach(d => {
        d.classList.toggle('active', d.dataset.section === current);
      });
    }
    window.addEventListener('scroll', update, { passive: true });
    update();
    return () => window.removeEventListener('scroll', update);
  }, [sections]);

  return (
    <div className="nav-dots">
      {sections.map(({ id, label }) => (
        <button
          key={id}
          className="nav-dot"
          data-section={id}
          data-label={label}
          onClick={() => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })}
          aria-label={label}
        />
      ))}
    </div>
  );
}

/* ─────────────────────────────────────────
   MAGNETIC BUTTONS
───────────────────────────────────────── */
export function MagneticButtons() {
  useEffect(() => {
    const btns = document.querySelectorAll<HTMLElement>('.btn-primary');
    const handlers = Array.from(btns).map(btn => {
      const move = (e: MouseEvent) => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - r.left - r.width / 2) * 0.22;
        const y = (e.clientY - r.top - r.height / 2) * 0.22;
        btn.style.transform = `translate(${x}px, ${y}px)`;
      };
      const leave = () => { btn.style.transform = ''; };
      btn.addEventListener('mousemove', move as EventListener);
      btn.addEventListener('mouseleave', leave);
      return { btn, move, leave };
    });
    return () => {
      handlers.forEach(({ btn, move, leave }) => {
        btn.removeEventListener('mousemove', move as EventListener);
        btn.removeEventListener('mouseleave', leave);
      });
    };
  }, []);
  return null;
}

/* ─────────────────────────────────────────
   FLOATING WHATSAPP
───────────────────────────────────────── */
export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/916282995979?text=Hi%2C%20I%27m%20interested%20in%20TATS%20programmes"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-float"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
    </a>
  );
}

/* ─────────────────────────────────────────
   BACK TO TOP
───────────────────────────────────────── */
export function BackToTop() {
  useEffect(() => {
    const btn = document.querySelector('.back-to-top') as HTMLElement | null;
    if (!btn) return;
    const toggle = () => btn.classList.toggle('visible', window.scrollY > 480);
    window.addEventListener('scroll', toggle, { passive: true });
    return () => window.removeEventListener('scroll', toggle);
  }, []);

  return (
    <button
      className="back-to-top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="Back to top"
    >
      <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
        <polyline points="2,11 8,5 14,11" />
      </svg>
    </button>
  );
}
