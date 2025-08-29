import React,{useState,useEffect} from 'react'

function HookMouse() {
    const [X,setX]=useState(0)
    const [Y,setY]=useState(0)
    const mousePosition=(e)=>{
        
        setX(e.clientX)
        setY(e.clientY)
    }
    useEffect(()=>{
        console.log("Effect in hooks")
        window.addEventListener('mouseover',mousePosition)
    },[])
  return (
    <div>
      <h2>Hook X-{X}, Y-{Y}</h2>
    </div>
  )
}

export default HookMouse
