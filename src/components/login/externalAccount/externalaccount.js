import * as React from "react";
import AccountCircle from "@mui/icons-material/AccountCircle";
import CardContent from "@mui/material/CardContent";
import FormControl from "@mui/material/FormControl";
import PasswordIcon from "@mui/icons-material/Password";
import Input from "@mui/material/Input";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import "../login.sass";




const Externalaccount = () => {
  
    
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });


  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const login = async () => {
    let url = 'https://dev-api.sparkworksoftware.com/api/login'
    await fetch(url)
    
  }
  return (
    <CardContent>
      <FormControl fullWidth sx={{ mt: 3 }} variant="standard">
        <Input
          placeholder="Username or Password"
          startAdornment={
            <InputAdornment position="start">
              <AccountCircle sx={{ color: "action.active" }} />
            </InputAdornment>
          }
        />
      </FormControl>

      <FormControl fullWidth sx={{ mt: 3, mb: 5 }} variant="standard">
        <Input
          placeholder="Password"
          type={values.showPassword ? "text" : "password"}
          value={values.password}
          onChange={handleChange("password")}
          startAdornment={
            <InputAdornment position="start">
              <PasswordIcon sx={{ color: "action.active" }} />
            </InputAdornment>
          }
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
        />
      </FormControl>

      <Button variant="contained" size="large" onClick={login}>
        <LoginIcon /> Login
      </Button>

      <div className="back-forgot">
        <Button size="small"> <ArrowBackIcon /> Back</Button>
        <Button size="small"><VpnKeyIcon /> Forgot Password</Button>
      </div>
    </CardContent>
  );
};
export default Externalaccount;
