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
      <br />
      <div isOpen={isOpen} onClose={() => setIsOpen(false)}>
        {isOpen ? <ShadowMax child={<AddTransaction />} /> : ""}
      </div>
      <br />
      <ShadowMax child={<NoCashLog />} />
      <div className="fixed z-[5] bottom-3 right-3">
        <AddButton />
      </div>
    </div>
  );
}
