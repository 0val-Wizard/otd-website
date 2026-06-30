'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Download, Menu, X } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { withBasePath } from '@/lib/site-url';

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
  return (
    <div className="flex items-center gap-3">
      <div className="relative group">
        <div
          className={`${
            size === 'large' ? 'h-10 w-10' : 'h-8 w-8'
          } flex items-center justify-center rounded-xl overflow-hidden shadow-lg shadow-primary/15 transition-all duration-300 group-hover:shadow-primary/30`}
        >
          <img
            src={withBasePath('/OTD_logo.png')}
            alt="OWN THE DAY Logo"
            className="h-full w-full object-cover"
          />
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
    'download-cta download-cta--nav btn-glow h-10 rounded-full px-3.5 pr-5 text-sm font-semibold tracking-[0.01em] transition-all duration-300 hover:-translate-y-0.5';

  const renderCta = (mobile = false) => {
    const className = mobile
      ? 'download-cta btn-glow h-12 w-full rounded-xl px-4 text-sm font-semibold tracking-[0.01em] transition-all duration-300'
      : ctaClassName;

    if (ctaDownload) {
      return (
        <Button asChild size={mobile ? undefined : 'sm'} className={className}>
          <a href={ctaHref} download onClick={() => setMobileOpen(false)}>
            <span className="download-cta-icon mr-2">
              <Download className="h-3.5 w-3.5" />
            </span>
            {ctaLabel}
          </a>
        </Button>
      );
    }

    return (
      <Button asChild size={mobile ? undefined : 'sm'} className={className}>
        <Link href={ctaHref} onClick={() => setMobileOpen(false)}>
          <span className="download-cta-icon mr-2">
            <Download className="h-3.5 w-3.5" />
          </span>
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
