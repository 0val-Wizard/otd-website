'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

export function NavigationProgress() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [isNavigating, setIsNavigating] = useState(false);
  const prevPathnameRef = useRef(pathname);

  useEffect(() => {
    if (prevPathnameRef.current !== pathname) {
      setIsNavigating(true);
      setProgress(0);

      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 90) {
            clearInterval(interval);
            return 90;
          }
          return prev + Math.random() * 10 + 5;
        });
      }, 50);

      const timeout = setTimeout(() => {
        setProgress(100);
        setTimeout(() => {
          setIsNavigating(false);
          setProgress(0);
        }, 150);
      }, 300);

      prevPathnameRef.current = pathname;

      return () => {
        clearInterval(interval);
        clearTimeout(timeout);
      };
    }
  }, [pathname, searchParams]);

  if (!isNavigating) return null;

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1 bg-transparent pointer-events-none">
      <div
        className="h-full bg-primary transition-all duration-150 ease-out"
        style={{ width: `${Math.min(progress, 100)}%` }}
      />
    </div>
  );
}
