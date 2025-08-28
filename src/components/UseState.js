import React from 'react'
import { useState } from 'react'

function UseState() {
    const [count,Increment]=useState(0)
  return (
    <div>
      <button onClick={()=>{
        Increment(count+1)
      }}>Count {count} times</button>
    </div>
  )
}

export default UseState
