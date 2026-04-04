// OTD Pricing Page - Standalone Static Version
// No Stripe dependency — uses hardcoded plan info

import { Check, Sparkles, Shield, Zap, Clock, HelpCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function PricingPage() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 gradient-bg-warm" />
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-chart-4/10 rounded-full blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Back to home */}
        <div className="mb-8">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
            ← Back to home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-primary/10 backdrop-blur-sm border border-primary/20 rounded-full">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary">Simple, transparent pricing</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6 tracking-tight">
            Choose your plan to
            <span className="block gradient-text py-1">own every day</span>
          </h1>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Start your productivity journey with a 7-day free trial. No credit card required. 
            Cancel anytime.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-20">
          <PricingCard
            name="Base"
            description="Perfect for individuals getting started with productivity tracking"
            price={8}
            interval="month"
            trialDays={7}
            features={[
              'Unlimited focus sessions',
              'Basic distraction blocking',
              'Daily analytics & insights',
              'Goal tracking (up to 10 goals)',
              'Email support',
            ]}
            popular={false}
          />
          <PricingCard
            name="Plus"
            description="For professionals who want maximum productivity gains"
            price={12}
            interval="month"
            trialDays={7}
            features={[
              'Everything in Base, plus:',
              'AI-powered Work Buddy assistant',
              'Advanced analytics & reports',
              'Unlimited goals & projects',
              'Calendar integration',
              'Priority 24/7 support',
              'Early access to new features',
            ]}
            popular={true}
          />
        </div>

        {/* Trust Indicators */}
        <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto mb-20">
          <TrustBadge 
            icon={Shield} 
            title="Secure Payments" 
            description="256-bit SSL encryption" 
          />
          <TrustBadge 
            icon={Clock} 
            title="7-Day Free Trial" 
            description="No commitment required" 
          />
          <TrustBadge 
            icon={Zap} 
            title="Cancel Anytime" 
            description="No questions asked" 
          />
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground text-center mb-10">
            Frequently Asked Questions
          </h2>
          
          <div className="grid gap-4">
            <FAQItem 
              question="How does the free trial work?"
              answer="Start your 7-day free trial instantly with full access to all features. No credit card required upfront. You'll only be charged if you choose to continue after the trial ends."
            />
            <FAQItem 
              question="Can I switch plans later?"
              answer="Absolutely! You can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to new features. When downgrading, the change takes effect at your next billing cycle."
            />
            <FAQItem 
              question="What payment methods do you accept?"
              answer="We accept all major credit cards (Visa, Mastercard, American Express) as well as PayPal. All payments are processed securely through Stripe."
            />
            <FAQItem 
              question="Is there a money-back guarantee?"
              answer="Yes! If you're not satisfied within the first 30 days of your paid subscription, contact us for a full refund. No questions asked."
            />
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 pt-12 border-t border-border/50">
          <p className="text-muted-foreground mb-4">
            Have questions? We&apos;re here to help.
          </p>
          <a 
            href="mailto:support@owntheday.com" 
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            Contact our team
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
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
  price: number;
  interval: string;
  trialDays: number;
  features: string[];
  popular: boolean;
}) {
  return (
    <div className={`relative rounded-2xl transition-all duration-300 ${
      popular 
        ? 'bg-gradient-to-b from-primary/5 to-primary/10 border-2 border-primary/30 shadow-xl shadow-primary/10' 
        : 'bg-card border border-border/60 hover:border-border hover:shadow-lg'
    }`}>
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-gradient-to-r from-primary via-orange-500 to-amber-500 rounded-full text-white text-sm font-semibold shadow-lg shadow-primary/30">
            <Sparkles className="w-4 h-4" />
            Most Popular
          </div>
        </div>
      )}
      
      <div className="p-8 pt-10">
        {/* Plan header */}
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-foreground mb-2">{name}</h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {description}
          </p>
        </div>
        
        {/* Price */}
        <div className="mb-8">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl font-bold text-foreground tracking-tight">
              ${price}
            </span>
            <span className="text-muted-foreground">
              / {interval}
            </span>
          </div>
          <p className="text-sm text-muted-foreground mt-2">
            Start with {trialDays}-day free trial
          </p>
        </div>
        
        {/* Features */}
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start gap-3">
              <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                popular ? 'bg-primary/20' : 'bg-chart-3/20'
              }`}>
                <Check className={`h-3 w-3 ${popular ? 'text-primary' : 'text-chart-3'}`} />
              </div>
              <span className="text-foreground/80 text-sm leading-relaxed">{feature}</span>
            </li>
          ))}
        </ul>
        
        {/* CTA Button */}
        <Link 
          href="/sign-up"
          className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-all duration-200 ${
            popular 
              ? 'bg-gradient-to-r from-primary via-orange-500 to-amber-500 text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:opacity-90' 
              : 'border-2 border-border text-foreground hover:bg-muted/50'
          }`}
        >
          Start Free Trial
        </Link>
      </div>
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
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card/50 border border-border/50">
      <div className="w-12 h-12 rounded-xl bg-chart-3/10 flex items-center justify-center flex-shrink-0">
        <Icon className="w-6 h-6 text-chart-3" />
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
    <details className="group rounded-xl bg-card/50 border border-border/50 overflow-hidden">
      <summary className="flex items-center justify-between p-5 cursor-pointer hover:bg-muted/30 transition-colors">
        <span className="font-medium text-foreground pr-4">{question}</span>
        <HelpCircle className="w-5 h-5 text-muted-foreground flex-shrink-0 group-open:text-primary transition-colors" />
      </summary>
      <div className="px-5 pb-5 pt-0">
        <p className="text-muted-foreground text-sm leading-relaxed">{answer}</p>
      </div>
    </details>
  );
}
