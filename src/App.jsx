import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Countdown from './components/Countdown';
import AboutCouple from './components/AboutCouple';
import WishesCarousel from './components/WishesCarousel';
import SendWishesForm from './components/SendWishesForm';
import ScheduleSection from './components/ScheduleSection';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import ReportProblemModal from './components/ReportProblemModal';
import PrivacyPolicy from './components/PrivacyPolicy';
import AboutPage from './components/AboutPage';
import GalleryPage from './components/GalleryPage';
import { invitationData } from './data/invitationData';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);
  const [wishes, setWishes] = useState(() => {
    const saved = localStorage.getItem('guest_wishes');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return invitationData.initialWishes;
  });

  useEffect(() => {
    localStorage.setItem('guest_wishes', JSON.stringify(wishes));
  }, [wishes]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);
    return () => clearTimeout(timer);
  }, [currentView]);

  const handleAddWish = (newWish) => {
    setWishes((prev) => [newWish, ...prev]);
  };

  // If in Privacy Policy view
  if (currentView === 'privacy') {
    return (
      <PrivacyPolicy
        onBack={() => {
          setCurrentView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="app-container">
      {/* Top Navbar */}
      <Navbar currentView={currentView} setCurrentView={setCurrentView} />

      {/* Main Content by Navigation */}
      {currentView === 'home' && (
        <main>
          <HeroSection data={invitationData} />
          <Countdown targetDate={invitationData.hero.main_event_date} />
          <AboutCouple
            bride={invitationData.bride_details}
            groom={invitationData.groom_details}
          />
          <WishesCarousel wishes={wishes} />
          <SendWishesForm
            onAddWish={handleAddWish}
            sampleAiWishes={invitationData.sampleAiWishes}
          />
          <ScheduleSection schedule={invitationData.schedule} />
          <LocationSection
            venue={invitationData.venue}
            eventDate={invitationData.hero.main_event_date}
          />
        </main>
      )}

      {currentView === 'about' && (
        <main>
          <AboutPage />
        </main>
      )}

      {currentView === 'gallery' && (
        <main>
          <GalleryPage />
        </main>
      )}

      {/* Shared Footer */}
      <Footer
        onOpenReportModal={() => setIsReportModalOpen(true)}
        onOpenPrivacyPolicy={() => {
          setCurrentView('privacy');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Floating Action Controls */}
      <FloatingActions phone={invitationData.hero.contact_phone} />

      {/* Interactive Report a Problem Modal */}
      <ReportProblemModal
        isOpen={isReportModalOpen}
        onClose={() => setIsReportModalOpen(false)}
      />
    </div>
  );
}
