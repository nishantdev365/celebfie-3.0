import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const SukhwinderChatPage = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    // Place the provided script code here
    let MemberSpace = window.MemberSpace || {"subdomain":"celebfie"};
    (function(d){
      var s = d.createElement("script");
      s.src = "https://cdn.memberspace.com/scripts/widgets.js";
      var e = d.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(s, e);
    })(document);

    // The cleanup function (optional) to remove the script if the component is unmounted
    return () => {
      // Perform any cleanup here if needed
    };
  }, []); 

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.machaao.com/prod/web/js/embed_celebfie.js";
    script.async = true;
    script.setAttribute("mode", "embed");
    script.setAttribute("isolate", "true");
    script.setAttribute("theme_color", "#ec4036");
    script.setAttribute("header", "off");
    script.setAttribute("accentcolor", "#080C19");
    script.setAttribute("textcolor", "white");
    script.setAttribute("id", "webchat");
    script.setAttribute(
      "mkey",
      "YmM0ODlhYTAtYWVjMS0xMWVlLThjMWQtMjM2MzE0Nzc1MTZh"
    );
    script.setAttribute("style", "min-height: 480px");
    script.setAttribute("chathost", "https://messengerx.io");
    script.setAttribute("botname", "mx-tp-ai");

    const mcontextElement = document.getElementById("mcontext");

    // Clear existing content in mcontextElement
    while (mcontextElement.firstChild) {
      mcontextElement.removeChild(mcontextElement.firstChild);
    }

    if (mcontextElement) {
      mcontextElement.appendChild(script);

      return () => {
        if (!mcontextElement.contains(script)) {
          window.location.reload();
        }
      };
    } else {
      window.location.reload();
    }
  }, []);


  useEffect(() => {
    // Check MemberSpace membership status
    if (window.Memberspace && !window.Memberspace.isMember()) {
      // Redirect non-members to the login or membership page
      navigate("/login"); // Replace with your actual login or membership page
    }
  }, [navigate]);


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

  const handleCardClick = () => {
    if (isMobile) {
      navigate("/sukhwinder-profile");
    } else {
      navigate("/");
    }
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Taapsee Pannu</title>
        <meta name="description" content="Indian actress and producer" />
        <link rel="canonical" href="http://mysite.com/example" />
        <link rel="icon" href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png" />
      
       
        {/* <meta property="og:title" content="Taapsee Pannu" />
        <meta property="og:description" content="Indian actress and producer" />
        <meta property="og:image" content="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705619416/Taapsee-Pannu-bg_ik7nfo.png" />
        <meta property="og:url" content={window.location.href} /> */}
      </Helmet>

      <div className="profile_header">
        {/* <Link to="/profile"> */}
        <div className="back_btn" onClick={handleCardClick}></div>
        {/* <div className="back_btn_mobile">

</div> */}

        {/* </Link> */}
        <div className="rectangle-group" id="profileName">
          {/* <img className="rectangle-icon" alt="profile-pic" src={Tapsee} /> */}
          <div className="sukhwinder_pic" alt="profile-pic">
        
          </div>
          <div className="taapsee-pannu-parent">
            <div className="taapsee-pannu">Sukhwinder Singh</div>
            <div className="filmmaker-and-television2">
            Singer, Rockstar Performer
            </div>
          </div>
        </div>
      </div>

      <div className="chatroom_area">
        {/* <SidePanel /> */}
        <div
          className="main_chatroom_section"
          id="mcontext"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </>
  );
};

export default SukhwinderChatPage;