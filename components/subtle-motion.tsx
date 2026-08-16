'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export function SubtleMotion() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    let cleanupTicker: (() => void) | undefined;
    let cleanupContext: (() => void) | undefined;
    let cancelled = false;

    async function startMotion() {
      const [{ default: Lenis }, { gsap }, { ScrollTrigger }] = await Promise.all([
        import('lenis'),
        import('gsap'),
        import('gsap/ScrollTrigger'),
      ]);

      if (cancelled) return;

      gsap.registerPlugin(ScrollTrigger);

      const lenis = new Lenis({
        duration: 0.85,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        smoothWheel: true,
      });

      lenis.on('scroll', ScrollTrigger.update);

      const tick = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tick);
      gsap.ticker.lagSmoothing(0);
      cleanupTicker = () => {
        gsap.ticker.remove(tick);
        lenis.destroy();
      };

      const context = gsap.context(() => {
        gsap.from('[data-hero-item]', {
          y: 14,
          autoAlpha: 0,
          duration: 0.28,
          stagger: 0.04,
          ease: 'power2.out',
          clearProps: 'transform,opacity,visibility',
        });

        gsap.to('[data-scan-line]', {
          xPercent: 220,
          duration: 3.4,
          repeat: -1,
          ease: 'none',
        });

        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            y: 16,
            autoAlpha: 0,
            duration: 0.26,
            ease: 'power2.out',
            clearProps: 'transform,opacity,visibility',
            scrollTrigger: {
              trigger: element,
              start: 'top 88%',
              once: true,
            },
          });
        });
      });

      cleanupContext = () => context.revert();
      ScrollTrigger.refresh();
    }

    startMotion();

    return () => {
      cancelled = true;
      cleanupContext?.();
      cleanupTicker?.();
    };
  }, [pathname]);

  return null;
}
