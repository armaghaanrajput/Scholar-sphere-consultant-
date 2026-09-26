import React from 'react';
import {
  Calculator,
  FileCheck2,
  Search,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Award,
  GraduationCap,
  ExternalLink,
} from 'lucide-react';
import { CURRENT_SESSION } from '../utils/academicSession';

interface OnlineStudentAssistantProps {
  onOpenMatcher: () => void;
  onOpenChecklist: () => void;
  onOpenFaq: () => void;
}

export const OnlineStudentAssistant: React.FC<OnlineStudentAssistantProps> = ({
  onOpenMatcher,
  onOpenChecklist,
  onOpenFaq,
}) => {
  return (
    <section id="assistant" className="py-16 sm:py-20 bg-white border-t border-b border-slate-200 relative overflow-hidden">
      {/* Decorative Brand Circles */}
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-amber-400/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 rounded-full bg-[#0A2342]/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-black uppercase tracking-wider mb-3 border border-amber-300 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Interactive Student Portals • Session {CURRENT_SESSION.slash}</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl lg:text-4xl font-black text-[#0A2342] tracking-tight"
            style={{ fontFamily: "'Cabinet Grotesk', 'Plus Jakarta Sans', sans-serif" }}
          >
            Online Student Admissions Assistant &amp; Tools
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Dedicated standalone portals designed for Punjab students and industrial worker families. Choose a tool below to open its dedicated full-screen page.
          </p>
        </div>

        {/* 3 Prominent Dedicated Portal Cards / Launchers (Only Buttons on Main Page) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Card 1: FSc Merit & Degree Matcher */}
          <div className="bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-amber-400 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-lg group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-amber-100 text-amber-900 border-2 border-amber-300 flex items-center justify-center font-bold shadow-xs">
                  <Calculator className="w-6 h-6 text-[#FF7A00]" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-amber-200/80 text-amber-950 border border-amber-300">
                  Instant Matcher
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#0A2342] group-hover:text-[#FF7A00] transition-colors">
                FSc Merit &amp; Degree Matcher
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Enter your obtained marks to calculate aggregate percentage, identify eligible BS Nursing, Pharm-D, DPT, and Allied Health programs, and check 100% PWWF fee waiver status.
              </p>

              {/* Highlights */}
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-200 pt-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Real-time aggregate percentage &amp; division</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>PNC &amp; HEC minimum threshold checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                  <span>Printable official merit assessment slip</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                onClick={onOpenMatcher}
                className="btn-3d btn-3d-amber w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer group/btn"
              >
                <Calculator className="w-4 h-4 text-slate-950" />
                <span>Open FSc Merit &amp; Degree Matcher</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 2: Document Checklist Builder */}
          <div className="bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-emerald-400 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-lg group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-900 border-2 border-emerald-300 flex items-center justify-center font-bold shadow-xs">
                  <FileCheck2 className="w-6 h-6 text-emerald-600" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-200/80 text-emerald-950 border border-emerald-300">
                  Dossier Builder
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#0A2342] group-hover:text-emerald-700 transition-colors">
                Document Checklist Builder
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Generate and track required certificates for regular university admission or 100% PWWF worker scholarship filing before visiting our Pattoki office.
              </p>

              {/* Highlights */}
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-200 pt-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>Interactive document readiness tracker</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>PESSI Social Security &amp; EOBI checklist</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                  <span>One-click copy &amp; printable dossier summary</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                onClick={onOpenChecklist}
                className="btn-3d btn-3d-navy w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer group/btn text-white"
              >
                <FileCheck2 className="w-4 h-4 text-emerald-400" />
                <span>Open Document Checklist Builder</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Card 3: Google Search & FAQ Desk */}
          <div className="bg-slate-50 rounded-3xl border-2 border-slate-200 hover:border-blue-400 transition-all p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-lg group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-900 border-2 border-blue-300 flex items-center justify-center font-bold shadow-xs">
                  <Search className="w-6 h-6 text-blue-600" />
                </div>
                <span className="text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full bg-blue-200/80 text-blue-950 border border-blue-300">
                  Search &amp; FAQs
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-black text-[#0A2342] group-hover:text-blue-700 transition-colors">
                Google Search &amp; FAQ Desk
              </h3>
              
              <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                Direct lookup of verified admissions FAQs, PNC &amp; PHEC accreditation registries, anti-fraud guides, and direct WhatsApp question submission to Director Armaghaan Rajput.
              </p>

              {/* Highlights */}
              <ul className="mt-4 space-y-1.5 text-xs text-slate-600 border-t border-slate-200 pt-3">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Instant live search across admissions questions</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Official PNC &amp; Punjab e-portal links</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                  <span>Direct submission to Director's desk</span>
                </li>
              </ul>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <button
                onClick={onOpenFaq}
                className="btn-3d btn-3d-orange w-full py-3.5 px-4 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer group/btn text-white"
              >
                <Search className="w-4 h-4 text-white" />
                <span>Open Google Search &amp; FAQ Desk</span>
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* Micro Trust Banner at bottom of section */}
        <div className="mt-10 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>
              All tools run on 100% official Punjab Higher Education &amp; PNC regulatory standards with zero service charges.
            </span>
          </div>
          <span className="font-bold text-[#0A2342] shrink-0">
            Head Office: 1 KM Main Multan Road, Pattoki
          </span>
        </div>

      </div>
    </section>
  );
};
