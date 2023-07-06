import React, { useState } from "react";
import "./Sidebar.css";
import { BrowserRouter, Link } from "react-router-dom";
import Logo from "../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Button } from "@mui/material";

const Sidebar = () => {
  const [selected, setSelected] = useState(0);

  const [expanded, setExpaned] = useState(true)

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  }
  console.log(window.innerWidth)
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
        {/* <span>
          IT<span>Asset</span>Management
        </span> */}
      </div>

      <div className="menu">
        {SidebarData.map((item, index) => {
          return (
                 
                
            <Link
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
       
      </div>
     
    </motion.div>
    </>
  );
};

export default Sidebar;
