import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Upload from "../pages/Upload";
import Invest from "../pages/Invest";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/invest" element={<Invest />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
