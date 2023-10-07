import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { Typography, TextField, Button } from "@mui/material";
import { logIn, loadUser, signUpUser } from "../../redux/actions/authAction";
import { UilUserPlus } from "@iconscout/react-unicons";
import UserList from "../../components/auth/UserList";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { getRoles } from "../../redux/actions/roleAction";
const SignUp = () => {
  const auth = useSelector((state) => state.auth);
  const roleList = useSelector((state) => state.roles);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
    name: "",
    role_id: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpUser(user.email, user.password, user.name, user.role_id));
    setTimeout(() => {
      dispatch(loadUser());
    }, 2000);

    // navigate("/");
    setUser({ email: "", password: "", name: " ", role_id: "" });
  };
  const [role, setRole] = useState("");

  const handleChange = (event) => {
    setRole(event.target.value);
    setUser({ ...user, role_id: event.target.value });
  };

  useEffect(() => {
    dispatch(getRoles());
  }, [dispatch]);

  // if (auth.id) return <Navigate to="/"></Navigate>;

  return (
    <>
      <form style={{background: 'white'}} onSubmit={handleSubmit}>
        <div className="row border justify-content-center">
          <div className="col-md-6  text-center p-2 m-2">
            <Typography variant="h5">
              <UilUserPlus></UilUserPlus>Add User
            </Typography>
            <TextField
              id="enter-name"
              label="Enter name"
              variant="outlined"
              fullWidth
              value={user.name}
              onChange={(e) => setUser({ ...user, name: e.target.value })}
              style={{ padding: "8px" }}
            />
            <TextField
              id="enter-email"
              label="Enter email"
              variant="outlined"
              fullWidth
              value={user.email}
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              style={{ padding: "8px" }}
            />
            <TextField
              id="enter-password"
              type="password"
              label="Enter password"
              variant="outlined"
              fullWidth
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              style={{ padding: "8px" }}
            />
            {user.role?.name}
            <Box sx={{ minWidth: 120 }}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={role}
                  label="Age"
                  onChange={handleChange}
                >
                  {roleList ? (
                    roleList.map((role) => (
                      <MenuItem value={role.id}>{role.name}</MenuItem>
                    ))
                  ) : (
                    <MenuItem value={1}>No Result Found</MenuItem>
                  )}
                </Select>
              </FormControl>
            </Box>
            <Button variant="contained" color="primary" type="submit">
              SignUp
            </Button>
          </div>
        </div>
      </form>

      <UserList></UserList>
    </>
  );
};

export default SignUp;
