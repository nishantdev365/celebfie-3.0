import { Link } from "react-router-dom";

import Message from "../assets/msg.svg"
import Explore from "../assets/explore.svg"

import Settings from "../assets/settings.svg"

const Footer = () => {
  return (
  <>
     <div className="mobile_footer">
     <Link to="/home">  
        <img src={Explore} alt="explore" className="material-symbols-outlined mobile_footer_icon active" />
        </Link>
    
        {/* <span className="material-symbols-outlined mobile_footer_icon">
          forum
        </span> */}

        <img src={Message} alt="chat"  className="mobile_footer_icon"/>
       <img src={Settings} alt="settings" />
{/* 
        <span className="material-symbols-outlined mobile_footer_icon">
          settings
        </span> */}
      </div>
  </>
  )
}

export default Footer