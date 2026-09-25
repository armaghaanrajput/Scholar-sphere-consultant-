import React, { useState } from 'react';
import { BrandLogo } from '../components/BrandLogo';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  AlertTriangle,
  ArrowLeft,
  ShieldCheck,
  User,
  Building,
} from 'lucide-react';

interface ConsultationInquiryPageProps {
  onBackToHome: () => void;
}

export const ConsultationInquiryPage: React.FC<ConsultationInquiryPageProps> = ({ onBackToHome }) => {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('Male');
  const [customGender, setCustomGender] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('Pattoki');
  const [program, setProgram] = useState('BS Nursing (Generic 4 Years)');
  const [isPwwf, setIsPwwf] = useState('yes');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setSubmitted(true);

    const displayGender =
      gender === 'Custom' && customGender.trim() ? `Custom (${customGender.trim()})` : gender;

    const text = `*OFFICIAL ADMISSION & CONSULTATION INQUIRY*
📌 Session: ${CURRENT_SESSION.slash}
Scholar Sphere Consultants — Pattoki

Inquirer Details:
• Name: ${name}
• Gender: ${displayGender}
• WhatsApp / Phone: ${phone}
• City/Town: ${city}
• Desired Program: ${program}
• PWWF Worker Quota: ${isPwwf === 'yes' ? 'Industrial Worker Child (PWWF Interested)' : 'Regular Private Merit'}
• Questions / Notes: ${message || 'None'}

Please guide me on admission merit, fee structures, and college recognition.`;

    window.open(`https://wa.me/923294403898?text=${encodeURIComponent(text)}`, '_blank');
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

          <span className="text-[11px] font-extrabold text-[#0A2342] bg-amber-100 px-2.5 py-1 rounded-full border border-amber-300">
            Admissions {CURRENT_SESSION.slash}
          </span>
        </div>
      </header>

      {/* Main Form Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-6 sm:pt-8">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#0A2342] text-white text-xs font-bold mb-2">
            <Phone className="w-3.5 h-3.5 text-[#FF7A00]" />
            <span>Direct Admission &amp; Consultation Inquiry Form</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-black text-[#0A2342] tracking-tight">
            Get Personalized Advice for Session {CURRENT_SESSION.slash}
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-1 max-w-xl mx-auto">
            Fill out this quick inquiry form. Our senior counselor will review your marks and guide you on genuine colleges, merit thresholds, and fee structures.
          </p>
        </div>

        {submitted ? (
          <div className="bg-white rounded-2xl border-2 border-emerald-500 shadow-xl p-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="text-xl font-black text-[#0A2342]">Inquiry Dispatched to WhatsApp!</h2>
            <p className="text-xs text-slate-600 max-w-md mx-auto">
              Thank you, {name}. If WhatsApp did not open automatically, you can also reach Director Armaghaan Rajput directly at +92 329 4403898.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <button
                onClick={() => setSubmitted(false)}
                className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-xs font-bold hover:bg-slate-200"
              >
                Submit Another Inquiry
              </button>
              <button
                onClick={onBackToHome}
                className="px-4 py-2 rounded-lg bg-[#0A2342] text-white text-xs font-bold hover:bg-[#081b33]"
              >
                Return to Main Screen
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-xl overflow-hidden">
            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-4">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Student Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Ali Raza"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0329 4403898"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">City / District</label>
                  <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    placeholder="Pattoki, Kasur, Mustafabad, etc."
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Gender</label>
                  <select
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none bg-white font-medium"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Custom">Custom</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Program Interested In</label>
                  <select
                    value={program}
                    onChange={(e) => setProgram(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none bg-white font-medium"
                  >
                    <option value="BS Nursing (Generic 4 Years)">BS Nursing (Generic 4 Years PNC)</option>
                    <option value="Doctor of Physical Therapy (DPT)">Doctor of Physical Therapy (DPT)</option>
                    <option value="Doctor of Pharmacy (Pharm-D)">Doctor of Pharmacy (Pharm-D)</option>
                    <option value="BS Medical Lab Technology (MLT)">BS Medical Lab Technology (MLT)</option>
                    <option value="BS Medical Imaging (MIT)">BS Medical Imaging (MIT)</option>
                    <option value="BS Computer Science / Software">BS Computer Science / Software</option>
                    <option value="Allied Health Technician Diplomas">Allied Health Technician Diplomas</option>
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold text-slate-800">Father/Mother Industrial Worker?</label>
                  <select
                    value={isPwwf}
                    onChange={(e) => setIsPwwf(e.target.value)}
                    className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none bg-white font-medium"
                  >
                    <option value="yes">Yes — Industrial / Factory Worker (PWWF 100% Free)</option>
                    <option value="no">No — Regular Private Admission Inquiry</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-bold text-slate-800">Questions or Inquiry Details</label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Mention your intermediate marks, specific colleges in Lahore/Kasur, or any doubts..."
                  className="w-full px-3 py-2 text-xs rounded-lg border border-slate-300 focus:border-[#FF7A00] outline-none resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#0A2342] to-[#123966] hover:from-[#FF7A00] hover:to-[#e66e00] text-white font-black text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4 text-[#FF7A00]" />
                  <span>Send Inquiry to Scholar Sphere via WhatsApp</span>
                </button>
                <p className="text-[11px] text-center text-slate-500 mt-2">
                  Head Office: 1 KM Main Multan Road, Pattoki. Direct Helpline: +92 329 4403898.
                </p>
              </div>

            </form>
          </div>
        )}
      </main>
    </div>
  );
};
