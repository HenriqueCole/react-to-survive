import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import WelcomePage from "./Pages/WelcomePage";
import Scenary1Page from "./Pages/Scenary1Page";
import Scenary2Page from "./Pages/Scenary2Page";
import Scenary3Page from "./Pages/Scenary3Page";
import RankingPage from "./Pages/RankingPage";

import { AnimatePresence } from "framer-motion";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AnimatePresence>
      <Routes>
        <Route path="*" element={<Navigate to="/welcome" />} />
        <Route path="/welcome" element={<WelcomePage />} />
        <Route path="/phase-one" element={<Scenary1Page />} />
        <Route path="/phase-two" element={<Scenary2Page />} />
        <Route path="/phase-three" element={<Scenary3Page />} />
        <Route path="/ranking" element={<RankingPage />} />
      </Routes>
    </AnimatePresence>
  </BrowserRouter>
);
