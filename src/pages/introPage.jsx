import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Navbar from "../components/navbar";

import "../App.css";
import Logo from "../assets/logo.svg";

const IntroPage = () => {
  const [showNavbar, setShowNavbar] = useState(true);

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

        <div id="intro_signup">
          <b className="please_login_intro">Please login </b>

          <div className="username_intro">Username</div>
          <input type="text" className="rectangle_div_intro" value="" />
          <div className="password_intro">Password</div>

          <input type="text" className="frame_child3_intros" />

          <div className="login_container_intro">
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

        <div className="signup_btn_mobile">
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
      </div>
    </>
  );
};

export default IntroPage;
