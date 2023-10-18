import React, { useState } from "react";
import "./Sidebar.css";
import { BrowserRouter, Link, useNavigate } from "react-router-dom";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../redux/actions/authAction";


const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)
 
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = useSelector((state) => state.auth);
  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(auth)

  const handleLogOut = () => {
    dispatch(logOut());
    navigate("/");
  };
  return (
    
    <>
      <div className="bars" style={expanded?{left: '60%'}:{left: '5%'}} onClick={()=>setExpaned(!expanded)}>
        <UilBars />
      </div>
    <motion.div className='sidebar'
    variants={sidebarVariants}
    animate={window.innerWidth<=768?`${expanded}`:''}
    >
      
      {/* logo */}
      <div className="logo">
        <img src={Logo} alt="logo" />
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          
         return (
                 
                
          item.roles.includes(auth.userData.role.id) && <Link
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => setSelected(index)}
              to={item.link}
              style={{ color:"black" , textDecoration: "none" }}
            >
              
              <item.icon />
                <span>{item.heading}</span>
               
            </Link>
           
          );
        })}
        {/* signoutIcon */}
        <div className="menuItem">
          
          <Link  style={{ color:"black" , textDecoration: "none" }} to='/test'> <UilSignOutAlt /></Link>

      
         
        </div>
        {auth?.id && (
            <>
            
              <Typography style={{ color: "black" }} variant="subtitle2">
                Logged in as {auth.name}-{auth.userData.role.name}
              </Typography>
              <Button  edge="end" color="inherit" onClick={() => handleLogOut()}>
                <Link style={{ color: "white", textDecoration: "none" }} to="/">
                  log Out
                </Link>
              </Button>
            </>
        )}
       
      </div>
     
    </motion.div>
    </>
  );
};

export default Sidebar;
