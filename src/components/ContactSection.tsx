import React from 'react';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS, FACEBOOK_PAGE_URL } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ExternalLink,
  ShieldCheck,
  Building,
  User,
  ArrowRight,
  Send,
  MessageSquare,
  Star,
} from 'lucide-react';

interface ContactSectionProps {
  onOpenInquiryForm: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiryForm }) => {
  return (
    <section id="contact" className="py-8 sm:py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-[11px] font-extrabold text-[#FF7A00] uppercase tracking-wider block mb-1">
            Head Office &amp; Advisory Desk
          </span>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Visit Our Permanent Office in Pattoki
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            Conveniently situated directly on 1 KM Main Multan Road in Pattoki. Walk in with your educational documents for free, impartial guidance for Session {CURRENT_SESSION.slash}.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left Column: Office Details */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* Contact Card */}
            <div className="p-5 rounded-xl border border-slate-200 bg-slate-50 space-y-3">
              <span className="text-[10px] font-extrabold text-[#FF7A00] uppercase tracking-wide block">
                Official Leadership &amp; Office Coordinates
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                {/* Director */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-[#0A2342] text-white flex items-center justify-center shrink-0">
                    <User className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Lead Consultant &amp; Director</span>
                    <strong className="text-xs text-[#0A2342] block font-extrabold">{BRAND_CONTACT.owner}</strong>
                    <span className="text-[10px] text-slate-500">Education Advisory Specialist</span>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-[#FF7A00] text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Permanent Campus Landmark</span>
                    <strong className="text-xs text-[#0A2342] block font-bold">1 KM Main Multan Road</strong>
                    <span className="text-[10px] text-slate-500">Near Quaid-e-Azam Nursing College, Pattoki</span>
                  </div>
                </div>

                {/* Phone / WhatsApp */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Direct Admissions Helpline</span>
                    <a
                      href="https://wa.me/923294403898"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs text-[#0A2342] font-black hover:text-[#FF7A00] block"
                    >
                      {BRAND_CONTACT.formattedPhone}
                    </a>
                    <span className="text-[10px] text-emerald-700 font-semibold">Available 24/7 on WhatsApp</span>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3 bg-white p-3 rounded-lg border border-slate-100">
                  <div className="w-8 h-8 rounded-lg bg-slate-800 text-white flex items-center justify-center shrink-0">
                    <Clock className="w-4 h-4 text-amber-300" />
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Office Consultation Hours</span>
                    <strong className="text-xs text-[#0A2342] block font-bold">Mon – Sat: 9:00 AM – 6:00 PM</strong>
                    <span className="text-[10px] text-slate-500">Sunday by Prior Appointment</span>
                  </div>
                </div>
              </div>

              {/* Service Areas */}
              <div className="p-3 bg-white rounded-lg border border-slate-100 text-xs">
                <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">
                  Serving Students &amp; Families Across Punjab:
                </span>
                <p className="text-slate-700 font-medium text-[11px]">
                  Pattoki • Kasur • Mustafabad • Lalyani (Shergarh) • Phool Nagar • Chunian • Raiwind • Kot Radha Kishan • Lahore
                </p>
              </div>

              {/* Official Facebook Link Bar */}
              <div className="p-3 bg-blue-50/80 rounded-lg border border-blue-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#1877F2] text-white flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </div>
                  <div>
                    <strong className="text-xs text-[#0A2342] block font-black">Official Facebook Community</strong>
                    <span className="text-[11px] text-blue-800">4.9/5 Rating • Daily Admissions &amp; Merit Lists</span>
                  </div>
                </div>

                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-md bg-[#1877F2] hover:bg-blue-600 text-white font-bold text-xs flex items-center gap-1.5 transition-colors shadow-2xs whitespace-nowrap"
                >
                  <span>Visit Facebook Page</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Portal Cards to Open Form on Separate Dedicated Page */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div className="p-6 rounded-xl border-2 border-amber-300 bg-amber-50/60 shadow-sm flex flex-col justify-between h-full space-y-4">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#0A2342] text-white text-[10px] font-black uppercase tracking-wider">
                  <MessageSquare className="w-3 h-3 text-[#FF7A00]" />
                  <span>Free Consultation &amp; Inquiry Form</span>
                </div>
                <h3 className="text-base sm:text-lg font-black text-[#0A2342]">
                  Prefer to Submit an Online Inquiry?
                </h3>
                <p className="text-xs text-slate-700 leading-relaxed">
                  All student questions, fee estimates, and merit evaluations are handled on our dedicated inquiry portal for Session {CURRENT_SESSION.slash}.
                </p>
              </div>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={onOpenInquiryForm}
                  className="w-full py-2.5 px-4 rounded-lg bg-[#0A2342] hover:bg-[#081b33] text-white font-black text-xs transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <span>Open Free Consultation &amp; Inquiry Form</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF7A00] group-hover:translate-x-0.5 transition-transform" />
                </button>

                <a
                  href="https://wa.me/923294403898?text=Hello%20Scholar%20Sphere,%20I%20have%20an%20urgent%20admission%20question."
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-lg bg-[#FF7A00] hover:bg-[#e66e00] text-white font-black text-xs transition-all shadow-sm flex items-center justify-center gap-2"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Direct WhatsApp Chat with Director</span>
                </a>
              </div>

              <div className="text-[11px] text-slate-500 text-center border-t border-amber-200/80 pt-3">
                No fee or charges. We verify college recognition &amp; PWWF quotas 100% free.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
