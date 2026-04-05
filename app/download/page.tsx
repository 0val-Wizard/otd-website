'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Download,
  CheckCircle,
  Shield,
  Zap,
  Brain,
  Clock,
  HardDrive,
  Monitor,
  ArrowLeft,
  ChevronRight,
} from 'lucide-react';

const DMG_DOWNLOAD_PATH = '/downloads/OTD.dmg';

function HeaderLogo() {
  return (
    <div className="flex items-center">
      <div className="relative">
        <svg width="32" height="32" viewBox="0 0 48 48" className="text-primary">
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
      <div className="ml-3">
        <h1 className="text-xl font-bold text-foreground tracking-wide">OWN THE DAY</h1>
        <p className="text-xs text-muted-foreground font-medium tracking-wide -mt-1">PRODUCTIVITY</p>
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
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="/#how-it-works"
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="/pricing"
              prefetch={true}
              className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
            <Link
              href="/download"
              prefetch={true}
              className="text-sm font-medium text-primary transition-colors"
            >
              Download
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
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm px-5 py-2 rounded-full shadow-sm"
            >
              <a href={DMG_DOWNLOAD_PATH} download>
                <Download className="mr-1.5 h-4 w-4" />
                Download
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}

function AppleIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}

function WindowsIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M3 12V6.75l6-1.32v6.48L3 12zm17-9v8.75l-10 .15V5.21L20 3zM3 13l6 .09v6.81l-6-1.15V13zm7 .25l10 .15V21l-10-1.91V13.25z" />
    </svg>
  );
}

const systemRequirements = [
  { label: 'Operating System', value: 'macOS 12 (Monterey) or later' },
  { label: 'Processor', value: 'Apple Silicon or Intel' },
  { label: 'RAM', value: '4 GB minimum' },
  { label: 'Disk Space', value: '250 MB available' },
  { label: 'File Format', value: '.dmg (Apple Disk Image)' },
];

const features = [
  { icon: Shield, label: 'Privacy-first', description: 'All data stays on your device by default' },
  { icon: Zap, label: 'Lightweight', description: 'Minimal CPU & memory footprint' },
  { icon: Brain, label: 'AI-Powered', description: 'Smart insights from local processing' },
  { icon: Clock, label: 'Always Running', description: 'Quiet background activity monitoring' },
];

export default function DownloadPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <Header />

      <div className="pt-16">
        <div className="min-h-screen bg-background">
          {/* Hero */}
          <section className="relative pt-20 pb-16 overflow-hidden">
            <div className="absolute inset-0 gradient-bg-warm" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
            <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-primary/20 to-orange-500/10 rounded-full blur-3xl blob-animate opacity-60" />
            <div className="absolute top-40 right-[5%] w-80 h-80 bg-gradient-to-br from-chart-4/15 to-chart-5/10 rounded-full blur-3xl blob-animate opacity-50" style={{ animationDelay: '-2s' }} />

            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-6">
                <Link
                  href="/"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to home
                </Link>

                <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20 text-sm font-medium block w-fit mx-auto">
                  Download OTD
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
                  Get OTD for
                  <span className="block gradient-text py-2">your desktop</span>
                </h1>
                <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  A native desktop app that runs quietly in the background, tracking your focus and
                  helping you stay productive all day long.
                </p>
              </div>
            </div>
          </section>

          {/* OS Cards */}
          <section className="relative -mt-4 pb-24">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* macOS Card */}
                <Card className="relative overflow-hidden border-border/50 hover:border-primary/30 transition-all duration-300 card-hover">
                  <div className="h-1.5 bg-gradient-to-r from-primary via-orange-500 to-amber-500" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary via-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                        <AppleIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">macOS</h2>
                        <p className="text-sm text-muted-foreground">Version 1.0 &middot; .dmg installer</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <Badge className="bg-chart-3/10 text-chart-3 border-chart-3/20 text-xs font-semibold">
                        Available Now
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Apple Silicon &amp; Intel
                      </Badge>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="w-full h-14 text-base font-semibold bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:opacity-90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 mb-6"
                    >
                      <a href={DMG_DOWNLOAD_PATH} download>
                        <Download className="mr-2 h-5 w-5" />
                        Download for macOS
                      </a>
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Requires macOS 12 (Monterey) or later
                    </p>
                  </CardContent>
                </Card>

                {/* Windows Card */}
                <Card className="relative overflow-hidden border-border/50 opacity-80">
                  <div className="h-1.5 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-400" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 via-blue-400 to-cyan-400 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30">
                        <WindowsIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold text-foreground">Windows</h2>
                        <p className="text-sm text-muted-foreground">.exe installer</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mb-6">
                      <Badge className="bg-amber-500/10 text-amber-600 border-amber-500/20 text-xs font-semibold">
                        Coming Soon
                      </Badge>
                    </div>

                    <Button
                      size="lg"
                      disabled
                      className="w-full h-14 text-base font-semibold mb-6"
                    >
                      <Monitor className="mr-2 h-5 w-5" />
                      Windows Coming Soon
                    </Button>

                    <p className="text-xs text-muted-foreground text-center">
                      Windows 10 / 11 support is on the roadmap
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Installation Guide */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-muted/30" />
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
                  Install in <span className="gradient-text">3 easy steps</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-xl mx-auto">
                  Getting started with OTD takes less than a minute.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    step: '1',
                    title: 'Download',
                    description: 'Click the download button above to get the OTD.dmg file.',
                  },
                  {
                    step: '2',
                    title: 'Open the .dmg',
                    description: 'Double-click the downloaded file and drag OTD into your Applications folder.',
                  },
                  {
                    step: '3',
                    title: 'Launch & Sign In',
                    description: 'Open OTD from Applications, sign in with your account, and you\'re all set.',
                  },
                ].map((item) => (
                  <div key={item.step} className="relative text-center">
                    <div className="text-[80px] font-bold text-primary/5 absolute -top-4 left-1/2 -translate-x-1/2 leading-none select-none">
                      {item.step}
                    </div>
                    <div className="relative pt-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center mx-auto mb-5 shadow-lg">
                        <span className="text-white font-bold text-lg">{item.step}</span>
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground leading-relaxed max-w-xs mx-auto">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* App Details: System Requirements + Features */}
          <section className="py-20">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* System Requirements */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                      <HardDrive className="w-5 h-5 text-primary" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">System Requirements</h2>
                  </div>

                  <Card className="border-border/50">
                    <CardContent className="p-0">
                      {systemRequirements.map((req, index) => (
                        <div
                          key={req.label}
                          className={`flex items-center justify-between px-6 py-4 ${
                            index < systemRequirements.length - 1 ? 'border-b border-border/50' : ''
                          }`}
                        >
                          <span className="text-sm font-medium text-muted-foreground">{req.label}</span>
                          <span className="text-sm font-semibold text-foreground">{req.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* What's Included */}
                <div>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-10 h-10 rounded-xl bg-chart-3/10 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-chart-3" />
                    </div>
                    <h2 className="text-2xl font-bold text-foreground">What&apos;s Included</h2>
                  </div>

                  <div className="grid gap-4">
                    {features.map((feature) => (
                      <Card key={feature.label} className="border-border/50 hover:border-primary/20 transition-colors duration-200">
                        <CardContent className="p-5 flex items-start gap-4">
                          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/10 to-orange-500/10 flex items-center justify-center shrink-0 mt-0.5">
                            <feature.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground mb-1">{feature.label}</h3>
                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Bottom CTA */}
          <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-chart-4/20 rounded-full blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl sm:text-4xl font-bold text-background mb-4">
                Ready to own your day?
              </h2>
              <p className="text-lg text-background/70 mb-8 max-w-xl mx-auto">
                Download OTD now and start transforming your productivity in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="h-14 px-10 text-base font-semibold bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:opacity-90 text-white shadow-xl shadow-primary/40 transition-all duration-300"
                >
                  <a href={DMG_DOWNLOAD_PATH} download>
                    <Download className="mr-2 h-5 w-5" />
                    Download for macOS
                  </a>
                </Button>
                <Link href="/pricing">
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-10 text-base font-semibold border-2 border-background/20 text-background hover:bg-background/10 transition-all duration-300"
                  >
                    View Pricing
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-foreground text-background py-10">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-sm text-background/50">
                  &copy; {new Date().getFullYear()} Own The Day. All rights reserved.
                </div>
                <div className="flex items-center gap-6 text-sm text-background/50">
                  <Link href="/" className="hover:text-background transition-colors">Home</Link>
                  <Link href="/pricing" className="hover:text-background transition-colors">Pricing</Link>
                  <a href="mailto:hello@owntheday.com" className="hover:text-background transition-colors">Contact</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
