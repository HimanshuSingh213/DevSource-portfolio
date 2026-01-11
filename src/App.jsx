import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Khushi from "./pages/Khushi";
import Atharv from "./pages/Atharv";

import Lead from "./pages/Khushi";
import Himanshu from "./pages/Himanshu"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />

      <Route path="/khushi" element={<Khushi />} />
      <Route path="/atharv" element={<Atharv />} />

      <Route path="/khushi" element={<Lead />} />
      <Route path="/Himanshu" element={<Himanshu />} />

    </Routes>
  );
}

export default App;
