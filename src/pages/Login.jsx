import React , {useState} from 'react';
import {Container,Paper, Typography} from '@mui/material';


export default function Login() {

  const [isLogin , setIsLogin] = useState("true");


  return (
    <Container component={"main"} maxWidth={"sx"}>
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
  <form>
    
  </form>
  </> : <span> Register </span>
}
</Paper>
    </Container>
  )
}
