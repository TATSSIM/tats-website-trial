'use client';

import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

const SCREENING_URL = 'https://webinar.theaviatortraining.com/screening';

const LAYERS = [
  { t: 'Psychological evaluation', d: 'Designed by our instructors and our high-performance psychologist, Wing Cdr Dhanasree P V (Retd IAF).' },
  { t: 'Academic assessment', d: 'Foundation physics, mathematics and reasoning.' },
  { t: 'Interview with the MD', d: 'A direct conversation about your attitude, intent and suitability.' },
];

const NEXT = [
  'Choose your course and submit the screening application.',
  'Our Student Coordinator contacts you to schedule your screening.',
  'You complete the screening. Fly Direct candidates need a parent or guardian to sign and return the programme brochure first.',
  'If you clear it, you are offered a seat and your pathway begins.',
];

export function ApplyScreeningButton({
  course,
  label = 'Apply for Screening',
  className = 'btn-ghost',
}: {
  course?: 'tats120' | 'flydirect' | 'ac48';
  label?: string;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const opener = useRef<HTMLButtonElement>(null);
  const href = course ? `${SCREENING_URL}?course=${course}` : SCREENING_URL;

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      document.removeEventListener('keydown', onKey);
      opener.current?.focus();
    };
  }, [open]);

  return (
    <>
      <button ref={opener} type="button" className={className} onClick={() => setOpen(true)}>
        {label}
      </button>
      {mounted && open && createPortal(
        <div className="sm-backdrop" onClick={() => setOpen(false)}>
          <div className="sm-dialog" role="dialog" aria-modal="true" aria-labelledby="sm-title" onClick={e => e.stopPropagation()}>
            <button ref={closeRef} type="button" className="sm-close" aria-label="Close" onClick={() => setOpen(false)}>×</button>

            <span className="section-label">Before you apply</span>
            <h2 id="sm-title" className="sm-title">Screening is how we choose <strong>who joins TATS.</strong></h2>

            <p className="sm-p">
              TATS admission is not an open application. Every candidate goes through a screening, and we accept around <b>32%</b> of applicants. <b>You can join the institute only if you clear it.</b>
            </p>

            <div className="sm-block">
              <h3>What the screening is for</h3>
              <p className="sm-p">A three-layer assessment that checks whether you are genuinely ready for pilot training:</p>
              <ul className="sm-layers">
                {LAYERS.map((l, i) => (
                  <li key={l.t}><span>{i + 1}</span><div><b>{l.t}</b><br />{l.d}</div></li>
                ))}
              </ul>
            </div>

            <div className="sm-block">
              <h3>Why we have it, and why it matters</h3>
              <p className="sm-p">
                Flight training abroad is demanding, and a wrong fit costs a cadet time, money and confidence. Selecting carefully protects you and your family, and keeps every batch at a standard the airlines respect. It is the reason our results hold up.
              </p>
            </div>

            <div className="sm-block">
              <h3>What happens next</h3>
              <ol className="sm-next">
                {NEXT.map(n => <li key={n}>{n}</li>)}
              </ol>
              <p className="sm-note">If you are not selected this time, you can reapply for the next batch or after 45 days.</p>
            </div>

            <div className="sm-actions">
              <a href={href} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Continue to Application <span className="btn-icon">↗</span>
              </a>
              <button type="button" className="btn-ghost" onClick={() => setOpen(false)}>Not yet</button>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
