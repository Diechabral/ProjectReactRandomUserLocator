import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./pages/App";
import Map from "./pages/map";


ReactDOM.render(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/locate" element={<Map />} />
    </Routes>
  </BrowserRouter>, 
document.getElementById("root"));
