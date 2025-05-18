import { useState } from "react";
import { ChevronUp } from "lucide-react";
import ShadowComp from "./ShadowMini";

const categories = [
  { label: "Makan & Minum", value: "makan" },
  { label: "Transportasi", value: "transportasi" },
  { label: "Belanja Harian", value: "belanja" },
  { label: "Hiburan", value: "hiburan" },
  { label: "Kesehatan", value: "kesehatan" },
  { label: "Pendidikan", value: "pendidikan" },
  { label: "Tagihan", value: "tagihan" },
  { label: "Sosial & Hadiah", value: "sosial" },
  { label: "Cicilan / Hutang", value: "cicilan" },
  { label: "Lain-lain", value: "lain" },
  { label: "Gaji / Upah", value: "gaji" },
  { label: "Bonus / THR", value: "bonus" },
  { label: "Penjualan", value: "penjualan" },
  { label: "Hibah / Hadiah", value: "hadiah" },
  { label: "Investasi / Dividen", value: "investasi" },
];

export default function AddTransaction({ onClose, onSubmit }) {
  const today = new Date().toISOString().split("T")[0];
  const [form, setForm] = useState({
    description: "",
    amount: "",
    date: today,
    category: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ description: "", amount: "", date: "", category: "" });
  };

  return (
    <div className="border-[1px] rounded-lg p-3 bg-[#F7F7F7] relative z-[5] w-full">
      <h1>Tambah Transaksi</h1>
      <form className="space-y-4 pt-2" onSubmit={handleSubmit}>
        {/* Deskripsi */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Deskripsi
          </label>
          <input
            type="text"
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Deskripsi transaksi kamu"
            className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FEB602]"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Kategori
          </label>

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FEB602]"
            required
          >
            <option value="" disabled>
              Pilih Kategori
            </option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>

        <div className="flex gap-2 flex-wrap">
          {/* Amount */}
          <div className="flex-2/4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Jumlah
            </label>
            <div className="flex items-center gap-2">
              <h1>Rp</h1>
              <input
                type="number"
                name="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="50000"
                className="w-full border rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-[#FEB602]"
                required
              />
            </div>
          </div>

          {/* Tanggal */}
          <div className="flex-1/4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Tanggal
            </label>
            <input
              type="date"
              name="date"
              value={form.date}
              onChange={handleChange}
              className="w-full border rounded-xl p-2"
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
