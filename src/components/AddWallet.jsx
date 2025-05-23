import { ChevronUp } from "lucide-react";

export default function AddWallet({onClose}) {
  return (
    <div className="border-[1px] rounded-lg p-3 bg-[#F7F7F7] relative z-[5] w-full">
      <h1>add wallet</h1>
      {/* tombol close */}
      <div
        type="button"
        className="relative z-[5] bg-white border-[1px] translate-2 cursor-pointer hover:bg-[#ff7979] hover:text-white"
        onClick={onClose}
      >
        <ChevronUp />
      </div>
    </div>
  );
}
