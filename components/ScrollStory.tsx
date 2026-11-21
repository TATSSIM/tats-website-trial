'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { withBasePath } from '@/lib/basePath';

const clamp = (n: number, a = 0, b = 1) => Math.min(b, Math.max(a, n));
const reduced = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function onScrollFrame(fn: () => void) {
  let raf = 0;
  const tick = () => { raf = 0; fn(); };
  const handler = () => { if (!raf) raf = requestAnimationFrame(tick); };
  window.addEventListener('scroll', handler, { passive: true });
  window.addEventListener('resize', handler);
  handler();
  return () => {
    window.removeEventListener('scroll', handler);
    window.removeEventListener('resize', handler);
    if (raf) cancelAnimationFrame(raf);
  };
}

/* ── Word-by-word reveal, scrubbed by scroll ── */
export function WordReveal({ text, className = '', style }: { text: string; className?: string; style?: React.CSSProperties }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(' ');

  useEffect(() => {
    const el = ref.current;
    if (!el || reduced()) return;
    const spans = Array.from(el.querySelectorAll<HTMLElement>('.wr-w'));
    el.classList.add('wr-js');
    return onScrollFrame(() => {
      const r = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const p = clamp((vh * 0.9 - r.top) / (vh * 0.45));
      const lit = p * spans.length;
      spans.forEach((s, i) => { s.style.opacity = String(clamp(0.16 + (lit - i) * 0.84, 0.16, 1)); });
    });
  }, []);

  return (
    <p ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} className="wr-w">{w}{i < words.length - 1 ? ' ' : ''}</span>
      ))}
    </p>
  );
}

/* ── Stacking stat cards with count-up ── */
const STATS = [
  { n: 204, pre: '', suf: '', label: 'Flight hours', note: 'Across six stages of flight training in Poland — from foundation VFR to multi-engine and cold-weather operations.', img: '/images/serbia.jpg', pos: 'center 55%' },
  { n: 41, pre: '', suf: '', label: 'Simulator hours', note: 'Multi-engine FNPT II and Airbus A320 jet orientation, with loggable hours.', img: '/images/ft-grp.jpg', pos: 'center 50%' },
  { n: 960, pre: '', suf: '', label: 'Hours of EASA ATPL theory', note: 'Delivered from India while your visa is processed, so you arrive in Poland ready to fly.', img: '/images/students-campus.jpg', pos: 'center 55%' },
  { n: 32, pre: '~', suf: '%', label: 'Selection rate', note: 'A 3-layer assessment — psychological, academic, and an interview with the MD.', img: '/images/batch1-dispatch.jpg', pos: 'center 45%' },
];

export function StatStack() {
  const refs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const els = refs.current.filter(Boolean) as HTMLSpanElement[];
    if (reduced()) { els.forEach((el, i) => { el.textContent = String(STATS[i].n); }); return; }
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        obs.unobserve(e.target);
        const el = e.target as HTMLSpanElement;
        const target = Number(el.dataset.n);
        const t0 = performance.now();
        const step = (now: number) => {
          const p = Math.min((now - t0) / 1400, 1);
          el.textContent = String(Math.round((1 - Math.pow(1 - p, 3)) * target));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.5 });
    els.forEach(el => { el.textContent = '0'; obs.observe(el); });
    return () => obs.disconnect();
  }, []);

  return (
    <div className="ss-stack">
      {STATS.map((s, i) => (
        <div key={s.label} className={`ss-card ss-card-${i % 2 ? 'dark' : 'gold'}`} style={{ top: `calc(84px + ${i * 14}px)` }}>
          <div className="ss-card-img" aria-hidden="true" style={{ backgroundImage: `url(${withBasePath(s.img)})`, backgroundPosition: s.pos }} />
          <span className="ss-card-eyebrow">0{i + 1} / 0{STATS.length}</span>
          <div className="ss-card-num">
            {s.pre}<span ref={el => { refs.current[i] = el; }} data-n={s.n}>{s.n}</span>{s.suf}
          </div>
          <div className="ss-card-label">{s.label}</div>
          <p className="ss-card-note">{s.note}</p>
        </div>
      ))}
    </div>
  );
}

/* ── Training-journey timeline with a scroll-filled line ── */
export const FLY_DIRECT_PHASES = [
  { t: 'India Phase', d: '100% of your ATPL ground training and pre-training simulator work, completed before departure.' },
  { t: 'Transition', d: 'Travel to Poland. ELP, EASA Class 1 medical and skill test, then induction into flight training at Goldwings.' },
  { t: 'Poland Phase', d: 'VFR flying and time building, instrument-rating training alongside ATPL exams, cold-weather operations and multi-engine training.' },
  { t: 'Completion', d: 'EASA CPL and Multi-Engine IR issued. MCC, Jet Orientation (A320) and UPRT completed.' },
  { t: 'Return Home', d: 'Logbook alignment and documentation support for your DGCA India licence application, then back to India.' },
];

const PHASES = [
  { t: 'India Phase', d: 'ATPL ground training and academic preparation at our Trivandrum campus, while your visa is processed — foundation building before departure.' },
  { t: 'Transition', d: 'Travel to Poland. ELP, EASA Class 1 medical and skill test, then induction into flight training at Goldwings.' },
  { t: 'Poland Phase', d: 'VFR flying and time building, instrument-rating training alongside ATPL exams, cold-weather operations and multi-engine training.' },
  { t: 'Completion', d: 'EASA CPL and Multi-Engine IR issued. MCC, Jet Orientation (A320) and UPRT completed.' },
  { t: 'Return Home', d: 'Logbook alignment and documentation support for your DGCA India licence application, then back to India.' },
];

export function JourneyTimeline({ phases = PHASES, cta = { label: 'See the programme →', href: '/programs/atpl-integrated' } }: { phases?: { t: string; d: string }[]; cta?: { label: string; href: string } | null }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const nodes = Array.from(track.querySelectorAll<HTMLElement>('.jt-step'));
    if (reduced()) {
      track.style.setProperty('--fill', '100%');
      nodes.forEach(n => n.classList.add('on'));
      setActive(phases.length - 1);
      return;
    }
    return onScrollFrame(() => {
      const r = track.getBoundingClientRect();
      const line = window.innerHeight * 0.55;
      const fill = clamp(line - r.top, 0, r.height);
      track.style.setProperty('--fill', `${fill}px`);
      let idx = 0;
      nodes.forEach((n, i) => {
        const on = n.offsetTop + 22 <= fill;
        n.classList.toggle('on', on);
        if (on) idx = i;
      });
      setActive(prev => (prev === idx ? prev : idx));
    });
  }, [phases]);

  return (
    <div className="jt">
      <div className="jt-side">
        <span className="section-label rv">Your Training Pathway</span>
        <h2 className="section-title rv d1" style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', marginBottom: 20 }}>
          Five phases. <strong>One continuous path.</strong>
        </h2>
        <div className="jt-count" aria-live="polite">
          <b>{String(active + 1).padStart(2, '0')}</b> / {String(phases.length).padStart(2, '0')}
        </div>
        <p className="jt-now">{phases[active].t}</p>
        {cta && <Link href={cta.href} className="btn-ghost" style={{ marginTop: 22 }}>{cta.label}</Link>}
      </div>
      <div className="jt-track" ref={trackRef}>
        <div className="jt-line"><div className="jt-fill" /></div>
        {phases.map((p, i) => (
          <div key={p.t} className="jt-step">
            <span className="jt-dot">{i + 1}</span>
            <h3>{p.t}</h3>
            <p>{p.d}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
