import { Link } from "react-router-dom";
// import BurgerMenu from "../assets/burger-menu.svg"
import Logo from '../assets/logo.svg';
// import { Link } from "react-router-dom";
// s
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../store/usersSlice";
import { auth } from "../firebase/config";
import ReactGA from "react-ga4";



// import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };
  
  // const location = useLocation();
  // const isChatPage = location.pathname.includes("/chatPage");
  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handelLogout = () => {
    dispatch(logoutUser());
    signOut(auth);

  
    ReactGA.event({
      category: "User",
      action: "Logout",
    });
  };

  
    
  // const [showSignup, setShowSignup] = useState(false);

  // const handleSignupButtonClick = () => {
  //   setShowSignup(true);
  // };



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

      
        <div className="signup_btn">
          {/* <button className="register_btn" id="register_btn" onClick={handleSignupButtonClick}>
            <b className="login" >Register</b>
          </button>

          <button className="login_btn">
            <b className="login">Login</b>
          </button> */}

         

        <button className="Btn" onClick={handelLogout}>
  
           <div className="sign"><svg viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg></div>
  
             <div className="text">Logout</div>
            </button>



        </div>

         <div className="burger_menu">
         <input
        hidden
        className="check-icon"
        id="check-icon"
        name="check-icon"
        type="checkbox"
        checked={menuVisible}
        onChange={handleMenuToggle}
      />
      <label className="icon-menu" htmlFor="check-icon">
        <div className="bar bar--1"></div>
        <div className="bar bar--2"></div>
        <div className="bar bar--3"></div>
      </label>
         </div>
         {menuVisible && (
        <div className="menu">
         
          <p style={{textAlign: "left"}}>Hello <span>{user.username}</span></p>
          <br />
         <div className="list_menu">
         <svg className="logout_menu" viewBox="0 0 512 512"><path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path></svg>
         <p onClick={handelLogout} >Logout</p>
         </div>
          
        </div>
      )}
        </nav>
    </>
  )
}

export default Navbar