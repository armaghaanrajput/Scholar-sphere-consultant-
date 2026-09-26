import React, { useState } from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  Calculator,
  ArrowLeft,
  CheckCircle2,
  Award,
  Phone,
  Printer,
  Sparkles,
  Share2,
  Building,
  GraduationCap,
  AlertCircle,
  HelpCircle,
} from 'lucide-react';

interface MeritMatcherPageProps {
  onBackToHome: () => void;
}

export const MeritMatcherPage: React.FC<MeritMatcherPageProps> = ({ onBackToHome }) => {
  const [fscMarks, setFscMarks] = useState<string>('780');
  const [totalMarks, setTotalMarks] = useState<string>('1100');
  const [stream, setStream] = useState<string>('Pre-Medical');
  const [isIndustrialWorker, setIsIndustrialWorker] = useState<boolean>(true);
  const [studentName, setStudentName] = useState<string>('');
  const [studentCity, setStudentCity] = useState<string>('Pattoki');

  const obtained = parseFloat(fscMarks) || 0;
  const total = parseFloat(totalMarks) || 1100;
  const percentage = total > 0 ? ((obtained / total) * 100).toFixed(1) : '0';
  const numPercent = parseFloat(percentage);

  const getEligiblePrograms = () => {
    if (numPercent >= 60) {
      return [
        {
          name: 'Doctor of Physical Therapy (DPT - 5 Years)',
          council: 'HEC & PMDC Clinical Guidelines',
          fit: 'High Fit (60%+ Required)',
          category: 'Medical / Therapy',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
        {
          name: 'Doctor of Pharmacy (Pharm-D - 5 Years)',
          council: 'Pharmacy Council of Pakistan (PCP)',
          fit: 'High Fit (60%+ Required)',
          category: 'Pharmacy',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
        {
          name: 'BS Nursing (Generic 4 Years)',
          council: 'Pakistan Nursing Council (PNC / PNMC)',
          fit: 'Top Direct Merit',
          category: 'Nursing',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
        {
          name: 'BS Medical Imaging Technology (RIT/MIT)',
          council: 'HEC Recognized Faculty',
          fit: 'Direct Admission',
          category: 'Allied Health',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
        {
          name: 'BS Medical Lab Technology (MLT - 4 Years)',
          council: 'HEC Recognized Faculty',
          fit: 'Direct Admission',
          category: 'Allied Health',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
        {
          name: 'BS Computer Science & Software Engineering',
          council: 'NCEAC & HEC',
          fit: 'Direct Admission (Math / Pre-Med Add-on)',
          category: 'Computing',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
      ];
    } else if (numPercent >= 50) {
      return [
        {
          name: 'BS Nursing (Generic 4 Years)',
          council: 'Pakistan Nursing Council (PNC / PNMC)',
          fit: 'Eligible (50%+ Required)',
          category: 'Nursing',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
        {
          name: 'BS Medical Lab Technology (MLT - 4 Years)',
          council: 'HEC Recognized Faculty',
          fit: 'Eligible (50%+ Required)',
          category: 'Allied Health',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
        {
          name: 'BS Operation Theater & Anesthesia Technology',
          council: 'HEC Recognized Faculty',
          fit: 'Eligible (50%+ Required)',
          category: 'Allied Health',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
        {
          name: 'BS Human Nutrition & Dietetics (HND)',
          council: 'HEC Recognized',
          fit: 'Eligible (50%+ Required)',
          category: 'Allied Health',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
        {
          name: 'BS Computer Science / Information Technology',
          council: 'HEC Recognized',
          fit: 'Eligible (50%+ Required)',
          category: 'Computing',
          pwwfCoverage: '100% Full Fee & Hostel Covered',
        },
      ];
    } else {
      return [
        {
          name: 'Clinical Technician Diplomas & Certifications (2 Years)',
          council: 'Punjab Medical Faculty (PMF)',
          fit: 'Direct Admission (Matric / FSc)',
          category: 'Clinical Diplomas',
          pwwfCoverage: 'Subject to Quota Availability',
        },
        {
          name: 'FSc Marks Improvement Counseling & Private Options',
          council: 'BISE & HEC Registered',
          fit: 'Strategic Advisory Recommended',
          category: 'Academic Counseling',
          pwwfCoverage: 'Consult Office',
        },
      ];
    }
  };

  const buildWhatsappUrl = () => {
    const text = `*FSc MERIT & DEGREE MATCH ASSESSMENT*
📌 Academic Session: ${CURRENT_SESSION.slash}
Scholar Sphere Consultants — Pattoki

Candidate Details:
• Student Name: ${studentName || 'Prospective Candidate'}
• City/District: ${studentCity}
• Intermediate Stream: ${stream}
• Marks: ${fscMarks} / ${totalMarks} (${percentage}%)
• Parent Status: ${isIndustrialWorker ? 'Registered Industrial / Factory Worker (PWWF Eligible)' : 'Private / General Merit'}
• Preliminary Result: ${numPercent >= 50 ? 'Eligible for Degree Programs' : 'Needs Counseling'}

Please evaluate my detailed admission eligibility and guide me on PNC/HEC recognized college options.`;

    return `https://wa.me/923294403898?text=${encodeURIComponent(text)}`;
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-20">
      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b-2 border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs print:hidden">
        <button
          onClick={onBackToHome}
          className="btn-3d btn-3d-white px-3.5 py-1.5 rounded-xl text-xs font-black flex items-center gap-2 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#FF7A00]" />
          <span>Back to Home</span>
        </button>

        <div className="flex items-center gap-2">
          <BrandLogo variant="full" size="sm" />
          <span className="hidden sm:inline-block text-xs font-extrabold text-[#0A2342] border-l border-slate-300 pl-2">
            Merit Matcher
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="btn-3d btn-3d-white px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 cursor-pointer"
            title="Print Merit Slip"
          >
            <Printer className="w-3.5 h-3.5 text-slate-700" />
            <span className="hidden sm:inline">Print Slip</span>
          </button>
          <a
            href="tel:+923294403898"
            className="btn-3d btn-3d-amber px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 cursor-pointer text-slate-950"
          >
            <Phone className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Office Helpline</span>
          </a>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10">
        
        {/* Page Hero Header */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm mb-8 text-center sm:text-left flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-950 text-xs font-black uppercase tracking-wider mb-2 border border-amber-300">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>Official Academic Tool • Session {CURRENT_SESSION.slash}</span>
            </div>
            <h1
              className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              FSc Merit &amp; Degree Matcher
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
              Calculate your exact aggregate percentage, check eligibility for BS Nursing, Pharm-D, DPT, and Allied Health Sciences, and verify if you qualify for 100% full fee waiver under PWWF.
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 text-center min-w-[170px]">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Calculated Merit
            </span>
            <div className="text-3xl sm:text-4xl font-black text-[#0A2342] mt-0.5">
              {percentage}%
            </div>
            <span className={`inline-block mt-1 text-[11px] font-black px-2.5 py-0.5 rounded-full ${
              numPercent >= 60
                ? 'bg-emerald-100 text-emerald-800 border border-emerald-300'
                : numPercent >= 50
                ? 'bg-amber-100 text-amber-900 border border-amber-300'
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}>
              {numPercent >= 60 ? '1st Division (High Merit)' : numPercent >= 50 ? '2nd Division (Eligible)' : 'Review Needed'}
            </span>
          </div>
        </div>

        {/* Two-Column Grid: Form & Output */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Interactive Inputs */}
          <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-7 shadow-sm space-y-4">
            <h2 className="text-base font-black text-[#0A2342] flex items-center gap-2 border-b pb-3 border-slate-200">
              <Calculator className="w-5 h-5 text-[#FF7A00]" />
              <span>Enter Your Academic Credentials</span>
            </h2>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Student Full Name (Optional)
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Muhammad Usman / Fatima Bibi"
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#FF7A00] text-sm text-slate-800 bg-white"
              />
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                City / District in Punjab
              </label>
              <input
                type="text"
                value={studentCity}
                onChange={(e) => setStudentCity(e.target.value)}
                placeholder="e.g. Pattoki, Chunian, Kasur, Lahore"
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#FF7A00] text-sm text-slate-800 bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Obtained FSc Marks
                </label>
                <input
                  type="number"
                  value={fscMarks}
                  onChange={(e) => setFscMarks(e.target.value)}
                  placeholder="780"
                  min="0"
                  max="1100"
                  className="w-full p-2.5 rounded-xl border-2 border-slate-300 focus:outline-none focus:border-[#FF7A00] text-base font-black text-[#0A2342] bg-white"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-700 block mb-1">
                  Total FSc Marks
                </label>
                <input
                  type="number"
                  value={totalMarks}
                  onChange={(e) => setTotalMarks(e.target.value)}
                  placeholder="1100"
                  min="1"
                  className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#FF7A00] text-sm text-slate-800 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Intermediate Academic Discipline
              </label>
              <select
                value={stream}
                onChange={(e) => setStream(e.target.value)}
                className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#FF7A00] text-xs font-bold text-slate-800 bg-white"
              >
                <option value="Pre-Medical">FSc Pre-Medical (Biology, Physics, Chemistry)</option>
                <option value="Pre-Engineering">FSc Pre-Engineering (Math, Physics, Chemistry)</option>
                <option value="ICS">ICS (Computer Science, Math, Physics/Stats)</option>
                <option value="General Science">General Science / FA / I.Com</option>
              </select>
            </div>

            {/* Industrial Worker Status */}
            <div className="p-4 bg-amber-50/70 rounded-2xl border-2 border-amber-300/80">
              <span className="text-xs font-black text-amber-950 block mb-2">
                Parent Worker Status (PWWF 100% Free Quota):
              </span>
              <div className="space-y-2 text-xs">
                <label className="flex items-center gap-2.5 cursor-pointer font-bold text-amber-950">
                  <input
                    type="radio"
                    name="worker_status"
                    checked={isIndustrialWorker}
                    onChange={() => setIsIndustrialWorker(true)}
                    className="accent-[#FF7A00] w-4 h-4"
                  />
                  <span>Registered Industrial / Mill Worker (Has PESSI / EOBI)</span>
                </label>
                <label className="flex items-center gap-2.5 cursor-pointer text-slate-700 font-medium">
                  <input
                    type="radio"
                    name="worker_status"
                    checked={!isIndustrialWorker}
                    onChange={() => setIsIndustrialWorker(false)}
                    className="accent-[#FF7A00] w-4 h-4"
                  />
                  <span>Private / Self-Employed / General Merit</span>
                </label>
              </div>
            </div>

            {/* Direct WhatsApp Callout */}
            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="btn-3d btn-3d-whatsapp w-full py-3 px-4 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <Phone className="w-4 h-4 text-[#052e16]" />
              <span>Discuss My Marks with MD</span>
            </a>
          </div>

          {/* Right Column: Matched Degree Programs & PWWF Benefits */}
          <div className="lg:col-span-7 space-y-4">
            
            {/* PWWF Banner Alert if worker and >=50% */}
            {isIndustrialWorker && numPercent >= 50 && (
              <div className="p-5 rounded-2xl bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 shadow-md border-b-4 border-amber-800">
                <div className="flex items-center gap-2.5 font-black text-sm mb-1 text-slate-950">
                  <Award className="w-5 h-5 text-slate-950" />
                  <span>100% Free Education &amp; Hostel Grant Unlocked!</span>
                </div>
                <p className="text-xs text-slate-950 font-medium leading-relaxed">
                  Alhamdulillah! With <strong>{percentage}%</strong> in FSc Pre-Medical and registered industrial worker parentage, you qualify for 100% tuition waiver, free hostel accommodation, and monthly stipend.
                </p>
              </div>
            )}

            <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-7 shadow-sm">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4">
                <div>
                  <h3 className="text-base font-black text-[#0A2342]">
                    Eligible Degree Programs (Session {CURRENT_SESSION.slash})
                  </h3>
                  <p className="text-xs text-slate-500">
                    Programs accredited by PNC, HEC, or Pharmacy Council matching your score.
                  </p>
                </div>
                <span className="text-[11px] font-mono font-bold text-slate-400 bg-slate-100 px-2.5 py-1 rounded-lg">
                  {getEligiblePrograms().length} Programs
                </span>
              </div>

              {/* Program Cards */}
              <div className="space-y-3">
                {getEligiblePrograms().map((item, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 hover:border-amber-400 transition-colors flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs"
                  >
                    <div>
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <h4 className="text-sm font-black text-[#0A2342]">{item.name}</h4>
                      </div>
                      <div className="flex flex-wrap items-center gap-2 mt-1 text-[11px] text-slate-500">
                        <span className="font-semibold text-slate-700">{item.council}</span>
                        <span>•</span>
                        <span className="text-slate-500">{item.category}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-xs font-black text-emerald-800 bg-emerald-100 border border-emerald-300 px-2.5 py-1 rounded-lg">
                        {item.fit}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Office Guarantee Box */}
              <div className="mt-6 p-4 rounded-2xl bg-blue-50/80 border border-blue-200 flex items-start gap-3">
                <Building className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div className="text-xs text-blue-950 leading-relaxed">
                  <strong>Strict Anti-Fraud Assurance: </strong>
                  Scholar Sphere Consultants only places candidates into verified colleges with attached teaching hospitals. We strictly boycott unchartered campuses.
                </div>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="flex flex-wrap items-center gap-3">
              <a
                href={buildWhatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="btn-3d btn-3d-amber flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer"
              >
                <span>Export This Merit Slip to Director Armaghaan</span>
              </a>
              <button
                onClick={onBackToHome}
                className="btn-3d btn-3d-white py-3 px-5 rounded-xl text-xs font-black cursor-pointer shadow-md"
              >
                Return Home
              </button>
            </div>

          </div>

        </div>

      </main>
    </div>
  );
};
