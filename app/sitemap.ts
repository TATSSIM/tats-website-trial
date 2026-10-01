import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';

export const dynamic = 'force-static';

const routes = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' as const },
  { path: '/about', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/why-tats', priority: 0.8, changeFrequency: 'monthly' as const },
  { path: '/flight-partners', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/journey', priority: 0.7, changeFrequency: 'monthly' as const },
  { path: '/programs', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/programs/tats-120', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/programs/atpl-integrated', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/programs/fly-direct', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/programs/tapp-50', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/programs/ac-48', priority: 0.9, changeFrequency: 'weekly' as const },
  { path: '/gallery', priority: 0.6, changeFrequency: 'monthly' as const },
  { path: '/blog', priority: 0.7, changeFrequency: 'weekly' as const },
  { path: '/careers', priority: 0.5, changeFrequency: 'monthly' as const },
  { path: '/contact', priority: 0.7, changeFrequency: 'monthly' as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
