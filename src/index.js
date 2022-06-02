import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./pages/App";
import Map from "./pages/Map";


ReactDOM.render(
    <App />


    , document.getElementById("root"));

// const root = ReactDOM.createRoot(
//     document.getElementById("root")
// );
// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />}></Route>
//             <Route path="/map" element={<Map />}></Route>
//         </Routes>
//     </BrowserRouter >
// );
