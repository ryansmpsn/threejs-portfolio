'use client';

import dynamic from 'next/dynamic';
import { ThemeProvider } from 'styled-components';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import Landing from '@/components/Landing';
import { NavBar } from '@/components/NavBar';
import { Technology } from '@/components/Technology';
import { Work } from '@/components/Work';
import { useTheme } from '@/hooks/useTheme';
import StyledComponentsRegistry from '@/lib/registry';

import { GlobalStyles } from '../theme/globalStyles';

const MainCanvas = dynamic(
  () => import('@/components/MainCanvas').then((mod) => mod.MainCanvas),
  { ssr: false, loading: () => null }
);

export default function HomePageClient() {
  const { theme } = useTheme();

  return (
    <StyledComponentsRegistry>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <MainCanvas />
        <header>
          <NavBar />
        </header>
        <main id="main-content">
          <Landing />
          <About />
          <Work />
          <Technology />
          <Contact />
        </main>
        <Footer />
      </ThemeProvider>
    </StyledComponentsRegistry>
  );
}
