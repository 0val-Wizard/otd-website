'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import MainPage from './main-page/MainPage';

// Header Logo component
function HeaderLogo() {
  return (
    <div className="flex items-center">
      {/* Sun icon */}
      <div className="relative">
        <svg 
          width="32" 
          height="32" 
          viewBox="0 0 48 48" 
          className="text-primary"
        >
          <g stroke="currentColor" strokeWidth="2" fill="none">
            <line x1="24" y1="8" x2="24" y2="2" />
            <line x1="32" y1="12" x2="36" y2="8" />
            <line x1="40" y1="24" x2="46" y2="24" />
            <line x1="32" y1="36" x2="36" y2="40" />
            <line x1="24" y1="40" x2="24" y2="46" />
            <line x1="16" y1="36" x2="12" y2="40" />
            <line x1="8" y1="24" x2="2" y2="24" />
            <line x1="16" y1="12" x2="12" y2="8" />
          </g>
          <circle cx="24" cy="24" r="6" fill="currentColor" />
        </svg>
      </div>
      
      {/* Text */}
      <div className="ml-3">
        <h1 className="text-xl font-bold text-foreground tracking-wide">
          OWN THE DAY
        </h1>
        <p className="text-xs text-muted-foreground font-medium tracking-wide -mt-1">
          PRODUCTIVITY
        </p>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" prefetch={true} className="flex items-center">
            <HeaderLogo />
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/#features"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              prefetch={true}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors relative after:absolute after:-bottom-2 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all hover:after:w-full"
            >
              Pricing
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link
              href="/sign-in"
              prefetch={true}
              className="hidden sm:inline-flex text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Sign In
            </Link>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-4 py-2 rounded-full shadow-sm"
            >
              <Link href="/sign-up" prefetch={true}>Sign Up</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function LandingPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />
      <div className="pt-16">
        <MainPage />
      </div>
    </section>
  );
}
