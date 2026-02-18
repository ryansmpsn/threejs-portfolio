import type { Metadata } from 'next';

import { SITE_NAME, SITE_URL } from '@/lib/site';

import { centuryGothic } from '../theme/font/fonts.js';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Ryan Simpson | Application Engineer',
    template: '%s | Ryan Simpson'
  },
  description:
    'Application Engineer focused on performant web apps, product delivery, and modern frontend systems.',
  alternates: {
    canonical: '/'
  },
  openGraph: {
    title: 'Ryan Simpson | Application Engineer',
    description:
      'Application Engineer focused on performant web apps, product delivery, and modern frontend systems.',
    url: SITE_URL,
    siteName: SITE_NAME,
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ryan Simpson | Application Engineer',
    description:
      'Application Engineer focused on performant web apps, product delivery, and modern frontend systems.'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={centuryGothic.className}>{children}</body>
    </html>
  );
}
