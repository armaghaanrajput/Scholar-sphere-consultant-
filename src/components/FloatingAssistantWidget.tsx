import React, { useState } from 'react';
import { BRAND_CONTACT, FACEBOOK_PAGE_URL } from '../data/brandData';
import { MessageCircle, Phone, X, Award, ShieldCheck, HelpCircle, ChevronUp, CalendarCheck, UserCheck, Star, ExternalLink, Calculator, FileCheck2 } from 'lucide-react';

interface FloatingAssistantWidgetProps {
  onOpenPwwf: () => void;
  onOpenVerification: () => void;
  onOpenAssistant: () => void;
  onOpenStudentForm: () => void;
  onOpenAppointment?: () => void;
  onOpenDirector?: () => void;
  onOpenReviews?: () => void;
  onOpenMatcher?: () => void;
  onOpenChecklist?: () => void;
  onOpenFaq?: () => void;
}

export const FloatingAssistantWidget: React.FC<FloatingAssistantWidgetProps> = ({
  onOpenPwwf,
  onOpenVerification,
  onOpenAssistant,
  onOpenStudentForm,
  onOpenAppointment,
  onOpenDirector,
  onOpenReviews,
  onOpenMatcher,
  onOpenChecklist,
  onOpenFaq,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 print:hidden flex flex-col items-end">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border-2 border-slate-300 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="p-3.5 bg-[#0A2342] text-white flex items-center justify-between border-b-2 border-slate-900">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
              <div>
                <h4 className="text-xs font-black leading-none">Online Admissions Desk</h4>
                <span className="text-[10px] text-slate-300">Scholar Sphere • Pattoki</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer rounded-md hover:bg-white/10"
              aria-label="Close widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Guidance Options with 3D tactile buttons */}
          <div className="p-3 space-y-2 text-xs max-h-[75vh] overflow-y-auto">
            {onOpenAppointment && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAppointment();
                }}
                className="btn-3d btn-3d-amber w-full p-2.5 rounded-xl text-slate-950 font-black flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-slate-950" />
                  <span>Book Appointment Slot</span>
                </div>
                <span className="text-[10px] bg-slate-950 px-2 py-0.5 rounded text-amber-300 font-black">Free</span>
              </button>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenStudentForm();
              }}
              className="btn-3d btn-3d-navy w-full p-2.5 rounded-xl text-white font-black flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                <span>Fill Student Form (All-In-One)</span>
              </div>
              <span className="text-[10px] bg-[#FF7A00] px-2 py-0.5 rounded text-white font-black">Apply</span>
            </button>

            {onOpenDirector && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDirector();
                }}
                className="btn-3d btn-3d-white w-full p-2.5 rounded-xl text-[#0A2342] font-black flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <UserCheck className="w-4 h-4 text-amber-600" />
                  <span>Director Armaghaan's Message</span>
                </div>
                <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded">MD</span>
              </button>
            )}

            {onOpenReviews && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenReviews();
                }}
                className="btn-3d btn-3d-white w-full p-2.5 rounded-xl text-[#0A2342] font-black flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Student &amp; Parent Reviews</span>
                </div>
                <span className="text-[10px] text-blue-700 font-black">4.9★</span>
              </button>
            )}

            <a
              href="https://wa.me/923294403898?text=Hello%20Sir%20Armaghaan%20Rajput,%20I%20am%20on%20your%20website%20and%20need%20admission%20guidance."
              target="_blank"
              rel="noreferrer"
              className="btn-3d btn-3d-whatsapp w-full p-2.5 rounded-xl font-black flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#052e16] fill-current" />
                <span>Chat on WhatsApp</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-950 bg-emerald-300/80 px-1.5 py-0.5 rounded font-black">Direct</span>
            </a>

            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="btn-3d btn-3d-facebook w-full p-2.5 rounded-xl text-white font-black flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Visit Facebook Page</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {onOpenMatcher && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenMatcher();
                }}
                className="btn-3d btn-3d-amber w-full p-2.5 rounded-xl text-slate-950 font-black flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-slate-950" />
                  <span>FSc Merit &amp; Degree Matcher</span>
                </div>
                <span className="text-[10px] bg-slate-950 text-amber-300 font-black px-1.5 py-0.5 rounded">Tool</span>
              </button>
            )}

            {onOpenChecklist && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenChecklist();
                }}
                className="btn-3d btn-3d-navy w-full p-2.5 rounded-xl text-white font-black flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <FileCheck2 className="w-4 h-4 text-emerald-400" />
                  <span>Document Checklist Builder</span>
                </div>
                <span className="text-[10px] bg-emerald-500 text-slate-950 font-black px-1.5 py-0.5 rounded">Dossier</span>
              </button>
            )}

            {onOpenFaq && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenFaq();
                }}
                className="btn-3d btn-3d-white w-full p-2.5 rounded-xl text-[#0A2342] font-black flex items-center justify-between text-left cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4 text-[#FF7A00]" />
                  <span>Google Search &amp; FAQ Desk</span>
                </div>
                <span className="text-[10px] bg-blue-100 text-blue-900 font-black px-1.5 py-0.5 rounded">Search</span>
              </button>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenPwwf();
              }}
              className="btn-3d btn-3d-white w-full p-2.5 rounded-xl text-[#0A2342] font-bold flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>PWWF 100% Free Scholarship</span>
              </div>
              <span className="text-[10px] text-amber-700 font-black">Free</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenVerification();
              }}
              className="btn-3d btn-3d-white w-full p-2.5 rounded-xl text-red-950 font-bold flex items-center justify-between text-left cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span>Verify College (Anti-Fraud)</span>
              </div>
              <span className="text-[10px] text-red-700 font-bold">Govt</span>
            </button>
          </div>

          <div className="p-2.5 bg-slate-100 border-t border-slate-200 text-center text-[10px] text-slate-600 font-bold">
            Contact: {BRAND_CONTACT.owner} • {BRAND_CONTACT.formattedPhone}
          </div>
        </div>
      )}

      {/* Trigger Button with prominent 3D styling */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn-3d btn-3d-navy flex items-center gap-2.5 px-4 py-3 rounded-full shadow-2xl cursor-pointer"
        aria-label="Online Admissions Assistance"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-white text-xs sm:text-sm font-black">Admissions Desk</span>
        <span className="bg-[#FF7A00] text-white text-[10px] font-black px-2 py-0.5 rounded-full uppercase border border-amber-300">
          Free
        </span>
      </button>
    </div>
  );
};

