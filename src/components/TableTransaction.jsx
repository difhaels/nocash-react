import { Carrot } from "lucide-react";

export default function TableTransaction() {
  const makanData = [
    {
      description: "Makan bakso pinggir jalan Ma baksr jalan",
      amount: 20000,
      date: "2025-05-14",
      category: "makan",
    },
    {
      description: "Nasi goreng abang-abang",
      amount: 18000,
      date: "2025-05-13",
      category: "makan",
    },
    {
      description: "Ayam geprek level 3",
      amount: 25000,
      date: "2025-05-12",
      category: "makan",
    },
    {
      description: "Sate ayam sambal kecap",
      amount: 22000,
      date: "2025-05-11",
      category: "makan",
    },
    {
      description: "Indomie telur kornet",
      amount: 17000,
      date: "2025-05-10",
      category: "makan",
    },
    {
      description: "Seblak campur pedas",
      amount: 20000,
      date: "2025-05-09",
      category: "makan",
    },
    {
      description: "Nasi padang rendang",
      amount: 30000,
      date: "2025-05-08",
      category: "makan",
    },
    {
      description: "Bubur ayam pagi-pagi",
      amount: 15000,
      date: "2025-05-07",
      category: "makan",
    },
    {
      description: "Mie ayam bakso",
      amount: 22000,
      date: "2025-05-06",
      category: "makan",
    },
    {
      description: "Pecel lele sambal terasi",
      amount: 18000,
      date: "2025-05-05",
      category: "makan",
    },
    {
      description: "Kwetiau goreng seafood",
      amount: 27000,
      date: "2025-05-04",
      category: "makan",
    },
    {
      description: "Martabak manis coklat keju",
      amount: 35000,
      date: "2025-05-03",
      category: "makan",
    },
    {
      description: "Soto ayam bening",
      amount: 20000,
      date: "2025-05-02",
      category: "makan",
    },
    {
      description: "Nasi uduk + ayam goreng",
      amount: 23000,
      date: "2025-05-01",
      category: "makan",
    },
    {
      description: "Nasi kuning lauk lengkap",
      amount: 25000,
      date: "2025-04-30",
      category: "makan",
    },
    {
      description: "Tahu gejrot pedas manis",
      amount: 12000,
      date: "2025-04-29",
      category: "makan",
    },
    {
      description: "Mie rebus + telur + sayur",
      amount: 19000,
      date: "2025-04-28",
      category: "makan",
    },
    {
      description: "Siomay lengkap bumbu kacang",
      amount: 22000,
      date: "2025-04-27",
      category: "makan",
    },
    {
      description: "Nasi goreng kambing",
      amount: 28000,
      date: "2025-04-26",
      category: "makan",
    },
    {
      description: "Gado-gado sayur segar",
      amount: 20000,
      date: "2025-04-25",
      category: "makan",
    },
  ];
  return (
    <div className="border-[1px] rounded-lg bg-[#F7F7F7] relative z-[5] w-full pb-3">
      <div className="flex items-center gap-2 p-3">
        <div className="p-1 bg-orange-500 flex justify-center items-center rounded-full">
          <Carrot className="w-auto h-5 text-white" />
        </div>
        <h1>Makan</h1>
      </div>

      <table className="w-full table-fixed text-left">
        <thead>
          <tr>
            <th className="w-[10%] p-2 border-b text-sm opacity-70">No</th>
            <th className="w-[50%] p-2 border-b text-sm opacity-70">
              Description
            </th>
            <th className="w-[20%] p-2 border-b text-sm opacity-70">Date</th>
            <th className="w-[20%] p-2 border-b text-sm opacity-70">Amount</th>
          </tr>
        </thead>
        <tbody>
          {makanData.map((data, index) => (
            <tr
              key={index}
              className="bg-red-200 hover:bg-red-300 cursor-pointer"
            >
              <td className="px-2 py-3 border-b text-sm">{index + 1}</td>
              <td className="px-2 py-3 border-b text-sm break-words whitespace-normal">
                {data.description}
              </td>
              <td className="px-2 py-3 border-b text-sm">{data.date}</td>
              <td className="px-2 py-3 border-b text-sm">
                Rp {data.amount.toLocaleString("id-ID")}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
