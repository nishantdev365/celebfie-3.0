import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { signInAnonymously } from "firebase/auth";
import { toast } from "react-toastify";
import ReactGA from "react-ga4";
import { getAnalytics, logEvent } from "firebase/analytics";
import Eye from "../../assets/eye.png";
import EyeOff from "../../assets/eye-off.png";
import Check from "../../assets/check-icon.png";
import CloseCircle from "../../assets/close-circle.png";
import GoogleLogo from "../../assets/google.png";
import AppleLogo from "../../assets/apple.png";
import AppleLogoBlack from "../../assets/apple-logo.png";
import zxcvbn from "zxcvbn";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const analytics = getAnalytics();

  const [showPassword, setShowPassword] = useState(true);
  const [passwordValid, setPasswordValid] = useState(false);

  const handleAppleSignIn = () => {
    toast.error("Apple login is temporarily unavailable. Please try another login method.");
  }

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;

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

          navigate("/home");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);
        console.error(
          "Google Sign In Error:",
          errorCode,
          errorMessage,
          email,
          credential
        );
      });
  };

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

          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Login failed:", error.message);
      });
  }

  const handleLogin = () => {
    // setError(null);
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

          navigate("/home");
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
        if (email === "" || password === "") {
          toast.error("Please fill in all fields");
        }

        console.error("Login failed:", error.message);
      });
  };

  function handlePasswordReset() {
    navigate("/forgot-password");
  }

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
      <div className="intro_screen">
        <div id="login_page">
          <b className="please_login_intro">Please login </b>

          <div className="username_intro">Email</div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            className="rectangle_div_intro"
          />
          <div className="password_intro">Password</div>

          <div className="password_input">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "password" : "text"}
              name="password"
              className="frame_child3_intros"
            />
            <span className="password_toogle" onClick={handleTogglePassword}>
              {showPassword ? <img src={EyeOff} /> : <img src={Eye} />}
            </span>
          </div>

          {password.length > 0 && (
            <div className="password_validation_container">
              <progress
                className="progress_bar"
                value={progressBarValue()}
                max="100"
              />
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
                    /[!@#$%^&*(),.?":{}|<>]/.test(password)
                      ? "valid"
                      : "invalid"
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
            style={{
              textAlign: "left",
              cursor: "pointer",
              textDecoration: "underline",
              marginBottom: "10px",
            }}
          >
            Forgotten Password?
          </p>

          <div
            onClick={(e) => handleLogin(e)}
            className="login_container_intro"
          >
            <b className="login1_intro">Login</b>
          </div>

          <b className="or_intro">OR</b>

          <button
            type="button"
            className="login_with_google_btn"
            onClick={handleGoogleSignIn}
          >
            <img className="google_logo" src={GoogleLogo} />
            Continue With Google
          </button>
          <button type="button" className="login_with_google_btn" onClick={handleAppleSignIn}>
            <img className="google_logo" src={AppleLogoBlack} />
            Continue With Apple
          </button>

          <Link to="/signup">
            <p style={{ textAlign: "center" }}>
              Dont have an account?
              <span className="register_now">Register with email</span>
            </p>
          </Link>

          <b className="skip" onClick={handleAnonymousLogin}>
            Continue As Guest
          </b>
        </div>
      </div>

      {/* -------------------------FOR-MOBILE------------------------------ */}
      <div className="login_page">
        <div className="login_page_logo"></div>

        <b className="Please_login">Please login</b>
        <div className="input_sections">
          <p className="input_head">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
          />

          <p className="input_head">Password</p>
          <div className="password_input_mobile">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "password" : "text"}
              name="password"
            />
            <span
              className="password_toogle_mobile"
              onClick={handleTogglePassword}
            >
              {showPassword ? <img src={EyeOff} /> : <img src={Eye} />}
            </span>
          </div>

          {password.length > 0 && (
            <div className="password_validation_container">
              <progress
                className="progress_bar"
                value={progressBarValue()}
                max="100"
              />
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
                    /[!@#$%^&*(),.?":{}|<>]/.test(password)
                      ? "valid"
                      : "invalid"
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
        </div>

        <div className="login_page_btn">
          <div onClick={(e) => handleLogin(e)} className="register_page_btn">
            <b className="Register_btn_text">Login</b>
          </div>
          <p
            onClick={handlePasswordReset}
            style={{
              color: "#B5CDFF",
              fontSize: "18px",
              textDecoration: "underline",
              textAlign: "center",
              marginBottom: "40px",
            }}
            className="forgotten_password"
          >
            Forgotten Password?
          </p>

          <div className="or_section">
            <div className="hr_line"></div>
            <b className="login_or">OR</b>
          </div>
        </div>

        <button
          type="button"
          className="login_with_google_btn"
          onClick={handleGoogleSignIn}
        >
          <img className="google_logo" src={GoogleLogo} />
          Continue With Google
        </button>
        <button type="button" className="login_with_google_btn" onClick={handleAppleSignIn}>
          <img className="google_logo" src={AppleLogo} />
          Continue With Apple
        </button>

        <Link to="/signup">
          <p
            style={{
              color: "#B5CDFF",
              fontSize: "16px",
              textDecoration: "underline",
              textAlign: "center",
              margin: "30px 0 20px 0",
            }}
          >
            Dont have an account?
            <span className="register_now">Register with email</span>
          </p>
        </Link>

        <b
          className="skip"
          onClick={handleAnonymousLogin}
          style={{
            color: "#B5CDFF",
            fontSize: "14px",
            textAlign: "center",
            margin: "5px 0 20px 0",
          }}
        >
          Continue As Guest
        </b>
      </div>
    </>
  );
};

export default Login;
