'use client';

import { Suspense } from 'react';
import { ThemeProvider } from 'styled-components';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Landing } from '@/components/Landing';
import { MainCanvas } from '@/components/MainCanvas';
import { NavBar } from '@/components/NavBar';
import { Technology } from '@/components/Technology';
import { Work } from '@/components/Work';
import { useTheme } from '@/hooks/useTheme';

import { GlobalStyles } from '../theme/globalStyles';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Suspense fallback={<div>loading...</div>}>
          <MainCanvas />
        </Suspense>
        <main>
          {/* <button onClick={toggleTheme}>toggle theme</button> */}
          <NavBar />
          <Landing />
          <About />
          <Work />
          <Technology />
          <Contact />
          <Footer />
        </main>
      </>
    </ThemeProvider>
  );
}
