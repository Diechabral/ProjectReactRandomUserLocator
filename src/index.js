import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import App from "./pages/App";
import Map from "./pages/Map";


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>


    , document.getElementById("root"));
