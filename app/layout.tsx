import './globals.css';
import type { Metadata, Viewport } from 'next';
import localFont from 'next/font/local';
import { NavigationProgress } from '@/components/navigation-progress';
import { SubtleMotion } from '@/components/subtle-motion';
import { Suspense } from 'react';
import { withBasePath } from '@/lib/site-url';

const geistSans = localFont({
  src: './fonts/geist-latin.woff2',
  display: 'swap',
  variable: '--font-geist-sans',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'OTD - Own The Day',
  description: 'OTD helps uni and poly students track project progress, catch distractions, and understand study habits with private desktop data.',
  icons: {
    icon: withBasePath('/OTD_logo.png'),
    shortcut: withBasePath('/OTD_logo.png'),
    apple: withBasePath('/OTD_logo.png'),
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.variable} suppressHydrationWarning>
      <body
        className="min-h-[100dvh] bg-background font-sans text-foreground antialiased"
        suppressHydrationWarning
      >
        <Suspense>
          <NavigationProgress />
        </Suspense>
        <SubtleMotion />
        {children}
      </body>
    </html>
  );
}
