import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { signInAnonymously } from "firebase/auth";
import { toast } from "react-toastify";
import ReactGA from "react-ga4";
import { getAnalytics, logEvent } from "firebase/analytics";
import Eye from "../assets/eye.png";
import EyeOff from "../assets/eye-off.png";
import Check from "../assets/check-icon.png";
import CloseCircle from "../assets/close-circle.png";
import GoogleLogo from "../assets/google.png";

import AppleLogoBlack from "../assets/apple-logo.png";
import zxcvbn from 'zxcvbn';


const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false);
  const analytics = getAnalytics();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };



  function handleAnonymousLogin() {
    signInAnonymously(auth)
      .then(() => {
        const user = auth.currentUser;

        if (user) {
          logEvent(analytics, "login", {
            method: "email",
            user_id: user.uid,
          });

          ReactGA.set({
            user_id: user.uid,
          });

          ReactGA.event({
            category: "User",
            action: "Login",
          });

          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  }


  
  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth.currentUser;

        if (user) {
          logEvent(analytics, "login", {
            method: "email",
            user_id: user.uid,
          });

          ReactGA.set({
            user_id: user.uid,
          });

          ReactGA.event({
            category: "User",
            action: "Login",
          });

          navigate("/");
        }
      })

      .catch((error) => {
        if (error.code === "auth/invalid-credential") {
          toast.error(
            "Invalid credentials. Please double-check your email and password."
          );
        }
        if (error.code === "auth/too-many-requests") {
          toast.error("Too many requests. Try again later.");
        }
        if (error.code === "auth/network-request-failed") {
          toast.error("Network error. Try again later.");
        }
        if (error.code === "auth/user-disabled") {
          toast.error("User disabled. Please contact support.");
        }
        if (error.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters");
        }
        if (error.code === "auth/user-not-found") {
          toast.error("User not found");
        }
        if (email === "" || password === "") {
          toast.error("Please fill in all fields");
        }

        console.error("Login failed:", error.message);
      });
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then(() => {
        const user = auth.currentUser;

        if (user) {
          logEvent(analytics, "login", {
            method: "google",
            user_id: user.uid,
          });

          ReactGA.set({
            user_id: user.uid,
          });

          ReactGA.event({
            category: "User",
            action: "Login",
          });

          navigate("/");
        }
      })
      .catch((error) => {
      
        console.error("Login failed:", error.message);
      });
  };
  

  function handlePasswordReset() {
   
    navigate("/forgot-password");
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

  useEffect(() => {
    // Password validation logic
    if (password.length >= 8 && /[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      setPasswordValid(true);
    } else {
      setPasswordValid(false);
    }
  }, [password]);

  const progressBarValue = () => {
    const passwordStrength = zxcvbn(password);
    // Get the password score which ranges from 0 to 4
    const score = passwordStrength.score;
    // Convert the score to a percentage (0% to 100%)
    let value = (score / 1.5) * 100;
  
    // If password length is less than 8 characters or doesn't contain special characters, reduce the progress value
    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      value -= 50;
    }
  
    // Ensure the value is not negative
    if (value < 0) {
      value = 0;
    }
    
    return value;
  };
  
  

  return (
    <>
      <div id="intro_login">
        <b className="please_login_intro">Please login </b>

        <div className="username_intro">Email</div>
        <input
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          name="email"
          className="rectangle_div_intro"
        />
        <p></p>

        <div className="password_intro">Password</div>

        <div className="password_input">
          <input
            onChange={(e) => setPassword(e.target.value)}
            type={showPassword ? "password" : "text"}
            name="password"
            className="frame_child3_intros"
          />
          <span className="password_toogle" onClick={handleTogglePassword}>
            {" "}
            {showPassword ? <img src={EyeOff} /> : <img src={Eye} />}{" "}
          </span>
        </div>

        
        {password.length > 0 && (
          <div className="password_validation_container">
          <progress className="progress_bar" value={progressBarValue()} max="100" />
            <ul>
              <li
                className={`validation_lists ${
                  password.length >= 8 ? "valid" : "invalid"
                }`}
              >
                <img
                  src={password.length >= 8 ? Check : CloseCircle}
                  alt="Length requirement"
                />
                Need 8 characters
              </li>
              <li
                className={`validation_lists ${
                  /[!@#$%^&*(),.?":{}|<>]/.test(password) ? "valid" : "invalid"
                }`}
              >
                <img
                  src={
                    /[!@#$%^&*(),.?":{}|<>]/.test(password)
                      ? Check
                      : CloseCircle
                  }
                  alt="Special character requirement"
                />
                Need Special characters
              </li>
            </ul>
          </div>
        )}

          <p
          onClick={handlePasswordReset}
          className="forgotten_password"
          style={{ textAlign: "left", cursor: "pointer", textDecoration: "underline", marginBottom: "10px"}}
        >
          Forgotten Password?
        </p>

        <div onClick={(e) => handleLogin(e)} className="login_container_intro">
          {/* <Link to="/home"> */}
          <b className="login1_intro">Login</b>
          {/* </Link> */}
        </div>

     
        <b className="or_intro">OR</b>
      
        <button type="button" className="login_with_google_btn" onClick={handleGoogleSignIn}>
            <img className="google_logo" src={GoogleLogo} />
            Continue With Google
          </button>
          <button type="button" className="login_with_google_btn">
            <img className="google_logo" src={AppleLogoBlack} />
            Continue With Apple
          </button>

          <Link to="/register">
            <p style={{ textAlign: "center" }}>
            Dont have an account? 
              <span className="register_now">Register with email</span>
            </p>
          </Link>

          <b className="skip" onClick={handleAnonymousLogin}>
            Continue As Guest
          </b>
      </div>
    </>
  );
};

export default SignIn;
