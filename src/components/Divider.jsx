import React from "react";

const Divider = () => {
  return (
    <div className="flex items-center justify-center my-6">
      <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
      <div className="mx-4">
        <svg className="w-6 h-6 text-[#d4af37]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      </div>
      <div className="h-[2px] w-20 bg-gradient-to-r from-transparent via-[#d4af37] to-transparent"></div>
    </div>
  );
};

export default Divider;