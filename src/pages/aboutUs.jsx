// import HeroImg from '../assets/slide-img2.jpg'
// import WorksImg from "../assets/workimg.png";
import ExplainImg from "../assets/explain_img.png";
import QuoteImg from "../assets/quote.png";
import RaminderSingh from "../assets/raminder_singh.png";
import TeamProfile1 from "../assets/team_profile1.png";
import TeamProfile2 from "../assets/team_profile2.png";
import TeamProfile3 from "../assets/team_profile3.png";
import TeamProfile4 from "../assets/team_profile4.png";
import TeamProfile5 from "../assets/team_profile5.png";
import Img1 from "../assets/image1.png"
import Img2 from "../assets/image2.png"
import Img3 from "../assets/image3.png"

import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook_icon.png";
import Instagram from "../assets/instagram_icon.png";
import Visa from "../assets/visa-mastercard-icon.png";
import Facebook_Vector from "../assets/facebook_vector.png"
import Instagram_Vector from "../assets/instagram_vector.png"

const aboutUs = () => {
  return (
    <>
      <main>
        <div className="about_us_hero_section" style={{color: "white"}}>
          <div className="hero_section_text">
          <p  className="we_are">We Are</p>
          <img src={Logo} alt="" className="celebfie_logo"/>
          <p  className="hero_section_text_line1">Creating Unforgettable Memories</p>
          <p className="hero_section_text_line2">✓ #1 Celeb Engagement App For Brands & Fans</p>
          <p  className="hero_section_text_line3">✓ Exclusive Celeb Videos</p>
          </div>
        </div>

        <div className="how_this_works">
          <div className="content">
            <h1 style={{ fontSize: "45px", fontWeight: "700"}}>
              How this works
            </h1>
            <p style={{ fontSize: "16px", lineHeight: "27px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse at porttitor mi. In eu ornare enim, vitae tincidunt
              magna. Nullam at convallis diam. Cras vitae tortor justo. Donec
              varius justo rhoncus, luctus est et, luctus erat. Etiam rutrum vel
              ipsum vel ultricies. Quisque efficitur ut purus vitae tristique.
              Proin nisl velit, gravida non elementum ut, suscipit at turpis.
              Aenean viverra ex mass
            </p>
          </div>
          <div className="image">
            <img src={Img1} alt=""  className="image_1" />
            <img src={Img2} alt="" className="image_2" />
            <img src={Img3} alt="" className="image_3" />
          </div>
        </div>

        <div className="aboutus_middle_section">
          <div className="explain_content1">
            <div className="content2">
              <h1 style={{ fontSize: "45px", fontWeight: "700" }}>
                Explain how this benefits for brands
              </h1>
              <p style={{ fontSize: "16px", lineHeight: "27px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse at porttitor mi. In eu ornare enim, vitae tincidunt
                magna. Nullam at convallis diam. Cras vitae tortor justo. Donec
                varius justo rhoncus, luctus est et, luctus erat. Etiam rutrum
                vel ipsum vel ultricies. Quisque efficitur ut purus vitae
                tristique. Proin nisl velit, gravida non elementum ut, suscipit
                at turpis. Aenean viverra ex massa, et interdum lectus efficitur
                in.
              </p>
            </div>
            <div className="image2">
              <img src={ExplainImg} alt="" />
            </div>
          </div>
          <hr className="hr_line"/>
          <div className="explain_content2">
            <div className="content2">
              <h1 style={{ fontSize: "45px", fontWeight: "700" }}>
                Explain how this benefits for brands
              </h1>
              <p style={{ fontSize: "16px", lineHeight: "27px" }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse at porttitor mi. In eu ornare enim, vitae tincidunt
                magna. Nullam at convallis diam. Cras vitae tortor justo. Donec
                varius justo rhoncus, luctus est et, luctus erat. Etiam rutrum
                vel ipsum vel ultricies. Quisque efficitur ut purus vitae
                tristique. Proin nisl velit, gravida non elementum ut, suscipit
                at turpis. Aenean viverra ex massa, et interdum lectus efficitur
                in.
              </p>
            </div>
            <div className="image2">
              <img src={ExplainImg} alt="" />
            </div>
          </div>
        </div>

        <div className="bottom_section">
          <div className="explain_content3">
            <div className="content2">
              <p style={{ fontSize: "34px", lineHeight: "46px" }}>
                <span>
                  <img src={QuoteImg} alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus sodales, turpis sed sodales ullamcorper, ligula urna
                cursus augue, a ullamcorper est nulla eu magna. Maecenas lacus
                lorem, cursus non.
              </p>
              <p style={{ fontSize: "27px", lineHeight: "46px" }}>
                . Raminder Singh
              </p>
            </div>
            <div className="image2">
              <img src={RaminderSingh} alt="" />
            </div>
          </div>

          <p
         
              className="our_team_text"
            >
              Our Team
            </p>

          <div className="our_team">
           
            <div className="team_profile_cards">
              <div className="profile_card1 card">
                <img src={TeamProfile1} alt="" />
                <div className="team_profile_info">
                  <p className="team_name">Amardeep Singh</p>
                  <div className="social_icons" style={{gap: "10px", marginTop: "10px"}}>
                  <img src={Instagram_Vector} alt="" />
                    <img src={Facebook_Vector} alt="" />
                  </div>
                </div>
              </div>

              <div className="profile_card2 card">
                <img src={TeamProfile2} alt="" />
                <div className="team_profile_info">
                  <p className="team_name">Mamta Lodhi</p>
                  <div className="social_icons" style={{gap: "10px", marginTop: "10px"}}>
                  <img src={Instagram_Vector} alt="" />
                    <img src={Facebook_Vector} alt="" />
                  </div>
                </div>
              </div>

              <div className="profile_card2 card">
                <img src={TeamProfile3} alt="" />
                <div className="team_profile_info">
                  <p className="team_name">Shalini Jain</p>
                  <div className="social_icons" style={{gap: "10px", marginTop: "10px"}}>
                  <img src={Instagram_Vector} alt="" />
                    <img src={Facebook_Vector} alt="" />
                  </div>
                </div>
              </div>

              <div className="profile_card2 card">
                <img src={TeamProfile4} alt="" />
                <div className="team_profile_info">
                  <p className="team_name">Navjot Kaur</p>
                  <div className="social_icons" style={{gap: "10px", marginTop: "10px"}}>
                  <img src={Instagram_Vector} alt="" />
                    <img src={Facebook_Vector} alt="" />
                  </div>
                </div>
              </div>

              <div className="profile_card2 card">
                <img src={TeamProfile5} alt="" />
                <div className="team_profile_info">
                  <p className="team_name">Ramesh Gupta</p>
                  <div className="social_icons" style={{gap: "10px", marginTop: "10px"}}>
                  <img src={Instagram_Vector} alt="" />
                    <img src={Facebook_Vector} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="contact_section">
          <div className="contact_info_section">
            <h1 style={{ fontSize: "45px", fontWeight: "700", paddingBottom: "20px" }}>Let’s talk</h1>
            <p style={{ fontSize: "18px", lineHeight: "27px", paddingBottom: "50px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
              eleifend nunc sed ex pulvinar, sed ornare elit elementum. Aenean
              convallis scelerisque ligula, et tincidunt sapien venenatis ac.
              Praesent volutpat rutrum dui in aliquam. Sed et mauris ac arcu
              tincidunt condimentum sit amet sed sapien.
            </p>
           
              <p style={{ fontSize: "30px", fontWeight: "700", lineHeight: "27px" , paddingBottom: "20px"}}>Our Locations</p>
         

              <p style={{ fontSize: "24px", fontWeight: "400",  lineHeight: "27px" }}>UAE OFFICE</p>
            
              <p>
                E-19, CNN Building-2 Dubai Media City, Dubai,+971555542369
              </p>
            
   <br />
              <p style={{ fontSize: "24px", fontWeight: "400",  lineHeight: "27px", paddingtop: "20px" }}>INDIA OFFICE</p>
          
              <p>
                EH2/001 Ground Floor, Eldeco Utopia Sec 93A, Noida 201304
              </p>
      
          </div>

          <div className="form_section">
            <form action="post">
              <label htmlFor="html" style={{fontSize: "18px", lineHeight: "40px"}}>Name</label>
              <input type="text" />

              <label htmlFor="html" style={{fontSize: "18px", lineHeight: "40px"}}>Email</label>
              <input type="text" />

              <label htmlFor="html" style={{fontSize: "18px", lineHeight: "40px"}}>Phone Number</label>
              <input type="text" />

              <label htmlFor="html" style={{fontSize: "18px", lineHeight: "40px"}}>Message</label>
              <input style={{height: "100px"}} type="text" />

              <div
              className="register_form_page_btn"
    
            >
              <b className="Register_btn_text">Send Message</b>
            </div>
            </form>
          </div>
        </div>
      </main>



      <footer>
        <div className="footer_left">
          <img className="footer_logo" alt="" src={Logo} />
          <div className="lorem-ipsum-dolor1">
            Celebfie is a platform where you can chat with your favorite
            celebrities and get to know them better.
          </div>
          <div className="social_icons">
            <a
              href="https://www.facebook.com/celebfieapp?mibextid=LQQJ4d"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="Facebook_icon"
                alt="facebook-icon"
                src={Facebook}
              />
            </a>

            <a
              href="https://www.instagram.com/celebfieapp/?igsh=bXo5MWtqYzZ6dHc1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="instagram_icon"
                alt="instagram-icon"
                src={Instagram}
              />
            </a>
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

export default aboutUs;
