// import QuoteImg from "../assets/quote.png";
// import RaminderSingh from "../assets/raminder_singh.jpg";
import { useEffect } from "react";

import Img1 from "../assets/image1.png";
import Img2 from "../assets/image2.png";
import Img3 from "../assets/image3.png";

import AboutImg1 from "../assets/about-page-img1.jpg";
import AboutImg2 from "../assets/about-page-img2.jpg";
import AboutImg3 from "../assets/about-page-img3.png";

import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook_icon.png";
import Instagram from "../assets/instagram_icon.png";
import Visa from "../assets/visa-mastercard-icon.png";

// import Instagram_Vector from "../assets/instagram_vector.png";
// import Linkedin_vector from "../assets/linkedin_vector.png"
// import { useState } from "react";
import Testimonial from "../components/Testimonial";
import Team from "../components/Team";
import AOS from "aos";
import "aos/dist/aos.css";

const Landingpage = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (ms)
      once: true, // Animation happens only once - while scrolling down
      easing: "ease-out-cubic", // Easing for AOS animations
    });
  }, []);
  // const [selectedProfile, setSelectedProfile] = useState(null);

  // const teamProfiles = [
  //   {
  //     name: "Raminder Singh",
  //     role: "Founder and CEO",
  //     image: RaminderSingh,
  //     content:
  //       "Hey there! I’m Raminder, the Founder behind this magical world of Celebfie. Think of me as your guide to the ultimate fan experience! I’m on a mission to help you connect with your fave celebs in ways you never thought possible—seriously, chatting with them after binge-watching their latest movie isn’t just a dream anymore! Buckle up for a fun ride as we dive into this wild adventure together. Let’s make some unforgettable memories.",
  //     socialLinks: {
  //       linkedin: "https://www.linkedin.com/in/raminders/",
  //       instagram: "https://www.instagram.com/ramindersinggh/",

  //     },
  //   },
  //   {
  //     name: "Harshal Dhir",
  //     role: "AI Tech Wiz",
  //     image: null,
  //     content:
  //       "Hi! I’m Harshal, the tech wizard behind the AI magic at Celebfie 3.0. I’m passionate about blending cutting-edge technology with creativity to make those magical connections happen. It’s all about bringing fans and celebrities closer together, so get ready for some awesome interactions powered by AI! Can’t wait for you to join us on this exciting journey.",
  //     socialLinks: {
  //       linkedin: Linkedin_vector,
  //       instagram: Instagram_Vector,
  //     },
  //   },
  // ];

  // const handleCardClick = (profile) => {
  //   if (selectedProfile === profile) {
  //     setSelectedProfile(null); // Deselect if the same profile is clicked again
  //   } else {
  //     setSelectedProfile(profile);
  //   }
  // };

  return (
    <>
      <main style={{ backgroundColor: "#0a0f1f" }}>
        <div className="about_us_hero_section" style={{ color: "white" }}>
          <div className="hero_section_text" style={{ marginBottom: "4rem" }}>
            <p className="we_are">
              We Are 
            </p>
            <p className="custom-lg:hidden" style={{ color: "#ec5048", fontSize: "2.7em", fontWeight: "700" }}>Celebfie <span style={{fontSize: "0.6em"}}>3.0</span></p>
            <img
              src={Logo}
              alt=""
              className="celebfie_logo"
              
            />
            <p className="hero_section_text_line">
              Bringing You Closer to Celebrities with AI Magic!
            </p>
            <p className="hero_section_text_line1">
              ✓ Get ready to vibe with AI personas of your favorite celebs,
              chatting through texts, pics, and voice notes like you’re BFFs!
            </p>
            <p className="hero_section_text_line1">
              ✓ Connect with celebs in a whole new way—real-time convos and
              unique experiences that make you feel truly seen and heard.
            </p>
            <p className="hero_section_text_line1">
              ✓ Brands can now roll with the coolest crowd, partnering with AI
              celebs for epic collabs and marketing that actually speaks to fans
            </p>
          </div>

        

          <div className="how_this_works_mobile">
            <div
              className="content"
              data-aos="fade-up"
              data-aos-duration="1500"
              data-aos-delay="200"
            >
              <h1
                className="About_heading"
                // style={{
                //   fontSize: "2em",
                //   fontWeight: "700",
                //   lineHeight: "normal",
                //   marginBottom: "10px",
                // }}
              >
                Your Star-Studded Guide!
              </h1>
              <p style={{ fontSize: "1em", lineHeight: "27px" }}>
                Join the fun by chatting with our AI celebrity personas! Just
                pick your favorite star, send texts, share pics, or even hop on
                a voice or video call. It’s like having your own celeb BFF—right
                in your pocket! Get ready for an interactive experience that
                brings you closer to the stars you love.
              </p>
            </div>
            <div className="image">
              <img src={Img1} alt="" className="image_1" />
              <img src={Img2} alt="" className="image_2" />
              <img src={Img3} alt="" className="image_3" />
            </div>
          </div>
        </div>

        <hr
          className="hr_line"
          style={{ border: "0.5px solid grey", backgroundColor: "#0a0f1f" }}
        />

        <div className="how_this_works">
          <div
            className="content"
            data-aos="fade-up"
            data-aos-duration="1500"
            data-aos-delay="200"
          >
            <h1
              className="About_heading"
              // style={{
              //   fontSize: "2em",
              //   fontWeight: "700",
              //   lineHeight: "normal",
              //   marginBottom: "10px",
              // }}
            >
              Your Star-Studded Guide!
            </h1>
            <p style={{ fontSize: "1em", lineHeight: "27px" }}>
              Join the fun by chatting with our AI celebrity personas! Just pick
              your favorite star, send texts, share pics, or even hop on a voice
              or video call. It’s like having your own celeb BFF—right in your
              pocket! Get ready for an interactive experience that brings you
              closer to the stars you love.
            </p>
          </div>
          <div className="image">
            <img src={Img1} alt="" className="image_1" />
            <img src={Img2} alt="" className="image_2" />
            <img src={Img3} alt="" className="image_3" />
          </div>
        </div>

        <div className="aboutus_middle_section" style={{ display: "none" }}>
          <div
            className="explain_content1"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="content2">
              <h1
                className="About_heading"
                // style={{
                //   fontSize: "2em",
                //   fontWeight: "700",
                //   lineHeight: "normal",
                //   marginBottom: "10px",
                // }}
              >
                Explore Your Fan-tastic Journey!
              </h1>
              <p style={{ fontSize: "1em", lineHeight: "27px" }}>
                Dive into a world of fun with Celebfie 3.0! Enjoy tons of
                engaging features where you can chat and connect with your
                favorite celebs like never before. As you interact, earn
                “Celeboins” through fun emojis like Hugs, Kisses, and Winks from
                your stars. Use these coins to snag exclusive celeb merch, VIP
                concert passes, tickets for amazing events, or even meet your
                idols in person! Your fandom just got a whole lot more
                rewarding.
              </p>
            </div>
            <div className="image2">
              <img src={AboutImg1} style={{ borderRadius: "12px" }} alt="" />
            </div>
          </div>

          <div
            className="explain_content2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="content2">
              <h1
                className="About_heading"
                // style={{
                //   fontSize: "2em",
                //   fontWeight: "700",
                //   lineHeight: "normal",
                //   marginBottom: "10px",
                // }}
              >
                Join the Brand-tastic Revolution!
              </h1>
              <p style={{ fontSize: "1em", lineHeight: "27px" }}>
                Get in on the action with Celebfie 3.0! Leverage our superstar
                celebs to showcase your products and promotions to a passionate
                fan base that’s ready to engage. With Celebfie, you don’t just
                attract customers—you gain raving fans who love connecting with
                their idols and discovering brands they trust. Elevate your
                marketing game and make a lasting impact with our innovative
                platform.
              </p>
            </div>
            <div className="image2">
              <img src={AboutImg2} alt="" style={{ borderRadius: "12px" }} />
            </div>
          </div>

          <div
            className="explain_content3"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
          >
            <div className="content2">
              <h1
                className="About_heading"
                // style={{
                //   fontSize: "2em",
                //   fontWeight: "700",
                //   lineHeight: "normal",
                //   marginBottom: "10px",
                // }}
              >
                Claim Your AI Star Power!
              </h1>
              <p style={{ fontSize: "1em", lineHeight: "27px" }}>
                Step into the future with Celebfie 3.0! By creating your
                official AI persona, you can connect with your fans like never
                before. This virtual sidekick is always there to share your
                story, promote your projects, and keep your audience engaged
                24/7. Expand your global fan base and ensure your genuine
                supporters know exactly where to find you. Plus, you’re opening
                up an exciting new channel for monetization while safeguarding
                your brand against unauthorized use of your AI likeness. Embrace
                this innovative platform and enhance your connection with fans
                while building a lasting legacy in the digital world.
              </p>
            </div>
            <div className="image2">
              <img src={AboutImg3} alt="" style={{ borderRadius: "12px" }} />
            </div>
          </div>
        </div>

        <hr
          className="hr_line"
          style={{
            border: "0.5px solid grey",
            backgroundColor: "#0a0f1f",
            display: "none",
          }}
        />

        <div className="testimonial_container" style={{ display: "none" }}>
          <div className="testimonial_title">
            <p className="About_heading" style={{ marginTop: "10px" }}>
              Some of our Happy Fans
            </p>
          </div>

          <Testimonial />
        </div>

        <div className="bottom_section" style={{ display: "none" }}>
          <p className="About_heading our_team_text">Our Team</p>
          {/* <div className="our_team">
        
            <div className="team_profile_cards">
              {teamProfiles.map((profile, index) => (
                <div
                  key={index}
                  className={`profile_card${index + 1} card`}
                  onClick={() => handleCardClick(profile)}
                >
                  <img src={profile.image} alt={profile.name} />
                  <div className="team_profile_info">
                    <p className="team_name">{profile.name}</p>
                    <p>({profile.role})</p>
                    <div
                      className="social_icons"
                      style={{ gap: "10px", marginTop: "10px" }}
                    >
                      {profile.socialLinks.linkedin && (
                        <a
                          href={profile.socialLinks.linkedin}
                          target="_blank"
                          rel="noreferrer"
                        >
                          <img
                            src={Linkedin_vector}
                            alt="linkedin Vector"
                          />
                        </a>
                      )}
                      {profile.socialLinks.instagram && (
                         <a
                         href={profile.socialLinks.instagram}
                         target="_blank"
                         rel="noreferrer"
                       >
                        <img
                          src={Instagram_Vector}
                          alt="Instagram Vector"
                        />
                        </a>
                      )}
                      {profile.socialLinks.facebook && (
                        <img
                          src={profile.socialLinks.facebook}
                          alt="Facebook Vector"
                        />
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {selectedProfile && (
            <div className="our_team_container">
              <div className="content2">
                <p style={{ fontSize: "1.3em", lineHeight: "30px" }}>
                  <span>
                    <img
                      src={QuoteImg}
                      style={{
                        width: "35px",
                        height: "35px",
                        marginBottom: "10px",
                       
                      }}
                      alt=""
                    />
                  </span>
                  {selectedProfile.content}
                </p>
                <p
                  style={{
                    fontSize: "1.2em",
                    lineHeight: "35px",
                    marginTop: "10px",
                  }}
                >
                  {" "}
                  . {selectedProfile.name}
                  
                </p>
                <p> ( {selectedProfile.role} )</p>
              </div>
              <div className="image_team">
                <img
                  src={selectedProfile.image}
                  alt={selectedProfile.name}
                  style={{
                    borderRadius: "25px",
                    borderWidth: "2.5px",
                    width: "545px",
                    height: "470px",
                    objectFit: "cover",
                  }}
                />
              </div>
            </div>
          )} */}

          <Team />
        </div>

        <div className="contact_section" style={{ display: "none" }}>
          <div className="contact_info_section">
            <h1
              className="About_heading"
              // style={{
              //   fontSize: "45px",
              //   fontWeight: "700",
              //   paddingBottom: "20px",
              // }}
            >
              Let’s Connect!
            </h1>
            <p
              style={{
                fontSize: "1em",
                lineHeight: "27px",
                paddingBottom: "50px",
                textAlign: "justify",
              }}
            >
              We’re here for you! Whether you have questions, feedback, or just
              want to say hi, we’d love to hear from you. Fill out the form
              below, and our team will get back to you as soon as possible.
              Let’s make this experience even more amazing together.
            </p>

            <p className="About_heading">Our Locations</p>

            <p
              style={{
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "27px",
              }}
            >
              UAE OFFICE
            </p>

            <p>E-19, CNN Building-2 Dubai Media City, Dubai,+971555542369</p>

            <br />
            <p
              style={{
                fontSize: "24px",
                fontWeight: "400",
                lineHeight: "27px",
                paddingtop: "20px",
              }}
            >
              INDIA OFFICE
            </p>

            <p>EH2/001 Ground Floor, Eldeco Utopia Sec 93A, Noida 201304</p>
          </div>

          <div className="about_form_section">
            {/* <form action="post">
              <label
                htmlFor="html"
                style={{ fontSize: "18px", lineHeight: "40px" }}
              >
                Name
              </label>
              <input type="text" placeholder="Your Full Name" />

              <label
                htmlFor="html"
                style={{ fontSize: "18px", lineHeight: "40px" }}
              >
                Email
              </label>
              <input type="text" placeholder="Your Email ID"/>

              <label
                htmlFor="html"
                style={{ fontSize: "18px", lineHeight: "40px" }}
              >
                Phone Number
              </label>
              <input type="text" placeholder="Your Phone Number"/>

              <label
                htmlFor="html"
                style={{ fontSize: "18px", lineHeight: "40px" }}
              >
                Message
              </label>
              <input style={{ height: "100px", lineHeight: "40px", paddingRight: "20px" }} type="text" placeholder="Write Your Message Here"/>

              <div className="register_form_page_btn">
                <b className="Register_btn_text">Send Message</b>
              </div>
            </form> */}
            <div className="about-form-section">
              <form action="/submit" method="post">
                <div className="form-group">
                  <label htmlFor="name">
                    Name <span className="required">*</span>
                  </label>
                  <input
                    className="input_form"
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Full Name"
                    required
                    aria-required="true"
                    aria-label="Full Name"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="required">*</span>
                  </label>
                  <input
                    className="input_form"
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email ID"
                    required
                    aria-required="true"
                    aria-label="Email"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">
                    Phone Number <span className="required">*</span>
                  </label>
                  <input
                    className="input_form"
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone Number"
                    required
                    aria-required="true"
                    aria-label="Phone Number"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    title="Phone number format: 123-456-7890"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Write Your Message Here"
                    required
                    aria-required="true"
                    aria-label="Message"
                    rows="4"
                  ></textarea>
                </div>

                <button type="submit" className="register-form-page-btn">
                  <span className="register-btn-text">Send Message</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <div className="footer_left">
          <img className="footer_logo" alt="" src={Logo} />
          <div className="lorem-ipsum-dolor1">
            Where Fans, Brands and Celebs Unite in the Digital Spotlight!
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

export default Landingpage;
