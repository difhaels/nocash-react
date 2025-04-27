import { FolderDown, FolderUp } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Start() {
  const navigate = useNavigate();

  const handleCreate = () => {
    // Logic buat create file baru (sementara arahkan ke Home)
    navigate("/home");
  };

  const handleLoad = () => {
    // Logic buat load file (sementara arahkan ke Home)
    navigate("/home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-3xl font-bold mb-10">NOCASH</h1>

      <div className="flex flex-col gap-4 w-40">
        <div
          onClick={handleCreate}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-sm cursor-pointer transition duration-300 flex justify-center-safe"
        >
          <FolderDown className="pr-2 w-8"/>
          Create
        </div>
        <div
          onClick={handleLoad}
          className="bg-[#336AE9] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm cursor-pointer transition duration-300 flex justify-center-safe"
        >
          <FolderUp className="pr-2 w-8"/>
          Load
        </div>
      </div>
    </div>
  );
}

export default Start;
