import './globals.css';
import type { Metadata, Viewport } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { NavigationProgress } from '@/components/navigation-progress';
import { Suspense } from 'react';

export const metadata: Metadata = {
  title: 'OTD - Own The Day',
  description: 'Transform your productivity with AI-powered focus tools. Intelligent monitoring, smart distraction blocking, and actionable insights.',
  icons: {
    icon: '/OTD_logo.png',
    shortcut: '/OTD_logo.png',
    apple: '/OTD_logo.png',
  },
};

export const viewport: Viewport = {
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className="min-h-[100dvh] bg-background text-foreground antialiased"
        suppressHydrationWarning
      >
        <ThemeProvider>
          <Suspense>
            <NavigationProgress />
          </Suspense>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
