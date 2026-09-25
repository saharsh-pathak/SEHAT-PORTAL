import React from 'react';

interface SehatLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const SehatLogo: React.FC<SehatLogoProps> = ({ size = 'md', showSubtitle = true }) => {
  const isSm = size === 'sm';
  const isLg = size === 'lg';

  const emblemDimensions = isSm ? 'w-10 h-10' : isLg ? 'w-24 h-24' : 'w-16 h-16';
  const titleSize = isSm ? 'text-base' : isLg ? 'text-3xl' : 'text-2xl';

  return (
    <div className="flex flex-col items-center text-center select-none">
      {/* Emblem Artwork */}
      <img
        src="/sehat-emblem.png"
        alt="SEHAT Emblem"
        className={`${emblemDimensions} object-contain transition-transform hover:scale-105 duration-200`}
      />

      {/* Brand Title */}
      <h1 className={`font-serif font-bold text-sehat-maroon-700 tracking-widest leading-none mt-1.5 ${titleSize}`}>
        SEHAT
      </h1>

      {/* Separate Tagline */}
      {showSubtitle && (
        <div className="mt-1 flex flex-col items-center">
          <div className="flex items-center space-x-1.5 opacity-60 my-0.5">
            <span className="w-1 h-1 rounded-full bg-sehat-saffron-600"></span>
            <span className="w-6 h-[1px] bg-sehat-saffron-600"></span>
            <span className="w-1 h-1 rounded-full bg-sehat-saffron-600"></span>
          </div>
          <p className="text-[10px] text-sehat-navy-700 font-semibold tracking-tight leading-tight max-w-[190px]">
            Smart Edge Healthcare Access & Telemedicine Device
          </p>
        </div>
      )}
    </div>
  );
};
