import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import { logIn, loadUser, signUpUser } from "../../redux/actions/authAction";
const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(user.email, user.password, user.name));
    setTimeout(() => {
      dispatch(loadUser());
    }, 2000);

    navigate("/");
    setUser({ email: "", password: "", name: " " });
  };

  if (auth.id) return <Navigate to="/"></Navigate>;

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row border justify-content-center">
          <div className="col-md-6  text-center p-2 m-2">
            <Typography variant="h5">Signup as Admin</Typography>
            <TextField
              id="enter-name"
              label="Enter name"
              variant="outlined"
              fullWidth
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
            />
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
              SignUp
            </Button>
          </div>
        </div>
      </form>
    </>
  );
};

export default SignUp;
