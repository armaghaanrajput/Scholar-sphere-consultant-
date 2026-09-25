import React, { useState } from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  Award,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Phone,
  ArrowLeft,
  Building,
  GraduationCap,
  Sparkles,
  ShieldCheck,
  Send,
} from 'lucide-react';

interface PwwfEligibilityPageProps {
  onBackToHome: () => void;
}

export const PwwfEligibilityPage: React.FC<PwwfEligibilityPageProps> = ({ onBackToHome }) => {
  const [parentWorkerType, setParentWorkerType] = useState<string>('factory');
  const [fatherCnic, setFatherCnic] = useState<string>('');
  const [gender, setGender] = useState<string>('Male');
  const [customGender, setCustomGender] = useState<string>('');
  const [hasSocialSecurity, setHasSocialSecurity] = useState<boolean | null>(true);
  const [hasEobi, setHasEobi] = useState<boolean | null>(true);
  const [selectedDegree, setSelectedDegree] = useState<string>('BS Nursing');
  const [studentCity, setStudentCity] = useState<string>('Pattoki');
  const [studentName, setStudentName] = useState<string>('');
  const [intermediateMarks, setIntermediateMarks] = useState<string>('above-60');

  const isEligible = hasSocialSecurity === true || hasEobi === true;

  const buildWhatsappUrl = () => {
    const displayGender = gender === 'Custom' && customGender.trim() ? `Custom (${customGender.trim()})` : gender;

    const text = `*PWWF 100% SCHOLARSHIP ELIGIBILITY ASSESSMENT*
📌 Academic Session: ${CURRENT_SESSION.slash}
Scholar Sphere Consultants — Pattoki

Student Profile:
• Name: ${studentName || 'Prospective Student'}
• Gender: ${displayGender}
• City: ${studentCity}
• Degree Interest: ${selectedDegree}
• Intermediate Marks: ${intermediateMarks === 'above-60' ? 'Above 60%' : '50% - 60%'}

Parent Worker Verification:
• Father CNIC: ${fatherCnic || 'To be verified at office'}
• Employment: ${parentWorkerType === 'factory' ? 'Factory / Industrial Worker' : 'Mill / Establishment Worker'}
• PESSI Social Security Card: ${hasSocialSecurity ? 'Active / Yes' : 'No'}
• EOBI Card: ${hasEobi ? 'Active / Yes' : 'No'}
• Preliminary Result: ${isEligible ? 'QUALIFIES FOR 100% PWWF SCHOLARSHIP' : 'REQUIRES SPECIAL REVIEW'}

Please verify my worker documents and guide me on the next quota application steps.`;

    return `https://wa.me/923294403898?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBackToHome}
              className="p-2 rounded-lg text-slate-600 hover:text-[#0A2342] hover:bg-slate-100 transition-colors flex items-center gap-1.5 font-bold text-xs cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#FF7A00]" />
              <span>Back to Main Page</span>
            </button>
            <div className="h-5 w-px bg-slate-200" />
            <BrandLogo variant="full" size="sm" />
          </div>

          <span className="text-[11px] font-extrabold text-amber-900 bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
            PWWF {CURRENT_SESSION.slash}
          </span>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A2342] text-white text-xs font-bold mb-2">
            <Award className="w-3.5 h-3.5 text-amber-400" />
            <span>PWWF Scholarship Eligibility Form ({CURRENT_SESSION.slash})</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight">
            100% Free Higher Education for Workers&#39; Children
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            Children of industrial, factory, and mill workers in Punjab can study BS Nursing, DPT, and Allied Sciences with zero tuition fee, free hostel, and monthly stipend.
          </p>
        </div>

        {/* The Eligibility Assessment Form */}
        <div className="bg-white rounded-2xl border border-slate-200 shadow-xl p-6 sm:p-8 space-y-6">
          
          {/* 1. Student Details */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#0A2342] uppercase tracking-wider border-b border-slate-100 pb-2">
              1. Student Basic Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Student Name</label>
                <input
                  type="text"
                  placeholder="e.g. Sana Bibi"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Gender</label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none bg-white"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Custom">Custom</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">City / District</label>
                <input
                  type="text"
                  placeholder="Pattoki, Kasur, etc."
                  value={studentCity}
                  onChange={(e) => setStudentCity(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none"
                />
              </div>
            </div>
          </div>

          {/* 2. Parent Worker Employment */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#0A2342] uppercase tracking-wider border-b border-slate-100 pb-2">
              2. Father / Mother Industrial Employment
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Father CNIC Number</label>
                <input
                  type="text"
                  placeholder="e.g. 35102-1234567-1"
                  value={fatherCnic}
                  onChange={(e) => setFatherCnic(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none"
                />
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Workplace Sector</label>
                <select
                  value={parentWorkerType}
                  onChange={(e) => setParentWorkerType(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none bg-white"
                >
                  <option value="factory">Textile, Sugar, or Chemical Factory</option>
                  <option value="mill">Flour / Rice / Paper Mill</option>
                  <option value="commercial">Registered Commercial Establishment</option>
                </select>
              </div>
            </div>

            {/* Worker Cards Checkboxes */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className={`p-3 rounded-xl border transition-all ${hasSocialSecurity ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`}>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasSocialSecurity === true}
                    onChange={(e) => setHasSocialSecurity(e.target.checked)}
                    className="w-4 h-4 text-[#FF7A00] rounded focus:ring-0"
                  />
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">
                      PESSI Social Security Card
                    </strong>
                    <span className="text-[10px] text-slate-500">
                      Punjab Employee Social Security Card issued to parent
                    </span>
                  </div>
                </label>
              </div>

              <div className={`p-3 rounded-xl border transition-all ${hasEobi ? 'bg-emerald-50 border-emerald-300' : 'bg-slate-50 border-slate-200'}`}>
                <label className="flex items-center gap-2.5 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={hasEobi === true}
                    onChange={(e) => setHasEobi(e.target.checked)}
                    className="w-4 h-4 text-[#FF7A00] rounded focus:ring-0"
                  />
                  <div>
                    <strong className="block text-xs font-bold text-slate-900">
                      EOBI Card / Registration
                    </strong>
                    <span className="text-[10px] text-slate-500">
                      Employees Old-Age Benefits Institution number
                    </span>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* 3. Degree Choice & Marks */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold text-[#0A2342] uppercase tracking-wider border-b border-slate-100 pb-2">
              3. Desired Degree &amp; Marks
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">Target Degree</label>
                <select
                  value={selectedDegree}
                  onChange={(e) => setSelectedDegree(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none bg-white font-medium"
                >
                  <option value="BS Nursing (4 Years PNC)">BS Nursing (4 Years PNC Approved)</option>
                  <option value="Doctor of Physical Therapy (DPT)">Doctor of Physical Therapy (DPT)</option>
                  <option value="Doctor of Pharmacy (Pharm-D)">Doctor of Pharmacy (Pharm-D)</option>
                  <option value="BS Medical Lab Technology (MLT)">BS Medical Lab Technology (MLT)</option>
                  <option value="BS Medical Imaging (MIT)">BS Medical Imaging (MIT)</option>
                  <option value="BS Anesthesia & Operation Theater">BS Anesthesia &amp; Operation Theater</option>
                  <option value="BS Computer Science / Software">BS Computer Science / Software</option>
                </select>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-slate-700">FSc / Intermediate Marks</label>
                <select
                  value={intermediateMarks}
                  onChange={(e) => setIntermediateMarks(e.target.value)}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none bg-white font-medium"
                >
                  <option value="above-60">60% or Above (Direct Merit Quota)</option>
                  <option value="50-60">50% to 59% (Eligible for Nursing &amp; Allied)</option>
                  <option value="below-50">Below 50% (Need Pre-Admission Counseling)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Live Eligibility Outcome Box */}
          <div className={`p-4 rounded-xl border-2 ${isEligible ? 'bg-emerald-50 border-emerald-500' : 'bg-amber-50 border-amber-400'}`}>
            <div className="flex items-start gap-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center shrink-0 ${isEligible ? 'bg-emerald-600 text-white' : 'bg-amber-500 text-white'}`}>
                {isEligible ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
              </div>
              <div>
                <strong className={`block text-xs font-black uppercase tracking-wide ${isEligible ? 'text-emerald-900' : 'text-amber-900'}`}>
                  {isEligible ? '★ 100% Full Scholarship Eligible (Session ' + CURRENT_SESSION.slash + ')' : 'Requires Office Document Verification'}
                </strong>
                <p className="text-xs text-slate-700 mt-0.5 leading-relaxed">
                  {isEligible
                    ? 'Based on active PESSI / EOBI records, you qualify for full tuition waiver, hostel fees, and official monthly stipend from the Punjab Workers Welfare Board.'
                    : 'If your parent works in a mill or factory but card is pending, Scholar Sphere Consultants will assist in getting employer verification.'}
                </p>
              </div>
            </div>
          </div>

          {/* Submit via WhatsApp */}
          <div className="pt-2">
            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#0A2342] to-[#123966] hover:from-[#FF7A00] hover:to-[#e66e00] text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <Send className="w-4 h-4 text-[#FF7A00]" />
              <span>Submit Assessment to Scholar Sphere via WhatsApp</span>
            </a>
            <p className="text-[11px] text-center text-slate-500 mt-2">
              Our PWWF documentation desk is directed by Armaghaan Rajput in Pattoki, Punjab.
            </p>
          </div>

        </div>
      </main>
    </div>
  );
};
