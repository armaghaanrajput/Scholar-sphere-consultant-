import React from 'react';

interface BrandLogoProps {
  variant?: 'full' | 'stacked' | 'symbol' | 'monochrome-white';
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'custom';
  className?: string;
  withTagline?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  variant = 'full',
  size = 'md',
  className = '',
  withTagline = false,
}) => {
  const isWhite = variant === 'monochrome-white';
  const navyColor = isWhite ? '#FFFFFF' : '#0B2545';
  const orangeGradientStart = isWhite ? '#FFB067' : '#F58220';
  const orangeGradientEnd = isWhite ? '#FF8A1E' : '#FF6600';
  const subtextColor = isWhite ? '#E2E8F0' : '#0B2545';
  const whiteDotColor = isWhite ? '#0B2545' : '#FFFFFF';

  // Dimension scaling
  const sizeConfig = {
    sm: { symbolSize: 34, titleSize: 'text-[15px]', subSize: 'text-[8.5px]' },
    md: { symbolSize: 44, titleSize: 'text-lg', subSize: 'text-[10px]' },
    lg: { symbolSize: 64, titleSize: 'text-2xl', subSize: 'text-xs' },
    xl: { symbolSize: 96, titleSize: 'text-3xl', subSize: 'text-sm' },
    custom: { symbolSize: 48, titleSize: 'text-xl', subSize: 'text-xs' },
  }[size];

  // Precise SVG mark mirroring user's official Scholar Sphere Consultants emblem
  const SymbolIcon = ({ sizePx }: { sizePx: number }) => (
    <svg
      width={sizePx}
      height={sizePx}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0 transition-transform duration-200"
      aria-label="Scholar Sphere Consultants Official Emblem"
    >
      <defs>
        {/* Warm Orange Gradient for the Upper-Right Crescent Sun */}
        <linearGradient id="ssOrangeGrad" x1="90" y1="20" x2="160" y2="90" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor={orangeGradientStart} />
          <stop offset="100%" stopColor={orangeGradientEnd} />
        </linearGradient>
      </defs>

      {/* 1. Upper-Right Orange Sun Crescent Arch */}
      <path
        d="M 92 27 C 122 25, 154 48, 158 80 C 159 86, 157 88, 153 87 C 137 81, 118 73, 98 77 C 88 79, 84 75, 87 69 C 94 54, 98 42, 92 27 Z"
        fill="url(#ssOrangeGrad)"
      />

      {/* 2. Upper-Left Deep Navy Blue Arc / Sphere Crescent */}
      <path
        d="M 96 23 C 64 25, 41 53, 40 85 C 39 90, 42 92, 46 90 C 56 86, 68 76, 75 62 C 81 50, 87 36, 96 23 Z"
        fill={navyColor}
      />

      {/* 3. Central Graduation Cap (Mortarboard Diamond Top) */}
      <path
        d="M 100 48 L 157 66 L 100 84 L 43 66 Z"
        fill={navyColor}
      />

      {/* Mortarboard Under-rim Shadow/Bevel Line for 3D depth */}
      <path
        d="M 43 66 L 100 84 L 157 66 L 154 69 L 100 87 L 46 69 Z"
        fill={isWhite ? 'rgba(0,0,0,0.15)' : 'rgba(0,0,0,0.22)'}
      />

      {/* 4. Lower Cap Base / Head Band (Skullcap) */}
      <path
        d="M 68 76 L 68 88 C 68 103, 132 103, 132 88 L 132 76 C 122 81, 111 84, 100 84 C 89 84, 78 81, 68 76 Z"
        fill={navyColor}
      />

      {/* 5. Signature Center White Dot on Skullcap */}
      <circle
        cx="100"
        cy="92"
        r="4.2"
        fill={whiteDotColor}
      />

      {/* 6. Cap Tassel on the Right Side */}
      {/* Tassel Button/Pivot */}
      <circle cx="100" cy="66" r="2.8" fill={isWhite ? '#FFB067' : '#0B2545'} opacity="0.9" />

      {/* Tassel Cord draped to right edge */}
      <path
        d="M 100 66 Q 135 65 152 72"
        stroke={navyColor}
        strokeWidth="2.8"
        strokeLinecap="round"
        fill="none"
      />

      {/* Tassel Ribbon/Bulb hanging down */}
      <path
        d="M 152 72 L 153 82"
        stroke={navyColor}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
      <circle cx="153" cy="84" r="3.2" fill={navyColor} />
      {/* Tassel tip fringe */}
      <path
        d="M 151 86 L 155 86 L 154.5 96 L 151.5 96 Z"
        fill={navyColor}
      />
    </svg>
  );

  // Symbol only variant
  if (variant === 'symbol') {
    return <SymbolIcon sizePx={sizeConfig.symbolSize} />;
  }

  // Stacked variant (emblem on top, text below) matching profile picture
  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center text-center ${className}`}>
        <SymbolIcon sizePx={sizeConfig.symbolSize * 1.3} />
        <div className="mt-2.5">
          <span
            className={`block font-black tracking-tight ${sizeConfig.titleSize}`}
            style={{ color: navyColor, fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
          >
            Scholar Sphere
          </span>
          <span
            className={`block font-extrabold tracking-[0.28em] uppercase ${sizeConfig.subSize} mt-0.5`}
            style={{ color: subtextColor, letterSpacing: '0.28em' }}
          >
            CONSULTANTS
          </span>
          {withTagline && (
            <span className="block text-[11px] font-semibold text-slate-400 mt-1">
              Your Gateway to Education Excellence
            </span>
          )}
        </div>
      </div>
    );
  }

  // Standard horizontal full lockup (Emblem + Scholar Sphere CONSULTANTS)
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <SymbolIcon sizePx={sizeConfig.symbolSize} />
      <div className="flex flex-col justify-center leading-none">
        <span
          className={`font-black tracking-tight ${sizeConfig.titleSize}`}
          style={{ color: navyColor, fontFamily: "'Plus Jakarta Sans', 'Inter', sans-serif" }}
        >
          Scholar Sphere
        </span>
        <span
          className={`font-extrabold uppercase ${sizeConfig.subSize} mt-1`}
          style={{ color: subtextColor, letterSpacing: '0.28em' }}
        >
          CONSULTANTS
        </span>
        {withTagline && (
          <span className="text-[10px] font-medium text-slate-500 mt-1">
            Your Gateway to Education Excellence
          </span>
        )}
      </div>
    </div>
  );
};
