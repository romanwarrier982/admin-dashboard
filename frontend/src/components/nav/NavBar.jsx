import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import {
  Button,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";

import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../redux/actions/authAction";
import { searchProduct } from "../../redux/actions/productAction";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(2),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

export default function NavBar() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const productList = useSelector((state) => state.products);
  const [searchKey, setSearchKey] = React.useState({
    searchKey: "",
  });

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };

  const handleBlur = (e) => {
    if (e.key === "Enter") {
      dispatch(searchProduct(searchKey));
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <Link style={{ color: "white", textDecoration: "none" }} to="/">
              📦📦 E-Shop 🛒 🛒
            </Link>
          </Typography>

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search… (Press Enter)"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) =>
                setSearchKey({ ...searchKey, searchKey: e.target.value })
              }
              onBlur={handleBlur}
              onKeyDown={handleBlur}
            />
          </Search>
          {auth.id ? (
            <>
              <Typography style={{ color: "white" }} variant="subtitle2">
                Logged in as {auth.name}
              </Typography>
              <Button edge="end" color="inherit" onClick={() => handleLogOut()}>
                <Link style={{ color: "white", textDecoration: "none" }} to="/">
                  log Out
                </Link>
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit">
                <Link style={{ color: "white", textDecoration: "none" }} to="/login">
                  LogIn
                </Link>
              </Button>
              <Button color="inherit">
                <Link style={{ color: "white", textDecoration: "none" }} to="/signup">
                  SignUp
                </Link>
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
