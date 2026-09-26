import React from 'react';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  Award,
  Check,
  ShieldCheck,
  Home,
  FileText,
  Sparkles,
  Building,
  Phone,
  ArrowRight,
  Calculator,
} from 'lucide-react';

interface PwwfSectionProps {
  onOpenPwwfForm?: () => void;
}

export const PwwfSection: React.FC<PwwfSectionProps> = ({ onOpenPwwfForm }) => {
  return (
    <section id="pwwf" className="py-8 sm:py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-amber-100 border border-amber-300 text-amber-900 text-[11px] font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-amber-600" />
            <span>Punjab Workers Welfare Board (PWWF) Specialist • {CURRENT_SESSION.slash}</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight text-balance"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            100% Free Higher Education for <br className="hidden sm:inline" />
            <span className="text-[#D4AF37]">Factory &amp; Industrial Workers&#39; Children</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            If your parent is employed in a recognized textile mill, factory, packaging unit, or industrial establishment in Punjab, you are entitled to full government financial sponsorship for your degree in Session {CURRENT_SESSION.slash}.
          </p>
        </div>

        {/* The 4 PWWF Grant Pillars (Gold Accent Theme) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mb-6">
          
          <div className="p-3.5 rounded-xl border border-amber-300 bg-amber-50/60 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold text-xs mb-2 shadow-xs">
                100%
              </div>
              <h3 className="font-extrabold text-[#0A2342] text-xs mb-1">Full Tuition Fees</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                PWWF pays all 8 to 10 semesters of degree tuition directly to the chartered college or university on your behalf.
              </p>
            </div>
            <span className="text-[10px] font-bold text-amber-900 mt-2 block">Zero Out-Of-Pocket Tuition</span>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-300 bg-amber-50/60 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold mb-2 shadow-xs">
                <Home className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-[#0A2342] text-xs mb-1">Hostel Accommodation</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Complete coverage for official campus hostel living, room rentals, and associated utility charges for outstation students.
              </p>
            </div>
            <span className="text-[10px] font-bold text-amber-900 mt-2 block">Safe &amp; Secure Hostel Stay</span>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-300 bg-amber-50/60 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold mb-2 shadow-xs">
                <FileText className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-[#0A2342] text-xs mb-1">Books &amp; Uniform Grant</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Official textbook allowance, academic stationary supplies, medical lab equipment, and prescribed uniforms covered.
              </p>
            </div>
            <span className="text-[10px] font-bold text-amber-900 mt-2 block">Annual Educational Stipend</span>
          </div>

          <div className="p-3.5 rounded-xl border border-amber-300 bg-amber-50/60 flex flex-col justify-between">
            <div>
              <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center font-bold mb-2 shadow-xs">
                <Sparkles className="w-4 h-4" />
              </div>
              <h3 className="font-extrabold text-[#0A2342] text-xs mb-1">Monthly Cash Stipend</h3>
              <p className="text-[11px] text-slate-600 leading-relaxed">
                Official Punjab Welfare Board monthly subsistence allowance disbursed directly into the registered student&#39;s bank account.
              </p>
            </div>
            <span className="text-[10px] font-bold text-amber-900 mt-2 block">Government Disbursed Allowance</span>
          </div>

        </div>

        {/* Form-Free Dedicated Portal Launch Banner */}
        <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-[#0A2342] to-[#123966] text-white flex flex-col md:flex-row items-center justify-between gap-4 border border-slate-700 shadow-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-black uppercase tracking-wider text-amber-300 block">
                Official Scholarship Tool • Session {CURRENT_SESSION.slash}
              </span>
              <h3 className="text-sm sm:text-base font-extrabold text-white">
                PWWF 100% Scholarship Eligibility Assessment Form
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                Check if your father/mother&#39;s PESSI Social Security or EOBI registration qualifies you for complete free education.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0 w-full md:w-auto">
            {onOpenPwwfForm && (
              <button
                onClick={onOpenPwwfForm}
                className="btn-3d btn-3d-amber w-full md:w-auto px-5 py-3 rounded-xl text-slate-950 font-black text-xs transition-all shadow-md flex items-center justify-center gap-1.5 cursor-pointer group"
              >
                <span>Open Scholarship Eligibility Form</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
            <a
              href="https://wa.me/923294403898?text=Hello%20Scholar%20Sphere,%20I%20want%20to%20check%20my%20PWWF%20scholarship%20eligibility."
              target="_blank"
              rel="noreferrer"
              className="hidden lg:flex items-center gap-1.5 px-3 py-2.5 rounded-lg bg-white/10 hover:bg-white/20 text-white font-bold text-xs"
            >
              <Phone className="w-3.5 h-3.5 text-amber-300" />
              <span>Helpline</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
