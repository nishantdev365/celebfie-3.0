import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

import "../App.css";
import Logo from "../assets/logo.svg";

const IntroPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  // const [showSignupSection, setShowSignupSection] = useState(false); 
  const location = useLocation();

  useEffect(() => {
    const handleIntroSignupDisplay = () => {
      const introSignup = document.getElementById("intro_signup");
      if (introSignup) {
        const screenWidth =
          window.innerWidth ||
          document.documentElement.clientWidth ||
          document.body.clientWidth;
        if (screenWidth <= 768) {
          introSignup.style.display = "none";
          setShowNavbar(false);
        } else {
          introSignup.style.display = "flex";
          setShowNavbar(false);
        }
      }
    };

    const timeoutId = setTimeout(handleIntroSignupDisplay, 2000);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // const handleSignupButtonClick = () => {
  //   // alert("clicked")
  //   setShowSignupSection(!showSignupSection); // Toggle the state on button click
  // };

  // Conditionally render the Navbar based on the path
  const renderNavbar = () => {
    if (showNavbar && location.pathname !== "/") {
      return <Navbar />;
    }
    return null;
  };

  return (
    <>
      {renderNavbar()}
      <div className="intro_screen">
        
        <img src={Logo} id="intro_logo" alt="Logo" />
        <p className="intro_description">Celeb Vibes, Fan Tribes with AI Magic</p>
   

        <div id="intro_signup">
          <b className="please_login_intro">Please login </b>

          <div className="username_intro">Username</div>
          <input type="text" className="rectangle_div_intro" value="" />
          <div className="password_intro">Password</div>

          <input type="text" className="frame_child3_intros" />

          <div className="login_container_intro" >
            <Link to="/home">
              <b className="login1_intro">Login</b>
            </Link>
          </div>
          <b className="or_intro">OR</b>
          <div className="register_container_intro redirectButton">
            <Link to="/home">
              <b className="login1_intro">Register</b>
            </Link>
          </div>
        </div>

     {/* {!showSignupSection && ( */}
          <div className="signup_btn_mobile">
            {/* <div className="login_container_intro redirectButton" onClick={handleSignupButtonClick}> */}
            <div className="login_container_intro redirectButton">
            <Link to="/login">
              <b className="login1_intro">Login</b>
              </Link>
            </div>
            <br />
            <div className="register_container_intro redirectButton">
              <Link to="/register">
                <b className="login1_intro">Register</b>
              </Link>
            </div>
          </div>
        {/* )} */}

        {/* <div id="intro_signup_mobile">
          <div className={`signup_section ${showSignupSection ? "show" : ""}`} >
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
          </div>
        </div> */}
      </div>
    </>
  );
};

export default IntroPage;
