import React from "react";

export default function ShadowMax({ child }) {
  return (
    <div className="relative block w-full">
      {/* Bayangan */}
      <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#222222] rounded-xl z-[2]"></div>

      {/* child */}
      {child}
    </div>
  );
}
