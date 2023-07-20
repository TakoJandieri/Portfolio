import { Route, Routes } from "react-router-dom";
import HomePage from "./Components/HomePage";
import FrontEndPage from "./Components/FrontEndPage";
import DataAnalystPage from "./Components/DataAnalystPage";
import "./App.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="FrontendPage" element={<FrontEndPage />} />
        <Route path="DataAnalyst" element={<DataAnalystPage />} />
      </Routes>
    </div>
  );
}

export default App;
