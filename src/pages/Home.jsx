import React, { useRef, useState } from "react";
import Header from "../components/Header";

import ShadowMax from "../components/ShadowMax";
import AddTransaction from "../components/AddTransaction";
import Wallet from "../components/Wallet";
import NoCashLog from "../components/NoCashLog";
import AddButton from "../components/AddButton";
import AddWallet from "../components/AddWallet";
import Status from "../components/Status";

export default function Home() {
  const [data, setData] = useState(null);
  const fileInputRef = useRef();
  const handleFileRead = async (e) => {
  const file = e.target.files[0];
  if (!file) return;

  const text = await file.text(); // baca isi file
  try {
    const json = JSON.parse(text); // ubah ke objek JS
    setData(json); // simpan ke state
    console.log("Data loaded:", json);
  } catch (err) {
    alert("File bukan format JSON yang valid.");
  }
};

  // toggle modal add wallet
  const [isWallet, setIsWallet] = useState(true);

  // toggle modal add transaction
  const [isTransaction, setIsTransaction] = useState(false);

  return (
    <div className="p-5 relative">
      <Header />
      <Status data={data}/>

      <div className="mb-5">
        <ShadowMax
          child={
            <Wallet
              onAdd={() => {
                setIsWallet(true);
              }}
            />
          }
        />
      </div>

      <div>
        <ShadowMax child={<NoCashLog />} />
      </div>

      {isTransaction ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-5">
          <ShadowMax
            child={<AddTransaction onClose={() => setIsTransaction(false)} />}
          />
        </div>
      ) : (
        ""
      )}

      {isWallet ? (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50 px-5">
          <ShadowMax
            child={
              <AddWallet
                onClose={() => {
                  setIsWallet(false);
                }}
              />
            }
          />
        </div>
      ) : (
        ""
      )}

      <div
        className="fixed z-[5] bottom-3 right-3"
        onClick={() => setIsTransaction(true)}
      >
        <AddButton />
      </div>
      <input
  type="file"
  accept=".json"
  onChange={handleFileRead}

  ref={fileInputRef}
/>

    </div>
    
  );
}
