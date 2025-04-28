import { FolderDown, FolderUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Shadow from "../components/ShadowPage";

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
      <img src="/logonocash.png" alt="logo" className="w-36" />
      <div className="flex flex-col gap-4 w-40">
        <Shadow
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

        <Shadow
          child={
            <div
              onClick={handleLoad}
              className="relative bg-[#336AE9] hover:bg-blue-700 font-bold py-2 px-4 cursor-pointer transition duration-300 flex justify-center-safe rounded-lg z-[5]"
            >
              <FolderUp className="pr-2 w-8" />
              Load
            </div>
          }
        />
      </div>
    </div>
  );
}

export default Start;
