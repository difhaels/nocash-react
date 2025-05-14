import React from "react";
import ShadowMini from "./ShadowMini";

export default function Header() {
  return (
    <div className="flex justify-between items-center">
      <img src="/logonocash.png" alt="logo" className="h-22" />
      <div className="flex gap-2">
        <ShadowMini
          child={
            <div className="bg-red-500 text-white px-5 py-2 cursor-pointer rounded-lg relative z-[5]">
              <h1>Discard</h1>
            </div>
          }
        />
        <ShadowMini
          child={
            <div className="bg-green-500 text-white px-5 py-2 cursor-pointer rounded-lg relative z-[5]">
              <h1>Save</h1>
            </div>
          }
        />
      </div>
    </div>
  );
}
