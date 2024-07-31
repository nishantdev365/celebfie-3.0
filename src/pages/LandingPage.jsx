import QuoteImg from "../assets/quote.png";
import RaminderSingh from "../assets/raminder_singh.jpg";

// import TeamProfile2 from "../assets/team_profile2.png";
// import TeamProfile3 from "../assets/team_profile3.png";
// import TeamProfile4 from "../assets/team_profile4.png";
// import TeamProfile5 from "../assets/team_profile5.png";
import Img1 from "../assets/image1.png";
import Img2 from "../assets/image2.png";
import Img3 from "../assets/image3.png";
import ArrowRight from "../assets/arrow-right.png";
import ArrowLeft from "../assets/arrow-left.png";
import AboutImg1 from "../assets/about-page-img1.jpg";
import AboutImg2 from "../assets/about-page-img2.jpg";
import AboutImg3 from "../assets/about-page-img3.png";

import TestimonialPic1 from "../assets/testimonialpic1.png";
import TestimonialPic2 from "../assets/testimonialpic2.png";
import TestimonialPic3 from "../assets/testimonialpic3.png";
import TestimonialPic4 from "../assets/testimonialpic4.png";
import TestimonialPic5 from "../assets/testimonialpic5.png";
import TestimonialPic6 from "../assets/testimonialpic6.png";
import TestimonialPic7 from "../assets/testimonialpic7.png";

import Logo from "../assets/logo.svg";
import Facebook from "../assets/facebook_icon.png";
import Instagram from "../assets/instagram_icon.png";
import Visa from "../assets/visa-mastercard-icon.png";
// import Facebook_Vector from "../assets/facebook_vector.png";
import Instagram_Vector from "../assets/instagram_vector.png";
import Linkedin_vector from "../assets/linkedin_vector.png"
import { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Aamarr P.",
    image: TestimonialPic1,
    quote:
      "Chatting with my favorite celeb feels so personal! I loved earning Celeboins just by sharing moments together. Best experience ever",
  },
  {
    id: 2,
    name: "Sophie T.",
    image: TestimonialPic2,
    quote:
      "The AI interaction is mind-blowing! I can text my fave stars anytime and feel like they really get me. It’s more than just a fan site",
  },
  {
    id: 3,
    name: "Sandeep S., CEO of EcoTech Solutions",
    image: TestimonialPic3,
    quote:
      "Partnering with Celebfie means tapping into a vibrant fan community. Our campaigns feel more alive when celebs are genuinely connected",
  },
  {
    id: 4,
    name: "Simran K.",
    image: TestimonialPic4,
    quote:
      "I never thought I could actually virtually hang out with my idols. The emojis turn into Celeboins, and I have already got merch on the way",
  },
  {
    id: 5,
    name: "Dolly J., Marketing Manager at Trendy Apparel",
    image: TestimonialPic5,
    quote:
      "“Celebfie allowed us to showcase our products through authentic celebrity interactions, and we’ve seen our brand loyalty skyrocke",
  },
  {
    id: 6,
    name: "Vick R., Brand Strategist at Foodies Unite",
    image: TestimonialPic6,
    quote:
      "The innovative platform helped us engage fans in a fun, fresh way. Leveraging celeb influence has opened new doors for our brand",
  },
  {
    id: 7,
    name: "Nidhi V.",
    image: TestimonialPic7,
    quote:
      "I snagged VIP passes to a concert just by interacting with my stars! Celebfie 3.0 makes fandom totally rewarding",
  },
];

const Landingpage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoverIndex, setHoverIndex] = useState(null);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  const teamProfiles = [
    {
      name: "Raminder Singh",
      role: "Founder and CEO",
      image: RaminderSingh,
      content:
        "Hey there! I’m Raminder, the Founder behind this magical world of Celebfie. Think of me as your guide to the ultimate fan experience! I’m on a mission to help you connect with your fave celebs in ways you never thought possible—seriously, chatting with them after binge-watching their latest movie isn’t just a dream anymore! Buckle up for a fun ride as we dive into this wild adventure together. Let’s make some unforgettable memories.",
      socialLinks: {
        linkedin: "https://www.linkedin.com/in/raminders/",
        instagram: "https://www.instagram.com/ramindersinggh/",
       
      },
    },
    {
      name: "Harshal Dhir",
      role: "AI Tech Wiz",
      image: null,
      content:
        "Hi! I’m Harshal, the tech wizard behind the AI magic at Celebfie 3.0. I’m passionate about blending cutting-edge technology with creativity to make those magical connections happen. It’s all about bringing fans and celebrities closer together, so get ready for some awesome interactions powered by AI! Can’t wait for you to join us on this exciting journey.",
      socialLinks: {
        linkedin: Linkedin_vector,
        instagram: Instagram_Vector,
      },
    },
  ];

  const handleCardClick = (profile) => {
    if (selectedProfile === profile) {
      setSelectedProfile(null); // Deselect if the same profile is clicked again
    } else {
      setSelectedProfile(profile);
    }
  };

  return (
    <>
      <main>
        <div className="about_us_hero_section" style={{ color: "white"}}>
          <div className="hero_section_text">
            <p className="we_are">We Are</p>
            <img src={Logo} alt="" className="celebfie_logo" />
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
        </div>

        <div className="how_this_works">
          <div className="content">
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
            <p style={{ fontSize: "1.2em", lineHeight: "27px", textAlign: "justify" }}>
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

        <div className="aboutus_middle_section">
          <div className="explain_content1">
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
              <p style={{ fontSize: "1.2em", lineHeight: "27px", textAlign: "justify" }}>
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

          <div className="explain_content2">
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
              <p style={{ fontSize: "1.2em", lineHeight: "27px", textAlign: "justify" }}>
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

          <div className="explain_content1">
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
              <p style={{ fontSize: "1.2em", lineHeight: "27px", textAlign: "justify" }}>
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

          <hr className="hr_line" />

          <div className="testimonial_container">
            <div className="testimonial_title">
              <p className="About_heading" style={{marginTop: "10px"}}>Some of our Happy Fans</p>

              <div className="arrow_icons">
                <img onClick={handlePrev} src={ArrowLeft} alt="" />
                <img onClick={handleNext} src={ArrowRight} alt="" />
              </div>
            </div>
            <div className="fan_profile_pic_section">
              {/* {testimonials.map((testimonial, index) => (
        <img
          key={testimonial.id}
          src={testimonial.image}
          alt={testimonial.name}
          className={`fan_profile_pic ${index === currentIndex ? 'active' : ''} ${index === hoverIndex ? 'hover' : ''}`}
          onClick={() => setCurrentIndex(index)}
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        />
      ))} */}

              {testimonials.map((testimonial, index) => (
                <div key={testimonial.id} className="profile_container">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className={`fan_profile_pic ${
                      index === currentIndex ? "active" : ""
                    } ${index === hoverIndex ? "hover" : ""}`}
                    onClick={() => setCurrentIndex(index)}
                    onMouseEnter={() => setHoverIndex(index)}
                    onMouseLeave={() => setHoverIndex(null)}
                  />
                  {index === currentIndex && <div className="active_dot"></div>}
                </div>
              ))}
            </div>

            <div className="testimonial_content">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="testimonial_image"
              />
              <div className="quote_and_fan_name">
                <img
                  style={{ width: "40px", height: "40px" }}
                  src={QuoteImg}
                  alt=""
                />

                <p className="quote">{testimonials[currentIndex].quote}</p>
                <p className="author">- {testimonials[currentIndex].name}</p>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="bottom_section">
         

          <p
         
              className="our_team_text"
            >
              Our Team
            </p>

          <div className="our_team">
           
            <div className="team_profile_cards">
              <div className="profile_card1 card ">
                <img src={TeamProfile1} alt="" />
            
                <div className="team_profile_info">
                  <p className="team_name">Raminder Singh </p>
                  <p>(Founder and CEO)</p>
                  <div className="social_icons" style={{gap: "10px", marginTop: "10px"}}>
                 <a href="https://www.linkedin.com/in/raminders/" target="_blank" rel="noreferrer"> 
                 <img src={Instagram_Vector} alt="Instagram Vector" /></a>
                    <img src={Facebook_Vector} alt="facebook vector" />
                  </div>
                </div>
               
              </div>
            

            

              <div className="profile_card2 card">
                <img src={TeamProfile2} alt="" />
                <div className="team_profile_info">
                  <p className="team_name">Harshal Dhir </p>
                  <p>(AI Tech Wiz)</p>
                  <div className="social_icons" style={{gap: "10px", marginTop: "10px"}}>
                  <img src={Instagram_Vector} alt="Instagram Vector" />
                    <img src={Facebook_Vector} alt="facebook vector" />
                  </div>
                </div>
              </div>

       
            </div>
          </div>


          <div className="explain_content3">
            <div className="content2">
              <p style={{ fontSize: "1.6em", lineHeight: "35px" }}>
                <span>
                  <img src={QuoteImg} style={{width: "25px", height: "25px"}} alt="" />
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus sodales, turpis sed sodales ullamcorper, ligula urna
                cursus augue, a ullamcorper est nulla eu magna. Maecenas lacus
                lorem, cursus non.
              </p>
              <p style={{ fontSize: "1.4em", lineHeight: "35px" }}>
                . harshal dhir
              </p>
            </div>
            <div className="image2">
              <img src={RaminderSingh} alt="" />
            </div>
          </div>

          
        </div> */}

        <div className="bottom_section">
         
        <p className="About_heading our_team_text">Our Team</p>
          <div className="our_team">
        
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
            <div className="explain_content3">
              <div className="content2">
                <p style={{ fontSize: "1.3em", lineHeight: "30px" }}>
                  <span>
                    <img
                      src={QuoteImg}
                      style={{
                        width: "35px",
                        height: "35px",
                        marginBottom: "10px",
                        textAlign: "justify"
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
              </div>
              <div className="image2">
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
          )}
        </div>

        <div className="contact_section">
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
                fontSize: "18px",
                lineHeight: "27px",
                paddingBottom: "50px",
                textAlign: "justify"
              }}
            >
              We’re here for you! Whether you have questions, feedback, or just
              want to say hi, we’d love to hear from you. Fill out the form
              below, and our team will get back to you as soon as possible.
              Let’s make this experience even more amazing together.
            </p>

            <p
            className="About_heading"
          
            >
              Our Locations
            </p>

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
            <form action="post">
              <label
                htmlFor="html"
                style={{ fontSize: "18px", lineHeight: "40px" }}
              >
                Name
              </label>
              <input type="text" />

              <label
                htmlFor="html"
                style={{ fontSize: "18px", lineHeight: "40px" }}
              >
                Email
              </label>
              <input type="text" />

              <label
                htmlFor="html"
                style={{ fontSize: "18px", lineHeight: "40px" }}
              >
                Phone Number
              </label>
              <input type="text" />

              <label
                htmlFor="html"
                style={{ fontSize: "18px", lineHeight: "40px" }}
              >
                Message
              </label>
              <input style={{ height: "100px" }} type="text" />

              <div className="register_form_page_btn">
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
