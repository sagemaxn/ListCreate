import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import List from "./pages/main/list";
import Create from "./pages/main/create";
import ErrorPage from "./pages/error";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/main/list" replace />} />
        <Route path="/main" element={<Navigate to="/main/list" replace />} />
        <Route path="/main/list" element={<List />} />
        <Route path="/main/create" element={<Create />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
