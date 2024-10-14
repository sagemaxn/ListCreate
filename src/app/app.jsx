import { Route, Routes, Navigate } from "react-router-dom";
import NavTabs from "../components/NavTabs";
import List from "./pages/main/List";
import Create from "./pages/main/Create";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="container">
      <NavTabs />
      <Routes>
        <Route path="/" element={<Navigate to="/main/list" replace />} />
        <Route path="/main" element={<Navigate to="/main/list" replace />} />
        <Route path="/main/list" element={<List />} />
        <Route path="/main/create" element={<Create />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
