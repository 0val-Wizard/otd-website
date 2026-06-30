import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Check, Clock, Download, HelpCircle, Shield, Sparkles, Target, Zap } from 'lucide-react';
import Link from 'next/link';
import { MarketingHeader } from '@/components/marketing-header';

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-background">
      <MarketingHeader activePage="pricing" ctaHref="/download" ctaLabel="Download" alwaysSolid />

      <div className="relative overflow-hidden pt-[4.25rem]">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute left-[12%] top-[-10%] h-[540px] w-[540px] rounded-full bg-primary/[0.05] blur-[120px]" />
        <div className="absolute bottom-[12%] right-[8%] h-[420px] w-[420px] rounded-full bg-violet-500/[0.04] blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--foreground)/0.02)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--foreground)/0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        <section className="relative mx-auto max-w-7xl px-4 pb-24 pt-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <Badge className="mb-6 border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Sparkles className="mr-2 h-4 w-4" />
              Simple, transparent pricing
            </Badge>

            <h1 className="mb-6 text-4xl font-bold tracking-[-0.03em] text-foreground sm:text-5xl lg:text-6xl">
              Choose the plan that helps you
              <span className="mt-2 block gradient-text">protect your best work</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Start with a 7-day free trial, keep everything local-first, and upgrade only when
              you want deeper analytics, smarter nudges, and more control.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              {['7-day free trial', 'No credit card required', 'Cancel anytime'].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <Check className="h-3.5 w-3.5 text-primary" />
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-5xl gap-8 lg:grid-cols-2">
            <PricingCard
              name="Pro"
              description="Perfect for building consistent focus habits and tracking your daily coursework."
              price="9.99"
              interval="month"
              trialDays={7}
              features={[
                'Unlimited focus sessions',
                'Basic distraction blocking',
                'Daily analytics and insights',
                'Goal tracking for up to 10 projects',
                'Email support',
              ]}
              popular={false}
            />
            <PricingCard
              name="Plus"
              description="For ambitious students who want deeper project visibility and proactive study coaching."
              price="12.90"
              interval="month"
              trialDays={7}
              features={[
                'Everything in Pro',
                'AI-powered study assistant',
                'Advanced reports and trend analysis',
                'Unlimited goals and projects',
                'Calendar integration',
                'Priority support and early feature access',
              ]}
              popular
            />
          </div>

          <div className="mx-auto mt-20 grid max-w-4xl gap-5 sm:grid-cols-3">
            <TrustBadge
              icon={Shield}
              title="Private by default"
              description="Your focus data stays on your machine."
            />
            <TrustBadge
              icon={Clock}
              title="7-day free trial"
              description="Try every plan with zero commitment."
            />
            <TrustBadge
              icon={Target}
              title="Built for deep work"
              description="Designed for people who value focus."
            />
          </div>
        </section>

        <section className="relative border-y border-border/40 bg-muted/[0.12] py-20">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
                Frequently asked questions
              </h2>
              <p className="mt-4 text-muted-foreground">
                Everything you need to know before starting your trial.
              </p>
            </div>

            <div className="mx-auto grid max-w-3xl gap-4">
              <FAQItem
                question="How does the free trial work?"
                answer="You get full access for 7 days with no card required up front. If you decide to continue, you can choose the plan that fits your workflow."
              />
              <FAQItem
                question="Can I switch plans later?"
                answer="Yes. You can upgrade when you want smarter coaching and deeper analytics, or move back down if you want a simpler setup."
              />
              <FAQItem
                question="What payment methods do you accept?"
                answer="We accept all major credit cards and standard online payment methods supported by our billing provider."
              />
              <FAQItem
                question="Is there a money-back guarantee?"
                answer="Yes. If the paid plan is not a fit during your first 30 days, contact support and we will help make it right."
              />
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden py-20">
          <div className="absolute inset-0 bg-[hsl(225_20%_96%)]" />
          <div className="absolute left-[30%] top-[-20%] h-[500px] w-[500px] rounded-full bg-primary/[0.06] blur-[120px]" />
          <div className="absolute bottom-[-20%] right-[20%] h-[400px] w-[400px] rounded-full bg-violet-500/[0.04] blur-[100px]" />

          <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold tracking-[-0.02em] text-foreground sm:text-4xl">
              Ready to get started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Start your free trial today and see where your focus really goes.
            </p>

            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="download-cta btn-glow h-12 rounded-xl px-8 text-base font-semibold tracking-[0.01em] transition-all duration-300 hover:-translate-y-0.5"
              >
                <Link href="/download">
                  <span className="download-cta-icon mr-2.5 flex items-center justify-center">
                    <Download className="h-4 w-4" />
                  </span>
                  Download for Mac
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-foreground/[0.12] text-foreground hover:bg-foreground/[0.04]"
              >
                <a href="mailto:support@owntheday.com">
                  Contact our team
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function PricingCard({
  name,
  description,
  price,
  interval,
  trialDays,
  features,
  popular,
}: {
  name: string;
  description: string;
  price: number | string;
  interval: string;
  trialDays: number;
  features: string[];
  popular: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col rounded-[2rem] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1 bg-zinc-950 text-white ${
        popular
          ? 'shadow-2xl shadow-indigo-500/10 ring-1 ring-white/20'
          : 'ring-1 ring-white/10'
      }`}
    >
      {popular && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-5 py-2 text-sm font-bold tracking-wide text-white shadow-xl shadow-indigo-500/25 ring-4 ring-background">
            <Sparkles className="w-4 h-4" />
            MOST POPULAR
          </div>
        </div>
      )}

      <div className="mb-6 flex-1">
        <h2 className="text-2xl font-bold tracking-tight mb-2">{name}</h2>
        <p className="text-sm leading-relaxed text-zinc-400">
          {description}
        </p>
      </div>

      <div className="mb-8 rounded-2xl p-6 bg-white/5 ring-1 ring-white/10">
        <div className="flex items-baseline gap-2">
          <span className="text-5xl font-bold tracking-tight">
            ${price}
          </span>
          <span className="text-sm font-medium text-zinc-400">
            / {interval}
          </span>
        </div>
        <div className="mt-3 flex items-center gap-2 text-sm font-medium text-zinc-300">
          <div className="h-1.5 w-1.5 rounded-full bg-green-400" />
          Start with {trialDays}-day free trial
        </div>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <div className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-white/10 text-zinc-300">
              <Check className="h-3 w-3" />
            </div>
            <span className="text-sm leading-relaxed text-zinc-300">
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        asChild
        size="lg"
        className="w-full mt-auto rounded-xl font-semibold h-12 bg-white text-zinc-950 hover:bg-zinc-200"
      >
        <Link href="/download">Download OTD</Link>
      </Button>
    </div>
  );
}

function TrustBadge({ 
  icon: Icon, 
  title, 
  description 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
}) {
  return (
    <div className="card-premium flex items-center gap-4 rounded-2xl bg-card/70 p-5 backdrop-blur-sm">
      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
        <Icon className="h-6 w-6 text-primary" />
      </div>
      <div>
        <div className="font-semibold text-foreground text-sm">{title}</div>
        <div className="text-xs text-muted-foreground">{description}</div>
      </div>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  return (
    <details className="group card-premium overflow-hidden rounded-2xl bg-card/70 backdrop-blur-sm">
      <summary className="flex cursor-pointer items-center justify-between p-5 transition-colors hover:bg-muted/30">
        <span className="font-medium text-foreground pr-4">{question}</span>
        <HelpCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 group-open:text-primary transition-colors" />
      </summary>
      <div className="px-5 pb-5 pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}
