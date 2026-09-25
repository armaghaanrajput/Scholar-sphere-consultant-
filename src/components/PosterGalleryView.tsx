import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { OFFICIAL_POSTERS, BRAND_CONTACT, OFFICIAL_COPY_STRINGS } from '../data/brandData';
import { PosterData } from '../types';
import { generatePosterPng } from '../utils/canvasExport';
import {
  Printer,
  Copy,
  Check,
  Share2,
  Phone,
  Mail,
  MapPin,
  ShieldCheck,
  AlertTriangle,
  Award,
  ExternalLink,
  GraduationCap,
  Download,
} from 'lucide-react';

export const PosterGalleryView: React.FC = () => {
  const [selectedPosterId, setSelectedPosterId] = useState<string>(OFFICIAL_POSTERS[0].id);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [isDownloading, setIsDownloading] = useState(false);

  const selectedPoster = OFFICIAL_POSTERS.find((p) => p.id === selectedPosterId) || OFFICIAL_POSTERS[0];

  const handleDownloadPoster = () => {
    setIsDownloading(true);
    setTimeout(() => {
      generatePosterPng(selectedPoster);
      setIsDownloading(false);
    }, 250);
  };

  const copyPosterCaption = (poster: PosterData) => {
    const text = `🎓 ${poster.title.toUpperCase()}
📍 Scholar Sphere Consultants — Pattoki, Punjab

${poster.subtitle}

Key Highlights:
${poster.contentBlocks.map((b) => `${b.heading}:\n` + b.points.map((pt) => `• ${pt}`).join('\n')).join('\n\n')}

📌 ${OFFICIAL_COPY_STRINGS.officialTrustLine}
📞 ${OFFICIAL_COPY_STRINGS.officialContactLine}
🏢 ${OFFICIAL_COPY_STRINGS.officialFooter}

#ScholarSphere #Pattoki #Kasur #BSNursing #PWWF #AlliedHealth #EducationConsultant #PakistanAdmissions`;

    navigator.clipboard.writeText(text);
    setCopiedKey(poster.id);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const handlePrintPoster = () => {
    window.print();
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
      {/* Top Header & Poster Selector */}
      <div className="print:hidden mb-6 flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 bg-slate-50 border border-slate-200 rounded-xl">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-[#FF7A00] uppercase tracking-wider">Marketing Assets</span>
            <span className="text-slate-300">·</span>
            <h2 className="text-base font-bold text-[#0A2342]">Official Campaign Posters (2026–27)</h2>
          </div>
          <p className="text-xs text-slate-500 mt-0.5">
            The 5 approved master posters with certified text lines and color codes.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleDownloadPoster}
            className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-[#FF7A00] hover:bg-[#e66e00] rounded-lg shadow-sm transition-all cursor-pointer"
          >
            <Download className="w-4 h-4" />
            <span>{isDownloading ? 'Generating PNG...' : 'Download Poster PNG'}</span>
          </button>
          <button
            onClick={() => copyPosterCaption(selectedPoster)}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-[#0A2342] bg-white border border-slate-300 rounded-lg hover:bg-slate-100 shadow-sm"
          >
            {copiedKey === selectedPoster.id ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#FF7A00]" />}
            {copiedKey === selectedPoster.id ? 'Caption Copied!' : 'Copy Caption'}
          </button>
          <button
            onClick={handlePrintPoster}
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-bold text-white bg-[#0A2342] rounded-lg hover:bg-[#081b33] shadow-sm"
          >
            <Printer className="w-4 h-4 text-[#FF7A00]" />
            Print / PDF
          </button>
        </div>
      </div>

      {/* Poster Navigation Tabs */}
      <div className="print:hidden mb-8 flex items-center gap-2 overflow-x-auto pb-2">
        {OFFICIAL_POSTERS.map((poster) => {
          const isActive = poster.id === selectedPosterId;
          return (
            <button
              key={poster.id}
              onClick={() => setSelectedPosterId(poster.id)}
              className={`px-4 py-2 text-xs font-bold rounded-lg whitespace-nowrap transition-all border ${
                isActive
                  ? 'bg-[#0A2342] text-white border-[#0A2342] shadow-sm'
                  : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
              }`}
            >
              Poster {poster.number}: {poster.title.split('|')[0].trim()}
            </button>
          );
        })}
      </div>

      {/* POSTER DISPLAY STAGE */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Poster Canvas (A3 / Vertical Aspect Ratio) */}
        <div className="lg:col-span-8 flex justify-center">
          <div
            id="printable-poster-canvas"
            className={`w-full max-w-[620px] bg-white rounded-2xl border-2 shadow-2xl overflow-hidden relative flex flex-col justify-between ${
              selectedPoster.theme === 'gold'
                ? 'border-amber-400 ring-4 ring-amber-100'
                : selectedPoster.theme === 'verification'
                ? 'border-red-400 ring-4 ring-red-50'
                : selectedPoster.theme === 'orange'
                ? 'border-orange-300'
                : 'border-slate-300'
            }`}
            style={{ minHeight: '820px' }}
          >
            {/* Top Brand Header Bar */}
            <div className="bg-white p-5 border-b border-slate-200 flex items-center justify-between">
              <BrandLogo variant="full" size="md" />
              <div className="text-right">
                <span className="text-[10px] uppercase font-bold tracking-wider text-slate-400 block">
                  Pattoki • Kasur • Punjab
                </span>
                <span className="text-xs font-bold text-[#FF7A00] block mt-0.5">
                  100% Free Consultation
                </span>
              </div>
            </div>

            {/* Poster Hero Banner */}
            <div
              className={`p-6 sm:p-8 text-white relative overflow-hidden ${
                selectedPoster.theme === 'gold'
                  ? 'bg-gradient-to-br from-[#0A2342] via-[#103058] to-[#0A2342]'
                  : selectedPoster.theme === 'verification'
                  ? 'bg-gradient-to-br from-[#0A2342] via-[#851818] to-[#0A2342]'
                  : selectedPoster.theme === 'orange'
                  ? 'bg-gradient-to-br from-[#0A2342] via-[#0f2e57] to-[#0A2342]'
                  : selectedPoster.theme === 'bilingual'
                  ? 'bg-gradient-to-br from-[#0A2342] via-[#133866] to-[#0A2342]'
                  : 'bg-gradient-to-br from-[#0A2342] via-[#0d284a] to-[#0A2342]'
              }`}
            >
              {/* Top Category Badge */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#FF7A00]">
                  {selectedPoster.category}
                </span>
                {selectedPoster.badge && (
                  <span
                    className={`text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider ${
                      selectedPoster.theme === 'gold'
                        ? 'bg-amber-400 text-slate-950 font-black'
                        : selectedPoster.theme === 'verification'
                        ? 'bg-red-600 text-white font-bold'
                        : 'bg-[#FF7A00] text-white'
                    }`}
                  >
                    {selectedPoster.badge}
                  </span>
                )}
              </div>

              {/* Poster Main Title */}
              <h1
                className={`font-black tracking-tight leading-tight mb-2 ${
                  selectedPoster.theme === 'bilingual' ? 'text-2xl sm:text-3xl' : 'text-3xl sm:text-4xl'
                }`}
                style={{
                  fontFamily: selectedPoster.theme === 'bilingual' ? "'Noto Nastaliq Urdu', 'Cabinet Grotesk', sans-serif" : "'Cabinet Grotesk', sans-serif",
                  color: selectedPoster.theme === 'gold' ? '#FACC15' : '#FFFFFF',
                }}
              >
                {selectedPoster.title}
              </h1>

              {/* Poster Subtitle */}
              <p className="text-sm sm:text-base text-slate-200 font-medium leading-snug max-w-xl">
                {selectedPoster.subtitle}
              </p>
            </div>

            {/* Poster Feature Image (if available) */}
            {selectedPoster.image && (
              <div className="w-full h-48 sm:h-56 relative overflow-hidden bg-slate-100">
                <img
                  src={selectedPoster.image}
                  alt={selectedPoster.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-40" />
              </div>
            )}

            {/* Special Callout: Red Warning Box for Poster 3 */}
            {selectedPoster.theme === 'verification' && (
              <div className="m-5 p-4 rounded-xl bg-red-50 border-2 border-red-500 text-red-950">
                <div className="flex items-center gap-2 font-bold text-sm text-red-700 mb-1">
                  <AlertTriangle className="w-5 h-5 text-red-600 shrink-0" />
                  <span>ALERT: FAKE & UNAPPROVED COLLEGES IN PUNJAB</span>
                </div>
                <p className="text-xs text-red-900 leading-relaxed font-medium">
                  {OFFICIAL_COPY_STRINGS.fakeCollegeWarning}
                </p>
              </div>
            )}

            {/* Special Callout: Gold Scholarship Box for Poster 2 */}
            {selectedPoster.theme === 'gold' && (
              <div className="m-5 p-4 rounded-xl bg-amber-50 border-2 border-[#D4AF37] text-amber-950">
                <div className="flex items-center gap-2 font-black text-sm text-amber-900 mb-1">
                  <Award className="w-5 h-5 text-amber-700 shrink-0" />
                  <span>PUNJAB WORKERS WELFARE FUND (PWWF) BENEFIT</span>
                </div>
                <p className="text-xs text-amber-900 leading-relaxed font-medium">
                  Children of industrial and mill workers are legally entitled to 100% FREE education, university hostel accommodation, and books. We handle your entire documentation from application to stipend approval.
                </p>
              </div>
            )}

            {/* Content Blocks */}
            <div className="p-6 space-y-6 flex-1">
              {selectedPoster.contentBlocks.map((block, idx) => (
                <div key={idx} className="space-y-2">
                  <h3 className="text-sm font-extrabold text-[#0A2342] uppercase tracking-wider border-b border-slate-200 pb-1 flex items-center justify-between">
                    <span>{block.heading}</span>
                    <span className="text-xs font-mono text-[#FF7A00]">0{idx + 1}</span>
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {block.points.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="text-slate-800 font-medium">{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* MANDATORY 3 OFFICIAL FOOTER LINES */}
            <div className="mt-auto border-t-2 border-[#0A2342] bg-[#0A2342] text-white">
              {/* Trust Line */}
              <div className="bg-[#FF7A00] text-white py-2 px-4 text-center text-xs font-bold tracking-wide flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>{selectedPoster.trustLine}</span>
              </div>

              {/* Contact Line */}
              <div className="p-4 text-center border-b border-white/10">
                <div className="text-sm font-black text-amber-300">
                  {selectedPoster.officialContact}
                </div>
              </div>

              {/* Physical Address Footer Line */}
              <div className="py-2.5 px-4 text-center text-[11px] text-slate-300 font-medium">
                {selectedPoster.officialFooter}
              </div>
            </div>

          </div>
        </div>

        {/* Sidebar: Poster Info & Production Settings */}
        <div className="lg:col-span-4 space-y-6">
          <div className="p-6 rounded-2xl border border-slate-200 bg-white shadow-sm space-y-4">
            <span className="text-xs font-bold text-[#FF7A00] uppercase tracking-wide">Poster Metadata</span>
            <h3 className="text-lg font-bold text-[#0A2342]">{selectedPoster.title}</h3>
            
            <div className="space-y-3 text-xs border-t border-slate-100 pt-3">
              <div>
                <span className="font-semibold text-slate-500 block">Target Audience:</span>
                <p className="text-slate-800 font-medium mt-0.5">{selectedPoster.targetAudience}</p>
              </div>

              <div>
                <span className="font-semibold text-slate-500 block">Key Strategic Message:</span>
                <p className="text-slate-800 font-medium mt-0.5">{selectedPoster.keyMessage}</p>
              </div>

              <div>
                <span className="font-semibold text-slate-500 block">Recommended Print Specs:</span>
                <p className="text-slate-800 font-medium mt-0.5">
                  Size: A3 (297mm × 420mm) or A2 (420mm × 594mm) on 250 GSM Gloss or Matte Art Card.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100 flex flex-col gap-2">
              <button
                onClick={handleDownloadPoster}
                className="w-full text-center py-2.5 px-4 rounded-lg bg-[#FF7A00] hover:bg-[#e66e00] text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4" />
                <span>{isDownloading ? 'Generating High-Res PNG...' : 'Download High-Res PNG Poster'}</span>
              </button>
              <a
                href={`https://wa.me/923294403898?text=Hello%20Scholar%20Sphere,%20I%20am%20inquiring%20about%20Poster%20${selectedPoster.number}:%20${encodeURIComponent(selectedPoster.title)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full text-center py-2 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                Inquire on WhatsApp Now
              </a>
              <button
                onClick={() => copyPosterCaption(selectedPoster)}
                className="w-full text-center py-2 px-3 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
              >
                <Copy className="w-3.5 h-3.5 text-[#FF7A00]" />
                Copy Poster Caption & Tags
              </button>
            </div>
          </div>

          {/* Verification Reminder Card */}
          <div className="p-5 rounded-2xl border border-red-200 bg-red-50/70 text-xs space-y-2">
            <div className="flex items-center gap-2 font-bold text-red-800">
              <AlertTriangle className="w-4 h-4 text-red-600" />
              <span>Printer Verification Notice</span>
            </div>
            <p className="text-red-900 leading-relaxed">
              Every print run must strictly carry the official NEW email <code className="font-mono font-bold bg-white px-1 py-0.5 rounded border border-red-200">scholarsphereconsultant@gmail.com</code>. The old email is permanently retired.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
