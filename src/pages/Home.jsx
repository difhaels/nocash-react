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

      <ShadowMax child={<Wallet />} />

      <div isOpen={isOpen} >
        {isOpen ? (
          <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-5">
            <ShadowMax child={<AddTransaction onClose={() => setIsOpen(false)} />} />
          </div>
        ) : (
          ""
        )}
      </div>

      <br />

      <ShadowMax child={<NoCashLog />} />

      <div
        className="fixed z-[5] bottom-3 right-3"
        onClick={() => setIsOpen(true)}
      >
        <AddButton />
      </div>
    </div>
  );
}
