// import { useState } from "react";
// import RaminderSingh from "../assets/raminder_singh.jpg";
// import Instagram_Vector from "../assets/instagram_vector.png";
// import Linkedin_vector from "../assets/linkedin_vector.png";

// const Team = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handleReadMoreClick = () => {
//     setIsOpen(true);
//   };

//   const handleClose = () => {
//     setIsOpen(false);
//   };

//   const teamProfiles = [
//     {
//       name: "Raminder Singh",
//       role: "Founder and CEO",
//       image: RaminderSingh,
//       content:
//         "Hey there! I’m Raminder, the Founder behind this magical world of Celebfie. Think of me as your guide to the ultimate fan experience! I’m on a mission to help you connect with your fave celebs in ways you never thought possible—seriously, chatting with them after binge-watching their latest movie isn’t just a dream anymore! Buckle up for a fun ride as we dive into this wild adventure together. Let’s make some unforgettable memories.",
//       socialLinks: {
//         linkedin: "https://www.linkedin.com/in/raminders/",
//         instagram: "https://www.instagram.com/ramindersinggh/",
//       },
//     },
//     {
//       name: "Harshal Dhir",
//       role: "AI Tech Wiz",
//       image: null,
//       content:
//         "Hi! I’m Harshal, the tech wizard behind the AI magic at Celebfie 3.0. I’m passionate about blending cutting-edge technology with creativity to make those magical connections happen. It’s all about bringing fans and celebrities closer together, so get ready for some awesome interactions powered by AI! Can’t wait for you to join us on this exciting journey.",
//       socialLinks: {
//         linkedin: Linkedin_vector,
//         instagram: Instagram_Vector,
//       },
//     },
//   ];

//   return (
//     <>
//       {isOpen && (
//         // <div className="team_dialog_backdrop">
//         //   <div className="team_dialog_box">
//         //     <p>
//         //       Hey there! I’m Raminder, the Founder behind this magical
//         //       world of Celebfie. Think of me as your guide to the
//         //       ultimate fan experience! I’m on a mission to help you
//         //       connect with your fave celebs in ways you never thought
//         //       possible—seriously, chatting with them after
//         //       binge-watching their latest movie isn’t just a dream
//         //       anymore! Buckle up for a fun ride as we dive into this
//         //       wild adventure together. Let’s make some unforgettable
//         //       memories.
//         //     </p>
//         //     <button onClick={handleClose}>Close</button>
//         //   </div>
//         // </div>

//         <div className="team_dialog_box open">
//           <div className="team_dialog_box_inner">
//             <div className="team_dialog_box_text">
//               <h1 className="team_dialog_box_heading">TEam Name</h1>
//               <p className="team_dialog_box_para">
//                 Hey there! I’m Raminder, the Founder behind this magical world
//                 of Celebfie. Think of me as your guide to the ultimate fan
//                 experience! I’m on a mission to help you connect with your fave
//                 celebs in ways you never thought possible—seriously, chatting
//                 with them after binge-watching their latest movie isn’t just a
//                 dream anymore! Buckle up for a fun ride as we dive into this
//                 wild adventure together. Let’s make some unforgettable memories.
//               </p>
//             </div>
//             <button className="team_dialog_box_close_btn" onClick={handleClose}>
//               Close
//             </button>
//           </div>
//           <div className="close_popup" onClick={handleClose}></div>
//         </div>
//       )}

//       <div className="team">
//       {teamProfiles.map((profile, index) => (
//         <div className="team-card"   key={index}>
//           <div className="team-card-inner">
//             <div className="team-card-back">
//               <div className="team_quote">
//                 <p onClick={handleReadMoreClick} style={{ cursor: "pointer" }}>
//                   Hey there! I’m Raminder, the Founder behind this magical world
//                   of Celebfie. Think of me as your guide to the ultimate fan
//                   experience! I’m on a mission to help you connect with your
//                   fave...
//                   <span className="readmore">Read More</span>
//                 </p>
//               </div>
//             </div>
          
//             <div className="team-card-front">
//               <img src={profile.image} />
           
//                 <div className="team_profile_info">
//                   <p className="team_name">{profile.name}</p>
//                   <p>({profile.role})</p>
//                   <div
//                       className="social_icons"
//                       style={{ gap: "10px", marginTop: "10px" }}
//                     >
//                       {profile.socialLinks.linkedin && (
//                         <a
//                           href={profile.socialLinks.linkedin}
//                           target="_blank"
//                           rel="noreferrer"
//                         >
//                           <img
//                             src={Linkedin_vector}
//                             alt="linkedin Vector"
//                           />
//                         </a>
//                       )}
//                       {profile.socialLinks.instagram && (
//                          <a
//                          href={profile.socialLinks.instagram}
//                          target="_blank"
//                          rel="noreferrer"
//                        >
//                         <img
//                           src={Instagram_Vector}
//                           alt="Instagram Vector"
//                         />
//                         </a>
//                       )}
//                       {profile.socialLinks.facebook && (
//                         <img
//                           src={profile.socialLinks.facebook}
//                           alt="Facebook Vector"
//                         />
//                       )}
//                     </div>
//                 </div>
         
//             </div>
         
//           </div>
//         </div>
//       ))}
       
//       </div>
//     </>
//   );
// };

// export default Team;



import { useState } from "react";
import RaminderSingh from "../assets/raminder_singh.jpg";
import Instagram_Vector from "../assets/instagram_vector.png";
import Linkedin_vector from "../assets/linkedin_vector.png";

const Team = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleReadMoreClick = (profile) => {
    setSelectedProfile(profile);
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setSelectedProfile(null);
  };

  const truncateContent = (content) => {
    const maxLength = 60; // Adjust the maxLength as needed
    if (content.length <= maxLength) return content;
    return content.slice(0, maxLength) + "...";
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
      image: RaminderSingh,
      content:
        "Hi! I’m Harshal, the tech wizard behind the AI magic at Celebfie 3.0. I’m passionate about blending cutting-edge technology with creativity to make those magical connections happen. It’s all about bringing fans and celebrities closer together, so get ready for some awesome interactions powered by AI! Can’t wait for you to join us on this exciting journey.",
      socialLinks: {
        linkedin: Linkedin_vector,
        instagram: Instagram_Vector,
      },
    },
 
  ];

  return (
    <>
      {isOpen && selectedProfile && (
      <div className="modal_back_blur" onClick={handleClose}>
          <div className="team_dialog_box open">
          <div className="team_dialog_box_inner">
            <div className="team_profile_image">
              <img src={selectedProfile.image} alt={selectedProfile.name} />
            </div>
            <div className="team_dialog_box_text">
              <h1 className="team_dialog_box_heading">{selectedProfile.name}</h1>
              <p>({selectedProfile.role})</p>
              <p className="team_dialog_box_para">
                {selectedProfile.content}
              </p>
            </div>
            <button className="team_dialog_box_close_btn" onClick={handleClose}>
              Close
            </button>
          </div>
          <div className="close_popup" onClick={handleClose}></div>
        </div>
      </div>
      )}

      <div className="team">
        {teamProfiles.map((profile, index) => (
          <div className="team-card" key={index}>
            <div className="team-card-inner">
              <div className="team-card-back">
                <div className="team_quote" onClick={() => handleReadMoreClick(profile)} style={{ cursor: "pointer" }}>
                  <p>
                    {truncateContent(profile.content)}
                    <br />
                    <span className="readmore" style={{color: "#ec4036", fontSize: "1.3em", fontWeight: "bold"}}>Read More</span>
                  </p>
                </div>
              </div>

              <div className="team-card-front">
                <img src={profile.image} alt={profile.name} />
                <div className="team_profile_info">
                  <p className="team_name">{profile.name}</p>
                  <p style={{fontSize: "0.9em"}}>({profile.role})</p>
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
                          alt="LinkedIn Vector"
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
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;

