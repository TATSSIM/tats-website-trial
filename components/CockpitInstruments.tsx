'use client';

import { useEffect, useRef } from 'react';

interface FlightState {
  t: number; ias: number; pitch: number; bank: number;
  heading: number; altitude: number; vsi: number;
}

export default function CockpitInstruments() {
  const aiRef   = useRef<HTMLCanvasElement>(null);
  const asiRef  = useRef<HTMLCanvasElement>(null);
  const altRef  = useRef<HTMLCanvasElement>(null);
  const hiRef   = useRef<HTMLCanvasElement>(null);
  const vsiRef  = useRef<HTMLCanvasElement>(null);
  const tcRef   = useRef<HTMLCanvasElement>(null);
  const rowRef  = useRef<HTMLDivElement>(null);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const [ai, asi, alt, hi, vsi, tc] = [
      aiRef.current, asiRef.current, altRef.current,
      hiRef.current, vsiRef.current, tcRef.current,
    ];
    if (!ai || !asi || !alt || !hi || !vsi || !tc) return;

    const aiCtx  = ai.getContext('2d')!;
    const asiCtx = asi.getContext('2d')!;
    const altCtx = alt.getContext('2d')!;
    const hiCtx  = hi.getContext('2d')!;
    const vsiCtx = vsi.getContext('2d')!;
    const tcCtx  = tc.getContext('2d')!;

    const s: FlightState = { t: 0, ias: 118, pitch: -1.5, bank: 0, heading: 127, altitude: 4500, vsi: 200 };

    function bezel(ctx: CanvasRenderingContext2D, R: number) {
      ctx.clearRect(0, 0, R * 2, R * 2);
      const g = ctx.createRadialGradient(R, R, R * 0.85, R, R, R);
      g.addColorStop(0, '#1a2838'); g.addColorStop(1, '#0d1822');
      ctx.beginPath(); ctx.arc(R, R, R - 1, 0, Math.PI * 2);
      ctx.fillStyle = g; ctx.fill();
    }

    function needle(ctx: CanvasRenderingContext2D, cx: number, cy: number, a: number, len: number, w: number, col: string) {
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(a);
      ctx.beginPath(); ctx.moveTo(0, -len); ctx.lineTo(-w / 2, len * 0.2); ctx.lineTo(w / 2, len * 0.2); ctx.closePath();
      ctx.fillStyle = col; ctx.fill(); ctx.restore();
    }

    // ── AI ──
    const R_AI = ai.width / 2;
    function drawAI() {
      const ctx = aiCtx; const R = R_AI; const cx = R; const cy = R;
      bezel(ctx, R);
      ctx.save();
      ctx.beginPath(); ctx.arc(cx, cy, R - 4, 0, Math.PI * 2); ctx.clip();
      ctx.save();
      ctx.translate(cx, cy); ctx.rotate(s.bank * Math.PI / 180);
      const pp = s.pitch * (R / 20);
      const sg = ctx.createLinearGradient(0, -R, 0, pp);
      sg.addColorStop(0, '#1a4080'); sg.addColorStop(1, '#2060b0');
      ctx.fillStyle = sg; ctx.fillRect(-R, -R, R * 2, R + pp + 1);
      const gg = ctx.createLinearGradient(0, pp, 0, R);
      gg.addColorStop(0, '#604020'); gg.addColorStop(1, '#3a2010');
      ctx.fillStyle = gg; ctx.fillRect(-R, pp, R * 2, R * 2);
      ctx.beginPath(); ctx.moveTo(-R, pp); ctx.lineTo(R, pp);
      ctx.strokeStyle = 'rgba(255,255,255,.95)'; ctx.lineWidth = 2; ctx.stroke();
      ctx.strokeStyle = 'rgba(255,255,255,.65)'; ctx.lineWidth = 1;
      ctx.font = `${Math.round(R * .115)}px Share Tech Mono`;
      ctx.fillStyle = 'rgba(255,255,255,.65)'; ctx.textAlign = 'center';
      for (let p = -20; p <= 20; p += 5) {
        if (p === 0) continue;
        const py = pp - p * (R / 20); const len = p % 10 === 0 ? R * .32 : R * .18;
        ctx.beginPath(); ctx.moveTo(-len, py); ctx.lineTo(len, py); ctx.stroke();
        if (p % 10 === 0) { ctx.fillText(String(Math.abs(p)), -len - 10, py + 3); ctx.fillText(String(Math.abs(p)), len + 10, py + 3); }
      }
      ctx.restore();
      ctx.save(); ctx.translate(cx, cy);
      ctx.strokeStyle = 'rgba(255,255,255,.45)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.arc(0, 0, R - 10, -Math.PI, 0); ctx.stroke();
      for (const deg of [-60, -45, -30, -20, -10, 0, 10, 20, 30, 45, 60]) {
        const a = (deg - 90) * Math.PI / 180; const r1 = R - 10; const r2 = R - (deg % 30 === 0 ? 18 : 14);
        ctx.beginPath(); ctx.moveTo(Math.cos(a) * r1, Math.sin(a) * r1); ctx.lineTo(Math.cos(a) * r2, Math.sin(a) * r2);
        ctx.strokeStyle = 'rgba(255,255,255,.55)'; ctx.lineWidth = deg % 30 === 0 ? 1.8 : 0.9; ctx.stroke();
      }
      ctx.fillStyle = 'rgba(255,220,50,.9)';
      ctx.beginPath(); ctx.moveTo(0, -(R - 10)); ctx.lineTo(-5, -(R - 18)); ctx.lineTo(5, -(R - 18)); ctx.closePath(); ctx.fill();
      ctx.restore(); ctx.restore();
      ctx.strokeStyle = '#D4AF37'; ctx.lineWidth = 2.2;
      ctx.beginPath();
      ctx.moveTo(cx - 30, cy); ctx.lineTo(cx - 12, cy); ctx.lineTo(cx - 12, cy - 4);
      ctx.moveTo(cx + 30, cy); ctx.lineTo(cx + 12, cy); ctx.lineTo(cx + 12, cy - 4);
      ctx.moveTo(cx - 5, cy - 5); ctx.lineTo(cx, cy + 3); ctx.lineTo(cx + 5, cy - 5);
      ctx.stroke();
      ctx.fillStyle = '#D4AF37'; ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2); ctx.fill();
      ctx.beginPath(); ctx.arc(cx, cy, R - 2, 0, Math.PI * 2);
      ctx.strokeStyle = '#2a3848'; ctx.lineWidth = 3; ctx.stroke();
    }

    // ── ASI ──
    const R_ASI = asi.width / 2;
    function drawASI() {
      const ctx = asiCtx; const R = R_ASI; const cx = R; const cy = R;
      bezel(ctx, R);
      const toA = (sp: number) => (sp / 180) * Math.PI * 2 - Math.PI * .6;
      const arcR = (col: string, f: number, t: number, w: number, ri: number) => {
        ctx.beginPath(); ctx.arc(cx, cy, ri, toA(f), toA(t)); ctx.strokeStyle = col; ctx.lineWidth = w; ctx.stroke();
      };
      arcR('#fff', 60, 112, 3, R - 10); arcR('#00cc44', 73, 125, 3, R - 14); arcR('#ffaa00', 125, 150, 3, R - 14);
      ctx.textAlign = 'center'; ctx.font = `${R * .16}px Share Tech Mono`;
      for (let sp = 0; sp <= 160; sp += 10) {
        const a = toA(sp); const isMaj = sp % 20 === 0; const ir = isMaj ? R - 22 : R - 16;
        ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * ir, cy + Math.sin(a) * ir);
        ctx.lineTo(cx + Math.cos(a) * (R - 8), cy + Math.sin(a) * (R - 8));
        ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = isMaj ? 1.5 : 0.7; ctx.stroke();
        if (isMaj && sp > 0) {
          ctx.fillStyle = 'rgba(255,255,255,.85)';
          ctx.fillText(String(sp), cx + Math.cos(a) * (R - 28), cy + Math.sin(a) * (R - 28) + 4);
        }
      }
      const vA = toA(150);
      ctx.beginPath(); ctx.moveTo(cx + Math.cos(vA) * (R - 8), cy + Math.sin(vA) * (R - 8));
      ctx.lineTo(cx + Math.cos(vA) * (R - 18), cy + Math.sin(vA) * (R - 18));
      ctx.strokeStyle = '#ff3344'; ctx.lineWidth = 2.5; ctx.stroke();
      needle(ctx, cx, cy, toA(s.ias), R - 14, 4, '#fff');
      ctx.fillStyle = '#0d1822'; ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.4)'; ctx.font = `${R * .14}px Share Tech Mono`;
      ctx.fillText('KIAS', cx, cy + R * .55);
    }

    // ── ALTIMETER ──
    const R_ALT = alt.width / 2;
    function drawAlt() {
      const ctx = altCtx; const R = R_ALT; const cx = R; const cy = R;
      bezel(ctx, R);
      ctx.textAlign = 'center';
      for (let i = 0; i < 10; i++) {
        const a = (i / 10) * Math.PI * 2 - Math.PI / 2; const isMaj = i % 2 === 0;
        const ir = isMaj ? R - 20 : R - 14;
        ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * ir, cy + Math.sin(a) * ir);
        ctx.lineTo(cx + Math.cos(a) * (R - 8), cy + Math.sin(a) * (R - 8));
        ctx.strokeStyle = 'rgba(255,255,255,.8)'; ctx.lineWidth = isMaj ? 1.5 : 0.7; ctx.stroke();
        if (isMaj) {
          ctx.fillStyle = 'rgba(255,255,255,.85)'; ctx.font = `${R * .16}px Share Tech Mono`;
          ctx.fillText(String(i), cx + Math.cos(a) * (R - 27), cy + Math.sin(a) * (R - 27) + 4);
        }
      }
      needle(ctx, cx, cy, ((s.altitude % 1000) / 1000) * Math.PI * 2 - Math.PI / 2, R - 10, 3, '#fff');
      needle(ctx, cx, cy, ((s.altitude % 10000) / 10000) * Math.PI * 2 - Math.PI / 2, R - 22, 5, 'rgba(255,255,255,.7)');
      ctx.fillStyle = '#0d1822'; ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.9)'; ctx.beginPath(); ctx.arc(cx, cy, 3, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(0,0,0,.6)'; ctx.beginPath(); ctx.rect(cx - 18, cy + R * .35, 36, 14); ctx.fill();
      ctx.fillStyle = 'rgba(255,180,0,.9)'; ctx.font = `${R * .14}px Share Tech Mono`;
      ctx.fillText('1013', cx, cy + R * .35 + 10);
    }

    // ── HI ──
    const R_HI = hi.width / 2;
    function drawHI() {
      const ctx = hiCtx; const R = R_HI; const cx = R; const cy = R;
      bezel(ctx, R);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(-s.heading * Math.PI / 180);
      for (let deg = 0; deg < 360; deg += 5) {
        const a = (deg - 90) * Math.PI / 180;
        const isMaj = deg % 30 === 0; const isMed = deg % 10 === 0;
        const ir = isMaj ? R - 22 : isMed ? R - 16 : R - 12;
        ctx.beginPath(); ctx.moveTo(Math.cos(a) * ir, Math.sin(a) * ir);
        ctx.lineTo(Math.cos(a) * (R - 8), Math.sin(a) * (R - 8));
        ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = isMaj ? 1.5 : 0.6; ctx.stroke();
      }
      ctx.font = `bold ${R * .18}px Share Tech Mono`; ctx.textAlign = 'center';
      ([['N', 0], ['E', 90], ['S', 180], ['W', 270]] as [string, number][]).forEach(([d, deg]) => {
        const a = (deg - 90) * Math.PI / 180;
        ctx.fillStyle = d === 'N' ? '#ff4444' : 'rgba(255,255,255,.9)';
        ctx.fillText(d, Math.cos(a) * (R - 30), Math.sin(a) * (R - 30) + 5);
      });
      ctx.font = `${R * .13}px Share Tech Mono`; ctx.fillStyle = 'rgba(255,255,255,.6)';
      [30, 60, 120, 150, 210, 240, 300, 330].forEach(deg => {
        const a = (deg - 90) * Math.PI / 180;
        ctx.fillText(String(deg), Math.cos(a) * (R - 30), Math.sin(a) * (R - 30) + 4);
      });
      ctx.restore();
      ctx.fillStyle = '#D4AF37';
      ctx.beginPath(); ctx.moveTo(cx, cy - R + 4); ctx.lineTo(cx - 6, cy - R + 14); ctx.lineTo(cx + 6, cy - R + 14); ctx.closePath(); ctx.fill();
      ctx.strokeStyle = '#D4AF37'; ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(cx - 16, cy); ctx.lineTo(cx - 4, cy - 4); ctx.lineTo(cx, cy + 4); ctx.lineTo(cx + 4, cy - 4); ctx.lineTo(cx + 16, cy);
      ctx.moveTo(cx - 8, cy + 8); ctx.lineTo(cx, cy + 4); ctx.lineTo(cx + 8, cy + 8);
      ctx.stroke();
      ctx.fillStyle = '#0d1822'; ctx.beginPath(); ctx.arc(cx, cy, 5, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.5)'; ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2); ctx.fill();
    }

    // ── VSI ──
    const R_VSI = vsi.width / 2;
    function drawVSI() {
      const ctx = vsiCtx; const R = R_VSI; const cx = R; const cy = R;
      bezel(ctx, R);
      const vA = (fpm: number) => (Math.max(-2000, Math.min(2000, fpm)) / 2000) * 1.1 * Math.PI - Math.PI / 2;
      ctx.textAlign = 'center'; ctx.font = `${R * .15}px Share Tech Mono`;
      ([['2000','2'],['1500','1.5'],['1000','1'],['500','.5'],['0','0'],['-500','.5'],['-1000','1'],['-1500','1.5'],['-2000','2']] as [string,string][]).forEach(([fpm, label]) => {
        const a = vA(parseInt(fpm, 10));
        ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * (R - 12), cy + Math.sin(a) * (R - 12));
        ctx.lineTo(cx + Math.cos(a) * (R - 8), cy + Math.sin(a) * (R - 8));
        ctx.strokeStyle = 'rgba(255,255,255,.7)'; ctx.lineWidth = 1.5; ctx.stroke();
        ctx.fillStyle = 'rgba(255,255,255,.75)';
        ctx.fillText(label, cx + Math.cos(a) * (R - 22), cy + Math.sin(a) * (R - 22) + 4);
      });
      ctx.fillStyle = 'rgba(255,255,255,.4)'; ctx.font = `${R * .13}px Share Tech Mono`;
      ctx.fillText('UP', cx + R * .4, cy - R * .4); ctx.fillText('DN', cx + R * .4, cy + R * .4);
      ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + R - 8, cy);
      ctx.strokeStyle = 'rgba(255,255,255,.15)'; ctx.lineWidth = 0.5; ctx.stroke();
      needle(ctx, cx, cy, vA(s.vsi), R - 14, 3, '#fff');
      ctx.fillStyle = '#0d1822'; ctx.beginPath(); ctx.arc(cx, cy, 4, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.8)'; ctx.beginPath(); ctx.arc(cx, cy, 2.5, 0, Math.PI * 2); ctx.fill();
    }

    // ── TC ──
    const R_TC = tc.width / 2;
    function drawTC() {
      const ctx = tcCtx; const R = R_TC; const cx = R; const cy = R;
      bezel(ctx, R);
      for (const deg of [-30, -20, -10, 0, 10, 20, 30]) {
        const a = (deg - 90) * Math.PI / 180;
        ctx.beginPath(); ctx.moveTo(cx + Math.cos(a) * (R - 10), cy + Math.sin(a) * (R - 10));
        ctx.lineTo(cx + Math.cos(a) * (R - 18), cy + Math.sin(a) * (R - 18));
        ctx.strokeStyle = 'rgba(255,255,255,.6)'; ctx.lineWidth = deg % 30 === 0 ? 2 : 1; ctx.stroke();
      }
      ctx.fillStyle = 'rgba(255,255,255,.6)'; ctx.font = `${R * .16}px Share Tech Mono`; ctx.textAlign = 'center';
      ctx.fillText('L', cx - R * .65, cy - R * .55); ctx.fillText('R', cx + R * .65, cy - R * .55);
      ctx.save(); ctx.translate(cx, cy); ctx.rotate(s.bank * Math.PI / 180);
      ctx.strokeStyle = '#D4AF37'; ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-22, 4); ctx.lineTo(-8, 0); ctx.lineTo(0, 6); ctx.lineTo(8, 0); ctx.lineTo(22, 4);
      ctx.moveTo(-8, 0); ctx.lineTo(0, -4); ctx.lineTo(8, 0);
      ctx.moveTo(-6, 10); ctx.lineTo(0, 6); ctx.lineTo(6, 10);
      ctx.stroke(); ctx.restore();
      ctx.strokeStyle = 'rgba(255,255,255,.3)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(cx - 20, cy + R * .5); ctx.lineTo(cx + 20, cy + R * .5); ctx.stroke();
      ctx.fillStyle = '#fff'; ctx.beginPath(); ctx.arc(cx + s.bank * .5, cy + R * .5, 5, 0, Math.PI * 2); ctx.fill();
    }

    function update() {
      s.t++;
      const t = s.t;
      s.bank     = Math.sin(t * .008) * 12 + Math.sin(t * .013) * 5;
      s.pitch    = -1.5 + Math.sin(t * .011) * 2.5;
      s.ias      = 118 + Math.sin(t * .007) * 6 + Math.sin(t * .019) * 3;
      s.heading  = (127 + t * .04 + Math.sin(t * .01) * 15) % 360;
      s.altitude = 4500 + t * .4 + Math.sin(t * .005) * 80;
      s.vsi      = 200 + Math.sin(t * .009) * 150;
    }

    function loop() {
      update(); drawAI(); drawASI(); drawAlt(); drawHI(); drawVSI(); drawTC();
      animRef.current = requestAnimationFrame(loop);
    }
    loop();

    // Staggered power-on
    const slots = ['slot-asi', 'slot-ai', 'slot-alt', 'slot-tc', 'slot-hi', 'slot-vsi'];
    const delays = [400, 700, 900, 1100, 1300, 1500];
    const timers = slots.map((id, i) =>
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.classList.add('on');
      }, delays[i])
    );
    const avT  = setTimeout(() => { const el = document.getElementById('avionics-inner'); if (el) el.style.opacity = '1'; }, 1600);
    const annT = setTimeout(() => { const el = document.getElementById('annunciator-panel'); if (el) el.style.opacity = '1'; }, 1800);
    const rowT = setTimeout(() => { if (rowRef.current) rowRef.current.classList.add('powered'); }, 300);

    return () => {
      cancelAnimationFrame(animRef.current);
      timers.forEach(clearTimeout);
      [avT, annT, rowT].forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      {/* Instrument row */}
      <div id="instruments-row" ref={rowRef}>
        {([
          { id: 'slot-asi', ref: asiRef, w: 120, h: 120, label: 'Airspeed' },
          { id: 'slot-ai',  ref: aiRef,  w: 140, h: 140, label: 'Attitude' },
          { id: 'slot-alt', ref: altRef, w: 120, h: 120, label: 'Altitude' },
        ] as const).map(inst => (
          <div key={inst.id} id={inst.id} className="instrument-slot">
            <canvas ref={inst.ref} width={inst.w} height={inst.h} />
            <span className="inst-label">{inst.label}</span>
          </div>
        ))}

        <div style={{ width: 'clamp(50px,8vw,110px)' }} />

        {([
          { id: 'slot-tc',  ref: tcRef,  w: 110, h: 110, label: 'Turn Coord' },
          { id: 'slot-hi',  ref: hiRef,  w: 130, h: 130, label: 'Heading' },
          { id: 'slot-vsi', ref: vsiRef, w: 110, h: 110, label: 'Vert Speed' },
        ] as const).map(inst => (
          <div key={inst.id} id={inst.id} className="instrument-slot">
            <canvas ref={inst.ref} width={inst.w} height={inst.h} />
            <span className="inst-label">{inst.label}</span>
          </div>
        ))}
      </div>

      {/* Avionics stack */}
      <div id="avionics-inner"
        className="absolute right-[5%] bottom-[9%] z-[5] hidden lg:flex flex-col gap-[3px]"
        style={{ opacity: 0, transition: 'opacity .5s ease' }}
      >
        {[
          { label: 'COM 1', freq: '118.050', stby: '121.500', color: 'rgba(56,189,248,.85)' },
          { label: 'COM 2', freq: '119.100', stby: '119.100', color: 'rgba(56,189,248,.85)' },
          { label: 'NAV 1', freq: '108.000', stby: '113.800', color: 'rgba(56,189,248,.85)' },
          { label: 'XPDR',  freq: '7700',   stby: 'ALT',     color: 'rgba(255,153,0,.85)' },
        ].map(r => (
          <div key={r.label} className="radio-unit" style={{ color: r.color }}>
            <span className="radio-label">{r.label}</span>
            {r.freq}
            <span className="freq">{r.stby}</span>
          </div>
        ))}
      </div>

      {/* Annunciator */}
      <div id="annunciator-panel"
        className="absolute left-[5%] bottom-[9%] z-[5] hidden lg:grid grid-cols-2 gap-[3px]"
        style={{ opacity: 0, transition: 'opacity .5s ease' }}
      >
        {[
          { label: 'MASTER', cls: 'green' }, { label: 'BATT',  cls: 'green' },
          { label: 'ALT 1',  cls: 'green' }, { label: 'ALT 2', cls: 'green' },
          { label: 'VAC',    cls: 'off'   }, { label: 'OIL P', cls: 'off'   },
          { label: 'PITOT',  cls: 'amber' }, { label: 'STALL', cls: 'off'   },
        ].map(l => (
          <div key={l.label} className={`ann-light ${l.cls}`}>{l.label}</div>
        ))}
      </div>
    </>
  );
}
