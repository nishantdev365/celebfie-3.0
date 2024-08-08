// import { Link, useNavigate, useLocation } from "react-router-dom";
// import Logo from "../assets/logo.svg";
// import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { signOut } from "firebase/auth";
// import { logoutUser } from "../store/usersSlice";
// import { auth } from "../firebase/config";
// import ReactGA from "react-ga4";

// const Navbar = () => {
//   const [menuVisible, setMenuVisible] = useState(false);
//   const navigate = useNavigate(); // Initialize the useNavigate hook
//   const location = useLocation(); // Get the current location

//   const handleMenuToggle = () => {
//     setMenuVisible(!menuVisible);
//   };

//   const user = useSelector((state) => state.data.user.user);
//   const dispatch = useDispatch();

//   const handleLogout = () => {
//     dispatch(logoutUser());
//     signOut(auth);
//     // localStorage.clear();
//     ReactGA.event({
//       category: "User",
//       action: "Logout",
//     });
//     if (location.pathname === '/') {
//       // If the user is on the home page, redirect to login page after logout
//       navigate('/login');
//     } else {
//       // If the user is on any other page, redirect to home page
//       navigate('/');
//     }// Redirect to the initial route after logout
//   };

//   return (
//     <>
//       <nav>
//         <div className="menu_options">
//           <Link to={user ? "/home" : "/"}>
//             <div className="logo">
//               <img src={Logo} alt="Celebfie" />
//             </div>
//           </Link>
//         </div>

//         <div className="nav_list">
//           <ul className="menu_items">
//             <Link to="/home">
//               <li>
//                 <b className={`nav_options ${location.pathname === "/home" ? "active" : ""}`}>
//                   <span className="material-symbols-outlined ico">home</span> Home
//                 </b>
//               </li>
//             </Link>
//             <Link to="/chat/urvashi-rautela">
//               <li>
//                 <b className={`nav_options ${location.pathname === "/chat" ? "active" : ""}`}>
//                   <span className="material-symbols-outlined ico">forum</span> Chat
//                 </b>
//               </li>
//             </Link>
//             <li>
//               <b className="nav_options">
//                 <span className="material-symbols-outlined ico">search</span> Search
//               </b>
//             </li>
//           </ul>
//         </div>

//         <div className="signup_btn" style={{ display: "flex" }}>
//           {!user ? (
//             <>
//               <Link to="/register">
//                 <button className="register_btn" id="register_btn">
//                   <b className="login">Register</b>
//                 </button>
//               </Link>

//               <Link to="/signin">
//                 <button className="login_btn">
//                   <b className="login">Login</b>
//                 </button>
//               </Link>
//             </>
//           ) : (
//             <>
//               <button className="Btn" onClick={handleLogout}>
//                 <div className="sign">
//                   <svg viewBox="0 0 512 512">
//                     <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
//                   </svg>
//                 </div>

//                 <div className="text">Logout</div>
//               </button>
//             </>
//           )}
//         </div>

//         <div className="burger_menu">
//           <input
//             hidden
//             className="check-icon"
//             id="check-icon"
//             name="check-icon"
//             type="checkbox"
//             checked={menuVisible}
//             onChange={handleMenuToggle}
//           />
//           <label className="icon-menu" htmlFor="check-icon">
//             <div className="bar bar--1"></div>
//             <div className="bar bar--2"></div>
//             <div className="bar bar--3"></div>
//           </label>
//         </div>
//         {menuVisible && (
//           <div className="menu">
//             <p style={{ textAlign: "left" }}>
//               Hello <span>{user.username}</span>
//             </p>
//             <br />
//             <div className="list_menu">
//               <svg className="logout_menu" viewBox="0 0 512 512">
//                 <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
//               </svg>
//               <p onClick={handleLogout}>Logout</p>
//             </div>
//           </div>
//         )}
//       </nav>
//     </>
//   );
// };

// export default Navbar;

import { Link, useNavigate, useLocation } from "react-router-dom";
import Logo from "../assets/logo.svg";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { logoutUser } from "../store/usersSlice";
import { auth } from "../firebase/config";
import ReactGA from "react-ga4";

const Navbar = () => {
  const [menuVisible, setMenuVisible] = useState(false);
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const location = useLocation(); // Get the current location

  const handleMenuToggle = () => {
    setMenuVisible(!menuVisible);
  };

  const user = useSelector((state) => state.data.user.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    signOut(auth);
    ReactGA.event({
      category: "User",
      action: "Logout",
    });
    if (location.pathname === "/") {
      // If the user is on the home page, redirect to login page after logout
      navigate("/login");
    } else {
      // If the user is on any other page, redirect to home page
      navigate("/");
    }
  };

  // Determine if we are on the home page and user is logged out
  const isHomePage = location.pathname === "/";
  const isLoggedOut = !user;

  return (
    <>
      <nav>
        <div className="menu_options">
          <Link to={user ? "/home" : "/"}>
            <div className="logo">
              <img src={Logo} alt="Celebfie" />
            </div>
          </Link>
        </div>

        <div className="nav_list">
          <ul className="menu_items">
            <Link to="/home">
              <li>
                <b
                  className={`nav_options ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                >
                  <span className="material-symbols-outlined ico">home</span>{" "}
                  Home
                </b>
              </li>
            </Link>
            <Link to="/chat/urvashi-rautela">
              <li>
                <b
                  className={`nav_options ${
                    location.pathname === "/chat" ? "active" : ""
                  }`}
                >
                  <span className="material-symbols-outlined ico">forum</span>{" "}
                  Chat
                </b>
              </li>
            </Link>

            <Link to="/search">
              <li style={{ display: "none" }}>
                <b
                  className={`nav_options ${
                    location.pathname === "/search" ? "active" : ""
                  }`}
                >
                  <span className="material-symbols-outlined ico">search</span>{" "}
                  Search
                </b>
              </li>
            </Link>
          </ul>
        </div>

        <div
          className="signup_btn"
          style={{
            display: "flex",
            width: "60%",
            justifyContent: "flex-end",
            gap: "20px",
          }}
        >
          {isLoggedOut && isHomePage ? (
            <>
              {/* <Link to="/chat/urvashi-rautela">
                <b className="mt-4 text-white hover:text-red-500">
                  <span className="material-symbols-outlined ico">forum</span>
                </b>
              </Link> */}
              <Link to="/chat/urvashi-rautela">
                <button
                  className="register_btn hidden custom-lg:hidden"
                  id="register_btn"
                >
                  <b className="text-white hover:text-[#ec5048] hover:underline">
                    Chat
                  </b>
                </button>
                <b className="text-white hover:text-[#ec5048] hover:underline custom-lg:hidden md:hidden">
                  Chat
                </b>
              </Link>

              <Link to="/signup">
                <button
                  className="register_btn hidden md:block"
                  id="register_btn"
                >
                  <b className="text-white hover:text-[#ec5048] hover:underline">
                    Sign Up
                  </b>
                </button>
                <b className="text-white hover:text-[#ec5048] hover:underline custom-lg:hidden md:hidden">
                  Sign Up
                </b>
              </Link>

              <Link to="/signin">
                <button className="login_btn hidden md:block">
                  <b className="text-white hover:text-[#ec5048] hover:underline custom-lg:hover:text-white md:hover:text-white">
                    Sign In
                  </b>
                </button>
                <b className="text-white hover:text-[#ec5048] hover:underline custom-lg:hidden md:hidden">
                  Sign In
                </b>
              </Link>
            </>
          ) : isLoggedOut ? (
            <>
              {/* <Link to="/chat/urvashi-rautela">
                <b className=" mt-4 text-white hover:text-red-500">
                  <span className="material-symbols-outlined ico">forum</span>
                </b>
              </Link> */}
              <Link to="/chat/urvashi-rautela">
                {/* <button className="register_btn" id="register_btn"> */}
                <b className="text-white underline p-2">Chat</b>
                {/* </button> */}
              </Link>

              <Link to="/register">
                {/* <button className="register_btn" id="register_btn"> */}
                <b className="text-white underline p-2">Register</b>
                {/* </button> */}
              </Link>

              <Link to="/signin">
                {/* <button className="login_btn"> */}
                <b className="text-white underline p-2">Login</b>
                {/* </button> */}
              </Link>
            </>
          ) : (
            <button className="Btn" onClick={handleLogout}>
              <div className="sign">
                <svg viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
              </div>
              <div className="text">Logout</div>
            </button>
          )}
        </div>

        {/* {!isLoggedOut && ( // Show the burger menu only if the user is logged in
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
        )}

        {menuVisible && !isLoggedOut && ( // Only show menu if burger menu is visible and user is logged in
          <div className="menu">
            <p >
            <span>{user.username ? user.username : "Guest User"}</span>
            </p>
            <br />
            <Link to="/home">
                <div className={`menu_item_mobile ${location.pathname === "/home" ? "active" : ""}`}>
                 Home
                </div>
              </Link>
              <Link to="/chat/urvashi-rautela">
          
                <div className={`menu_item_mobile ${location.pathname === "/chat" ? "active" : ""}`}>
                 Chat
                </div>
          
            </Link>
              <Link to="/search">
                <div className={`menu_item_mobile ${location.pathname === "/search" ? "active" : ""}`} style={{display: "none"}}>
                 Search
                </div>
              </Link>
            <div className="mobile_logout">
              <svg className="logout_menu" viewBox="0 0 512 512">
                <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
              </svg>
              <p onClick={handleLogout}>Logout</p>
            </div>
            
          </div>
        )} */}

        {!isLoggedOut && ( // Show the burger menu only if the user is logged in
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
        )}

        {menuVisible &&
          !isLoggedOut && ( // Only show menu if burger menu is visible and user is logged in
            //  <div className="mobile_menu_blur">
            <div className={`menu ${menuVisible ? "menu--visible" : ""}`}>
              <p>
                <span>{user.username ? user.username : "Guest User"}</span>
              </p>
              <br />
              <Link to="/home">
                <div
                  className={`menu_item_mobile ${
                    location.pathname === "/home" ? "active" : ""
                  }`}
                >
                  Home
                </div>
              </Link>
              <Link to="/chat/urvashi-rautela">
                <div
                  className={`menu_item_mobile ${
                    location.pathname === "/chat" ? "active" : ""
                  }`}
                >
                  Chat
                </div>
              </Link>
              <Link to="/search">
                <div
                  className={`menu_item_mobile ${
                    location.pathname === "/search" ? "active" : ""
                  }`}
                  style={{ display: "none" }}
                >
                  Search
                </div>
              </Link>
              <div className="mobile_logout">
                <svg className="logout_menu" viewBox="0 0 512 512">
                  <path d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"></path>
                </svg>
                <p onClick={handleLogout}>Logout</p>
              </div>
            </div>
            //  </div>
          )}
      </nav>
    </>
  );
};

export default Navbar;
