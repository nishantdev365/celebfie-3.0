import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { useState } from "react";
import { auth } from "../../firebase/config";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const Navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleRemeberPassword = () => {
    Navigate("/login");
  };

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {

        toast.success("Check your email for password reset link");
        setEmail("");
      
      })
      .catch((error) => {
   
        if (error.code === "auth/user-not-found") {
          toast.error("User not found");
        }
        if (error.code === "auth/invalid-email") {
          toast.error("Invalid email");
        }
        if (email === "") {
          toast.error("Please fill in all fields");
        }

  
      });
  };

  return (
    <>
      <div className="intro_screen forgot_page_screen">
        <img src={Logo} id="reset_intro_logo" alt="Logo" />
        <p className="intro_description">
          Celeb Vibes, Fan Tribes with AI Magic
        </p>

        <div id="forgot_page">
          <b style={{ fontSize: "22px", fontWeight: "700" }}>Forgot Password</b>
          <p style={{ fontWeight: 400, fontSize: "20px" }}>
            We will send password reset instructions and link via email
          </p>
          <div className="username_intro">Email</div>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            name="email"
            value={email}
            className="rectangle_div_intro"
            style={{ background: "transparent" }}
          />

          <div className="login_container_intro" onClick={handlePasswordReset}>
            <b className="login1_intro">Submit</b>
          </div>

          <b
            style={{
              fontSize: "18px",
              fontWeight: 600,
              cursor: "pointer",
              textAlign: "left",
              textDecoration: "underline",
            }}
            onClick={handleRemeberPassword}
          >
            Wait I Remember password
          </b>
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
          <p className="input_head">Email</p>
          <input
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            name="email"
            value={email}
          />

          <div onClick={handlePasswordReset} className="register_page_btn">
            <b className="Register_btn_text">Submit</b>
          </div>

          <b
            style={{
              fontSize: "18px",
              fontWeight: 600,
              cursor: "pointer",
              textAlign: "left",
              color: "#B5CDFF",
              textDecoration: "underline",
            }}
            onClick={handleRemeberPassword}
          >
            Wait I Remember password
          </b>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
