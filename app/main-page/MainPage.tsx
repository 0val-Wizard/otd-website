// OTD Landing Page - Premium, Modern Entry Point
// Elevated design with compelling visuals and excellent UX

"use client";

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Zap, 
  Target, 
  Clock, 
  TrendingUp, 
  Shield, 
  BarChart3,
  Mail, 
  Github, 
  Twitter,
  CheckCircle,
  Play,
  Sparkles,
  Star,
  Users,
  Timer,
  Calendar,
  Brain,
  Flame,
  ChevronRight,
  ArrowUpRight
} from 'lucide-react';
import Link from 'next/link';

// Animated Counter Component
function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = numericValue / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [numericValue]);
  
  const prefix = value.includes('+') ? '' : '';
  const displaySuffix = value.includes('+') ? '+' : '';
  const displayPrefix = value.includes('K') ? '' : '';
  
  return (
    <span>
      {count.toLocaleString()}{value.includes('K') ? 'K' : ''}{value.includes('M') ? 'M' : ''}{displaySuffix}{suffix}
    </span>
  );
}

// OTD Logo Component - Refined
function OTDLogo({ size = "large" }: { size?: "small" | "large" }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative group">
        <div className={`${size === "large" ? "w-14 h-14" : "w-10 h-10"} bg-gradient-to-br from-primary via-orange-500 to-amber-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-shadow duration-300`}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl" />
          <svg 
            width={size === "large" ? 28 : 20} 
            height={size === "large" ? 28 : 20} 
            viewBox="0 0 48 48" 
            className="text-white relative z-10"
          >
            <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9">
              <line x1="24" y1="6" x2="24" y2="2" />
              <line x1="35" y1="9" x2="38" y2="6" />
              <line x1="42" y1="24" x2="46" y2="24" />
              <line x1="35" y1="39" x2="38" y2="42" />
              <line x1="24" y1="42" x2="24" y2="46" />
              <line x1="13" y1="39" x2="10" y2="42" />
              <line x1="6" y1="24" x2="2" y2="24" />
              <line x1="13" y1="9" x2="10" y2="6" />
            </g>
            <circle cx="24" cy="24" r="8" fill="currentColor" />
          </svg>
        </div>
        <div className="absolute -inset-1 bg-gradient-to-r from-primary via-orange-500 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-300 -z-10" />
      </div>
      <div>
        <h1 className={`font-bold tracking-tight text-foreground ${size === "large" ? "text-2xl" : "text-lg"}`}>
          OWN THE DAY
        </h1>
        {size === "large" && (
          <p className="text-xs text-muted-foreground font-semibold tracking-[0.2em] uppercase">
            Productivity Mastery
          </p>
        )}
      </div>
    </div>
  );
}

// Floating Decoration Blobs
function FloatingBlobs() {
  return (
    <>
      <div className="absolute top-20 left-[10%] w-96 h-96 bg-gradient-to-br from-primary/20 to-orange-500/10 rounded-full blur-3xl blob-animate opacity-60" />
      <div className="absolute top-40 right-[5%] w-80 h-80 bg-gradient-to-br from-chart-4/15 to-chart-5/10 rounded-full blur-3xl blob-animate opacity-50" style={{ animationDelay: '-2s' }} />
      <div className="absolute bottom-20 left-[20%] w-72 h-72 bg-gradient-to-br from-chart-2/15 to-chart-3/10 rounded-full blur-3xl blob-animate opacity-40" style={{ animationDelay: '-4s' }} />
    </>
  );
}

// Hero Section - Premium Design
function HeroSection() {
  return (
    <section className="relative min-h-screen pt-24 pb-20 overflow-hidden flex items-center">
      {/* Background */}
      <div className="absolute inset-0 gradient-bg-warm" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
      
      {/* Floating decorations */}
      <FloatingBlobs />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="text-center lg:text-left fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-primary">AI-Powered Focus Intelligence</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Master Your
              <span className="block gradient-text py-2">Productivity</span>
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Transform how you work with intelligent focus monitoring, smart distraction blocking, 
              and actionable insights. Own every moment of your day.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link href="/pricing">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-14 px-8 text-base font-semibold bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:opacity-90 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/dashboard">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="w-full sm:w-auto h-14 px-8 text-base font-semibold border-2 hover:bg-muted/50 transition-all duration-300"
                >
                  <Play className="mr-2 h-5 w-5 fill-current" />
                  Watch Demo
                </Button>
              </Link>
            </div>
            
            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3 justify-center lg:justify-start">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-chart-3/20 flex items-center justify-center">
                  <CheckCircle className="h-3.5 w-3.5 text-chart-3" />
                </div>
                Free 7-day trial
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-chart-3/20 flex items-center justify-center">
                  <CheckCircle className="h-3.5 w-3.5 text-chart-3" />
                </div>
                No credit card required
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-5 h-5 rounded-full bg-chart-3/20 flex items-center justify-center">
                  <CheckCircle className="h-3.5 w-3.5 text-chart-3" />
                </div>
                Cancel anytime
              </div>
            </div>
          </div>
          
          {/* Right: Dashboard Preview */}
          <div className="relative fade-in" style={{ animationDelay: '0.2s' }}>
            {/* Main card with glass effect */}
            <div className="relative">
              {/* Glow effect behind card */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-orange-500/20 to-chart-4/20 rounded-3xl blur-2xl opacity-60" />
              
              <Card className="relative glass border-white/40 dark:border-white/10 shadow-2xl mx-auto max-w-md lg:max-w-none overflow-hidden">
                {/* Gradient top bar */}
                <div className="h-1.5 bg-gradient-to-r from-primary via-orange-500 to-amber-500" />
                
                <CardContent className="p-8">
                  {/* Status bar */}
                  <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                      <span className="relative flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-chart-3 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-chart-3"></span>
                      </span>
                      <span className="text-sm font-semibold text-foreground">Focus Session Active</span>
                    </div>
                    <Badge variant="secondary" className="text-xs bg-muted/80 border-0">
                      Today
                    </Badge>
                  </div>
                  
                  {/* Main timer display */}
                  <div className="text-center mb-8">
                    <div className="text-6xl font-bold text-foreground tracking-tight font-mono">
                      2:34:18
                    </div>
                    <div className="text-sm text-muted-foreground mt-2 font-medium">Deep Focus Time</div>
                  </div>
                  
                  {/* Focus Score with animated ring */}
                  <div className="relative mb-8">
                    <div className="bg-gradient-to-br from-chart-3/10 via-chart-2/5 to-chart-3/10 rounded-2xl p-6 border border-chart-3/20">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-sm font-semibold text-foreground block mb-1">Focus Score</span>
                          <span className="text-xs text-muted-foreground">+12% from yesterday</span>
                        </div>
                        <div className="relative">
                          <svg className="w-20 h-20 -rotate-90">
                            <circle cx="40" cy="40" r="32" stroke="currentColor" strokeWidth="6" fill="none" className="text-muted/30" />
                            <circle cx="40" cy="40" r="32" stroke="url(#scoreGradient)" strokeWidth="6" fill="none" 
                              strokeDasharray={`${87 * 2.01} ${100 * 2.01}`}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                            />
                            <defs>
                              <linearGradient id="scoreGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="hsl(var(--chart-3))" />
                                <stop offset="100%" stopColor="hsl(var(--chart-2))" />
                              </linearGradient>
                            </defs>
                          </svg>
                          <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-chart-3">87</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Stats grid */}
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-muted/50 rounded-xl p-4 text-center border border-border/50 hover:border-primary/30 transition-colors duration-200">
                      <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-2">
                        <Target className="w-4 h-4 text-primary" />
                      </div>
                      <div className="text-xl font-bold text-foreground">5</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Goals Done</div>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4 text-center border border-border/50 hover:border-chart-4/30 transition-colors duration-200">
                      <div className="w-8 h-8 rounded-lg bg-chart-4/10 flex items-center justify-center mx-auto mb-2">
                        <Shield className="w-4 h-4 text-chart-4" />
                      </div>
                      <div className="text-xl font-bold text-chart-4">23</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Blocked</div>
                    </div>
                    <div className="bg-muted/50 rounded-xl p-4 text-center border border-border/50 hover:border-chart-2/30 transition-colors duration-200">
                      <div className="w-8 h-8 rounded-lg bg-chart-2/10 flex items-center justify-center mx-auto mb-2">
                        <Flame className="w-4 h-4 text-chart-2" />
                      </div>
                      <div className="text-xl font-bold text-chart-2">7</div>
                      <div className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Day Streak</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            {/* Floating stats cards */}
            <div className="absolute -left-8 top-1/4 hidden lg:block float" style={{ animationDelay: '-1s' }}>
              <Card className="glass border-white/40 dark:border-white/10 shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-chart-3/20 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-chart-3" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">Productivity</div>
                    <div className="text-lg font-bold text-chart-3">+24%</div>
                  </div>
                </div>
              </Card>
            </div>
            
            <div className="absolute -right-4 bottom-1/4 hidden lg:block float" style={{ animationDelay: '-2s' }}>
              <Card className="glass border-white/40 dark:border-white/10 shadow-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-chart-2/20 flex items-center justify-center">
                    <Brain className="w-5 h-5 text-chart-2" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground">AI Insights</div>
                    <div className="text-lg font-bold text-chart-2">Active</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Features Section - Premium Grid
function FeaturesSection() {
  const features = [
    {
      icon: Zap,
      title: "Work Buddy AI",
      description: "Intelligent focus monitoring that tracks your productivity in real-time and helps you stay on track with gentle, smart nudges.",
      gradient: "from-primary to-orange-500",
      bgGradient: "from-primary/10 to-orange-500/10"
    },
    {
      icon: Target,
      title: "Smart Goals",
      description: "Set weekly, quarterly, and yearly targets. Track progress with detailed analytics and celebrate every achievement.",
      gradient: "from-chart-3 to-emerald-500",
      bgGradient: "from-chart-3/10 to-emerald-500/10"
    },
    {
      icon: BarChart3,
      title: "Deep Analytics",
      description: "Comprehensive insights into work patterns, focus trends, and productivity metrics to optimize your daily routine.",
      gradient: "from-chart-2 to-blue-500",
      bgGradient: "from-chart-2/10 to-blue-500/10"
    },
    {
      icon: Shield,
      title: "Distraction Shield",
      description: "Automatically detect and block distracting websites and apps during focus sessions for uninterrupted deep work.",
      gradient: "from-chart-4 to-violet-500",
      bgGradient: "from-chart-4/10 to-violet-500/10"
    },
    {
      icon: Timer,
      title: "Time Intelligence",
      description: "Effortlessly track time spent on tasks and projects. Know exactly where your productive hours go each day.",
      gradient: "from-chart-5 to-rose-500",
      bgGradient: "from-chart-5/10 to-rose-500/10"
    },
    {
      icon: Calendar,
      title: "Calendar Sync",
      description: "Seamlessly integrate with your calendar. Auto-schedule focus blocks and never miss important meetings.",
      gradient: "from-amber-500 to-yellow-500",
      bgGradient: "from-amber-500/10 to-yellow-500/10"
    }
  ];

  return (
    <section id="features" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-primary/10 text-primary border-primary/20 text-sm font-medium">
            Powerful Features
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Everything you need to
            <span className="gradient-text"> own your day</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Powerful, intuitive tools designed to maximize your productivity and help you achieve more every single day.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-border/50 hover:border-transparent transition-all duration-500 card-hover"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <CardContent className="relative p-8">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
                <div className="mt-6 flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn more <ChevronRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

// How It Works Section - Visual Steps
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Set Your Goals",
      description: "Define your daily, weekly, and long-term targets. Break down big ambitions into actionable, trackable tasks.",
      icon: Target,
      color: "primary"
    },
    {
      number: "02",
      title: "Start Focus Sessions",
      description: "Launch Work Buddy and let it monitor your focus. Get intelligent notifications when distractions creep in.",
      icon: Timer,
      color: "chart-2"
    },
    {
      number: "03",
      title: "Track & Improve",
      description: "Review detailed analytics, celebrate wins, and continuously optimize your productivity habits over time.",
      icon: TrendingUp,
      color: "chart-3"
    }
  ];

  return (
    <section id="how-it-works" className="py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-chart-2/10 text-chart-2 border-chart-2/20 text-sm font-medium">
            Simple Process
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 text-balance">
            Get started in <span className="gradient-text-blue">3 simple steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Transform your productivity in minutes, not hours. Our streamlined setup gets you focused fast.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 left-[60%] w-[80%] h-px">
                  <div className="h-full bg-gradient-to-r from-border via-primary/30 to-border" />
                  <div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/30" />
                </div>
              )}
              
              <div className="relative text-center lg:text-left">
                {/* Large number background */}
                <div className="text-[120px] font-bold text-primary/5 absolute -top-8 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 leading-none select-none">
                  {step.number}
                </div>
                
                {/* Content */}
                <div className="relative pt-8 lg:pt-12">
                  <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br from-${step.color} to-${step.color}/80 flex items-center justify-center mx-auto lg:mx-0 mb-8 shadow-xl shadow-${step.color}/20`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Stats Section - Impressive Numbers
function StatsSection() {
  const stats = [
    { value: "10K", suffix: "+", label: "Active Users", icon: Users },
    { value: "2.5M", suffix: "+", label: "Focus Hours", icon: Clock },
    { value: "87", suffix: "%", label: "Avg Focus Score", icon: Target },
    { value: "500K", suffix: "+", label: "Distractions Blocked", icon: Shield }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 animated-gradient opacity-95" />
      
      {/* Pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mx-auto mb-6 group-hover:scale-110 group-hover:bg-white/20 transition-all duration-300">
                <stat.icon className="h-8 w-8 text-white" />
              </div>
              <div className="text-5xl sm:text-6xl font-bold text-white mb-2 tracking-tight">
                {stat.value}<span className="text-white/80">{stat.suffix}</span>
              </div>
              <div className="text-sm text-white/70 font-medium uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Testimonials Section - Premium Cards
function TestimonialsSection() {
  const testimonials = [
    {
      quote: "Work Buddy has completely transformed how I work. I've doubled my productive output since I started using it three months ago.",
      author: "Sarah Chen",
      role: "Product Designer at Figma",
      avatar: "SC",
      rating: 5,
      highlight: "2x productivity"
    },
    {
      quote: "The distraction blocking feature alone is worth every penny. I finally have control over my focus time and deep work sessions.",
      author: "Marcus Johnson",
      role: "Senior Software Engineer",
      avatar: "MJ",
      rating: 5,
      highlight: "Deep focus"
    },
    {
      quote: "Simple, beautiful, and incredibly effective. This is the productivity tool I've been searching for my entire career.",
      author: "Emily Rodriguez",
      role: "Freelance Writer & Author",
      avatar: "ER",
      rating: 5,
      highlight: "Life-changing"
    }
  ];

  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-muted/30" />
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <Badge className="mb-6 px-4 py-2 bg-chart-3/10 text-chart-3 border-chart-3/20 text-sm font-medium">
            Testimonials
          </Badge>
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
            Loved by <span className="gradient-text-green">productive people</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands who have transformed their work habits and achieved more with OTD.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-500 card-hover"
            >
              {/* Highlight badge */}
              <div className="absolute top-6 right-6">
                <Badge variant="secondary" className="bg-chart-3/10 text-chart-3 border-chart-3/20 text-xs font-semibold">
                  {testimonial.highlight}
                </Badge>
              </div>
              
              <CardContent className="p-8 pt-6">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                
                <p className="text-foreground text-lg leading-relaxed mb-8">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                
                <div className="flex items-center gap-4 pt-6 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-orange-500 flex items-center justify-center text-sm font-bold text-white shadow-lg">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.author}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Trust logos placeholder */}
        <div className="mt-20 text-center">
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider font-medium">Trusted by teams at</p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {['Google', 'Microsoft', 'Meta', 'Apple', 'Amazon'].map((company) => (
              <span key={company} className="text-2xl font-bold text-foreground">{company}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section - Compelling Final Push
function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-foreground via-foreground to-foreground/95" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-chart-4/20 rounded-full blur-3xl" />
      
      {/* Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]" />
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 bg-primary/20 backdrop-blur-sm border border-primary/30 rounded-full">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Start your journey today</span>
        </div>
        
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
          Ready to own
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-orange-400 to-amber-400">
            your day?
          </span>
        </h2>
        <p className="text-xl text-background/70 mb-12 max-w-2xl mx-auto leading-relaxed">
          Join thousands of productive professionals who have transformed their work habits and achieved their goals with OTD.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/pricing">
            <Button 
              size="lg" 
              className="w-full sm:w-auto h-14 px-10 text-base font-semibold bg-gradient-to-r from-primary via-orange-500 to-amber-500 hover:opacity-90 text-white shadow-xl shadow-primary/40 hover:shadow-2xl hover:shadow-primary/50 transition-all duration-300"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto h-14 px-10 text-base font-semibold border-2 border-background/20 text-background hover:bg-background/10 transition-all duration-300"
            >
              See Demo
              <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
        
        {/* Final trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-background/50 text-sm">
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            No credit card required
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            7-day free trial
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="h-4 w-4" />
            Cancel anytime
          </div>
        </div>
      </div>
    </section>
  );
}

// Footer - Professional and Clean
function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setSubscribed(true);
    setEmail('');
    setTimeout(() => setSubscribed(false), 3000);
  };

  const footerLinks = {
    product: ['Features', 'Pricing', 'Integrations', 'Changelog'],
    company: ['About', 'Blog', 'Careers', 'Press'],
    resources: ['Documentation', 'Help Center', 'Community', 'Contact'],
    legal: ['Privacy', 'Terms', 'Security', 'Cookies']
  };

  return (
    <footer className="bg-foreground text-background py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          {/* Brand & Newsletter */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary via-orange-500 to-amber-500 rounded-xl flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 48 48" className="text-white">
                  <g stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9">
                    <line x1="24" y1="6" x2="24" y2="2" />
                    <line x1="42" y1="24" x2="46" y2="24" />
                    <line x1="24" y1="42" x2="24" y2="46" />
                    <line x1="6" y1="24" x2="2" y2="24" />
                  </g>
                  <circle cx="24" cy="24" r="8" fill="currentColor" />
                </svg>
              </div>
              <span className="font-bold text-lg">OWN THE DAY</span>
            </div>
            
            <p className="text-background/60 mb-6 max-w-sm leading-relaxed">
              Transform your productivity with AI-powered focus tools. Join thousands achieving more every day.
            </p>
            
            <form onSubmit={handleSubscribe} className="flex gap-2">
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/10 border border-background/20 rounded-xl text-background placeholder:text-background/40 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm transition-all duration-200"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={subscribed}
              />
              <Button 
                type="submit" 
                disabled={subscribed}
                className="px-6 rounded-xl bg-primary hover:bg-primary/90"
              >
                {subscribed ? '✓' : 'Subscribe'}
              </Button>
            </form>
          </div>
          
          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Product</h4>
            <ul className="space-y-3">
              {footerLinks.product.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-background/90">Resources</h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a href="#" className="text-background/60 hover:text-background transition-colors text-sm">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Bottom bar */}
        <div className="pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-background/50">
            © {new Date().getFullYear()} Own The Day. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" 
               className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Github className="h-5 w-5" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
               className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="mailto:hello@owntheday.com"
               className="w-10 h-10 rounded-xl bg-background/10 flex items-center justify-center hover:bg-background/20 transition-colors">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Main Page Component
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
