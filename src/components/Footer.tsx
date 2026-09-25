import React from 'react';
import { BrandLogo } from './BrandLogo';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS, FACEBOOK_PAGE_URL } from '../data/brandData';
import { CURRENT_SESSION } from '../utils/academicSession';
import {
  Phone,
  Mail,
  MapPin,
  ExternalLink,
  ShieldCheck,
  FileText,
  Heart,
  ArrowUp,
  Star,
} from 'lucide-react';

interface FooterProps {
  onOpenBrandKit: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBrandKit }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0A2342] text-white border-t border-slate-800 print:hidden">
      
      {/* Official Trust Ribbon */}
      <div className="bg-[#FF7A00] text-white py-3 px-4 sm:px-6 text-center text-xs sm:text-sm font-bold tracking-wide flex items-center justify-center gap-2">
        <ShieldCheck className="w-4 h-4" />
        <span>{OFFICIAL_COPY_STRINGS.officialTrustLine}</span>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Col 1-2: Brand Information */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="monochrome-white" size="md" withTagline={true} />
            <p className="text-xs text-slate-300 leading-relaxed max-w-md pt-2">
              Scholar Sphere Consultants is Pattoki&#39;s premier education advisory. We provide genuine, verified admission guidance for BS Nursing, Allied Health Sciences, and Punjab Workers Welfare Fund (PWWF) scholarships across Punjab and Pakistan.
            </p>

            <div className="p-3 bg-white/10 rounded-xl border border-white/10 text-xs text-slate-300">
              <strong className="text-amber-300 block mb-0.5">100% Legal — Strictly No Visa:</strong>
              We do not process foreign visas or student migrations. We operate strictly for Pakistan higher education and official labour welfare board grants.
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={onOpenBrandKit}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-amber-400/20 hover:bg-amber-400/30 border border-amber-400/30 text-xs font-bold text-amber-200 transition-colors cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Download Marketing Posters &amp; PNG Ads</span>
              </button>
              <a
                href={FACEBOOK_PAGE_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-[#1877F2] hover:bg-blue-600 text-xs font-bold text-white transition-colors cursor-pointer shadow-xs"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Official Facebook Page (4.9★)</span>
              </a>
            </div>
          </div>

          {/* Programs Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-[#FF7A00] uppercase tracking-wider">
              Programs {CURRENT_SESSION.slash}
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>BS Nursing (4 Years PNC Approved)</li>
              <li>Doctor of Physical Therapy (DPT)</li>
              <li>Doctor of Pharmacy (Pharm-D)</li>
              <li>BS Medical Lab Technology (MLT)</li>
              <li>BS Medical Imaging (MIT)</li>
              <li>BS Anesthesia Technology</li>
              <li>BS Computer Science & IT</li>
              <li>BS Psychology & Biotechnology</li>
            </ul>
          </div>

          {/* Col 4: Official Portals */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-[#FF7A00] uppercase tracking-wider">
              Verify Any College
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li>
                <a
                  href="http://e-registration.punjab.gov.pk/parents-corner"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>Punjab Parents Corner</span>
                </a>
              </li>
              <li>
                <a
                  href="http://ddckasur.pk"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>District Kasur Verification</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pnmc.gov.pk"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>PNMC / PNC Nursing Council</span>
                </a>
              </li>
              <li>
                <a
                  href="https://pwwf.punjab.gov.pk"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 flex items-center gap-1.5"
                >
                  <ExternalLink className="w-3.5 h-3.5 text-[#FF7A00] shrink-0" />
                  <span>Punjab Workers Welfare Board</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Col 5: Head Office */}
          <div className="space-y-3">
            <h4 className="text-xs font-extrabold text-[#FF7A00] uppercase tracking-wider">
              Head Office Contact
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#FF7A00] shrink-0 mt-0.5" />
                <span>
                  {BRAND_CONTACT.address}, District Kasur, Punjab
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF7A00] shrink-0" />
                <a
                  href="https://wa.me/923294403898"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white font-bold"
                >
                  {BRAND_CONTACT.formattedPhone}
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="select-all break-all">{BRAND_CONTACT.email}</span>
              </div>
              <div className="flex items-center gap-2 pt-0.5">
                <svg className="w-4 h-4 fill-[#1877F2] shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300 font-bold text-blue-200"
                >
                  Facebook Page (facebook.com)
                </a>
              </div>
              <div className="pt-2 text-[11px] text-slate-400">
                Contact: <strong>{BRAND_CONTACT.owner}</strong> (Managing Director)
              </div>
            </div>
          </div>

        </div>

        {/* Mandatory 3 Lines Strip */}
        <div className="mt-12 pt-8 border-t border-white/10 space-y-2 text-center text-xs text-slate-300">
          <p className="font-semibold text-white">
            {OFFICIAL_COPY_STRINGS.officialFooter}
          </p>
          <p className="text-amber-300 font-bold">
            {OFFICIAL_COPY_STRINGS.officialContactLine}
          </p>
        </div>

        {/* Bottom copyright */}
        <div className="mt-6 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-4">
          <div>
            © 2026 Scholar Sphere Consultants. All rights reserved. Directed by Armaghaan Rajput.
          </div>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
