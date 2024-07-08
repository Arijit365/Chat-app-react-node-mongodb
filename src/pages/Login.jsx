import React , {useState} from 'react';
import {Avatar, Button, Container,IconButton,Paper, Stack, TextField, Typography} from '@mui/material';
import {CameraAlt} from '@mui/icons-material'

export default function Login() {

  const [isLogin , setIsLogin] = useState("true");

  const toggleLogin = () => setIsLogin((prev) => !prev );
  return (
    <Container component={"main"} maxWidth={"xs"} sx={{
      height:"100vh",
      display:"flex",
      alignItems:"center",
      justifyContent:"center"
    }}>
<Paper
elevation={3}
sx={{
  padding:4,
  display:"flex",
  flexDirection:"column",
  alignItems:"center"
}
}
>
{
  isLogin?
  <>
  {/* Create a Login Form */}
  <Typography variant='h5'> Login  </Typography>
  <form style={{
    width:"100%",
    marginTop:"1rem",

  }}>
    <TextField 
    required 
    fullWidth
    label="Username"
    margin="normal"
    variant="outlined"
    />
    <TextField 
    required 
    fullWidth
    label="Password"
    margin="normal"
    variant="outlined"
    />
    <Button
    sx={{
      margin:"1rem"
    }}
    variant="contained"
    color="primary"
    type="submit"
    fullWidth
    >
      Login
    </Button>
    <Typography textAlign="center" m="1rem">OR</Typography>
    <Button
    variant="contained"
    color="primary"
    type="submit"
    fullWidth
    onClick={toggleLogin}
    >
      Register Instead
    </Button>
  </form>
  </> : <>
  {/* Create Registration page  */}
  <Typography variant='h5'> Register  </Typography>
  <form style={{
    width:"100%",
    marginTop:"1rem",

  }}>
    <Stack position="relative" width="10rem" margin="auto">
<Avatar sx={{
  width:"10rem",
  height:"10rem",
  objectFit:"contain"
}}/>
<IconButton>
  <>
  <CameraAlt/>
  </>
</IconButton>
    </Stack>

    <TextField 
    required 
    fullWidth
    label="Name"
    margin="normal"
    variant="outlined"
    />
    <TextField 
    required 
    fullWidth
    label="Username"
    margin="normal"
    variant="outlined"
    />
    <TextField 
    required 
    fullWidth
    label="Bio"
    margin="normal"
    variant="outlined"
    />
    <TextField 
    required 
    fullWidth
    label="Password"
    margin="normal"
    variant="outlined"
    />
    <Button
    sx={{
      margin:"1rem"
    }}
    variant="contained"
    color="primary"
    type="submit"
    fullWidth
    >
      Sign Up
    </Button>
    <Typography textAlign="center" m="1rem">OR</Typography>
    <Button
    variant="contained"
    color="primary"
    type="submit"
    fullWidth
    onClick={toggleLogin}
    >
      Login Instead
    </Button>
  </form>
  </>
}
</Paper>
    </Container>
  )
}
