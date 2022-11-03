import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Admin } from './AdminRegister';
import { useNavigate } from 'react-router-dom';
export const AdminLogin=()=> {
    const navigate=useNavigate()
//   const[username,setUserName]=React.useState("")
  const[email,setEmail]=React.useState("")
  const[password,setPassword]=React.useState("")


  const getData = async()=>{
    if(email.length=="" && password.length=="" ){
      alert("Enter Correct Details")
    }else{
   let data=await fetch("https://quiz-making-app.vercel.app/log",{
    method:'POST',
    body:JSON.stringify({

    'email':email,
    'pass':password


    }),
    headers:{"Content-Type":"application/json"}
   })
   let result = await data.json()
  
      if(result.admin==true){
        navigate("/ques")
      }else{
         navigate("/test")
      }
    }
   
}




  return (
    <div style={{backgroundColor:"#B3FFAE", height:"680px"}}>
        {/* <TextField
          required
          id="outlined-required"
          label="UserName"
          value={username}
          onChange={(e)=>setUserName(e.target.value)}
        />
        <br />
        <br /> */}
        <TextField
          required

          id="outlined-required"
          label="Email"
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <br />
        <br />
        <TextField
          required
          id="outlined-required"
          label="Password"
          type="password"
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
          
        />
        <br />
        <br />
        <Button onClick={getData} variant="contained">Login</Button>
       
    </div>
  )
}
