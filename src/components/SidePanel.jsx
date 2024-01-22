import "../App.css";
import Tapsee from "../assets/Celebrity-profiles/taapsee-pannu.png";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
const SidePanel = () => {
  const { profileName } = useParams();

  useEffect(() => {
 
    const activeProfileElement = document.getElementById("profileName");
    if (activeProfileElement) {
     
      activeProfileElement.classList.add("activeProfile");
    }

    return () => {
      
    };
  }, [profileName]);
  return (
    <>
      {/* Sidebar Profile Section */}
      <div className="sidebar_profile_section">
        {/* Search Bar Section */}
        <div className="search_bar_section">
          <div className="back_process">
            <button className="back_btn"></button>
            <p className="chats_text">Chats</p>
          </div>
          <div className="custom_input">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg_icon bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"></path>
            </svg>
            <input
              type="text"
              className="search_bar"
              placeholder="Search Chats"
            />
          </div>
        </div>

        {/* Chat Profile Options */}
        <div className="chat_profile_options">
          <div className="rectangle-group" id="profileName">
            <img className="rectangle-icon" alt="profile-pic" src={Tapsee} />
            <div className="taapsee-pannu-parent">
              <div className="taapsee-pannu">Taapsee Pannu</div>
              <div className="filmmaker-and-television2">
                filmmaker and television personality
              </div>
            </div>
          </div>
          {/* Add more profile options as needed */}
        </div>
      </div>
    </>
  );
};

export default SidePanel;
