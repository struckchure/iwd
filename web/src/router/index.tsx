import { BrowserRouter, Route, Routes } from "react-router-dom";
import FAQ from "../layouts/FAQ";

import Home from "../views/home";
import Accordion from "../components/Accordion";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="accordion" element={<Accordion />} />
        <Route path="faq" element={<FAQ />} />
      </Routes>
    </BrowserRouter>
  );
}
