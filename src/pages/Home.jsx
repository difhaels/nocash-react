import React, { useState } from "react";
import Header from "../components/Header";

import ShadowMax from "../components/ShadowMax";
import AddTransaction from "../components/AddTransaction";
import Wallet from "../components/Wallet";
import NoCashLog from "../components/NoCashLog";
import AddButton from "../components/AddButton";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="p-5 relative">
      <Header />
      <div className="mb-3">
        <h1 className="font-semibold">File Name:</h1>
        <h1 className="font-semibold">Last Change:</h1>
      </div>

      <div className="mb-5">
        <ShadowMax child={<Wallet />} />
      </div>

      <div>
        <ShadowMax child={<NoCashLog />} />
      </div>

      <div isOpen={isOpen}>
        {isOpen ? (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-5">
            <ShadowMax
              child={<AddTransaction onClose={() => setIsOpen(false)} />}
            />
          </div>
        ) : (
          ""
        )}
      </div>

      <div
        className="fixed z-[5] bottom-3 right-3"
        onClick={() => setIsOpen(true)}
      >
        <AddButton />
      </div>
    </div>
  );
}
