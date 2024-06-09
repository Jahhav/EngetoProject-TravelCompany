// Jan Havlát
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Api from "./pages/Api";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/transport-company-project" element={<Home />} />
        <Route path="/api" element={<Api />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
