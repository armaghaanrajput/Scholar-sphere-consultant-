import React, { useState } from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Video,
  CheckCircle2,
  ShieldCheck,
  User,
  Copy,
  Check,
  CalendarCheck,
  ArrowLeft,
  Printer,
  Sparkles,
  AlertCircle,
  Building,
} from 'lucide-react';

interface AppointmentBookingPageProps {
  onBackToHome: () => void;
}

interface AppointmentFormData {
  type: 'in-person' | 'online';
  date: string;
  timeSlot: string;
  fullName: string;
  phone: string;
  gender: string;
  customGender: string;
  city: string;
  agenda: string;
  attendees: string;
  notes: string;
}

const TIME_SLOTS = [
  '09:30 AM – 10:30 AM',
  '11:00 AM – 12:00 PM',
  '01:30 PM – 02:30 PM',
  '03:00 PM – 04:00 PM',
  '04:30 PM – 05:30 PM',
];

const AGENDAS = [
  'PWWF 100% Scholarship & Worker Card Check (PESSI/EOBI)',
  'BS Nursing (PNC Approved) & Hospital Quota Guidance',
  'Doctor of Physical Therapy (DPT) & Pharm-D Counseling',
  'Allied Health Sciences (MLT, MIT, OTT, Anesthesia)',
  'College Verification & Fee Protection Check',
  'General Admission & Eligibility Assessment',
];

const getDefaultDateString = (daysAhead: number = 1): string => {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  return d.toISOString().split('T')[0];
};

export const AppointmentBookingPage: React.FC<AppointmentBookingPageProps> = ({ onBackToHome }) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    type: 'in-person',
    date: getDefaultDateString(1),
    timeSlot: '11:00 AM – 12:00 PM',
    fullName: '',
    phone: '',
    gender: 'Male',
    customGender: '',
    city: 'Pattoki',
    agenda: 'PWWF 100% Scholarship & Worker Card Check (PESSI/EOBI)',
    attendees: 'Student + Father / Guardian',
    notes: '',
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [appointmentId, setAppointmentId] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleQuickDate = (daysAhead: number) => {
    setFormData((prev) => ({ ...prev, date: getDefaultDateString(daysAhead) }));
  };

  const generateAppointmentId = () => {
    const rand = Math.floor(1000 + Math.random() * 9000);
    return `SSC-APT-${String(CURRENT_SESSION.startYear).slice(-2)}-${rand}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) return;

    const aptId = generateAppointmentId();
    setAppointmentId(aptId);
    setSubmitted(true);

    const displayGender =
      formData.gender === 'Custom' && formData.customGender.trim()
        ? `Custom (${formData.customGender.trim()})`
        : formData.gender;

    const text = `*OFFICIAL APPOINTMENT BOOKING — SCHOLAR SPHERE CONSULTANTS*
📌 Session: ${CURRENT_SESSION.slash}
Booking Reference: ${aptId}

Appointment Details:
• Mode: ${formData.type === 'in-person' ? '🏛 In-Person (Pattoki Office)' : '📹 Online Video / WhatsApp Consultation'}
• Preferred Date: ${formData.date}
• Time Slot: ${formData.timeSlot}

Student & Guardian Information:
• Name: ${formData.fullName}
• Gender: ${displayGender}
• Contact: ${formData.phone}
• City/Town: ${formData.city}
• Attendees: ${formData.attendees}
• Agenda: ${formData.agenda}
• Additional Notes: ${formData.notes || 'None'}

📍 Office: 1 KM Main Multan Road, Pattoki (Near Quaid-e-Azam Nursing College)
Directed by Armaghaan Rajput | +92 329 4403898`;

    window.open(`https://wa.me/923294403898?text=${encodeURIComponent(text)}`, '_blank');
  };

  const copySlip = () => {
    const summary = `SCHOLAR SPHERE CONSULTANTS — APPOINTMENT PASS
Ref ID: ${appointmentId}
Session: ${CURRENT_SESSION.slash}
Student: ${formData.fullName} (${formData.city})
Mode: ${formData.type.toUpperCase()}
Date: ${formData.date} @ ${formData.timeSlot}
Agenda: ${formData.agenda}
Office: 1 KM Main Multan Road, Pattoki, Dist. Kasur
Helpline: +92 329 4403898`;
    navigator.clipboard.writeText(summary);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 pb-16">
      {/* Top Header Navigation */}
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

          <div className="flex items-center gap-2">
            <span className="text-[11px] font-extrabold text-[#0A2342] bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
              {CURRENT_SESSION.slash}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content Form Area */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        {/* Title Header */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A2342] text-white text-xs font-bold mb-2">
            <CalendarCheck className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Official Appointment Booking Form ({CURRENT_SESSION.slash})</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight">
            Schedule an In-Person or Remote Consultation
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            Book a dedicated consultation slot with Director Armaghaan Rajput. Walk in with your matric/FSc result cards or connect via video call.
          </p>
        </div>

        {/* Confirmation Screen */}
        {submitted ? (
          <div className="bg-white rounded-2xl border-2 border-emerald-500 shadow-xl p-6 sm:p-8 text-center space-y-6 animate-in fade-in zoom-in-95 duration-200">
            <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <span className="text-xs font-black tracking-widest uppercase text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
                Booking Request Submitted Successfully
              </span>
              <h2 className="text-2xl font-black text-[#0A2342]">
                We Look Forward to Meeting You!
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 max-w-lg mx-auto">
                Your appointment slip has been generated and dispatched to our Pattoki admissions desk via WhatsApp.
              </p>
            </div>

            {/* Slip Card */}
            <div className="max-w-md mx-auto p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-left space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Booking Ref ID:</span>
                <span className="font-mono font-black text-[#0A2342] text-sm">{appointmentId}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Academic Session:</span>
                <span className="font-bold text-[#FF7A00]">{CURRENT_SESSION.slash}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Student Name:</span>
                <span className="font-bold text-slate-900">{formData.fullName}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Appointment Mode:</span>
                <span className="font-bold text-[#0A2342] uppercase">{formData.type}</span>
              </div>
              <div className="flex items-center justify-between border-b border-slate-200 pb-2">
                <span className="font-semibold text-slate-500">Date &amp; Time Slot:</span>
                <span className="font-bold text-emerald-700">{formData.date} ({formData.timeSlot})</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-semibold text-slate-500">Agenda:</span>
                <span className="font-bold text-slate-800 text-right max-w-[200px] truncate">{formData.agenda}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <button
                onClick={copySlip}
                className="px-4 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#FF7A00]" />}
                <span>{copied ? 'Pass Copied!' : 'Copy Appointment Pass'}</span>
              </button>
              <button
                onClick={() => window.print()}
                className="px-4 py-2.5 rounded-lg bg-[#0A2342] hover:bg-[#081b33] text-white font-bold text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Printer className="w-4 h-4 text-[#FF7A00]" />
                <span>Print Appointment Slip</span>
              </button>
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2.5 rounded-lg bg-white border border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-xs transition-colors cursor-pointer"
              >
                Book Another Slot
              </button>
            </div>
          </div>
        ) : (
          /* Actual Form */
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              
              {/* 1. Appointment Mode */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#0A2342] uppercase tracking-wider block">
                  1. Select Appointment Mode
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, type: 'in-person' }))}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                      formData.type === 'in-person'
                        ? 'bg-amber-50/70 border-[#FF7A00] ring-2 ring-[#FF7A00]/20'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${formData.type === 'in-person' ? 'bg-[#FF7A00] text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Building className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-black text-[#0A2342]">
                        In-Person Office Visit (Pattoki)
                      </strong>
                      <span className="text-[11px] text-slate-500">
                        1 KM Main Multan Road, Near Quaid-e-Azam Nursing College
                      </span>
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setFormData((prev) => ({ ...prev, type: 'online' }))}
                    className={`p-3.5 rounded-xl border text-left flex items-start gap-3 transition-all cursor-pointer ${
                      formData.type === 'online'
                        ? 'bg-amber-50/70 border-[#FF7A00] ring-2 ring-[#FF7A00]/20'
                        : 'bg-white border-slate-200 hover:bg-slate-50'
                    }`}
                  >
                    <div className={`p-2 rounded-lg ${formData.type === 'online' ? 'bg-[#FF7A00] text-white' : 'bg-slate-100 text-slate-600'}`}>
                      <Video className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-black text-[#0A2342]">
                        Online Video / WhatsApp Call
                      </strong>
                      <span className="text-[11px] text-slate-500">
                        For students &amp; families outside Pattoki / Kasur
                      </span>
                    </div>
                  </button>
                </div>
              </div>

              {/* 2. Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label className="text-xs font-bold text-slate-800">
                      Preferred Date *
                    </label>
                    <div className="flex items-center gap-1 text-[10px]">
                      <button
                        type="button"
                        onClick={() => handleQuickDate(1)}
                        className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                      >
                        Tomorrow
                      </button>
                      <button
                        type="button"
                        onClick={() => handleQuickDate(2)}
                        className="px-1.5 py-0.5 rounded bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold"
                      >
                        +2 Days
                      </button>
                    </div>
                  </div>
                  <input
                    type="date"
                    name="date"
                    required
                    value={formData.date}
                    min={getDefaultDateString(0)}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Preferred Time Slot *
                  </label>
                  <select
                    name="timeSlot"
                    value={formData.timeSlot}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] outline-none bg-white font-medium"
                  >
                    {TIME_SLOTS.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* 3. Personal & Contact Info */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Student Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    required
                    placeholder="e.g. Muhammad Ali / Ayesha Bibi"
                    value={formData.fullName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    WhatsApp / Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="e.g. 0329 4403898"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] outline-none"
                  />
                </div>
              </div>

              {/* City and Gender */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    City / Town *
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    placeholder="Pattoki, Kasur, Mustafabad, etc."
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] outline-none"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] outline-none bg-white font-medium"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Custom">Custom / Prefer to self-describe</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-800">
                    Who will attend?
                  </label>
                  <select
                    name="attendees"
                    value={formData.attendees}
                    onChange={handleChange}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] outline-none bg-white font-medium"
                  >
                    <option value="Student + Father / Guardian">Student + Father / Guardian</option>
                    <option value="Student Alone">Student Alone</option>
                    <option value="Father / Mother Alone">Father / Mother Alone</option>
                    <option value="Group of Students">Group of Students</option>
                  </select>
                </div>
              </div>

              {/* Agenda Selection */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Primary Counseling Topic / Agenda *
                </label>
                <select
                  name="agenda"
                  value={formData.agenda}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] outline-none bg-white font-medium"
                >
                  {AGENDAS.map((ag) => (
                    <option key={ag} value={ag}>
                      {ag}
                    </option>
                  ))}
                </select>
              </div>

              {/* Additional notes */}
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-800">
                  Questions or Document Details (Optional)
                </label>
                <textarea
                  name="notes"
                  rows={2}
                  placeholder="Mention your FSc marks, worker PESSI card status, or any specific college queries..."
                  value={formData.notes}
                  onChange={handleChange}
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] focus:ring-1 focus:ring-[#FF7A00] outline-none resize-none"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#0A2342] to-[#123966] hover:from-[#FF7A00] hover:to-[#e66e00] text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <CalendarCheck className="w-4 h-4 text-[#FF7A00] group-hover:text-white" />
                  <span>Confirm &amp; Book Appointment via WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  100% Free Consultation. No booking charges or consultation fees.
                </p>
              </div>

            </form>
          </div>
        )}
      </main>
    </div>
  );
};
