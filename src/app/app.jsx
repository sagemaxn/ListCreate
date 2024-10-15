import { Route, Routes, Navigate } from "react-router-dom";
import NavTabs from "../components/NavTabs";
import Main from "../components/Main";
import Error from "./pages/Error";

const App = () => {
  return (
    <div className="container">
      <NavTabs />
      <Routes>
        {/* redirect root to /list */}
        <Route path="/" element={<Navigate to="/list" replace />} />

        {/* valid paths handled by Main */}
        <Route path="/list" element={<Main view="list" />} />
        <Route path="/create" element={<Main view="create" />} />

        {/* catch all invalid paths */}
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default App;
