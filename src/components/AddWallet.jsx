import { ChevronUp } from "lucide-react";
import { useState } from "react";
import ShadowComp from "./ShadowMini";

export default function AddWallet({ onClose }) {
  const [dompet, setDompet] = useState("");
  const [saldo, setSaldo] = useState("");
  return (
    <div className="border-[1px] rounded-lg p-3 bg-[#F7F7F7] relative z-[5] w-full">
      <h1>Buat Dompet</h1>
      <form className="space-y-4 pt-2">
        {/* Deskripsi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Nama Dompet Kamu
          </label>
          <input
            type="text"
            name="description"
            value={dompet}
            onChange={(e) => {
              setDompet(e.target.value);
            }}
            placeholder="Dompet Aku"
            className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FEB602]"
            required
          />
        </div>

        {/* Amount */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Saldo Saat  ini
          </label>
          <div className="flex items-center gap-2">
            <h1>Rp</h1>
            <input
              type="number"
              name="amount"
              value={saldo}
              onChange={(e)=>{setSaldo(e.target.value)}}
              placeholder="50000"
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FEB602]"
              required
            />
          </div>
        </div>
        <div className="mb-2 flex  items-center justify-between">
                  {/* tombol close */}
                  <div
                    type="button"
                    className="relative z-[5] bg-white border-[1px] translate-2 cursor-pointer hover:bg-[#ff7979] hover:text-white"
                    onClick={onClose}
                  >
                    <ChevronUp />
                  </div>
        
                  {/* Tombol Submit */}
                  <ShadowComp
                    child={
                      <button
                        type="submit"
                        className="relative z-[5] px-6 py-2 bg-[#108EE9] rounded-xl border border-[#108EE9] hover:bg-blue-400 transition cursor-pointer"
                      >
                        Add
                      </button>
                    }
                  />
                </div>
      </form>
    </div>
  );
}
