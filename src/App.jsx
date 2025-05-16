import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Start from "./pages/Start";
import Home from "./pages/Home";
import FileEditor from "./pages/FileEditor";
import Transaction from "./components/Transaction";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#FEB602] text-gray-900">
        <Routes>
          <Route path="/" element={<Start />} />
          <Route path="/home" element={<Home />} />
          <Route path="/transaction" element={<Transaction />} />
          <Route path="/editor" element={<FileEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
