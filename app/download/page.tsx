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
  ChevronRight,
} from 'lucide-react';

/** Must match `basePath` in `website/next.config.ts`. */
const WEBSITE_BASE_PATH = '/otd-website';

/**
 * Override with NEXT_PUBLIC_OTD_DMG_URL for an external CDN / GitHub Releases URL.
 * Default serves the file from `public/downloads/` after `next build` (static export).
 */
const DMG_DOWNLOAD_PATH =
  process.env.NEXT_PUBLIC_OTD_DMG_URL?.trim() ||
  `${WEBSITE_BASE_PATH}/downloads/OTD-0.1.0-arm64.dmg`;

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
      <MarketingHeader
        activePage="download"
        ctaHref={DMG_DOWNLOAD_PATH}
        ctaLabel="Download"
        ctaDownload
      />

      <div className="pt-[4.25rem]">
        <div className="min-h-screen bg-background">
          {/* Hero */}
          <section className="relative pt-20 pb-16 overflow-hidden">
            <div className="absolute inset-0 bg-background" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(230_80%_65%/0.06),transparent)]" />
            <div className="absolute top-[-10%] left-[20%] w-[600px] h-[600px] bg-primary/[0.05] rounded-full blur-[120px] orb-float opacity-60" />
            <div className="absolute top-[20%] right-[5%] w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[100px] orb-float opacity-50" style={{ animationDelay: '-7s' }} />

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
                <Card className="card-premium relative overflow-hidden border-0 transition-all duration-300">
                  <div className="h-1.5 bg-gradient-to-r from-primary to-indigo-400" />
                  <CardContent className="p-8">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary to-violet-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20">
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
                      className="btn-glow w-full h-14 text-base font-semibold bg-gradient-to-r from-primary to-indigo-400 hover:brightness-110 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 mb-6 border-0"
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
                      <Badge className="bg-primary/10 text-primary border-primary/20 text-xs font-semibold">
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
                    title: 'Launch OTD',
                    description: 'Open OTD from Applications, finish the quick setup, and start your first focus session.',
                  },
                ].map((item) => (
                  <div key={item.step} className="relative text-center">
                    <div className="text-[80px] font-bold text-primary/5 absolute -top-4 left-1/2 -translate-x-1/2 leading-none select-none">
                      {item.step}
                    </div>
                    <div className="relative pt-8">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center mx-auto mb-5 shadow-lg shadow-primary/15">
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
                          <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
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
            <div className="absolute inset-0 bg-[hsl(230_16%_5%)]" />
            <div className="absolute top-[-20%] left-[30%] w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px] orb-float" />
            <div className="absolute bottom-[-20%] right-[20%] w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[100px] orb-float" style={{ animationDelay: '-10s' }} />
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]" />

            <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 tracking-[-0.02em]">
                Ready to own your day?
              </h2>
              <p className="text-lg text-white/45 mb-8 max-w-xl mx-auto leading-relaxed">
                Download OTD now and start transforming your productivity in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="btn-glow h-14 px-10 text-base font-semibold bg-gradient-to-r from-primary to-indigo-400 hover:brightness-110 text-white shadow-xl shadow-primary/20 transition-all duration-300 rounded-xl border-0"
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
                    className="h-14 px-10 text-base font-semibold border-white/[0.12] text-white hover:bg-white/[0.06] transition-all duration-300 rounded-xl"
                  >
                    View Pricing
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="relative bg-[hsl(230_16%_5%)] text-white py-10 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />
            <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-xs text-white/25">
                  &copy; {new Date().getFullYear()} Own The Day. All rights reserved.
                </div>
                <div className="flex items-center gap-6 text-sm text-white/35">
                  <Link href="/" className="hover:text-white/70 transition-colors duration-200">Home</Link>
                  <Link href="/pricing" className="hover:text-white/70 transition-colors duration-200">Pricing</Link>
                  <a href="mailto:hello@owntheday.com" className="hover:text-white/70 transition-colors duration-200">Contact</a>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </section>
  );
}
