import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProgramsSection } from './components/ProgramsSection';
import { PwwfSection } from './components/PwwfSection';
import { AppointmentSection } from './components/AppointmentSection';
import { OnlineStudentAssistant } from './components/OnlineStudentAssistant';
import { VerificationSection } from './components/VerificationSection';
import { WhyUsSection } from './components/WhyUsSection';
import { UrduCommunityBanner } from './components/UrduCommunityBanner';
import { ContactSection } from './components/ContactSection';
import { DirectorMessageSection } from './components/DirectorMessageSection';
import { FacebookReviewsSection } from './components/FacebookReviewsSection';
import { DirectorPipWidget } from './components/DirectorPipWidget';
import { Footer } from './components/Footer';
import { BrandKitModal } from './components/BrandKitModal';
import { FloatingAssistantWidget } from './components/FloatingAssistantWidget';
import { StudentApplicationPage } from './pages/StudentApplicationPage';
import { AppointmentBookingPage } from './pages/AppointmentBookingPage';
import { PwwfEligibilityPage } from './pages/PwwfEligibilityPage';
import { ConsultationInquiryPage } from './pages/ConsultationInquiryPage';
import { CURRENT_SESSION } from './utils/academicSession';
import { FileText, ArrowRight, Award, CalendarCheck, MessageSquare } from 'lucide-react';

export type AppView = 'home' | 'apply' | 'appointment' | 'pwwf' | 'inquiry';

export default function App() {
  const [isBrandKitOpen, setIsBrandKitOpen] = useState(false);
  const [isDirectorPipActive, setIsDirectorPipActive] = useState(false);
  const [isDirectorPlaying, setIsDirectorPlaying] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#apply' || hash === '#student-form') return 'apply';
      if (hash === '#appointment' || hash === '#appointment-form') return 'appointment';
      if (hash === '#pwwf' || hash === '#pwwf-eligibility') return 'pwwf';
      if (hash === '#inquiry' || hash === '#consultation') return 'inquiry';
    }
    return 'home';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#apply' || hash === '#student-form') {
        setCurrentView('apply');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#appointment' || hash === '#appointment-form') {
        setCurrentView('appointment');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#pwwf' || hash === '#pwwf-eligibility') {
        setCurrentView('pwwf');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#inquiry' || hash === '#consultation') {
        setCurrentView('inquiry');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '' || hash === '#home') {
        setCurrentView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (view: AppView) => {
    setCurrentView(view);
    if (view === 'apply') {
      window.location.hash = 'apply';
    } else if (view === 'appointment') {
      window.location.hash = 'appointment';
    } else if (view === 'pwwf') {
      window.location.hash = 'pwwf';
    } else if (view === 'inquiry') {
      window.location.hash = 'inquiry';
    } else {
      window.location.hash = '';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (id: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      window.location.hash = '';
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 1. SEPARATE PAGE: Official Student Registration & Admission Form
  if (currentView === 'apply') {
    return (
      <>
        <StudentApplicationPage onBackToHome={() => navigateTo('home')} />
        <BrandKitModal
          isOpen={isBrandKitOpen}
          onClose={() => setIsBrandKitOpen(false)}
        />
      </>
    );
  }

  // 2. SEPARATE PAGE: Official Appointment Booking Form
  if (currentView === 'appointment') {
    return (
      <>
        <AppointmentBookingPage onBackToHome={() => navigateTo('home')} />
        <BrandKitModal
          isOpen={isBrandKitOpen}
          onClose={() => setIsBrandKitOpen(false)}
        />
      </>
    );
  }

  // 3. SEPARATE PAGE: PWWF Scholarship Eligibility Assessment Form
  if (currentView === 'pwwf') {
    return (
      <>
        <PwwfEligibilityPage onBackToHome={() => navigateTo('home')} />
        <BrandKitModal
          isOpen={isBrandKitOpen}
          onClose={() => setIsBrandKitOpen(false)}
        />
      </>
    );
  }

  // 4. SEPARATE PAGE: Direct Admission & Free Consultation Inquiry Form
  if (currentView === 'inquiry') {
    return (
      <>
        <ConsultationInquiryPage onBackToHome={() => navigateTo('home')} />
        <BrandKitModal
          isOpen={isBrandKitOpen}
          onClose={() => setIsBrandKitOpen(false)}
        />
      </>
    );
  }

  // MAIN PAGE VIEW: 100% Form-Free, Compact, Congested & Professional
  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col selection:bg-[#FF7A00] selection:text-white">
      {/* 3-Zone Clean Header */}
      <Navbar
        onOpenBrandKit={() => setIsBrandKitOpen(true)}
        onOpenApplyPage={() => navigateTo('apply')}
        onOpenAppointmentPage={() => navigateTo('appointment')}
        onOpenPwwfPage={() => navigateTo('pwwf')}
        onOpenInquiryPage={() => navigateTo('inquiry')}
      />

      {/* Hero Section */}
      <HeroSection
        onCheckPwwf={() => navigateTo('pwwf')}
        onExplorePrograms={() => scrollToSection('programs')}
        onVerifyCollege={() => scrollToSection('verification')}
        onOpenStudentForm={() => navigateTo('apply')}
        onBookAppointment={() => navigateTo('appointment')}
      />

      {/* Forms Hub Bar: Mentioning All Forms By Name to Open in Separate Pages */}
      <section className="bg-gradient-to-r from-[#0A2342] to-[#123966] text-white py-3 sm:py-3.5 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF7A00] text-white flex items-center justify-center shrink-0 shadow-xs">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[10px] font-black text-amber-300 uppercase tracking-wider">
                  Admissions &amp; Consultation Hub • Session {CURRENT_SESSION.slash}
                </div>
                <h3 className="text-xs sm:text-sm font-extrabold text-white">
                  Official Application Forms &amp; Registration Desks
                </h3>
                <p className="text-[11px] text-slate-300 hidden sm:block">
                  All forms open on dedicated full-screen portals for complete privacy and instant processing.
                </p>
              </div>
            </div>

            {/* Quick Form Buttons */}
            <div className="flex flex-wrap items-center gap-2 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => navigateTo('apply')}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-white hover:bg-slate-100 text-[#0A2342] font-black text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer group"
              >
                <span>Student Form</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF7A00] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('appointment')}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-amber-400 hover:bg-amber-500 text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-sm transition-all cursor-pointer"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-slate-950" />
                <span>Appointment Form</span>
              </button>

              <button
                onClick={() => navigateTo('pwwf')}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/20 transition-all cursor-pointer"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>PWWF Form</span>
              </button>

              <button
                onClick={() => navigateTo('inquiry')}
                className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs flex items-center justify-center gap-1.5 border border-white/20 transition-all cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Inquiry Form</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <ProgramsSection />

      {/* PWWF 100% Scholarship Section (Form-Free with dedicated launcher) */}
      <PwwfSection onOpenPwwfForm={() => navigateTo('pwwf')} />

      {/* Official In-Person & Remote Appointment Booking Section (Form-Free with dedicated launcher) */}
      <AppointmentSection onOpenAppointmentForm={() => navigateTo('appointment')} />

      {/* Online Student Admissions Assistant & Tools */}
      <OnlineStudentAssistant />

      {/* Anti-Fraud College Verification Section */}
      <VerificationSection />

      {/* Why Choose Us Section & Comparison Table */}
      <WhyUsSection />

      {/* Message from Managing Director with Picture-in-Picture (PiP) */}
      <DirectorMessageSection
        isPipActive={isDirectorPipActive}
        onTogglePip={() => setIsDirectorPipActive(!isDirectorPipActive)}
        isPlaying={isDirectorPlaying}
        onTogglePlay={() => setIsDirectorPlaying(!isDirectorPlaying)}
        onBookAppointment={() => navigateTo('appointment')}
      />

      {/* Official Facebook Community, Ratings & Verified Student Reviews */}
      <FacebookReviewsSection />

      {/* Bilingual Urdu Community Outreach Section */}
      <UrduCommunityBanner />

      {/* Physical Office, Location Focus & Free Consultation (Form-Free with dedicated launcher) */}
      <ContactSection onOpenInquiryForm={() => navigateTo('inquiry')} />

      {/* Master Footer with Mandated 3 Lines & Official Government Portals */}
      <Footer onOpenBrandKit={() => setIsBrandKitOpen(true)} />

      {/* Floating Online Assistance Desk Widget */}
      <FloatingAssistantWidget
        onOpenPwwf={() => navigateTo('pwwf')}
        onOpenVerification={() => scrollToSection('verification')}
        onOpenAssistant={() => scrollToSection('assistant')}
        onOpenStudentForm={() => navigateTo('apply')}
        onOpenAppointment={() => navigateTo('appointment')}
        onOpenDirector={() => scrollToSection('director-message')}
        onOpenReviews={() => scrollToSection('reviews')}
      />

      {/* Floating Director Picture-in-Picture (PiP) Widget */}
      <DirectorPipWidget
        isOpen={isDirectorPipActive}
        isPlaying={isDirectorPlaying}
        onTogglePlay={() => setIsDirectorPlaying(!isDirectorPlaying)}
        onClose={() => setIsDirectorPipActive(false)}
        onExpandToSection={() => {
          scrollToSection('director-message');
        }}
      />

      {/* Brand Kit / Downloadable Marketing Posters & PNG Ads Modal */}
      <BrandKitModal
        isOpen={isBrandKitOpen}
        onClose={() => setIsBrandKitOpen(false)}
      />
    </div>
  );
}
