import React from "react";

import Home from "./Home";
import NavbarHome from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Summary from "./Summary";

const App = () => (
  <>
    <NavbarHome />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/summary" element={<Summary />} />
    </Routes>
  </>
);

export default App;
