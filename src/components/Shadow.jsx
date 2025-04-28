import React from 'react'

export default function Shadow({child}) {
  return (
    <div className="relative inline-block">
    {/* Bayangan */}
    <div className="absolute inset-0 translate-x-1.5 translate-y-1.5 bg-[#222222] rounded-xl z-[2]"></div>

    {/* child */}
    {child}
  </div>
  )
}
