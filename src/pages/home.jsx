import { Link } from "react-router-dom";
import Logo from '../assets/logo.png';
import Info from '../assets/info.png';
import Facebook from '../assets/facebook_icon.png';
import Instagram from '../assets/instagram_icon.png';
import Play from '../assets/play.png';
import Visa from '../assets/visa-mastercard-icon.png';
import Footer from "../components/Footer"

const home = () => {

  return (
    <>
      <section className="homepage">
      
        <div className="mobile_banner"></div>
        <div className="banner_section">
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
        </div>

        <div className="explore_bollywood_section">
          <div className="Explore_Bollywood">
            Explore <span>Bollywood</span>
          </div>
          <div className="profile_cards">


            <div className="profile taapsee_Pannu_profile">
            {/* <Link to="/chatPage"> */}
            <Link to="/chatPage/taapsee_Pannu">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Taapsee Pannu</b>
                <br />
                <p className="bottom_text">
                  filmmaker and television personality
                </p>
              </div>
              </Link>
            </div>
            
          

            <div className="profile urvashi_Rautela_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Urvashi Rautela</b>
                <br />
                <p className="bottom_text">
                  filmmaker and television personality
                </p>
              </div>
            </div>

            <div className="profile sukhwinder_Singh_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Sukhwinder Singh</b>
                <br />
                <p className="bottom_text">
                  filmmaker and television personality
                </p>
              </div>
            </div>

            <div className="profile malaika_Arora_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Malaika Arora</b>
                <br />
                <p className="bottom_text">
                  filmmaker and television personality
                </p>
              </div>
            </div>

            <div className="profile karan_Johar_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Karan Johar</b>
                <br />
                <p className="bottom_text">
                  filmmaker and television personality
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="explore_influencers_section">
          <div className="Explore_Influencers">
            Explore <span>Influencers</span>
          </div>
          <div className="profile_cards">
            <div className="profile agnijita_Banerjee_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Agnijita Banerjee</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
            </div>

            <div className="profile hema_Adhikari_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Hema Adhikari</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
            </div>

            <div className="profile rugees_Vini_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Rugees Vini</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
            </div>

            <div className="profile shalini_Chopra_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Shalini Chopra</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
            </div>

            <div className="profile nilam_Parmar_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">SNilam Parmar</b>
                <br />
                <p className="bottom_text">
                  fashion influencer, and social media influencer
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="explore_sport_influencers_section">
          <div className="Explore_Sport_Influencers">
            Explore <span>Sport Influencers</span>
          </div>
          <div className="profile_cards">
            <div className="profile virat_Kohli_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Virat Kohli</b>
                <br />
                <p className="bottom_text">
                  International physique Athlete
                </p>
              </div>
            </div>

            <div className="profile dhoni_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Dhoni</b>
                <br />
                <p className="bottom_text">
                International physique Athlete
                </p>
              </div>
            </div>

            <div className="profile geeta_Phogat_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Geeta Phogat</b>
                <br />
                <p className="bottom_text">
                  Geeta Phogat is a freestyle wrestler
                </p>
              </div>
            </div>

            <div className="profile rani_Rampal_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Rani Rampal</b>
                <br />
                <p className="bottom_text">Indian field hockey player</p>
              </div>
            </div>

            <div className="profile guru_Mann_profile">
              <div className="horizontal_line">
                <div className="red_circle"></div>
              </div>

              <div className="filmmaker-and-television">
                <b className="celeb_name">Guru Mann</b>
                <br />
                <p className="bottom_text">
                  Fitness Trainer & Fitness Celebrity
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="how_to_use_section">
          <div className="theory_how_to_use">
            <b className="how-to-use-container">
              <span className="explore-bollywood-txt-container">
                <p className="how-to-use">How to use</p>
                <p className="ai-chat">AI Chat</p>
              </span>
            </b>

            <div className="lorem_ipsum_dolor">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at porttitor mi. In eu ornare enim, vitae tincidunt
              magna. Nullam at convallis diam. Cras vitae tortor justo. Donec
              varius justo rhoncus, luctus est et, luctus erat. Etiam rutrum vel
              ipsum vel ultricies. Quisque efficitur ut purus vitae tristique.
              Proin nisl velit, gravida non elementum ut, suscipit at turpis.
              Aenean viverra ex massa, et interdum lectus efficitur in.
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

      <Footer />

      <footer>
        <div className="footer_left">
          <img className="footer_logo" alt="" src={Logo} />
          <div className="lorem-ipsum-dolor1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            at porttitor mi. In eu ornare enim, vitae tincidunt magna. Nullam at
            convallis diam. Cras vitae tortor
          </div>
          <div className="social_icons">
            <img
              className="Facebook_icon"
              alt="facebook-icon"
              src={Facebook}
            />

            <img
              className="instagram_icon"
              alt="instagram-icon"
              src={Instagram}
            />
          </div>
        </div>

        <div className="sitemap_parent">
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
        />
      </footer>

 
    </>
  );
};

export default home;
