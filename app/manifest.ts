import type { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'The Aviator Training School',
    short_name: 'TATS',
    description: 'Evidence-first aviation training in Trivandrum, Kerala.',
    start_url: '/',
    display: 'standalone',
    background_color: '#05080f',
    theme_color: '#05080f',
    icons: [
      { src: '/images/icon-192.png', sizes: '192x192', type: 'image/png' },
      { src: '/images/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
  };
}
