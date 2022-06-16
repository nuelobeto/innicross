import "./App.css";

import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Marketing } from "./pages/Marketing/Marketing";
import { Contact } from "./pages/Contact/Contact";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="marketing" element={<Marketing />} />
      <Route path="contact" element={<Contact />} />
    </Routes>
  );
};
