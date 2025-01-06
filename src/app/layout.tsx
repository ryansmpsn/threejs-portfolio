import type { Metadata } from 'next';

import { centuryGothic } from '../theme/font/fonts.js';

export const metadata: Metadata = {
  title: 'Ryan Simpson | Software Engineer',
  description:
    'An experienced software engineer with a passion for building web applications.'
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
