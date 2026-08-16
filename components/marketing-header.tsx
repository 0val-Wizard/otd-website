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
  { href: '/#features', label: 'What OTD does' },
  { href: '/#project-tracking', label: 'Projects' },
  { href: '/#study-habits', label: 'Study habits' },
  { href: '/download', label: 'Download', page: 'download', prefetch: true },
];

export function OTDLogo({ size = 'default' }: { size?: 'default' | 'large' }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative group">
        <div
          className={`${
            size === 'large' ? 'h-10 w-10' : 'h-8 w-8'
          } flex items-center justify-center overflow-hidden rounded-[0.7rem] bg-black shadow-[0_10px_30px_-18px_rgba(0,0,0,0.85)] ring-1 ring-black/10 transition-transform duration-300 group-hover:scale-[1.02]`}
        >
          <img
            src={withBasePath('/OTD_logo.png')}
            alt="OWN THE DAY Logo"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <span
        className={`font-bold text-foreground ${
          size === 'large' ? 'type-card-title-sm' : 'type-panel-title'
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
    'download-cta download-cta--nav h-10 rounded-full px-3.5 pr-5 type-body-sm font-semibold transition-all duration-300 hover:-translate-y-0.5';

  const renderCta = (mobile = false) => {
    const className = mobile
      ? 'download-cta h-12 w-full rounded-full px-4 type-body-sm font-semibold transition-all duration-300'
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
        className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 transition-all duration-300 sm:px-6"
      >
        <div
          className={`mx-auto flex h-14 w-full max-w-[58rem] items-center justify-between rounded-[1.25rem] px-2.5 pl-3.5 transition-all duration-300 sm:px-3 sm:pl-3.5 ${
            alwaysSolid || scrolled
              ? 'bg-white/86 shadow-[0_18px_60px_-42px_rgba(0,0,0,0.7)] ring-1 ring-black/[0.07] backdrop-blur-2xl'
              : 'bg-white/72 shadow-[0_14px_54px_-46px_rgba(0,0,0,0.8)] ring-1 ring-black/[0.05] backdrop-blur-xl'
          }`}
        >
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
                  className={`relative rounded-full px-3.5 py-2 type-nav font-semibold transition-all duration-200 ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-muted-foreground hover:bg-black/[0.06] hover:text-foreground'
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
              className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-muted-foreground transition-all duration-200 hover:bg-black/[0.06] hover:text-foreground md:hidden"
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
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
          <div className="absolute left-4 right-4 top-[5rem] space-y-1 rounded-[1.5rem] bg-white/95 p-3 shadow-[0_24px_70px_-38px_rgba(0,0,0,0.75)] ring-1 ring-black/[0.08] backdrop-blur-2xl">
            {navLinks.map((link) => {
              const isActive = link.page === activePage;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={link.prefetch ?? false}
                  onClick={() => setMobileOpen(false)}
                  className={`block rounded-full px-4 py-3 type-body font-semibold transition-colors ${
                    isActive
                      ? 'bg-black text-white'
                      : 'text-foreground/80 hover:bg-black/[0.06] hover:text-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="px-1 pt-3">{renderCta(true)}</div>
          </div>
        </div>
      )}
    </>
  );
}
