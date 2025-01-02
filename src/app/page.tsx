'use client';

import { ThemeProvider } from 'styled-components';

import { About } from '@/components/About';
import { Contact } from '@/components/Contact';
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
        <main>
          <NavBar />
          {/* <button onClick={toggleTheme}>toggle theme</button> */}
          <MainCanvas />
          <About />
          <Work />
          <Technology />
          <Contact />
        </main>
      </>
    </ThemeProvider>
  );
}
