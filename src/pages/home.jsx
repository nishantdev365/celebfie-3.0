import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import Logo from "../assets/logo.svg";
// import Info from "../assets/info.png";
// import Banner from "../assets/slide-img.png"
import Facebook from "../assets/facebook_icon.png";
import Instagram from "../assets/instagram_icon.png";
import Play from "../assets/play.png";
// import Visa from "../assets/visa-mastercard-icon.png";
// import Footer from "../components/Footer";
import ReactPlayer from "react-player";
import ReactModal from "react-modal";
import video from "../assets/video.mp4";
// import Signup from "../components/signup";
import { Helmet } from "react-helmet";

const Home = () => {
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [isPopupOpen, setPopupOpen] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);

  // const handleSignupButtonClick = () => {
  //   setShowSignup(!showSignup); // Toggle the state (show/hide)
  // };

  useEffect(() => {
    let MemberSpace = window.MemberSpace || { subdomain: "celebfie" };
    (function (d) {
      var s = d.createElement("script");
      s.src = "https://cdn.memberspace.com/scripts/widgets.js";
      var e = d.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(s, e);
    })(document);

    return () => {};
  }, []);

  useEffect(() => {
    if (window.Memberspace && !window.Memberspace.isMember()) {
      navigate("/?msopen=/member/sign_in");
    }
  }, [navigate]);

  const handleTriggerClick = () => {
    setPopupOpen(!isPopupOpen);
  };

  const ClosePopup = () => {
    setPopupOpen(false);
  };

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
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

  const handlTaapseePage = () => {
    if (isMobile) {
      navigate("/chat/taapsee-pannu");
    } else {
      navigate("/chat/taapsee-pannu");
    }
  };
  const handlUrvashiPage = () => {
    if (isMobile) {
      navigate("/chat/urvashi-rautela");
    } else {
      navigate("/chat/urvashi-rautela");
    }
  };

  const handlSukhwinderPage = () => {
    if (isMobile) {
      navigate("/chat/sukhwinder-singh");
    } else {
      navigate("/chat/sukhwinder-singh");
    }
  };

  const handlMalaikaPage = () => {
    if (isMobile) {
      navigate("/chat/malaika-arora");
    } else {
      navigate("/chat/malaika-arora");
    }
  };

  const handlKaranPage = () => {
    if (isMobile) {
      navigate("/chat/karan-johar");
    } else {
      navigate("/chat/karan-johar");
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Celebfie</title>
        <meta name="description" content="Talk with Virtual Celebrities" />
        <link rel="canonical" href="https://celebfie.vercel.app" />
        <link
          rel="icon"
          href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
        />

        <meta property="og:title" content="Celebfie" />
        <meta
          property="og:description"
          content="Talk with Virtual Celebrities"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://celebfie.vercel.app" />
      </Helmet>

      <section className="homepage">
        {/* {showSignup && <Signup />} */}
        <div className="mobile_banner">
          <div className="banner_play" onClick={openModal}></div>
          {isMobile && (
            <div className="video" onClick={openModal}>
              <ReactModal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                shouldCloseOnOverlayClick={true}
                style={{
                  content: {
                    top: "25%",
                    left: "50%",
                    right: "auto",
                    bottom: "auto",
                    marginRight: "-50%",
                    transform: "translate(-50%, -50%)",
                    borderRadius: "8px", // Adjust the radius as needed
                    border: "none", // Remove the default border
                    padding: "0",
                    width: "95%", // Adjust the width as needed
                    maxWidth: "900px", // Set a maximum width if desired
                    maxHeight: "90%", // Set a maximum height if desired
                  },

                  overlay: {
                    backgroundColor: "rgba(0, 0, 0, 0.5)", // Adjust overlay color and transparency
                  },
                }}
              >
                {/* <button onClick={closeModal}>Close Video</button> */}

                <ReactPlayer
                  url={video}
                  controls={true}
                  width="100%"
                  height="100%"

                  // light={true}
                />
              </ReactModal>
              {/* <img className="banner_play" src={Play} alt="play" /> */}
            </div>
          )}
        </div>
        {/* <div className="banner_section">
          <div className="blobs">
            <svg
              className="blob2"
              xmlns="http://www.w3.org/2000/svg"
              width="874"
              height="344"
              viewBox="0 0 874 344"
              fill="none"
            >
              <g filter="url(#filter0_d_1_278)">
                <path
                  d="M460.5 189.87C428.5 -7.59479 317.634 -20.1039 151 -20.1039L128 13.4026L29 1.78703V344.894H839C645.952 327.917 476.042 285.775 460.5 189.87Z"
                  fill="url(#paint0_linear_1_278)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_278"
                  x="0"
                  y="-52.1039"
                  width="874"
                  height="428.997"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dx="3" />
                  <feGaussianBlur stdDeviation="16" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.58 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_278"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_278"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_278"
                  x1="127.468"
                  y1="85.7859"
                  x2="868.102"
                  y2="760.607"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#700700" />
                  <stop offset="1" stopColor="#D00000" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="blob1"
              xmlns="http://www.w3.org/2000/svg"
              width="857"
              height="344"
              viewBox="0 0 857 344"
              fill="none"
            >
              <g filter="url(#filter0_d_1_279)">
                <path
                  d="M583.306 -0.893525C611.469 -14.3555 645.142 -16.4615 676.411 -0.893525H583.306C524.185 27.3668 489.346 105.672 552 175.574C621.683 253.318 791.484 221.371 780.5 344H-17V-0.893525H583.306Z"
                  fill="url(#paint0_linear_1_279)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_279"
                  x="-93"
                  y="-87.7941"
                  width="950.009"
                  height="507.794"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="38" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.01 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_279"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_279"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_279"
                  x1="61.2647"
                  y1="83.5428"
                  x2="770.513"
                  y2="594.515"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#700700" />
                  <stop offset="1" stopColor="#D00000" />
                </linearGradient>
              </defs>
            </svg>

            <svg
              className="blob3"
              xmlns="http://www.w3.org/2000/svg"
              width="185"
              height="213"
              viewBox="0 0 185 213"
              fill="none"
            >
              <g filter="url(#filter0_d_1_280)">
                <path
                  d="M198.471 182.275C177.612 47.2042 77.4659 -2.77973 30 -10.8878L209 -25.9116L198.471 182.275Z"
                  fill="url(#paint0_linear_1_280)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_280"
                  x="0"
                  y="-55.9116"
                  width="239"
                  height="268.187"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="15" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_280"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_280"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_280"
                  x1="51.7602"
                  y1="25.0564"
                  x2="321.593"
                  y2="114.598"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#700700" />
                  <stop offset="1" stopColor="#D00000" />
                </linearGradient>
              </defs>
            </svg>
            <svg
              className="blob4"
              xmlns="http://www.w3.org/2000/svg"
              width="260"
              height="181"
              viewBox="0 0 260 181"
              fill="none"
            >
              <g filter="url(#filter0_d_1_281)">
                <path
                  d="M276.578 48.4921C232.413 155.397 106.086 186.087 48.4436 188.069L279.837 189.959L276.578 48.4921Z"
                  fill="url(#paint0_linear_1_281)"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_1_281"
                  x="0.443604"
                  y="0.492065"
                  width="327.393"
                  height="237.467"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="24" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_1_281"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_1_281"
                    result="shape"
                  />
                </filter>
                <linearGradient
                  id="paint0_linear_1_281"
                  x1="69.1022"
                  y1="99.5717"
                  x2="368.993"
                  y2="259.191"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#700700" />
                  <stop offset="1" stopColor="#D00000" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="watch-video-wrapper">
            <img src={Play} alt="play" className="play_icon" />
            <b className="watch-video">Watch Video</b>
          </div>
          <div className="learn-more-wrapper">
            <img src={Info} alt="info" className="info_icon" />
            <b className="learn-more">Learn More</b>
          </div>
          <div className="experience-stardom">Experience Stardom</div>
          <div className="chat-and-connect">
            Chat and Connect with Your Favorite Celebs
          </div>
        </div> */}

        {isPopupOpen && (
          <div className="coming_soon_popup open">
            <strong>
              Coming <span className="soon_popup">Soon</span>
            </strong>
            <div className="close_popup" onClick={ClosePopup}></div>
          </div>
        )}

        {/* <Link to="/chatPage"> */}
        {/* <Link to="/chat/taapsee_pannu"> */}

        <div className="profile_section_cards">
          <div className="Explore_Bollywood">
            Explore <span>Bollywood Artist</span>
          </div>
          <div className="explore_bollywood_section">
            {/* <div className="Explore_Bollywood">
            Explore <span>Bollywood Artist</span>
          </div> */}
            <div className="profile_cards">
              <div
                className="profile taapsee_Pannu_profile"
                onClick={handlTaapseePage}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Taapsee Pannu</b>
                  <br />
                  <p className="bottom_text">Indian actress and producer</p>
                </div>
                <p className="start">Start Chat</p>
                <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p>
                {/* </Link> */}
              </div>

              <div
                className="profile urvashi_Rautela_profile"
                onClick={handlUrvashiPage}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Urvashi Rautela</b>
                  <br />
                  <p className="bottom_text">Bollywood actress, ace dancer</p>
                </div>
                <p className="start">Start Chat</p>
                <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p>
              </div>

              <div
                className="profile sukhwinder_Singh_profile"
                onClick={handlSukhwinderPage}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Sukhwinder Singh</b>
                  <br />
                  <p className="bottom_text">Singer, Rockstar Performer</p>
                </div>
                <p className="start">Start Chat</p>
                <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p>
              </div>

              <div
                className="profile malaika_Arora_profile"
                onClick={handlMalaikaPage}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Malaika Arora</b>
                  <br />
                  <p className="bottom_text">
                    Bollywood actress, global influencer
                  </p>
                </div>
                <p className="start">Start Chat</p>
                <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p>
              </div>

              <div
                className="profile karan_Johar_profile"
                onClick={handlKaranPage}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Karan Johar</b>
                  <br />
                  <p className="bottom_text">Producer, Director and TV host</p>
                </div>
                <p className="start">Start Chat</p>
                <p className="members_only">
                  {" "}
                  <span className="members_span">(</span> Members Only{" "}
                  <span className="members_span">)</span>{" "}
                </p>
              </div>
            </div>
          </div>

          <div className="Explore_Influencers">
            Explore <span>Influencers</span>
          </div>

          <div className="explore_influencers_section">
            {/* <div className="Explore_Influencers">
            Explore <span>Influencers</span>
          </div> */}
            <div className="profile_cards">
              <div
                className="profile agnijita_Banerjee_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
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

              <div
                className="profile hema_Adhikari_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
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

              <div
                className="profile rugees_Vini_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
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

              <div
                className="profile shalini_Chopra_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
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

              <div
                className="profile nilam_Parmar_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
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

          <div
            className="explore_sport_influencers_section"
            onClick={handleTriggerClick}
          >
            {/* <div className="Explore_Sport_Influencers">
            Explore <span>Sport Personalities</span>
          </div> */}
            <div className="profile_cards">
              <div className="profile virat_Kohli_profile">
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Virat Kohli</b>
                  <br />
                  <p className="bottom_text">International physique Athlete</p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile dhoni_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Dhoni</b>
                  <br />
                  <p className="bottom_text">International physique Athlete</p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile geeta_Phogat_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
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

              <div
                className="profile rani_Rampal_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
                  <div className="red_circle"></div>
                </div>

                <div className="filmmaker-and-television">
                  <b className="celeb_name">Rani Rampal</b>
                  <br />
                  <p className="bottom_text">Indian field hockey player</p>
                </div>
                <p className="start">Start Chat</p>
              </div>

              <div
                className="profile guru_Mann_profile"
                onClick={handleTriggerClick}
              >
                <div className="profile_center">
                  <div className="horizontal_line"></div>
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

        <div className="how_to_use_section">
          <div className="theory_how_to_use">
            <b className="how-to-use-container">
              {/* <span className="explore-bollywood-txt-container"> */}
   
                <p className="ai-chat">Welcome to Celebfie 3.0 <span className="how-to-use">– Your Gateway to Unparalleled Celeb connect!</span></p>
           
              {/* </span> */}
            </b>

            <div className="lorem_ipsum_dolor">
            Engage in meaningful and fascinating conversations with your favorite film stars, musicians, athletes, and influencers on our Conversational AI platform. Our celebrities have crafted their AI counterparts, allowing fans and brands to connect on a whole new level. Whether you seek knowledge, guidance, or just pure entertainment, Celebfie 3.0 brings you closer to the personalities you adore. Brands can seize the opportunity to collaborate with celebrities for impactful engagements. Elevate your interactions, learn, and have fun – Celebfie 3.0 is where authentic connections come to life!

    <br />
    Our platform operates seamlessly, offering a user-friendly experience for fans and brands alike. Upon entering Celebfie 3.0, users can explore a diverse array of AI versions of their favorite celebrities. Engaging in conversations is as simple as selecting a celebrity AI and initiating a chat. Through advanced natural language processing, these AI counterparts emulate the personalities of the real celebrities, ensuring a genuine and immersive interaction. Fans can inquire, share, and enjoy personalized responses, while brands can navigate an efficient collaboration request process. Celebfie 3.0 opens the door to a novel form of connection, where the magic of technology converges with the charisma of your beloved stars.
            </div>
          </div>
          <div className="video_show">
            <div className="play_btn">
              <img src={Play} className="play_btn_icon" alt="" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="110"
                viewBox="0 0 110 110"
                fill="none"
              >
                <circle opacity="0.51" cx="55" cy="55" r="55" fill="black" />
              </svg>
            </div>
          </div>
        </div>
      </section>

      {/* <div className="mobile_footer">
     <Link to="/home">   <span className="material-symbols-outlined mobile_footer_icon">
          explore
        </span></Link>
        <Link to="/chatPage">
        <span className="material-symbols-outlined mobile_footer_icon">
          forum
        </span>
        </Link>

        <span className="material-symbols-outlined mobile_footer_icon">
          settings
        </span>
      </div> */}

      {/* <Footer /> */}

      <footer>
        <div className="footer_left">
          <img className="footer_logo" alt="" src={Logo} />
          <div className="lorem-ipsum-dolor1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at porttitor mi. In eu ornare enim, vitae tincidunt magna. Nullam at
            convallis diam. Cras vitae tortor
          </div>
          <div className="social_icons">
  <a href="https://www.facebook.com/celebfieapp?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer">
    <img className="Facebook_icon" alt="facebook-icon" src={Facebook} />
  </a>

  <a href="https://www.instagram.com/celebfieapp/?igsh=bXo5MWtqYzZ6dHc1" target="_blank" rel="noopener noreferrer">
    <img className="instagram_icon" alt="instagram-icon" src={Instagram} />
  </a>
</div>
 
        </div>

        {/* <div className="sitemap_parent">
          <b className="sitemap">Sitemap</b>
          <div className="footer_sitemap_container">
            <p className="how-to-use">Image Chat</p>
            <p className="how-to-use">Gallery</p>
            <p className="how-to-use">My AI</p>
            <p className="how-to-use">My Chat</p>
          </div>
        </div>

        <div className="terms_and_condidions">Terms and Condidions</div>

        <img
          className="visa_icon"
          alt="visa-and-mastercard-logos-icon"
          src={Visa}
        /> */}
      </footer>
    </>
  );
};

export default Home;
