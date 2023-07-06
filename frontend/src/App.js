import "./App.css";
import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./components/nav/NavBar";
import LogIn from "./components/auth/LogIn";
import ProductDashboard from "./components/products/ProductDashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "./redux/actions/authAction";
import SignUp from "./components/auth/SignUp";
import MainDash from "./components/MainDash/MainDash";
import RightSide from "./components/RigtSide/RightSide";
import Sidebar from "./components/Sidebar";
import test from "./components/test/test";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <div className="App">
        {auth.id ? (
          <div className="AppGlass">
            <div className="Sidebar">
              <Sidebar></Sidebar>
            </div>

            <div className="maindash">
              
              <BrowserRouter>
                <ToastContainer></ToastContainer>
                <Container maxWidth={false}>
                  <Container maxWidth={false}>
                    <Routes>
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/" element={<LogIn />} />
                      <Route path="/home" element={<ProductDashboard />} />
                      <Route path="/test" element={<test />} />
                    </Routes>
                  </Container>
                </Container>
              </BrowserRouter>
            </div>

            <div className="rightside">
              <RightSide></RightSide>
            </div>
          </div>
        ) : (
          <BrowserRouter>
            <ToastContainer></ToastContainer>
            <Container maxWidth={false}>
              <Container maxWidth={false}>
                <Routes>
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/" element={<LogIn />} />
                  <Route path="/home" element={<ProductDashboard />} />
                </Routes>
              </Container>
            </Container>
          </BrowserRouter>
        )}
      </div>
    </>
  );
}

export default App;
