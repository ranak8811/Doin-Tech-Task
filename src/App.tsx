import { useState, useEffect } from 'react';
import { Navbar } from './components/navbar/Navbar';
import { HeroBanner } from './components/hero/HeroBanner';
import { PartnerLogos } from './components/partners/PartnerLogos';
import { DiscoverCourses } from './components/courses/DiscoverCourses';
import { ExplorePaths } from './components/paths/ExplorePaths';
import { GrowthAndCreator } from './components/growth/GrowthAndCreator';
import { CreatorBanner } from './components/creator/CreatorBanner';
import { CommunityTestimonials } from './components/community/CommunityTestimonials';
import { Footer } from './components/footer/Footer';
import { Signup } from './components/auth/Signup';

export function App() {
  const [currentView, setCurrentView] = useState<'home' | 'signup'>('home');

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#signup') {
        setCurrentView('signup');
      } else {
        setCurrentView('home');
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  if (currentView === 'signup') {
    return (
      <Signup
        onNavigateHome={() => {
          window.location.hash = '';
          setCurrentView('home');
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <div className="bg-[#1b3cb5] hero-grid-pattern relative">
        <Navbar />
        <HeroBanner />
      </div>

      <PartnerLogos />
      <DiscoverCourses />
      <ExplorePaths />
      <GrowthAndCreator />
      <CreatorBanner />
      <CommunityTestimonials />
      <Footer />
    </div>
  );
}

export default App;
