
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../Login/Login";
import Signup from "../Signup/Signup";
import Nav from "../ui/Nav/Nav";
import "./Home.module.css";
//
const Home = () => {
  return (
    <React.Fragment>
      <Nav />
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default Home;
