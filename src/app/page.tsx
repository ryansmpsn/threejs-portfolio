'use client';

import { ThemeProvider } from 'styled-components';

import { MainCanvas } from '@/components/MainCanvas';
import { useTheme } from '@/hooks/useTheme';

import { GlobalStyles } from '../theme/globalStyles';

export default function Home() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <main>
          <MainCanvas />
        </main>
      </>
    </ThemeProvider>
  );
}
