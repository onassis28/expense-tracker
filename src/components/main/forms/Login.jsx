import React from 'react'
import './login.css'
import { useState } from 'react'

const Login = () => {
    const[email, setEmail]= useState('')
    const[password, setPassword]=useState('')
    const [fireErrors,setFireErrors]=useState('')
  return (
    <>
    <form action="">
<input type="text"
className='loginField'
placeholder='Email'
name='email'
/>
<input type="password"
className='loginField'
placeholder='Password'
name='password'
/>
<input type="submit" className='submitBtn' 
value='ENTER'
/>
    </form>
    
    
    </>
  )
}

export default Login