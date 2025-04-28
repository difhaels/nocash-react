import React, { useState } from "react";
import Header from "../components/Header";
import { ChevronUp } from "lucide-react";
import Shadow from "../components/Shadow";

export default function Home() {
  const [tanggal, setTanggal] = useState(() => {
    const today = new Date();
    return today.toISOString().split("T")[0]; // format YYYY-MM-DD
  });
  return (
    <>
      <Header />
      <div className="border-[1px] rounded-lg p-3 bg-[#F7F7F7]">
        <h1>Add Transaction</h1>
        <form className="space-y-4 pt-2">
          {/* Nama */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Transaction Name
            </label>
            <input
              type="text"
              placeholder="Your Transaction"
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Status */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Status
            </label>
            <select className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400">
              <option value="in">In</option>
              <option value="out">Out</option>
            </select>
          </div>

          {/* Amount */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Amount
            </label>
            <div className="flex items-center gap-2">
              <h1>Rp</h1>
              <input
                type="number"
                placeholder="50000"
                className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
          </div>

          {/* Tanggal */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Date
            </label>
            <input
              type="date"
              value={tanggal}
              onChange={(e) => setTanggal(e.target.value)}
              className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          {/* Tombol Submit */}
          <div className="mb-2 flex  items-center justify-between">
            <ChevronUp />
            <Shadow child={<button
      type="submit"
      className="relative z-[5] px-6 py-2 bg-[#108EE9] rounded-xl border border-[#108EE9] hover:bg-blue-600 transition"
    >
      Tambah
    </button>}/>
          </div>
        </form>
      </div>
    </>
  );
}
