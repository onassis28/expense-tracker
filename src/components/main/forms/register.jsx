import React from 'react'
import './login.css'
import { useState } from 'react'
import Fire from '../../../config/Fire'

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
    

    const[formData, setFormData] = useState({email:'', 
    password:'', displayName:''})
    const[fireErrors, setFireErrors]=useState('')

     const handlechange = e => {
       setFormData(formData=>{
          return {...formData,
        [e.target.name]:e.target.value}
      })

    }

    
const register =(e)=>{
    e.preventDefault()
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({displayName:formData.displayName})
        
      })
      .catch((error) => {
         setFireErrors(error.message) 
        // ..
        console.log(error)
      })};


     
    
  return (
    <>
   {fireErrors && <div className='error'>{fireErrors}</div>}
    <form action="">
<input type="text"
className='loginField'
placeholder='Your name'
name='displayname'
onChange={handlechange}

/>
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
<input onClick={register} type="submit" className='submitBtn' 
value='REGISTER'
/>
    </form>
    
    
    </>
  )
}

export default Register