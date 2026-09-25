import React, { useState } from 'react';
import { BRAND_CONTACT, FACEBOOK_PAGE_URL } from '../data/brandData';
import { MessageCircle, Phone, X, Award, ShieldCheck, HelpCircle, ChevronUp, CalendarCheck, Tv, Star, ExternalLink } from 'lucide-react';

interface FloatingAssistantWidgetProps {
  onOpenPwwf: () => void;
  onOpenVerification: () => void;
  onOpenAssistant: () => void;
  onOpenStudentForm: () => void;
  onOpenAppointment?: () => void;
  onOpenDirector?: () => void;
  onOpenReviews?: () => void;
}

export const FloatingAssistantWidget: React.FC<FloatingAssistantWidgetProps> = ({
  onOpenPwwf,
  onOpenVerification,
  onOpenAssistant,
  onOpenStudentForm,
  onOpenAppointment,
  onOpenDirector,
  onOpenReviews,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 z-40 print:hidden flex flex-col items-end">
      {/* Popover Menu */}
      {isOpen && (
        <div className="mb-3 w-72 sm:w-80 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-3 duration-200">
          {/* Header */}
          <div className="p-3.5 bg-[#0A2342] text-white flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
              <div>
                <h4 className="text-xs font-bold leading-none">Online Admissions Desk</h4>
                <span className="text-[10px] text-slate-300">Scholar Sphere • Pattoki</span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close widget"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Quick Guidance Options */}
          <div className="p-2.5 space-y-1.5 text-xs max-h-[75vh] overflow-y-auto">
            {onOpenAppointment && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenAppointment();
                }}
                className="w-full p-2 rounded-xl bg-amber-400 hover:bg-amber-500 text-slate-950 font-black flex items-center justify-between text-left transition-colors cursor-pointer shadow-xs"
              >
                <div className="flex items-center gap-2">
                  <CalendarCheck className="w-4 h-4 text-slate-950" />
                  <span>Book In-Person / Remote Slot</span>
                </div>
                <span className="text-[10px] bg-slate-950 px-1.5 py-0.5 rounded text-amber-300 font-bold">Free</span>
              </button>
            )}

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenStudentForm();
              }}
              className="w-full p-2 rounded-xl bg-[#0A2342] text-white font-bold flex items-center justify-between text-left transition-colors cursor-pointer hover:bg-[#081b33]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                <span>Fill Student Form (All-In-One)</span>
              </div>
              <span className="text-[10px] bg-[#FF7A00] px-1.5 py-0.5 rounded text-white font-bold">Apply</span>
            </button>

            {onOpenDirector && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenDirector();
                }}
                className="w-full p-2 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-300 text-amber-950 font-bold flex items-center justify-between text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Tv className="w-4 h-4 text-amber-700" />
                  <span>Director's Message &amp; PiP</span>
                </div>
                <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-1.5 py-0.5 rounded">Watch</span>
              </button>
            )}

            {onOpenReviews && (
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenReviews();
                }}
                className="w-full p-2 rounded-xl bg-blue-50/70 hover:bg-blue-100 border border-blue-200 text-[#0A2342] font-bold flex items-center justify-between text-left transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  <span>Student &amp; Parent Reviews</span>
                </div>
                <span className="text-[10px] text-blue-700 font-black">4.9★</span>
              </button>
            )}

            <a
              href={FACEBOOK_PAGE_URL}
              target="_blank"
              rel="noreferrer"
              className="w-full p-2 rounded-xl bg-[#1877F2] hover:bg-blue-600 text-white font-bold flex items-center justify-between transition-colors shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Visit Official Facebook Page</span>
              </div>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <a
              href="https://wa.me/923294403898?text=Hello%20Armaghaan%20Rajput,%20I%20am%20on%20your%20website%20and%20need%20admission%20guidance."
              target="_blank"
              rel="noreferrer"
              className="w-full p-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-950 font-bold flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </div>
              <span className="text-[10px] font-mono text-emerald-700">Direct</span>
            </a>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenAssistant();
              }}
              className="w-full p-2.5 rounded-xl bg-slate-50 hover:bg-slate-100 border border-slate-200 text-[#0A2342] font-semibold flex items-center justify-between text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <HelpCircle className="w-4 h-4 text-[#FF7A00]" />
                <span>FSc Merit &amp; Eligibility Matcher</span>
              </div>
              <span className="text-[10px] text-slate-400">Tool</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenPwwf();
              }}
              className="w-full p-2.5 rounded-xl bg-amber-50 hover:bg-amber-100 border border-amber-200 text-amber-950 font-semibold flex items-center justify-between text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-amber-600" />
                <span>PWWF 100% Free Scholarship</span>
              </div>
              <span className="text-[10px] text-amber-700 font-bold">100% Free</span>
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                onOpenVerification();
              }}
              className="w-full p-2.5 rounded-xl bg-red-50 hover:bg-red-100 border border-red-200 text-red-950 font-semibold flex items-center justify-between text-left transition-colors cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-red-600" />
                <span>Verify College (Anti-Fraud)</span>
              </div>
              <span className="text-[10px] text-red-700">Govt Link</span>
            </button>
          </div>

          <div className="p-2.5 bg-slate-100 border-t border-slate-200 text-center text-[10px] text-slate-500 font-medium">
            Contact: {BRAND_CONTACT.owner} • {BRAND_CONTACT.formattedPhone}
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-3 bg-[#0A2342] hover:bg-[#081b33] text-white font-bold text-xs sm:text-sm rounded-full shadow-2xl border-2 border-[#FF7A00] transition-all transform hover:scale-105 cursor-pointer"
        aria-label="Online Admissions Assistance"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
        </span>
        <span className="text-white">Online Assistance</span>
        <span className="bg-[#FF7A00] text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase">
          Free
        </span>
      </button>
    </div>
  );
};
