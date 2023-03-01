import React from 'react'

function Login() {
  return (
    <div className='login-section'>
        <div className='form-box'>
            <div className='form-value'>
                <form action=''>
                    <h2>Login</h2>
                    <div className='inputbox'>
                        <ion-icon name="mail-outline"></ion-icon>
                        <input type='email' required/>
                        <label for=''>Email</label>
                    </div>
                    <div className='inputbox'>
                        <ion-icon name="lock-closed-outline"></ion-icon>
                        <input type='password' required/>
                        <label for=''>Password</label>
                    </div>
                    <div className='forget'>
                        <label for=''><input type='checkbox'></input>Remember me?</label>
                        <a  className='forgotlink' href='#'>Forgot password?</a>
                    </div>
                    <button type='submit'>Login</button>
                    <div className='register'>
                        <p>Don't have an account? <a href='#'>register</a> </p>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Login
