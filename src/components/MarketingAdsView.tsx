import React, { useRef, useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Download, Check, Share2, Copy, Sparkles, Phone, ShieldCheck, Award, Eye, FileImage } from 'lucide-react';
import { BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import { exportSvgToPng } from '../utils/canvasExport';

interface AdTemplate {
  id: string;
  name: string;
  category: 'Square Post (1:1)' | 'Story/Status (9:16)' | 'Web Banner (16:9)' | 'Official Logo PNG';
  dimensions: string;
  aspect: string;
  description: string;
  svgRefId: string;
  bgGradient: string;
}

export const MarketingAdsView: React.FC = () => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [activeFilter, setActiveFilter] = useState<'all' | 'square' | 'story' | 'banner' | 'logo'>('all');

  const ad1Ref = useRef<SVGSVGElement | null>(null);
  const ad2Ref = useRef<SVGSVGElement | null>(null);
  const ad3Ref = useRef<SVGSVGElement | null>(null);
  const ad4Ref = useRef<SVGSVGElement | null>(null);
  const ad5Ref = useRef<SVGSVGElement | null>(null);
  const ad6Ref = useRef<SVGSVGElement | null>(null);

  const handleDownloadPng = (svgElement: SVGSVGElement | null, filename: string, id: string, w = 1080, h = 1080) => {
    if (!svgElement) return;
    setDownloadingId(id);
    setTimeout(() => {
      exportSvgToPng(svgElement, filename, w, h);
      setDownloadingId(null);
    }, 200);
  };

  const handleCopyCaption = (title: string, id: string) => {
    const caption = `🎓 ${title.toUpperCase()}
🏢 Scholar Sphere Consultants — Pattoki, Punjab
📍 ${BRAND_CONTACT.address}
📞 Call / WhatsApp: +92 329 4403898
📧 ${BRAND_CONTACT.email}

✨ 100% Free Advisory for BS Nursing, DPT, Pharm-D, MLT & PWWF Scholarship!
⚠️ 100% Legal & Verified: No foreign visas, strictly Pakistan HEC & PNC recognized admissions.

#ScholarSphere #Pattoki #Kasur #BSNursing #PWWF #Admissions2026 #EducationConsultant`;
    navigator.clipboard.writeText(caption);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2200);
  };

  return (
    <div className="space-y-6">
      {/* Intro Header */}
      <div className="p-4 sm:p-5 bg-gradient-to-r from-[#0B2545] to-[#123966] text-white rounded-xl shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-[#FF7A00] text-white uppercase tracking-wider">
              Downloadable Assets
            </span>
            <span className="text-xs text-slate-300">•</span>
            <span className="text-xs font-semibold text-amber-300">Ready for WhatsApp, Instagram & Facebook</span>
          </div>
          <h2 className="text-base sm:text-lg font-black mt-1">Official Marketing Posters & PNG Ads</h2>
          <p className="text-xs text-slate-200 mt-0.5">
            Click &quot;Download PNG&quot; on any ad to instantly download high-resolution graphics for promotion and print.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white/10 p-1.5 rounded-lg border border-white/10">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
              activeFilter === 'all' ? 'bg-[#FF7A00] text-white' : 'text-slate-200 hover:text-white'
            }`}
          >
            All Ads ({6})
          </button>
          <button
            onClick={() => setActiveFilter('square')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
              activeFilter === 'square' ? 'bg-[#FF7A00] text-white' : 'text-slate-200 hover:text-white'
            }`}
          >
            Square Feed (1:1)
          </button>
          <button
            onClick={() => setActiveFilter('story')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
              activeFilter === 'story' ? 'bg-[#FF7A00] text-white' : 'text-slate-200 hover:text-white'
            }`}
          >
            Story/Status (9:16)
          </button>
          <button
            onClick={() => setActiveFilter('banner')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
              activeFilter === 'banner' ? 'bg-[#FF7A00] text-white' : 'text-slate-200 hover:text-white'
            }`}
          >
            Web Banner (16:9)
          </button>
          <button
            onClick={() => setActiveFilter('logo')}
            className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all ${
              activeFilter === 'logo' ? 'bg-[#FF7A00] text-white' : 'text-slate-200 hover:text-white'
            }`}
          >
            Logo Pack PNG
          </button>
        </div>
      </div>

      {/* Grid of PNG Ads */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* AD 1: Square Feed Ad - Admissions Open 2026-27 */}
        {(activeFilter === 'all' || activeFilter === 'square') && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col overflow-hidden">
            <div className="p-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[10px] font-extrabold text-[#FF7A00] uppercase tracking-wider block">
                  Square Post (1:1)
                </span>
                <h3 className="text-xs font-bold text-[#0B2545]">Admissions Open 2026–27 Ad</h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                1080 × 1080 px
              </span>
            </div>

            {/* Graphic Container with SVG */}
            <div className="p-3 bg-slate-100 flex justify-center items-center">
              <svg
                ref={ad1Ref}
                viewBox="0 0 500 500"
                className="w-full max-w-[320px] aspect-square rounded-xl shadow-md bg-white border border-slate-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background Pattern */}
                <rect width="500" height="500" fill="#0B2545" />
                <circle cx="450" cy="50" r="180" fill="#133660" opacity="0.6" />
                <circle cx="50" cy="450" r="150" fill="#07182E" />

                {/* Top Badge */}
                <rect x="30" y="24" width="220" height="28" rx="6" fill="#FF7A00" />
                <text x="140" y="42" fill="#FFFFFF" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  SESSION 2026–2027 ADMISSIONS
                </text>

                {/* Main Logo at Top-Right */}
                <g transform="translate(370, 20) scale(0.55)">
                  {/* Orange Crescent */}
                  <path d="M 92 27 C 122 25, 154 48, 158 80 C 159 86, 157 88, 153 87 C 137 81, 118 73, 98 77 C 88 79, 84 75, 87 69 C 94 54, 98 42, 92 27 Z" fill="#FF7A00" />
                  {/* Navy Crescent */}
                  <path d="M 96 23 C 64 25, 41 53, 40 85 C 39 90, 42 92, 46 90 C 56 86, 68 76, 75 62 C 81 50, 87 36, 96 23 Z" fill="#FFFFFF" opacity="0.9" />
                  {/* Cap */}
                  <path d="M 100 48 L 157 66 L 100 84 L 43 66 Z" fill="#FFFFFF" />
                  {/* Cap Base */}
                  <path d="M 68 76 L 68 88 C 68 103, 132 103, 132 88 L 132 76 C 122 81, 111 84, 100 84 C 89 84, 78 81, 68 76 Z" fill="#FFFFFF" />
                  <circle cx="100" cy="92" r="4.2" fill="#0B2545" />
                  <path d="M 100 66 Q 135 65 152 72 L 153 82" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                </g>

                {/* Headline */}
                <text x="30" y="95" fill="#FFFFFF" fontSize="28" fontWeight="900" fontFamily="sans-serif">
                  SCHOLAR SPHERE
                </text>
                <text x="30" y="118" fill="#FFB067" fontSize="13" fontWeight="800" letterSpacing="3" fontFamily="sans-serif">
                  CONSULTANTS • PATTOKI
                </text>

                {/* Highlight banner */}
                <rect x="30" y="135" width="440" height="75" rx="10" fill="#133660" stroke="#FF7A00" strokeWidth="1.5" />
                <text x="45" y="165" fill="#FFD200" fontSize="16" fontWeight="900" fontFamily="sans-serif">
                  BS NURSING &amp; ALLIED HEALTH SCIENCES
                </text>
                <text x="45" y="192" fill="#E2E8F0" fontSize="12" fontWeight="600" fontFamily="sans-serif">
                  • PNC &amp; HEC Approved • 100% Free Consultation
                </text>

                {/* Programs Grid */}
                <rect x="30" y="225" width="212" height="38" rx="8" fill="#07182E" />
                <text x="42" y="248" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  ✔ BS Nursing (4 Years)
                </text>

                <rect x="258" y="225" width="212" height="38" rx="8" fill="#07182E" />
                <text x="270" y="248" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  ✔ Doctor of Physiotherapy (DPT)
                </text>

                <rect x="30" y="272" width="212" height="38" rx="8" fill="#07182E" />
                <text x="42" y="295" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  ✔ Pharm-D &amp; MLT
                </text>

                <rect x="258" y="272" width="212" height="38" rx="8" fill="#07182E" />
                <text x="270" y="295" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  ✔ Radiology &amp; Anesthesia
                </text>

                {/* Gold PWWF Ribbon */}
                <rect x="30" y="325" width="440" height="52" rx="8" fill="#D4AF37" />
                <text x="250" y="348" fill="#07182E" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  100% PWWF LABOUR SCHOLARSHIP
                </text>
                <text x="250" y="365" fill="#07182E" fontSize="10" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                  Free Tuition + Free Hostel + Monthly Stipend for Workers&apos; Children
                </text>

                {/* Footer Call to Action */}
                <rect x="30" y="392" width="440" height="78" rx="10" fill="#07182E" stroke="#133660" />
                <circle cx="65" cy="431" r="18" fill="#25D366" />
                <text x="65" y="437" fill="#FFFFFF" fontSize="18" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  ✆
                </text>
                <text x="96" y="425" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="sans-serif">
                  WhatsApp: +92 329 4403898
                </text>
                <text x="96" y="445" fill="#94A3B8" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                  Katchery Road, Near City Police Station, Pattoki
                </text>
              </svg>
            </div>

            {/* Actions */}
            <div className="p-3 bg-white mt-auto flex items-center justify-between gap-2 border-t border-slate-100">
              <button
                onClick={() => handleCopyCaption('Admissions Open 2026-27 BS Nursing & Allied Health', 'ad1')}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1"
              >
                {copiedId === 'ad1' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#FF7A00]" />}
                <span>{copiedId === 'ad1' ? 'Copied' : 'Caption'}</span>
              </button>
              <button
                onClick={() => handleDownloadPng(ad1Ref.current, 'scholar-sphere-admissions-square-ad.png', 'ad1', 1080, 1080)}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#FF7A00] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === 'ad1' ? 'Downloading...' : 'Download PNG'}</span>
              </button>
            </div>
          </div>
        )}

        {/* AD 2: Vertical Story / WhatsApp Status (9:16) */}
        {(activeFilter === 'all' || activeFilter === 'story') && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col overflow-hidden">
            <div className="p-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[10px] font-extrabold text-[#FF7A00] uppercase tracking-wider block">
                  Story &amp; Status (9:16)
                </span>
                <h3 className="text-xs font-bold text-[#0B2545]">WhatsApp Status / Story Ad</h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                1080 × 1920 px
              </span>
            </div>

            {/* Graphic Container */}
            <div className="p-3 bg-slate-100 flex justify-center items-center">
              <svg
                ref={ad2Ref}
                viewBox="0 0 360 640"
                className="w-full max-w-[210px] aspect-[9/16] rounded-xl shadow-md bg-white border border-slate-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="360" height="640" fill="#0B2545" />
                <circle cx="320" cy="80" r="160" fill="#133660" opacity="0.7" />
                <circle cx="40" cy="560" r="140" fill="#07182E" />

                {/* Top Official Banner */}
                <rect x="20" y="24" width="320" height="34" rx="8" fill="#FF7A00" />
                <text x="180" y="46" fill="#FFFFFF" fontSize="12" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  OFFICIAL ADMISSIONS DESK 2026–27
                </text>

                {/* Centered Logo Symbol & Title */}
                <g transform="translate(135, 75) scale(0.48)">
                  <path d="M 92 27 C 122 25, 154 48, 158 80 C 159 86, 157 88, 153 87 C 137 81, 118 73, 98 77 C 88 79, 84 75, 87 69 C 94 54, 98 42, 92 27 Z" fill="#FF7A00" />
                  <path d="M 96 23 C 64 25, 41 53, 40 85 C 39 90, 42 92, 46 90 C 56 86, 68 76, 75 62 C 81 50, 87 36, 96 23 Z" fill="#FFFFFF" opacity="0.9" />
                  <path d="M 100 48 L 157 66 L 100 84 L 43 66 Z" fill="#FFFFFF" />
                  <path d="M 68 76 L 68 88 C 68 103, 132 103, 132 88 L 132 76 C 122 81, 111 84, 100 84 C 89 84, 78 81, 68 76 Z" fill="#FFFFFF" />
                  <circle cx="100" cy="92" r="4.2" fill="#0B2545" />
                  <path d="M 100 66 Q 135 65 152 72 L 153 82" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                </g>

                <text x="180" y="145" fill="#FFFFFF" fontSize="20" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  Scholar Sphere
                </text>
                <text x="180" y="162" fill="#FFB067" fontSize="10" fontWeight="800" letterSpacing="3" textAnchor="middle" fontFamily="sans-serif">
                  CONSULTANTS • PATTOKI
                </text>

                {/* Big Hook Card */}
                <rect x="20" y="180" width="320" height="96" rx="12" fill="#133660" stroke="#FF7A00" strokeWidth="1.5" />
                <text x="180" y="210" fill="#FFD200" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  100% FREE EDUCATION
                </text>
                <text x="180" y="232" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                  Punjab Workers Welfare Fund (PWWF)
                </text>
                <text x="180" y="254" fill="#93C5FD" fontSize="10" fontWeight="600" textAnchor="middle" fontFamily="sans-serif">
                  Tuition + Hostel + Books Covered
                </text>

                {/* Offerings list */}
                <rect x="20" y="290" width="320" height="200" rx="12" fill="#07182E" stroke="#1E293B" />
                <text x="35" y="316" fill="#FF7A00" fontSize="11" fontWeight="800" fontFamily="sans-serif">
                  OFFICIAL ADMISSIONS OPEN:
                </text>

                <text x="35" y="342" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  • BS Nursing (4 Years PNC Approved)
                </text>
                <text x="35" y="368" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  • Doctor of Physical Therapy (DPT)
                </text>
                <text x="35" y="394" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  • Pharm-D &amp; Allied Health (MLT, MIT)
                </text>
                <text x="35" y="420" fill="#FFFFFF" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  • BS Computer Science &amp; IT
                </text>
                <text x="35" y="446" fill="#FACC15" fontSize="11" fontWeight="700" fontFamily="sans-serif">
                  ★ Free College Legal Verification Service
                </text>
                <text x="35" y="472" fill="#94A3B8" fontSize="10" fontWeight="500" fontFamily="sans-serif">
                  Strictly No Visa / Pakistan Admissions Only
                </text>

                {/* Bottom WhatsApp Strip */}
                <rect x="20" y="505" width="320" height="95" rx="14" fill="#FF7A00" />
                <text x="180" y="534" fill="#FFFFFF" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  Book Free Consultation Now
                </text>
                <rect x="35" y="546" width="290" height="42" rx="8" fill="#0B2545" />
                <circle cx="65" cy="567" r="12" fill="#25D366" />
                <text x="65" y="572" fill="#FFFFFF" fontSize="14" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  ✆
                </text>
                <text x="85" y="573" fill="#FFFFFF" fontSize="13" fontWeight="900" fontFamily="sans-serif">
                  WhatsApp: +92 329 4403898
                </text>

                <text x="180" y="622" fill="#94A3B8" fontSize="9" textAnchor="middle" fontFamily="sans-serif">
                  Katchery Road, Pattoki, Dist. Kasur
                </text>
              </svg>
            </div>

            {/* Actions */}
            <div className="p-3 bg-white mt-auto flex items-center justify-between gap-2 border-t border-slate-100">
              <button
                onClick={() => handleCopyCaption('PWWF 100% Scholarship & BS Nursing Admissions Story', 'ad2')}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1"
              >
                {copiedId === 'ad2' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#FF7A00]" />}
                <span>{copiedId === 'ad2' ? 'Copied' : 'Caption'}</span>
              </button>
              <button
                onClick={() => handleDownloadPng(ad2Ref.current, 'scholar-sphere-story-status-ad.png', 'ad2', 1080, 1920)}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#FF7A00] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === 'ad2' ? 'Downloading...' : 'Download PNG'}</span>
              </button>
            </div>
          </div>
        )}

        {/* AD 3: Official Profile Picture / Logo Pack (1080×1080 px) */}
        {(activeFilter === 'all' || activeFilter === 'logo') && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col overflow-hidden">
            <div className="p-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[10px] font-extrabold text-[#FF7A00] uppercase tracking-wider block">
                  Profile &amp; Display Asset
                </span>
                <h3 className="text-xs font-bold text-[#0B2545]">Official Logo Profile PNG</h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                1080 × 1080 px
              </span>
            </div>

            {/* Graphic Container with Exact User Logo Artwork */}
            <div className="p-3 bg-slate-100 flex justify-center items-center">
              <svg
                ref={ad3Ref}
                viewBox="0 0 500 500"
                className="w-full max-w-[320px] aspect-square rounded-xl shadow-md bg-white border border-slate-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="500" height="500" fill="#FFFFFF" />

                {/* Central Emblem - Exact Replica of User's Image */}
                <g transform="translate(130, 85) scale(1.2)">
                  <defs>
                    <linearGradient id="logoEmblemGrad" x1="90" y1="20" x2="160" y2="90" gradientUnits="userSpaceOnUse">
                      <stop offset="0%" stopColor="#F58220" />
                      <stop offset="100%" stopColor="#FF6600" />
                    </linearGradient>
                  </defs>

                  {/* Upper-Right Orange Sun Crescent Arch */}
                  <path
                    d="M 92 27 C 122 25, 154 48, 158 80 C 159 86, 157 88, 153 87 C 137 81, 118 73, 98 77 C 88 79, 84 75, 87 69 C 94 54, 98 42, 92 27 Z"
                    fill="url(#logoEmblemGrad)"
                  />

                  {/* Upper-Left Deep Navy Blue Arc */}
                  <path
                    d="M 96 23 C 64 25, 41 53, 40 85 C 39 90, 42 92, 46 90 C 56 86, 68 76, 75 62 C 81 50, 87 36, 96 23 Z"
                    fill="#0B2545"
                  />

                  {/* Graduation Cap Mortarboard Diamond Top */}
                  <path
                    d="M 100 48 L 157 66 L 100 84 L 43 66 Z"
                    fill="#0B2545"
                  />

                  {/* Lower Cap Skullcap */}
                  <path
                    d="M 68 76 L 68 88 C 68 103, 132 103, 132 88 L 132 76 C 122 81, 111 84, 100 84 C 89 84, 78 81, 68 76 Z"
                    fill="#0B2545"
                  />

                  {/* Signature Center White Dot */}
                  <circle cx="100" cy="92" r="4.2" fill="#FFFFFF" />

                  {/* Tassel Button and Cord */}
                  <circle cx="100" cy="66" r="2.8" fill="#0B2545" />
                  <path d="M 100 66 Q 135 65 152 72" stroke="#0B2545" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                  <path d="M 152 72 L 153 82" stroke="#0B2545" strokeWidth="3.2" strokeLinecap="round" />
                  <circle cx="153" cy="84" r="3.2" fill="#0B2545" />
                  <path d="M 151 86 L 155 86 L 154.5 96 L 151.5 96 Z" fill="#0B2545" />
                </g>

                {/* Scholar Sphere in bold dark navy */}
                <text
                  x="250"
                  y="295"
                  fill="#0B2545"
                  fontSize="34"
                  fontWeight="900"
                  letterSpacing="-0.5"
                  textAnchor="middle"
                  fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
                >
                  Scholar Sphere
                </text>

                {/* CONSULTANTS in spaced uppercase */}
                <text
                  x="250"
                  y="325"
                  fill="#0B2545"
                  fontSize="17"
                  fontWeight="800"
                  letterSpacing="6.5"
                  textAnchor="middle"
                  fontFamily="'Plus Jakarta Sans', 'Inter', sans-serif"
                >
                  CONSULTANTS
                </text>

                {/* Discreet Official Tagline for Verification */}
                <text
                  x="250"
                  y="460"
                  fill="#94A3B8"
                  fontSize="10"
                  fontWeight="600"
                  textAnchor="middle"
                  fontFamily="sans-serif"
                >
                  Official Registered Trademark • Pattoki, Punjab
                </text>
              </svg>
            </div>

            {/* Actions */}
            <div className="p-3 bg-white mt-auto flex items-center justify-between gap-2 border-t border-slate-100">
              <button
                onClick={() => handleCopyCaption('Scholar Sphere Consultants Official Profile Brand Kit', 'ad3')}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1"
              >
                {copiedId === 'ad3' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#FF7A00]" />}
                <span>{copiedId === 'ad3' ? 'Copied' : 'Caption'}</span>
              </button>
              <button
                onClick={() => handleDownloadPng(ad3Ref.current, 'scholar-sphere-official-logo-profile.png', 'ad3', 1080, 1080)}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#FF7A00] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === 'ad3' ? 'Downloading...' : 'Download PNG'}</span>
              </button>
            </div>
          </div>
        )}

        {/* AD 4: Horizontal Web & Facebook Banner (1200×630 px) */}
        {(activeFilter === 'all' || activeFilter === 'banner') && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col overflow-hidden md:col-span-2 lg:col-span-3">
            <div className="p-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[10px] font-extrabold text-[#FF7A00] uppercase tracking-wider block">
                  Web &amp; Facebook Banner (1.91:1)
                </span>
                <h3 className="text-xs font-bold text-[#0B2545]">Official Landscape Banner Ad</h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                1200 × 630 px
              </span>
            </div>

            {/* Graphic Container */}
            <div className="p-3 bg-slate-100 flex justify-center items-center overflow-x-auto">
              <svg
                ref={ad4Ref}
                viewBox="0 0 800 420"
                className="w-full max-w-[680px] aspect-[1.91/1] rounded-xl shadow-md bg-white border border-slate-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="800" height="420" fill="#0B2545" />
                <circle cx="750" cy="50" r="220" fill="#133660" opacity="0.6" />
                <circle cx="40" cy="400" r="160" fill="#07182E" />

                {/* Left Side: Brand Logo and Title */}
                <g transform="translate(45, 45) scale(0.65)">
                  <path d="M 92 27 C 122 25, 154 48, 158 80 C 159 86, 157 88, 153 87 C 137 81, 118 73, 98 77 C 88 79, 84 75, 87 69 C 94 54, 98 42, 92 27 Z" fill="#FF7A00" />
                  <path d="M 96 23 C 64 25, 41 53, 40 85 C 39 90, 42 92, 46 90 C 56 86, 68 76, 75 62 C 81 50, 87 36, 96 23 Z" fill="#FFFFFF" opacity="0.9" />
                  <path d="M 100 48 L 157 66 L 100 84 L 43 66 Z" fill="#FFFFFF" />
                  <path d="M 68 76 L 68 88 C 68 103, 132 103, 132 88 L 132 76 C 122 81, 111 84, 100 84 C 89 84, 78 81, 68 76 Z" fill="#FFFFFF" />
                  <circle cx="100" cy="92" r="4.2" fill="#0B2545" />
                  <path d="M 100 66 Q 135 65 152 72 L 153 82" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" fill="none" />
                </g>

                <text x="180" y="85" fill="#FFFFFF" fontSize="30" fontWeight="900" fontFamily="sans-serif">
                  SCHOLAR SPHERE
                </text>
                <text x="182" y="110" fill="#FFB067" fontSize="13" fontWeight="800" letterSpacing="4" fontFamily="sans-serif">
                  CONSULTANTS • PATTOKI, PUNJAB
                </text>

                {/* Main Headline */}
                <text x="45" y="175" fill="#FFFFFF" fontSize="24" fontWeight="900" fontFamily="sans-serif">
                  Admission Guidance You Can Trust
                </text>
                <text x="45" y="205" fill="#93C5FD" fontSize="14" fontWeight="600" fontFamily="sans-serif">
                  BS Nursing (4 Yrs) • Doctor of Physiotherapy (DPT) • Pharm-D • Allied Health
                </text>

                {/* Two Badges */}
                <rect x="45" y="235" width="340" height="70" rx="8" fill="#133660" stroke="#FF7A00" strokeWidth="1.2" />
                <text x="60" y="263" fill="#FFD200" fontSize="14" fontWeight="900" fontFamily="sans-serif">
                  ★ 100% PWWF Labour Scholarship
                </text>
                <text x="60" y="286" fill="#E2E8F0" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                  Full Tuition + Hostel &amp; Stipend Guidance for Eligible Workers
                </text>

                <rect x="405" y="235" width="350" height="70" rx="8" fill="#133660" stroke="#00C49F" strokeWidth="1.2" />
                <text x="420" y="263" fill="#34D399" fontSize="14" fontWeight="900" fontFamily="sans-serif">
                  🛡 Anti-Fraud College Verification
                </text>
                <text x="420" y="286" fill="#E2E8F0" fontSize="11" fontWeight="600" fontFamily="sans-serif">
                  Punjab Parents Corner &amp; PNMC Registry Confirmation
                </text>

                {/* Bottom Bar */}
                <rect x="0" y="345" width="800" height="75" fill="#07182E" />
                <text x="45" y="375" fill="#FACC15" fontSize="14" fontWeight="900" fontFamily="sans-serif">
                  DIRECT CONSULTATION: +92 329 4403898
                </text>
                <text x="45" y="396" fill="#94A3B8" fontSize="11" fontWeight="500" fontFamily="sans-serif">
                  Katchery Road, Near City Police Station, Pattoki, District Kasur
                </text>

                <rect x="580" y="357" width="180" height="38" rx="8" fill="#FF7A00" />
                <text x="670" y="381" fill="#FFFFFF" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  Apply Online Today
                </text>
              </svg>
            </div>

            {/* Actions */}
            <div className="p-3 bg-white mt-auto flex items-center justify-between gap-2 border-t border-slate-100">
              <button
                onClick={() => handleCopyCaption('Scholar Sphere Consultants Web & Social Landscape Banner', 'ad4')}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1"
              >
                {copiedId === 'ad4' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#FF7A00]" />}
                <span>{copiedId === 'ad4' ? 'Copied' : 'Caption'}</span>
              </button>
              <button
                onClick={() => handleDownloadPng(ad4Ref.current, 'scholar-sphere-web-banner-ad.png', 'ad4', 1200, 630)}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#FF7A00] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === 'ad4' ? 'Downloading...' : 'Download PNG (1200×630)'}</span>
              </button>
            </div>
          </div>
        )}

        {/* AD 5: Urdu Community Social Ad (1080×1080 px) */}
        {(activeFilter === 'all' || activeFilter === 'square') && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col overflow-hidden">
            <div className="p-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[10px] font-extrabold text-[#FF7A00] uppercase tracking-wider block">
                  Urdu Community Ad (1:1)
                </span>
                <h3 className="text-xs font-bold text-[#0B2545]">مفت تعلیمی رہنمائی و سکالرشپ</h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                1080 × 1080 px
              </span>
            </div>

            {/* Graphic Container */}
            <div className="p-3 bg-slate-100 flex justify-center items-center">
              <svg
                ref={ad5Ref}
                viewBox="0 0 500 500"
                className="w-full max-w-[320px] aspect-square rounded-xl shadow-md bg-white border border-slate-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="500" height="500" fill="#0B2545" />
                <circle cx="50" cy="50" r="160" fill="#133660" opacity="0.6" />
                <circle cx="450" cy="450" r="180" fill="#07182E" />

                {/* Top Badge */}
                <rect x="50" y="24" width="400" height="34" rx="8" fill="#FF7A00" />
                <text x="250" y="47" fill="#FFFFFF" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  سکالر سفیئر کنسلٹنٹس پتّوکی (ضلع قصور)
                </text>

                {/* Center Big Urdu Headline */}
                <rect x="30" y="80" width="440" height="110" rx="12" fill="#133660" stroke="#FFD200" strokeWidth="2" />
                <text x="250" y="125" fill="#FFD200" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="'Noto Nastaliq Urdu', 'Urdu', sans-serif, system-ui">
                  100 فیصد مفت بی ایس نرسنگ و پی ڈبلیو ڈبلیو ایف
                </text>
                <text x="250" y="165" fill="#FFFFFF" fontSize="15" fontWeight="700" textAnchor="middle" fontFamily="'Noto Nastaliq Urdu', 'Urdu', sans-serif, system-ui">
                  صنعتی و مل مزدوروں کے بچوں کے لیے سرکاری وظائف
                </text>

                {/* Bullet Points */}
                <rect x="30" y="210" width="440" height="155" rx="10" fill="#07182E" />
                <text x="440" y="245" fill="#38BDF8" fontSize="15" fontWeight="700" textAnchor="end" fontFamily="sans-serif">
                  • تمام کالجز کی قانونی رجسٹریشن کی مفت تصدیق ✔
                </text>
                <text x="440" y="280" fill="#38BDF8" fontSize="15" fontWeight="700" textAnchor="end" fontFamily="sans-serif">
                  • نرسنگ کونسل (PNC) اور ایچ ای سی منظور شدہ داخلے ✔
                </text>
                <text x="440" y="315" fill="#38BDF8" fontSize="15" fontWeight="700" textAnchor="end" fontFamily="sans-serif">
                  • طالبات اور طلباء کے لیے رہائشی ہاسٹل و وظیفہ رہنمائی ✔
                </text>
                <text x="440" y="348" fill="#F87171" fontSize="13" fontWeight="700" textAnchor="end" fontFamily="sans-serif">
                  نوٹ: ہم ویزا نہیں لگاتے، صرف پاکستان میں مستند داخلے فراہم کرتے ہیں ✘
                </text>

                {/* Contact Footer */}
                <rect x="30" y="385" width="440" height="85" rx="12" fill="#FF7A00" />
                <text x="250" y="418" fill="#07182E" fontSize="16" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  رابطہ نمبر: 4403898 329 92+ (واٹس ایپ)
                </text>
                <text x="250" y="448" fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                  کچہری روڈ، نزد سٹی پولیس اسٹیشن، پتّوکی
                </text>
              </svg>
            </div>

            {/* Actions */}
            <div className="p-3 bg-white mt-auto flex items-center justify-between gap-2 border-t border-slate-100">
              <button
                onClick={() => handleCopyCaption('Urdu Community Free Admissions & PWWF Scholarship Ad', 'ad5')}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1"
              >
                {copiedId === 'ad5' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#FF7A00]" />}
                <span>{copiedId === 'ad5' ? 'Copied' : 'Caption'}</span>
              </button>
              <button
                onClick={() => handleDownloadPng(ad5Ref.current, 'scholar-sphere-urdu-social-ad.png', 'ad5', 1080, 1080)}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#FF7A00] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === 'ad5' ? 'Downloading...' : 'Download PNG'}</span>
              </button>
            </div>
          </div>
        )}

        {/* AD 6: Anti-Fraud Verification Alert Ad (1080×1080 px) */}
        {(activeFilter === 'all' || activeFilter === 'square') && (
          <div className="bg-white rounded-2xl border border-slate-200 shadow-md hover:shadow-lg transition-all flex flex-col overflow-hidden">
            <div className="p-3 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-wider block">
                  Public Safety Alert
                </span>
                <h3 className="text-xs font-bold text-[#0B2545]">Anti-Fraud Verification Ad</h3>
              </div>
              <span className="text-[10px] font-mono font-bold bg-slate-200 text-slate-700 px-1.5 py-0.5 rounded">
                1080 × 1080 px
              </span>
            </div>

            {/* Graphic Container */}
            <div className="p-3 bg-slate-100 flex justify-center items-center">
              <svg
                ref={ad6Ref}
                viewBox="0 0 500 500"
                className="w-full max-w-[320px] aspect-square rounded-xl shadow-md bg-white border border-slate-200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="500" height="500" fill="#0B2545" />
                <circle cx="250" cy="80" r="140" fill="#7F1D1D" opacity="0.6" />

                {/* Top Alert Banner */}
                <rect x="30" y="24" width="440" height="34" rx="8" fill="#DC2626" />
                <text x="250" y="47" fill="#FFFFFF" fontSize="13" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  ⚠ PUBLIC SAFETY &amp; ADMISSION VERIFICATION ALERT
                </text>

                {/* Main Headline */}
                <text x="250" y="105" fill="#EF4444" fontSize="24" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  BEWARE OF UNAPPROVED
                </text>
                <text x="250" y="132" fill="#FFFFFF" fontSize="22" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  NURSING &amp; HEALTH COLLEGES
                </text>

                {/* Red Alert Callout Box */}
                <rect x="30" y="150" width="440" height="90" rx="10" fill="#450A0A" stroke="#EF4444" strokeWidth="1.5" />
                <text x="250" y="180" fill="#FCA5A5" fontSize="13" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
                  Do NOT deposit any admission fee before verifying:
                </text>
                <text x="250" y="205" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                  1. Official PNMC / PNC Council Seat Quota
                </text>
                <text x="250" y="225" fill="#FFFFFF" fontSize="11" fontWeight="700" textAnchor="middle" fontFamily="sans-serif">
                  2. Punjab Higher Education e-Registration Portal
                </text>

                {/* Free Verification Promise */}
                <rect x="30" y="255" width="440" height="110" rx="10" fill="#07182E" stroke="#1E293B" />
                <text x="50" y="285" fill="#FF7A00" fontSize="13" fontWeight="900" fontFamily="sans-serif">
                  SCHOLAR SPHERE ANTI-FRAUD DESK:
                </text>
                <text x="50" y="312" fill="#E2E8F0" fontSize="12" fontWeight="600" fontFamily="sans-serif">
                  Bring any college prospectus or fee voucher to our office.
                </text>
                <text x="50" y="334" fill="#34D399" fontSize="12" fontWeight="700" fontFamily="sans-serif">
                  ✔ We verify college legal standing 100% FREE for parents.
                </text>
                <text x="50" y="352" fill="#94A3B8" fontSize="10" fontWeight="500" fontFamily="sans-serif">
                  Directed by Armaghaan Rajput • Pattoki, Kasur
                </text>

                {/* Footer Call to Action */}
                <rect x="30" y="380" width="440" height="85" rx="12" fill="#0B2545" stroke="#FF7A00" strokeWidth="2" />
                <text x="250" y="412" fill="#FF7A00" fontSize="15" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">
                  VERIFY ANY COLLEGE TODAY
                </text>
                <text x="250" y="435" fill="#FFFFFF" fontSize="14" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">
                  WhatsApp: +92 329 4403898
                </text>
                <text x="250" y="455" fill="#94A3B8" fontSize="10" textAnchor="middle" fontFamily="sans-serif">
                  Katchery Road, Near City Police Station, Pattoki
                </text>
              </svg>
            </div>

            {/* Actions */}
            <div className="p-3 bg-white mt-auto flex items-center justify-between gap-2 border-t border-slate-100">
              <button
                onClick={() => handleCopyCaption('Anti-Fraud Warning & College Verification Alert', 'ad6')}
                className="px-2.5 py-1.5 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg flex items-center gap-1"
              >
                {copiedId === 'ad6' ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-[#FF7A00]" />}
                <span>{copiedId === 'ad6' ? 'Copied' : 'Caption'}</span>
              </button>
              <button
                onClick={() => handleDownloadPng(ad6Ref.current, 'scholar-sphere-anti-fraud-alert.png', 'ad6', 1080, 1080)}
                className="px-3 py-1.5 text-xs font-bold text-white bg-[#0B2545] hover:bg-[#FF7A00] rounded-lg transition-colors flex items-center gap-1.5 shadow-sm"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{downloadingId === 'ad6' ? 'Downloading...' : 'Download PNG'}</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
