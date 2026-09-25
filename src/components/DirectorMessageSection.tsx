import React, { useState } from 'react';
import {
  Play,
  Pause,
  Tv,
  MessageSquare,
  ShieldCheck,
  Award,
  MapPin,
  Phone,
  CheckCircle2,
  ExternalLink,
  Volume2,
  Share2,
  Languages,
  Sparkles,
} from 'lucide-react';
import directorImage from '../assets/images/director_armaghaan_rajput_1790340617639.jpg';
import { DIRECTOR_PROFILE, FACEBOOK_PAGE_URL, BRAND_CONTACT } from '../data/brandData';

interface DirectorMessageSectionProps {
  isPipActive: boolean;
  onTogglePip: () => void;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onBookAppointment: () => void;
}

export const DirectorMessageSection: React.FC<DirectorMessageSectionProps> = ({
  isPipActive,
  onTogglePip,
  isPlaying,
  onTogglePlay,
  onBookAppointment,
}) => {
  const [activeLang, setActiveLang] = useState<'english' | 'urdu'>('english');
  const [activeHighlightIndex, setActiveHighlightIndex] = useState(0);

  return (
    <section
      id="director-message"
      className="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50 border-t border-slate-200 relative overflow-hidden"
    >
      {/* Decorative Brand Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-[#0A2342]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A2342] text-amber-300 text-xs font-bold uppercase tracking-wider mb-3 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Leadership &amp; Vision</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A2342] tracking-tight leading-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Message from the Managing Director
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            A personal commitment to every student, parent, and industrial worker family seeking legitimate higher education in Pakistan.
          </p>
        </div>

        {/* Main Director Card Grid */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xl overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Director Portrait & Video / PiP Console (5 cols) */}
          <div className="lg:col-span-5 bg-[#0A2342] text-white flex flex-col justify-between p-6 sm:p-8 relative">
            
            {/* Top Bar inside Card */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-700/60">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
                  Official Statement
                </span>
              </div>

              {/* PiP Button */}
              <button
                onClick={onTogglePip}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  isPipActive
                    ? 'bg-amber-400 text-slate-950 shadow-md'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                }`}
                title="Pop out video as Picture in Picture"
              >
                <Tv className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>{isPipActive ? 'PiP Active (Docked)' : 'Picture in Picture (PiP)'}</span>
              </button>
            </div>

            {/* Portrait & Media Screen */}
            <div className="my-6 relative rounded-2xl overflow-hidden border-2 border-amber-400/40 shadow-2xl bg-black group">
              <img
                src={directorImage}
                alt="Director Armaghaan Rajput"
                className="w-full h-80 sm:h-96 object-cover object-top filter brightness-95 contrast-105 group-hover:scale-102 transition-transform duration-700"
              />

              {/* Gradient Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent pointer-events-none" />

              {/* Play / Pause Interactive Trigger */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={onTogglePlay}
                  className="w-16 h-16 rounded-full bg-[#FF7A00]/90 hover:bg-[#FF7A00] text-white flex items-center justify-center shadow-2xl transition-all duration-300 transform group-hover:scale-110 active:scale-95 cursor-pointer backdrop-blur-xs border-2 border-white/40"
                  aria-label={isPlaying ? 'Pause Director Message' : 'Play Director Message'}
                >
                  {isPlaying ? (
                    <Pause className="w-7 h-7 text-white fill-white" />
                  ) : (
                    <Play className="w-7 h-7 text-white fill-white ml-1" />
                  )}
                </button>
              </div>

              {/* Live Audio Visualizer Overlay when playing */}
              {isPlaying && (
                <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20 flex items-center gap-2">
                  <div className="flex items-end gap-1 h-3.5">
                    <span className="w-1 bg-amber-400 h-full animate-bounce" />
                    <span className="w-1 bg-emerald-400 h-2/3 animate-pulse" />
                    <span className="w-1 bg-[#FF7A00] h-4/5 animate-bounce delay-75" />
                    <span className="w-1 bg-white h-1/2 animate-pulse delay-150" />
                  </div>
                  <span className="text-[11px] font-bold text-white">Audio Statement Active</span>
                </div>
              )}

              {/* Bottom Card Identity */}
              <div className="absolute bottom-4 left-4 right-4">
                <div className="text-lg font-black text-white flex items-center gap-2">
                  <span>{DIRECTOR_PROFILE.name}</span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/30 text-emerald-300 border border-emerald-400/40">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" /> Verified MD
                  </span>
                </div>
                <p className="text-xs text-amber-300 font-semibold mt-0.5">
                  {DIRECTOR_PROFILE.designation} • {DIRECTOR_PROFILE.company}
                </p>
                <p className="text-[11px] text-slate-300 mt-1 flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-[#FF7A00] shrink-0" />
                  <span>Head Office: 1 KM Main Multan Road, Pattoki</span>
                </p>
              </div>
            </div>

            {/* Video / Audio Highlight Chapters */}
            <div className="space-y-2">
              <div className="text-[11px] font-extrabold text-slate-300 uppercase tracking-wider flex items-center justify-between">
                <span>Key Takeaways</span>
                <span className="text-amber-400">Click to listen</span>
              </div>
              <div className="grid grid-cols-1 gap-1.5">
                {DIRECTOR_PROFILE.videoHighlights.map((hl, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setActiveHighlightIndex(idx);
                      if (!isPlaying) onTogglePlay();
                    }}
                    className={`text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                      activeHighlightIndex === idx
                        ? 'bg-amber-400/20 text-amber-200 border border-amber-400/40'
                        : 'bg-white/5 hover:bg-white/10 text-slate-300'
                    }`}
                  >
                    <span className="truncate">{hl.title}</span>
                    <span className="text-[10px] font-mono font-bold text-amber-300 shrink-0 ml-2">
                      {hl.time}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Director Direct WhatsApp CTA */}
            <div className="pt-4 mt-4 border-t border-slate-700/60 flex items-center gap-2">
              <a
                href={`https://wa.me/923294403898?text=Hello%20Sir%20Armaghaan%20Rajput,%20I%20would%20like%20to%20discuss%20admissions.`}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-slate-950 font-black text-xs flex items-center justify-center gap-1.5 shadow-md transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Consultation</span>
              </a>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl bg-[#1877F2] hover:bg-blue-600 text-white transition-colors flex items-center justify-center shadow-md"
                title="Connect on Facebook"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Full Message & Guarantees (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-10 flex flex-col justify-between space-y-6">
            
            {/* Top Language Toggle & Badges */}
            <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-slate-500">Read in:</span>
                <div className="inline-flex rounded-lg bg-slate-100 p-0.5 border border-slate-200">
                  <button
                    onClick={() => setActiveLang('english')}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                      activeLang === 'english'
                        ? 'bg-[#0A2342] text-white shadow-xs'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => setActiveLang('urdu')}
                    className={`px-3 py-1 text-xs font-bold rounded-md transition-all cursor-pointer ${
                      activeLang === 'urdu'
                        ? 'bg-[#0A2342] text-white shadow-xs font-serif'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    اردو (Urdu)
                  </button>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Zero Agent Commission Policy</span>
              </div>
            </div>

            {/* Core Quote Box */}
            <blockquote className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 border-l-4 border-amber-500 text-slate-800 italic text-sm sm:text-base leading-relaxed">
              &ldquo;{DIRECTOR_PROFILE.quote}&rdquo;
            </blockquote>

            {/* Message Body (English or Urdu) */}
            {activeLang === 'english' ? (
              <div className="space-y-3.5 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                {DIRECTOR_PROFILE.messageEnglish.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            ) : (
              <div
                dir="rtl"
                className="space-y-4 text-sm sm:text-base text-slate-800 leading-loose font-serif text-right bg-slate-50/70 p-4 rounded-xl border border-slate-200"
              >
                {DIRECTOR_PROFILE.messageUrdu.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            )}

            {/* 3 Pillars of Leadership */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="w-8 h-8 rounded-full bg-amber-100 text-[#FF7A00] flex items-center justify-center mx-auto mb-1.5 font-black text-xs">
                  100%
                </div>
                <h4 className="text-xs font-black text-[#0A2342]">PWWF Scholarship</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Zero service charges from worker families</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-1.5">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-[#0A2342]">PNC &amp; HEC Affiliated</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Strict boycott of unaccredited institutions</p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200/80 text-center">
                <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-1.5">
                  <MapPin className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-black text-[#0A2342]">Local Presence</h4>
                <p className="text-[11px] text-slate-500 mt-0.5">Physical office on Main Multan Road, Pattoki</p>
              </div>
            </div>

            {/* Bottom Signature & Action Bar */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-slate-300 shrink-0">
                  <img src={directorImage} alt="Armaghaan Rajput" className="w-full h-full object-cover" />
                </div>
                <div>
                  <div className="text-xs font-extrabold text-[#0A2342]">
                    Armaghaan Rajput
                  </div>
                  <div className="text-[11px] text-slate-500">
                    Managing Director • Scholar Sphere Consultants
                  </div>
                  <div className="text-[10px] text-amber-600 font-bold">
                    Kasur District • Punjab, Pakistan
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={onTogglePip}
                  className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg bg-amber-100 hover:bg-amber-200 text-amber-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer border border-amber-300"
                >
                  <Tv className="w-3.5 h-3.5 text-amber-700" />
                  <span>Watch in PiP</span>
                </button>

                <button
                  onClick={onBookAppointment}
                  className="flex-1 sm:flex-none px-4 py-2 rounded-lg bg-[#0A2342] hover:bg-[#081b33] text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer shadow-xs"
                >
                  <span>Meet Director in Person</span>
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
