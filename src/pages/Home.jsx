import React from "react";

export default function Home() {
  return (
    <div className="flex justify-between items-center">
      <img src="/logonocash.png" alt="logo" className="h-22" />
      <div className="flex gap-2">
        <div className="bg-[#336AE9] text-white px-5 py-2 rounded-lg">
          <h1>Load</h1>
        </div>
        <div className="bg-green-500 text-white px-5 py-2 rounded-lg">
          <h1>Save</h1>
        </div>
      </div>
    </div>
  );
}
