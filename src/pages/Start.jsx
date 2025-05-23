import { FolderDown, FolderUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShadowMax from "../components/ShadowMax";
import { useState } from "react";

function Start() {
  const navigate = useNavigate();

  const handleCreate = () => {
    // Logic buat create file baru (sementara arahkan ke Home)
    navigate("/home");
  };

 const [status, setStatus] = useState("");

  const handleReplaceJson = async () => {
    const dataBaru = [
      { id: 1, nama: "Transaksi A", nominal: 100000 },
      { id: 2, nama: "Transaksi B", nominal: 200000 }
    ];

    try {
      // 1. Minta file dari user
      const [fileHandle] = await window.showOpenFilePicker({
        types: [{ accept: { "application/json": [".json"] } }],
      });

      // 2. Baca file hanya untuk validasi (optional)
      const file = await fileHandle.getFile();
      const original = await file.text();
      console.log("File sebelumnya:", original);

      // 3. Tulis ulang file dengan dataBaru
      const writable = await fileHandle.createWritable();
      await writable.write(JSON.stringify(dataBaru, null, 2));
      await writable.close();

      setStatus("✅ File berhasil diganti!");
    } catch (err) {
      console.error(err);
      setStatus("❌ Gagal mengganti file.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <img src="/logonocash.png" alt="logo" className="w-36" />
      <div className="flex flex-col gap-4 w-40">
        <ShadowMax
          child={
            <div
              onClick={handleCreate}
              className="relative bg-green-500 hover:bg-green-600 font-bold py-2 px-4 cursor-pointer transition duration-300 flex justify-center-safe rounded-lg z-[5]"
            >
              <FolderDown className="pr-2 w-8" />
              Create
            </div>
          }
        />

        <ShadowMax
          child={
            <div
              onClick={handleReplaceJson}
              className="relative bg-[#336AE9] hover:bg-blue-700 font-bold py-2 px-4 cursor-pointer transition duration-300 flex justify-center-safe rounded-lg z-[5]"
            >
              <FolderUp className="pr-2 w-8" />
              Load
            </div>
          }
        />

        <div>{status}</div>
      </div>
    </div>
  );
}

export default Start;
