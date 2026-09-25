import React, { useState, useEffect } from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS, PWWF_ALL_PROGRAMS, PwwfProgramItem } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  ArrowLeft,
  FileText,
  User,
  GraduationCap,
  Award,
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  Printer,
  Copy,
  Check,
  Send,
  Building,
  Home,
  ShieldCheck,
  RotateCcw,
  Sparkles,
  HelpCircle,
  Clock,
  AlertTriangle,
} from 'lucide-react';

interface StudentApplicationPageProps {
  onBackToHome: () => void;
}

interface ApplicationFormData {
  // 1. Personal Details
  fullName: string;
  fatherName: string;
  phone: string;
  alternatePhone: string;
  cnicOrBForm: string;
  city: string;
  address: string;
  gender: string;
  customGender?: string;
  dateOfBirth: string;

  // 2. Academic Merit
  matricMarks: string;
  matricTotal: string;
  matricBoard: string;
  fscMarks: string;
  fscTotal: string;
  fscStream: string;
  fscBoard: string;

  // 3. Program Preference
  preferredProgram: string;
  secondaryProgram: string;
  hostelRequired: string;
  shiftPreference: string;

  // 4. Parent / PWWF Industrial Status
  isFactoryWorker: string;
  fatherCnic: string;
  factoryName: string;
  factoryCity: string;
  fatherDesignation: string;
  hasPessi: string;
  pessiNumber: string;
  hasEobi: string;
  eobiNumber: string;

  // 5. Document Checklist
  docMatric: boolean;
  docFsc: boolean;
  docCnic: boolean;
  docFatherCnic: boolean;
  docDomicile: boolean;
  docPhotos: boolean;
  docPessiEobi: boolean;

  // 6. Remarks
  specialNotes: string;
}

const INITIAL_FORM: ApplicationFormData = {
  fullName: '',
  fatherName: '',
  phone: '',
  alternatePhone: '',
  cnicOrBForm: '',
  city: 'Pattoki',
  address: '',
  gender: 'Male',
  customGender: '',
  dateOfBirth: '',

  matricMarks: '900',
  matricTotal: '1100',
  matricBoard: 'BISE Lahore',
  fscMarks: '750',
  fscTotal: '1100',
  fscStream: 'Pre-Medical',
  fscBoard: 'BISE Lahore',

  preferredProgram: 'BS Nursing (Generic 4 Years - PNC Approved)',
  secondaryProgram: 'Doctor of Physical Therapy (DPT - 5 Years)',
  hostelRequired: 'No',
  shiftPreference: 'Morning',

  isFactoryWorker: 'yes',
  fatherCnic: '',
  factoryName: '',
  factoryCity: 'Kasur / Pattoki Area',
  fatherDesignation: '',
  hasPessi: 'yes',
  pessiNumber: '',
  hasEobi: 'yes',
  eobiNumber: '',

  docMatric: true,
  docFsc: true,
  docCnic: true,
  docFatherCnic: true,
  docDomicile: true,
  docPhotos: true,
  docPessiEobi: true,

  specialNotes: '',
};

export const StudentApplicationPage: React.FC<StudentApplicationPageProps> = ({ onBackToHome }) => {
  const [formData, setFormData] = useState<ApplicationFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [docketNumber, setDocketNumber] = useState<string>('');
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  // Auto calculate FSc percentage
  const fscObtained = parseFloat(formData.fscMarks) || 0;
  const fscTotal = parseFloat(formData.fscTotal) || 1100;
  const fscPercent = fscTotal > 0 ? ((fscObtained / fscTotal) * 100).toFixed(1) : '0';

  const matricObtained = parseFloat(formData.matricMarks) || 0;
  const matricTotal = parseFloat(formData.matricTotal) || 1100;
  const matricPercent = matricTotal > 0 ? ((matricObtained / matricTotal) * 100).toFixed(1) : '0';

  const selectedPrimaryProgram = PWWF_ALL_PROGRAMS.find((p) => p.name === formData.preferredProgram) || PWWF_ALL_PROGRAMS[0];
  const selectedSecondaryProgram = PWWF_ALL_PROGRAMS.find((p) => p.name === formData.secondaryProgram);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const generateDocketNumber = () => {
    const year = new Date().getFullYear();
    const random = Math.floor(1000 + Math.random() * 9000);
    return `SSC-${year}-${random}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      alert('Please provide student full name and contact number.');
      return;
    }

    if (formData.isFactoryWorker === 'yes' && !formData.fatherCnic.trim()) {
      alert("Father's CNIC number is required by the Punjab Workers Welfare Fund (PWWF) for online verification against PESSI/EOBI databases.");
      return;
    }

    const docket = generateDocketNumber();
    setDocketNumber(docket);
    setSubmitted(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const studentGenderDisplay = formData.gender === 'Custom' && formData.customGender?.trim()
      ? `Custom (${formData.customGender.trim()})`
      : formData.gender;

    // Format WhatsApp message with ALL student details in one cohesive text
    const whatsappText = `🎓 *OFFICIAL STUDENT ADMISSION DOSSIER (PAGE APPLICATION)*
*Docket Reference:* ${docket}
*Scholar Sphere Consultants — Pattoki Head Office*

👤 *1. STUDENT PERSONAL DETAILS*
• Student Name: ${formData.fullName}
• Father / Guardian Name: ${formData.fatherName || 'N/A'}
• WhatsApp Number: ${formData.phone}
• Alt Phone: ${formData.alternatePhone || 'N/A'}
• Student CNIC / B-Form: ${formData.cnicOrBForm || 'N/A'}
• Gender: ${studentGenderDisplay}
• Home Town/City: ${formData.city}, Punjab
• Full Address: ${formData.address || 'N/A'}

📚 *2. ACADEMIC QUALIFICATIONS & MERIT*
• FSc Marks: ${formData.fscMarks} / ${formData.fscTotal} (${fscPercent}%) - ${formData.fscBoard}
• Matric Marks: ${formData.matricMarks} / ${formData.matricTotal} (${matricPercent}%) - ${formData.matricBoard}
• Stream: ${formData.fscStream}

🏥 *3. DEGREE PROGRAM SELECTION*
• Primary Choice: ${formData.preferredProgram}
• Alternative Choice: ${formData.secondaryProgram}
• Shift: ${formData.shiftPreference}
• Hostel Needed: ${formData.hostelRequired}

🏭 *4. PWWF & FACTORY WORKER SCHOLARSHIP (100% FREE)*
• Industrial Worker Child: ${formData.isFactoryWorker === 'yes' ? 'YES (100% Free Tuition & Hostel Applicant)' : 'NO (Regular Admission)'}
${formData.isFactoryWorker === 'yes' ? `• Father / Worker CNIC: ${formData.fatherCnic} *(MANDATORY PWWF)*
• Factory/Mill: ${formData.factoryName || 'Local Textile/Industrial Mill'} (${formData.factoryCity})
• Father Designation: ${formData.fatherDesignation || 'Worker'}
• PESSI Social Security Card: ${formData.hasPessi.toUpperCase()} ${formData.pessiNumber ? `(Card #${formData.pessiNumber})` : ''}
• EOBI Card Status: ${formData.hasEobi.toUpperCase()} ${formData.eobiNumber ? `(Reg #${formData.eobiNumber})` : ''}` : ''}

📝 *5. SPECIAL REMARKS*
• ${formData.specialNotes || 'Ready for document verification at 1 KM Main Multan Road, Pattoki.'}`;

    window.open(`https://wa.me/923294403898?text=${encodeURIComponent(whatsappText)}`, '_blank');
  };

  const copyFullSummary = () => {
    const studentGenderDisplay = formData.gender === 'Custom' && formData.customGender?.trim()
      ? `Custom (${formData.customGender.trim()})`
      : formData.gender;

    const summary = `🎓 SCHOLAR SPHERE CONSULTANTS — STUDENT ADMISSION DOSSIER
Docket: ${docketNumber || 'OFFICIAL APPLICATION'}
Student: ${formData.fullName} s/d of ${formData.fatherName} (${studentGenderDisplay})
Contact: ${formData.phone} | City: ${formData.city}
Primary Degree: ${formData.preferredProgram}
Secondary Degree: ${formData.secondaryProgram}
FSc: ${formData.fscMarks}/${formData.fscTotal} (${fscPercent}%) | Matric: ${formData.matricMarks}/${formData.matricTotal} (${matricPercent}%)
PWWF 100% Scholarship: ${formData.isFactoryWorker === 'yes' ? 'YES (100% Free Tuition + Hostel)' : 'No'}
${formData.isFactoryWorker === 'yes' ? `Father CNIC: ${formData.fatherCnic} | Factory: ${formData.factoryName} | PESSI: ${formData.hasPessi} | EOBI: ${formData.hasEobi}` : ''}
Address: 1 KM Main Multan Road, Pattoki, Near Quaid-e-Azam Nursing College`;

    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col selection:bg-[#FF7A00] selection:text-white">
      
      {/* ================= PAGE HEADER ================= */}
      <header className="sticky top-0 z-30 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-18 flex items-center justify-between gap-4">
          
          <div className="flex items-center gap-4">
            <button
              onClick={onBackToHome}
              className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-bold text-slate-700 hover:text-[#0A2342] bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Website</span>
            </button>

            <div className="h-6 w-px bg-slate-200 hidden sm:block" />

            <div onClick={onBackToHome} className="cursor-pointer">
              <BrandLogo variant="full" size="sm" />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden md:flex flex-col text-right text-[11px] leading-tight">
              <span className="text-slate-500 font-medium">Admissions Helpline</span>
              <strong className="text-[#0A2342] font-bold">+92 329 4403898</strong>
            </div>

            <a
              href="https://wa.me/923294403898"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#0A2342] hover:bg-[#081b33] rounded-lg transition-colors shadow-xs"
            >
              <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>

        </div>
      </header>

      {/* ================= PAGE HERO & TITLE ================= */}
      <div className="bg-[#0A2342] text-white py-10 sm:py-14 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 text-amber-300 text-xs font-bold mb-3 border border-white/15">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Admissions Session {CURRENT_SESSION.slash} • Separate Application Desk</span>
          </div>

          <h1
            className="text-2xl sm:text-4xl font-black tracking-tight text-white"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            Official Student Admission & PWWF Application
          </h1>

          <p className="text-xs sm:text-sm text-slate-300 mt-2.5 max-w-2xl mx-auto leading-relaxed">
            All required student details in one official registration form. Review, merit calculation, and seat reservations are handled directly by Lead Consultant <strong>Armaghaan Rajput</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mt-5 text-[11px] text-slate-300 font-medium">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              100% Free Counseling
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              PWWF Full Fee Coverage
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5">
              <Building className="w-4 h-4 text-orange-400" />
              1 KM Main Multan Road, Pattoki
            </span>
          </div>

        </div>
      </div>

      {/* ================= MAIN FORM CONTAINER ================= */}
      <main className="flex-1 max-w-4xl w-full mx-auto px-4 sm:px-6 py-10 sm:py-14">
        
        {/* ==================== VIEW A: SUBMITTED SUCCESS & DOCKET ==================== */}
        {submitted ? (
          <div className="bg-white border-2 border-emerald-500 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
            
            {/* Docket Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-100 text-emerald-900 text-xs font-bold mb-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Official Registration Confirmed</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-black text-[#0A2342]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  Admission Docket #{docketNumber}
                </h2>
                <p className="text-xs text-slate-500 mt-0.5">
                  Scholar Sphere Consultants • 1 KM Main Multan Road, Pattoki (Near Quaid-e-Azam Nursing College)
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-4 py-2.5 text-xs font-bold text-[#0A2342] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  <Printer className="w-4 h-4 text-[#FF7A00]" />
                  <span>Print Official Slip</span>
                </button>

                <button
                  onClick={copyFullSummary}
                  className="px-4 py-2.5 text-xs font-bold text-[#0A2342] bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer shadow-xs"
                >
                  {copiedSummary ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#FF7A00]" />}
                  <span>{copiedSummary ? 'Copied!' : 'Copy Text'}</span>
                </button>
              </div>
            </div>

            {/* Structured Docket Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs text-slate-700">
              
              {/* Box 1: Student Information */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-[#0A2342] uppercase text-[11px] block border-b border-slate-200 pb-1.5">
                  1. Student & Contact Data
                </span>
                <div className="space-y-1.5">
                  <div><strong>Student Name:</strong> {formData.fullName} ({formData.gender === 'Custom' && formData.customGender?.trim() ? formData.customGender.trim() : formData.gender})</div>
                  <div><strong>Father Name:</strong> {formData.fatherName || 'Not Provided'}</div>
                  <div><strong>Primary Phone:</strong> {formData.phone}</div>
                  {formData.alternatePhone && <div><strong>Alt Phone:</strong> {formData.alternatePhone}</div>}
                  <div><strong>CNIC / B-Form:</strong> {formData.cnicOrBForm || 'Pending'}</div>
                  <div><strong>City / Town:</strong> {formData.city}, Punjab</div>
                  {formData.address && <div><strong>Address:</strong> {formData.address}</div>}
                </div>
              </div>

              {/* Box 2: Academic Qualifications */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-[#0A2342] uppercase text-[11px] block border-b border-slate-200 pb-1.5">
                  2. Academic Merit & Degree Choice
                </span>
                <div className="space-y-1.5">
                  <div>
                    <strong>FSc Pre-Medical:</strong> {formData.fscMarks} / {formData.fscTotal}{' '}
                    <span className="font-extrabold text-[#FF7A00]">({fscPercent}%)</span> - {formData.fscBoard}
                  </div>
                  <div>
                    <strong>Matriculation:</strong> {formData.matricMarks} / {formData.matricTotal}{' '}
                    <span className="font-bold text-slate-800">({matricPercent}%)</span> - {formData.matricBoard}
                  </div>
                  <div><strong>Primary Degree:</strong> {formData.preferredProgram}</div>
                  <div><strong>Secondary Degree:</strong> {formData.secondaryProgram}</div>
                  <div><strong>Hostel Needed:</strong> {formData.hostelRequired}</div>
                </div>
              </div>

              {/* Box 3: PWWF Scholarship Status */}
              <div className="p-5 bg-slate-50 rounded-2xl border border-slate-200 space-y-2 md:col-span-2">
                <span className="font-bold text-[#D4AF37] uppercase text-[11px] block border-b border-slate-200 pb-1.5">
                  3. Punjab Workers Welfare Fund (PWWF) Scholarship Status
                </span>
                {formData.isFactoryWorker === 'yes' ? (
                  <div className="p-4 bg-amber-50 rounded-xl border border-amber-300 text-amber-950 space-y-1">
                    <strong className="block font-extrabold text-sm text-amber-900 mb-1">
                      ✓ 100% Free Tuition, Hostel & Exam Grant Entitlement Claimed
                    </strong>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      <div>
                        <strong>Father / Worker CNIC:</strong>{' '}
                        <span className="font-mono font-bold text-[#0A2342] bg-amber-100/80 px-1.5 py-0.5 rounded border border-amber-300">
                          {formData.fatherCnic || 'Required'}
                        </span>
                      </div>
                      <div>
                        <strong>Parent Factory / Mill:</strong> {formData.factoryName || 'Registered Mill'} ({formData.factoryCity})
                      </div>
                      <div>
                        <strong>PESSI Card:</strong> {formData.hasPessi.toUpperCase()}
                      </div>
                      <div>
                        <strong>EOBI Card:</strong> {formData.hasEobi.toUpperCase()}
                      </div>
                    </div>
                  </div>
                ) : (
                  <p className="text-slate-600">
                    Candidate applying under regular university merit admission (No industrial worker quota claimed).
                  </p>
                )}
              </div>

            </div>

            {/* Next Steps Banner */}
            <div className="p-5 bg-emerald-50 rounded-2xl border border-emerald-300 text-xs text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <strong className="font-bold block text-sm text-emerald-900">
                    Application Sent Directly to Armaghaan Rajput
                  </strong>
                  <p className="text-emerald-800 mt-0.5">
                    WhatsApp dispatch launched. Bring your original educational documents to our Pattoki office to finalize your admission.
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-4 py-2.5 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-xl hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Submit Another Form</span>
                </button>
                <button
                  onClick={onBackToHome}
                  className="px-4 py-2.5 text-xs font-bold text-white bg-[#0A2342] hover:bg-[#081b33] rounded-xl transition-colors cursor-pointer"
                >
                  Back to Website
                </button>
              </div>
            </div>

          </div>
        ) : (
          /* ==================== VIEW B: THE MASTER FORM ==================== */
          <form
            onSubmit={handleSubmit}
            className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-10"
          >
            
            {/* Form Instructions Bar */}
            <div className="p-4 rounded-2xl bg-amber-50 border border-amber-200 flex items-start gap-3 text-xs text-amber-950">
              <HelpCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                <strong>Important Student Advisory: </strong>
                Please fill in your exact marks as printed on your BISE result card. All details remain strictly confidential and are used solely for admission processing at recognized PNC/PHEC chartered institutions.
              </div>
            </div>

            {/* ================= STEP 1: STUDENT PERSONAL DETAILS ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-5">
                <span className="w-8 h-8 rounded-xl bg-[#0A2342] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  1
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#0A2342] uppercase tracking-wide">
                    Student Personal & Identity Information
                  </h2>
                  <p className="text-xs text-slate-500">Provide official identity records as per Matric / B-Form</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 text-xs">
                
                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Fatima Ali"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] font-semibold text-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Father / Guardian Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="e.g. Muhammad Ali"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 transition-colors"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    WhatsApp Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0329 4403898"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Alternate Contact / Landline (Optional)
                  </label>
                  <input
                    type="tel"
                    name="alternatePhone"
                    value={formData.alternatePhone}
                    onChange={handleChange}
                    placeholder="e.g. 0300 1234567"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Student CNIC or NADRA B-Form Number
                  </label>
                  <input
                    type="text"
                    name="cnicOrBForm"
                    value={formData.cnicOrBForm}
                    onChange={handleChange}
                    placeholder="35103-XXXXXXX-X"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-mono transition-colors"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Home City / Town Focus
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-medium transition-colors"
                  >
                    <option value="Pattoki">Pattoki (Head Office Area)</option>
                    <option value="Mustafabad">Mustafabad</option>
                    <option value="Lalyani">Lalyani</option>
                    <option value="Phool Nagar">Phool Nagar</option>
                    <option value="Chunian">Chunian</option>
                    <option value="Kasur City">Kasur City</option>
                    <option value="Lahore">Lahore</option>
                    <option value="Okara / Sahiwal">Okara / Sahiwal</option>
                    <option value="Other District in Punjab">Other District in Punjab</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5 flex items-center justify-between">
                    <span>Student Gender</span>
                    <span className="text-red-600 font-bold text-[10px] bg-red-50 px-2 py-0.5 rounded border border-red-200">* REQUIRED</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-semibold transition-colors"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Custom">Custom</option>
                  </select>
                  {formData.gender === 'Custom' && (
                    <div className="mt-2">
                      <input
                        type="text"
                        name="customGender"
                        value={formData.customGender || ''}
                        onChange={handleChange}
                        placeholder="Please specify gender"
                        className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] text-xs font-semibold text-slate-900"
                      />
                    </div>
                  )}
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Date of Birth (Optional)
                  </label>
                  <input
                    type="date"
                    name="dateOfBirth"
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 transition-colors"
                  />
                  <span className="text-[10px] text-slate-500 mt-1 block">
                    As printed on Matric certificate or NADRA B-Form.
                  </span>
                </div>

                <div className="sm:col-span-2">
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Complete Residential Address (Street, Village, Tehsil, District)
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. House No 14, Ward 5, Multan Road, Pattoki Tehsil, Kasur"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 transition-colors"
                  />
                </div>

              </div>
            </div>

            {/* ================= STEP 2: ACADEMIC QUALIFICATIONS ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-5">
                <span className="w-8 h-8 rounded-xl bg-[#0A2342] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  2
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#0A2342] uppercase tracking-wide">
                    Academic Qualifications & Merit Evaluation
                  </h2>
                  <p className="text-xs text-slate-500">Live merit analysis for clinical degree seats</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
                
                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    FSc Obtained Marks <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    required
                    name="fscMarks"
                    value={formData.fscMarks}
                    onChange={handleChange}
                    placeholder="e.g. 750"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] font-black text-base text-[#0A2342]"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    FSc Total Marks
                  </label>
                  <input
                    type="number"
                    name="fscTotal"
                    value={formData.fscTotal}
                    onChange={handleChange}
                    placeholder="1100"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    FSc Education Board
                  </label>
                  <select
                    name="fscBoard"
                    value={formData.fscBoard}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-medium"
                  >
                    <option value="BISE Lahore">BISE Lahore</option>
                    <option value="BISE Sahiwal">BISE Sahiwal</option>
                    <option value="BISE Multan">BISE Multan</option>
                    <option value="BISE Faisalabad">BISE Faisalabad</option>
                    <option value="BISE Gujranwala">BISE Gujranwala</option>
                    <option value="Federal Board (FBISE)">Federal Board (FBISE)</option>
                    <option value="Other Board">Other Board</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    FSc Academic Stream
                  </label>
                  <select
                    name="fscStream"
                    value={formData.fscStream}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-medium"
                  >
                    <option value="Pre-Medical">FSc Pre-Medical (Biology)</option>
                    <option value="Pre-Engineering">FSc Pre-Engineering</option>
                    <option value="ICS (Computer Science)">ICS (Computer Science)</option>
                    <option value="Other / A-Levels">Other / A-Levels</option>
                  </select>
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Matriculation Marks
                  </label>
                  <input
                    type="number"
                    name="matricMarks"
                    value={formData.matricMarks}
                    onChange={handleChange}
                    placeholder="e.g. 900"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-semibold"
                  />
                </div>

                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Matric Total Marks
                  </label>
                  <input
                    type="number"
                    name="matricTotal"
                    value={formData.matricTotal}
                    onChange={handleChange}
                    placeholder="1100"
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Matric Board
                  </label>
                  <select
                    name="matricBoard"
                    value={formData.matricBoard}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-medium"
                  >
                    <option value="BISE Lahore">BISE Lahore (Kasur/Pattoki Jurisdiction)</option>
                    <option value="BISE Sahiwal">BISE Sahiwal</option>
                    <option value="BISE Multan">BISE Multan</option>
                    <option value="Other Board">Other Board</option>
                  </select>
                </div>

              </div>

              {/* Real-time Merit Computation Banner */}
              <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="text-xs text-slate-500 font-semibold">Your Computed Scores:</div>
                  <div className="text-xl font-black text-[#0A2342]" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                    FSc: {fscPercent}%
                  </div>
                  <div className="text-slate-300">|</div>
                  <div className="text-sm font-bold text-slate-700">
                    Matric: {matricPercent}%
                  </div>
                </div>

                <div>
                  {fscObtained >= 660 ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full font-bold text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      1st Division: Eligible for DPT, Pharm-D & BS Nursing
                    </span>
                  ) : fscObtained >= 550 ? (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-amber-100 text-amber-900 rounded-full font-bold text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      2nd Division: Eligible for BS Nursing, MLT, MIT, Anesthesia
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-slate-200 text-slate-700 rounded-full font-bold text-xs">
                      Advisory Review with Armaghaan Rajput
                    </span>
                  )}
                </div>
              </div>

            </div>

            {/* ================= STEP 3: PROGRAM PREFERENCES ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-5">
                <span className="w-8 h-8 rounded-xl bg-[#0A2342] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  3
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#0A2342] uppercase tracking-wide">
                    Degree Program &amp; Seat Preferences ({CURRENT_SESSION.slash})
                  </h2>
                  <p className="text-xs text-slate-500">Pick your primary target degree and alternative choice from all 28+ PWWF-supported programs</p>
                </div>
              </div>

              {/* PWWF 100% Full Scholarship Coverage Banner */}
              <div className="p-3.5 bg-amber-50 border border-amber-300 rounded-2xl text-amber-950 flex items-start gap-3 mb-5">
                <Award className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <div className="font-bold text-amber-900 flex items-center gap-2">
                    <span>100% PWWF Scholarship Coverage Guarantee for All Listed Programs</span>
                    <span className="bg-amber-200 text-amber-950 px-2 py-0.5 rounded text-[10px] font-black">28+ Degrees</span>
                  </div>
                  <p className="text-[11px] text-amber-900/90 leading-relaxed">
                    Every degree program in this list is officially recognized and fully funded under the <strong>Punjab Workers Welfare Fund (PWWF)</strong> scholarship. Children of registered factory/mill workers receive 100% free tuition, hostel accommodation, semester examination charges, admission fee waiver, and annual book stipends.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 text-xs">
                
                {/* 1. Primary Program */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="font-bold text-slate-800 text-xs flex items-center gap-1">
                      <span>Primary Target Degree</span>
                      <span className="text-red-500 font-bold">*</span>
                    </label>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      100% PWWF Eligible
                    </span>
                  </div>
                  <select
                    name="preferredProgram"
                    value={formData.preferredProgram}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] font-bold text-xs text-[#0A2342] shadow-xs"
                  >
                    <optgroup label="🏥 Nursing & Clinical Healthcare (PNC Approved)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Nursing').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🩺 Doctorates & Allied Health Sciences (5 & 4 Years)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Allied Health').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="💊 Pharmacy Sciences (PCP Approved)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Pharmacy').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="💻 Computer Science, Software & IT (NCEAC)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Computing & IT').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="⚙️ Engineering & Technology (PEC Approved)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Engineering').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="📊 Business, Finance & Law (PBC Approved)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Business & Law').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🔬 Life Sciences & Behavioral Studies">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Sciences').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🎓 Associate Degree Programs (2-Year Fast Track ADP)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Associate Degrees (ADP)').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* 2. Secondary / Alternative Program */}
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="font-bold text-slate-800 text-xs flex items-center gap-1">
                      <span>Alternative / 2nd Degree Choice</span>
                      <span className="text-slate-400 font-normal">(Backup Seat)</span>
                    </label>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                      Merit Backup
                    </span>
                  </div>
                  <select
                    name="secondaryProgram"
                    value={formData.secondaryProgram}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] font-bold text-xs text-slate-800 shadow-xs"
                  >
                    <option value="None (Only Primary Degree Choice)">None (Only Primary Choice)</option>
                    <optgroup label="🏥 Nursing & Clinical Healthcare (PNC Approved)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Nursing').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🩺 Doctorates & Allied Health Sciences (5 & 4 Years)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Allied Health').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="💊 Pharmacy Sciences (PCP Approved)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Pharmacy').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="💻 Computer Science, Software & IT (NCEAC)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Computing & IT').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="⚙️ Engineering & Technology (PEC Approved)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Engineering').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="📊 Business, Finance & Law (PBC Approved)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Business & Law').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🔬 Life Sciences & Behavioral Studies">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Sciences').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="🎓 Associate Degree Programs (2-Year Fast Track ADP)">
                      {PWWF_ALL_PROGRAMS.filter(p => p.category === 'Associate Degrees (ADP)').map(p => (
                        <option key={p.id} value={p.name}>
                          {p.name} ({p.duration})
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* 3. Hostel Preference */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Hostel Accommodation Required?
                  </label>
                  <select
                    name="hostelRequired"
                    value={formData.hostelRequired}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-800 font-medium"
                  >
                    <option value="No">No (Daily Local Commute / Day Scholar)</option>
                    <option value="Yes">Yes (Campus Hostel Required — 100% PWWF Paid)</option>
                  </select>
                </div>

                {/* 4. Shift Preference */}
                <div>
                  <label className="font-bold text-slate-700 block mb-1.5">
                    Shift Preference
                  </label>
                  <select
                    name="shiftPreference"
                    value={formData.shiftPreference}
                    onChange={handleChange}
                    className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-slate-800 font-medium"
                  >
                    <option value="Morning">Morning Shift (Standard Clinical Rotations)</option>
                    <option value="Evening">Evening Shift (Self-Support / Flexible)</option>
                  </select>
                </div>

              </div>

              {/* Dynamic Program Guidance Card */}
              {selectedPrimaryProgram && (
                <div className="mt-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-xs text-xs space-y-2.5">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2.5">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#FF7A00]" />
                      <span className="font-bold text-slate-900">{selectedPrimaryProgram.name}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold px-2 py-0.5 rounded text-[11px] bg-amber-100 text-amber-900 border border-amber-300">
                        {selectedPrimaryProgram.duration}
                      </span>
                      <span className="font-bold px-2 py-0.5 rounded text-[11px] bg-blue-100 text-blue-900 border border-blue-300">
                        {selectedPrimaryProgram.council}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {selectedPrimaryProgram.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-slate-100 text-[11px]">
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[11px]">
                      ✓ Fully Sponsored Under Punjab Workers Welfare Fund (PWWF)
                    </span>
                    <span className="text-slate-500">
                      Zero Tuition • Free Hostel & Mess • Semester Examination Grants
                    </span>
                  </div>
                </div>
              )}

            </div>

            {/* ================= STEP 4: PWWF SCHOLARSHIP & FACTORY WORKER ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-5">
                <span className="w-8 h-8 rounded-xl bg-[#D4AF37] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  4
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#0A2342] uppercase tracking-wide">
                    Punjab Workers Welfare Fund (PWWF) 100% Free Scholarship
                  </h2>
                  <p className="text-xs text-slate-500">
                    Children of industrial/factory workers receive 100% tuition, hostel, and registration fee waiver
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200">
                  <span className="font-extrabold text-slate-800 block mb-2 text-sm">
                    Is the student&#39;s father or mother employed in a registered industrial factory or mill?
                  </span>
                  <div className="flex flex-wrap items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-[#0A2342] text-xs">
                      <input
                        type="radio"
                        name="isFactoryWorker"
                        value="yes"
                        checked={formData.isFactoryWorker === 'yes'}
                        onChange={handleChange}
                        className="accent-[#FF7A00] w-4 h-4"
                      />
                      <span>YES — Apply for 100% Free Tuition, Hostel & Exam Grant (PWWF)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer text-slate-600 text-xs">
                      <input
                        type="radio"
                        name="isFactoryWorker"
                        value="no"
                        checked={formData.isFactoryWorker === 'no'}
                        onChange={handleChange}
                        className="accent-[#FF7A00] w-4 h-4"
                      />
                      <span>NO — Regular Private Admission</span>
                    </label>
                  </div>
                </div>

                {formData.isFactoryWorker === 'yes' && (
                  <div className="p-5 bg-amber-50/80 border-2 border-amber-400 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Father / Worker CNIC - MANDATORY FOR PWWF */}
                    <div className="sm:col-span-2 bg-white p-3.5 rounded-xl border border-amber-300 shadow-xs">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <label className="font-black text-amber-950 text-xs flex items-center gap-1.5">
                          <span>Father / Worker CNIC Number</span>
                          <span className="text-red-600 font-bold">* REQUIRED FOR PWWF</span>
                        </label>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                          NADRA & PESSI Verification
                        </span>
                      </div>
                      <input
                        type="text"
                        required={formData.isFactoryWorker === 'yes'}
                        name="fatherCnic"
                        value={formData.fatherCnic}
                        onChange={handleChange}
                        placeholder="e.g. 35103-1234567-1 (13 Digits with dashes)"
                        maxLength={15}
                        className="w-full p-2.5 rounded-lg border border-amber-400 bg-amber-50/30 focus:bg-white focus:outline-none focus:border-[#FF7A00] font-mono font-bold text-sm text-[#0A2342] tracking-wider"
                      />
                      <p className="text-[11px] text-slate-600 mt-1.5 flex items-center gap-1">
                        <span className="text-amber-600 font-bold">ℹ Note:</span>
                        Father/Mother&#39;s CNIC is strictly verified by Punjab Workers Welfare Board against employer contributions before 100% scholarship approval.
                      </p>
                    </div>

                    <div>
                      <label className="font-bold text-amber-950 block mb-1">
                        Factory / Textile Mill / Establishment Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="factoryName"
                        value={formData.factoryName}
                        onChange={handleChange}
                        placeholder="e.g. Nishat Mills, Din Textile, Sapphire, Kohinoor..."
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-amber-950 block mb-1">
                        Factory City / Industrial Location
                      </label>
                      <input
                        type="text"
                        name="factoryCity"
                        value={formData.factoryCity}
                        onChange={handleChange}
                        placeholder="e.g. Kasur / Pattoki / Chunian / Lahore"
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-amber-950 block mb-1">
                        Father / Mother Designation / Job Title
                      </label>
                      <input
                        type="text"
                        name="fatherDesignation"
                        value={formData.fatherDesignation}
                        onChange={handleChange}
                        placeholder="e.g. Machine Operator, Electrician, Helper, Weaver"
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-amber-950 block mb-1">
                        Punjab Social Security (PESSI) Card?
                      </label>
                      <select
                        name="hasPessi"
                        value={formData.hasPessi}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-medium"
                      >
                        <option value="yes">Yes (Have Active PESSI Card)</option>
                        <option value="in-process">In Process / Need Office Assistance</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-amber-950 block mb-1">
                        EOBI Registration Card?
                      </label>
                      <select
                        name="hasEobi"
                        value={formData.hasEobi}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900 font-medium"
                      >
                        <option value="yes">Yes (Have Active EOBI Card)</option>
                        <option value="in-process">In Process / Need Office Assistance</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-bold text-amber-950 block mb-1">
                        PESSI / EOBI Registration Number (If available)
                      </label>
                      <input
                        type="text"
                        name="pessiNumber"
                        value={formData.pessiNumber}
                        onChange={handleChange}
                        placeholder="e.g. Card Registration Number"
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00] text-slate-900"
                      />
                    </div>

                  </div>
                )}

              </div>
            </div>

            {/* ================= STEP 5: DOCUMENT READINESS CHECKLIST ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-5">
                <span className="w-8 h-8 rounded-xl bg-[#0A2342] text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  5
                </span>
                <div>
                  <h2 className="text-base font-bold text-[#0A2342] uppercase tracking-wide">
                    Document Readiness & Attestation Checklist
                  </h2>
                  <p className="text-xs text-slate-500">Indicate the physical documents you can bring to our Pattoki office</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-slate-700">
                <label className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    name="docMatric"
                    checked={formData.docMatric}
                    onChange={handleChange}
                    className="accent-[#FF7A00] w-4 h-4"
                  />
                  <span className="font-semibold">Matric Sanad & Result</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    name="docFsc"
                    checked={formData.docFsc}
                    onChange={handleChange}
                    className="accent-[#FF7A00] w-4 h-4"
                  />
                  <span className="font-semibold">FSc Official Result Card</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    name="docCnic"
                    checked={formData.docCnic}
                    onChange={handleChange}
                    className="accent-[#FF7A00] w-4 h-4"
                  />
                  <span className="font-semibold">Student CNIC / B-Form</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 bg-amber-50/70 rounded-xl border border-amber-300 cursor-pointer hover:bg-amber-100 transition-colors">
                  <input
                    type="checkbox"
                    name="docFatherCnic"
                    checked={formData.docFatherCnic}
                    onChange={handleChange}
                    className="accent-[#FF7A00] w-4 h-4"
                  />
                  <span className="font-semibold text-amber-950">Father CNIC Copy (PWWF Req.)</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    name="docDomicile"
                    checked={formData.docDomicile}
                    onChange={handleChange}
                    className="accent-[#FF7A00] w-4 h-4"
                  />
                  <span className="font-semibold">Punjab Domicile Card</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    name="docPhotos"
                    checked={formData.docPhotos}
                    onChange={handleChange}
                    className="accent-[#FF7A00] w-4 h-4"
                  />
                  <span className="font-semibold">8 Photographs (Blue)</span>
                </label>

                <label className="flex items-center gap-2.5 p-3 bg-slate-50 rounded-xl border border-slate-200 cursor-pointer hover:bg-slate-100 transition-colors">
                  <input
                    type="checkbox"
                    name="docPessiEobi"
                    checked={formData.docPessiEobi}
                    onChange={handleChange}
                    className="accent-[#FF7A00] w-4 h-4"
                  />
                  <span className="font-semibold">PESSI / EOBI Worker Card</span>
                </label>
              </div>

              <div className="mt-5">
                <label className="font-bold text-slate-700 block mb-1 text-xs">
                  Special Instructions / Admission Inquiries
                </label>
                <textarea
                  rows={3}
                  name="specialNotes"
                  value={formData.specialNotes}
                  onChange={handleChange}
                  placeholder="e.g. Looking for specific hospital clinical rotation in Pattoki or Lahore, need advice on hostel timing, etc."
                  className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 focus:bg-white focus:outline-none focus:border-[#FF7A00] text-xs text-slate-900 transition-colors"
                />
              </div>
            </div>

            {/* ================= SUBMISSION BAR ================= */}
            <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                <span className="font-bold text-[#0A2342]">100% Free Processing: </span>
                No agent fees, no hidden charges. Verified chartered institutions only.
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="button"
                  onClick={onBackToHome}
                  className="w-full sm:w-auto px-5 py-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3 rounded-xl bg-[#0A2342] hover:bg-[#081b33] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer group"
                >
                  <Send className="w-4 h-4 text-[#FF7A00] group-hover:scale-110 transition-transform" />
                  <span>Submit Complete Application & Send to WhatsApp</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </main>

      {/* ================= MANDATORY 3-LINE FOOTER ================= */}
      <footer className="bg-[#0A2342] text-white py-8 border-t border-slate-800 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center space-y-2">
          <p className="font-bold text-slate-200">
            {OFFICIAL_COPY_STRINGS.officialFooter}
          </p>
          <p className="text-slate-300">
            {OFFICIAL_COPY_STRINGS.officialContactLine}
          </p>
          <p className="text-amber-400 font-semibold tracking-wide">
            {OFFICIAL_COPY_STRINGS.officialTrustLine}
          </p>
          <div className="pt-3 text-[11px] text-slate-400">
            © {new Date().getFullYear()} Scholar Sphere Consultants • All Rights Reserved
          </div>
        </div>
      </footer>

    </div>
  );
};
