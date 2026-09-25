import React from 'react';
import { CollegeVerificationGuide } from './CollegeVerificationGuide';

export const VerificationSection: React.FC = () => {
  return (
    <section id="verification" className="py-8 sm:py-10 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <CollegeVerificationGuide />
      </div>
    </section>
  );
};
