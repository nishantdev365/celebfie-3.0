import { Link } from "react-router-dom";
// import BurgerMenu from "../assets/burger-menu.svg"
import Logo from '../assets/logo.svg';
// import { Link } from "react-router-dom";
// import Signup from "./signup";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  // const isChatPage = location.pathname.includes("/chatPage");

    
  // const [showSignup, setShowSignup] = useState(false);

  // const handleSignupButtonClick = () => {
  //   setShowSignup(true);
  // };

  useEffect(() => {
    let MemberSpace = window.MemberSpace || { subdomain: "celebfie" };
    (function (d) {
      var s = d.createElement("script");
      s.src = "https://cdn.memberspace.com/scripts/widgets.js";
      var e = d.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(s, e);
    })(document);

    return () => {};
  }, []);

  useEffect(() => {
    if (window.Memberspace && !window.Memberspace.isMember()) {
      navigate("/?msopen=/member/sign_in");
    }
  }, [navigate]);


  return (
    <>
      <nav>
     {/* {showSignup && <Signup />} */}
        <div className="menu_options">
        <Link to="/home"> 
          <div className="logo">
            <img src={Logo} alt="Celebfie"  />
          </div>
          </Link>
          {/* <div className="nav_list">
            <ul className="menu_items">
            <Link to="/home">  <li>
                
                <b className={`nav_options ${!isChatPage && "active"}`}> <span className="material-symbols-outlined ico"> home </span> Home</b>
                
              </li>
              </Link>
              <Link to="/chat">   
              <li>
          
               <b className={`nav_options ${isChatPage && "active"}`}>   <span className="material-symbols-outlined ico"> forum </span> Chat</b>
               
              </li>

              </Link>
              <li>
               
                <b className="nav_options" >  <span className="material-symbols-outlined ico"> search </span>Search</b>
              </li>
            </ul>
          </div> */}
        </div>
        {/* <div className="signup_btn">
      
          <button className="register_btn" id="register_btn">
            <b className="login" >Register</b>
          </button>

          <button className="login_btn">
            <b className="login">Login</b>
          </button>
        </div> */}

        {/* <img src={BurgerMenu} className="burger_menu" alt=""/> */}
      </nav>
    </>
  )
}

export default Navbar