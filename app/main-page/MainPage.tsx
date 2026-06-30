// OTD Landing Page — Premium Redesign v7
// Refined professional palette: cool indigo-blue primary + slate neutrals
// No orange — sophisticated, premium, modern SaaS aesthetic

"use client";

import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  ArrowRight,
  Target,
  Clock,
  TrendingUp,
  Shield,
  BarChart3,
  Mail,
  Github,
  Twitter,
  CheckCircle,
  Sparkles,
  Star,
  Users,
  Calendar,
  Flame,
  Download,
  Eye,
  Lock,
  Activity,
  Brain,
  FolderKanban,
  Zap,
} from 'lucide-react';
import Link from 'next/link';

/* ═══════════════════════════════════════════════
   Scroll-triggered fade-in hook
   ═══════════════════════════════════════════════ */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  const { ref, visible } = useInView(0.06);
  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-[800ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </section>
  );
}

/* ═══════════════════════════════════════════════
   HERO SECTION
   ═══════════════════════════════════════════════ */
function HeroSection() {
  return (
    <section className="relative min-h-[100dvh] pt-28 pb-24 overflow-hidden flex items-center">
      {/* ── Background layers ── */}
      <div className="absolute inset-0 bg-background" />

      {/* Primary ambient orb — cool indigo */}
      <div className="absolute top-[-20%] left-[20%] w-[700px] h-[700px] bg-primary/[0.05] rounded-full blur-[120px] orb-float" />
      {/* Secondary orb — violet */}
      <div className="absolute bottom-[-10%] right-[10%] w-[500px] h-[500px] bg-violet-500/[0.04] rounded-full blur-[100px] orb-float" style={{ animationDelay: '-7s' }} />
      {/* Tertiary orb — subtle blue */}
      <div className="absolute top-[30%] right-[30%] w-[300px] h-[300px] bg-blue-500/[0.03] rounded-full blur-[80px] orb-float" style={{ animationDelay: '-14s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,black_30%,transparent_100%)]" />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,hsl(230_80%_65%/0.06),transparent)]" />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* ── Left: Copy ── */}
          <div className="text-center lg:text-left">
            {/* Badge with shimmer */}
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/[0.06] border border-primary/[0.12] rounded-full text-sm font-medium text-primary backdrop-blur-sm shimmer">
              <Sparkles className="h-3.5 w-3.5" />
              Now in public beta — free to try
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold tracking-[-0.03em] text-foreground leading-[1.05] mb-7">
              Your AI&#8209;powered
              <span className="block gradient-text mt-2">focus companion</span>
            </h1>

            <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              OTD turns your workday into a clear, private timeline. It helps you protect focus,
              understand where time goes, and see real project progress — with activity processed
              on your machine and controlled by you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link href="/download">
                <Button
                  size="lg"
                  className="download-cta btn-glow h-14 w-full rounded-xl px-5 pr-7 text-base font-semibold tracking-[0.01em] transition-all duration-300 sm:w-auto"
                >
                  <span className="download-cta-icon mr-3">
                    <Download className="h-4 w-4" />
                  </span>
                  Download for Mac
                </Button>
              </Link>
              <Link href="/pricing">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-border/50 hover:border-primary/30 hover:bg-primary/[0.04] transition-all duration-300 rounded-xl cursor-pointer"
                >
                  View Pricing
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 justify-center lg:justify-start text-sm text-muted-foreground">
              {['Free 7-day trial', 'No credit card', 'macOS (Windows soon)'].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <CheckCircle className="h-3.5 w-3.5 text-primary/70" />
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* ── Right: App Preview Card ── */}
          <div className="relative hidden lg:block">
            {/* Multi-layer glow — cool indigo */}
            <div className="absolute -inset-12 bg-gradient-to-br from-primary/[0.08] via-violet-500/[0.05] to-transparent rounded-[2rem] blur-[60px] opacity-70 orb-float" style={{ animationDelay: '-3s' }} />
            <div className="absolute -inset-6 bg-gradient-to-tr from-primary/[0.04] to-transparent rounded-3xl blur-3xl" />

            <Card className="card-premium relative bg-black text-white backdrop-blur-md border border-white/10 shadow-2xl overflow-hidden rounded-2xl">
              {/* Top bar */}
              <div className="h-11 bg-white/5 border-b border-white/10 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80 hover:bg-green-400 transition-colors" />
                </div>
                <span className="text-xs text-white/60 ml-3 font-medium tracking-wide">Own The Day</span>
              </div>

              <CardContent className="p-7 sm:p-8">
                {/* Status */}
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-sm font-medium text-white">Deep Focus Active</span>
                  </div>
                  <Badge variant="secondary" className="text-xs bg-white/10 text-white hover:bg-white/20 border-0 font-medium">
                    Today
                  </Badge>
                </div>

                {/* Timer */}
                <div className="text-center mb-7">
                  <div className="text-5xl sm:text-6xl font-bold text-white tracking-tight font-mono tabular-nums">
                    2:34:18
                  </div>
                  <div className="text-sm text-white/60 mt-2 font-medium">Deep Focus Time</div>
                </div>

                {/* Focus score */}
                <div className="bg-white/5 rounded-xl p-5 mb-7 border border-white/10">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-white block mb-1">Focus Score</span>
                      <span className="text-xs text-primary font-medium">+12% from yesterday</span>
                    </div>
                    <div className="relative">
                      <svg className="w-16 h-16 -rotate-90">
                        <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="4" fill="none" className="text-white/20" />
                        <circle
                          cx="32" cy="32" r="26"
                          stroke="url(#heroScoreGrad)"
                          strokeWidth="4" fill="none"
                          strokeDasharray={`${87 * 1.634} ${100 * 1.634}`}
                          strokeLinecap="round"
                        />
                        <defs>
                          <linearGradient id="heroScoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="hsl(230, 80%, 65%)" />
                            <stop offset="100%" stopColor="hsl(260, 75%, 65%)" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="absolute inset-0 flex items-center justify-center text-xl font-bold text-primary">87</span>
                    </div>
                  </div>
                </div>

                {/* Mini stats */}
                <div className="grid grid-cols-3 gap-3">
                  {[
                    { icon: Target, value: '5', label: 'Goals', color: 'text-primary' },
                    { icon: Shield, value: '23', label: 'Blocked', color: 'text-white/60' },
                    { icon: Flame, value: '7', label: 'Streak', color: 'text-violet-400' },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 rounded-xl p-3.5 text-center border border-white/10 hover:border-white/20 transition-colors duration-300">
                      <s.icon className={`w-4 h-4 ${s.color} mx-auto mb-1.5`} />
                      <div className="text-lg font-bold text-white">{s.value}</div>
                      <div className="text-[10px] text-white/60 uppercase tracking-wider font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Floating card: AI nudge */}
            <div className="absolute -left-8 top-[30%] float" style={{ animationDelay: '-1s' }}>
              <div className="bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50 p-3.5 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/60 font-medium">AI Nudge</div>
                    <div className="text-xs font-semibold text-white">&quot;Stay on track!&quot;</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card: productivity */}
            <div className="absolute -right-6 bottom-[22%] float" style={{ animationDelay: '-2.5s' }}>
              <div className="bg-white/15 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/50 p-3.5 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/20 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/60 font-medium">This week</div>
                    <div className="text-sm font-bold text-white">+24%</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════════════
   FEATURES SECTION
   ═══════════════════════════════════════════════ */
function FeaturesSection() {
  const features = [
    {
      icon: Eye,
      eyebrow: 'Activity capture',
      title: 'Your day becomes a readable timeline',
      description:
        'OTD turns approved desktop signals into a clean record of what happened: apps, window titles, clipboard changes, idle time, and optional screen/OCR context.',
      outcome: 'Helps you stop guessing where the day went.',
      visual: (
        <div className="space-y-4" aria-label="Activity timeline preview">
          {/* Live activity header */}
          <div className="flex items-center justify-between rounded-xl border border-emerald-400/25 bg-emerald-400/[0.06] px-4 py-2.5">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
              </span>
              <span className="text-sm font-semibold text-foreground">Live activity</span>
            </div>
            <span className="text-xs font-medium text-muted-foreground/80">09:18 – now</span>
          </div>

          {/* Timeline items */}
          <div className="relative pl-5">
            <div className="absolute bottom-3 left-[7px] top-3 w-px bg-gradient-to-b from-primary/40 via-border/50 to-emerald-400/40" />
            {[
              { time: '09:18', app: 'Cursor', detail: 'ProjectDetailClient.tsx', tone: 'bg-primary', border: 'border-primary/20' },
              { time: '09:42', app: 'Chrome', detail: 'Research tab – docs', tone: 'bg-sky-400', border: 'border-sky-400/20' },
              { time: '10:04', app: 'Idle', detail: 'Break detected', tone: 'bg-amber-400', border: 'border-amber-400/20' },
              { time: '10:12', app: 'Notes', detail: 'Deliverable outline copied', tone: 'bg-emerald-400', border: 'border-emerald-400/20' },
            ].map((row) => (
              <div key={`${row.time}-${row.app}`} className="relative mb-3.5 last:mb-0">
                <span className={`absolute -left-[17px] top-[14px] h-3 w-3 rounded-full ${row.tone} ring-[3px] ring-card shadow-sm`} />
                <div className={`flex items-center justify-between gap-3 rounded-xl bg-muted/30 border ${row.border} px-4 py-3 hover:bg-muted/40 transition-colors duration-200`}>
                  <div className="min-w-0">
                    <div className="text-sm font-semibold text-foreground">{row.app}</div>
                    <div className="mt-0.5 truncate text-xs text-muted-foreground/80">{row.detail}</div>
                  </div>
                  <span className="shrink-0 text-sm font-mono font-medium text-foreground/60">{row.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      ),
    },
    {
      icon: Target,
      eyebrow: 'Work Buddy',
      title: 'Focus sessions show progress while you work',
      description:
        'Start a session, define what counts as productive, and let Work Buddy track focus time, focus score, and distractions without interrupting deep work.',
      outcome: 'Helps you notice drift early and return to the task.',
      visual: (
        <div aria-label="Work Buddy focus session preview">
          {/* Timer & score row */}
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-1.5">Deep work</div>
              <div className="font-mono text-5xl font-bold tracking-tight text-foreground">42:18</div>
            </div>
            <div className="relative h-[5.5rem] w-[5.5rem]">
              <svg className="h-full w-full -rotate-90">
                <circle cx="44" cy="44" r="36" stroke="currentColor" strokeWidth="5" fill="none" className="text-muted/30" />
                <circle
                  cx="44" cy="44" r="36"
                  stroke="url(#focusScoreGrad)"
                  strokeWidth="5" fill="none"
                  strokeDasharray="190 226"
                  strokeLinecap="round"
                />
                <defs>
                  <linearGradient id="focusScoreGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="hsl(160 60% 48%)" />
                    <stop offset="100%" stopColor="hsl(180 60% 45%)" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-emerald-400">84</span>
            </div>
          </div>

          {/* Metric cards */}
          <div className="grid grid-cols-3 gap-2.5 mb-4">
            {[
              { label: 'Focus', value: '38m', tone: 'text-emerald-400', bg: 'bg-emerald-400/[0.06]', border: 'border-emerald-400/15' },
              { label: 'Drift', value: '2', tone: 'text-amber-400', bg: 'bg-amber-400/[0.06]', border: 'border-amber-400/15' },
              { label: 'Break', value: '4m', tone: 'text-sky-400', bg: 'bg-sky-400/[0.06]', border: 'border-sky-400/15' },
            ].map((metric) => (
              <div key={metric.label} className={`rounded-xl border ${metric.border} ${metric.bg} px-3 py-3 text-center transition-all duration-200 hover:scale-[1.03]`}>
                <div className={`text-lg font-bold ${metric.tone}`}>{metric.value}</div>
                <div className="mt-0.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* AI nudge */}
          <div className="rounded-xl border border-primary/20 bg-primary/[0.06] px-4 py-3">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-primary/15">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
              </div>
              <p className="text-sm leading-relaxed text-foreground/80">Back in your editor for 12 minutes. Keep going.</p>
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: BarChart3,
      eyebrow: 'Daily summary',
      title: 'The dashboard makes patterns obvious',
      description:
        'Review today’s focus time, streaks, targets, recent activity, and weekly progress from one calm dashboard built for quick end-of-day review.',
      outcome: 'Helps you improve tomorrow from real evidence.',
      visual: (
        <div className="space-y-4" aria-label="Productivity dashboard preview">
          {/* Top stats row */}
          <div className="grid grid-cols-3 gap-2.5">
            {[
              { label: 'Focus', value: '3h 12m', tone: 'text-primary', bg: 'bg-primary/[0.06]', border: 'border-primary/15' },
              { label: 'Streak', value: '7d', tone: 'text-violet-400', bg: 'bg-violet-400/[0.06]', border: 'border-violet-400/15' },
              { label: 'Target', value: '82%', tone: 'text-emerald-400', bg: 'bg-emerald-400/[0.06]', border: 'border-emerald-400/15' },
            ].map((metric) => (
              <div key={metric.label} className={`rounded-xl ${metric.bg} border ${metric.border} px-3 py-3.5 text-center transition-all duration-200 hover:scale-[1.03]`}>
                <div className={`text-base font-bold ${metric.tone}`}>{metric.value}</div>
                <div className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/70">{metric.label}</div>
              </div>
            ))}
          </div>

          {/* Weekly chart */}
          <div className="rounded-xl border border-border/40 bg-muted/20 p-4">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-semibold text-foreground">Weekly focus</span>
              <span className="text-xs font-bold text-emerald-400 bg-emerald-400/[0.08] px-2 py-0.5 rounded-full">+18%</span>
            </div>
            <div className="flex h-24 items-end gap-2">
              {[42, 64, 38, 76, 58, 88, 72].map((height, index) => (
                <div key={index} className="flex flex-1 flex-col items-center gap-1.5">
                  <div
                    className="w-full rounded-md bg-gradient-to-t from-primary/50 to-primary hover:from-primary/60 hover:to-primary hover:scale-y-105 transition-all duration-200 origin-bottom"
                    style={{ height: `${height}%` }}
                  />
                  <span className="text-[10px] font-medium text-muted-foreground/70">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      icon: Calendar,
      eyebrow: 'Project tracking',
      title: 'Real work gets matched to deliverables',
      description:
        'Attach deadlines, deliverables, milestones, and evidence so OTD can estimate progress from the work you actually did, not from manual status updates.',
      outcome: 'Helps you know what is moving and what is blocked.',
      visual: (
        <div className="space-y-3" aria-label="Project progress preview">
          {/* Project header */}
          <div className="flex items-center justify-between rounded-xl border border-primary/20 bg-primary/[0.05] px-4 py-3">
            <div>
              <div className="text-sm font-semibold text-foreground">Investor memo</div>
              <div className="mt-0.5 text-xs text-muted-foreground/80">Due Friday</div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold text-primary">68%</div>
              <div className="text-[10px] font-semibold uppercase tracking-wider text-primary/60">evidence</div>
            </div>
          </div>

          {/* Deliverable items */}
          {[
            { label: 'Research notes', value: 100, status: 'Accepted', statusColor: 'text-emerald-400 bg-emerald-400/[0.08]' },
            { label: 'Draft sections', value: 64, status: 'In progress', statusColor: 'text-amber-400 bg-amber-400/[0.08]' },
            { label: 'Final review', value: 12, status: 'Waiting', statusColor: 'text-muted-foreground bg-muted/30' },
          ].map((item) => (
            <div key={item.label} className="rounded-xl border border-border/35 bg-muted/15 px-4 py-3">
              <div className="mb-2.5 flex items-center justify-between gap-3">
                <span className="truncate text-sm font-semibold text-foreground">{item.label}</span>
                <span className={`shrink-0 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${item.statusColor}`}>{item.status}</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-background/60">
                <div className="h-full rounded-full bg-gradient-to-r from-primary to-emerald-400 transition-all duration-700" style={{ width: `${item.value}%` }} />
              </div>
            </div>
          ))}
        </div>
      ),
    },
    {
      icon: Shield,
      eyebrow: 'Privacy controls',
      title: 'Policies protect data before insights',
      description:
        'Activity events are stored, filtered by your policies, processed in the background when useful, and can redact PII before summaries or insights are generated.',
      outcome: 'Helps you get context without exposing sensitive details.',
      visual: (
        <div className="space-y-3" aria-label="Privacy processing preview">
          {[
            { icon: Lock, title: 'Local event store', detail: 'Encrypted on device', tone: 'text-sky-400', bg: 'bg-sky-400/[0.08]', border: 'border-sky-400/15' },
            { icon: Shield, title: 'Policy filter', detail: 'Private apps excluded', tone: 'text-primary', bg: 'bg-primary/[0.08]', border: 'border-primary/15' },
            { icon: CheckCircle, title: 'PII redaction', detail: 'Sensitive text masked', tone: 'text-emerald-400', bg: 'bg-emerald-400/[0.08]', border: 'border-emerald-400/15' },
          ].map((step, index) => (
            <div key={step.title} className={`flex items-center gap-3.5 rounded-xl border ${step.border} bg-muted/15 px-4 py-3.5 transition-all duration-200 hover:bg-muted/25`}>
              <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${step.bg}`}>
                <step.icon className={`h-5 w-5 ${step.tone}`} />
              </div>
              <div className="min-w-0 flex-1">
                <div className="text-sm font-semibold text-foreground">{step.title}</div>
                <div className="mt-0.5 truncate text-xs text-muted-foreground/80">{step.detail}</div>
              </div>
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted/30 text-xs font-bold text-muted-foreground/70">0{index + 1}</span>
            </div>
          ))}

          {/* Success badge */}
          <div className="flex items-center gap-2.5 rounded-xl border border-emerald-400/25 bg-emerald-400/[0.06] px-4 py-3">
            <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
            <span className="text-sm font-semibold text-emerald-400">insight ready: no sensitive fields included</span>
          </div>
        </div>
      ),
    },
  ];

  const signalFlow = [
    { icon: Eye, label: 'Capture', detail: 'apps, windows, idle, OCR', accent: { from: 'hsl(230 80% 65%)', to: 'hsl(250 75% 60%)', glow: 'hsl(230 80% 65% / 0.12)', border: 'hsl(230 60% 50% / 0.25)', text: 'hsl(230 80% 72%)', iconBg: 'linear-gradient(135deg, hsl(230 80% 65% / 0.14), hsl(250 75% 60% / 0.07))', iconBorder: 'hsl(230 80% 65% / 0.18)', badgeBg: 'hsl(230 80% 65% / 0.08)', badgeBorder: 'hsl(230 80% 65% / 0.12)' } },
    { icon: Shield, label: 'Filter', detail: 'policies and redaction', accent: { from: 'hsl(270 70% 62%)', to: 'hsl(290 65% 55%)', glow: 'hsl(270 70% 62% / 0.12)', border: 'hsl(270 50% 50% / 0.25)', text: 'hsl(270 70% 72%)', iconBg: 'linear-gradient(135deg, hsl(270 70% 62% / 0.14), hsl(290 65% 55% / 0.07))', iconBorder: 'hsl(270 70% 62% / 0.18)', badgeBg: 'hsl(270 70% 62% / 0.08)', badgeBorder: 'hsl(270 70% 62% / 0.12)' } },
    { icon: Target, label: 'Focus', detail: 'scores and distractions', accent: { from: 'hsl(190 80% 50%)', to: 'hsl(210 85% 55%)', glow: 'hsl(190 80% 50% / 0.12)', border: 'hsl(190 60% 45% / 0.25)', text: 'hsl(190 80% 62%)', iconBg: 'linear-gradient(135deg, hsl(190 80% 50% / 0.14), hsl(210 85% 55% / 0.07))', iconBorder: 'hsl(190 80% 50% / 0.18)', badgeBg: 'hsl(190 80% 50% / 0.08)', badgeBorder: 'hsl(190 80% 50% / 0.12)' } },
    { icon: Calendar, label: 'Attribute', detail: 'projects and evidence', accent: { from: 'hsl(38 90% 55%)', to: 'hsl(28 85% 50%)', glow: 'hsl(38 90% 55% / 0.10)', border: 'hsl(38 60% 45% / 0.25)', text: 'hsl(38 90% 65%)', iconBg: 'linear-gradient(135deg, hsl(38 90% 55% / 0.14), hsl(28 85% 50% / 0.07))', iconBorder: 'hsl(38 90% 55% / 0.18)', badgeBg: 'hsl(38 90% 55% / 0.08)', badgeBorder: 'hsl(38 90% 55% / 0.12)' } },
    { icon: TrendingUp, label: 'Summarize', detail: 'progress and next actions', accent: { from: 'hsl(160 60% 48%)', to: 'hsl(170 65% 42%)', glow: 'hsl(160 60% 48% / 0.12)', border: 'hsl(160 45% 40% / 0.25)', text: 'hsl(160 60% 58%)', iconBg: 'linear-gradient(135deg, hsl(160 60% 48% / 0.14), hsl(170 65% 42% / 0.07))', iconBorder: 'hsl(160 60% 48% / 0.18)', badgeBg: 'hsl(160 60% 48% / 0.08)', badgeBorder: 'hsl(160 60% 48% / 0.12)' } },
  ];

  return (
    <Section id="features" className="py-28 sm:py-36 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/[0.12]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[420px] bg-gradient-to-b from-primary/[0.04] to-transparent rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 h-[420px] w-[520px] bg-emerald-400/[0.035] blur-[110px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 bg-primary/[0.06] border border-primary/[0.12] rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-[-0.02em]">
            See exactly how OTD helps you{' '}
            <span className="gradient-text">own the workday</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            OTD connects passive activity capture, Work Buddy focus sessions, project evidence,
            and privacy controls into one desktop workflow you can understand at a glance.
          </p>
        </div>

        {/* Signal flow pipeline */}
        <div className="mb-10 relative">
          {/* Connecting line behind cards (desktop only) */}
          <div className="hidden sm:block absolute top-1/2 left-[10%] right-[10%] -translate-y-1/2 h-px z-0">
            <div className="h-full bg-gradient-to-r from-[hsl(230_80%_65%/0.06)] via-[hsl(230_80%_65%/0.20)] to-[hsl(160_60%_48%/0.06)]" />
          </div>

          <div className="grid gap-3 sm:grid-cols-5 relative z-[1]">
            {signalFlow.map((step, index) => (
              <div
                key={step.label}
                className="signal-card group relative rounded-2xl border border-[hsl(225_15%_18%)] bg-[hsl(225_25%_8%)] px-5 pt-6 pb-5 transition-all duration-400 overflow-hidden"
                style={{
                  '--accent-border': step.accent.border,
                  '--accent-glow': step.accent.glow,
                } as React.CSSProperties}
              >
                {/* Top gradient shimmer — unique per card */}
                <div
                  className="absolute top-0 left-0 right-0 h-[1px] opacity-60 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(90deg, transparent, ${step.accent.from}, transparent)` }}
                />
                <div
                  className="absolute top-0 left-0 right-0 h-24 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse 80% 100% at 50% 0%, ${step.accent.glow}, transparent)` }}
                />

                {/* Connecting chevron arrow (desktop) */}
                {index < signalFlow.length - 1 && (
                  <div className="absolute right-[-14px] top-1/2 z-10 hidden -translate-y-1/2 sm:flex items-center">
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                      <path d="M2 1L7 6L2 11" stroke="hsl(230 80% 65%)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                )}

                {/* Icon container */}
                <div className="relative mb-4">
                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-400 group-hover:scale-110"
                    style={{
                      background: step.accent.iconBg,
                      borderColor: step.accent.iconBorder,
                    }}
                  >
                    <step.icon className="h-5 w-5 transition-colors duration-300" style={{ color: step.accent.text }} />
                  </div>
                </div>

                {/* Step number badge */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span
                    className="text-[10px] font-bold uppercase tracking-[0.2em] px-2 py-0.5 rounded-full"
                    style={{
                      color: step.accent.text,
                      background: step.accent.badgeBg,
                      border: `1px solid ${step.accent.badgeBorder}`,
                    }}
                  >
                    Step 0{index + 1}
                  </span>
                </div>

                {/* Title */}
                <div className="text-[15px] font-semibold text-[hsl(225_15%_93%)] tracking-tight leading-snug mb-1.5">
                  {step.label}
                </div>

                {/* Description */}
                <div className="text-xs leading-relaxed text-[hsl(225_10%_48%)] group-hover:text-[hsl(225_10%_58%)] transition-colors duration-300">
                  {step.detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature scenes */}
        <div className="grid gap-6 sm:gap-7 lg:grid-cols-6">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`card-premium group relative bg-card/75 p-6 sm:p-7 backdrop-blur-sm transition-all duration-400 hover:shadow-2xl hover:shadow-primary/8 ${
                index < 2 ? 'lg:col-span-3' : 'lg:col-span-2'
              }`}
            >
              <div className="feature-visual mb-7 group-hover:border-border/60 transition-all duration-300">
                {feature.visual}
              </div>

              <div className="mb-4 flex items-center gap-3.5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-primary/15">
                  <feature.icon className="h-5.5 w-5.5 text-primary" />
                </div>
                <div className="min-w-0">
                  <div className="text-xs font-bold uppercase tracking-wider text-primary/80">
                    {feature.eyebrow}
                  </div>
                  <h3 className="mt-1 text-lg font-bold tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm leading-relaxed text-muted-foreground mb-5">
                {feature.description}
              </p>
              <div className="flex items-center gap-2.5 rounded-xl border border-emerald-400/20 bg-emerald-400/[0.05] px-4 py-3">
                <CheckCircle className="h-4 w-4 shrink-0 text-emerald-400" />
                <p className="text-sm font-medium leading-relaxed text-foreground/80">
                  {feature.outcome}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-2xl border border-border/60 bg-card/80 shadow-[0_22px_70px_-44px_hsl(var(--foreground)/0.45)] backdrop-blur-sm">
          <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(28rem,1.05fr)] lg:items-stretch">
            <div className="p-5 sm:p-6 lg:p-7">
              <div className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-primary/75">
                What the user feels
              </div>
              <p className="max-w-2xl text-base leading-7 text-foreground/80">
                Instead of manually logging productivity, they get a private, evidence-backed view
                of what happened, what moved forward, and where focus needs protection next.
              </p>
            </div>
            <div className="grid border-t border-border/60 bg-gradient-to-br from-background/80 to-muted/50 sm:grid-cols-3 lg:border-l lg:border-t-0">
              {[
                { label: 'less reconstruction', value: 'Clear timeline', accent: 'bg-primary/70' },
                { label: 'less drift', value: 'Timely nudges', accent: 'bg-sky-400/80' },
                { label: 'less status work', value: 'Evidence-led progress', accent: 'bg-emerald-400/80' },
              ].map((result) => (
                <div
                  key={result.label}
                  className="relative border-t border-border/60 px-5 py-4 first:border-t-0 sm:border-l sm:border-t-0 sm:first:border-l-0 sm:px-6 sm:py-5"
                >
                  <div className={`mb-4 h-1 w-9 rounded-full ${result.accent}`} />
                  <div className="text-sm font-semibold leading-snug tracking-tight text-foreground">
                    {result.value}
                  </div>
                  <div className="mt-2 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {result.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   HOW IT WORKS SECTION
   ═══════════════════════════════════════════════ */
function HowItWorksSection() {
  const steps = [
    {
      number: '01',
      title: 'Tracks your activity',
      description:
        'OTD runs in the background and monitors apps, windows, idle time, and work context.',
      icon: Activity,
      accent: 'from-indigo-500 to-blue-500',
    },
    {
      number: '02',
      title: 'Detects focus and distractions',
      description:
        'It identifies when you are focused, switching tasks, taking breaks, or getting distracted.',
      icon: Brain,
      accent: 'from-violet-500 to-purple-500',
    },
    {
      number: '03',
      title: 'Links work to projects',
      description:
        'OTD connects your real computer activity to projects, goals, milestones, and deadlines.',
      icon: FolderKanban,
      accent: 'from-blue-500 to-cyan-500',
    },
    {
      number: '04',
      title: 'Shows progress insights',
      description:
        'The dashboard summarizes focus time, streaks, targets, recent activity, and productivity trends.',
      icon: BarChart3,
      accent: 'from-emerald-500 to-teal-500',
    },
    {
      number: '05',
      title: 'Supports better work habits',
      description:
        'Work Buddy gives session tracking, nudges, summaries, and feedback to help you stay on task.',
      icon: Zap,
      accent: 'from-amber-500 to-orange-500',
    },
  ];

  return (
    <Section id="how-it-works" className="py-32 sm:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/[0.06] to-background" />
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[120px]" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-violet-500/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 bg-primary/[0.06] border border-primary/[0.12] rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-[-0.02em]">
            From install to{' '}
            <span className="gradient-text">insight in minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            OTD works quietly in the background — tracking, analysing, and presenting your productivity so you can focus on what matters.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connecting line */}
          <div className="absolute left-[39px] sm:left-[47px] top-8 bottom-8 w-px hidden sm:block">
            <div className="h-full bg-gradient-to-b from-primary/25 via-violet-500/15 to-primary/5" />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-violet-500/8 to-transparent blur-[2px]" />
          </div>

          <div className="space-y-5 sm:space-y-6">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="flex gap-5 sm:gap-8 items-start">
                  {/* Step number column */}
                  <div className="relative flex-shrink-0 pt-6 sm:pt-8">
                    {/* Glowing orb behind number */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${step.accent} rounded-full opacity-0 group-hover:opacity-20 blur-lg transition-all duration-500`} />
                    <div className="relative w-[54px] h-[54px] sm:w-[70px] sm:h-[70px] rounded-full bg-card border-2 border-border/50 flex items-center justify-center shadow-lg group-hover:border-primary/40 group-hover:shadow-primary/15 transition-all duration-500">
                      <span className={`text-xl sm:text-2xl font-black bg-gradient-to-br ${step.accent} bg-clip-text text-transparent`}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 min-w-0">
                    <div className="card-premium relative bg-card/70 backdrop-blur-sm overflow-hidden group-hover:bg-card/90 transition-all duration-500 group-hover:shadow-xl group-hover:shadow-primary/[0.06]">
                      {/* Accent top border */}
                      <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${step.accent} opacity-40 group-hover:opacity-80 transition-opacity duration-500`} />

                      <div className="p-5 sm:p-7">
                        <div className="flex items-start gap-4 sm:gap-5">
                          {/* Icon */}
                          <div className="relative flex-shrink-0 mt-0.5">
                            <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${step.accent} bg-opacity-10 flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:scale-105 transition-all duration-500`} style={{ background: `linear-gradient(135deg, hsl(var(--primary) / 0.1), hsl(var(--primary) / 0.05))` }}>
                              <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                            </div>
                            {/* Icon glow */}
                            <div className="absolute -inset-2 bg-primary/[0.05] rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                          </div>

                          {/* Text */}
                          <div className="flex-1 min-w-0">
                            <h3 className="text-lg sm:text-xl font-bold text-foreground mb-1.5 tracking-tight">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground leading-relaxed text-[14px] sm:text-[15px]">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   STATS / SOCIAL PROOF SECTION
   ═══════════════════════════════════════════════ */
function StatsSection() {
  const stats = [
    { value: '10K+', label: 'Beta Users', icon: Users },
    { value: '2.5M+', label: 'Focus Hours Tracked', icon: Clock },
    { value: '87%', label: 'Avg. Focus Score', icon: Target },
    { value: '500K+', label: 'Distractions Blocked', icon: Shield },
  ];

  return (
    <Section className="py-24 sm:py-28 relative overflow-hidden">
      {/* Subtle light gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-primary/[0.03]" />
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-foreground/[0.05] backdrop-blur-sm flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-foreground/[0.08] transition-all duration-300 border border-foreground/[0.06]">
                <stat.icon className="h-6 w-6 text-foreground/70" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   TESTIMONIALS SECTION
   ═══════════════════════════════════════════════ */
function TestimonialsSection() {
  const testimonials = [
    {
      quote:
        'I used to lose 2-3 hours a day to context switching. Work Buddy helps me notice it early and get back on track without feeling heavy-handed.',
      author: 'Sarah C.',
      role: 'Product Designer',
      avatar: 'SC',
      highlight: '3h saved/day',
    },
    {
      quote:
        'The distraction shield is a game-changer. I turned on commitment mode and my deep work sessions went from 45 minutes to 2+ hours consistently.',
      author: 'Marcus J.',
      role: 'Software Engineer',
      avatar: 'MJ',
      highlight: '2x focus time',
    },
    {
      quote:
        'What sold me is that everything stays on my machine by default. It feels like a clean, private productivity tool that actually works.',
      author: 'Emily R.',
      role: 'Freelance Writer',
      avatar: 'ER',
      highlight: 'Privacy-first',
    },
  ];

  return (
    <Section className="py-32 sm:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-muted/[0.08]" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 bg-primary/[0.06] border border-primary/[0.12] rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
            Testimonials
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-[-0.02em]">
            Trusted by{' '}
            <span className="gradient-text">focused people</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            Hear from beta users who have transformed their daily work habits with OTD.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="card-premium group relative bg-card/70 backdrop-blur-sm p-7 sm:p-8"
            >
              {/* Highlight badge */}
              <div className="inline-flex items-center px-3 py-1 mb-6 bg-primary/[0.08] border border-primary/[0.15] rounded-full text-xs font-semibold text-primary">
                {t.highlight}
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-foreground/85 leading-relaxed mb-7 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3 pt-6 border-t border-border/30">
                <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary to-violet-500 flex items-center justify-center text-xs font-bold text-white shadow-lg shadow-primary/15">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">{t.author}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   CTA SECTION
   ═══════════════════════════════════════════════ */
function CTASection() {
  return (
    <Section className="py-32 sm:py-40 relative overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0 bg-[hsl(225_20%_96%)]" />

      {/* Decorative orbs — cool indigo */}
      <div className="absolute top-[-20%] left-[30%] w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px] orb-float" />
      <div className="absolute bottom-[-20%] right-[20%] w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[100px] orb-float" style={{ animationDelay: '-10s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-[1.1] tracking-[-0.02em]">
          Ready to take back
          <span className="block mt-2">
            <span className="gradient-text">your focus?</span>
          </span>
        </h2>
        <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto leading-relaxed">
          Download OTD, set your first goal, and start a focus session. It takes less than two minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/download">
            <Button
              size="lg"
              className="download-cta btn-glow h-14 w-full rounded-xl px-5 pr-8 text-base font-semibold tracking-[0.01em] transition-all duration-300 sm:w-auto"
            >
              <span className="download-cta-icon mr-3">
                <Download className="h-4 w-4" />
              </span>
              Download for Mac
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-10 text-base font-semibold border-foreground/[0.12] text-foreground hover:bg-foreground/[0.04] transition-all duration-300 rounded-xl cursor-pointer"
            >
              View Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Trust */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-muted-foreground text-sm">
          {['No credit card required', '7-day free trial', 'Cancel anytime'].map((t) => (
            <span key={t} className="flex items-center gap-1.5">
              <CheckCircle className="h-3.5 w-3.5" />
              {t}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ═══════════════════════════════════════════════
   FOOTER
   ═══════════════════════════════════════════════ */
function Footer() {
  const footerLinks = {
    Product: [
      { label: 'Features', href: '/#features' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Download', href: '/download' },
      { label: 'Changelog', href: '#' },
    ],
    Resources: [
      { label: 'Documentation', href: '#' },
      { label: 'Help Center', href: '#' },
      { label: 'Community', href: '#' },
    ],
    Legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
    ],
  };

  return (
    <footer className="relative bg-[hsl(225_20%_96%)] text-foreground overflow-hidden">
      {/* Top gradient border — cool indigo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-violet-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary/15">
                <svg width="18" height="18" viewBox="0 0 48 48" className="text-primary-foreground">
                  <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9">
                    <line x1="24" y1="6" x2="24" y2="2" />
                    <line x1="42" y1="24" x2="46" y2="24" />
                    <line x1="24" y1="42" x2="24" y2="46" />
                    <line x1="6" y1="24" x2="2" y2="24" />
                  </g>
                  <circle cx="24" cy="24" r="8" fill="currentColor" />
                </svg>
              </div>
              <span className="font-bold text-base tracking-tight">OWN THE DAY</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-6">
              AI-powered focus tools that live on your desktop. Private, fast, and designed for deep work.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub' },
                { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
                { icon: Mail, href: 'mailto:hello@owntheday.app', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-lg bg-foreground/[0.04] border border-foreground/[0.06] flex items-center justify-center hover:bg-foreground/[0.08] hover:border-foreground/[0.1] transition-all duration-300"
                >
                  <social.icon className="h-4 w-4 text-muted-foreground hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-muted-foreground uppercase tracking-wider text-xs">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors duration-200 text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-foreground/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Own The Day. All rights reserved.
          </div>
          <div className="text-xs text-muted-foreground">
            Made for people who value their time.
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════════
   MAIN PAGE EXPORT
   ═══════════════════════════════════════════════ */
export default function MainPage() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <StatsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
