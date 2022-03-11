import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "../views/home";
import FAQ from "../views/FAQ";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}
