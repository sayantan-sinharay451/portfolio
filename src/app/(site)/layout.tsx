import { Navbar } from '@/components/site/Navbar';
import { AnimatedBackground } from '@/components/site/AnimatedBackground';
import FooterSection from './_components/FooterSection';

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-x-clip">
      <Navbar />
      <div className="relative">
        <AnimatedBackground />
        <main className="relative mt-16 min-h-[calc(100svh-4rem)] md:mt-20 md:min-h-[calc(100svh-5rem)]">
          {children}
        </main>
        <FooterSection />
      </div>
    </div>
  );
}
