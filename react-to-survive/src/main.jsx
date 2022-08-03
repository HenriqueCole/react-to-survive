import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import WelcomePage from "./Pages/WelcomePage";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<WelcomePage/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
