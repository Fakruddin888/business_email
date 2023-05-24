import React, { useState } from 'react'
import "../ForgotPassword.css"
const ForgotPassword = () => {
  const[show,setShow]=useState(false)
  return (
 
      <>
      <div className='main-container'>
        <div className='forget-container'>
        <div className='image-lock'>
          <img src='https://media.istockphoto.com/id/1389861467/photo/lock-with-a-safe-handle.jpg?b=1&s=170667a&w=0&k=20&c=bH_vuHuE_g965O3-ayUvucVBePtvyccHX-Ghq_QXmNU='/>
        </div>
         <div className='contant'>
          <h3>FORGOT</h3>
          <h5>YOUR PASSWORD</h5>
          <p>Not to worry we got you! Let's get you a new password</p>
         </div>
         <div className='input-forget'>
         {
         show?<input type='email' placeholder='enter your email '/>:null
         } 
         {

         }
         
         <div className='btn-reset' onClick={()=>setShow(!show)}>{!show? "Reset Password":"Send OTP"}</div>
         
        </div>
        </div>
        
        </div>
      
      </>
    
  )
}

export default ForgotPassword;