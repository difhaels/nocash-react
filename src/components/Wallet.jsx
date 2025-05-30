import { CirclePlus, WalletMinimal } from "lucide-react";
import React, { useState } from "react";

export default function Wallet({onAdd}) {
  const [acc, setAcc] = useState(0);
  return (
    <div className="border-[1px] rounded-lg bg-[#F7F7F7] relative z-[5] w-full p-3 flex justify-between items-center ">
      <div>
        <h1 className="font-semibold">Dompet</h1>
        {acc ? (
          <div className="flex gap-1">
            <h1>Rp </h1>
            <h1>100.000</h1>
          </div>
        ) : (
          <h1>Tambahkan Dompet Kamu Terlebih Dahulu!</h1>
        )}
      </div>
      <div>
        {acc ? (
          <WalletMinimal className="text-red-500 w-9 h-auto cursor-pointer" />
        ) : (
          <CirclePlus onClick={onAdd} className="text-green-500 w-9 h-auto cursor-pointer" />
        )}
      </div>
    </div>
  );
}
