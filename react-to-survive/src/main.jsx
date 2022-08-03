import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import WelcomePage from "./Pages/WelcomePage";
import Scenary1Page from "./Pages/Scenary1Page";

import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence>
        <Routes>
          <Route path="*" element={<Navigate to="/welcome" />} />
          <Route path="/welcome" element={<WelcomePage />} />
          <Route path="/phase-one" element={<Scenary1Page />} />
        </Routes>
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
