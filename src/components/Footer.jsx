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
            className="material-symbols-outlined mobile_footer_icon active"
          />
        </Link>

        <img src={Message} alt="chat" className="mobile_footer_icon" />
        <img src={Settings} alt="settings" />
      </div>
    </>
  );
};

export default Footer;
