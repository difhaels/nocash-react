import { FolderDown, FolderUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import ShadowMax from "../components/ShadowMax";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { setData } from "./../data/dataSlice"; 


function Start() {
  const navigate = useNavigate();

  const handleCreate = () => {
    // Logic buat create file baru (sementara arahkan ke Home)
    navigate("/home");
  };

  const dispatch = useDispatch();
  const fileInputRef = useRef();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target.result);;
        dispatch(setData(json));
      } catch (err) {
        alert("File JSON tidak valid.");
      }
    };
    reader.readAsText(file);
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
              onClick={() => {
                fileInputRef.current.click();
              }}
              className="relative bg-[#336AE9] hover:bg-blue-700 font-bold py-2 px-4 cursor-pointer transition duration-300 flex justify-center-safe rounded-lg z-[5]"
            >
              <FolderUp className="pr-2 w-8" />
              Load
            </div>
          }
        />

        <input
          type="file"
          accept=".json"
          onChange={handleFileChange}
          className="hidden"
          ref={fileInputRef}
        />
      </div>
    </div>
  );
}

export default Start;
