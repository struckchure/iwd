import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/home";
import Accordion from "../components/Accordion";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="accordion" element={<Accordion />} />
      </Routes>
    </BrowserRouter>
  );
}
