import React, { useState } from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  FileCheck2,
  ArrowLeft,
  CheckCircle2,
  Award,
  Phone,
  Printer,
  Copy,
  Check,
  Building,
  Sparkles,
  ShieldCheck,
  AlertTriangle,
} from 'lucide-react';

interface DocumentChecklistPageProps {
  onBackToHome: () => void;
}

interface ChecklistItem {
  id: string;
  title: string;
  description: string;
  requirement: string;
  isPwwfOnly?: boolean;
}

const ALL_DOCUMENTS: ChecklistItem[] = [
  {
    id: 'matric',
    title: 'Matriculation Result Card & Sanad',
    description: 'BISE Lahore, Sahiwal, Multan, or respective Board original certificate and result transcript.',
    requirement: '3 Attested Photocopies (Front & Back)',
  },
  {
    id: 'fsc',
    title: 'Intermediate (FSc Pre-Medical / ICS) Certificate',
    description: 'Official Part-1 & Part-2 mark sheets showing roll number, marks, and BISE seal.',
    requirement: '3 Attested Photocopies',
  },
  {
    id: 'cnic_student',
    title: 'Student CNIC or NADRA B-Form',
    description: 'National identity card for candidates aged 18+ or computerized B-Form from NADRA.',
    requirement: '3 Clear Photocopies',
  },
  {
    id: 'cnic_father',
    title: 'Father / Legal Guardian CNIC',
    description: 'Computerized national identity card copy of parent.',
    requirement: '3 Clear Photocopies',
  },
  {
    id: 'domicile',
    title: 'Punjab Domicile Certificate',
    description: 'Official District Kasur, Lahore, Okara, or any Punjab district domicile document.',
    requirement: '2 Attested Photocopies',
  },
  {
    id: 'photos',
    title: '8 Passport-Size Color Photographs',
    description: 'Fresh pictures with sky-blue background. 2 attested on the reverse, 6 plain.',
    requirement: '8 Fresh Studio Prints',
  },
  {
    id: 'character',
    title: 'College / School Character Certificate',
    description: 'Conduct and character certificate issued by the principal of your intermediate college.',
    requirement: 'Original + 2 Photocopies',
  },
  {
    id: 'pessi_eobi',
    title: 'Punjab Social Security (PESSI) or EOBI Card',
    description: 'Father / Mother active industrial worker card showing registered employer factory number.',
    requirement: 'Original Card + 3 Photocopies',
    isPwwfOnly: true,
  },
  {
    id: 'factory_letter',
    title: 'Factory / Mill Employment Service Certificate',
    description: 'Official letterhead certificate from company management certifying employment duration and post.',
    requirement: 'Signed & Stamped Original',
    isPwwfOnly: true,
  },
  {
    id: 'salary_slip',
    title: 'Attested Salary Slip / Wage Record',
    description: 'Recent wage slip or certified salary certificate showing worker earnings within labor limit.',
    requirement: 'Official Stamp Copy',
    isPwwfOnly: true,
  },
];

export const DocumentChecklistPage: React.FC<DocumentChecklistPageProps> = ({ onBackToHome }) => {
  const [category, setCategory] = useState<'pwwf' | 'regular'>('pwwf');
  const [checkedIds, setCheckedIds] = useState<string[]>(['matric', 'fsc', 'cnic_student']);
  const [copied, setCopied] = useState<boolean>(false);
  const [studentName, setStudentName] = useState<string>('');

  const activeDocuments = ALL_DOCUMENTS.filter((doc) => {
    if (category === 'regular' && doc.isPwwfOnly) return false;
    return true;
  });

  const toggleCheck = (id: string) => {
    setCheckedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    setCheckedIds(activeDocuments.map((doc) => doc.id));
  };

  const handleClearAll = () => {
    setCheckedIds([]);
  };

  const readyCount = activeDocuments.filter((doc) => checkedIds.includes(doc.id)).length;
  const progressPercent = Math.round((readyCount / activeDocuments.length) * 100);

  const copyToClipboard = () => {
    const listText = `📋 OFFICIAL ADMISSION & SCHOLARSHIP DOCUMENT DOSSIER
Scholar Sphere Consultants — 1 KM Main Multan Road, Pattoki
Session: ${CURRENT_SESSION.slash}
Student Name: ${studentName || 'Candidate'}
Application Category: ${category === 'pwwf' ? '100% PWWF Free Worker Scholarship' : 'General Merit Admission'}

Document Checklist Status (${readyCount}/${activeDocuments.length} Ready - ${progressPercent}%):
${activeDocuments
  .map(
    (doc, idx) =>
      `${idx + 1}. [${checkedIds.includes(doc.id) ? 'READY' : 'PENDING'}] ${doc.title} — ${doc.requirement}`
  )
  .join('\n')}

📍 Head Office: 1 KM Main Multan Road, Pattoki (Near Quaid-e-Azam Nursing College)
📞 Contact: +92 329 4403898 | Email: scholarsphereconsultant@gmail.com`;

    navigator.clipboard.writeText(listText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const buildWhatsappUrl = () => {
    const text = `*DOCUMENT DOSSIER CHECKLIST REVIEW*
📌 Academic Session: ${CURRENT_SESSION.slash}
Scholar Sphere Consultants — Pattoki

Candidate: ${studentName || 'Prospective Student'}
Category: ${category === 'pwwf' ? '100% PWWF Scholarship' : 'Regular Admission'}
Dossier Readiness: ${readyCount} of ${activeDocuments.length} Documents Prepared (${progressPercent}%)

Prepared Items:
${activeDocuments
  .filter((d) => checkedIds.includes(d.id))
  .map((d) => `• [✓] ${d.title}`)
  .join('\n') || 'None marked yet'}

Pending Items:
${activeDocuments
  .filter((d) => !checkedIds.includes(d.id))
  .map((d) => `• [ ] ${d.title}`)
  .join('\n') || 'None (Dossier Complete!)'}

Please review my file and confirm my office appointment slot.`;

    return `https://wa.me/923294403898?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 pb-20">
      {/* Top Bar */}
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
            Checklist Builder
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => window.print()}
            className="btn-3d btn-3d-white px-3 py-1.5 rounded-xl text-xs font-black flex items-center gap-1.5 cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5 text-slate-700" />
            <span className="hidden sm:inline">Print Checklist</span>
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

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-8 sm:pt-10">
        
        {/* Page Hero */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-8 shadow-sm mb-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-950 text-xs font-black uppercase tracking-wider mb-2 border border-emerald-300">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Official Dossier Builder • Session {CURRENT_SESSION.slash}</span>
            </div>
            <h1
              className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Document Checklist Builder
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 max-w-2xl leading-relaxed">
              Never miss a critical document. Generate your official attested document dossier before visiting our Main Multan Road Pattoki office for zero-hassle verification.
            </p>
          </div>

          <div className="shrink-0 p-4 rounded-2xl bg-slate-50 border-2 border-slate-200 text-center min-w-[170px]">
            <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider block">
              Dossier Prepared
            </span>
            <div className="text-3xl sm:text-4xl font-black text-[#0A2342] mt-0.5">
              {readyCount} / {activeDocuments.length}
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 mt-2 overflow-hidden">
              <div
                className="bg-emerald-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            <span className="text-[10px] font-bold text-slate-600 block mt-1">
              {progressPercent}% Ready
            </span>
          </div>
        </div>

        {/* Configuration Card */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-sm mb-6 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
            {/* Student Name */}
            <div className="flex-1">
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Candidate Name (For Printed Header)
              </label>
              <input
                type="text"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                placeholder="e.g. Ali Raza / Zainab Tariq"
                className="w-full p-2.5 rounded-xl border border-slate-300 text-xs font-bold text-slate-800 focus:outline-none focus:border-[#FF7A00] bg-white"
              />
            </div>

            {/* Category Toggle Tabs */}
            <div>
              <label className="text-xs font-bold text-slate-700 block mb-1">
                Admission Route
              </label>
              <div className="inline-flex gap-1.5 p-1 bg-slate-100 rounded-xl border border-slate-300">
                <button
                  onClick={() => setCategory('pwwf')}
                  className={`tab-3d px-3.5 py-1.5 text-xs font-black rounded-lg cursor-pointer ${
                    category === 'pwwf' ? 'tab-3d-active' : 'tab-3d-inactive'
                  }`}
                >
                  PWWF 100% Scholarship
                </button>
                <button
                  onClick={() => setCategory('regular')}
                  className={`tab-3d px-3.5 py-1.5 text-xs font-black rounded-lg cursor-pointer ${
                    category === 'regular' ? 'tab-3d-active' : 'tab-3d-inactive'
                  }`}
                >
                  Regular University Admission
                </button>
              </div>
            </div>

          </div>

          {/* Quick Select Actions */}
          <div className="flex items-center justify-between pt-3 border-t border-slate-200 text-xs">
            <span className="text-slate-500 font-medium">
              Click individual items below to mark as ready:
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleSelectAll}
                className="text-xs font-bold text-blue-700 hover:underline cursor-pointer"
              >
                Mark All Ready
              </button>
              <span className="text-slate-300">•</span>
              <button
                onClick={handleClearAll}
                className="text-xs font-bold text-slate-500 hover:underline cursor-pointer"
              >
                Reset
              </button>
            </div>
          </div>
        </div>

        {/* Checklist Cards List */}
        <div className="space-y-3 mb-8">
          {activeDocuments.map((doc, idx) => {
            const isChecked = checkedIds.includes(doc.id);
            return (
              <div
                key={doc.id}
                onClick={() => toggleCheck(doc.id)}
                className={`p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-4 select-none ${
                  isChecked
                    ? 'bg-emerald-50/80 border-emerald-400 shadow-xs'
                    : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
                }`}
              >
                {/* Custom Checkbox */}
                <div
                  className={`w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 border-2 transition-colors ${
                    isChecked
                      ? 'bg-emerald-600 border-emerald-700 text-white'
                      : 'bg-white border-slate-300 text-transparent'
                  }`}
                >
                  <Check className="w-4 h-4 stroke-[3]" />
                </div>

                {/* Document Information */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <h3
                      className={`text-sm font-black ${
                        isChecked ? 'text-emerald-950 line-through decoration-emerald-600' : 'text-[#0A2342]'
                      }`}
                    >
                      {idx + 1}. {doc.title}
                    </h3>
                    <span
                      className={`text-[11px] font-black px-2.5 py-0.5 rounded-full ${
                        isChecked
                          ? 'bg-emerald-200/90 text-emerald-900 border border-emerald-400'
                          : 'bg-amber-100 text-amber-950 border border-amber-300'
                      }`}
                    >
                      {doc.requirement}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                    {doc.description}
                  </p>
                  {doc.isPwwfOnly && (
                    <span className="inline-flex items-center gap-1 text-[10px] font-black text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded mt-2 border border-amber-300">
                      <Award className="w-3 h-3 text-amber-700" />
                      Strictly Mandated by Punjab Workers Welfare Fund
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Panel with 3D Buttons */}
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={copyToClipboard}
              className="btn-3d btn-3d-white flex-1 sm:flex-none px-4 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#FF7A00]" />}
              <span>{copied ? 'Checklist Copied!' : 'Copy to Clipboard'}</span>
            </button>

            <button
              onClick={() => window.print()}
              className="btn-3d btn-3d-white flex-1 sm:flex-none px-4 py-3 rounded-xl text-xs font-black flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Printer className="w-4 h-4 text-slate-700" />
              <span>Print Slip</span>
            </button>
          </div>

          <a
            href={buildWhatsappUrl()}
            target="_blank"
            rel="noreferrer"
            className="btn-3d btn-3d-whatsapp w-full sm:w-auto px-5 py-3 rounded-xl text-xs sm:text-sm font-black flex items-center justify-center gap-2 shadow-md cursor-pointer"
          >
            <Phone className="w-4 h-4 text-[#052e16]" />
            <span>Submit Dossier to Pattoki Office on WhatsApp</span>
          </a>
        </div>

        {/* Free Attestation Notice */}
        <div className="mt-6 p-4 rounded-2xl bg-amber-50 border-2 border-amber-300 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
          <div className="text-xs text-amber-950 leading-relaxed font-medium">
            <strong>Free In-Person Scrutiny at Pattoki Office: </strong>
            Bring all original documents and your prepared photocopies to Scholar Sphere Consultants (1 KM Main Multan Road, Pattoki, Near Quaid-e-Azam Nursing College). Our senior counselors will verify government portals and seal your admission folder with zero service fees.
          </div>
        </div>

      </main>
    </div>
  );
};
