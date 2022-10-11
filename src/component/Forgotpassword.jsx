import React from 'react'
import './Forgotpassword.css';

export default function forgotpassword() {
  return (
    <div className='logInContainer'>
    <h1>Recover your password</h1>
    <div className="cardContainer">
        <div className="cardItems">
            <form action="" className='form'>
                <label htmlFor="email" className='email'>enter your email id:</label> <br />
                <input type="email" id='email' className='userInput'/><br/>
            </form>
            <button className='button'>
                Generate OTP
            </button>
        </div>
    </div>
    
</div>
  )
}
