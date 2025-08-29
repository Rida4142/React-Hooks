import React,{useState,useEffect} from 'react'

function IntervalCounter() {
    const [count,setCount]=useState(0)
    const tick=()=>{
        setCount(count+1)
    }
    useEffect(()=>{
        const Interval=setInterval(tick,1000)
        return()=>{
            clearInterval(Interval)
        }
    })
  return (
    <div>
      <h2>{count}</h2>
    </div>
  )
}

export default IntervalCounter
