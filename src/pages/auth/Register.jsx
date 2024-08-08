import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from "react-toastify";
import SplashScreen from "../../assets/slide-img.png"
import Eye from "../../assets/eye.png";
import EyeOff from "../../assets/eye-off.png";
import Check from "../../assets/check-icon.png";
import CloseCircle from "../../assets/close-circle.png";
import zxcvbn from "zxcvbn";

const Register = () => {
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [passwordValid, setPasswordValid] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordsMatch, setPasswordsMatch] = useState(true);
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(true);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSignUp = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          navigate("/");
          signInWithEmailAndPassword(auth, email, password).then(
            updateProfile(auth.currentUser, {
              displayName: username,
            })
          );
          localStorage.setItem("machaaoUser", username);
        })
        .catch((err) => {
          if (err.code === "auth/email-already-in-use") {
            toast.error("Email already in use");
          }
          if (err.code === "auth/invalid-email") {
            toast.error("Invalid email");
          }
          if (err.code === "auth/weak-password") {
            toast.error("Password should be at least 6 characters");
          }
          if (email === "" || password === "") {
            toast.error("Please fill required fields");
          }

          console.log(err.message);
        });
    } else {
      setPasswordsMatch(false);
    }
  };

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
    const value = (score / 2.5) * 100;
    return value;
  };

  return (
    <>
      <div className="intro_screen">
      {/* <div className="registration_screen md:hidden"/> */}
        {/* <img src={SplashScreen} alt="" style={{maxWidth: "fit-content"}} className="md:hidden"/> */}
        <div className="register_page">
          <div className="navigate_back">
            <Link to="/">
              <div className="back_btn_register"></div>
            </Link>
            <b className="register_heading">Register</b>
          </div>

          <div className="input_sections">
            <p className="input_head">User name</p>
            <input
              type="username"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <p className="input_head">Full Name</p>
            <input type="fullname" name="fullname" />
            {/* <p className="input_head">Last Name</p>
            <input type="lastname" name="lastname" /> */}
            <p className="input_head">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
            />
            <p className="input_head">Password</p>
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

            {/* Add a second password input for re-typing the password */}
            <div className="input_head" style={{marginTop: "10px"}}>Confirm New Password</div>
            <div className="password_input">
              <input
                onChange={(e) => setConfirmPassword(e.target.value)}
                type={showPassword ? "password" : "text"}
                name="confirmPassword"
                className="frame_child3_intros"
              />
              <span className="password_toogle" onClick={handleTogglePassword}>
                {showPassword ? (
                  <img src={EyeOff} />
                ) : (
                  <img
                    src={Eye}
                    alt={showPassword ? "Hide Password" : "Show Password"}
                  />
                )}
              </span>
            </div>

            <p className="input_head" style={{marginTop: "10px"}}>Gender</p>
            <div className="radio_btn">
              <input
                type="radio"
                name="gender"
                id="male"
                className="input_radio"
                value="male"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="male">Male</label>
              <input
                type="radio"
                name="gender"
                id="female"
                className="input_radio"
                style={{ marginLeft: "10px", backgroundColor: "red" }}
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>
            </div>

            <div
              onClick={handleSignUp}
              className="register_page_btn"
              style={{ marginBottom: "10px" }}
            >
              <b className="Register_btn_text">Register</b>
            </div>
            <Link to="/login">
              <p style={{ textAlign: "center" }}>
                Already have an account{" "}
                <span className="register_now">Sign In </span>
              </p>
            </Link>
          </div>
        </div>
      </div>

      {/* ---------------------------FOR-MOBILE-SCREEN------------------------ */}

      <div className="register_page_mobile">
        <div className="navigate_back">
          <Link to="/">
            {" "}
            <div className="back_btn_register"></div>
          </Link>
          <b className="register_heading">Register</b>
        </div>

        <div className="input_sections">
          <p className="input_head">User name</p>
          <input
            type="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <p className="input_head">First Name</p>
          <input type="firstname" name="firstname" />
          <p className="input_head">Last Name</p>
          <input type="lastname" name="lastname" />
          <p className="input_head">Email Address</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
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

          {/* Add a second password input for re-typing the password */}
          <div className="input_head">Confirm New Password</div>
          <div className="password_input_mobile">
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type={showPassword ? "password" : "text"}
              name="confirmPassword"
            />
            <span
              className="password_toogle_mobile"
              onClick={handleTogglePassword}
            >
              {showPassword ? (
                <img src={EyeOff} />
              ) : (
                <img
                  src={Eye}
                  alt={showPassword ? "Hide Password" : "Show Password"}
                />
              )}
            </span>
          </div>

          {/* Show an error message if passwords don't match */}
          {!passwordsMatch && toast.error("Passwords do not match")}

          <p className="input_head">Gender</p>
          <div className="radio_btn">
            <input
              type="radio"
              name="gender"
              id="male"
              className="input_radio"
    
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="male">Male</label>
            <input
              type="radio"
              name="gender"
              id="female"
              className="input_radio"
              style={{ marginLeft: "10px"}}
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
            <label htmlFor="female">Female</label>
          </div>

          <div onClick={handleSignUp} className="register_page_btn">
            <b className="Register_btn_text">Register</b>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;
