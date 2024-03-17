import React from "react";

import Home from "./Home";
import NavbarHome from "../components/Navbar";
import { Route, Routes } from "react-router-dom";
import Payment from "./Payment";

const App = () => (
  <>
    <NavbarHome />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  </>
);

export default App;
