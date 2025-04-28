import React from "react";
import Header from "../components/Header";

import AddTransaction from "../components/AddTransaction";
import ShadowPage from "../components/ShadowPage";

export default function Home() {
  return (
    <div className="p-5">
      <Header />
      <ShadowPage child={<AddTransaction />} />
    </div>
  );
}
