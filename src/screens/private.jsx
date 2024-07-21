import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "../styles/signin.scss";

const Private = () => {
  const [isRightPanelActive, setRightPanelActive] = useState(false);

  const handleSignInClick = () => {
    setRightPanelActive(false);
  };

  const handleSignUpClick = () => {
    setRightPanelActive(true)
  };

  return (
    <div className='wrapper'>
      <div className={`container private-container ${isRightPanelActive ? "right-panel-active" : ""}`}>
        {/* Sign Up */}
        <div className="form-container signup-container">
          <form action="#" className="form" id="form1">
            <h2 className="private-heading">Private Account</h2>
            <input type="text" placeholder="First Name" className="private-input" />
            <input type="text" placeholder="Last Name" className="private-input" />
            <input type="text" placeholder="dd/mm/yyyy DOB" className="private-input" />
            <input type="number" placeholder="ID Card Number" className="private-input" />
            <input type="email" placeholder="Email" className="private-input" />
            <input type="number" placeholder="Ph #" className="private-input" />
            <input type="password" placeholder="Password" className="private-input" />
            <Link to="/" className="button private-btn">Sign Up</Link>
          </form>
        </div>

        {/* Sign In */}
        <div className="form-container signin-container">
          <form action="#" className="form" id="form2">
            <h2 className="private-heading">Business Account</h2>
            <input type="text" placeholder="First Name" className="private-input" />
            <input type="text" placeholder="Last Name" className="private-input" />
            <input type="text" placeholder="dd/mm/yyyy DOB" className="private-input" />
            <input type="number" placeholder="ID Card Number" className="private-input" />
            <input type="email" placeholder="Email" className="private-input" />
            <input type="number" placeholder="Ph #" className="private-input" />
            <input type="password" placeholder="Password" className="private-input" />
            <Link to="/" className="button1">Sign In</Link>
          </form>
        </div>

        {/* OverLay */}
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <button className="button" id="signIn" onClick={handleSignInClick}>Business Account</button>
            </div>
            <div className="overlay-panel overlay-right">
              <button className="button" id="signUp" onClick={handleSignUpClick}>Private Account</button>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Private