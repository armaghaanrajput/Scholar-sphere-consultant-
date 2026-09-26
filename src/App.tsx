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
import { Footer } from './components/Footer';
import { BrandKitModal } from './components/BrandKitModal';
import { FloatingAssistantWidget } from './components/FloatingAssistantWidget';
import { StudentApplicationPage } from './pages/StudentApplicationPage';
import { AppointmentBookingPage } from './pages/AppointmentBookingPage';
import { PwwfEligibilityPage } from './pages/PwwfEligibilityPage';
import { ConsultationInquiryPage } from './pages/ConsultationInquiryPage';
import { MeritMatcherPage } from './pages/MeritMatcherPage';
import { DocumentChecklistPage } from './pages/DocumentChecklistPage';
import { FaqSearchDeskPage } from './pages/FaqSearchDeskPage';
import { CURRENT_SESSION } from './utils/academicSession';
import { FileText, ArrowRight, Award, CalendarCheck, MessageSquare, Calculator, FileCheck2, HelpCircle } from 'lucide-react';

export type AppView = 'home' | 'apply' | 'appointment' | 'pwwf' | 'inquiry' | 'matcher' | 'checklist' | 'faq';

export default function App() {
  const [isBrandKitOpen, setIsBrandKitOpen] = useState(false);
  const [currentView, setCurrentView] = useState<AppView>(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.toLowerCase();
      if (hash === '#apply' || hash === '#student-form') return 'apply';
      if (hash === '#appointment' || hash === '#appointment-form') return 'appointment';
      if (hash === '#pwwf' || hash === '#pwwf-eligibility') return 'pwwf';
      if (hash === '#inquiry' || hash === '#consultation') return 'inquiry';
      if (hash === '#matcher' || hash === '#merit-matcher') return 'matcher';
      if (hash === '#checklist' || hash === '#document-checklist') return 'checklist';
      if (hash === '#faq' || hash === '#faq-desk') return 'faq';
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
      } else if (hash === '#matcher' || hash === '#merit-matcher') {
        setCurrentView('matcher');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#checklist' || hash === '#document-checklist') {
        setCurrentView('checklist');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (hash === '#faq' || hash === '#faq-desk') {
        setCurrentView('faq');
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
    } else if (view === 'matcher') {
      window.location.hash = 'matcher';
    } else if (view === 'checklist') {
      window.location.hash = 'checklist';
    } else if (view === 'faq') {
      window.location.hash = 'faq';
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

  // 5. SEPARATE PAGE: FSc Merit & Degree Matcher
  if (currentView === 'matcher') {
    return (
      <>
        <MeritMatcherPage onBackToHome={() => navigateTo('home')} />
        <BrandKitModal
          isOpen={isBrandKitOpen}
          onClose={() => setIsBrandKitOpen(false)}
        />
      </>
    );
  }

  // 6. SEPARATE PAGE: Document Checklist Builder
  if (currentView === 'checklist') {
    return (
      <>
        <DocumentChecklistPage onBackToHome={() => navigateTo('home')} />
        <BrandKitModal
          isOpen={isBrandKitOpen}
          onClose={() => setIsBrandKitOpen(false)}
        />
      </>
    );
  }

  // 7. SEPARATE PAGE: Google Search & FAQ Desk
  if (currentView === 'faq') {
    return (
      <>
        <FaqSearchDeskPage onBackToHome={() => navigateTo('home')} />
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
            <div className="flex flex-wrap items-center gap-2.5 shrink-0 w-full lg:w-auto">
              <button
                onClick={() => navigateTo('apply')}
                className="btn-3d btn-3d-white flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md cursor-pointer group"
              >
                <span>Student Form</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF7A00] group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={() => navigateTo('appointment')}
                className="btn-3d btn-3d-amber flex-1 sm:flex-none px-4 py-2.5 rounded-xl text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <CalendarCheck className="w-3.5 h-3.5 text-slate-950" />
                <span>Appointment Form</span>
              </button>

              <button
                onClick={() => navigateTo('pwwf')}
                className="btn-3d btn-3d-navy flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <Award className="w-3.5 h-3.5 text-amber-400" />
                <span>PWWF Form</span>
              </button>

              <button
                onClick={() => navigateTo('inquiry')}
                className="btn-3d btn-3d-orange flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-white font-black text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <MessageSquare className="w-3.5 h-3.5 text-white" />
                <span>Inquiry Form</span>
              </button>

              <button
                onClick={() => navigateTo('matcher')}
                className="btn-3d btn-3d-amber flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <Calculator className="w-3.5 h-3.5 text-slate-950" />
                <span>Merit Matcher</span>
              </button>

              <button
                onClick={() => navigateTo('checklist')}
                className="btn-3d btn-3d-white flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-slate-900 font-black text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <FileCheck2 className="w-3.5 h-3.5 text-emerald-600" />
                <span>Checklist Builder</span>
              </button>

              <button
                onClick={() => navigateTo('faq')}
                className="btn-3d btn-3d-white flex-1 sm:flex-none px-3.5 py-2.5 rounded-xl text-slate-900 font-black text-xs flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
              >
                <HelpCircle className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Google &amp; FAQ Desk</span>
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

      {/* Online Student Admissions Assistant & Tools (Only Buttons to Open Standalone Pages) */}
      <OnlineStudentAssistant
        onOpenMatcher={() => navigateTo('matcher')}
        onOpenChecklist={() => navigateTo('checklist')}
        onOpenFaq={() => navigateTo('faq')}
      />

      {/* Anti-Fraud College Verification Section */}
      <VerificationSection />

      {/* Why Choose Us Section & Comparison Table */}
      <WhyUsSection />

      {/* Message from Managing Director (Executive Portrait & Official Statement) */}
      <DirectorMessageSection
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
        onOpenMatcher={() => navigateTo('matcher')}
        onOpenChecklist={() => navigateTo('checklist')}
        onOpenFaq={() => navigateTo('faq')}
      />

      {/* Brand Kit / Downloadable Marketing Posters & PNG Ads Modal */}
      <BrandKitModal
        isOpen={isBrandKitOpen}
        onClose={() => setIsBrandKitOpen(false)}
      />
    </div>
  );
}
