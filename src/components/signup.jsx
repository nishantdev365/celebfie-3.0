import Close from "../assets/icon-close.png"
import { useState } from "react";

const Signup = () => {

    const [showSignup, setShowSignup] = useState(true);

    const handleSignupButtonClick = () => {
      setShowSignup(false);
    };
  
  return (
   <>
    {showSignup && 
    <div className="signup_section" id="signup_section">
    <b className="members-only">Members Only. </b>
    <b className="please-login">Please login </b>
    <b className="or">OR</b>
    <div className="username">Username</div>
    <div className="password">Password</div>
    <input type="text" className="rectangle-div" value="" />
    <input type="text" className="frame-child3" />

    <div className="login-container">
      <b className="login1">Login</b>
    </div>
    <div className="register-container">
      <b className="login1">Register</b>
    </div>
    <img
      onClick={handleSignupButtonClick}
      className="iconplus"
      alt=""
      src={Close}
      id="close_btn"
    />
  </div>}
        
   </>
  )
}

export default Signup