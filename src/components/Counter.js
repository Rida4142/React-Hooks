import React, { useState } from 'react'
import UseState from './UseState'

function Counter() {
    const initialCount=0
    const [count,setCount]=useState(initialCount)

    const IncrementFive=()=>{
        for(let i=0;i<5;i++){
            setCount(prevState=> prevState+1)
        }
    }
  return (
    <div>
      <h2>Count {count}</h2>
      <button onClick={()=>
        setCount(prevState=> prevState+1)
      }>Increment</button>

       <button onClick={()=>
        setCount(prevState=> prevState-1)

      }>Decrement</button>

       <button onClick={()=>
        setCount(initialCount)
      }>Reset</button>

       <button onClick={IncrementFive
      }>Increment Five times</button>
    </div>

  )
}

export default Counter
