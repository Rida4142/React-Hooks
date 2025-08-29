import React,{use, useEffect,useState} from 'react'

function UseEffect() {
    const [count,setCounter]=useState(0)
    const [name,setName]=useState('')
    useEffect(()=>{
        console.log("Running use effect...")
        document.title=`You clicked ${count} times`
    },[count])
  return (
    <div>
        <input type='text' value={name} onChange={(e)=>setName(e.target.value)}></input>
      <button onClick={()=>{
        setCounter(count+1)
      }}> Clicked {count} times</button>
    </div>
  )
}

export default UseEffect
