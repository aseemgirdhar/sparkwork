import * as React from "react";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

import GoogleIcon from '@mui/icons-material/Google';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import LoginIcon from '@material-ui/icons/VerifiedUserOutlined';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import SignUp from '@mui/icons-material/Login';
import "../login.sass";

const LoginButton = (props) => {
  
  return (
    
    <>
      
      <CardContent>
      
          <Button variant="contained" size="large">
            <GoogleIcon /> Sign in with Workspace
          </Button>
          <Button variant="contained" size="large">
            <LoginIcon /> Sign in with Azure
          </Button>
         
          <Button variant="contained" size="large"  onClick={() => props.data()}>
            <SupervisedUserCircleIcon /> Sign in with external account
          </Button>
          
          <Button variant="contained" size="large">
            <ConnectWithoutContactIcon /> Sign in with ADFS
          </Button>
          <div className="signup-divider">
            <span>OR</span>
          </div>
          <Button variant="contained" size="large">
            <SignUp /> signup
          </Button>
        
      </CardContent>
      
    </>
  );
};
export default LoginButton;
