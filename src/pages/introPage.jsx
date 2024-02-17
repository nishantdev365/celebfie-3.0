import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Login from "../components/signIn";

import "../App.css";
import Logo from "../assets/logo.svg";

const IntroPage = () => {
  const [isLaptopScreen, setIsLaptopScreen] = useState(false);

  useEffect(() => {
    const handleIntroSignupDisplay = () => {
      const screenWidth =
        window.innerWidth ||
        document.documentElement.clientWidth ||
        document.body.clientWidth;
      setIsLaptopScreen(screenWidth > 1200);
    };

    handleIntroSignupDisplay();

    window.addEventListener("resize", handleIntroSignupDisplay);

    return () => {
      window.removeEventListener("resize", handleIntroSignupDisplay);
    };
  }, []);

  return (
    <>
      <div className="intro_screen">
        <img src={Logo} id="intro_logo" alt="Logo" />
        <p className="intro_description">
          Celeb Vibes, Fan Tribes with AI Magic
        </p>

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

        {isLaptopScreen && <Login />}
      </div>
    </>
  );
};

export default IntroPage;
