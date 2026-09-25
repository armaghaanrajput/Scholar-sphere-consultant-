import React, { useState } from 'react';
import { PosterGalleryView } from './PosterGalleryView';
import { MarketingAdsView } from './MarketingAdsView';
import { X, Image as ImageIcon, FileImage, Download } from 'lucide-react';

interface BrandKitModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BrandKitModal: React.FC<BrandKitModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'posters' | 'ads'>('posters');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-2 sm:p-4">
      <div className="bg-white w-full max-w-6xl max-h-[92vh] rounded-2xl shadow-2xl border border-slate-300 flex flex-col overflow-hidden">
        
        {/* Modal Top Bar */}
        <div className="p-4 sm:px-6 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A2342] text-[#FF7A00] flex items-center justify-center font-bold shadow-xs">
              <FileImage className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm sm:text-base font-bold text-[#0A2342]">
                  Marketing Posters &amp; Downloadable PNG Ads
                </h2>
                <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-100 text-emerald-800">
                  <Download className="w-2.5 h-2.5" />
                  Instant PNG Downloads
                </span>
              </div>
              <p className="text-[11px] text-slate-500">
                Official Scholar Sphere Consultants promotion kit: 5 print-ready campaign posters &amp; 6 downloadable PNG digital ads
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {/* View Switcher Tabs */}
            <div className="hidden sm:flex items-center gap-1 bg-white p-1 rounded-lg border border-slate-200">
              <button
                onClick={() => setActiveTab('posters')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'posters'
                    ? 'bg-[#0A2342] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <FileImage className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>Marketing Posters (5)</span>
              </button>
              <button
                onClick={() => setActiveTab('ads')}
                className={`px-3 py-1.5 text-xs font-bold rounded-md transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeTab === 'ads'
                    ? 'bg-[#0A2342] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <ImageIcon className="w-3.5 h-3.5 text-[#FF7A00]" />
                <span>PNG Ads &amp; Social Creatives (6)</span>
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-700 rounded-lg hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Mobile View Switcher */}
        <div className="sm:hidden border-b border-slate-200 bg-slate-100 p-2 flex items-center justify-center gap-1">
          <button
            onClick={() => setActiveTab('posters')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-md ${
              activeTab === 'posters' ? 'bg-[#0A2342] text-white' : 'text-slate-600'
            }`}
          >
            Marketing Posters (5)
          </button>
          <button
            onClick={() => setActiveTab('ads')}
            className={`flex-1 py-1.5 text-xs font-bold rounded-md ${
              activeTab === 'ads' ? 'bg-[#0A2342] text-white' : 'text-slate-600'
            }`}
          >
            PNG Ads (6)
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 bg-slate-50">
          {activeTab === 'posters' && <PosterGalleryView />}
          {activeTab === 'ads' && <MarketingAdsView />}
        </div>

      </div>
    </div>
  );
};
