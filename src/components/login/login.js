import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import "./login.sass";
import logo from "../assets/images/logo.png";
import Externalaccount from './externalAccount/externalaccount'
import LoginButton from "./loginbutton/loginbutton";

import CardActions from "@mui/material/CardActions";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const Login = () => {

  const [external, setExternal] = React.useState(false)
  
  const showComponent = () => {
   
    setExternal(true)
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className="login-wrapper">
      <Card sx={{ maxWidth: 520, minWidth: 520 }}>
      <img src={logo} />
      <div className="login-description">Hi, My Name is Aseem.</div>
        
      {external ? <Externalaccount /> : <LoginButton data={showComponent} /> }
        
      <CardActions>
        <Button size="small">Terms & Conditions</Button>
        <Button size="small">Privacy Policy</Button>
        <div className="login-lang-dropdown">
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            EN
          </Button>
          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "fade-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem>Svenska</MenuItem>
            <MenuItem>Suomi</MenuItem>
            <MenuItem>Deutsch</MenuItem>
            <MenuItem> Español </MenuItem>
          </Menu>
        </div>
      </CardActions>
      </Card>
     
    </div>
  );
};
export default Login;
