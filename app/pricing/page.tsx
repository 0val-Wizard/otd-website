import { Button } from '@/components/ui/button';
import { CheckCircle2, Download, FolderKanban, LineChart, ShieldCheck, TimerReset } from 'lucide-react';
import Link from 'next/link';
import { MarketingHeader } from '@/components/marketing-header';

const included = [
  {
    icon: FolderKanban,
    title: 'Project tracking',
    text: 'Create semester projects and connect real laptop activity to deliverables.',
  },
  {
    icon: TimerReset,
    title: 'Focus Buddy',
    text: 'Run study sessions with timer, drift count, break time, and focus score.',
  },
  {
    icon: LineChart,
    title: 'Study habit data',
    text: 'Review weekly focus windows, distraction patterns, and progress signals.',
  },
  {
    icon: ShieldCheck,
    title: 'Private defaults',
    text: 'Use policy filters and local-first records for sensitive student work.',
  },
];

function DownloadCTA({ inverted = false }: { inverted?: boolean }) {
  return (
    <Button
      asChild
      size="lg"
      className={`download-cta h-14 rounded-full px-5 pr-7 type-body font-semibold ${
        inverted ? 'download-cta--light' : ''
      }`}
    >
      <Link href="/download">
        <span className="download-cta-icon mr-3">
          <Download className="h-4 w-4" />
        </span>
        Download for Mac
      </Link>
    </Button>
  );
}

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <MarketingHeader activePage="pricing" ctaHref="/download" ctaLabel="Download" alwaysSolid />

      <div className="relative overflow-hidden pt-[5rem]">
        <div className="surface-noise absolute inset-0" />

        <section className="relative mx-auto max-w-7xl px-5 pb-32 pt-24 sm:px-8 lg:px-10">
          <div className="grid gap-y-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-x-12">
            <div data-reveal>
              <p className="section-kicker">Student beta access</p>
              <h1 className="section-title mt-5 max-w-[10ch] text-foreground">
                Try OTD with your next semester project.
              </h1>
            </div>

            <div data-reveal>
              <p className="max-w-2xl type-section-copy text-muted-foreground">
                OTD is focused on getting students into the app first: download it, create one
                project, and see how your focus, distractions, and progress show up in the data.
              </p>

              <div className="mt-12">
                <DownloadCTA />
              </div>

              <div className="mt-12 grid gap-y-6 type-body-sm text-muted-foreground sm:grid-cols-3 sm:gap-x-3">
                {['macOS beta', 'No CMS account needed', 'Private-first setup'].map((item) => (
                  <span key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-foreground/65" />
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-24 grid gap-y-10 md:grid-cols-2 md:gap-x-5 lg:grid-cols-4">
            {included.map((item) => (
              <article key={item.title} className="rounded-[1.6rem] bg-white px-6 py-8 ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5" data-reveal>
                <div className="mb-14 grid h-12 w-12 place-items-center rounded-2xl bg-black text-white">
                  <item.icon className="h-5 w-5" />
                </div>
                <h2 className="type-card-title font-bold text-foreground">{item.title}</h2>
                <p className="mt-8 type-body text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden bg-black py-32 text-white sm:py-40">
          <div className="surface-noise absolute inset-0 opacity-90 invert" />

          <div className="relative mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
            <div className="grid gap-y-16 lg:grid-cols-[1fr_auto] lg:items-end lg:gap-x-8">
              <div data-reveal>
                <p className="section-kicker text-white/45">Download OTD</p>
                <h2 className="cta-title mt-5 max-w-[10ch] text-white">
                  Build the habit before finals week.
                </h2>
              </div>

              <div data-reveal>
                <p className="max-w-md type-section-copy text-white/62">
                  Run one project session today and review the timeline after.
                </p>
                <div className="mt-12">
                  <DownloadCTA inverted />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
