import React from 'react';
import { ShieldCheck, Phone, Check, MapPin, ExternalLink } from 'lucide-react';
import { BRAND_CONTACT, FACEBOOK_PAGE_URL } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';

export const UrduCommunityBanner: React.FC = () => {
  return (
    <section className="py-12 bg-[#0A2342] text-white border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-gradient-to-r from-[#0A2342] via-[#103460] to-[#0A2342] p-8 sm:p-10 rounded-3xl border border-white/15 relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Urdu Announcement Column */}
            <div className="lg:col-span-8 text-right space-y-4" dir="rtl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FF7A00] text-white text-xs font-bold">
                <span>خصوصی پیغام برائے والدین و طلبہ</span>
              </div>

              <h3
                className="text-2xl sm:text-3xl lg:text-4xl font-black text-amber-300 tracking-normal leading-relaxed"
                style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
              >
                داخلے جاری ہیں تعلیمی سال {CURRENT_SESSION.slash}
              </h3>

              <p
                className="text-sm sm:text-base text-slate-200 leading-loose"
                style={{ fontFamily: "'Noto Nastaliq Urdu', serif" }}
              >
                پتوکی، مصطفیٰ آباد، للیانی، پھول نگر، چونیاں اور قصور کے فیکٹری و ملز ورکرز کے بچوں کے لیے سنہری موقع! 
                پنجاب ورکرز ویلفیئر فنڈ (PWWF) کے تحت بی ایس نرسنگ، ڈی پی ٹی، فارمیسی اور الائیڈ ہیلتھ سائنسز میں <strong>100 فیصد مفت تعلیم، ہاسٹل اور رجسٹریشن</strong> کی مکمل سہولت۔
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2 font-medium">
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  صرف اور صرف 100% منظور شدہ کالجز
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  کوئی ویزا نہیں • خالص پاکستان میں اعلیٰ تعلیم
                </span>
                <span className="flex items-center gap-1.5">
                  <Check className="w-4 h-4 text-emerald-400" />
                  طلبہ کے لیے بالکل مفت رہنمائی
                </span>
              </div>
            </div>

            {/* Quick Action Button Column */}
            <div className="lg:col-span-4 flex flex-col items-center lg:items-start gap-3">
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 text-center w-full">
                <span className="text-xs text-amber-300 font-bold block mb-1">
                  رابطہ برائے مفت مشاورت
                </span>
                <span className="text-xl font-black text-white block">
                  ار مغان راجپوت
                </span>
                <span className="text-xs text-slate-300 block mt-1 font-mono">
                  +92 329 4403898
                </span>
              </div>

              <a
                href="https://wa.me/923294403898?text=%D8%A7%D9%84%D8%B3%D9%84%D8%A7%D9%85%20%D8%B9%D9%84%DB%8C%DA%A9%D9%85%D8%8C%20%D9%85%D8%AC%DA%BE%DB%92%20%D8%AF%D8%A7%D8%AE%D9%84%DB%81%20%D8%A7%D9%88%D8%B1%20PWWF%20%D8%B3%DA%A9%D8%A7%D9%84%D8%B1%D8%B4%D9%BE%20%DA%A9%DB%8C%20%D8%B1%DB%81%D9%86%D9%85%D8%A7%D8%A6%DB%8C%20%DA%86%D8%A7%DB%81%DB%8C%DB%92%D8%84"
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#FF7A00] hover:bg-[#e06c00] text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg text-center"
              >
                <Phone className="w-4 h-4" />
                <span>واٹس ایپ پر فوری رابطہ کریں</span>
              </a>

              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noreferrer"
                className="w-full py-2.5 px-4 rounded-xl bg-[#1877F2] hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-colors shadow-lg text-center"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>آفیشل فیس بک پیج وزٹ کریں</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
