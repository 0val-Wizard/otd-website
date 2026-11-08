'use client';

import { useEffect, useState, useCallback } from 'react';
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
  sectionId?: string;
  page?: ActivePage;
  prefetch?: boolean;
}> = [
  { href: '/#features', label: 'What OTD does', sectionId: 'features' },
  { href: '/#project-tracking', label: 'Projects', sectionId: 'project-tracking' },
  { href: '/#study-habits', label: 'Study habits', sectionId: 'study-habits' },
  { href: '/#how-it-works', label: 'How it works', sectionId: 'how-it-works' },
];

export function OTDLogo({ size = 'default' }: { size?: 'default' | 'large' }) {
  return (
    <div className="flex items-center gap-2.5">
      <div className="relative group">
        <div
          className={`${
            size === 'large' ? 'h-10 w-10' : 'h-8 w-8'
          } flex items-center justify-center overflow-hidden rounded-[0.7rem] bg-black shadow-[0_4px_16px_-4px_rgba(0,0,0,0.5)] ring-1 ring-black/10 transition-transform duration-300 group-hover:scale-[1.03]`}
        >
          <img
            src={withBasePath('/OTD_logo.png')}
            alt="OWN THE DAY Logo"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <span
        className={`font-bold tracking-tight text-foreground ${
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
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Track active section on home page
  useEffect(() => {
    if (activePage !== 'home') {
      setActiveSection('');
      return;
    }

    const sectionIds = ['features', 'project-tracking', 'study-habits', 'how-it-works'];

    const handleScroll = () => {
      // If near the top, reset section
      if (window.scrollY < 260) {
        setActiveSection('');
        return;
      }

      const scrollPos = window.scrollY + 220;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPos >= top) {
            setActiveSection(sectionIds[i]);
            return;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activePage]);

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

  const handleNavClick = useCallback(
    (
      e: React.MouseEvent<HTMLAnchorElement>,
      link: (typeof navLinks)[0],
      isMobile = false
    ) => {
      if (isMobile) setMobileOpen(false);

      if (
        link.sectionId &&
        (activePage === 'home' || (typeof window !== 'undefined' && window.location.pathname === '/'))
      ) {
        const el = document.getElementById(link.sectionId);
        if (el) {
          e.preventDefault();
          const yOffset = -92;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
          window.history.pushState(null, '', `#${link.sectionId}`);
          setActiveSection(link.sectionId);
        }
      }
    },
    [activePage]
  );

  const ctaClassName =
    'download-cta download-cta--nav h-9.5 rounded-full px-4 pr-5 type-body-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 shadow-sm';

  const renderCta = (mobile = false) => {
    const className = mobile
      ? 'download-cta h-12 w-full rounded-full px-4 type-body-sm font-semibold transition-all duration-300'
      : ctaClassName;

    const content = (
      <>
        <span className="download-cta-icon mr-2">
          <Download className="h-3.5 w-3.5" />
        </span>
        {ctaLabel}
      </>
    );

    if (ctaDownload) {
      return (
        <Button asChild size={mobile ? undefined : 'sm'} className={className}>
          <a href={ctaHref} download onClick={() => setMobileOpen(false)}>
            {content}
          </a>
        </Button>
      );
    }

    return (
      <Button asChild size={mobile ? undefined : 'sm'} className={className}>
        <Link href={ctaHref} onClick={() => setMobileOpen(false)}>
          {content}
        </Link>
      </Button>
    );
  };

  return (
    <>
      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-3.5 transition-all duration-300 sm:px-6">
        <div
          className={`mx-auto flex h-14 w-full max-w-[56rem] items-center justify-between rounded-full px-3 pl-3.5 transition-all duration-300 sm:px-3 sm:pl-4 ${
            alwaysSolid || scrolled
              ? 'bg-white/90 shadow-[0_16px_40px_-14px_rgba(0,0,0,0.14),0_2px_6px_rgba(0,0,0,0.03)] ring-1 ring-black/[0.08] backdrop-blur-2xl'
              : 'bg-white/78 shadow-[0_10px_32px_-12px_rgba(0,0,0,0.09),0_1px_3px_rgba(0,0,0,0.02)] ring-1 ring-black/[0.06] backdrop-blur-xl'
          }`}
        >
          <Link href="/" className="shrink-0 transition-opacity hover:opacity-90">
            <OTDLogo />
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const isActive = link.page
                ? link.page === activePage
                : activePage === 'home' && activeSection === link.sectionId;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={link.prefetch ?? false}
                  onClick={(e) => handleNavClick(e, link)}
                  className={`relative rounded-full px-3.5 py-1.5 text-[13px] transition-all duration-200 ${
                    isActive
                      ? 'bg-black/10 text-foreground font-semibold shadow-[inset_0_1px_1px_rgba(0,0,0,0.05)]'
                      : 'text-neutral-600 hover:bg-black/[0.05] hover:text-foreground font-medium'
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
            className="absolute inset-0 bg-background/50 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setMobileOpen(false)}
          />
          <div className="absolute left-4 right-4 top-[5rem] space-y-1 rounded-[1.75rem] bg-white/95 p-3 shadow-[0_24px_70px_-38px_rgba(0,0,0,0.75)] ring-1 ring-black/[0.08] backdrop-blur-2xl animate-in zoom-in-95 duration-200">
            {navLinks.map((link) => {
              const isActive = link.page
                ? link.page === activePage
                : activePage === 'home' && activeSection === link.sectionId;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  prefetch={link.prefetch ?? false}
                  onClick={(e) => handleNavClick(e, link, true)}
                  className={`block rounded-full px-4 py-3 type-body font-semibold transition-colors ${
                    isActive
                      ? 'bg-black text-white shadow-xs'
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
