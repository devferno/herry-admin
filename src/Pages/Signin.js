import {useState} from "react";
import { Container, Box, Button, Typography, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const Signin = () => {
  const formStyle = {
    display: "flex",
    p: 4,
    mx: "auto",
    maxWidth: "500px",
    border: "1px solid #ddd",
    my: 6,
    flexDirection: "column",
    justifyContent: "space-around",
  };
  const inputStyle = { my: 1 };
  const buttonStyle = { my: 2 };

  const [admin,setAdmin]=useState({});
  const handleChange=e=>{
      const {name,value} = e.target;
      setAdmin(prev=>({...prev,[name]:value}));
  }
  const navigate = useNavigate();
  const handleSubmit=e=>{
      e.preventDefault();
      axios.post("/admin/signin",admin).then(res=>{localStorage.setItem("access-admin",res.data.access);navigate("/")}).catch(err=>console.log(err));
  }
  return (
    <Container>
      <Box component="form" onSubmit={handleSubmit} sx={formStyle}>
        <Typography variant="h4" sx={{ my: 2 }}>
          Sign in
        </Typography>
        <TextField
          variant="outlined"
          sx={inputStyle}
          label="login"
          type="text"
          name="login"
          value={admin.login}
          onChange={handleChange }
        />
        <TextField
          variant="outlined"
          name="password"
          value={admin.password}
          onChange={handleChange}
          sx={inputStyle}
          label="password"
          type="password"
        />
        <Button variant="contained" type="submit" disableElevation sx={buttonStyle}>
          Sign in
        </Button>
      </Box>
    </Container>
  );
};

export default Signin;
