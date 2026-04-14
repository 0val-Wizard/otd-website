import MainPage from './main-page/MainPage';
import { MarketingHeader } from '@/components/marketing-header';

/* ─── Landing Page ─── */
export default function LandingPage() {
  return (
    <section className="flex flex-col min-h-screen">
      <MarketingHeader activePage="home" ctaHref="/download" ctaLabel="Download" />
      <div className="pt-[4.25rem]">
        <MainPage />
      </div>
    </section>
  );
}
