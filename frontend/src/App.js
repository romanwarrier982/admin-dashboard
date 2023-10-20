import "./App.css";
import React, { useEffect } from "react";
import { Container } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";

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
import Test from "./components/test/test";
import RoleForm from "./components/Role/RoleForm.jsx";

function App() {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <ToastContainer></ToastContainer>
        <div className="App">
          {auth.id ? (
            <div className="AppGlass">
              <div className="Sidebar">
                <Sidebar></Sidebar>
              </div>

              <div className="maindash">
                <Container maxWidth={false}>
                  <Container maxWidth={false}>
                    <Routes>
                      <Route path="/signup" element={<SignUp />} />
                      <Route path="/" element={<LogIn />} />
                      <Route path="/home" element={<MainDash />} />
                      <Route path="/asset" element={<ProductDashboard />} />
                      <Route path="/test" element={<Test></Test>} />
                      <Route path="/roles" element={<RoleForm></RoleForm>} />
                      
                    </Routes>
                  </Container>
                </Container>
              </div>

              <div className="rightside">
                <RightSide></RightSide>
              </div>
            </div>
          ) : (
            <Container maxWidth={false}>
              <Container maxWidth={false}>
                <Routes>
                  <Route path="/signup" element={<SignUp />} />
                  <Route path="/" element={<LogIn />} />
                  <Route path="/home" element={<ProductDashboard />} />
                </Routes>
              </Container>
            </Container>
          )}
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
