import { Link } from "react-router-dom";

import Message from "../assets/msg.svg";
import Explore from "../assets/explore.svg";

import Settings from "../assets/settings.svg";

const Footer = () => {
  return (
    <>
      <div className="mobile_footer">
        <Link to="/home">
          <img
            src={Explore}
            alt="explore"
            className={`mobile_footer_icon ${location.pathname === "/home" ? "active" : ""}`}/>
        </Link>

        <Link to="/chat/urvashi-rautela">
        <img src={Message} alt="chat" className={`mobile_footer_icon ${location.pathname === "/chat" ? "active" : ""}`} />
        </Link>

        
        <img src={Settings} alt="settings" />
      </div>
    </>
  );
};

export default Footer;
