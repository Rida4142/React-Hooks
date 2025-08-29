import React from 'react'
import { useState } from 'react'

function UseStateObject() {
    const [name,setName]=useState({firstname: '',lastname: ''})
  return (
    <div>
      <input type='text' value={name.firstname} onChange={(e)=>{
          setName({...name,firstname: e.target.value})
      }}></input>
      <input type='text' value={name.lastname} onChange={(e)=>{
        setName({...name,lastname: e.target.value})
      }}></input>
      <h2>Your First name is: {name.firstname}</h2>
      <h2> Your last name is:  {name.lastname}</h2>
    </div>
  )
}

export default UseStateObject
