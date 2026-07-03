import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import SpecsSection from './SpecsSection';
import FormSection from './FormSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-cyan-500 selection:text-white">
      <HeroSection />
      <FeatureSection />
      <SpecsSection />
      <FormSection />
      
      {/* Footer nhỏ gọn */}
      <footer className="bg-black py-8 text-center text-gray-600 text-sm border-t border-gray-900">
        <p>© 2026 Smartphone Pro Max. All rights reserved.</p>
      </footer>
    </main>
  );
}