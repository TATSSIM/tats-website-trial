import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';
import BlogContent from './BlogContent';
import JsonLd from '@/components/JsonLd';
import { breadcrumbSchema } from '@/lib/seo';

export const metadata: Metadata = {
  title: 'Blog | The Aviator Training School',
  description: 'Insights on commercial pilot training, DGCA examinations, EASA pathways, and life at The Aviator Training School in Trivandrum.',
  alternates: { canonical: '/blog' },
};

export default function Blog() {
  return (
    <InnerPageLayout>
      <JsonLd data={breadcrumbSchema([{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }])} />
      <BlogContent />
    </InnerPageLayout>
  );
}
