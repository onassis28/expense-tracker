import React from 'react'
import './main.css'
import { useState } from 'react'
import Login from './forms/Login'
import Register from './forms/register'
const Main = () => {

  const[user, setUser]= useState(1);
  const[loading, setLoading]=useState(true)
  const[render,setRender]=useState(false)
  const handleclick = ()=> setRender(render =>!render)
    return (
    <div className="mainBlock">

      {render ? <Register/>: <Login/>}
      <span className="underline">
{render? 'Registered?': 'Not Registered?'}
<button onClick={handleclick}>{render? 'Login': 'Click here to Register'}</button>


      </span>

    </div>
  )
}

export default Main