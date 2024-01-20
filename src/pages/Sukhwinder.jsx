import Right from "../assets/right-arrow.png";
import Bell from "../assets/bell-icon.svg";
import Gift from "../assets/gift.svg";
import Idea from "../assets/idea.svg";
import Learn from "../assets/learn.svg";
import Chat from "../assets/chat.svg";
import Close from "../assets/close.png";
// import Profile_back from "../assets/profile/taapsee-pannu-bg.png"
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// import { Link } from "react-router-dom";

const Sukhwinder = () => {
  const navigate = useNavigate();
  const [showPopUp, setshowPopUp] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleCloseButton = () => {
    setshowPopUp(false);
  };

  const handleShowPopUp = () => {
    setshowPopUp(true);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleBack = () => {
    navigate("/")
  }


  const handleCardClick = () => {
    if (isMobile) {
      navigate("/chat/sukhwinder-singh");
    } else {
      navigate("/chat/sukhwinder-singh");
    }
  };



  return (
    <>
      <section className="profile_page">
        <div className={`sukhwinder_singh_profile_background ${showPopUp ? 'blur-background' : ''}`}>
          {/* <img src={Profile_back} alt="" /> */}
        </div>
     {showPopUp && (<div className="popup_info">
     <div className="sukhwinder_singh_profile_background popup_background">
          {/* <img src={Profile_back} alt="" /> */}
        </div>
          <div className="close_btn" onClick={handleCloseButton}>
            <img src={Close} alt="close"/>
          </div>
    <div className="profile_paragraph">
    <p className="first_para">
            Discover the Art of Glamour with <b>Sukhwinder Singh</b>: Elevate your
            journey in the world of modeling
          </p>

          <div className="second_para">
            <ul>
              <li><p>
              Discover the Art of Glamour with
              Sukhwinder Singh: Elevate your journey
            in the world of modeling</p></li>
            <li>
          <p>Career Insights: Exclusive tips and guidance for aspiring models and actors, including portfolio reviews.</p>
            </li>
            <li>
           <p>Health & Wellness Coaching: Personalized fitness and nutrition plans, along with stress management strategies.</p>
            </li>
            </ul>
          </div>
    </div>

          <div className="popup_btn">
            <span>Pay Now</span><img className="popup_arrow" src={Right} alt="right" />
          </div>
        </div>)   }

       {/* <Link to="/home"> */}
       <div className="back_btn_profile" onClick={handleBack}></div>
       {/* </Link> */}
        <div className="sukhwinder_profile_pic"></div>
        <div className="name_details">
          <b className="profile_name">Sukhwinder Singh</b>
          <p className="profile_discription">
          Singer, Rockstar Performer
          </p>
        </div>
        <div className="primary_btn">
          <div className="subscribe">
            <img src={Bell} alt="bell" className="primary_img" />
            <p>Subscribe</p>
          </div>

         {/* <Link to="taapsee-pannu"> */}
         <div className="talk_2_me" onClick={handleCardClick}>

            <img src={Chat} alt="chat" className="primary_img" />
            <p>Talk To Me</p>
          </div>
         {/* </Link> */}
        </div>

        <div className="horizontal"></div>

        <div className="secondary_btn">
          <p className="services">Premium Services</p>

          <div className="get_advice" onClick={handleShowPopUp}>
            <img src={Idea} alt="idea" />
            <p>Get advice from me</p>
            <img src={Right} alt="right" />
          </div>
          <div className="learn" onClick={handleShowPopUp}>
            <img src={Learn} alt="learn" />
            <p>Learn from me</p>
            <img src={Right} alt="right" />
          </div>
          <div className="gifts" onClick={handleShowPopUp}>
            <img src={Gift} alt="gift" />
            <p>Here for you</p>
            <img src={Right} alt="right" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Sukhwinder;
