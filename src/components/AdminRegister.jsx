import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
export const Admin=()=> {
  const navigate=useNavigate()
  const[username,setUserName]=React.useState("")
  const[email,setEmail]=React.useState("")
  const[password,setPassword]=React.useState("")
  const [a,ad]=React.useState(false)
  const postData = async()=>{
    let user={
      username:username,
      email:email,
      pass:password,
      admin:a
      
    }
    
    if(user){
      if(username.length==""){
        alert("Enter User Name")

      }else if(email.length=="" && email.length=="@gmail.com"){
        alert("Enter Email")
      }else if(password.length==""){
        alert("Enter Password")
      }
      let data =await fetch ("https://quiz-making-app.vercel.app/user",{
        method:"post",
        body:JSON.stringify(user),
        headers:{"Content-Type":"application/json"}
  
    })
  }
    if(username,email,password){
      navigate("/log")
    }else{
      navigate("/admin")
    
    }
    
   
    
}




  return (

    <div style={{height:"900px",backgroundColor:"pink"}}>
       
        <TextField
          required
          id="outlined-required"
          label="UserName"
          value={username}
          marginTop="10"
          onChange={(e)=>setUserName(e.target.value)}
        />
        <br />
        <br />
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
          value={password}
          type="password"
          onChange={(e)=>setPassword(e.target.value)}
          
        />
        <br />
        <br />

    <select style={{height:"30px",width:"230px", borderRadius:"7px"}} onChange={(e)=>ad(e.target.value)}>
      <option value='false'>user</option>
      <option value='true'>Admin</option>
    </select>
    <br />
    <br />
      
        <Button onClick={postData} variant="contained">Register</Button>
       
    </div>
  )
}
