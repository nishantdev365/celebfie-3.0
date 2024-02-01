import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { sendPasswordResetEmail, signInAnonymously } from "firebase/auth";
import { toast } from 'react-toastify';
import ReactGA from "react-ga4";


const SignIn = () => {
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
        const user = auth.currentUser;

        ReactGA.set({
          userId: user.uid,
        });


        ReactGA.event({
          category: "User",
          action: "Anonymous Login",
        });
        navigate("/");
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });

   
  }



  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(() => {

      const user = auth.currentUser;

      ReactGA.set({
        userId: user.uid,
      });

      ReactGA.event({
        category: "User",
        action: "Login",
      });

      
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
      } if(error.code === "auth/user-not-found") {
        toast.error("User not found");
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


  useEffect(() => {
    const handleIntroSignupDisplay = () => {
      const introSignup = document.getElementById("intro_login");
      if (introSignup) {
        const screenWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        if (screenWidth <= 768) {
          introSignup.style.display = "none";
        } else {
          introSignup.style.display = "flex";
        }
      }
    };

    const timeoutId = setTimeout(handleIntroSignupDisplay, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);
  
  return (
   <>

    <div id="intro_login">
        <b className="please_login_intro">Please login </b>

        <div className="username_intro">Email or Username</div>
        <input onChange={(e) => setEmail(e.target.value)} type="text" name="email" className="rectangle_div_intro"  />
        <div className="password_intro">Password</div>

        <div className="password_input">
        <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'password' : 'text'} name="password" className="frame_child3_intros" />
        <span className="password_toogle" onClick={handleTogglePassword}> {showPassword ? "Show" : "Hide"} </span>                           
        </div>

        <div onClick={(e) => handleLogin(e)} className="login_container_intro">
          {/* <Link to="/home"> */}
            <b className="login1_intro">Login</b>
          {/* </Link> */}
        </div>
        <b className="or_intro">OR</b>
        <div className="register_container_intro redirectButton">
          <Link to="/register">
            <b className="login1_intro">Register</b>
          </Link>
        </div>

        <p onClick={handlePasswordReset} className="forgotten_password" style={{textAlign: "center", cursor:"pointer"}}>Forgotten Password?</p>
        <b className="skip" onClick={handleAnonymousLogin}>Continue As Guest</b>

        {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
      </div>

        
   </>
  )
}

export default SignIn;


