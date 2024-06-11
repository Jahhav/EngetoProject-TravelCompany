// Jan Havlát
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Api from "./pages/Api";
import "./pages/Api.css";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1>Neplatná URL adresa.</h1>
      <Link to="/" className="api-link">
        Home
      </Link>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api" element={<Api />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
