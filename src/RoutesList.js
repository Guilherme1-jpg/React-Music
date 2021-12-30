import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Music } from "./pages/Music";
import { Favorite } from "./pages/Favorite";
import { Help } from "./pages/Help";

import Sidebar from "./components/Sidebar/Sidebar";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/music" element={<Music />} />
      <Route path="/favorite" element={<Favorite />} />
      <Route path="/help" element={<Help />} />
    </Routes>
  );
};
