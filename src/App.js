import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Help from "./pages/Help";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import APICalls from "./components/APICalls";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/help" element={<Help />} />
        </Routes>
      </BrowserRouter>
      <APICalls />
    </div>
  );
};

export default App;
