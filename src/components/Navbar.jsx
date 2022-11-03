import React from 'react'
import {Link} from 'react-router-dom'
export const Navbar=()=> {
  return (
    <div style={{display:"flex",justifyContent:"space-between",backgroundColor:"#8D9EFF",height:"50px"}}>
      <Link to="/home" style={{color:"black", marginTop:"9px",marginLeft:"20px",fontFamily:"sans-serif",fontWeight:"900",margin:"auto",textDecoration:"none", color:"black",fontSize:"18px"}}>Home</Link>
      <div style={{display:"flex",width:"200px",marginLeft:"1300px",justifyContent:"space-between"}}>
      <Link  to="/admin" style={{fontFamily:"sans-serif",fontWeight:"900",margin:"auto",textDecoration:"none" ,color:"black",fontSize:"18px"}}>Sign In</Link>
      <Link  to="/log" style={{fontFamily:"sans-serif",fontWeight:"900",margin:"auto",textDecoration:"none", color:"black",fontSize:"18px"}}>Login </Link>
      </div>
    </div>
  )
}
