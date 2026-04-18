import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Header from "./Components/Header";
import Dashboard from "./Components/Dashboard";

const App = () => {
  return (
    <Router>
      

      <Routes>
        <Route path="/" element={<Header/>} /> 
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;