import PlanetsName from "./pages/PlanetsName";
import { Routes, Route, Navigate } from "react-router-dom";
import MainNavigation from "./components/MainNavigation";
import { useState } from "react";

function App() {
  const [screenSizeProp, setScreenSizeProps] = useState("md");
  return (
    <div className="reset ">
      <div className=" bg-image w-screen min-h-screen border border-red-500 ">
        <MainNavigation screenSizeProp={screenSizeProp} />

        <Routes>
          <Route path="/" element={<Navigate to="/main/mercury" />} />
          <Route
            path="/main/:name"
            element={<PlanetsName setScreenSizeProps={setScreenSizeProps} />}
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
