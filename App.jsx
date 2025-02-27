import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import CarDetails from "./pages/CarDetails";
import CustomNavbar from "./components/Navbar";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        {/* <Route path="/car/:id" element={<CarDetails />} />   */}
      </Routes>
      <Footer />  {/* 👈 Add Footer here */}
    </Router>
  );
};

export default App;
