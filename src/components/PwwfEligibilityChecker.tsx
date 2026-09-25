import React, { useState } from 'react';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import {
  Award,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  Phone,
  FileText,
  ShieldCheck,
  Building,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

export const PwwfEligibilityChecker: React.FC = () => {
  const [parentWorkerType, setParentWorkerType] = useState<string>('factory');
  const [fatherCnic, setFatherCnic] = useState<string>('');
  const [gender, setGender] = useState<string>('Male');
  const [customGender, setCustomGender] = useState<string>('');
  const [hasSocialSecurity, setHasSocialSecurity] = useState<boolean | null>(null);
  const [hasEobi, setHasEobi] = useState<boolean | null>(null);
  const [selectedDegree, setSelectedDegree] = useState<string>('BS Nursing');
  const [studentCity, setStudentCity] = useState<string>('Pattoki');
  const [studentName, setStudentName] = useState<string>('');
  const [intermediateMarks, setIntermediateMarks] = useState<string>('above-60');

  const isEligible = hasSocialSecurity === true || hasEobi === true;

  const buildWhatsappUrl = () => {
    const displayGender = gender === 'Custom' && customGender.trim() ? `Custom (${customGender.trim()})` : gender;

    const text = `Hello Armaghaan Rajput (Scholar Sphere Consultants),

I would like free assistance with the PWWF Scholarship (Punjab Workers Welfare Fund).

Student Name: ${studentName || 'Prospective Student'}
Gender: ${displayGender}
Father / Worker CNIC: ${fatherCnic || 'To be verified at office'} (Mandatory for PWWF)
City/Town: ${studentCity}
Degree Interested In: ${selectedDegree}
Parent Employment: ${parentWorkerType === 'factory' ? 'Factory / Industrial Worker' : 'Mill / Establishment Worker'}
Social Security (PESSI) Card: ${hasSocialSecurity ? 'Yes' : 'No / Need Verification'}
EOBI Card: ${hasEobi ? 'Yes' : 'No / Need Verification'}
Intermediate Marks: ${intermediateMarks === 'above-60' ? 'Above 60%' : '50% - 60%'}

Please guide us on the next documentation steps.`;

    return `https://wa.me/923294403898?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-100 border border-amber-300 text-amber-900 text-xs font-bold mb-3">
          <Award className="w-4 h-4 text-amber-600" />
          <span>Punjab Workers Welfare Fund (PWWF) Special Desk</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight" style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}>
          PWWF 100% Scholarship Eligibility Checker
        </h1>
        <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
          Are you the child of a registered factory or industrial worker in Punjab? You may be entitled to <strong className="text-[#0A2342]">100% Free Tuition, Hostel, and Books</strong>. Check your eligibility below.
        </p>
      </div>

      {/* Main Card */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-sm">
        <div className="space-y-6">
          
          {/* Step 1: Student Information */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#0A2342] text-white flex items-center justify-center text-xs font-bold">1</span>
              <h2 className="text-sm font-bold text-[#0A2342]">Student & Academic Details</h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Student Name</label>
                <input
                  type="text"
                  placeholder="e.g. Fatima Noor"
                  value={studentName}
                  onChange={(e) => setStudentName(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#FF7A00]"
                />
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">
                  Gender <span className="text-red-500 font-bold">*</span>
                </label>
                <select
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#FF7A00] bg-white font-medium text-slate-900"
                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Custom">Custom</option>
                </select>
                {gender === 'Custom' && (
                  <div className="mt-1.5">
                    <input
                      type="text"
                      value={customGender}
                      onChange={(e) => setCustomGender(e.target.value)}
                      placeholder="Please specify gender"
                      className="w-full text-xs p-2 rounded-lg border border-slate-300 focus:outline-none focus:border-[#FF7A00] bg-white font-semibold text-slate-900"
                    />
                  </div>
                )}
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Home Town / City</label>
                <select
                  value={studentCity}
                  onChange={(e) => setStudentCity(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#FF7A00] bg-white"
                >
                  <option value="Pattoki">Pattoki</option>
                  <option value="Mustafabad">Mustafabad</option>
                  <option value="Lalyani">Lalyani</option>
                  <option value="Phool Nagar">Phool Nagar</option>
                  <option value="Chunian">Chunian</option>
                  <option value="Kasur">Kasur City</option>
                  <option value="Lahore">Lahore</option>
                  <option value="Other Punjab District">Other Punjab District</option>
                </select>
              </div>

              <div>
                <label className="text-xs font-semibold text-slate-700 block mb-1">Target Degree</label>
                <select
                  value={selectedDegree}
                  onChange={(e) => setSelectedDegree(e.target.value)}
                  className="w-full text-xs p-2.5 rounded-lg border border-slate-300 focus:outline-none focus:border-[#FF7A00] bg-white"
                >
                  <option value="BS Nursing (Generic 4 Years)">BS Nursing (4 Years)</option>
                  <option value="Doctor of Physical Therapy (DPT)">Doctor of Physical Therapy (DPT)</option>
                  <option value="Pharm-D (Doctor of Pharmacy)">Pharm-D (Pharmacy)</option>
                  <option value="BS Medical Lab Technology (MLT)">BS Medical Lab Technology (MLT)</option>
                  <option value="BS Medical Imaging Technology (MIT)">BS Medical Imaging (MIT)</option>
                  <option value="BS Computer Science & IT">BS Computer Science & IT</option>
                  <option value="BS Business Administration">BS Business Admin</option>
                </select>
              </div>
            </div>
          </div>

          {/* Step 2: Parent Worker Status */}
          <div className="pt-4 border-t border-slate-100">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-6 h-6 rounded-full bg-[#0A2342] text-white flex items-center justify-center text-xs font-bold">2</span>
              <h2 className="text-sm font-bold text-[#0A2342]">Parent Employment & Registration Status</h2>
            </div>

            <div className="space-y-4">
              {/* Father CNIC Field */}
              <div className="p-4 rounded-xl border border-amber-300 bg-amber-50/60">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <label className="text-xs font-black text-amber-950 flex items-center gap-1.5">
                    <span>Father / Worker CNIC Number</span>
                    <span className="text-red-600 font-bold">* MANDATORY FOR PWWF</span>
                  </label>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-200 text-amber-900">
                    PESSI Record Match
                  </span>
                </div>
                <input
                  type="text"
                  placeholder="e.g. 35103-1234567-1 (13 Digits)"
                  value={fatherCnic}
                  onChange={(e) => setFatherCnic(e.target.value)}
                  maxLength={15}
                  className="w-full text-xs p-2.5 rounded-lg border border-amber-300 bg-white focus:outline-none focus:border-[#FF7A00] font-mono font-bold text-slate-800"
                />
                <p className="text-[11px] text-slate-600 mt-1">
                  The Punjab Workers Welfare Board uses the worker&#39;s CNIC to instantly query the PESSI and EOBI contribution archives.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Social Security Question */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <span className="text-xs font-bold text-slate-800 block mb-1">
                    Does either parent have a Punjab Social Security (PESSI) Card?
                  </span>
                  <p className="text-[11px] text-slate-500 mb-3">Issued to registered employees in factories and industrial mills.</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setHasSocialSecurity(true)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        hasSocialSecurity === true
                          ? 'bg-[#0A2342] text-white border-[#0A2342]'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Yes, We Have PESSI Card
                    </button>
                    <button
                      onClick={() => setHasSocialSecurity(false)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        hasSocialSecurity === false
                          ? 'bg-[#0A2342] text-white border-[#0A2342]'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      No / Not Sure
                    </button>
                  </div>
                </div>

                {/* EOBI Question */}
                <div className="p-4 rounded-xl border border-slate-200 bg-slate-50/70">
                  <span className="text-xs font-bold text-slate-800 block mb-1">
                    Does either parent have an EOBI Registration Card?
                  </span>
                  <p className="text-[11px] text-slate-500 mb-3">Employees&#39; Old-Age Benefits Institution registered card number.</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setHasEobi(true)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        hasEobi === true
                          ? 'bg-[#0A2342] text-white border-[#0A2342]'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      Yes, We Have EOBI Card
                    </button>
                    <button
                      onClick={() => setHasEobi(false)}
                      className={`px-3.5 py-1.5 text-xs font-bold rounded-lg border transition-all ${
                        hasEobi === false
                          ? 'bg-[#0A2342] text-white border-[#0A2342]'
                          : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-100'
                      }`}
                    >
                      No / Not Sure
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Assessment Result Box */}
          <div className="pt-4 border-t border-slate-100">
            {hasSocialSecurity === null && hasEobi === null ? (
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center text-xs text-slate-500">
                Please select your parents&#39; registration status above to see your eligibility assessment.
              </div>
            ) : isEligible ? (
              <div className="p-5 rounded-xl bg-emerald-50 border-2 border-emerald-500 text-emerald-950">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-extrabold text-emerald-900">
                      High Eligibility Match! You Qualify for 100% PWWF Coverage
                    </h3>
                    <p className="text-xs text-emerald-800 mt-1 leading-relaxed">
                      Based on your parent&#39;s industrial registration, you are eligible to claim full reimbursement of college admission fees, semester tuition, official hostel accommodation, and exam dues under the Punjab Workers Welfare Board!
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] font-semibold text-emerald-900">
                      <span className="bg-emerald-100 px-2 py-0.5 rounded">✓ Full Tuition Paid</span>
                      <span className="bg-emerald-100 px-2 py-0.5 rounded">✓ Hostel Fees Covered</span>
                      <span className="bg-emerald-100 px-2 py-0.5 rounded">✓ Registration Dues Covered</span>
                      <span className="bg-emerald-100 px-2 py-0.5 rounded">✓ Free Scholar Sphere Filing</span>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-5 rounded-xl bg-amber-50 border-2 border-amber-400 text-amber-950">
                <div className="flex items-start gap-3">
                  <AlertCircle className="w-6 h-6 text-amber-700 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-extrabold text-amber-900">
                      Verification Needed at Our Pattoki Office
                    </h3>
                    <p className="text-xs text-amber-800 mt-1 leading-relaxed">
                      If your parent works in a private factory, brick kiln, textile mill, or workshop that hasn&#39;t issued cards yet, we can verify if the employer is registered with Punjab Labour Department to secure your entitlement!
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Action Button: WhatsApp Lead */}
          <div className="pt-2">
            <a
              href={buildWhatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 px-6 rounded-xl bg-[#0A2342] hover:bg-[#081b33] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-md transition-all group"
            >
              <Phone className="w-4 h-4 text-[#FF7A00] group-hover:scale-110 transition-transform" />
              <span>Send My PWWF Details to Armaghaan Rajput on WhatsApp</span>
            </a>
            <p className="text-center text-[11px] text-slate-500 mt-2">
              Free support • 100% Legal • Office located 1 KM Main Multan Road, Pattoki
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};
