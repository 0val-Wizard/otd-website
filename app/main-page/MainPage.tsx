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
              OTD lives on your desktop, quietly watching your workflow. It nudges you back when
              you drift, blocks distractions before they start, and shows you exactly where your
              time goes — all without leaving your machine.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link href="/download">
                <Button
                  size="lg"
                  className="btn-glow w-full sm:w-auto h-14 px-8 text-base font-semibold bg-gradient-to-r from-primary to-indigo-400 hover:brightness-110 text-white shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 rounded-xl border-0 cursor-pointer"
                >
                  <Download className="mr-2 h-5 w-5" />
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

            <Card className="card-premium relative bg-card/90 backdrop-blur-md border-0 shadow-2xl overflow-hidden rounded-2xl">
              {/* Top bar */}
              <div className="h-11 bg-muted/40 border-b border-border/30 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/80 hover:bg-red-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80 hover:bg-yellow-400 transition-colors" />
                  <div className="w-3 h-3 rounded-full bg-green-400/80 hover:bg-green-400 transition-colors" />
                </div>
                <span className="text-xs text-muted-foreground ml-3 font-medium tracking-wide">Own The Day</span>
              </div>

              <CardContent className="p-7 sm:p-8">
                {/* Status */}
                <div className="flex items-center justify-between mb-7">
                  <div className="flex items-center gap-2.5">
                    <span className="relative flex h-2.5 w-2.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400/60 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                    </span>
                    <span className="text-sm font-medium text-foreground">Deep Focus Active</span>
                  </div>
                  <Badge variant="secondary" className="text-xs bg-muted/50 border-0 font-medium">
                    Today
                  </Badge>
                </div>

                {/* Timer */}
                <div className="text-center mb-7">
                  <div className="text-5xl sm:text-6xl font-bold text-foreground tracking-tight font-mono tabular-nums">
                    2:34:18
                  </div>
                  <div className="text-sm text-muted-foreground mt-2 font-medium">Deep Focus Time</div>
                </div>

                {/* Focus score */}
                <div className="bg-muted/20 rounded-xl p-5 mb-7 border border-border/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-sm font-semibold text-foreground block mb-1">Focus Score</span>
                      <span className="text-xs text-primary font-medium">+12% from yesterday</span>
                    </div>
                    <div className="relative">
                      <svg className="w-16 h-16 -rotate-90">
                        <circle cx="32" cy="32" r="26" stroke="currentColor" strokeWidth="4" fill="none" className="text-muted/30" />
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
                    { icon: Shield, value: '23', label: 'Blocked', color: 'text-slate-400' },
                    { icon: Flame, value: '7', label: 'Streak', color: 'text-violet-400' },
                  ].map((s) => (
                    <div key={s.label} className="bg-muted/20 rounded-xl p-3.5 text-center border border-border/20 hover:border-border/40 transition-colors duration-300">
                      <s.icon className={`w-4 h-4 ${s.color} mx-auto mb-1.5`} />
                      <div className="text-lg font-bold text-foreground">{s.value}</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">{s.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Floating card: AI nudge */}
            <div className="absolute -left-8 top-[30%] float" style={{ animationDelay: '-1s' }}>
              <div className="bg-card/95 backdrop-blur-xl border border-border/30 shadow-2xl shadow-primary/10 p-3.5 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-medium">AI Nudge</div>
                    <div className="text-xs font-semibold text-foreground">&quot;Stay on track!&quot;</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating card: productivity */}
            <div className="absolute -right-6 bottom-[22%] float" style={{ animationDelay: '-2.5s' }}>
              <div className="bg-card/95 backdrop-blur-xl border border-border/30 shadow-2xl shadow-primary/5 p-3.5 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-[10px] text-muted-foreground font-medium">This week</div>
                    <div className="text-sm font-bold text-primary">+24%</div>
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
      title: 'Work Buddy AI',
      description:
        'A real-time focus monitor that lives in your menu bar. It watches your active window, detects drift, and sends gentle nudges before you fall down a rabbit hole.',
    },
    {
      icon: Target,
      title: 'Smart Goals',
      description:
        'Set weekly, quarterly, and yearly targets that break down into daily actions. Track streaks, celebrate milestones, and see how each day compounds.',
    },
    {
      icon: BarChart3,
      title: 'Deep Analytics',
      description:
        'See exactly where your hours go with app-level time tracking, focus heatmaps, and weekly trend reports — all computed locally on your machine.',
    },
    {
      icon: Shield,
      title: 'Distraction Shield',
      description:
        'Block distracting websites and apps during focus sessions. Customizable blocklists with a "commitment mode" that prevents you from cheating.',
    },
    {
      icon: Lock,
      title: 'Privacy-First',
      description:
        'All monitoring happens locally on your device. Your productivity data never leaves your machine — no cloud uploads, no tracking, no compromise.',
    },
    {
      icon: Calendar,
      title: 'Calendar Sync',
      description:
        'Integrates with your calendar to auto-schedule focus blocks around meetings. Know when your next deep work window opens.',
    },
  ];

  return (
    <Section id="features" className="py-32 sm:py-40 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/[0.12]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/[0.03] to-transparent rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 bg-primary/[0.06] border border-primary/[0.12] rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
            Features
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-[-0.02em]">
            Everything you need to{' '}
            <span className="gradient-text">protect your focus</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            A desktop-native toolkit that works quietly in the background — monitoring, blocking,
            and coaching — so you can do your best work.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="card-premium group relative bg-card/70 backdrop-blur-sm p-7 sm:p-8 transition-all duration-400 hover:shadow-2xl hover:shadow-primary/8"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                <feature.icon className="w-5.5 h-5.5 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-3 tracking-tight">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
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
      title: 'Install & set your goals',
      description:
        'Download OTD, define what you want to accomplish this week, and tell Work Buddy which apps count as "productive" for you.',
      icon: Download,
    },
    {
      number: '02',
      title: 'Work — OTD watches quietly',
      description:
        'Start a focus session and get to work. OTD monitors your active window in the background and sends a gentle nudge if you drift to distracting apps.',
      icon: Eye,
    },
    {
      number: '03',
      title: 'Review & improve',
      description:
        'Check your daily analytics, celebrate streaks, and discover patterns. OTD learns your habits and gives smarter suggestions over time.',
      icon: TrendingUp,
    },
  ];

  return (
    <Section id="how-it-works" className="py-32 sm:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/[0.06] to-background" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/[0.03] rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section header */}
        <div className="text-center mb-20 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 bg-primary/[0.06] border border-primary/[0.12] rounded-full text-xs font-semibold text-primary uppercase tracking-wider">
            How It Works
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance leading-[1.1] tracking-[-0.02em]">
            Up and running in{' '}
            <span className="gradient-text">under two minutes</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
            No complex setup, no account creation walls. Install, configure your goals, and start your first focus session.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 relative">
          {/* Connecting line (desktop) — cool indigo gradient */}
          <div className="hidden md:block absolute top-24 left-[20%] right-[20%] h-px">
            <div className="h-full bg-gradient-to-r from-primary/25 via-violet-500/20 to-primary/25" />
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/15 via-violet-500/10 to-primary/15 blur-sm" />
          </div>

          {steps.map((step, index) => (
            <div key={index} className="relative group">
              <div className="text-center">
                {/* Step number badge */}
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 border border-primary/15 mb-8 text-lg font-bold text-foreground group-hover:scale-110 group-hover:bg-primary/15 transition-all duration-300">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary/5 group-hover:shadow-xl group-hover:shadow-primary/10 group-hover:bg-primary/15 transition-all duration-300">
                  <step.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-bold text-foreground mb-3 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto text-sm">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
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
      {/* Subtle dark gradient background */}
      <div className="absolute inset-0 animated-gradient" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/[0.03] via-transparent to-primary/[0.03]" />
      {/* Dot pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 lg:gap-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-14 h-14 rounded-2xl bg-white/[0.06] backdrop-blur-sm flex items-center justify-center mx-auto mb-5 group-hover:scale-110 group-hover:bg-white/[0.10] transition-all duration-300 border border-white/[0.06]">
                <stat.icon className="h-6 w-6 text-white/80" />
              </div>
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2 tracking-tight">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-white/40 font-medium uppercase tracking-widest">
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
        'I used to lose 2-3 hours a day to context switching. Work Buddy catches me within 30 seconds of drifting — it\'s like having a gentle accountability partner.',
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
        'What sold me is that everything stays on my machine. No cloud sync, no data harvesting. Just a clean, private productivity tool that actually works.',
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
      {/* Dark background */}
      <div className="absolute inset-0 bg-[hsl(230_16%_5%)]" />

      {/* Decorative orbs — cool indigo */}
      <div className="absolute top-[-20%] left-[30%] w-[500px] h-[500px] bg-primary/[0.06] rounded-full blur-[120px] orb-float" />
      <div className="absolute bottom-[-20%] right-[20%] w-[400px] h-[400px] bg-violet-500/[0.04] rounded-full blur-[100px] orb-float" style={{ animationDelay: '-10s' }} />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black_30%,transparent_100%)]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.1] tracking-[-0.02em]">
          Ready to take back
          <span className="block mt-2">
            <span className="gradient-text">your focus?</span>
          </span>
        </h2>
        <p className="text-lg text-white/45 mb-12 max-w-xl mx-auto leading-relaxed">
          Download OTD, set your first goal, and start a focus session. It takes less than two minutes.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/download">
            <Button
              size="lg"
              className="btn-glow w-full sm:w-auto h-14 px-10 text-base font-semibold bg-gradient-to-r from-primary to-indigo-400 hover:brightness-110 text-white shadow-xl shadow-primary/20 transition-all duration-300 rounded-xl border-0 cursor-pointer"
            >
              <Download className="mr-2 h-5 w-5" />
              Download for Mac
            </Button>
          </Link>
          <Link href="/pricing">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-14 px-10 text-base font-semibold border-white/[0.12] text-white hover:bg-white/[0.06] transition-all duration-300 rounded-xl cursor-pointer"
            >
              View Pricing
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        {/* Trust */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-white/30 text-sm">
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
    <footer className="relative bg-[hsl(230_16%_5%)] text-white overflow-hidden">
      {/* Top gradient border — cool indigo */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-14">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 bg-gradient-to-br from-primary to-violet-500 rounded-xl flex items-center justify-center shadow-lg shadow-primary/15">
                <svg width="18" height="18" viewBox="0 0 48 48" className="text-white">
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
            <p className="text-white/35 text-sm leading-relaxed max-w-xs mb-6">
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
                  className="w-9 h-9 rounded-lg bg-white/[0.05] border border-white/[0.06] flex items-center justify-center hover:bg-white/[0.1] hover:border-white/[0.12] transition-all duration-300"
                >
                  <social.icon className="h-4 w-4 text-white/50 hover:text-white/80 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm mb-4 text-white/60 uppercase tracking-wider text-xs">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/35 hover:text-white/70 transition-colors duration-200 text-sm"
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
        <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} Own The Day. All rights reserved.
          </div>
          <div className="text-xs text-white/25">
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
