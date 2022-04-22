import React from 'react'
import './main.css'
import { useState } from 'react'
import Login from './forms/Login'
import Register from './forms/register'
const Main = () => {

  const[user, setUser]= useState(1);
  const[loading, setLoading]=useState(true)
    return (
    <div className="mainBlock">

      <Login/>
      <span className="underline">
Not Registered?
<button>click here to register</button>


      </span>

    </div>
  )
}

export default Main