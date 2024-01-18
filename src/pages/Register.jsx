// import Slide from "../assets/slide-img.jpg"
import { Link } from "react-router-dom"

const Register = () => {
  return (
   <>
     <div className="register_page">
      <div className="navigate_back">
    <Link to="/login">  <div className="back_btn_register"></div></Link>
      <b className="register_heading">Register</b>
      </div>
{/* 
      <img className="register_slide_img" src={Slide} alt="slide" /> */}
        

        <div className="input_sections">
          <p className="input_head">
          User name
          </p> 
          <input type="text" />
          <p className="input_head">
          First Name
          </p> 
          <input type="text" />
          <p className="input_head">
          Last Name
          </p> 
          <input type="text" />
          <p className="input_head">
          Email Address
          </p> 
          <input type="text" />
          <p className="input_head">
          Password
          </p> 
          <input type="text" />
          <p className="input_head">
          Gender
          </p> 
         <div className="radio_btn">
         <input type="radio" name="Male" id="Male" className="input_radio"/>
          <p>Male</p>
          <input type="radio" name="Female" id="Female" className="input_radio"/>
          <p>Female</p>
         </div>

         <div className="register_page_btn" >
            <Link to="/home">
              <b className="Register_btn_text">Register</b>
            </Link>
          </div>
        </div>
     </div>
   </>
  )
}

export default Register