import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause, Maximize2, X, ExternalLink, MessageCircle, Sparkles } from 'lucide-react';
import directorImage from '../assets/images/director_armaghaan_rajput_1790340617639.jpg';
import { FACEBOOK_PAGE_URL } from '../data/brandData';

interface DirectorPipWidgetProps {
  isOpen: boolean;
  isPlaying: boolean;
  onTogglePlay: () => void;
  onClose: () => void;
  onExpandToSection: () => void;
}

export const DirectorPipWidget: React.FC<DirectorPipWidgetProps> = ({
  isOpen,
  isPlaying,
  onTogglePlay,
  onClose,
  onExpandToSection,
}) => {
  const [isMuted, setIsMuted] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [progress, setProgress] = useState(25);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 2));
      }, 500);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Director Video Picture in Picture"
      className={`fixed bottom-20 right-4 z-45 transition-all duration-300 ${
        isMinimized ? 'w-56' : 'w-72 sm:w-80'
      } bg-[#0A2342] text-white rounded-2xl shadow-2xl border-2 border-amber-400 overflow-hidden backdrop-blur-md`}
    >
      {/* Top Header Bar */}
      <div className="px-3 py-2 bg-gradient-to-r from-[#0A2342] to-[#123966] border-b border-slate-700/60 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full ${isPlaying ? 'bg-emerald-400' : 'bg-amber-400'} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-emerald-500' : 'bg-amber-500'}`}></span>
          </span>
          <span className="text-[11px] font-black text-amber-300 uppercase tracking-wider">
            Director PiP {isPlaying ? '• Playing' : '• Paused'}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <button
            onClick={onExpandToSection}
            className="p-1 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors cursor-pointer"
            title="Expand to Full Director Section"
            aria-label="Expand to Full Director Section"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1 hover:bg-white/10 rounded text-slate-300 hover:text-white transition-colors cursor-pointer text-xs font-bold px-1"
            title={isMinimized ? 'Expand PiP' : 'Minimize PiP'}
            aria-label={isMinimized ? 'Expand PiP' : 'Minimize PiP'}
          >
            {isMinimized ? '+' : '–'}
          </button>
          <button
            onClick={onClose}
            className="p-1 hover:bg-red-500/20 text-slate-300 hover:text-red-400 rounded transition-colors cursor-pointer"
            title="Close Picture in Picture"
            aria-label="Close Picture in Picture"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {!isMinimized && (
        <div className="relative">
          {/* Video / Picture Area */}
          <div className="relative h-44 bg-slate-950 overflow-hidden group">
            <img
              src={directorImage}
              alt="Director Armaghaan Rajput"
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />

            {/* Speaking Audio Waveform Overlay */}
            {isPlaying && (
              <div className="absolute top-2 left-2 bg-black/60 backdrop-blur-xs px-2 py-1 rounded-md flex items-center gap-1 border border-white/10">
                <span className="w-1 h-3 bg-amber-400 animate-pulse" />
                <span className="w-1 h-4 bg-emerald-400 animate-pulse delay-75" />
                <span className="w-1 h-2 bg-amber-300 animate-pulse delay-150" />
                <span className="w-1 h-5 bg-[#FF7A00] animate-pulse delay-100" />
                <span className="text-[10px] font-bold text-white ml-1">Live Audio</span>
              </div>
            )}

            {/* Official Designation Pill */}
            <div className="absolute bottom-2 left-2 right-2 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-2 rounded-lg">
              <div className="text-xs font-bold text-white flex items-center gap-1">
                <span>Armaghaan Rajput</span>
                <span className="text-amber-400 text-[10px]">★ MD</span>
              </div>
              <p className="text-[10px] text-slate-300 truncate">
                Managing Director • Scholar Sphere Consultants
              </p>
            </div>

            {/* Center Play/Pause button on hover */}
            <button
              onClick={onTogglePlay}
              className="absolute inset-0 m-auto w-11 h-11 rounded-full bg-[#FF7A00]/90 text-white flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95 cursor-pointer z-10"
              aria-label={isPlaying ? 'Pause Director Message' : 'Play Director Message'}
            >
              {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-0.5" />}
            </button>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-1 relative">
            <div
              className="bg-amber-400 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>

          {/* Bottom Controls & Quick Links */}
          <div className="p-3 space-y-2 bg-[#0A2342]">
            <p className="text-[11px] text-slate-300 leading-snug line-clamp-2 italic">
              &ldquo;No student in Punjab shall lose an academic year due to lack of funds or fake admissions.&rdquo;
            </p>

            <div className="flex items-center justify-between pt-1 border-t border-slate-700/60 text-xs">
              <div className="flex items-center gap-2">
                <button
                  onClick={onTogglePlay}
                  className="px-2.5 py-1 rounded bg-white/10 hover:bg-white/20 text-white font-bold flex items-center gap-1 text-[11px] cursor-pointer"
                >
                  {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
                  <span>{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className="p-1 rounded bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white cursor-pointer"
                  title={isMuted ? 'Unmute' : 'Mute'}
                >
                  {isMuted ? <VolumeX className="w-3.5 h-3.5 text-red-400" /> : <Volume2 className="w-3.5 h-3.5 text-emerald-400" />}
                </button>
              </div>

              <div className="flex items-center gap-1.5">
                <a
                  href="https://wa.me/923294403898?text=Hello%20Sir%20Armaghaan,%20I%20saw%20your%20Director%20message%20on%20Scholar%20Sphere%20website."
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  title="WhatsApp Director Directly"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                </a>

                <a
                  href={FACEBOOK_PAGE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1.5 rounded-lg bg-[#1877F2] hover:bg-blue-600 text-white transition-colors"
                  title="Visit Facebook Page"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {isMinimized && (
        <div className="p-2 flex items-center justify-between text-xs bg-[#0A2342]">
          <div className="flex items-center gap-2">
            <img
              src={directorImage}
              alt="Director"
              className="w-8 h-8 rounded-full object-cover border border-amber-400 shrink-0"
            />
            <div className="overflow-hidden">
              <div className="text-[11px] font-bold text-white truncate">Armaghaan Rajput</div>
              <div className="text-[10px] text-amber-300 truncate">Director's Message</div>
            </div>
          </div>
          <button
            onClick={onTogglePlay}
            className="p-1.5 rounded-full bg-[#FF7A00] text-white hover:bg-amber-600 cursor-pointer"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>
      )}
    </aside>
  );
};
