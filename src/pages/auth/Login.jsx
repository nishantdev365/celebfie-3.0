import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { toast } from 'react-toastify';





const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  

  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  function handleAnonymousLogin() {
    signInAnonymously(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  }




  const handleLogin = () => {
    // setError(null);
    signInWithEmailAndPassword(auth, email, password)
    
    .then(() => {
      navigate("/");
    })
    .catch((error) => {
       if (error.code === "auth/invalid-credential") {
        toast.error("Invalid credentials. Please double-check your email and password.");
      } if(error.code === "auth/too-many-requests") {
        toast.error("Too many requests. Try again later.");
      } if(error.code === "auth/network-request-failed") {
        toast.error("Network error. Try again later.");
      } if(error.code === "auth/user-disabled") {
        toast.error("User disabled. Please contact support.");
      } if(error.code === "auth/weak-password") {
        toast.error("Password should be at least 6 characters");
      } if(email === "" || password === "") {
        toast.error("Please fill in all fields");
      } 

      
      console.error("Login failed:", error.message);
    });
  };

function handlePasswordReset() {
  const email = prompt("Enter your email address");
  sendPasswordResetEmail(auth, email)
  alert("Check your email for password reset link");
}





  return (
    <>
    

     <div className="intro_screen">
      <div id="login_page">
        <b className="please_login_intro">Please login </b>

        <div className="username_intro">Email or Username</div>
        <input  onChange={(e) => setEmail(e.target.value)} type="text" name="email" className="rectangle_div_intro"  />
        <div className="password_intro">Password</div>

        <div className="password_input">
        <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'password' : 'text'} name="password" className="frame_child3_intros" />
        <span className="password_toogle" onClick={handleTogglePassword}>{showPassword ? "Show" : "Hide"}</span>                           
        </div>

        <div onClick={(e) => handleLogin(e)} className="login_container_intro">
        
            <b className="login1_intro">Login</b>
         
        </div>
       

        <Link to="/register">
        <p style={{textAlign: "center"}}>New to Celebfie? <span className="register_now">Register now</span></p>
        </Link>

        <p onClick={handlePasswordReset} className="forgotten_password" style={{textAlign: "center", cursor:"pointer"}}>Forgotten Password?</p>

        <b className="skip" onClick={handleAnonymousLogin}>Continue As Guest</b>

        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      </div>

      </div>

      {/* -------------------------FOR-MOBILE------------------------------ */}
      <div className="login_page">
        <div className="login_page_logo"></div>

        <b className="Please_login">Please login</b>
        <div className="input_sections">
          <p className="input_head">Email or Username</p>
          <input   onChange={(e) => setEmail(e.target.value)} type="text" name="email" />

          <p className="input_head">Password</p>
        <div className="password_input_mobile">
        <input onChange={(e) => setPassword(e.target.value)}  type={showPassword ? 'password' : 'text'} name="password" />
          <span className="password_toogle_mobile" onClick={handleTogglePassword}>{showPassword ? "Show" : "Hide"}</span>  
        </div>
          
        </div>

        <div className="login_page_btn">
          <div onClick={(e) => handleLogin(e)} className="register_page_btn">
            {/* <Link to="/home"> */}
              <b className="Register_btn_text">Login</b>
            {/* </Link> */}
          </div>

          <div className="or_section">
            <div className="hr_line"></div>
            <b className="login_or">OR</b>
          </div>

          <div className="register_page_btn">
            <Link to="/register">
              <b className="Register_btn_text">Register</b>
            </Link>
          </div>
        </div>

        <p onClick={handlePasswordReset} style={{color: "white"}} className="forgotten_password">Forgotten Password?</p>

        {/* <Link to="/"> */}
          <b className="skip" onClick={handleAnonymousLogin}>Continue As Guest</b>
        {/* </Link> */}

         {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      </div>
    </>
  );
};

export default Login;
