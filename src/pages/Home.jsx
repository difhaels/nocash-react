import React from "react";
import Header from "../components/Header";

import AddTransaction from "../components/AddTransaction";
import ShadowPage from "../components/ShadowPage";
import NoCashLog from "../components/NoCashLog";

export default function Home() {
  return (
    <div className="p-5">
      <Header />
      <ShadowPage child={<AddTransaction />} />
      <br />
      <ShadowPage child={<NoCashLog />} />
    </div>
  );
}
