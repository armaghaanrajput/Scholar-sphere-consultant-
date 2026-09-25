import React from 'react';
import { BRAND_CONTACT } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  CalendarCheck,
  Building,
  Video,
  Clock,
  MapPin,
  Phone,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Calendar,
} from 'lucide-react';

interface AppointmentSectionProps {
  onOpenAppointmentForm: () => void;
}

export const AppointmentSection: React.FC<AppointmentSectionProps> = ({ onOpenAppointmentForm }) => {
  return (
    <section id="appointment" className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Compact Section Banner */}
        <div className="bg-gradient-to-br from-[#0A2342] via-[#0E2E56] to-[#0A2342] rounded-2xl p-6 sm:p-8 text-white shadow-lg border border-slate-700 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Left Details */}
          <div className="space-y-3 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FF7A00] text-white text-xs font-black uppercase tracking-wider">
              <CalendarCheck className="w-3.5 h-3.5" />
              <span>Official Appointment Booking Form ({CURRENT_SESSION.slash})</span>
            </div>

            <h2
              className="text-2xl sm:text-3xl font-black text-white tracking-tight"
              style={{ fontFamily: "'Cabinet Grotesk', sans-serif" }}
            >
              Book an In-Person or Remote Consultation
            </h2>

            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-normal">
              Meet directly with Director Armaghaan Rajput. We review student matric/FSc result cards, verify college accreditation quotas, and confirm 100% PWWF scholarship documents before you pay any fees.
            </p>

            {/* Micro Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1 text-xs">
              <div className="p-2.5 rounded-lg bg-white/10 border border-white/10 flex items-center gap-2 text-left">
                <Building className="w-4 h-4 text-amber-300 shrink-0" />
                <div>
                  <strong className="block text-white font-bold text-[11px]">Pattoki Office</strong>
                  <span className="text-[10px] text-slate-300">1 KM Main Multan Road</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/10 border border-white/10 flex items-center gap-2 text-left">
                <Video className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <strong className="block text-white font-bold text-[11px]">Online Video Call</strong>
                  <span className="text-[10px] text-slate-300">WhatsApp / Google Meet</span>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-white/10 border border-white/10 flex items-center gap-2 text-left">
                <Clock className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <div>
                  <strong className="block text-white font-bold text-[11px]">Flexible Slots</strong>
                  <span className="text-[10px] text-slate-300">Mon–Sat: 9:30 AM–5:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Action Box - Opens Dedicated Separate Form Page */}
          <div className="w-full lg:w-80 shrink-0 bg-white p-5 rounded-xl text-slate-900 shadow-md border border-slate-200 text-center space-y-3">
            <div className="w-10 h-10 rounded-full bg-amber-100 text-amber-900 mx-auto flex items-center justify-center font-bold">
              <Calendar className="w-5 h-5 text-amber-700" />
            </div>

            <div>
              <span className="text-[10px] uppercase font-black text-slate-500 tracking-wider block">
                Dedicated Portal
              </span>
              <h3 className="text-sm font-extrabold text-[#0A2342]">
                Official Appointment Form
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                Session {CURRENT_SESSION.slash} • Select date, time slot &amp; agenda on a separate full screen.
              </p>
            </div>

            <button
              onClick={onOpenAppointmentForm}
              className="w-full py-2.5 px-4 rounded-lg bg-[#FF7A00] hover:bg-[#e66e00] text-white font-black text-xs transition-all shadow-sm flex items-center justify-center gap-1.5 cursor-pointer group"
            >
              <span>Open Appointment Booking Form</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href="https://wa.me/923294403898?text=Hello%20Scholar%20Sphere%20Consultants,%20I%20want%20to%20book%20an%20urgent%20appointment."
              target="_blank"
              rel="noreferrer"
              className="block text-[11px] text-[#0A2342] hover:text-[#FF7A00] font-bold"
            >
              Or Quick WhatsApp Direct Booking →
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};
