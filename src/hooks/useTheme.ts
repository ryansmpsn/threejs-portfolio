import { useEffect, useState } from 'react';

import { darkTheme, lightTheme } from '../theme/Themes';

export const useTheme = () => {
  const [theme, setTheme] = useState(lightTheme);

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');
    if (localTheme) {
      if (localTheme === 'dark') {
        setTheme(darkTheme);
        return;
      }

      setTheme(lightTheme);
      return;
    }

    const prefersDarkTheme = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefersDarkTheme.matches) {
      setTheme(darkTheme);
    }
  }, []);

  const toggleTheme = () => {
    if (theme === lightTheme) {
      localStorage.setItem('theme', 'dark');
      setTheme(darkTheme);

      return;
    }

    localStorage.setItem('theme', 'light');
    setTheme(lightTheme);
  };

  return { theme, toggleTheme };
};
