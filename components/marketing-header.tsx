'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Download, Menu, Moon, Sun, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { useTheme } from '@/components/theme-provider';

type ActivePage = 'home' | 'pricing' | 'download';

type MarketingHeaderProps = {
  activePage?: ActivePage;
  ctaHref?: string;
  ctaLabel?: string;
  ctaDownload?: boolean;
  alwaysSolid?: boolean;
};

const navLinks: Array<{
  href: string;
  label: string;
  page?: ActivePage;
  prefetch?: boolean;
}> = [
  { href: '/#features', label: 'Features' },
  { href: '/#how-it-works', label: 'How It Works' },
  { href: '/pricing', label: 'Pricing', page: 'pricing', prefetch: true },
  { href: '/download', label: 'Download', page: 'download', prefetch: true },
];

export function OTDLogo({ size = 'default' }: { size?: 'default' | 'large' }) {
  const iconDim = size === 'large' ? 22 : 18;

  return (
    <div className="flex items-center gap-2.5">
      <div className="relative group">
        <div
          className={`${
            size === 'large' ? 'h-11 w-11' : 'h-9 w-9'
          } flex items-center justify-center rounded-xl bg-gradient-to-br from-primary to-violet-500 shadow-lg shadow-primary/15 transition-all duration-300 group-hover:shadow-primary/30`}
        >
          <svg
            width={iconDim}
            height={iconDim}
            viewBox="0 0 48 48"
            className="relative z-10 text-white"
          >
            <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9">
              <line x1="24" y1="6" x2="24" y2="2" />
              <line x1="35" y1="9" x2="38" y2="6" />
              <line x1="42" y1="24" x2="46" y2="24" />
              <line x1="35" y1="39" x2="38" y2="42" />
              <line x1="24" y1="42" x2="24" y2="46" />
              <line x1="13" y1="39" x2="10" y2="42" />
              <line x1="6" y1="24" x2="2" y2="24" />
              <line x1="13" y1="9" x2="10" y2="6" />
            </g>
            <circle cx="24" cy="24" r="8" fill="currentColor" />
          </svg>
        </div>
      </div>
      <span
        className={`font-bold tracking-[-0.02em] text-foreground ${
          size === 'large' ? 'text-xl' : 'text-lg'
        }`}
      >
        OWN THE DAY
      </span>
    </div>
  );
}

function ThemeToggle({ mobile = false }: { mobile?: boolean }) {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div className={mobile ? 'h-11 w-full' : 'h-9 w-[132px]'} />;
  }

  const selectedTheme = theme === 'system' ? resolvedTheme : theme;
  const wrapperClassName = mobile
    ? 'grid w-full grid-cols-2 rounded-xl border border-border/60 bg-muted/30 p-1'
    : 'grid grid-cols-2 rounded-xl border border-border/60 bg-background/70 p-1 shadow-sm backdrop-blur-sm';
  const buttonClassName = (isActive: boolean) =>
    `inline-flex items-center justify-center gap-1.5 rounded-lg px-2.5 py-2 text-sm font-medium transition-all duration-200 sm:gap-2 sm:px-3 ${
      isActive
        ? 'bg-foreground text-background shadow-sm'
        : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
    }`;

  return (
    <div className={wrapperClassName} aria-label="Theme selector">
      <button
        onClick={() => setTheme('light')}
        className={buttonClassName(selectedTheme === 'light')}
        aria-pressed={selectedTheme === 'light'}
        title="Use light mode"
      >
        <Sun className="h-4 w-4" />
        <span className={mobile ? '' : 'hidden sm:inline'}>Light</span>
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={buttonClassName(selectedTheme === 'dark')}
        aria-pressed={selectedTheme === 'dark'}
        title="Use dark mode"
      >
        <Moon className="h-4 w-4" />
        <span className={mobile ? '' : 'hidden sm:inline'}>Dark</span>
      </button>
    </div>
  );
}

export function MarketingHeader({
  activePage = 'home',
  ctaHref = '/download',
  ctaLabel = 'Download',
  ctaDownload = false,
  alwaysSolid = false,
}: MarketingHeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener('resize', close);
    return () => window.removeEventListener('resize', close);
  }, []);

  const ctaClassName =
    'btn-glow h-9 rounded-full border-0 bg-gradient-to-r from-primary to-indigo-400 px-5 text-sm font-semibold text-white shadow-md shadow-primary/15 transition-all duration-300 hover:shadow-lg hover:shadow-primary/25';

  const renderCta = (mobile = false) => {
    const className = mobile
      ? 'w-full rounded-xl border-0 bg-gradient-to-r from-primary to-indigo-400 text-white shadow-lg shadow-primary/15'
      : ctaClassName;

    if (ctaDownload) {
      return (
        <Button asChild size={mobile ? undefined : 'sm'} className={className}>
          <a href={ctaHref} download onClick={() => setMobileOpen(false)}>
            <Download className="mr-2 h-4 w-4" />
            {ctaLabel}
          </a>
        </Button>
      );
    }

    return (
      <Button asChild size={mobile ? undefined : 'sm'} className={className}>
        <Link href={ctaHref} onClick={() => setMobileOpen(false)}>
          <Download className="mr-2 h-4 w-4" />
          {ctaLabel}
        </Link>
      </Button>
    );
  };

  return (
    <>
      <header
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
          alwaysSolid || scrolled
            ? 'border-b border-border/40 bg-background/70 shadow-[0_1px_3px_rgba(0,0,0,0.08)] backdrop-blur-2xl'
            : 'bg-transparent'
        }`}
      >
        <div className="mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link href="/" className="shrink-0">
            <OTDLogo />
          </Link>

          <nav className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const isActive = link.page === activePage;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={link.prefetch ?? false}
                  className={`relative rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-muted/40 text-foreground'
                      : 'text-muted-foreground hover:bg-muted/40 hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <div className="hidden sm:block">{renderCta()}</div>
            <button
              onClick={() => setMobileOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-all duration-200 hover:bg-muted/50 hover:text-foreground md:hidden"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-background/50 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-0 right-0 top-[4.25rem] space-y-1 border-b border-border/40 bg-background/95 p-5 shadow-2xl backdrop-blur-2xl">
            <div className="px-4 pb-3">
              <ThemeToggle mobile />
            </div>
            {navLinks.map((link) => {
              const isActive = link.page === activePage;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={link.prefetch ?? false}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-muted/50 text-foreground'
                      : 'text-foreground/80 hover:bg-muted/40 hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="px-4 pt-4">{renderCta(true)}</div>
          </div>
        </div>
      )}
    </>
  );
}
