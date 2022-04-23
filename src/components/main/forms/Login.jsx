import React from 'react'
import './login.css'
import { useState } from 'react'

const Login = () => {
  const[formData, setFormData] = useState({email:'', 
  password:'', fireErrors:''})

   const handlechange = e => {
     setFormData(formData=>{
        return {...formData,
      [e.target.name]:e.target.value}
    })

  }
  return (
    <>
    <form action="">
<input type="text"
className='loginField'
placeholder='Email'
name='email'
onChange={handlechange}
/>
<input type="password"
className='loginField'
placeholder='Password'
name='password'
onChange={handlechange}
/>
<input type="submit" className='submitBtn' 
value='ENTER'
/>
    </form>
    
    
    </>
  )
}

export default Login