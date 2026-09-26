import React from 'react';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS, FACEBOOK_PAGE_URL } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  ShieldCheck,
  Award,
  CheckCircle2,
  GraduationCap,
  ArrowRight,
  Phone,
  Building,
  Check,
  MapPin,
  CalendarCheck,
  Star,
  UserCheck,
} from 'lucide-react';

interface HeroSectionProps {
  onCheckPwwf: () => void;
  onExplorePrograms: () => void;
  onVerifyCollege: () => void;
  onOpenStudentForm: () => void;
  onBookAppointment: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onCheckPwwf,
  onExplorePrograms,
  onVerifyCollege,
  onOpenStudentForm,
  onBookAppointment,
}) => {
  return (
    <section className="relative bg-white pt-4 sm:pt-6 pb-6 sm:pb-8 border-b border-slate-200 overflow-hidden">
      {/* Subtle architectural background accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-slate-50 rounded-full blur-3xl -z-10 opacity-70" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-amber-50 rounded-full blur-3xl -z-10 opacity-50" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Top Trust Kicker: Clean unboxed metadata with separators */}
        <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-bold text-slate-500 mb-3">
          <span className="text-[#0A2342] font-extrabold">Pattoki</span>
          <span aria-hidden="true">·</span>
          <span>Kasur</span>
          <span aria-hidden="true">·</span>
          <span>Mustafabad</span>
          <span aria-hidden="true">·</span>
          <span>Lalyani</span>
          <span aria-hidden="true">·</span>
          <span>Phool Nagar</span>
          <span aria-hidden="true">·</span>
          <span className="text-emerald-700 font-bold flex items-center gap-1">
            <Check className="w-3 h-3 text-emerald-600" /> 100% PNC & PHEC Registered Only
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & CTAs */}
          <div className="lg:col-span-7 space-y-3.5">
            
            {/* Admissions Header Banner & Facebook Rating */}
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0A2342] text-white text-[11px] font-bold tracking-wide">
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                <span>Admissions Session {CURRENT_SESSION.slash}</span>
                <span className="text-slate-400">|</span>
                <span className="text-amber-300">PWWF 100% Free Desk</span>
              </div>

              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-blue-50 hover:bg-blue-100 text-[#1877F2] border border-blue-200 text-[11px] font-bold transition-colors cursor-pointer"
                title="Follow Scholar Sphere Consultants on Facebook"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <div className="flex items-center gap-0.5 text-amber-500">
                  <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                </div>
                <span>4.9/5 Facebook Reviews</span>
              </a>
            </div>

            {/* Headline with text-wrap: balance */}
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0A2342] tracking-tight leading-[1.1] text-balance"
              style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
            >
              Your Gateway to <br />
              <span className="text-[#FF7A00]">Education Excellence</span> in Pakistan.
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed max-w-2xl font-normal">
              Scholar Sphere Consultants is Pattoki&#39;s premier education advisory. We specialize in verified <strong>BS Nursing (PNC Approved)</strong>, <strong>Allied Health Sciences</strong>, and <strong>100% Free PWWF Scholarships</strong> for industrial workers&#39; children across Punjab.
            </p>

            {/* Honest 100% No-Visa Trust Stamp */}
            <div className="p-2.5 rounded-lg border border-slate-200 bg-slate-50/80 flex items-start gap-2.5 max-w-2xl text-xs text-slate-700">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <div className="leading-snug">
                <strong className="font-bold text-[#0A2342]">100% Legal Pakistan Admissions: </strong>
                No overseas visa schemes, no false promises. We only recommend genuine degree-granting chartered universities and teaching hospitals.
              </div>
            </div>

            {/* Action Buttons - 3D Tactile Grid */}
            <div className="flex flex-wrap items-center gap-2.5 pt-2">
              <button
                onClick={onBookAppointment}
                className="btn-3d btn-3d-amber px-4 py-2.5 rounded-xl text-slate-950 font-black text-xs shadow-md cursor-pointer group flex items-center gap-1.5"
              >
                <CalendarCheck className="w-4 h-4 text-slate-950" />
                <span>Book Appointment</span>
              </button>

              <button
                onClick={onOpenStudentForm}
                className="btn-3d btn-3d-navy px-4 py-2.5 rounded-xl text-white font-black text-xs shadow-md cursor-pointer group flex items-center gap-1.5"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF7A00] animate-pulse" />
                <span>Student Form (All-In-One)</span>
                <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <button
                onClick={onCheckPwwf}
                className="btn-3d btn-3d-white px-3.5 py-2.5 rounded-xl text-slate-900 font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <Award className="w-3.5 h-3.5 text-amber-600" />
                <span>PWWF 100% Free</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="btn-3d btn-3d-white px-3.5 py-2.5 rounded-xl text-slate-900 font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <GraduationCap className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Degree Programs</span>
              </button>

              <button
                onClick={onVerifyCollege}
                className="btn-3d btn-3d-white px-3 py-2.5 rounded-xl text-slate-800 font-bold text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verify College</span>
              </button>

              <button
                onClick={() => {
                  const el = document.getElementById('director-message');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-3d btn-3d-white px-3.5 py-2.5 rounded-xl text-[#0A2342] font-black text-xs shadow-md flex items-center gap-1.5 cursor-pointer"
              >
                <UserCheck className="w-3.5 h-3.5 text-amber-600" />
                <span>Director's Message</span>
              </button>
            </div>

            {/* Office Landmark Line */}
            <div className="flex items-center gap-1.5 text-xs text-slate-500 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
              <span>
                Office: 1 KM Main Multan Road, Pattoki (Near Quaid-e-Azam Nursing College)
              </span>
            </div>

          </div>

          {/* Right Column: Hero Showcase Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-xl overflow-hidden border border-slate-200 shadow-md bg-white">
              
              {/* Feature Image */}
              <div className="h-44 sm:h-52 relative overflow-hidden bg-slate-100">
                <img
                  src="/src/assets/images/nursing_allied_health_students_1790235785643.jpg"
                  alt="Pakistani Nursing and Allied Health Students in Clinical Training"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2342] via-transparent to-transparent opacity-80" />
                
                {/* Floating Tag inside image */}
                <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white text-xs">
                  <span className="font-bold bg-[#0A2342]/90 backdrop-blur-sm px-2 py-0.5 rounded text-[11px]">
                    Clinical Hospital Training
                  </span>
                  <span className="font-semibold text-amber-300 text-[11px]">
                    500+ Bed Hospitals
                  </span>
                </div>
              </div>

              {/* Card Body: The 4 Core USPs - Compact Grid */}
              <div className="p-3.5 bg-white space-y-2.5">
                <div className="grid grid-cols-2 gap-2 text-left">
                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xl font-black text-[#0A2342] tabular-nums block" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                      95%
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 block">
                      Admission Success
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Proven track record
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xl font-black text-[#FF7A00] tabular-nums block" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                      500+
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 block">
                      Universities
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Punjab & Pakistan
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xl font-black text-amber-600 tabular-nums block" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                      100%
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 block">
                      PWWF Coverage
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Tuition + Hostel Free
                    </span>
                  </div>

                  <div className="p-2 rounded-lg bg-slate-50 border border-slate-100">
                    <span className="text-xl font-black text-emerald-700 tabular-nums block" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                      PKR 0
                    </span>
                    <span className="text-[11px] font-bold text-slate-800 block">
                      Student Charges
                    </span>
                    <span className="text-[10px] text-slate-500">
                      Free Counseling
                    </span>
                  </div>
                </div>

                {/* Direct Consultation Link */}
                <a
                  href={`https://wa.me/923294403898?text=Hello%20Armaghaan%20Rajput,%20I%20would%20like%20to%20schedule%20a%20free%20admissions%20counseling%20session.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors shadow-xs"
                >
                  <Phone className="w-3 h-3" />
                  <span>Talk to Armaghaan Rajput: +92 329 4403898</span>
                </a>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
