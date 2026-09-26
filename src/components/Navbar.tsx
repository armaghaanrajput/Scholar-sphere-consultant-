import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONTACT, FACEBOOK_PAGE_URL } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import { Phone, Menu, X, CalendarCheck, FileImage, Star, UserCheck } from 'lucide-react';

interface NavbarProps {
  onOpenBrandKit: () => void;
  onOpenApplyPage?: () => void;
  onOpenAppointmentPage?: () => void;
  onOpenPwwfPage?: () => void;
  onOpenInquiryPage?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenBrandKit,
  onOpenApplyPage,
  onOpenAppointmentPage,
  onOpenPwwfPage,
  onOpenInquiryPage,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenApply = () => {
    setMobileMenuOpen(false);
    if (onOpenApplyPage) {
      onOpenApplyPage();
    } else {
      scrollToSection('student-form');
    }
  };

  const handleOpenAppointment = () => {
    setMobileMenuOpen(false);
    if (onOpenAppointmentPage) {
      onOpenAppointmentPage();
    } else {
      scrollToSection('appointment');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 print:hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between gap-3">
        
        {/* Zone 1: Single text element wordmark / brand mark */}
        <div className="flex items-center shrink-0">
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center focus:outline-none"
          >
            <BrandLogo variant="full" size="sm" />
          </a>
        </div>

        {/* Zone 2: Clean compact text navigation links */}
        <nav className="hidden lg:flex items-center gap-4 text-xs font-bold text-slate-700">
          <button
            onClick={() => scrollToSection('programs')}
            className="hover:text-[#FF7A00] transition-colors py-1 cursor-pointer"
          >
            Programs {CURRENT_SESSION.slash}
          </button>
          <button
            onClick={() => scrollToSection('pwwf')}
            className="hover:text-[#FF7A00] transition-colors py-1 cursor-pointer flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
            <span>PWWF Scholarship</span>
          </button>
          <button
            onClick={handleOpenAppointment}
            className="hover:text-[#FF7A00] text-[#0A2342] transition-colors py-1 cursor-pointer flex items-center gap-1"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Appointment</span>
          </button>
          <button
            onClick={handleOpenApply}
            className="text-[#0A2342] font-black hover:text-[#FF7A00] transition-colors py-1 cursor-pointer flex items-center gap-1"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7A00] animate-pulse" />
            <span>Student Form</span>
          </button>
          <button
            onClick={() => scrollToSection('director-message')}
            className="hover:text-[#FF7A00] transition-colors py-1 cursor-pointer flex items-center gap-1"
          >
            <UserCheck className="w-3.5 h-3.5 text-amber-500" />
            <span>Director's Message</span>
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="hover:text-[#FF7A00] transition-colors py-1 cursor-pointer flex items-center gap-1"
          >
            <Star className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            <span>Reviews</span>
          </button>
          <button
            onClick={() => scrollToSection('verification')}
            className="hover:text-[#FF7A00] transition-colors py-1 cursor-pointer"
          >
            Verify College
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="hover:text-[#FF7A00] transition-colors py-1 cursor-pointer"
          >
            Office
          </button>
          <button
            onClick={onOpenBrandKit}
            className="btn-3d btn-3d-white text-[11px] font-black text-[#0A2342] px-2.5 py-1 rounded-lg flex items-center gap-1.5 cursor-pointer shadow-sm"
            title="Download Marketing Posters & PNG Ads"
          >
            <FileImage className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Posters &amp; Ads</span>
          </button>
        </nav>

        {/* Zone 3: Compact 3D primary actions */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={handleOpenAppointment}
            className="btn-3d btn-3d-amber px-3 py-1.5 text-xs font-black rounded-lg cursor-pointer flex items-center gap-1.5 shadow-sm"
          >
            <CalendarCheck className="w-3.5 h-3.5 text-slate-950" />
            <span>Book Appointment</span>
          </button>
          <button
            onClick={handleOpenApply}
            className="btn-3d btn-3d-navy px-3 py-1.5 text-xs font-black rounded-lg cursor-pointer shadow-sm"
          >
            Apply Now
          </button>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-3d btn-3d-facebook p-1.5 rounded-lg flex items-center justify-center shadow-sm"
            title="Official Facebook Page"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </a>
          <a
            href={`https://wa.me/923294403898?text=Hello%20Scholar%20Sphere%20Consultants,%20I%20am%20inquiring%20about%20admissions.`}
            target="_blank"
            rel="noreferrer"
            className="btn-3d btn-3d-whatsapp px-3 py-1.5 text-xs font-black rounded-lg shadow-sm whitespace-nowrap flex items-center gap-1.5"
          >
            <Phone className="w-3 h-3 text-[#052e16]" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-1.5 text-slate-700 hover:text-slate-900"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 py-3 space-y-2 shadow-lg text-xs">
          <button
            onClick={handleOpenAppointment}
            className="block w-full text-left py-2 px-2.5 rounded-lg text-xs font-bold bg-amber-100 text-amber-950 hover:bg-amber-200 flex items-center gap-2"
          >
            <CalendarCheck className="w-4 h-4 text-amber-800" />
            <span>Book Appointment Form ({CURRENT_SESSION.slash})</span>
          </button>
          <button
            onClick={() => scrollToSection('programs')}
            className="block w-full text-left py-1.5 font-semibold text-slate-800 hover:text-[#FF7A00]"
          >
            Programs {CURRENT_SESSION.slash}
          </button>
          <button
            onClick={() => scrollToSection('pwwf')}
            className="block w-full text-left py-1.5 font-semibold text-slate-800 hover:text-[#FF7A00]"
          >
            PWWF 100% Scholarship
          </button>
          <button
            onClick={handleOpenApply}
            className="block w-full text-left py-2 px-2.5 rounded-lg text-xs font-bold bg-[#0A2342] text-white hover:bg-[#081b33]"
          >
            Apply Now: All-In-One Student Form
          </button>
          <button
            onClick={() => scrollToSection('director-message')}
            className="block w-full text-left py-2 text-sm font-bold text-[#0A2342] hover:text-[#FF7A00] flex items-center gap-2"
          >
            <UserCheck className="w-4 h-4 text-amber-500" />
            <span>Director's Message &amp; Vision</span>
          </button>
          <button
            onClick={() => scrollToSection('reviews')}
            className="block w-full text-left py-2 text-sm font-bold text-[#0A2342] hover:text-[#FF7A00] flex items-center gap-2"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>Facebook Reviews &amp; Ratings (4.9/5)</span>
          </button>
          <button
            onClick={() => scrollToSection('assistant')}
            className="block w-full text-left py-2 text-sm font-bold text-[#0A2342] hover:text-[#FF7A00]"
          >
            Online Assistant &amp; Tools
          </button>
          <button
            onClick={() => scrollToSection('verification')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#FF7A00]"
          >
            Verify College (Anti-Fraud)
          </button>
          <button
            onClick={() => scrollToSection('why-us')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#FF7A00]"
          >
            Why Choose Us (USPs)
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="block w-full text-left py-2 text-sm font-semibold text-slate-800 hover:text-[#FF7A00]"
          >
            Office Address &amp; Location
          </button>
          <a
            href={FACEBOOK_PAGE_URL}
            target="_blank"
            rel="noreferrer"
            className="block w-full text-left py-2 px-2.5 rounded-lg text-xs font-bold bg-blue-50 text-[#1877F2] border border-blue-200 hover:bg-blue-100 flex items-center gap-2"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <span>Visit Official Facebook Page</span>
          </a>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenBrandKit();
            }}
            className="block w-full text-left py-2 text-sm font-bold text-[#0A2342] hover:text-[#FF7A00] flex items-center gap-2 bg-amber-50/70 p-2 rounded-lg border border-amber-200"
          >
            <FileImage className="w-4 h-4 text-[#FF7A00]" />
            <span>Download Marketing Posters &amp; PNG Ads</span>
          </button>

          <div className="pt-3 border-t border-slate-200 flex flex-col gap-2">
            <a
              href="https://wa.me/923294403898"
              target="_blank"
              rel="noreferrer"
              className="w-full text-center py-2.5 px-4 bg-[#FF7A00] text-white font-bold text-xs rounded-lg flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              <span>Call / WhatsApp: +92 329 4403898</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
