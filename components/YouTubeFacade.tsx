'use client';

interface Props {
  ytId: string;
  title: string;
  thumb?: string;
}

export default function YouTubeFacade({ ytId, title, thumb }: Props) {
  const thumbUrl = thumb || `https://img.youtube.com/vi/${ytId}/hqdefault.jpg`;

  return (
    <div style={{ position: 'relative', height: 210, overflow: 'hidden', cursor: 'pointer' }}>
      {/* Thumbnail */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={thumbUrl}
        alt={title}
        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        loading="lazy"
      />
      {/* Dark overlay */}
      <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,.38)' }} />
      {/* Play button */}
      <a
        href={`https://www.youtube.com/watch?v=${ytId}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          textDecoration: 'none',
        }}
        aria-label={`Watch ${title} on YouTube`}
      >
        <div
          style={{
            width: 58, height: 58, borderRadius: '50%',
            background: 'rgba(212,175,55,.92)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'transform .3s, box-shadow .3s',
            boxShadow: '0 4px 18px rgba(212,175,55,.4)',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.12)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 6px 26px rgba(212,175,55,.6)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLElement).style.transform = '';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 18px rgba(212,175,55,.4)';
          }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="#0a0e14" style={{ marginLeft: 3 }}>
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </a>
    </div>
  );
}
