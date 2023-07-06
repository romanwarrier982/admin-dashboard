import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import { logIn, loadUser } from "../../redux/actions/authAction";
import logo from "../../imgs/logo.png"
const LogIn = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(logIn(user.email, user.password));
    setTimeout(() => {
      dispatch(loadUser());
    }, 2000);
    navigate("/");
    setUser({ email: "", password: "" });
  };

  if (auth.id) return <Navigate to="/home"></Navigate>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row border justify-content-center">
          <div>
            <img src={logo}></img>
          </div>
          <div className="col-md-6  text-center p-2 m-2">
            <Typography variant="h5">Login as Admin</Typography>
            <TextField
              id="enter-email"
              label="Enter email"
              variant="outlined"
              fullWidth
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
            />
            <TextField
              id="enter-password"
              type="password"
              label="Enter password"
              variant="outlined"
              fullWidth
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
            />
            <Button variant="contained" color="primary" type="submit">
              Login
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default LogIn;
