import React from 'react';
import { BRAND_USPS } from '../data/brandData';
import {
  Check,
  X,
  ShieldCheck,
  Award,
  TrendingUp,
  Building,
  Sparkles,
  MapPin,
  CheckCircle2,
} from 'lucide-react';

export const WhyUsSection: React.FC = () => {
  return (
    <section id="why-us" className="py-8 sm:py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <span className="text-[11px] font-bold text-[#FF7A00] uppercase tracking-wider block mb-1">
            Why Choose Scholar Sphere
          </span>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight text-balance"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Built on Trust, Complete Legality, and Proven Admissions Excellence
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed">
            In an educational market filled with deceptive promises and unauthorized colleges, Scholar Sphere Consultants stands as a transparent, honest local advisory in Pattoki.
          </p>
        </div>

        {/* 6 USPs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-6">
          {BRAND_USPS.map((usp, idx) => (
            <div
              key={usp.title}
              className="p-4 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 hover:shadow-xs transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#0A2342] text-[#FF7A00] flex items-center justify-center font-bold shadow-xs">
                    {idx === 0 && <ShieldCheck className="w-4 h-4 text-emerald-400" />}
                    {idx === 1 && <Award className="w-4 h-4 text-amber-400" />}
                    {idx === 2 && <TrendingUp className="w-4 h-4 text-white" />}
                    {idx === 3 && <Building className="w-4 h-4 text-[#FF7A00]" />}
                    {idx === 4 && <Sparkles className="w-4 h-4 text-emerald-400" />}
                    {idx === 5 && <CheckCircle2 className="w-4 h-4 text-amber-300" />}
                  </div>
                  <span className="text-[11px] font-mono font-bold text-[#0A2342] bg-white border border-slate-200 px-2 py-0.5 rounded">
                    {usp.stat}
                  </span>
                </div>

                <h3 className="text-sm font-extrabold text-[#0A2342] mb-1">
                  {usp.title}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {usp.description}
                </p>
              </div>

              <div className="mt-3 pt-2.5 border-t border-slate-200/80 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                <Check className="w-3 h-3 text-emerald-600" />
                <span>Verified Standard</span>
              </div>
            </div>
          ))}
        </div>

        {/* COMPARISON TABLE: Scholar Sphere vs Unverified Agents */}
        <div className="bg-slate-50 rounded-xl border border-slate-200 p-4 sm:p-5 overflow-hidden">
          <div className="mb-4">
            <h3 className="text-lg font-bold text-[#0A2342] mb-0.5">
              How We Protect Students & Parents
            </h3>
            <p className="text-xs text-slate-500">
              Clear comparison between verified consultancy and unauthorized agents in Punjab.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-xs text-left">
              <thead>
                <tr className="border-b border-slate-200 text-slate-500">
                  <th className="py-3 px-4 font-bold uppercase text-[10px]">Evaluation Factor</th>
                  <th className="py-3 px-4 font-bold text-[#0A2342] uppercase text-[10px] bg-emerald-50/80 rounded-t-lg">
                    Scholar Sphere Consultants
                  </th>
                  <th className="py-3 px-4 font-bold uppercase text-[10px] text-slate-400">
                    Unverified Agents / Unregistered Desks
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    College Registration
                  </td>
                  <td className="py-3.5 px-4 bg-emerald-50/50 text-emerald-900 font-bold flex items-center gap-1.5">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>100% PNC, PHEC & HEC Recognized</span>
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 flex items-center gap-1.5">
                    <X className="w-4 h-4 text-red-500 shrink-0" />
                    <span>Often push unchartered or fake campuses</span>
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    Student Service Fee
                  </td>
                  <td className="py-3.5 px-4 bg-emerald-50/50 text-emerald-900 font-bold">
                    PKR 0 (Free assistance for students)
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Demand hefty upfront commissions and file fees
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    Visa & Foreign Promises
                  </td>
                  <td className="py-3.5 px-4 bg-emerald-50/50 text-emerald-900 font-bold">
                    100% Legal — Strictly No Visa (Honest Pakistan focus)
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Make fake overseas visa claims that risk family savings
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    PWWF Scholarship Mastery
                  </td>
                  <td className="py-3.5 px-4 bg-emerald-50/50 text-emerald-900 font-bold">
                    Complete handling: factory documentation to grant release
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    Little to no understanding of labour board rules
                  </td>
                </tr>

                <tr>
                  <td className="py-3.5 px-4 font-semibold text-slate-800">
                    Physical Office & Location
                  </td>
                  <td className="py-3.5 px-4 bg-emerald-50/50 text-emerald-900 font-bold">
                    Permanent office: 1 KM Main Multan Road, Pattoki
                  </td>
                  <td className="py-3.5 px-4 text-slate-500">
                    No physical presence, temporary or online-only
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
