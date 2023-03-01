import React from 'react'

function Signup() {
  return (
    <div className='signup-form'>
        <div className='form-box'>
            <div className='form-value'>
                <form action=''>
                    <h2>Sign up</h2>
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
                        {/* <a  className='forgotlink' href='#'>Forgot password?</a> */}
                    </div>
                    <button type='submit'>Register Free</button>
                    <div className='register'>
                        <p>Don't have an account? <a href='#'> Log in</a> </p>
                    </div>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default Signup
