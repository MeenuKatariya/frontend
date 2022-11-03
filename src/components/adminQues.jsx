import React from 'react'
import { Button,Input } from '@mui/material'
export const AdminQues=()=> {
    const [showQues,setShowQues] = React.useState("")
    const [q,sq]=React.useState('')
    const [d,sd]=React.useState('')
    const [a,sa]=React.useState('')
    const [b,sb]=React.useState('')
    const [c,sc]=React.useState('')
    const [e,se]=React.useState('')
    const [ans,sans]=React.useState([])
    const [cans,csans]=React.useState([])
    const getQues=async()=>{
        let data=await fetch("https://quiz-making-app.vercel.app/",{
            method:"post",
            body:JSON.stringify({
              "questions":q,
              "answers":[a,b,c,e],
              "diffcultyLevel":d,
              "correctAnswer":cans
          
          
          }),
            headers:{"Content-Type":"application/json"}
        })
        let result=await data.json()
         console.log(result)
         sq("")
         sd("")
         sans("")
  
         sa("")
         sb("")
         sc("")
         se("")
    }
    

    const postQues = async()=>{
        let data=await fetch("")
    }

    React.useEffect(()=>{
        // getQues()
    })
  return (
    <div style={{marginTop:"10px", height:"500px"}}>
       
        <div style={{display:"flex" ,justifyContent:"space-between", width:"500px", margin:"Auto"}}>
        <Button variant="contained"> Add Question</Button>
        <Input  placeholder='Add Question' onChange={(e)=>sq(e.target.value)} />
        </div>
        <br />
       
      
        
        
         <div style={{display:"flex" ,justifyContent:"space-between", width:"500px", margin:"Auto"}} >
         <Button  variant="contained"> Difficulty Level</Button>
         <Input placeholder="Add Level" onChange={(e)=>{
          sd(e.target.value)
        }}
        />
         </div>
        <br />
        <div style={{display:"flex" ,justifyContent:"space-around", width:"1000px",marginLeft:"520px"}}>
         <Button variant="contained"> Add Options</Button>
        <Input style={{marginLeft:"120px"}} placeholder="Option 1" onChange={(e)=>{
          sa(e.target.value )
        }}
        />
         <Input style={{marginLeft:"20px"}} placeholder="Option 2" onChange={(e)=>{
          sb(e.target.value )
        }}
        /> <Input style={{marginLeft:"20px"}} placeholder="Option 3" onChange={(e)=>{
          sc(e.target.value )
        }}
        /> <Input style={{marginLeft:"20px"}}placeholder="Option 4" onChange={(e)=>{
          se(e.target.value )
        }}
        />
         </div>
         <br />
         <br />
          <div style={{display:"flex" ,justifyContent:"space-between", width:"500px", margin:"Auto"}}>
          <Button  variant="contained">Correct Option</Button>
        <Input   placeholder="Correct Answer" onChange={(e)=>csans([e.target.value])} />

          </div>
          
        <Button style={{marginLeft:"600px",marginTop:"-60px"}} variant="contained" onClick={getQues}>Add</Button>

        
    </div>
  )
}
