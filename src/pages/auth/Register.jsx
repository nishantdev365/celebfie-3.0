import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { auth } from "../../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { toast } from 'react-toastify';
import ReactGA from "react-ga4";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
const navigate = useNavigate();

const [showPassword, setShowPassword] = useState(true);

const handleTogglePassword = () => {
  setShowPassword(!showPassword);
};

  const handleSignUp = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        const user = auth.currentUser;

        ReactGA.set({
          userId: user.uid,
        });
  
      ReactGA.event({
        category: "User",
        action: "Register",
      });
        navigate("/");
        signInWithEmailAndPassword(auth, email, password).then(
          updateProfile(auth.currentUser, {
            displayName: username,
          })
        );
      })
      .catch((err) => {
        if(err.code === "auth/email-already-in-use") {
          toast.error("Email already in use");
        } if(err.code === "auth/invalid-email") {
          toast.error("Invalid email");
        } if(err.code === "auth/weak-password") {
          toast.error("Password should be at least 6 characters");
        } if(email === "" || password === "") {
          toast.error("Please fill required fields");
        } 
        
        console.log(err.message);
      });

      
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

 

  return (
    <>
     
      <div className="intro_screen">
        <div className="register_page">
          <div className="navigate_back">
            <Link to="/login">
              
              <div className="back_btn_register"></div>
            </Link>
            <b className="register_heading">Register</b>
          </div>
       

          <div className="input_sections">
            <p className="input_head">User name</p>
            <input type="username" name="username"  onChange={(e) => setUsername(e.target.value)}/>
            <p className="input_head">First Name</p>
            <input type="firstname"  name="firstname" />
            <p className="input_head" >Last Name</p>
            <input type="lastname" name="lastname" />
            <p className="input_head">Email Address</p>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email"
            />
            <p className="input_head">Password</p>
            <div className="password_input">
        <input onChange={(e) => setPassword(e.target.value)} type={showPassword ? 'password' : 'text'} name="password" className="frame_child3_intros" />
        <span className="password_toogle" onClick={handleTogglePassword}> {showPassword ? "Show" : "Hide"} </span>                           
        </div>
            <p className="input_head">Gender</p>
            <div className="radio_btn">
              <input
                type="radio"
                name="Male"
                id="Male"
                className="input_radio"
              
              />
              <p>Male</p>
              <input
                type="radio"
                name="Female"
                id="Female"
                className="input_radio"
               
              />
              <p>Female</p>
            </div>

            <div
              onClick={handleSignUp}
              className="register_page_btn"
              style={{marginBottom: "10px"}}
            >
              
              <b className="Register_btn_text">Register</b>
            
            </div>
           <Link to="/login"> 
           <p style={{textAlign: "center"}}>
              Already have an account <span className="register_now">Sign In </span>
            </p>
           </Link>
            {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
          </div>
        </div>
      </div>

      {/* ---------------------------FOR-MOBILE-SCREEN------------------------ */}

      <div className="register_page_mobile">
        <div className="navigate_back">
          <Link to="/login">
            {" "}
            <div className="back_btn_register"></div>
          </Link>
          <b className="register_heading">Register</b>
        </div>

        <div className="input_sections">
          <p className="input_head">User name</p>
          <input type="username" name="username"   onChange={(e) => setUsername(e.target.value)} />
          <p className="input_head">First Name</p>
          <input type="firstname"  name="firstname"  />
          <p className="input_head">Last Name</p>
          <input type="lastname" name="lastname"  />
          <p className="input_head">Email Address</p>
          <input
             onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
          />
          <p className="input_head">Password</p>
          <div className="password_input_mobile">
        <input onChange={(e) => setPassword(e.target.value)}  type={showPassword ? 'password' : 'text'} name="password" />
          <span className="password_toogle_mobile" onClick={handleTogglePassword}>{showPassword ? "Show" : "Hide"}</span>  
        </div>
          <p className="input_head">Gender</p>
          <div className="radio_btn">
            <input type="radio" name="Male" id="Male" className="input_radio" />
            <p>Male</p>
            <input
              type="radio"
              name="Female"
              id="Female"
              className="input_radio"
            />
            <p>Female</p>
          </div>

          <div onClick={handleSignUp} className="register_page_btn">
            {/* <Link to="/"> */}
            <b className="Register_btn_text">Register</b>
            {/* </Link> */}
          </div>

           {/* {error && <p style={{ color: "red" }}>{error}</p>} */}
        </div>


      </div>
    </>
  );
};

export default Register;
