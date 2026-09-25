import React, { useState } from 'react';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import {
  Calculator,
  FileCheck2,
  Search,
  CheckCircle2,
  AlertCircle,
  Phone,
  Copy,
  Check,
  Printer,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Award,
  ShieldAlert,
  ShieldCheck,
  Building,
  GraduationCap,
} from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
  category: 'pwwf' | 'admissions' | 'verification' | 'location';
}

const FAQS: FaqItem[] = [
  {
    question: 'What is the PWWF Scholarship and who qualifies in Punjab?',
    answer: 'The Punjab Workers Welfare Fund (PWWF) provides 100% free higher education, full tuition fee reimbursement, university hostel expenses, and examination dues to children of registered factory, textile mill, and industrial establishment workers who hold an active Punjab Social Security (PESSI) or EOBI card.',
    category: 'pwwf',
  },
  {
    question: 'How do I verify if a nursing college is recognized by PNC (Pakistan Nursing Council)?',
    answer: 'Always verify on the official portal at pnmc.gov.pk under recognized institutions. Ensure the college has an attached 200–500 bed clinical teaching hospital. You can also visit our Pattoki office on Main Multan Road for 100% free database verification.',
    category: 'verification',
  },
  {
    question: 'What are the minimum marks required for BS Nursing and DPT admissions?',
    answer: 'For BS Nursing (Generic 4 Years), the minimum requirement is FSc Pre-Medical with at least 50% marks (550/1100). For Doctor of Physical Therapy (DPT) and Doctor of Pharmacy (Pharm-D), the minimum eligibility is 60% marks (660/1100) in FSc Pre-Medical.',
    category: 'admissions',
  },
  {
    question: 'Are Scholar Sphere Consultants counseling services free for students?',
    answer: 'Yes, 100% free! We do not charge students or parents any consultation fees, file processing fees, or hidden commissions. We assist from form submission to admission confirmation completely free of charge.',
    category: 'admissions',
  },
  {
    question: 'Where is your office located in Pattoki?',
    answer: 'Our permanent office is located at 1 KM Main Multan Road, Pattoki, Near Quaid-e-Azam Nursing College, District Kasur, Punjab. We are easily accessible from Mustafabad, Lalyani, Phool Nagar, Chunian, Kasur, and Lahore.',
    category: 'location',
  },
  {
    question: 'Do you process student visas for foreign countries?',
    answer: 'No. Scholar Sphere Consultants operates strictly under a 100% No-Visa policy. We do not process foreign visas or student migration. We deal exclusively with recognized universities and colleges in Pakistan.',
    category: 'verification',
  },
];

export const OnlineStudentAssistant: React.FC = () => {
  // Tabs: 'calculator' | 'checklist' | 'faq'
  const [activeTool, setActiveTool] = useState<'calculator' | 'checklist' | 'faq'>('calculator');

  // Merit Calculator State
  const [fscMarks, setFscMarks] = useState<string>('750');
  const [totalMarks, setTotalMarks] = useState<string>('1100');
  const [isIndustrialWorker, setIsIndustrialWorker] = useState<boolean>(true);

  // Checklist State
  const [studentCategory, setStudentCategory] = useState<'pwwf' | 'regular'>('pwwf');
  const [copiedChecklist, setCopiedChecklist] = useState<boolean>(false);

  // FAQ Accordion State
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const [faqSearch, setFaqSearch] = useState<string>('');

  // Calculations
  const obtained = parseFloat(fscMarks) || 0;
  const total = parseFloat(totalMarks) || 1100;
  const percentage = total > 0 ? ((obtained / total) * 100).toFixed(1) : '0';
  const numPercent = parseFloat(percentage);

  // Dynamic eligibility recommendations
  const getEligiblePrograms = () => {
    if (numPercent >= 60) {
      return [
        { name: 'Doctor of Physical Therapy (DPT - 5 Years)', fit: 'High Fit (60%+ Required)' },
        { name: 'Doctor of Pharmacy (Pharm-D - 5 Years)', fit: 'High Fit (60%+ Required)' },
        { name: 'BS Nursing (Generic 4 Years - PNC)', fit: 'Direct Merit Admission' },
        { name: 'BS Medical Imaging (MIT)', fit: 'Top Merit Eligible' },
        { name: 'BS Medical Lab Technology (MLT)', fit: 'Direct Merit Admission' },
      ];
    } else if (numPercent >= 50) {
      return [
        { name: 'BS Nursing (Generic 4 Years - PNC)', fit: 'Eligible (50%+ Required)' },
        { name: 'BS Medical Lab Technology (MLT)', fit: 'Eligible (50%+ Required)' },
        { name: 'BS Operation Theater & Anesthesia', fit: 'Eligible (50%+ Required)' },
        { name: 'BS Computer Science / IT', fit: 'Eligible (50%+ Required)' },
        { name: 'BS Psychology & Biotechnology', fit: 'Eligible' },
      ];
    } else {
      return [
        { name: 'Clinical Diplomas / Allied Technician Certifications', fit: 'Eligible (Matric / FSc)' },
        { name: 'Improvement Exam Advisory & Private Degree Options', fit: 'Recommended' },
      ];
    }
  };

  const copyChecklistToClipboard = () => {
    const listText = `📋 OFFICIAL ADMISSION & DOCUMENT CHECKLIST — SCHOLAR SPHERE CONSULTANTS
📍 1 KM Main Multan Road, Pattoki (Near Quaid-e-Azam Nursing College)
📞 Contact: +92 329 4403898 | Email: scholarsphereconsultant@gmail.com

Required Documents for ${studentCategory === 'pwwf' ? '100% PWWF Scholarship & Admission' : 'Standard University Admission'}:
1. Matric Result Card / Sanad (3 Attested Photocopies)
2. FSc Pre-Medical / Pre-Engineering Result Card (3 Attested Photocopies)
3. Student CNIC or NADRA B-Form Copy (3 Photocopies)
4. Father / Guardian CNIC Copy (3 Photocopies)
5. Punjab Domicile Certificate (Kasur / Punjab District)
6. 8 Passport-Size Photographs (Sky Blue Background)
${studentCategory === 'pwwf' ? `7. Father/Mother Punjab Social Security (PESSI) Card OR EOBI Registration Card
8. Employer / Factory Service Certificate on Official Company Letterhead
9. Attested Salary Slip / Wage Certificate from Mill / Factory` : ''}

📌 Bring all original documents to our Pattoki office for free verification!`;

    navigator.clipboard.writeText(listText);
    setCopiedChecklist(true);
    setTimeout(() => setCopiedChecklist(false), 2500);
  };

  const filteredFaqs = FAQS.filter(
    (faq) =>
      faq.question.toLowerCase().includes(faqSearch.toLowerCase()) ||
      faq.answer.toLowerCase().includes(faqSearch.toLowerCase())
  );

  return (
    <section id="assistant" className="py-8 sm:py-10 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-emerald-100 border border-emerald-300 text-emerald-900 text-[11px] font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Online Student Admissions Assistant</span>
          </div>
          <h2
            className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight text-balance"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Interactive Tools for Students & Parents in Punjab
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
            Calculate your FSc admission merit, generate your official admission document checklist, or find verified answers to common admission questions.
          </p>
        </div>

        {/* Tool Selector Tabs */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex p-1 bg-slate-100 rounded-lg border border-slate-200 text-xs font-bold">
            <button
              onClick={() => setActiveTool('calculator')}
              className={`px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                activeTool === 'calculator'
                  ? 'bg-[#0A2342] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Calculator className="w-4 h-4 text-[#FF7A00]" />
              <span>FSc Merit & Degree Matcher</span>
            </button>

            <button
              onClick={() => setActiveTool('checklist')}
              className={`px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                activeTool === 'checklist'
                  ? 'bg-[#0A2342] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileCheck2 className="w-4 h-4 text-emerald-500" />
              <span>Document Checklist Builder</span>
            </button>

            <button
              onClick={() => setActiveTool('faq')}
              className={`px-4 py-2.5 rounded-lg transition-all flex items-center gap-2 cursor-pointer ${
                activeTool === 'faq'
                  ? 'bg-[#0A2342] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Search className="w-4 h-4 text-amber-500" />
              <span>Google Search & FAQ Desk</span>
            </button>
          </div>
        </div>

        {/* TOOL 1: MERIT CALCULATOR & DEGREE MATCHER */}
        {activeTool === 'calculator' && (
          <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
              
              {/* Inputs */}
              <div className="md:col-span-6 space-y-4">
                <h3 className="text-base font-bold text-[#0A2342] flex items-center gap-2">
                  <Calculator className="w-5 h-5 text-[#FF7A00]" />
                  <span>Enter Your Intermediate (FSc) Marks</span>
                </h3>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Obtained Marks in FSc Pre-Medical
                  </label>
                  <input
                    type="number"
                    value={fscMarks}
                    onChange={(e) => setFscMarks(e.target.value)}
                    placeholder="e.g. 750"
                    min="0"
                    max="1100"
                    className="w-full p-2.5 rounded-xl border border-slate-300 focus:outline-none focus:border-[#FF7A00] text-sm font-bold text-slate-800 bg-white"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold text-slate-700 block mb-1">
                    Total FSc Marks (Usually 1100)
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

                <div className="p-3.5 bg-white rounded-xl border border-slate-200">
                  <span className="text-xs font-semibold text-slate-800 block mb-1.5">
                    Parent Employment Status:
                  </span>
                  <div className="space-y-1.5 text-xs text-slate-700">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="worker_status"
                        checked={isIndustrialWorker}
                        onChange={() => setIsIndustrialWorker(true)}
                        className="accent-[#FF7A00]"
                      />
                      <span>Registered Industrial / Factory Worker (PWWF Eligible)</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="worker_status"
                        checked={!isIndustrialWorker}
                        onChange={() => setIsIndustrialWorker(false)}
                        className="accent-[#FF7A00]"
                      />
                      <span>Private / Self-Employed / Other</span>
                    </label>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-white border border-slate-200 flex items-center justify-between">
                  <div>
                    <span className="text-xs text-slate-500 font-semibold block">Calculated Percentage</span>
                    <span className="text-3xl font-black text-[#0A2342]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                      {percentage}%
                    </span>
                  </div>
                  <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                    numPercent >= 60
                      ? 'bg-emerald-100 text-emerald-800'
                      : numPercent >= 50
                      ? 'bg-amber-100 text-amber-800'
                      : 'bg-red-100 text-red-800'
                  }`}>
                    {numPercent >= 60 ? 'First Division' : numPercent >= 50 ? 'Second Division' : 'Needs Review'}
                  </span>
                </div>
              </div>

              {/* Matching Output */}
              <div className="md:col-span-6 space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wider">
                    Eligible Degree Programs (2026–27)
                  </h3>
                  <span className="text-[11px] text-slate-400 font-mono">Real Criteria</span>
                </div>

                <div className="space-y-2">
                  {getEligiblePrograms().map((item, idx) => (
                    <div
                      key={idx}
                      className="p-3 bg-white rounded-xl border border-slate-200 flex items-center justify-between gap-2 shadow-xs"
                    >
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span className="text-xs font-bold text-slate-800">{item.name}</span>
                      </div>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded whitespace-nowrap">
                        {item.fit}
                      </span>
                    </div>
                  ))}
                </div>

                {isIndustrialWorker && numPercent >= 50 && (
                  <div className="p-4 rounded-xl bg-amber-50 border border-amber-300 text-amber-950 text-xs">
                    <div className="flex items-center gap-2 font-bold mb-1 text-amber-900">
                      <Award className="w-4 h-4 text-amber-700" />
                      <span>100% Free Tuition & Hostel Coverage Active</span>
                    </div>
                    <p className="text-amber-900 leading-relaxed">
                      With {percentage}%, you fulfill both the academic merit and PWWF grant requirement. You are eligible for zero-fee study!
                    </p>
                  </div>
                )}

                <a
                  href={`https://wa.me/923294403898?text=Hello%20Scholar%20Sphere,%20I%20used%20your%20Merit%20Calculator:%20I%20have%20${fscMarks}/${totalMarks}%20(${percentage}%%20marks).%20Parent%20is%20${isIndustrialWorker ? 'Factory%20Worker' : 'Non-factory'}.%20Please%20guide%20me.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-[#0A2342] hover:bg-[#081b33] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-sm cursor-pointer"
                >
                  <Phone className="w-4 h-4 text-[#FF7A00]" />
                  <span>Discuss My Admission Merit on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        )}

        {/* TOOL 2: DOCUMENT CHECKLIST BUILDER */}
        {activeTool === 'checklist' && (
          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-base font-bold text-[#0A2342] flex items-center gap-2">
                  <FileCheck2 className="w-5 h-5 text-emerald-600" />
                  <span>Required Admission Documents Checklist</span>
                </h3>
                <p className="text-xs text-slate-500 mt-0.5">
                  Prepare these documents before visiting our Pattoki office.
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setStudentCategory('pwwf')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    studentCategory === 'pwwf'
                      ? 'bg-[#0A2342] text-white'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  PWWF Scholarship
                </button>
                <button
                  onClick={() => setStudentCategory('regular')}
                  className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-colors cursor-pointer ${
                    studentCategory === 'regular'
                      ? 'bg-[#0A2342] text-white'
                      : 'bg-white text-slate-700 border border-slate-200'
                  }`}
                >
                  Regular Admission
                </button>
              </div>
            </div>

            <div className="space-y-3 mb-6 text-xs">
              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">1</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Matriculation Result Card & Sanad</strong>
                  <p className="text-slate-500">3 verified/attested photocopies from BISE Lahore / Multan / Sahiwal.</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">2</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Intermediate (FSc Pre-Medical) Certificate</strong>
                  <p className="text-slate-500">3 verified/attested photocopies of Part 1 & Part 2 result cards.</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">3</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Student CNIC or NADRA B-Form</strong>
                  <p className="text-slate-500">3 photocopies of valid CNIC (or B-Form if under 18).</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">4</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Father / Guardian CNIC</strong>
                  <p className="text-slate-500">3 photocopies of valid National Identity Card.</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">5</span>
                <div>
                  <strong className="text-slate-900 block font-bold">Punjab Domicile Certificate</strong>
                  <p className="text-slate-500">District Kasur, Lahore, Okara, or any Punjab district domicile copy.</p>
                </div>
              </div>

              <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-start gap-3">
                <span className="w-5 h-5 rounded-full bg-slate-100 text-slate-800 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">6</span>
                <div>
                  <strong className="text-slate-900 block font-bold">8 Passport-Size Photographs</strong>
                  <p className="text-slate-500">Standard blue background pictures (2 attested on back, 6 plain).</p>
                </div>
              </div>

              {studentCategory === 'pwwf' && (
                <>
                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-300 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">7</span>
                    <div>
                      <strong className="text-amber-950 block font-bold">Punjab Social Security (PESSI) or EOBI Card</strong>
                      <p className="text-amber-900">Original card plus 3 photocopies showing father&#39;s registered employee number.</p>
                    </div>
                  </div>

                  <div className="p-3 bg-amber-50 rounded-xl border border-amber-300 flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-amber-200 text-amber-900 font-bold flex items-center justify-center text-[11px] shrink-0 mt-0.5">8</span>
                    <div>
                      <strong className="text-amber-950 block font-bold">Factory / Mill Service Certificate</strong>
                      <p className="text-amber-900">Official letter from company management certifying employment duration and designation.</p>
                    </div>
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={copyChecklistToClipboard}
                className="px-4 py-2 text-xs font-bold text-[#0A2342] bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                {copiedChecklist ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#FF7A00]" />}
                <span>{copiedChecklist ? 'Checklist Copied!' : 'Copy Checklist to Clipboard'}</span>
              </button>

              <a
                href="https://wa.me/923294403898?text=Hello%20Scholar%20Sphere,%20I%20have%20prepared%20my%20documents%20and%20want%20to%20visit%20your%20Pattoki%20office%20for%20admission%20verification."
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-bold text-white bg-[#0A2342] hover:bg-[#081b33] rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-sm"
              >
                <Phone className="w-4 h-4 text-[#FF7A00]" />
                <span>Notify Office on WhatsApp</span>
              </a>
            </div>
          </div>
        )}

        {/* TOOL 3: GOOGLE SEARCH & FAQ DESK */}
        {activeTool === 'faq' && (
          <div className="max-w-3xl mx-auto bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
            <div className="mb-6">
              <h3 className="text-base font-bold text-[#0A2342] flex items-center gap-2 mb-2">
                <Search className="w-5 h-5 text-[#FF7A00]" />
                <span>Frequently Searched Admission Queries</span>
              </h3>
              
              {/* Search Bar */}
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search questions (e.g. PWWF, nursing, fee, location, fake colleges)..."
                  value={faqSearch}
                  onChange={(e) => setFaqSearch(e.target.value)}
                  className="w-full p-2.5 pl-9 rounded-xl border border-slate-300 focus:outline-none focus:border-[#FF7A00] text-xs bg-white"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              </div>
            </div>

            {/* Accordion List */}
            <div className="space-y-3">
              {filteredFaqs.map((faq, idx) => {
                const isOpen = openFaqIdx === idx;
                return (
                  <div
                    key={idx}
                    className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-center justify-between gap-4 text-xs sm:text-sm font-bold text-[#0A2342] hover:text-[#FF7A00] transition-colors cursor-pointer"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? (
                        <ChevronUp className="w-4 h-4 text-slate-400 shrink-0" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                      )}
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                );
              })}

              {filteredFaqs.length === 0 && (
                <div className="p-6 text-center text-xs text-slate-500 bg-white rounded-xl border border-slate-200">
                  No matching query found. Have a custom question? Contact Armaghaan Rajput directly on WhatsApp at +92 329 4403898.
                </div>
              )}
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500">
              <span>Need custom advice?</span>
              <a
                href="https://wa.me/923294403898"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-[#0A2342] hover:text-[#FF7A00]"
              >
                Ask Armaghaan Rajput on WhatsApp →
              </a>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
