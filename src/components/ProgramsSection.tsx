import React, { useState } from 'react';
import { BRAND_SERVICES } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  GraduationCap,
  Check,
  Building,
  Award,
  Clock,
  ArrowRight,
  Sparkles,
  ShieldCheck,
  Stethoscope,
  Microscope,
  Cpu,
  BookOpen,
} from 'lucide-react';

interface ProgramDetail {
  id: string;
  name: string;
  category: 'nursing' | 'allied' | 'pharma' | 'tech';
  duration: string;
  eligibility: string;
  council: string;
  clinicalTraining: string;
  pwwfEligible: boolean;
  description: string;
}

const ALL_PROGRAMS: ProgramDetail[] = [
  {
    id: 'bs-nursing',
    name: 'BS Nursing (Generic 4 Years)',
    category: 'nursing',
    duration: '4 Years (8 Semesters)',
    eligibility: 'FSc Pre-Medical (Minimum 50% Marks)',
    council: 'Pakistan Nursing & Midwifery Council (PNMC / PNC)',
    clinicalTraining: 'Mandatory Rotations at 500+ Bed Teaching Hospital',
    pwwfEligible: true,
    description: 'Premier clinical healthcare degree. Direct licensing by PNC upon graduation, high hospital recruitment in Punjab and government healthcare facilities.',
  },
  {
    id: 'dpt',
    name: 'Doctor of Physical Therapy (DPT)',
    category: 'allied',
    duration: '5 Years (10 Semesters)',
    eligibility: 'FSc Pre-Medical (Minimum 60% Marks)',
    council: 'HEC & Chartered Medical Universities (UHS / Affiliates)',
    clinicalTraining: 'Orthopedic & Neurological Rehabilitation OPDs',
    pwwfEligible: true,
    description: 'Post-graduate level clinical physiotherapy training. Specialize in sports injuries, stroke rehabilitation, pediatric physical therapy, and spinal medicine.',
  },
  {
    id: 'pharm-d',
    name: 'Doctor of Pharmacy (Pharm-D)',
    category: 'pharma',
    duration: '5 Years (Annual / Semester)',
    eligibility: 'FSc Pre-Medical (Minimum 60% Marks)',
    council: 'Pharmacy Council of Pakistan (PCP)',
    clinicalTraining: 'Clinical Hospital Pharmacy & Industrial Manufacturing',
    pwwfEligible: true,
    description: 'Professional doctorate in pharmaceutical sciences. Prepares for clinical pharmacotherapy, pharmaceutical manufacturing plants, and multinational medical management.',
  },
  {
    id: 'bs-mlt',
    name: 'BS Medical Laboratory Technology (MLT)',
    category: 'allied',
    duration: '4 Years',
    eligibility: 'FSc Pre-Medical (Minimum 50% Marks)',
    council: 'Chartered University Affiliated',
    clinicalTraining: 'Diagnostic Pathology, Hematology & Molecular Biology Labs',
    pwwfEligible: true,
    description: 'Hands-on clinical pathology training covering blood banking, histopathology, medical microbiology, and automated biochemical analyzer operations.',
  },
  {
    id: 'bs-mit',
    name: 'BS Medical Imaging Technology (MIT)',
    category: 'allied',
    duration: '4 Years',
    eligibility: 'FSc Pre-Medical (Minimum 50% Marks)',
    council: 'Chartered University Affiliated',
    clinicalTraining: 'MRI, CT Scan, Ultrasound & Digital X-Ray Suites',
    pwwfEligible: true,
    description: 'Diagnostic radiology specialization. Practical clinical training in operating multi-slice CT scanners, modern MRI systems, fluoroscopy, and Doppler ultrasound.',
  },
  {
    id: 'bs-anesthesia',
    name: 'BS Anesthesia & Operation Theater Technology',
    category: 'allied',
    duration: '4 Years',
    eligibility: 'FSc Pre-Medical (Minimum 50% Marks)',
    council: 'Chartered University Affiliated',
    clinicalTraining: 'Major Surgery Theaters & Intensive Care Units (ICU)',
    pwwfEligible: true,
    description: 'Critical operating room training. Assisting consultant anesthetists, endotracheal intubation, patient life-support monitoring, and emergency surgical protocols.',
  },
  {
    id: 'bs-cs-it',
    name: 'BS Computer Science & Information Technology',
    category: 'tech',
    duration: '4 Years',
    eligibility: 'ICS / FSc Pre-Engineering / Pre-Medical with Add Maths',
    council: 'National Computing Education Accreditation Council (NCEAC)',
    clinicalTraining: 'Modern Software & Cloud Engineering Labs',
    pwwfEligible: true,
    description: 'High-demand computing disciplines covering software development, web engineering, database architecture, AI fundamentals, and networking.',
  },
  {
    id: 'bs-psychology',
    name: 'BS Psychology & Behavioral Sciences',
    category: 'allied',
    duration: '4 Years',
    eligibility: 'Intermediate (FA / FSc / ICS / I.Com)',
    council: 'HEC Recognized Universities',
    clinicalTraining: 'Mental Health Clinical Assessment & Counseling Wards',
    pwwfEligible: true,
    description: 'Study human behavior, mental wellness, cognitive psychology, and psychometric evaluation with clinical internship in teaching medical hospitals.',
  },
];

export const ProgramsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'nursing' | 'allied' | 'pharma' | 'tech'>('all');

  const filteredPrograms = activeFilter === 'all'
    ? ALL_PROGRAMS
    : ALL_PROGRAMS.filter((p) => p.category === activeFilter);

  return (
    <section id="programs" className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-5">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-bold text-[#FF7A00] uppercase tracking-wider mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Admissions Session {CURRENT_SESSION.slash}</span>
            </div>
            <h2
              className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight text-balance"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Academic Degrees & Clinical Programs
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-2xl">
              All placements are processed exclusively through chartered universities with active council recognition and attached teaching hospital facilities.
            </p>
          </div>

          {/* Interactive Filter Tabs (Button controls with click handlers) */}
          <div className="flex flex-wrap items-center gap-1 p-1 bg-white rounded-lg border border-slate-200 shadow-xs">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-2.5 py-1 text-xs font-bold rounded transition-colors cursor-pointer ${
                activeFilter === 'all'
                  ? 'bg-[#0A2342] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Programs
            </button>
            <button
              onClick={() => setActiveFilter('nursing')}
              className={`px-2.5 py-1 text-xs font-bold rounded transition-colors cursor-pointer ${
                activeFilter === 'nursing'
                  ? 'bg-[#0A2342] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              BS Nursing (PNC)
            </button>
            <button
              onClick={() => setActiveFilter('allied')}
              className={`px-2.5 py-1 text-xs font-bold rounded transition-colors cursor-pointer ${
                activeFilter === 'allied'
                  ? 'bg-[#0A2342] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Allied Health & DPT
            </button>
            <button
              onClick={() => setActiveFilter('pharma')}
              className={`px-2.5 py-1 text-xs font-bold rounded transition-colors cursor-pointer ${
                activeFilter === 'pharma'
                  ? 'bg-[#0A2342] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Pharm-D
            </button>
            <button
              onClick={() => setActiveFilter('tech')}
              className={`px-2.5 py-1 text-xs font-bold rounded transition-colors cursor-pointer ${
                activeFilter === 'tech'
                  ? 'bg-[#0A2342] text-white shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              CS & Computing
            </button>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 flex flex-col justify-between hover:border-slate-300 hover:shadow-xs transition-all group"
            >
              <div>
                {/* Header tags: clean unboxed metadata with separators */}
                <div className="flex items-center justify-between text-xs mb-2">
                  <span className="font-bold text-[#FF7A00] uppercase tracking-wider text-[11px]">
                    {prog.duration}
                  </span>
                  {prog.pwwfEligible && (
                    <span className="text-[10px] font-bold text-amber-900 bg-amber-100 border border-amber-300 px-1.5 py-0.5 rounded">
                      100% PWWF Free Eligible
                    </span>
                  )}
                </div>

                <h3 className="text-base font-extrabold text-[#0A2342] group-hover:text-[#FF7A00] transition-colors mb-1.5">
                  {prog.name}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {prog.description}
                </p>

                {/* Key Specs */}
                <div className="space-y-1.5 border-t border-slate-100 pt-2.5 text-xs">
                  <div className="flex items-start gap-1.5 text-slate-700">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                    <span><strong>Council:</strong> {prog.council}</span>
                  </div>
                  <div className="flex items-start gap-1.5 text-slate-700">
                    <Building className="w-3.5 h-3.5 text-[#0A2342] shrink-0 mt-0.5" />
                    <span><strong>Clinical:</strong> {prog.clinicalTraining}</span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-700">
                    <Check className="w-3.5 h-3.5 text-[#FF7A00] shrink-0 mt-0.5" />
                    <span><strong>Criteria:</strong> {prog.eligibility}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-100">
                <a
                  href={`https://wa.me/923294403898?text=Hello%20Scholar%20Sphere,%20I%20want%20to%20apply%20for%20admission%20in%20${encodeURIComponent(prog.name)}.`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-[#0A2342] hover:text-white text-[#0A2342] font-bold text-xs flex items-center justify-center gap-1.5 transition-all cursor-pointer"
                >
                  <span>Inquire For Merit & Fee Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner on Hospital Rotations */}
        <div className="mt-10 p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 flex items-center justify-center shrink-0">
              <Stethoscope className="w-5 h-5" />
            </div>
            <div className="text-xs">
              <span className="font-bold text-[#0A2342] text-sm block">
                Hospital Affiliation Guarantee
              </span>
              <span className="text-slate-600">
                Every nursing and allied health college we partner with has verifiable 500+ bed hospital beds for clinical hours.
              </span>
            </div>
          </div>

          <a
            href="https://wa.me/923294403898?text=Hello,%20I%20want%20to%20verify%20the%20hospital%20affiliation%20of%20a%20nursing%20college."
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 text-xs font-bold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 rounded-lg whitespace-nowrap transition-colors"
          >
            Verify Hospital Clinical Quotas
          </a>
        </div>

      </div>
    </section>
  );
};
