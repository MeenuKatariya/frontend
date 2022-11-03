import { joinPaths } from '@remix-run/router'
import React, { useState } from 'react'
import { useEffect } from 'react'
import { Button } from '@mui/material'
export const UserTest=()=> {
 const [d,sd]=useState(5)
 const [ans,setanser]=useState(0)
 const [q,sq]=useState('')
 const [dis,sds]=useState('none')


  const getData = async()=>{
    if(d==10){
      alert('your reached at top')
      return
    }
    if(d==1){
      alert('your reached at bottom')
      return
    }
    if(q.ques){
      if(q.ques.correctAnswer[0]==ans){
       let k=d
        if(d<10)
        sd(k+1)
      }else{
        let k =d
        if(d>2){
          sd(k-1)
        }
      }

    }
    console.log(d)
    let data=await fetch("https://quiz-making-app.vercel.app/ques",{
     method:'POST',
     body:JSON.stringify({
     d:d
      }),
     headers:{"Content-Type":"application/json"}
    })
    .then(a=>a.json()).then(a=>{ 
      console.log(a)
      sq(a)})
  
  


  }

useEffect(()=>getData(),[])

const sai=(x)=>{
  return(
    <><div>
    <h2> Question : {x.questions}</h2>
    {/* <h4>Options</h4> */}
      <div>
      <ul>
      <Button variant="contained" onClick={ ()=>setanser(0)} >{x.answers[0]}</Button><br /><br />
      <Button variant="contained" onClick={()=>setanser(1)}>{x.answers[1]}</Button><br/><br />
      <Button variant="contained" onClick={()=>setanser(2)}>{x.answers[2]}</Button><br/><br />
      <Button variant="contained" onClick={()=>setanser(3)}>{x.answers[3]}</Button>
    </ul>
      </div>
    </div>
    </>
  )
}


  return (
    <div>


      {
        q.ques?sai(q.ques):'Loading'
      }

    {console.log(ans)}

    <p style={{'display':dis}}>{q.ques?q.ques.correctAnswer[0]==ans?'Correct':'Wrong':''}</p>
      {/* <p>{JSON.stringify(q)}</p> */}
      <Button variant="outlined"  onClick={()=>dis=='block'?sds('none'):sds("block")}> Check</Button>
      <Button variant="outlined" style={{marginLeft:"60px"}} onClick={getData}>Next</Button>
    </div>
  )
}
