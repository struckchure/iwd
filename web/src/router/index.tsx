import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../views/home";
import PlayGround from "../views/playground";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="playground" element={<PlayGround />} />
      </Routes>
    </BrowserRouter>
  );
}
