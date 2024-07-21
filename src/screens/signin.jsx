import React from 'react'
import { Link } from 'react-router-dom';
import "../styles/signin.scss";

const Signin = () => {

  const handleSignInClick = () => {
    const container = document.querySelector('.container');
    container.classList.remove('right-panel-active');
  };

  const handleSignUpClick = () => {
    const container = document.querySelector('.container');
    container.classList.add('right-panel-active');
  }

  const signupFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log("signup data", email, password)
  }

  const signinFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    console.log("signin data", email, password)
  }

  return (
    <div className='wrapper'>
      <div className='container right-panel-active'>

        {/* SignUp */}
        <div className='form-container signup-container'>
          <form onSubmit={signupFormSubmit} action="" id='form1' className='form'>
            <h2 className='heading'>Sign Up</h2>
            <Link to="/private" className='button1'>Business Account</Link>
            <Link to="/private" type='submit' className='button2'>Private Account</Link>
          </form>
        </div>

        {/* SignIn */}
        <div className='form-container signin-container'>
          <form action="" onSubmit={signinFormSubmit} id='form2' className='form'>
            <select className="language-select">
              <option value="en">English</option>
              <option value="fr">French</option>
              <option value="es">Spanish</option>
              <option value="de">German</option>
              <option value="it">Italian</option>
              <option value="pt">Portuguese</option>
              <option value="ru">Russian</option>
              <option value="zh">Chinese</option>
              <option value="ja">Japanese</option>
              <option value="ko">Korean</option>
            </select>
            <h2 className='heading'>Sign In</h2>
            <input type="email" name='email' placeholder='Email' className='input' />
            <input type="password" name='password' placeholder='Password' className='input' />
            <a href="#" className='link'>Forgot your password?</a>
            <Link to="/" type='submit' className='button signin-btn' >Sign In</Link>
          </form>
        </div>

        {/* Overlay */}
        <div className='overlay-container'>
          <div className='overlay'>
            <div className='overlay-panel overlay-left'>
              <button className='button' id='signin' onClick={handleSignInClick}>Sign In</button>
            </div>
            <div className='overlay-panel overlay-right'>
              <Link to="#" className='button' id='signup' onClick={handleSignUpClick}>Sign Up</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin