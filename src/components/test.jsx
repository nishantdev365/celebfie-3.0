import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import Group from "../assets/group.png";

import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import chatBot from "../api/chatBot"
// import chatBot2 from "../api/chatBot"

const Home = ({ addProfile }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: location.pathname })
  }, [location.pathname]);
  

  const handleTriggerClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  const ClosePopup = () => {
    setPopupOpen(false)
  }


  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    console.log('Closing modal');
    setModalIsOpen(false);
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


  const userName = localStorage.getItem("machaaoUser");
  console.log("Authenticating user:", userName);


  const handleClick = (event, bot) => {
    event.preventDefault();
    if (bot.mkey === null) {
      setPopupOpen(!isPopupOpen);
    } else {
      
      navigate(isMobile ? `/profile/${bot.name}` : `/chat/${bot.name}`)
      // window.location.href = isMobile ? `/profile/${bot.name}` : `/bot/${bot.name}`;
    }
    console.log("Bot clicked:", bot);
  };
  

  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>Celebfie</title>
        <meta name="description" content="Celebfie is a platform where you can chat with your favorite celebrities and get to know them better." />
        <link rel="canonical" href="https://celebfie.vercel.app" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705949513/prfdawpa7qmthwtk3tcb.png"
        />

        <meta property="og:title" content="Celebfie" />
        <meta
          property="og:description"
          content="Talk with Virtual Celebrities"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705949513/prfdawpa7qmthwtk3tcb.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://celebfie.vercel.app" />
      </Helmet>
      <section className="homepage"> 
      
      



        {isPopupOpen && (
        <div className="coming_soon_popup open">
        <div className="coming_soon_popup_inner">
          <img src={Group} alt="group" />
          <div className="coming_soon_popup_text">
            <h1 className="coming_soon_heading">Coming Soon!</h1>
            <p className="coming_soon_para">
              For you to interact not just with this celebrity but with
              their AI-driven characters. This immersive experience will
              transform conversations into memorable engagement.
            </p>
          </div>
          <button className="comming_soon_close_btn" onClick={ClosePopup}>
            Close
          </button>
        </div>
        <div className="close_popup" onClick={ClosePopup}></div>
      </div>
      )}


<div className="profile_section_cards">

<div className="Explore_Bollywood">
            Explore <span>Bollywood Artist</span>
          </div>
<div className="explore_bollywood_section">
       
          <div className="profile_cards">


          {chatBot.map(bot => (
              <div
                className="profile"
                
                key={bot.id} onClick={(event) => { handleClick(event, bot); addProfile(bot); }}

   
                style={{ background: `linear-gradient(2deg, rgba(0, 0, 0, 0.79) 15.8%, rgba(0, 0, 0, 0) 55.83%), url(${bot.profileImage}), lightgray`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat'}}
              >


           
                 <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">{bot.celebname}</b>
                  <br />
                  <p className="bottom_text">{bot.description}</p>
                </div>
                <p className="start">Start Chat</p>
   
    
              </div>
              ))} 





          </div>
        </div>

        <div className="Explore_Influencers">
            Explore <span>Influencers</span>
          </div>

        <div className="explore_influencers_section">
      
          <div className="profile_cards">
            <div className="profile agnijita_Banerjee_profile" onClick={handleTriggerClick}>
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Agnijita Banerjee</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
              <p className="start">Start Chat</p>
            </div>

            <div className="profile hema_Adhikari_profile" onClick={handleTriggerClick}>
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Hema Adhikari</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
              <p className="start">Start Chat</p>
            </div>

            <div className="profile rugees_Vini_profile" onClick={handleTriggerClick}>
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Rugees Vini</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
              <p className="start">Start Chat</p>
            </div>

            <div className="profile shalini_Chopra_profile" onClick={handleTriggerClick}>
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Shalini Chopra</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
              <p className="start">Start Chat</p>
            </div>

            <div className="profile nilam_Parmar_profile" onClick={handleTriggerClick}>
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">SNilam Parmar</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
              <p className="start">Start Chat</p>
            </div>
          </div>
        </div>

        <div className="Explore_Sport_Influencers">
            Explore <span>Sport Personalities</span>
          </div>

        <div className="explore_sport_influencers_section" onClick={handleTriggerClick}>
        
          <div className="profile_cards">
            <div className="profile virat_Kohli_profile">
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Virat Kohli</b>
                <br />
                <p className="bottom_text">International physique Athlete</p>
              </div>
              <p className="start">Start Chat</p>
            </div>

            <div className="profile dhoni_profile" onClick={handleTriggerClick}>
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Dhoni</b>
                <br />
                <p className="bottom_text">International physique Athlete</p>
              </div>
              <p className="start">Start Chat</p>
            </div>

            <div className="profile geeta_Phogat_profile" onClick={handleTriggerClick}>
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Geeta Phogat</b>
                <br />
                <p className="bottom_text">
                  Geeta Phogat is a freestyle wrestler
                </p>
              </div>
              <p className="start">Start Chat</p>
            </div>

            <div className="profile rani_Rampal_profile" onClick={handleTriggerClick}>
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Rani Rampal</b>
                <br />
                <p className="bottom_text">Indian field hockey player</p>
              </div>
              <p className="start">Start Chat</p>
            </div>

            <div className="profile guru_Mann_profile" onClick={handleTriggerClick}>
            <div className="profile_center">
            <div className="horizontal_line">
              </div>
              <div className="red_circle"></div>
            </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Guru Mann</b>
                <br />
                <p className="bottom_text">
                  Fitness Trainer & Fitness Celebrity
                </p>
              </div>
              <p className="start">Start Chat</p>
            </div>
          </div>
        </div>

</div>



    
      </section>


    </>
  );
};

export default Home;
