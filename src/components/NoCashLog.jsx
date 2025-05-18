import { BanknoteArrowUp, Carrot } from "lucide-react";
import { useNavigate } from "react-router-dom";
export default function NoCashLog() {

  const navigate = useNavigate();
  
  return (
    <div className="border-[1px] rounded-lg bg-[#F7F7F7] relative z-[5] w-full pb-3">
      <div className="flex items-center justify-between p-3">
        <h1>No Cash Log</h1>
        <button className="bg-[#108EE9] py-1 px-3 rounded-lg text-white hover:bg-blue-400 cursor-pointer">
          filter
        </button>
      </div>
      <div className="relative flex flex-col w-full h-full text-gray-700 bg-white">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 opacity-70">
                  Category
                </p>
              </th>
              <th className="p-4 border-b">
                <p className="block font-sans text-sm font-normal leading-none text-blue-gray-900 opacity-70">
                  Amount
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-red-200 cursor-pointer hover:bg-red-300" onClick={() => {navigate('/transaction')}}>
              <td className="p-4 border-b flex gap-2 items-center">
                <div className="p-1 bg-orange-500 flex justify-center items-center rounded-full">
                  <Carrot className="w-auto h-5 text-white" />
                </div>
                <p className="block font-sans text-sm text-blue-gray-900">
                  Makan
                </p>
              </td>
              <td className="p-4 border-b">
                <div className="flex gap-1">
                  <p>-</p>
                  <p className="block font-sans text-sm text-blue-gray-900">
                    Rp50.000
                  </p>
                </div>
              </td>
            </tr>
            <tr className="bg-green-200 cursor-pointer hover:bg-green-300">
              <td className="p-4 border-b flex gap-2 items-center">
                <div className="p-1 bg-red-500 flex justify-center items-center rounded-full">
                  <BanknoteArrowUp className="w-auto h-5 text-white" />
                </div>
                <p className="block font-sans text-sm text-blue-gray-900">
                  Gaji
                </p>
              </td>
              <td className="p-4 border-b">
              <div className="flex gap-1">
                  <p></p>
                  <p className="block font-sans text-sm text-blue-gray-900">
                    Rp50.000
                  </p>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
