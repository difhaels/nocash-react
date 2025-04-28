import React, { useState } from "react";
import { ChevronUp } from "lucide-react";
import ShadowComp from "./ShadowComp";
export default function AddTransaction() {
  const [tanggal, setTanggal] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // format YYYY-MM-DD
  });
  return (
    <div className="border-[1px] rounded-lg p-3 bg-[#F7F7F7] relative z-[5] w-full">
      <h1>Add Transaction</h1>
      <form className="space-y-4 pt-2">
        <div className="flex gap-2 flex-wrap">
          {/* Nama */}
          <div className="flex-3/5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transaction Name
            </label>
            <input
              type="text"
              placeholder="Your Transaction"
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FEB602]"
            />
          </div>

          {/* Status */}
          <div className="flex-1/5">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FEB602]">
              <option value="in">In</option>
              <option value="out">Out</option>
            </select>
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {/* Amount */}
          <div className="flex-2/4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <div className="flex items-center gap-2">
              <h1>Rp</h1>
              <input
                type="number"
                placeholder="50000"
                className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FEB602]"
              />
            </div>
          </div>

          {/* Tanggal */}
          <div className="flex-1/4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FEB602]"
            />
          </div>
        </div>

        {/* Tombol Submit */}
        <div className="mb-2 flex  items-center justify-between">
          <ChevronUp />
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
