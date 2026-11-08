import Link from 'next/link';
import type { LucideIcon } from 'lucide-react';
import {
  Activity,
  BookOpenCheck,
  Brain,
  CalendarClock,
  CheckCircle2,
  Clock3,
  Download,
  Eye,
  FileText,
  FolderKanban,
  GraduationCap,
  LineChart,
  LockKeyhole,
  MousePointerClick,
  ShieldCheck,
  TimerReset,
  TriangleAlert,
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { OTDLogo } from '@/components/marketing-header';

function DownloadCTA({
  className = '',
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Button
      asChild
      size="lg"
      className={`download-cta viewport-cta h-14 justify-center rounded-full px-5 pr-7 type-body font-semibold ${className} ${
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

const moduleProgress = [
  { module: 'Web App', label: 'Prototype', value: 74, tone: 'bg-[#f4a43d]' },
  { module: 'Marketing', label: 'Deck', value: 42, tone: 'bg-white' },
  { module: 'Stats', label: 'Report', value: 58, tone: 'bg-[#a89cff]' },
  { module: 'Finance', label: 'Model', value: 31, tone: 'bg-white/55' },
];

const studyRhythmDays = [
  { day: 'M', value: 45, peak: false },
  { day: 'T', value: 72, peak: false },
  { day: 'W', value: 52, peak: false },
  { day: 'T', value: 92, peak: true },
  { day: 'F', value: 68, peak: false },
  { day: 'S', value: 32, peak: false },
  { day: 'S', value: 56, peak: false },
];

const habits = [
  { label: 'Best focus window', value: '9:20-11:10', icon: Clock3 },
  { label: 'Main drift source', value: 'short video tabs', icon: MousePointerClick },
  { label: 'Strongest project day', value: 'Tuesday', icon: LineChart },
];

function HeroArtifact() {
  return (
    <div className="viewport-artifact relative mx-auto w-full min-w-0" data-hero-item>
      {/* Floating Drift Badge */}
      <div className="absolute -left-2 sm:-left-3 lg:-left-3 xl:-left-4 2xl:-left-10 -top-3.5 sm:-top-4 lg:-top-3 xl:-top-4 2xl:-top-7 z-20 hidden w-36 sm:w-40 lg:w-38 xl:w-42 2xl:w-48 rounded-[1.15rem] xl:rounded-[1.25rem] 2xl:rounded-[1.35rem] bg-white p-3 xl:p-3.5 2xl:p-4 shadow-[0_24px_50px_-20px_rgba(0,0,0,0.5)] ring-1 ring-black/10 lg:block transition-transform duration-300 hover:scale-[1.02]">
        <div className="flex items-center gap-1.5 type-label text-[10px] xl:text-[11px] 2xl:text-xs font-bold text-black/45">
          <TriangleAlert className="h-3 w-3 xl:h-3.5 xl:w-3.5 2xl:h-4 2xl:w-4 text-[#f4a43d]" />
          Drift
        </div>
        <div className="mt-1.5 xl:mt-2 2xl:mt-2.5 font-bold text-xl xl:text-2xl 2xl:text-3xl text-black">12m</div>
        <p className="mt-1 text-[10px] xl:text-[11px] 2xl:text-xs text-black/55 leading-snug">YouTube appeared between research and slide work.</p>
      </div>

      {/* Floating Due next Badge */}
      <div className="absolute -right-2 sm:-right-3 lg:-right-3 xl:-right-4 2xl:-right-8 -bottom-3 sm:-bottom-4 lg:-bottom-3 xl:-bottom-4 2xl:-bottom-12 z-20 hidden w-42 sm:w-46 lg:w-44 xl:w-48 2xl:w-56 rounded-[1.15rem] xl:rounded-[1.25rem] 2xl:rounded-[1.5rem] bg-[#f6f2e8] p-3 xl:p-3.5 2xl:p-4 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.8)] ring-1 ring-black/10 lg:block transition-transform duration-300 hover:scale-[1.02]">
        <div className="flex items-center gap-1.5 type-label text-[10px] xl:text-[11px] 2xl:text-xs font-bold text-black/45">
          <CalendarClock className="h-3 w-3 xl:h-3.5 xl:w-3.5 2xl:h-4 2xl:w-4 text-[#7f70f1]" />
          Due next
        </div>
        <div className="mt-1.5 text-sm xl:text-base 2xl:text-lg font-bold text-black">Group slides</div>
        <p className="mt-0.5 xl:mt-1 text-[10px] xl:text-[11px] 2xl:text-xs text-black/55 leading-snug">Friday, 11:59 PM. Evidence collected from Figma and Docs.</p>
      </div>

      {/* Main Dark Mockup Window */}
      <div className="w-full overflow-hidden rounded-[1.5rem] sm:rounded-[2rem] lg:rounded-[1.75rem] xl:rounded-[2.25rem] 2xl:rounded-[3.25rem] bg-[#050505] p-2.5 sm:p-3.5 lg:p-3 xl:p-4 2xl:p-6 text-white shadow-[0_36px_100px_-40px_rgba(0,0,0,0.85)] ring-1 ring-white/10">
        <div className="relative overflow-hidden rounded-[1.2rem] sm:rounded-[1.5rem] lg:rounded-[1.35rem] xl:rounded-[1.75rem] 2xl:rounded-[2.5rem] border border-white/10 bg-[#121214]">
          <div
            aria-hidden="true"
            className="absolute inset-y-0 left-[-60%] w-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            data-scan-line
          />

          {/* Window Title Bar */}
          <div className="flex items-center justify-between border-b border-white/10 px-3.5 py-2 sm:px-4 sm:py-2.5 xl:px-5 xl:py-3 2xl:px-8 2xl:py-4">
            <div className="flex items-center gap-2.5 sm:gap-3 xl:gap-3.5 2xl:gap-4">
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="h-2 w-2 xl:h-2.5 xl:w-2.5 2xl:h-3 2xl:w-3 rounded-full bg-[#ff5f57] border border-[#e0443e]/40 shadow-xs" />
                <span className="h-2 w-2 xl:h-2.5 xl:w-2.5 2xl:h-3 2xl:w-3 rounded-full bg-[#febc2e] border border-[#d89e24]/40 shadow-xs" />
                <span className="h-2 w-2 xl:h-2.5 xl:w-2.5 2xl:h-3 2xl:w-3 rounded-full bg-[#28c840] border border-[#1aab29]/40 shadow-xs" />
              </div>
              <div className="hidden sm:block h-3.5 w-px bg-white/15" />
              <div className="flex items-center gap-2 xl:gap-2.5 2xl:gap-3">
                <div className="grid h-6 w-6 sm:h-7 sm:w-7 xl:h-8 xl:w-8 2xl:h-10 2xl:w-10 place-items-center rounded-lg bg-white text-black">
                  <GraduationCap className="h-3 w-3 sm:h-3.5 sm:w-3.5 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5" />
                </div>
                <div>
                  <div className="type-panel-title text-xs sm:text-sm xl:text-base 2xl:text-xl font-bold">OTD Semester Board</div>
                  <div className="type-caption text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm text-white/42">Week 9 / project sprint</div>
                </div>
              </div>
            </div>
            <div className="hidden items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs xl:text-xs 2xl:text-sm text-white/45 sm:flex">
              <span className="h-1.5 w-1.5 xl:h-2 xl:w-2 rounded-full bg-[#f4a43d]" />
              private activity on
            </div>
          </div>

          {/* Inner Grid */}
          <div className="grid gap-2.5 sm:gap-3 lg:gap-3 xl:gap-4 2xl:gap-6 p-2.5 sm:p-3.5 lg:p-3 xl:p-4 2xl:p-6 lg:grid-cols-[0.92fr_1.08fr] 2xl:grid-cols-[0.88fr_1.12fr]">
            {/* Left Card: Focus Buddy */}
            <div className="flex flex-col justify-between rounded-[1rem] sm:rounded-[1.2rem] xl:rounded-[1.35rem] 2xl:rounded-[1.85rem] border border-white/10 bg-black p-3.5 sm:p-4 xl:p-5 2xl:p-7">
              <div className="flex items-start justify-between gap-2.5">
                <div>
                  <div className="type-label text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm font-bold text-white/42">Focus Buddy</div>
                  <div className="mt-1.5 sm:mt-2 xl:mt-3 2xl:mt-4 font-mono text-[2.25rem] sm:text-[2.75rem] lg:text-[2.5rem] xl:text-[3rem] 2xl:text-[5rem] leading-none font-bold tracking-tight text-white">42:18</div>
                  <p className="mt-1.5 xl:mt-2 2xl:mt-3 max-w-44 sm:max-w-52 xl:max-w-60 2xl:max-w-68 text-[11px] sm:text-xs xl:text-xs 2xl:text-base text-white/55 leading-snug">Database report draft, no phone pickup detected.</p>
                </div>
                <div className="relative grid h-14 w-14 sm:h-16 sm:w-16 lg:h-14 lg:w-14 xl:h-18 xl:w-18 2xl:h-28 2xl:w-28 shrink-0 place-items-center rounded-full bg-white/[0.04]">
                  <svg className="absolute inset-0 h-full w-full -rotate-90 p-0.5" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      className="stroke-white/10 fill-none"
                      strokeWidth="9"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="38"
                      className="stroke-[#a89cff] fill-none"
                      strokeWidth="9"
                      strokeDasharray={2 * Math.PI * 38}
                      strokeDashoffset={2 * Math.PI * 38 * (1 - 0.86)}
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="relative z-10 font-mono text-sm sm:text-base xl:text-lg 2xl:text-3xl font-bold text-white">
                    86
                  </span>
                </div>
              </div>

              <div className="mt-3.5 sm:mt-4 xl:mt-5 2xl:mt-8 grid grid-cols-3 gap-1.5 sm:gap-2 xl:gap-2 2xl:gap-3">
                {[
                  ['Focus', '38m'],
                  ['Break', '4m'],
                  ['Drift', '2'],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-lg sm:rounded-xl xl:rounded-xl 2xl:rounded-2xl bg-white/[0.07] px-2 py-2 sm:px-2.5 sm:py-2.5 xl:px-3 xl:py-2.5 2xl:px-4 2xl:py-3.5 ring-1 ring-white/10">
                    <div className="font-mono text-xs sm:text-sm xl:text-base 2xl:text-2xl font-bold">{value}</div>
                    <div className="mt-0.5 text-[9px] sm:text-[10px] xl:text-[10px] 2xl:text-xs font-bold uppercase text-white/38">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Card: DBMS + Subcards */}
            <div className="grid gap-2.5 sm:gap-3 xl:gap-3.5 2xl:gap-6">
              <div className="rounded-[1rem] sm:rounded-[1.2rem] xl:rounded-[1.35rem] 2xl:rounded-[1.85rem] bg-white p-3 sm:p-3.5 xl:p-4 2xl:p-6 text-black">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs sm:text-sm xl:text-base 2xl:text-xl font-bold">DBMS group project</div>
                    <div className="mt-0.5 text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm text-black/50">Presentation, schema notes, final report</div>
                  </div>
                  <div className="font-mono text-lg sm:text-xl xl:text-2xl 2xl:text-4xl font-bold">68%</div>
                </div>

                <div className="mt-2.5 sm:mt-3 xl:mt-3.5 2xl:mt-5 space-y-1.5 sm:space-y-2 xl:space-y-2.5 2xl:space-y-4">
                  {[
                    ['Research evidence', '100%'],
                    ['Drafted sections', '64%'],
                    ['Final edit', '12%'],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <div className="mb-0.5 flex items-center justify-between text-[10px] sm:text-[11px] xl:text-xs 2xl:text-sm font-semibold text-black/55">
                        <span>{label}</span>
                        <span>{value}</span>
                      </div>
                      <div className="h-1.5 sm:h-2 xl:h-2 2xl:h-2.5 overflow-hidden rounded-full bg-black/10">
                        <div className="h-full rounded-full bg-black" style={{ width: value }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Row: Study Rhythm & Project Load */}
              <div className="grid gap-2 sm:gap-2.5 xl:gap-3 sm:grid-cols-2">
                <div className="min-w-0 flex flex-col justify-between rounded-[1rem] sm:rounded-[1.2rem] xl:rounded-[1.35rem] border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.04] p-2.5 sm:p-2.5 xl:p-3">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-white/50 whitespace-nowrap">Study rhythm</div>
                    <div className="mt-0.5 flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono text-sm sm:text-base xl:text-lg font-bold tracking-tight text-white">5.4</span>
                        <span className="text-[9px] sm:text-[10px] font-medium text-white/40">h/d</span>
                      </div>
                      <span className="shrink-0 rounded-full bg-[#f4a43d] px-1.5 py-0.5 text-[8px] sm:text-[9px] font-bold text-black shadow-sm">
                        +18%
                      </span>
                    </div>
                  </div>

                  <div className="mt-2.5 flex items-end gap-1">
                    {studyRhythmDays.map((item, index) => (
                      <div key={index} className="min-w-0 flex flex-1 flex-col items-center gap-0.5 sm:gap-1">
                        <div className="relative h-10 sm:h-12 lg:h-10 xl:h-12 2xl:h-18 w-full rounded-full bg-white/[0.08] flex flex-col justify-end overflow-hidden">
                          <div
                            className={`w-full rounded-full transition-all duration-300 ${
                              item.peak
                                ? 'bg-gradient-to-t from-[#7f70f1] via-[#a89cff] to-[#d8b4fe] shadow-[0_0_14px_rgba(168,156,255,0.7)] ring-1 ring-white/30'
                                : 'bg-gradient-to-t from-white/25 via-white/70 to-white'
                            }`}
                            style={{ height: `${item.value}%` }}
                          />
                        </div>
                        <div className="flex flex-col items-center gap-0.5">
                          <span
                            className={`font-mono text-[8px] sm:text-[9px] leading-none ${
                              item.peak ? 'font-bold text-[#a89cff]' : 'font-medium text-white/40'
                            }`}
                          >
                            {item.day}
                          </span>
                          {item.peak ? (
                            <span className="h-1 w-1 rounded-full bg-[#a89cff] shadow-[0_0_5px_#a89cff]" />
                          ) : (
                            <span className="h-1 w-1" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="min-w-0 flex flex-col justify-between rounded-[1rem] sm:rounded-[1.2rem] xl:rounded-[1.35rem] border border-white/10 bg-gradient-to-b from-white/[0.09] to-white/[0.04] p-2.5 sm:p-2.5 xl:p-3">
                  <div>
                    <div className="text-[10px] sm:text-[11px] font-semibold text-white/50 whitespace-nowrap">Project load</div>
                    <div className="mt-0.5 flex items-center justify-between">
                      <div className="flex items-baseline gap-1">
                        <span className="font-mono text-sm sm:text-base xl:text-lg font-bold tracking-tight text-white">84%</span>
                        <span className="text-[9px] sm:text-[10px] font-medium text-white/40">done</span>
                      </div>
                      <span className="shrink-0 rounded-full bg-white/10 px-1.5 py-0.5 text-[8px] sm:text-[9px] font-medium text-white/70">
                        3 active
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 space-y-1.5">
                    {moduleProgress.slice(0, 3).map((item) => (
                      <div key={item.module} className="space-y-0.5">
                        <div className="flex items-center justify-between text-[9px] sm:text-[10px]">
                          <span className="font-medium text-white/75 truncate">{item.module}</span>
                          <span className="font-mono text-[9px] text-white/45">{item.value}%</span>
                        </div>
                        <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                          <div className={`h-full rounded-full ${item.tone}`} style={{ width: `${item.value}%` }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="student-hero relative flex min-h-[100dvh] flex-col justify-center overflow-x-clip pt-20 pb-12 sm:pt-22 sm:pb-14 lg:pt-22 lg:pb-14 xl:pt-24 xl:pb-16 2xl:pt-28 2xl:pb-20">
      <div className="surface-noise absolute inset-0" />

      <div className="relative mx-auto w-full max-w-[84rem] xl:max-w-[94rem] 2xl:max-w-[114rem] px-5 sm:px-8 lg:px-8 xl:px-10 2xl:px-16">
        <div className="grid min-w-0 gap-y-8 lg:grid-cols-[0.88fr_1.12fr] lg:items-center lg:gap-x-8 xl:gap-x-12 2xl:gap-x-14">
          <div className="relative z-10 min-w-0 max-w-full">
            <div
              className="mb-3.5 sm:mb-4 lg:mb-3 xl:mb-4 2xl:mb-7 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm xl:text-base font-semibold text-black shadow-[0_1px_0_rgba(0,0,0,0.06)] ring-1 ring-black/[0.06]"
              data-hero-item
            >
              <span className="h-2 w-2 rounded-full bg-[#f4a43d]" />
              For uni and poly project weeks
            </div>

            <h1 className="hero-title text-black" data-hero-item>
              Own the semester before it owns you.
            </h1>

            <p className="mt-3.5 sm:mt-4 lg:mt-3 xl:mt-4 2xl:mt-7 type-section-copy text-sm sm:text-base xl:text-lg 2xl:text-2xl 2xl:leading-relaxed text-black/65 max-w-lg sm:max-w-xl xl:max-w-2xl" data-hero-item>
              OTD turns your laptop work into a private timeline for projects, focus sessions,
              distractions, and study patterns so you can see what actually moved this week.
            </p>

            <div className="mt-5 sm:mt-6 lg:mt-5 xl:mt-6 2xl:mt-9 flex flex-col gap-y-3 sm:flex-row sm:items-center sm:gap-x-4" data-hero-item>
              <DownloadCTA className="h-12 sm:h-13 xl:h-14 2xl:h-15 px-5 sm:px-6 xl:px-7 2xl:px-8 text-sm sm:text-base xl:text-base 2xl:text-lg" />
              <p className="max-w-xs sm:max-w-sm type-body-sm text-xs sm:text-xs xl:text-sm 2xl:text-base text-black/52 leading-snug">
                macOS beta. Built for students juggling deadlines, group work, and late-night drift.
              </p>
            </div>

            <div className="mt-5 sm:mt-6 lg:mt-5 xl:mt-6 2xl:mt-11 hidden max-w-xl xl:max-w-2xl grid-cols-1 gap-y-3 text-xs sm:text-xs xl:text-sm 2xl:text-base font-medium text-black/58 sm:grid sm:grid-cols-3 sm:gap-x-3 xl:gap-x-4" data-hero-item>
              {['Private by default', 'Project evidence', 'Study habit data'].map((item) => (
                <span key={item} className="flex items-center gap-1.5 xl:gap-2">
                  <CheckCircle2 className="h-3.5 w-3.5 xl:h-4 xl:w-4 2xl:h-5 2xl:w-5 text-black/70" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <HeroArtifact />
        </div>
      </div>
    </section>
  );
}

const featureBlocks: Array<{
  icon: LucideIcon;
  title: string;
  description: string;
  proof: string;
}> = [
  {
    icon: FolderKanban,
    title: 'Track every semester project from real work',
    description:
      'Map research, docs, design files, coding time, meetings, and idle gaps to the projects you care about.',
    proof: 'Know what has evidence, not just what feels busy.',
  },
  {
    icon: TimerReset,
    title: 'Catch procrastination while it is still small',
    description:
      'Focus Buddy shows the timer, drift count, break time, and focus score without asking you to log every task.',
    proof: 'Spot the YouTube spiral before it eats the afternoon.',
  },
  {
    icon: LineChart,
    title: 'See your study habits as patterns',
    description:
      'Daily and weekly summaries reveal your best focus windows, heavy context-switch days, and deadline spikes.',
    proof: 'Plan the next week from data, not guilt.',
  },
];

function WhatIsOTDSection() {
  return (
    <section id="features" className="scroll-mt-24 relative overflow-hidden bg-[#050505] py-24 text-white sm:py-32 lg:py-40">
      <div className="surface-noise absolute inset-0 opacity-80 invert" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-y-16 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-x-12">
          <div data-reveal>
            <p className="section-kicker text-white/45">What OTD is</p>
            <h2 className="section-title mt-5 max-w-[10ch] text-white">
              A project tracker that watches the work, not your mood.
            </h2>
          </div>

          <div className="grid gap-y-8" data-reveal>
            <p className="max-w-2xl type-section-copy text-white/62">
              Students already work across browsers, docs, code editors, design tools, chats, and
              lecture portals. OTD connects those fragments into a readable study record.
            </p>
            <div className="pt-6">
              <DownloadCTA inverted />
            </div>
          </div>
        </div>

        <div className="mt-24 grid gap-y-10 lg:grid-cols-3 lg:gap-x-5">
          {featureBlocks.map((feature) => (
            <article
              key={feature.title}
              className="rounded-[1.75rem] border border-white/10 bg-white/[0.055] px-6 py-8 transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.08]"
              data-reveal
            >
              <div className="mb-12 grid h-12 w-12 place-items-center rounded-2xl bg-white text-black">
                <feature.icon className="h-5 w-5" />
              </div>
              <h3 className="type-card-title font-bold text-white">{feature.title}</h3>
              <p className="mt-8 type-body text-white/58">{feature.description}</p>
              <div className="mt-10 flex items-start gap-3 rounded-2xl bg-black/35 px-4 py-4 type-body-sm font-semibold text-white/82">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-[#f4a43d]" />
                {feature.proof}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectLoadSection() {
  return (
    <section id="project-tracking" className="scroll-mt-24 relative overflow-hidden bg-background py-24 sm:py-32 lg:py-40">
      <div className="surface-noise absolute inset-0 opacity-60" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-y-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-x-12">
          <div data-reveal>
            <p className="section-kicker">Project tracking</p>
            <h2 className="section-title mt-5 max-w-[11ch] text-black">
              One semester. Too many deadlines. One board.
            </h2>
            <p className="mt-10 max-w-2xl type-section-copy text-black/62">
              OTD gives each project a live progress picture based on what you actually touched:
              research tabs, docs, code files, meeting time, and final-review gaps.
            </p>
            <div className="mt-12">
              <DownloadCTA />
            </div>
          </div>

          <div className="rounded-[2rem] bg-white px-4 py-6 shadow-[0_32px_90px_-60px_rgba(0,0,0,0.9)] ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5" data-reveal>
            <div className="rounded-[1.45rem] bg-[#f7f5ef] px-5 py-7">
              <div className="mb-10 flex items-center justify-between">
                <div>
                  <div className="type-label font-bold text-black/45">Semester load</div>
                  <div className="mt-2 type-card-title font-bold text-black">4 active projects</div>
                </div>
                <div className="rounded-full bg-black px-3 py-1 type-caption font-bold text-white">Week 9</div>
              </div>

              <div className="space-y-5">
                {moduleProgress.map((item) => (
                  <div key={item.module} className="rounded-[1.15rem] bg-white px-4 py-5 ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5">
                    <div className="mb-5 flex items-center justify-between gap-4">
                      <div>
                        <div className="type-panel-title font-bold text-black">{item.module}</div>
                        <div className="mt-1 type-caption text-black/48">{item.label}</div>
                      </div>
                      <div className="font-mono type-card-title font-bold text-black">{item.value}%</div>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full bg-black/10">
                      <div className={`h-full rounded-full ${item.tone === 'bg-white/55' ? 'bg-black/35' : item.tone}`} style={{ width: `${item.value}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HabitsSection() {
  return (
    <section id="study-habits" className="scroll-mt-24 relative overflow-hidden bg-[#111114] py-24 text-white sm:py-32 lg:py-40">
      <div className="surface-noise absolute inset-0 opacity-75 invert" />
      <div className="absolute inset-x-0 top-0 h-px bg-white/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-y-16 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-x-12">
          <div className="order-2 lg:order-1" data-reveal>
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black px-4 py-6 shadow-[0_32px_100px_-62px_rgba(0,0,0,0.95)] transition duration-300 hover:-translate-y-0.5">
              <div className="rounded-[1.45rem] bg-[#151518] px-5 py-7">
                <div className="mb-12 flex items-center justify-between">
                  <div>
                    <div className="type-label font-bold text-white/42">Study habit report</div>
                    <div className="mt-2 type-card-title font-bold">This week had a Monday leak.</div>
                  </div>
                  <Brain className="h-6 w-6 text-[#a89cff]" />
                </div>

                <div className="grid gap-y-6 sm:grid-cols-3 sm:gap-x-3">
                  {habits.map((habit) => (
                    <div key={habit.label} className="rounded-[1.15rem] bg-white/[0.07] px-4 py-6 ring-1 ring-white/10 transition duration-300 hover:-translate-y-0.5">
                      <habit.icon className="mb-10 h-5 w-5 text-white/48" />
                      <div className="type-label font-bold text-white/38">{habit.label}</div>
                      <div className="mt-2 type-card-title-sm font-bold">{habit.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-10 rounded-[1.15rem] bg-white px-4 py-6 text-black">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="type-panel-title font-bold">Attention map</span>
                    <span className="type-caption font-bold text-black/45">Mon-Sun</span>
                  </div>
                  <div className="grid grid-cols-7 gap-2">
                    {[28, 74, 66, 41, 82, 36, 55].map((height, index) => (
                      <div key={index} className="flex h-32 flex-col justify-end gap-2">
                        <div className="flex flex-1 items-end rounded-full bg-black/8 p-1">
                          <div
                            className={`w-full rounded-full ${index === 0 ? 'bg-[#f4a43d]' : index === 4 ? 'bg-[#a89cff]' : 'bg-black'}`}
                            style={{ height: `${height}%` }}
                          />
                        </div>
                        <span className="text-center type-caption font-bold text-black/45">
                          {['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2" data-reveal>
            <p className="section-kicker text-white/45">Distractions and habits</p>
            <h2 className="section-title mt-5 max-w-[11ch] text-white">
              Procrastination has a shape.
            </h2>
            <p className="mt-10 max-w-2xl type-section-copy text-white/62">
              OTD does not scold you. It shows the pattern: which project gets avoided, what time
              you drift, how often you context switch, and when your focus comes back.
            </p>
            <div className="mt-12">
              <DownloadCTA inverted />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const workflow = [
  {
    icon: Eye,
    title: 'Approve what OTD can see',
    text: 'Choose the apps, windows, and contexts OTD can use for your timeline.',
  },
  {
    icon: FileText,
    title: 'Connect work to projects',
    text: 'Attach activity evidence to assignments, group projects, reports, and prototypes.',
  },
  {
    icon: BookOpenCheck,
    title: 'Review the week',
    text: 'Use progress, focus, and distraction data to plan the next study block.',
  },
];

function WorkflowSection() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-[#eeece7] py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-y-16 lg:grid-cols-[0.75fr_1.25fr] lg:items-start lg:gap-x-10">
          <div data-reveal>
            <p className="section-kicker">How it works</p>
            <h2 className="section-title mt-5 max-w-[9ch] text-black">Install once. Read the semester back.</h2>
          </div>

          <div className="grid gap-y-8 md:grid-cols-3 md:gap-x-4" data-reveal>
            {workflow.map((step, index) => (
              <article key={step.title} className="rounded-[1.55rem] bg-white px-5 py-8 ring-1 ring-black/[0.06] transition duration-300 hover:-translate-y-0.5">
                <div className="flex items-center justify-between">
                  <span className="font-mono type-body-sm font-bold text-black/35">0{index + 1}</span>
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-black text-white">
                    <step.icon className="h-5 w-5" />
                  </div>
                </div>
                <h3 className="mt-12 type-card-title font-bold text-black">{step.title}</h3>
                <p className="mt-4 type-body text-black/58">{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function PrivacySection() {
  return (
    <section className="bg-background py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-y-12 rounded-[2rem] bg-white px-6 py-10 ring-1 ring-black/[0.06] sm:px-8 sm:py-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-x-8" data-reveal>
          <div>
            <p className="section-kicker">Privacy</p>
            <h2 className="mt-8 type-subsection-display font-bold text-black">
              Your study data should not become someone else&apos;s dataset.
            </h2>
          </div>

          <div className="grid gap-y-6 sm:grid-cols-3 sm:gap-x-3">
            {[
              [LockKeyhole, 'Local-first records', 'Activity stays on device by default.'],
              [ShieldCheck, 'Policy filters', 'Exclude private apps and sensitive windows.'],
              [Activity, 'Readable summaries', 'Keep the insight without exposing everything.'],
            ].map(([Icon, title, text]) => {
              const ItemIcon = Icon as LucideIcon;
              return (
                <div key={title as string} className="rounded-[1.25rem] bg-[#f3f1ec] px-4 py-6 transition duration-300 hover:-translate-y-0.5">
                  <ItemIcon className="mb-12 h-5 w-5 text-black/58" />
                  <div className="type-panel-title font-bold text-black">{title as string}</div>
                  <p className="mt-2 type-body-sm text-black/55">{text as string}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section id="download" className="scroll-mt-24 relative overflow-hidden bg-[#050505] py-24 text-white sm:py-32 lg:py-40">
      <div className="surface-noise absolute inset-0 opacity-90 invert" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-y-16 lg:grid-cols-[1fr_0.65fr] lg:items-end lg:gap-x-10">
          <div data-reveal>
            <p className="section-kicker text-white/45">Download OTD</p>
            <h2 className="cta-title mt-5 max-w-[11ch] text-white">
              Start before the next project sprint.
            </h2>
          </div>

          <div data-reveal>
            <p className="max-w-xl type-section-copy text-white/62">
              Download OTD, set your first project, and run one Focus Buddy session. The first useful
              study pattern usually appears after a single afternoon.
            </p>
            <div className="mt-12">
              <DownloadCTA inverted />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#eeece7] py-14 text-black">
      <div className="surface-noise absolute inset-0 opacity-55" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid gap-y-12 sm:grid-cols-[1fr_auto] sm:items-end sm:gap-x-8">
          <div>
            <OTDLogo />
            <p className="mt-5 max-w-md type-body-sm text-black/58">
              OTD helps students understand project progress, procrastination patterns, distractions,
              and study habits from the work already happening on their laptop.
            </p>
          </div>
          <DownloadCTA />
        </div>

        <div className="mt-16 flex flex-col gap-y-6 border-t border-black/10 pt-8 type-caption text-black/45 sm:flex-row sm:items-center sm:justify-between sm:gap-x-3">
          <span>&copy; {new Date().getFullYear()} Own The Day.</span>
          <span>Static site. Private-first app. Made for project-heavy semesters.</span>
        </div>
      </div>
    </footer>
  );
}

export default function MainPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <WhatIsOTDSection />
        <ProjectLoadSection />
        <HabitsSection />
        <WorkflowSection />
        <PrivacySection />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
