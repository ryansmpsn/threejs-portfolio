import type { Metadata } from 'next';

import HomePageClient from '@/components/HomePageClient';
import { SITE_NAME, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Application Engineer Portfolio',
  description:
    'Ryan Simpson is an Application Engineer focused on modern web applications, performance, and user-centric product delivery.',
  alternates: {
    canonical: '/'
  }
};

const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      name: 'Ryan Simpson',
      jobTitle: 'Application Engineer',
      url: SITE_URL,
      sameAs: [
        'https://github.com/ryansmpsn',
        'https://www.linkedin.com/in/ryan-developer/'
      ]
    },
    {
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL
    },
    {
      '@type': 'SoftwareSourceCode',
      name: 'Vilano',
      codeRepository: 'https://github.com/ryansmpsn/Vilano-WebApp'
    }
  ]
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <HomePageClient />
    </>
  );
}
