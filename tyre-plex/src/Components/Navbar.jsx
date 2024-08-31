import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsStaggered } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faCar,
  faMotorcycle,
  faGauge,
  faTruck,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { Box, ListItemIcon } from "@mui/material";

const Navbar = () => {
  const [open, setOpen] = React.useState(false);

  // Menu Open/Close function
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const loginPage = () => {
    window.location.href = "https://www.tyreplex.com/login"
  }

  // Menu Icon List
  const menuIcons = [
    faCar,
    faMotorcycle,
    faGauge,
    faTruck,
    faEllipsisVertical,
    faUser,
  ];

  // Menu Sidebar
  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {[
          "Car Tyres",
          "Bike Tyres",
          "Tyre Pressure",
          "Commercial Tyres",
          "Accessories",
          "More",
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <FontAwesomeIcon icon={menuIcons[index]} />
              </ListItemIcon>
              <ListItemText primary={text} style={{marginLeft:"-20px"}} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemText primary="Login/Signup" />
            </ListItemButton>
          </ListItem>
      </List>
      <Divider/>
      <Box className="p-2">
        <img src="https://cdn.tyreplex.net/themes/moonlight/images/banner-hm.jpg" alt="menu banner" />
      </Box>
    </Box>
  );

  return (
    <div className="flex p-4 justify-between sticky top-0 bg-white z-10 border border-black">
      <div className="flex items-center">
        <div className="lg:hidden mr-3">
          <button onClick={toggleDrawer(true)}>
            <FontAwesomeIcon icon={faBarsStaggered} className="w-8 h-8" />
          </button>
          <Drawer open={open} onClose={toggleDrawer(false)}>
            {DrawerList}
          </Drawer>
        </div>
        <img
          className="px-2 w-24 sm:w-32 lg:w-36"
          src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-60"
          alt="tyre plex logo" 
        />
      </div>
      <div className="menu hidden lg:block w-2/3 text-center">
        <ul className="font-md text-lg flex gap-7">
          <li className="hover:text-red-500 hover:cursor-pointer">
          Car Tyres
        </li>
        <li className="hover:text-red-500 hover:cursor-pointer">Bike Tyres</li>
          <li className="hover:text-red-500 hover:cursor-pointer">Tyre Pressure</li>
          <li className="hover:text-red-500 hover:cursor-pointer">Commercial Tyres</li>
          <li className="hover:text-red-500 hover:cursor-pointer">Accessories</li>
          <li className="hover:text-red-500 hover:cursor-pointer">More</li>
        </ul>
      </div>
      <div className="flex items-center gap-2 hover:cursor-pointer">
        <FontAwesomeIcon
          icon={faUser}
          className="w-8 h-8 hover:cursor-pointer"
          onClick={loginPage}
        />
        <span className="text-lg hidden lg:block">Login</span>
      </div>
    </div>
  );
};

export default Navbar;
