import React from 'react';
import { OFFICIAL_PORTALS, BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import {
  ShieldAlert,
  ShieldCheck,
  ExternalLink,
  CheckCircle2,
  AlertTriangle,
  HelpCircle,
  Phone,
  FileCheck,
  Building,
} from 'lucide-react';

export const CollegeVerificationGuide: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-2">
      {/* Top Heading */}
      <div className="text-center mb-5">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-red-100 border border-red-300 text-red-900 text-[11px] font-bold mb-2">
          <ShieldAlert className="w-3.5 h-3.5 text-red-600" />
          <span>Official Anti-Fraud & Verification Desk</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          Don&#39;t Risk Your Future — Verify Before You Pay
        </h1>
        <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl mx-auto">
          Every year, unauthorized private colleges without degree charters dupe parents into paying hefty admission fees. Scholar Sphere Consultants guarantees <strong>100% Registered Institutions Only</strong>.
        </p>
      </div>

      {/* RED WARNING HERO BOX */}
      <div className="mb-5 p-4 rounded-xl bg-red-50 border-2 border-[#D32F2F] shadow-xs">
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-lg bg-[#D32F2F] text-white flex items-center justify-center shrink-0">
            <AlertTriangle className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-extrabold text-[#D32F2F] uppercase tracking-wide">
              Critical Warning: Unauthorized Private Campuses in Punjab
            </h2>
            <p className="text-xs text-red-900 mt-1 leading-relaxed">
              {OFFICIAL_COPY_STRINGS.fakeCollegeWarning}
            </p>
            <div className="mt-2.5 flex flex-wrap gap-1.5 text-[11px] font-bold text-red-800">
              <span className="bg-red-200/70 px-2 py-0.5 rounded">⚠ Unregistered Nursing Schools</span>
              <span className="bg-red-200/70 px-2 py-0.5 rounded">⚠ Sub-campuses without PHEC Charter</span>
              <span className="bg-red-200/70 px-2 py-0.5 rounded">⚠ Colleges without Teaching Hospitals</span>
            </div>
          </div>
        </div>
      </div>

      {/* OFFICIAL GOVERNMENT PORTALS SECTION */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            <h2 className="text-lg font-bold text-[#0A2342]">Official Government Verification Portals</h2>
          </div>
          <span className="text-xs text-slate-400 font-mono">Real Government Authorities</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {OFFICIAL_PORTALS.map((portal) => (
            <div
              key={portal.name}
              className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded">
                    Official Portal
                  </span>
                  <a
                    href={portal.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-semibold text-[#0A2342] hover:text-[#FF7A00] inline-flex items-center gap-1"
                  >
                    <span>Visit Portal</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                <h3 className="text-sm font-extrabold text-[#0A2342] mb-1">{portal.name}</h3>
                <span className="text-[11px] font-mono text-slate-500 block mb-2">{portal.cleanDisplayUrl}</span>
                <p className="text-xs text-slate-600 leading-relaxed">{portal.purpose}</p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-400">
                <span>{portal.authority}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5-STEP VERIFICATION CHECKLIST FOR PARENTS */}
      <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200">
        <h2 className="text-base font-extrabold text-[#0A2342] mb-4 flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-[#FF7A00]" />
          <span>The 5-Step Verification Checklist Before Paying Any Admission Fee</span>
        </h2>

        <div className="space-y-3 text-xs">
          <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5">
              1
            </span>
            <div>
              <strong className="text-slate-900 block font-bold">Check PNMC / PNC Registration (For BS Nursing)</strong>
              <p className="text-slate-600 mt-0.5">Ensure the institution is actively listed on pnmc.gov.pk under approved colleges. Colleges with pending or suspended licenses cannot register graduates.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5">
              2
            </span>
            <div>
              <strong className="text-slate-900 block font-bold">Look Up Punjab e-Registration Portal</strong>
              <p className="text-slate-600 mt-0.5">Search the college name on e-registration.punjab.gov.pk/parents-corner to verify government no-objection certificate (NOC) and affiliation status.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5">
              3
            </span>
            <div>
              <strong className="text-slate-900 block font-bold">Inspect Attached Hospital Clinical Beds</strong>
              <p className="text-slate-600 mt-0.5">For Nursing, DPT, and Allied Health degrees, regulations require a minimum 200–500 bed attached or affiliated teaching hospital for mandatory clinical rotations.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5">
              4
            </span>
            <div>
              <strong className="text-slate-900 block font-bold">Confirm Degree Granting University Charter</strong>
              <p className="text-slate-600 mt-0.5">Ask which chartered university awards the final degree (e.g., UHS Lahore, University of the Punjab, GCUF) and verify the college is an affiliated constituent.</p>
            </div>
          </div>

          <div className="flex items-start gap-3 bg-white p-3 rounded-xl border border-slate-200">
            <span className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center justify-center shrink-0 mt-0.5">
              5
            </span>
            <div>
              <strong className="text-slate-900 block font-bold">Bring Your Prospectus to Scholar Sphere Pattoki for 100% Free Verification</strong>
              <p className="text-slate-600 mt-0.5">Visit our office on Main Multan Road in Pattoki. We will cross-check the registration in government databases right in front of you at zero cost.</p>
            </div>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
          <div className="text-xs text-slate-500">
            Have doubts about a college in Kasur or Pattoki? Consult Armaghaan Rajput today.
          </div>
          <a
            href="https://wa.me/923294403898?text=Hello%20Scholar%20Sphere,%20I%20want%20to%20verify%20a%20college%20registration%20before%20paying%20fees."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#2E7D32] hover:bg-[#256828] text-white font-bold text-xs shadow-sm transition-colors"
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Verify A College on WhatsApp</span>
          </a>
        </div>
      </div>
    </div>
  );
};
