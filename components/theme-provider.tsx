'use client';

import { useEffect } from 'react';

function applyTheme(theme: 'light' | 'dark' | 'system') {
  const root = document.documentElement;
  root.classList.remove('dark');

  if (theme === 'dark') {
    root.classList.add('dark');
    return;
  }

  if (theme === 'system') {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (prefersDark) root.classList.add('dark');
  }
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = (() => {
      try {
        return window.localStorage.getItem('otd.theme');
      } catch {
        return null;
      }
    })();

    const theme =
      stored === 'light' || stored === 'dark' || stored === 'system'
        ? stored
        : 'system';

    applyTheme(theme);

    if (theme === 'system') {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const handleChange = () => applyTheme('system');
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }
  }, []);

  return <>{children}</>;
}
