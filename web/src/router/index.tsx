import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/home";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
