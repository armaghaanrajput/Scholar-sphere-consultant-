import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS, PWWF_ALL_PROGRAMS, PwwfProgramItem } from '../data/brandData';
import {
  FileText,
  User,
  GraduationCap,
  Award,
  Phone,
  CheckCircle2,
  Printer,
  Copy,
  Check,
  Send,
  Building,
  Home,
  MapPin,
  Calendar,
  ShieldCheck,
  RotateCcw,
  Sparkles,
} from 'lucide-react';

interface ApplicationFormData {
  // 1. Personal Info
  fullName: string;
  fatherName: string;
  phone: string;
  cnicOrBForm: string;
  city: string;
  address: string;
  gender: string;
  customGender?: string;
  dateOfBirth: string;

  // 2. Academic Info
  matricMarks: string;
  matricTotal: string;
  fscMarks: string;
  fscTotal: string;
  fscStream: string;

  // 3. Program Choice
  preferredProgram: string;
  secondaryProgram: string;
  hostelRequired: string;
  shiftPreference: string;

  // 4. Parent / PWWF Status
  isFactoryWorker: string;
  fatherCnic: string;
  factoryName: string;
  factoryCity: string;
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
  cnicOrBForm: '',
  city: 'Pattoki',
  address: '',
  gender: 'Male',
  customGender: '',
  dateOfBirth: '',

  matricMarks: '900',
  matricTotal: '1100',
  fscMarks: '750',
  fscTotal: '1100',
  fscStream: 'Pre-Medical',

  preferredProgram: 'BS Nursing (Generic 4 Years - PNC Approved)',
  secondaryProgram: 'Doctor of Physical Therapy (DPT - 5 Years)',
  hostelRequired: 'No',
  shiftPreference: 'Morning',

  isFactoryWorker: 'yes',
  fatherCnic: '',
  factoryName: '',
  factoryCity: 'Kasur / Pattoki Area',
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

export const UnifiedStudentApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState<ApplicationFormData>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [docketNumber, setDocketNumber] = useState<string>('');
  const [copiedSummary, setCopiedSummary] = useState<boolean>(false);

  // Auto calculate FSc percentage
  const fscObtained = parseFloat(formData.fscMarks) || 0;
  const fscTotal = parseFloat(formData.fscTotal) || 1100;
  const fscPercent = fscTotal > 0 ? ((fscObtained / fscTotal) * 100).toFixed(1) : '0';

  const matricObtained = parseFloat(formData.matricMarks) || 0;
  const matricTotal = parseFloat(formData.matricTotal) || 1100;
  const matricPercent = matricTotal > 0 ? ((matricObtained / matricTotal) * 100).toFixed(1) : '0';

  const selectedPrimaryProgram = PWWF_ALL_PROGRAMS.find((p) => p.name === formData.preferredProgram) || PWWF_ALL_PROGRAMS[0];

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
      alert('Please fill in student full name and contact number.');
      return;
    }

    if (formData.isFactoryWorker === 'yes' && !formData.fatherCnic.trim()) {
      alert("Father's CNIC number is required by the Punjab Workers Welfare Fund (PWWF) for PESSI/EOBI online verification.");
      return;
    }

    const docket = generateDocketNumber();
    setDocketNumber(docket);
    setSubmitted(true);

    const studentGenderDisplay = formData.gender === 'Custom' && formData.customGender?.trim()
      ? `Custom (${formData.customGender.trim()})`
      : formData.gender;

    // Format WhatsApp message with ALL student details in one clear text docket
    const whatsappText = `🎓 *OFFICIAL STUDENT ADMISSION DOSSIER*
*Docket No:* ${docket}
*Scholar Sphere Consultants — Pattoki Office*

👤 *1. STUDENT PERSONAL DETAILS*
• Name: ${formData.fullName}
• Father Name: ${formData.fatherName || 'N/A'}
• Phone/WhatsApp: ${formData.phone}
• Student CNIC / B-Form: ${formData.cnicOrBForm || 'N/A'}
• Gender: ${studentGenderDisplay}
• Home Town/City: ${formData.city}
• Address: ${formData.address || 'N/A'}

📚 *2. ACADEMIC MERIT*
• FSc Pre-Medical: ${formData.fscMarks}/${formData.fscTotal} (${fscPercent}%)
• Matriculation: ${formData.matricMarks}/${formData.matricTotal} (${matricPercent}%)
• Stream: ${formData.fscStream}

🏥 *3. PROGRAM PREFERENCES (100% PWWF FUNDED)*
• Primary Degree Choice: ${formData.preferredProgram}
• Alternative / 2nd Choice: ${formData.secondaryProgram}
• Shift: ${formData.shiftPreference}
• Hostel Needed: ${formData.hostelRequired}

🏭 *4. PWWF & PARENT WORKER STATUS (100% FREE)*
• Factory/Industrial Worker Child: ${formData.isFactoryWorker === 'yes' ? 'YES (100% Free Scholarship Applicant)' : 'NO (Regular Admission)'}
${formData.isFactoryWorker === 'yes' ? `• Father / Worker CNIC: ${formData.fatherCnic} *(MANDATORY PWWF)*
• Employer/Mill Name: ${formData.factoryName || 'Local Factory/Mill'}
• PESSI Social Security Card: ${formData.hasPessi.toUpperCase()} ${formData.pessiNumber ? `(Card #${formData.pessiNumber})` : ''}
• EOBI Card Status: ${formData.hasEobi.toUpperCase()} ${formData.eobiNumber ? `(Reg #${formData.eobiNumber})` : ''}` : ''}

📝 *5. NOTES & ADMISSION REMARKS*
• ${formData.specialNotes || 'Ready for document verification at Pattoki office.'}

📌 Please review my complete details and confirm my seat reservation.`;

    window.open(`https://wa.me/923294403898?text=${encodeURIComponent(whatsappText)}`, '_blank');
  };

  const copyFullSummary = () => {
    const studentGenderDisplay = formData.gender === 'Custom' && formData.customGender?.trim()
      ? `Custom (${formData.customGender.trim()})`
      : formData.gender;

    const summary = `🎓 SCHOLAR SPHERE CONSULTANTS — STUDENT ADMISSION DOSSIER
Docket Reference: ${docketNumber || 'PRE-SUBMISSION'}
Student: ${formData.fullName} s/d of ${formData.fatherName} (${studentGenderDisplay})
Contact: ${formData.phone} | City: ${formData.city}
Primary Degree: ${formData.preferredProgram}
Alternative Degree: ${formData.secondaryProgram}
FSc Marks: ${formData.fscMarks}/${formData.fscTotal} (${fscPercent}%)
Matric Marks: ${formData.matricMarks}/${formData.matricTotal} (${matricPercent}%)
PWWF Scholarship Eligible: ${formData.isFactoryWorker === 'yes' ? 'YES (100% Free Tuition & Hostel)' : 'No'}
${formData.isFactoryWorker === 'yes' ? `Father CNIC: ${formData.fatherCnic} | Factory/Mill: ${formData.factoryName} | PESSI: ${formData.hasPessi} | EOBI: ${formData.hasEobi}` : ''}
Address: 1 KM Main Multan Road, Pattoki, Near Quaid-e-Azam Nursing College`;

    navigator.clipboard.writeText(summary);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2500);
  };

  return (
    <section id="student-form" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A2342] text-white text-xs font-bold mb-3 shadow-xs">
            <FileText className="w-4 h-4 text-[#FF7A00]" />
            <span>Unified Student Application Portal (2026–27)</span>
          </div>
          <h2
            className="text-3xl sm:text-4xl font-black text-[#0A2342] tracking-tight text-balance"
            style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
          >
            All-In-One Student Admission & PWWF Scholarship Form
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2 leading-relaxed">
            Submit your complete personal profile, academic marks, and parent worker details in this single master form. Our admissions board processes your seat reservation directly.
          </p>
        </div>

        {/* ==================== SUBMITTED SUCCESS VIEW & PRINT DOCKET ==================== */}
        {submitted ? (
          <div className="bg-slate-50 border-2 border-emerald-500 rounded-3xl p-6 sm:p-10 shadow-lg">
            
            {/* Docket Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200">
              <div>
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest block">
                  Registration Successful • Docket Generated
                </span>
                <h3 className="text-2xl font-black text-[#0A2342] mt-0.5" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
                  Student Admission Docket #{docketNumber}
                </h3>
                <p className="text-xs text-slate-500">
                  Scholar Sphere Consultants • 1 KM Main Multan Road, Pattoki
                </p>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => window.print()}
                  className="px-3.5 py-2 text-xs font-bold text-[#0A2342] bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  <Printer className="w-4 h-4 text-[#FF7A00]" />
                  <span>Print Slip</span>
                </button>
                <button
                  onClick={copyFullSummary}
                  className="px-3.5 py-2 text-xs font-bold text-[#0A2342] bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5 shadow-xs cursor-pointer"
                >
                  {copiedSummary ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#FF7A00]" />}
                  <span>{copiedSummary ? 'Copied!' : 'Copy Summary'}</span>
                </button>
              </div>
            </div>

            {/* Docket Breakdown Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6 text-xs">
              {/* Card 1: Student Details */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-[#0A2342] uppercase text-[11px] block border-b border-slate-100 pb-1">
                  1. Student & Contact Information
                </span>
                <div className="space-y-1 text-slate-700">
                  <div><strong>Full Name:</strong> {formData.fullName} ({formData.gender === 'Custom' && formData.customGender?.trim() ? formData.customGender.trim() : formData.gender})</div>
                  <div><strong>Father Name:</strong> {formData.fatherName || 'Not Provided'}</div>
                  <div><strong>Phone/WhatsApp:</strong> {formData.phone}</div>
                  <div><strong>CNIC / B-Form:</strong> {formData.cnicOrBForm || 'Pending'}</div>
                  <div><strong>Location:</strong> {formData.city}, Punjab</div>
                  {formData.address && <div><strong>Address:</strong> {formData.address}</div>}
                </div>
              </div>

              {/* Card 2: Academic Qualifications */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2">
                <span className="font-bold text-[#0A2342] uppercase text-[11px] block border-b border-slate-100 pb-1">
                  2. Academic Merit & Percentage
                </span>
                <div className="space-y-1 text-slate-700">
                  <div>
                    <strong>FSc Pre-Medical:</strong> {formData.fscMarks} / {formData.fscTotal}{' '}
                    <span className="font-bold text-[#FF7A00]">({fscPercent}%)</span>
                  </div>
                  <div>
                    <strong>Matriculation:</strong> {formData.matricMarks} / {formData.matricTotal}{' '}
                    <span className="font-bold text-slate-800">({matricPercent}%)</span>
                  </div>
                  <div><strong>Stream:</strong> {formData.fscStream}</div>
                  <div><strong>Target Degree (1st Choice):</strong> {formData.preferredProgram}</div>
                  <div><strong>Alternative Degree (2nd Choice):</strong> {formData.secondaryProgram}</div>
                  <div><strong>Hostel Required:</strong> {formData.hostelRequired}</div>
                </div>
              </div>

              {/* Card 3: PWWF Scholarship Coverage */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 space-y-2 md:col-span-2">
                <span className="font-bold text-[#D4AF37] uppercase text-[11px] block border-b border-slate-100 pb-1">
                  3. Punjab Workers Welfare Fund (PWWF) Sponsorship Status
                </span>
                <div className="space-y-1 text-slate-700">
                  {formData.isFactoryWorker === 'yes' ? (
                    <div className="p-3 bg-amber-50 rounded-xl border border-amber-300 text-amber-950 space-y-1.5">
                      <div className="font-bold text-sm text-amber-900">
                        ✓ 100% Free Tuition & Hostel Entitlement Claimed (PWWF)
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[11px]">
                        <div>
                          <strong>Father / Worker CNIC:</strong>{' '}
                          <span className="font-mono font-bold text-[#0A2342] bg-amber-100 px-1.5 py-0.5 rounded border border-amber-300">
                            {formData.fatherCnic || 'Required'}
                          </span>
                        </div>
                        <div>
                          <strong>Parent Mill:</strong> {formData.factoryName || 'Industrial Mill'}
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
                    <div className="p-3 bg-slate-100 rounded-xl text-slate-700">
                      Regular Private Degree Admission Candidate (No industrial worker quota claimed).
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Next Steps Prompt */}
            <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-300 text-xs text-emerald-950 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
                <span>
                  WhatsApp dispatch initiated! Your admission officer <strong>Armaghaan Rajput</strong> has received this docket.
                </span>
              </div>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 rounded-lg hover:bg-slate-100 transition-colors flex items-center gap-1.5 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Submit Another Student Form</span>
              </button>
            </div>

          </div>
        ) : (
          /* ==================== THE SINGLE ALL-IN-ONE MASTER FORM ==================== */
          <form
            onSubmit={handleSubmit}
            className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-sm space-y-8"
          >
            {/* ================= PART 1: PERSONAL DETAILS ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#0A2342] text-white flex items-center justify-center font-bold text-xs">
                  1
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wide">
                    Student Personal & Contact Details
                  </h3>
                  <p className="text-[11px] text-slate-500">Provide official identity information as per CNIC or Matric record</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Student Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="e.g. Ayesha Bibi"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] font-medium"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Father / Guardian Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    name="fatherName"
                    value={formData.fatherName}
                    onChange={handleChange}
                    placeholder="e.g. Muhammad Rafique"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    WhatsApp Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0329 4403898"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Student CNIC or NADRA B-Form Number
                  </label>
                  <input
                    type="text"
                    name="cnicOrBForm"
                    value={formData.cnicOrBForm}
                    onChange={handleChange}
                    placeholder="e.g. 35103-XXXXXXX-X"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Home City / Town
                  </label>
                  <select
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  >
                    <option value="Pattoki">Pattoki</option>
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
                  <label className="font-semibold text-slate-700 block mb-1 flex items-center justify-between">
                    <span>Gender</span>
                    <span className="text-red-600 font-bold text-[10px]">* Req.</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] font-medium text-slate-900"
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
                        className="w-full p-2 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] text-xs font-semibold text-slate-900"
                      />
                    </div>
                  )}
                </div>

                <div className="sm:col-span-3">
                  <label className="font-semibold text-slate-700 block mb-1">
                    Complete Residential Address (Town/Village & Tehsil)
                  </label>
                  <input
                    type="text"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    placeholder="e.g. Chak 24, Near Bypass, Pattoki Tehsil, Kasur District"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  />
                </div>
              </div>
            </div>

            {/* ================= PART 2: ACADEMIC DETAILS & MARKS ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#0A2342] text-white flex items-center justify-center font-bold text-xs">
                  2
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wide">
                    Academic Qualifications & Marks Breakdown
                  </h3>
                  <p className="text-[11px] text-slate-500">Auto-evaluates your admission merit and scholarship criteria</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    FSc Obtained Marks
                  </label>
                  <input
                    type="number"
                    name="fscMarks"
                    value={formData.fscMarks}
                    onChange={handleChange}
                    placeholder="e.g. 750"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] font-bold text-slate-800"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    FSc Total Marks
                  </label>
                  <input
                    type="number"
                    name="fscTotal"
                    value={formData.fscTotal}
                    onChange={handleChange}
                    placeholder="1100"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Matric Obtained Marks
                  </label>
                  <input
                    type="number"
                    name="matricMarks"
                    value={formData.matricMarks}
                    onChange={handleChange}
                    placeholder="e.g. 900"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  />
                </div>

                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Matric Total Marks
                  </label>
                  <input
                    type="number"
                    name="matricTotal"
                    value={formData.matricTotal}
                    onChange={handleChange}
                    placeholder="1100"
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  />
                </div>
              </div>

              {/* Live Metric Badge */}
              <div className="mt-3 p-3 bg-white rounded-xl border border-slate-200 flex flex-wrap items-center justify-between text-xs gap-2">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-slate-600">Calculated Merit:</span>
                  <span className="text-base font-black text-[#0A2342]">
                    FSc: {fscPercent}%
                  </span>
                  <span className="text-slate-400">|</span>
                  <span className="font-bold text-slate-700">
                    Matric: {matricPercent}%
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  {fscObtained >= 660 ? (
                    <span className="px-2.5 py-1 bg-emerald-100 text-emerald-800 rounded font-bold text-[11px]">
                      ✓ Qualified for DPT, Pharm-D & BS Nursing
                    </span>
                  ) : fscObtained >= 550 ? (
                    <span className="px-2.5 py-1 bg-amber-100 text-amber-800 rounded font-bold text-[11px]">
                      ✓ Qualified for BS Nursing, MLT, MIT, Anesthesia
                    </span>
                  ) : (
                    <span className="px-2.5 py-1 bg-slate-100 text-slate-700 rounded font-bold text-[11px]">
                      Advisory Review Recommended
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* ================= PART 3: DEGREE PROGRAM SELECTION ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#0A2342] text-white flex items-center justify-center font-bold text-xs">
                  3
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wide">
                    Degree Program & Seat Preferences (2026–27)
                  </h3>
                  <p className="text-[11px] text-slate-500">Pick your primary target degree and alternative choice from all 28+ PWWF-supported programs</p>
                </div>
              </div>

              {/* PWWF 100% Full Scholarship Coverage Banner */}
              <div className="p-3 bg-amber-50 border border-amber-300 rounded-xl text-amber-950 flex items-start gap-2.5 mb-4">
                <Award className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <div className="font-bold text-amber-900 flex items-center gap-2">
                    <span>100% PWWF Free Scholarship Coverage for All Programs</span>
                    <span className="bg-amber-200 text-amber-950 px-1.5 py-0.5 rounded text-[10px] font-black">28+ Degrees</span>
                  </div>
                  <p className="text-[11px] text-amber-900/90 leading-relaxed">
                    All programs below are recognized by Punjab Workers Welfare Fund (PWWF). Children of registered workers receive 100% fee waiver, hostel, admission charges, exams, and annual allowances.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                {/* 1. Primary Program */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-semibold text-slate-700 block">
                      Primary Target Degree <span className="text-red-500">*</span>
                    </label>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                      100% PWWF
                    </span>
                  </div>
                  <select
                    name="preferredProgram"
                    value={formData.preferredProgram}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] font-bold text-xs text-[#0A2342]"
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

                {/* 2. Secondary Program */}
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <label className="font-semibold text-slate-700 block">
                      Alternative / 2nd Degree Choice <span className="text-slate-400 font-normal">(Backup Seat)</span>
                    </label>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                      Backup Choice
                    </span>
                  </div>
                  <select
                    name="secondaryProgram"
                    value={formData.secondaryProgram}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] font-bold text-xs text-slate-800"
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

                {/* 3. Hostel Accommodation */}
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Hostel Accommodation Needed?
                  </label>
                  <select
                    name="hostelRequired"
                    value={formData.hostelRequired}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  >
                    <option value="No">No (Daily Commute / Day Scholar)</option>
                    <option value="Yes">Yes (Campus Hostel Required — 100% PWWF Paid)</option>
                  </select>
                </div>

                {/* 4. Shift Preference */}
                <div>
                  <label className="font-semibold text-slate-700 block mb-1">
                    Shift Preference
                  </label>
                  <select
                    name="shiftPreference"
                    value={formData.shiftPreference}
                    onChange={handleChange}
                    className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                  >
                    <option value="Morning">Morning Shift (Standard Clinical Rotations)</option>
                    <option value="Evening">Evening Shift (Self-Support / Flexible)</option>
                  </select>
                </div>
              </div>

              {/* Dynamic Program Highlights Card */}
              {selectedPrimaryProgram && (
                <div className="mt-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/80 pb-2">
                    <div className="flex items-center gap-1.5 font-bold text-slate-900">
                      <GraduationCap className="w-4 h-4 text-[#FF7A00]" />
                      <span>{selectedPrimaryProgram.name}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="font-bold px-2 py-0.5 rounded text-[10px] bg-amber-100 text-amber-900 border border-amber-300">
                        {selectedPrimaryProgram.duration}
                      </span>
                      <span className="font-bold px-2 py-0.5 rounded text-[10px] bg-blue-100 text-blue-900 border border-blue-300">
                        {selectedPrimaryProgram.council}
                      </span>
                    </div>
                  </div>

                  <p className="text-slate-600 text-[11px] leading-relaxed">
                    {selectedPrimaryProgram.description}
                  </p>

                  <div className="flex flex-wrap items-center justify-between gap-2 pt-1.5 border-t border-slate-200/80 text-[11px]">
                    <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                      ✓ 100% Free Tuition & Examination Support Under PWWF
                    </span>
                    <span className="text-slate-500">
                      Full Degree Sponsorship for Registered Worker Children
                    </span>
                  </div>
                </div>
              )}
            </div>

            {/* ================= PART 4: PWWF SCHOLARSHIP ELIGIBILITY ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#D4AF37] text-white flex items-center justify-center font-bold text-xs">
                  4
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wide">
                    Punjab Workers Welfare Fund (PWWF) 100% Free Scholarship Eligibility
                  </h3>
                  <p className="text-[11px] text-slate-500">Applicable to children of registered factory, textile mill, and industrial workers</p>
                </div>
              </div>

              <div className="space-y-4 text-xs">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <span className="font-bold text-slate-800 block mb-2">
                    Is student&#39;s father or mother employed in a registered industrial mill or factory?
                  </span>
                  <div className="flex items-center gap-6">
                    <label className="flex items-center gap-2 cursor-pointer font-bold text-[#0A2342]">
                      <input
                        type="radio"
                        name="isFactoryWorker"
                        value="yes"
                        checked={formData.isFactoryWorker === 'yes'}
                        onChange={handleChange}
                        className="accent-[#FF7A00]"
                      />
                      <span>YES — Apply for 100% Free Tuition, Hostel & Exam Coverage</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer text-slate-600">
                      <input
                        type="radio"
                        name="isFactoryWorker"
                        value="no"
                        checked={formData.isFactoryWorker === 'no'}
                        onChange={handleChange}
                        className="accent-[#FF7A00]"
                      />
                      <span>NO — Regular Admission</span>
                    </label>
                  </div>
                </div>

                {formData.isFactoryWorker === 'yes' && (
                  <div className="p-4 bg-amber-50/70 border-2 border-amber-400 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Father / Worker CNIC - MANDATORY FOR PWWF */}
                    <div className="sm:col-span-2 bg-white p-3 rounded-xl border border-amber-300 shadow-xs">
                      <div className="flex items-center justify-between gap-2 mb-1">
                        <label className="font-bold text-amber-950 text-xs flex items-center gap-1.5">
                          <span>Father / Worker CNIC Number</span>
                          <span className="text-red-600 font-black">* REQUIRED FOR PWWF</span>
                        </label>
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
                          NADRA & PESSI Record Match
                        </span>
                      </div>
                      <input
                        type="text"
                        required={formData.isFactoryWorker === 'yes'}
                        name="fatherCnic"
                        value={formData.fatherCnic}
                        onChange={handleChange}
                        placeholder="e.g. 35103-1234567-1 (13 Digits)"
                        maxLength={15}
                        className="w-full p-2.5 rounded-lg border border-amber-400 bg-amber-50/30 focus:bg-white focus:outline-none focus:border-[#FF7A00] font-mono font-bold text-sm text-[#0A2342]"
                      />
                      <p className="text-[11px] text-slate-500 mt-1">
                        Required by Punjab Workers Welfare Board to verify against factory employer contributions.
                      </p>
                    </div>

                    <div>
                      <label className="font-semibold text-amber-950 block mb-1">
                        Factory / Mill / Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="factoryName"
                        value={formData.factoryName}
                        onChange={handleChange}
                        placeholder="e.g. Nishat Mills, Din Textile, Leather Unit..."
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-amber-950 block mb-1">
                        Factory City / Industrial Zone
                      </label>
                      <input
                        type="text"
                        name="factoryCity"
                        value={formData.factoryCity}
                        onChange={handleChange}
                        placeholder="e.g. Kasur / Pattoki / Chunian / Lahore"
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                      />
                    </div>

                    <div>
                      <label className="font-semibold text-amber-950 block mb-1">
                        Punjab Social Security (PESSI) Card?
                      </label>
                      <select
                        name="hasPessi"
                        value={formData.hasPessi}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                      >
                        <option value="yes">Yes (Have Active PESSI Card)</option>
                        <option value="in-process">In Process / Need Help</option>
                        <option value="no">No</option>
                      </select>
                    </div>

                    <div>
                      <label className="font-semibold text-amber-950 block mb-1">
                        EOBI Registration Card?
                      </label>
                      <select
                        name="hasEobi"
                        value={formData.hasEobi}
                        onChange={handleChange}
                        className="w-full p-2.5 rounded-xl border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00]"
                      >
                        <option value="yes">Yes (Have EOBI Card)</option>
                        <option value="in-process">In Process / Need Help</option>
                        <option value="no">No</option>
                      </select>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* ================= PART 5: DOCUMENTS CHECKLIST ================= */}
            <div>
              <div className="flex items-center gap-2 pb-3 border-b border-slate-200 mb-4">
                <span className="w-7 h-7 rounded-lg bg-[#0A2342] text-white flex items-center justify-center font-bold text-xs">
                  5
                </span>
                <div>
                  <h3 className="text-sm font-bold text-[#0A2342] uppercase tracking-wide">
                    Document Readiness Checklist
                  </h3>
                  <p className="text-[11px] text-slate-500">Tick the documents you have ready to bring to the Pattoki office</p>
                </div>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 text-xs text-slate-700">
                <label className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    name="docMatric"
                    checked={formData.docMatric}
                    onChange={handleChange}
                    className="accent-[#FF7A00]"
                  />
                  <span>Matric Sanad / Result</span>
                </label>

                <label className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    name="docFsc"
                    checked={formData.docFsc}
                    onChange={handleChange}
                    className="accent-[#FF7A00]"
                  />
                  <span>FSc Result Card</span>
                </label>

                <label className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    name="docCnic"
                    checked={formData.docCnic}
                    onChange={handleChange}
                    className="accent-[#FF7A00]"
                  />
                  <span>Student CNIC / B-Form</span>
                </label>

                <label className="flex items-center gap-2 p-2 bg-amber-50 rounded-lg border border-amber-300 cursor-pointer">
                  <input
                    type="checkbox"
                    name="docFatherCnic"
                    checked={formData.docFatherCnic}
                    onChange={handleChange}
                    className="accent-[#FF7A00]"
                  />
                  <span className="font-semibold text-amber-950">Father CNIC (PWWF Req.)</span>
                </label>

                <label className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    name="docDomicile"
                    checked={formData.docDomicile}
                    onChange={handleChange}
                    className="accent-[#FF7A00]"
                  />
                  <span>Punjab Domicile</span>
                </label>

                <label className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    name="docPhotos"
                    checked={formData.docPhotos}
                    onChange={handleChange}
                    className="accent-[#FF7A00]"
                  />
                  <span>8 Photographs (Blue)</span>
                </label>

                <label className="flex items-center gap-2 p-2 bg-white rounded-lg border border-slate-200 cursor-pointer">
                  <input
                    type="checkbox"
                    name="docPessiEobi"
                    checked={formData.docPessiEobi}
                    onChange={handleChange}
                    className="accent-[#FF7A00]"
                  />
                  <span>PESSI / EOBI Card</span>
                </label>
              </div>

              <div className="mt-4">
                <label className="font-semibold text-slate-700 block mb-1 text-xs">
                  Any Special Questions or Admission Notes (Optional)
                </label>
                <textarea
                  rows={2}
                  name="specialNotes"
                  value={formData.specialNotes}
                  onChange={handleChange}
                  placeholder="e.g. Want clinical hospital rotation details, or parent card is being renewed."
                  className="w-full p-2.5 rounded-xl border border-slate-300 bg-white focus:outline-none focus:border-[#FF7A00] text-xs"
                />
              </div>
            </div>

            {/* ================= SUBMIT BAR ================= */}
            <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-slate-500">
                100% Free Assistance • Physical office: 1 KM Main Multan Road, Pattoki
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#0A2342] hover:bg-[#081b33] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md transition-all cursor-pointer group"
                >
                  <Send className="w-4 h-4 text-[#FF7A00] group-hover:scale-110 transition-transform" />
                  <span>Submit Form & Send to Armaghaan Rajput</span>
                </button>
              </div>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
