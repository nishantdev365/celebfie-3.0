import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";    
import { useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import { confirmPasswordReset } from "firebase/auth";
import Eye from "../../assets/eye.png";
import EyeOff from "../../assets/eye-off.png";
import Check from "../../assets/check-icon.png";
import CloseCircle from "../../assets/close-circle.png";
import zxcvbn from 'zxcvbn';

const ResetPassword = () => {
  const Navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [passwordValid, setPasswordValid] = useState(false);
  const [passwordsMatch, setPasswordsMatch] = useState(true); 

  useEffect(() => {
   
    if (!getOobCodeFromURL()) {
       
        Navigate("/login");
    }
}, []);

  const handleUpdatePassword = () => {
    if (password === confirmPassword) { 
      const oobCode = getOobCodeFromURL(); 

      confirmPasswordReset(auth, oobCode, password)
      .then(() => {
        Navigate("/login");
      })
      .catch((error) => {
        console.error("Error updating password:", error.message);
      });
  } else {
    // If passwords don't match, show an error or handle it accordingly
    setPasswordsMatch(false);
  }
  };

  const getOobCodeFromURL = () => {
    const searchParams = new URLSearchParams(window.location.search);
    const oobCode = searchParams.get("oobCode"); 
    return oobCode;
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

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
      <div className="intro_screen reset_page_screen">
        <img src={Logo} id="reset_intro_logo" alt="Logo" />
        <p className="intro_description">
          Celeb Vibes, Fan Tribes with AI Magic
        </p>

        <div id="reset_page">
          <b style={{ fontSize: "22px", fontWeight: "700" }}>Update Password</b>

          <div className="username_intro">New Password</div>
          <div className="password_input">
            <input
              onChange={(e) => setPassword(e.target.value)}
              type={showPassword ? "password" : "text"}
              name="password"
              className="frame_child3_intros"
            />
            <span className="password_toogle" onClick={handleTogglePassword}>
            {showPassword ? <img src={EyeOff} /> : <img src={Eye} alt={showPassword ? 'Hide Password' : 'Show Password'}/> }
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


         {/* Add a second password input for re-typing the password */}
      <div className="username_intro">Re-Type New password</div>
      <div className="password_input">
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={showPassword ? "password" : "text"}
          name="confirmPassword"
          className="frame_child3_intros"
        />
        <span className="password_toogle" onClick={handleTogglePassword}>
          {showPassword ? <img src={EyeOff} /> : <img src={Eye} alt={showPassword ? 'Hide Password' : 'Show Password'} />}
        </span>
      </div>

      {/* Show an error message if passwords don't match */}
      {!passwordsMatch && <div>Passwords do not match</div>}


          <div className="login_container_intro" onClick={handleUpdatePassword}>
            <b className="login1_intro">Update</b>
          </div>
        </div>
      </div>

      {/* ------------------------for-mobile------------------------ */}
      <div className="forgot_page_mobile">
        <div className="navigate_back">
          <Link to="/login">
            <div className="back_btn_register"></div>
          </Link>
          <b className="register_heading">Forgot Password</b>
        </div>

        <div className="input_reset_sections">
          <p className="input_head">New Password</p>
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
              {showPassword ? <img src={EyeOff} /> : <img src={Eye} /> }
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


         {/* Add a second password input for re-typing the password */}
      <div className="input_head">Confirm New Password</div>
      <div className="password_input_mobile">
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type={showPassword ? "password" : "text"}
          name="confirmPassword"
          
        />
        <span className="password_toogle_mobile" onClick={handleTogglePassword}>
          {showPassword ? <img src={EyeOff} /> : <img src={Eye} alt={showPassword ? 'Hide Password' : 'Show Password'} />}
        </span>
      </div>

      {/* Show an error message if passwords don't match */}
      {!passwordsMatch && <div style={{color: "red", margin: "0 0 5px 0"}}>Passwords do not match</div>}


          <div onClick={handleUpdatePassword} className="register_page_btn">
            <b className="Register_btn_text">Update Password</b>
          </div>

        
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
