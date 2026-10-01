// Central SEO constants and JSON-LD (schema.org) builders.
// Keeping NAP (Name/Address/Phone) and canonical URL logic in one place
// avoids silent drift between pages and keeps structured data truthful —
// Google (and AI answer engines) penalize markup that doesn't match visible content.

export const SITE_URL = 'https://preview.theaviatortraining.com';
export const ORG_NAME = 'The Aviator Training School';
export const ORG_SHORT_NAME = 'TATS';

export const NAP = {
  streetAddress: '3rd Floor, Mall of Travancore, Opposite TRV International Airport',
  addressLocality: 'Thiruvananthapuram',
  addressRegion: 'Kerala',
  postalCode: '695024',
  addressCountry: 'IN',
  phones: ['+91-62829-95979', '+91-62825-85548'],
  email: 'info@theaviatortraining.com',
};

export const SOCIAL_LINKS = [
  'https://www.instagram.com/theaviatortrainingschool/',
  'https://www.youtube.com/@theaviatortrainingschool',
];

export function canonical(path: string): string {
  const clean = path === '/' ? '' : path.replace(/\/$/, '');
  return `${SITE_URL}${clean}`;
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: canonical(item.path),
    })),
  };
}

export function courseSchema(opts: {
  name: string;
  description: string;
  path: string;
  timeToComplete?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: opts.name,
    description: opts.description,
    url: canonical(opts.path),
    provider: {
      '@type': 'EducationalOrganization',
      name: ORG_NAME,
      sameAs: SITE_URL,
    },
    hasCourseInstance: {
      '@type': 'CourseInstance',
      courseMode: 'In Person',
      location: {
        '@type': 'Place',
        name: `${ORG_NAME}, Trivandrum`,
        address: {
          '@type': 'PostalAddress',
          streetAddress: NAP.streetAddress,
          addressLocality: NAP.addressLocality,
          addressRegion: NAP.addressRegion,
          postalCode: NAP.postalCode,
          addressCountry: NAP.addressCountry,
        },
      },
      ...(opts.timeToComplete ? { courseWorkload: opts.timeToComplete } : {}),
    },
  };
}

export function videoSchema(opts: {
  name: string;
  description: string;
  thumbnailUrl: string;
  contentUrl: string;
  uploadDate: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: opts.name,
    description: opts.description,
    thumbnailUrl: opts.thumbnailUrl,
    contentUrl: opts.contentUrl,
    uploadDate: opts.uploadDate,
    publisher: {
      '@type': 'EducationalOrganization',
      name: ORG_NAME,
    },
  };
}

export function organizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    '@id': `${SITE_URL}/#organization`,
    name: ORG_NAME,
    alternateName: ORG_SHORT_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo-full.png`,
    image: `${SITE_URL}/images/og-image.jpg`,
    description:
      'Evidence-first aviation training institute in Trivandrum, Kerala, offering EASA CPL and ATPL pathways via Goldwings Flight Academy, Poland, and a PPL pathway in Serbia.',
    foundingDate: '2023-11',
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    telephone: NAP.phones[0],
    email: NAP.email,
    sameAs: SOCIAL_LINKS,
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
  };
}

export function localBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#localbusiness`,
    name: ORG_NAME,
    url: SITE_URL,
    image: `${SITE_URL}/images/og-image.jpg`,
    telephone: NAP.phones[0],
    email: NAP.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: NAP.streetAddress,
      addressLocality: NAP.addressLocality,
      addressRegion: NAP.addressRegion,
      postalCode: NAP.postalCode,
      addressCountry: NAP.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 8.4875,
      longitude: 76.9199,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: SOCIAL_LINKS,
  };
}
