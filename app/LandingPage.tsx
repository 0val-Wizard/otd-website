import MainPage from './main-page/MainPage';
import { MarketingHeader } from '@/components/marketing-header';

/* ─── Landing Page ─── */
export default function LandingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      <MarketingHeader activePage="home" ctaHref="/download" ctaLabel="Download" />
      <MainPage />
    </main>
  );
}
