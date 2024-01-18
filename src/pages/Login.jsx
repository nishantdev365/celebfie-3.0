import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login_page">
        <b className="Please_login">Please login</b>
        <div className="input_sections">
          <p className="input_head">User name</p>
          <input type="text" />

          <p className="input_head">Password</p>
          <input type="text" />
        </div>

        <div className="login_page_btn">
        <div className="register_page_btn" >
            <Link to="/home">
              <b className="Register_btn_text">Login</b>
            </Link>
          </div>

         <div className="or_section">
            <div className="hr_line"></div>
         <b className="login_or">OR</b>
         </div>

          <div className="register_page_btn" >
            <Link to="/register">
              <b className="Register_btn_text">Register</b>
            </Link>
          </div>
        </div>

        <Link to="/home"><b className="skip">Skip</b></Link>
      </div>
    </>
  );
};

export default Login;
