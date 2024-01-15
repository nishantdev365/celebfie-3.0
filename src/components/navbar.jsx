import BurgerMenu from "../assets/burger-menu.svg"
import Logo from '../assets/logo.png';
import { Link } from "react-router-dom";
import Signup from "./signup";
import { useState } from "react";

const Navbar = () => {

    
  const [showSignup, setShowSignup] = useState(false);

  const handleSignupButtonClick = () => {
    setShowSignup(true);
  };


  return (
    <>
      <nav>
     {showSignup && <Signup />}
        <div className="menu_options">
          <div className="logo">
            <img src={Logo} alt="Celebfie"  />
          </div>
          <div className="nav_list">
            <ul className="menu_items">
              <li>
                <span className="material-symbols-outlined ico"> home </span>
                <Link to="/home"> <a className="active nav_options" href="#">Home</a></Link>
                
              </li>
              <li>
                <span className="material-symbols-outlined ico"> forum </span>
             <Link to="/chatPage">  <a className="nav_options" href="chatbox.html">Chat</a></Link>
               
              </li>
              <li>
                <span className="material-symbols-outlined ico"> search </span>
                <a className="nav_options" href="#">Search</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="signup_btn">
          <button className="register_btn" id="register_btn" onClick={handleSignupButtonClick}>
            <b className="login" >Register</b>
          </button>

          <button className="login_btn">
            <b className="login">Login</b>
          </button>
        </div>

        <img src={BurgerMenu} className="burger_menu" alt=""/>
      </nav>
    </>
  )
}

export default Navbar