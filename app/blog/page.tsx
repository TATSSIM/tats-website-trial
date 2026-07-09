import type { Metadata } from 'next';
import InnerPageLayout from '@/components/InnerPageLayout';
import BlogContent from './BlogContent';

export const metadata: Metadata = {
  title: 'Blog | The Aviator Training School',
  description: 'Insights on commercial pilot training, DGCA examinations, EASA pathways, and life at The Aviator Training School in Trivandrum.',
};

export default function Blog() {
  return (
    <InnerPageLayout>
      <BlogContent />
    </InnerPageLayout>
  );
}
