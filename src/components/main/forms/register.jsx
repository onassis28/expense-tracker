import React from 'react'
import './login.css'
import { useState } from 'react'

const Login = () => {
    const[email, setEmail]= useState('')
    const[password, setPassword]=useState('')
    const [displayName, setDisplayName]=useState('')
    const [fireErrors,setFireErrors]=useState('')
  return (
    <>
    <form action="">
<input type="text"
className='loginField'
placeholder='Your name'
name='name'
/>
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
value='REGISTER'
/>
    </form>
    
    
    </>
  )
}

export default Login