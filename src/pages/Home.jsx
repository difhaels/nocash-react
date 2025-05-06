import React from "react";
import Header from "../components/Header";

import ShadowPage from "../components/ShadowPage";
import AddTransaction from "../components/AddTransaction";
import Wallet from "../components/Wallet";
import NoCashLog from "../components/NoCashLog";
import AddButton from "../components/AddButton";

export default function Home() {
  return (
    <div className="p-5 relative">
      <Header />
      <ShadowPage child={<Wallet />} />
      <br />
      <ShadowPage child={<AddTransaction />} />
      <br />
      <ShadowPage child={<NoCashLog />} />
      <div className="fixed z-[5] bottom-3 right-3">
        <AddButton />
      </div>
    </div>
  );
}
