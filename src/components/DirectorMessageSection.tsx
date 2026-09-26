import React, { useState } from 'react';
import {
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  CalendarCheck,
  Sparkles,
  Quote,
  Building,
  GraduationCap,
  Clock,
} from 'lucide-react';
import directorImage from '../assets/images/director_armaghaan_rajput_1790340617639.jpg';
import { DIRECTOR_PROFILE, FACEBOOK_PAGE_URL, BRAND_CONTACT } from '../data/brandData';

interface DirectorMessageSectionProps {
  onBookAppointment: () => void;
}

export const DirectorMessageSection: React.FC<DirectorMessageSectionProps> = ({
  onBookAppointment,
}) => {
  const [activeLang, setActiveLang] = useState<'english' | 'urdu'>('english');

  return (
    <section
      id="director-message"
      className="py-16 sm:py-20 bg-gradient-to-b from-slate-100 via-white to-slate-100 border-t border-slate-200 relative overflow-hidden"
    >
      {/* Decorative Brand Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0A2342]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2342] text-amber-300 text-xs font-black uppercase tracking-wider mb-3 shadow-md border-b-2 border-slate-900">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Leadership &amp; Vision</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A2342] tracking-tight leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Message from the Managing Director
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto">
            A personal commitment to every student, parent, and industrial worker family seeking legitimate higher education in Pakistan.
          </p>
        </div>

        {/* Main Director Card Grid */}
        <div className="bg-white rounded-3xl border-2 border-slate-200/90 shadow-[0_12px_36px_rgba(10,35,66,0.08)] overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Official Director Portrait & Identity Card (5 cols) */}
          <div className="lg:col-span-5 bg-gradient-to-b from-[#0A2342] via-[#0d2a4d] to-[#07192f] text-white flex flex-col justify-between p-6 sm:p-8 relative border-b lg:border-b-0 lg:border-r-2 border-slate-700/60">
            
            {/* Top Verification Header */}
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-slate-700/70">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_#34d399]" />
                  <span className="text-xs font-extrabold text-slate-200 uppercase tracking-wider">
                    Executive Statement
                  </span>
                </div>
                <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  Head Office • Pattoki
                </span>
              </div>

              {/* Official Portrait Photo Frame with 3D Bevel */}
              <div className="my-6 relative rounded-2xl overflow-hidden border-4 border-amber-400/60 shadow-[0_8px_24px_rgba(0,0,0,0.5)] bg-slate-900 group">
                <img
                  src={directorImage}
                  alt="Director Armaghaan Rajput - Managing Director, Scholar Sphere Consultants"
                  className="w-full h-80 sm:h-96 object-cover object-top filter brightness-100 contrast-105 transition-transform duration-500 group-hover:scale-102"
                />

                {/* Subtle Gradient Shadow at base of photo for title readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent pointer-events-none" />

                {/* Director Badge on Photo */}
                <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md px-3 py-1 rounded-full border border-amber-400/50 flex items-center gap-1.5 shadow-md">
                  <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                  <span className="text-[11px] font-black text-white tracking-wide">
                    Authorized Director
                  </span>
                </div>

                {/* Bottom Overlay Identity */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xl font-black text-white flex items-center gap-2 drop-shadow-sm">
                    <span>{DIRECTOR_PROFILE.name}</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500 text-slate-950 border border-emerald-300 shadow-xs">
                      <CheckCircle2 className="w-3 h-3 text-slate-950 stroke-[3]" /> Verified MD
                    </span>
                  </div>
                  <p className="text-xs text-amber-300 font-extrabold mt-0.5 tracking-wide">
                    {DIRECTOR_PROFILE.designation} • {DIRECTOR_PROFILE.company}
                  </p>
                  <p className="text-[11px] text-slate-200 mt-1 flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                    <span>Main Multan Road, Pattoki (Near Quaid-e-Azam Nursing College)</span>
                  </p>
                </div>
              </div>

              {/* Director Key Credentials Pill Grid */}
              <div className="grid grid-cols-2 gap-2 text-xs mb-6">
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <GraduationCap className="w-4 h-4 text-amber-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-300 uppercase font-bold">Experience</div>
                    <div className="text-xs font-black text-white">8+ Years</div>
                  </div>
                </div>
                <div className="p-2.5 rounded-xl bg-white/10 border border-white/15 flex items-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-[10px] text-slate-300 uppercase font-bold">PWWF Expert</div>
                    <div className="text-xs font-black text-white">100% Free Desk</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Connect 3D Action Buttons */}
            <div className="pt-4 border-t border-slate-700/70 space-y-2.5">
              <div className="text-[11px] font-black text-amber-300 uppercase tracking-wider mb-2 flex items-center justify-between">
                <span>Direct Director Channels</span>
                <span className="text-emerald-400 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Available
                </span>
              </div>

              {/* WhatsApp 3D Button */}
              <a
                href={`https://wa.me/923294403898?text=Hello%20Sir%20Armaghaan%20Rajput,%20I%20would%20like%20to%20discuss%20admissions%20at%20Scholar%20Sphere%20Consultants.`}
                target="_blank"
                rel="noreferrer"
                className="btn-3d btn-3d-whatsapp w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-[#052e16] fill-current" />
                <span>Chat Directly on WhatsApp</span>
              </a>

              {/* Action Pair: Direct Call & Facebook */}
              <div className="grid grid-cols-2 gap-2">
                <a
                  href="tel:+923294403898"
                  className="btn-3d btn-3d-amber py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  title="Call Director Directly"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-950" />
                  <span>Call Director</span>
                </a>

                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-3d btn-3d-facebook py-2.5 px-3 rounded-xl text-xs font-black flex items-center justify-center gap-1.5 shadow-md cursor-pointer"
                  title="Official Facebook Page"
                >
                  <svg className="w-3.5 h-3.5 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                  <span>Facebook</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Full Official Written Message & Guarantees (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6 bg-white">
            
            {/* Top Language Toggle Tabs & Zero Commission Stamp */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-5 border-b border-slate-200">
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-extrabold text-slate-600 uppercase tracking-wide">
                  Language:
                </span>
                <div className="inline-flex gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-300/80 shadow-inner">
                  <button
                    onClick={() => setActiveLang('english')}
                    className={`tab-3d px-3.5 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer ${
                      activeLang === 'english' ? 'tab-3d-active' : 'tab-3d-inactive'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setActiveLang('urdu')}
                    className={`tab-3d px-3.5 py-1.5 text-xs font-black rounded-lg transition-all cursor-pointer font-serif ${
                      activeLang === 'urdu' ? 'tab-3d-active' : 'tab-3d-inactive'
                    }`}
                  >
                    اردو (Urdu)
                  </button>
                </div>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs font-black text-emerald-800 bg-emerald-100/90 px-3 py-1.5 rounded-full border border-emerald-300 shadow-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Zero Agent Commission Policy</span>
              </div>
            </div>

            {/* Core Mission Quote Box with 3D Inset Effect */}
            <div className="relative p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-amber-50 to-orange-50/60 border-2 border-amber-300/80 shadow-[0_4px_12px_rgba(245,158,11,0.12)]">
              <Quote className="w-8 h-8 text-amber-500/40 absolute top-3 right-3 pointer-events-none" />
              <blockquote className="text-slate-800 italic text-sm sm:text-base font-semibold leading-relaxed relative z-10">
                &ldquo;{DIRECTOR_PROFILE.quote}&rdquo;
              </blockquote>
              <div className="mt-3 flex items-center gap-2 text-xs font-extrabold text-[#0A2342]">
                <span>— Armaghaan Rajput</span>
                <span className="text-slate-400">•</span>
                <span className="text-amber-700">Managing Director</span>
              </div>
            </div>

            {/* Full Message Body (English or Urdu) */}
            <div className="min-h-[220px]">
              {activeLang === 'english' ? (
                <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {DIRECTOR_PROFILE.messageEnglish.map((para, i) => (
                    <p key={i} className="leading-relaxed">
                      {para}
                    </p>
                  ))}
                </div>
              ) : (
                <div
                  dir="rtl"
                  className="space-y-4 text-sm sm:text-base text-slate-900 leading-loose font-serif text-right bg-slate-50/90 p-5 rounded-2xl border border-slate-200 shadow-inner"
                >
                  {DIRECTOR_PROFILE.messageUrdu.map((para, i) => (
                    <p key={i} className="leading-loose">
                      {para}
                    </p>
                  ))}
                </div>
              )}
            </div>

            {/* 3 Pillars of Leadership with Subtle 3D Depth */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-center shadow-xs hover:border-amber-400 transition-colors">
                <div className="w-9 h-9 rounded-full bg-amber-100 text-[#FF7A00] flex items-center justify-center mx-auto mb-2 font-black text-xs border border-amber-300">
                  100%
                </div>
                <h4 className="text-xs font-black text-[#0A2342]">PWWF Scholarship</h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Zero service charges from worker families across Punjab
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-center shadow-xs hover:border-emerald-400 transition-colors">
                <div className="w-9 h-9 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto mb-2 border border-emerald-300">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-[#0A2342]">PNC &amp; HEC Affiliated</h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  Strict boycott of unaccredited institutions and fake campuses
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border-2 border-slate-200 text-center shadow-xs hover:border-blue-400 transition-colors">
                <div className="w-9 h-9 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center mx-auto mb-2 border border-blue-300">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-[#0A2342]">Local Head Office</h4>
                <p className="text-[11px] text-slate-600 mt-0.5 leading-snug">
                  1 KM Main Multan Road, Pattoki. Walk-in appointments open
                </p>
              </div>
            </div>

            {/* Bottom Signature & Tactile 3D Action Bar */}
            <div className="pt-5 border-t-2 border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-amber-400 shadow-md shrink-0">
                  <img
                    src={directorImage}
                    alt="Armaghaan Rajput"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <div className="text-sm font-black text-[#0A2342]">
                    Armaghaan Rajput
                  </div>
                  <div className="text-xs text-slate-600 font-medium">
                    Managing Director • Scholar Sphere Consultants
                  </div>
                  <div className="text-[11px] text-amber-700 font-bold">
                    Pattoki, District Kasur • Punjab, Pakistan
                  </div>
                </div>
              </div>

              {/* Highly Visible 3D Action Buttons */}
              <div className="flex items-center gap-2.5 w-full sm:w-auto">
                <button
                  onClick={onBookAppointment}
                  className="btn-3d btn-3d-amber flex-1 sm:flex-none px-5 py-3 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                >
                  <CalendarCheck className="w-4 h-4 text-slate-950" />
                  <span>Meet Director in Person</span>
                </button>

                <a
                  href={`https://wa.me/923294403898?text=Hello%20Sir%20Armaghaan%20Rajput,%20I%20would%20like%20to%20book%20a%20consultation.`}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-3d btn-3d-whatsapp flex-1 sm:flex-none px-4 py-3 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-1.5 shadow-lg cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4 text-[#052e16] fill-current" />
                  <span>WhatsApp Line</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
