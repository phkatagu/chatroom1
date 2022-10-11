import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login-page.css'
function Login() {
    const navigate = useNavigate();
        const goTo = () => {
            navigate('/main-page')
        }
  return (
    <div className='logInContainer'>
        <h1>LogIn here</h1>
        <div className="cardContainer">
            <div className="cardItems">
                <form action="" className='form'>
                    <label htmlFor="userName" className='userName'>User name:</label> <br />
                    <input type="text" id='userName' className='userInput'/><br />
                    <label htmlFor="pasword"className='userPassword'>Password:</label> <br />
                    <input type="password" className='userInput'/>
                </form>
                <div className='fPass'>
                <Link to="/Forgotpassword" className='forgotPass'>Forgot Password</Link>
                    <a href="" className='newUser'>New User?</a>
                </div>
                <button className='button' onClick={goTo}>
                    Sign In
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default Login;
