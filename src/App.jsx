import PlanetsName from "./pages/PlanetsName";
import { Routes, Route, Navigate } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";

function App() {
  return (
    <div className="reset ">
      <div className=" bg-image w-screen min-h-screen border border-red-500 ">
        <MainNavigation />

        <Routes>
          <Route path="/" element={<Navigate to="/main/mercury" />} />
          <Route path="/main/:name" element={<PlanetsName />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
