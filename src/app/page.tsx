import type { Metadata } from 'next';

import HomePageClient from '@/components/HomePageClient';

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
      url: 'https://ryansimpson.dev',
      sameAs: [
        'https://github.com/ryansmpsn',
        'https://www.linkedin.com/in/ryan-developer/'
      ]
    },
    {
      '@type': 'WebSite',
      name: 'Ryan Simpson Portfolio',
      url: 'https://ryansimpson.dev'
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
