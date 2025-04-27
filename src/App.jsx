import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import FileEditor from "./pages/FileEditor";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FEB602] text-gray-900 p-4">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/editor" element={<FileEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
