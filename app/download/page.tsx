'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MarketingHeader } from '@/components/marketing-header';
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
} from 'lucide-react';

/**
 * Override with NEXT_PUBLIC_OTD_DMG_URL for an external CDN / GitHub Releases URL.
 * Default serves the file from `public/downloads/` after `next build` (static export).
 */
const DMG_DOWNLOAD_PATH =
  process.env.NEXT_PUBLIC_OTD_DMG_URL?.trim() ||
  "https://github.com/0val-Wizard/otd-website/releases/download/v0.1.0/OTD-0.1.0-arm64.dmg";

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
  { icon: Brain, label: 'Study insights', description: 'Patterns from your real laptop activity' },
  { icon: Clock, label: 'Focus Buddy', description: 'Quiet timer, drift count, and break rhythm' },
];

export default function DownloadPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <MarketingHeader
        activePage="download"
        ctaHref={DMG_DOWNLOAD_PATH}
        ctaLabel="Download"
        ctaDownload
      />

      <div className="pt-[5rem]">
        <div className="min-h-screen bg-background">
          {/* Hero */}
          <section className="relative overflow-hidden pb-24 pt-24">
            <div className="absolute inset-0 bg-background" />
            <div className="surface-noise absolute inset-0" />

            <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
              <div className="mb-12 text-center" data-reveal>
                <Link
                  href="/"
                  className="mb-8 inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-2 type-body-sm font-semibold text-muted-foreground ring-1 ring-black/[0.06] transition-colors hover:text-foreground"
                >
                  <ArrowLeft className="h-4 w-4" />
                  See what OTD does
                </Link>

                <p className="section-kicker">Download OTD</p>
                <h1 className="section-title mx-auto mt-5 max-w-[9ch] text-foreground">
                  Start tracking your project week.
                </h1>
                <p className="mx-auto mt-12 max-w-2xl type-section-copy text-muted-foreground">
                  Install OTD on your Mac, create one project, and run a Focus Buddy session.
                  The app turns study activity, distractions, and progress into a private timeline.
                </p>
              </div>
            </div>
          </section>

          {/* OS Cards */}
          <section className="relative pb-32">
            <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
              <div className="grid gap-y-12 md:grid-cols-2 md:gap-x-6">
                {/* macOS Card */}
                <Card className="group relative overflow-hidden rounded-[2rem] border-0 bg-zinc-950 text-white ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5" data-reveal>
                  <CardContent className="relative z-10 px-8 py-12">
                    <div className="mb-12 flex items-center gap-5">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-white text-black transition-transform duration-300 group-hover:scale-[1.02]">
                        <AppleIcon className="w-8 h-8 text-black" />
                      </div>
                      <div>
                        <h2 className="type-platform-title font-bold text-white">macOS</h2>
                        <p className="mt-1 type-body-sm font-medium text-white/50">Version 0.1.0 &middot; .dmg installer</p>
                      </div>
                    </div>

                    <div className="mb-12 flex flex-wrap items-center gap-x-3 gap-y-6">
                      <Badge className="border-white/10 bg-white text-black type-caption px-2.5 py-0.5 font-bold">
                        Available Now
                      </Badge>
                      <Badge variant="outline" className="border-white/15 bg-white/[0.06] px-2.5 py-0.5 type-caption font-semibold text-white">
                        Apple Silicon &amp; Intel
                      </Badge>
                    </div>

                    <Button
                      asChild
                      size="lg"
                      className="h-14 w-full rounded-full bg-white type-body font-bold text-black hover:bg-white/90"
                    >
                      <a href={DMG_DOWNLOAD_PATH} download className="flex items-center justify-center w-full">
                        <Download className="mr-2 h-5 w-5" />
                        Download for macOS
                      </a>
                    </Button>

                    <p className="mt-6 text-center type-caption font-medium text-white/45">
                      Requires macOS 12 (Monterey) or later
                    </p>
                  </CardContent>
                </Card>

                {/* Windows Card */}
                <Card className="group relative overflow-hidden rounded-[2rem] border-0 bg-white ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5" data-reveal>
                  <CardContent className="relative z-10 px-8 py-12">
                    <div className="mb-12 flex items-center gap-5 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                      <div className="flex h-16 w-16 items-center justify-center rounded-[1.4rem] bg-black text-white transition-transform duration-300 group-hover:scale-[1.02]">
                        <WindowsIcon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h2 className="type-platform-title font-bold text-foreground">Windows</h2>
                        <p className="mt-1 type-body-sm font-medium text-muted-foreground">.exe installer</p>
                      </div>
                    </div>

                    <div className="mb-12 flex items-center gap-3 opacity-80 transition-opacity duration-300 group-hover:opacity-100">
                      <Badge variant="outline" className="border-black/10 bg-muted type-caption font-semibold text-muted-foreground">
                        Coming Soon
                      </Badge>
                    </div>

                    <Button
                      size="lg"
                      disabled
                      className="h-14 w-full cursor-not-allowed rounded-full bg-muted type-body font-bold text-muted-foreground/80"
                    >
                      <Monitor className="mr-2 h-5 w-5" />
                      Windows Coming Soon
                    </Button>

                    <p className="mt-6 text-center type-caption font-medium text-muted-foreground/70">
                      Windows 10 / 11 support is on the roadmap
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Installation Guide */}
          <section className="relative overflow-hidden bg-muted/35 py-32">
            <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
              <div className="mb-24 text-center" data-reveal>
                <h2 className="type-subsection-display font-bold text-foreground">
                  Install in 3 steps.
                </h2>
                <p className="mx-auto mt-10 max-w-xl type-section-copy text-muted-foreground">
                  Your first useful project timeline starts with one focused study block.
                </p>
              </div>

              <div className="grid gap-y-10 md:grid-cols-3 md:gap-x-5">
                {[
                  {
                    step: '1',
                    title: 'Download',
                    description: 'Click the download button above to get the OTD .dmg file.',
                  },
                  {
                    step: '2',
                    title: 'Open the .dmg',
                    description: 'Double-click the downloaded file and drag OTD into your Applications folder.',
                  },
                  {
                    step: '3',
                    title: 'Launch OTD',
                    description: 'Open OTD, create a semester project, and start your first focus session.',
                  },
                ].map((item) => (
                  <div key={item.step} className="relative rounded-[2rem] bg-white px-6 py-10 text-center ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5" data-reveal>
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 select-none font-mono type-step-ghost font-bold text-black/[0.04]">
                      {item.step}
                    </div>
                    <div className="relative pt-10">
                      <div className="mx-auto mb-10 flex h-14 w-14 items-center justify-center rounded-2xl bg-black">
                        <span className="type-card-title-sm font-bold text-white">{item.step}</span>
                      </div>
                      <h3 className="mb-5 type-card-title font-bold text-foreground">{item.title}</h3>
                      <p className="mx-auto max-w-xs type-body text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* App Details: System Requirements + Features */}
          <section className="py-32">
            <div className="mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
              <div className="grid gap-y-16 lg:grid-cols-2 lg:gap-x-8">
                {/* System Requirements */}
                <div data-reveal>
                  <div className="mb-12 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black">
                      <HardDrive className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="type-subsection-title font-bold text-foreground">System Requirements</h2>
                  </div>

                  <Card className="rounded-[2rem] border-0 bg-white ring-1 ring-black/[0.06]">
                    <CardContent className="p-0">
                      {systemRequirements.map((req, index) => (
                        <div
                          key={req.label}
                          className={`flex items-center justify-between px-6 py-6 ${
                            index < systemRequirements.length - 1 ? 'border-b border-border/50' : ''
                          }`}
                        >
                          <span className="type-body-sm font-medium text-muted-foreground">{req.label}</span>
                          <span className="type-body-sm font-semibold text-foreground">{req.value}</span>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* What's Included */}
                <div data-reveal>
                  <div className="mb-12 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-black">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <h2 className="type-subsection-title font-bold text-foreground">What&apos;s Included</h2>
                  </div>

                  <div className="grid gap-y-8">
                    {features.map((feature) => (
                      <Card key={feature.label} className="rounded-[1.5rem] border-0 bg-white ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5">
                        <CardContent className="flex items-start gap-4 px-5 py-7">
                          <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-black">
                            <feature.icon className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="mb-3 type-panel-title font-semibold text-foreground">{feature.label}</h3>
                            <p className="type-body-sm text-muted-foreground">{feature.description}</p>
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
          <section className="relative overflow-hidden bg-black py-32 text-white sm:py-40">
            <div className="surface-noise absolute inset-0 opacity-90 invert" />

            <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-10" data-reveal>
              <h2 className="cta-title mx-auto max-w-[10ch]">
                Start before your next sprint.
              </h2>
              <p className="mx-auto mb-14 mt-12 max-w-xl type-section-copy text-white/62">
                Download OTD now and turn your next project session into useful study data.
              </p>

              <div className="flex flex-col justify-center gap-3 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-14 rounded-full bg-white px-7 type-body font-bold text-black hover:bg-white/90"
                >
                  <a href={DMG_DOWNLOAD_PATH} download>
                    <Download className="mr-2 h-4 w-4" />
                    Download for macOS
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative overflow-hidden bg-muted/45 py-16 text-foreground">
            <div className="surface-noise absolute inset-0 opacity-50" />
            <div className="relative mx-auto max-w-5xl px-5 sm:px-8 lg:px-10">
              <div className="flex flex-col items-center justify-between gap-y-8 sm:flex-row sm:gap-x-4">
                <div className="type-caption text-muted-foreground">
                  &copy; {new Date().getFullYear()} Own The Day. All rights reserved.
                </div>
                <div className="flex items-center gap-6 type-body-sm text-muted-foreground">
                  <Link href="/" className="hover:text-foreground transition-colors duration-200">Home</Link>
                  <a href="mailto:hello@owntheday.com" className="hover:text-foreground transition-colors duration-200">Contact</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
