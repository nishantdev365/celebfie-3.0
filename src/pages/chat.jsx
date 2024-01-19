import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const ChatPage = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);
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
      navigate("/profile");
    } else {
      navigate("/home");
    }
  };

  return (
    <>
      <Helmet>
        <meta property="og:title" content="Taapsee Pannu" />
        <meta property="og:description" content="Indian actress and producer" />
        <meta property="og:image" content="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705619416/Taapsee-Pannu-bg_ik7nfo.png" />
        <meta property="og:url" content={window.location.href} />
        {/* Add other Open Graph meta tags as needed */}
      </Helmet>

      <div className="profile_header">
        {/* <Link to="/profile"> */}
        <div className="back_btn" onClick={handleCardClick}></div>
        {/* <div className="back_btn_mobile">

</div> */}

        {/* </Link> */}
        <div className="rectangle-group" id="profileName">
          {/* <img className="rectangle-icon" alt="profile-pic" src={Tapsee} /> */}
          <div className="rectangle-icon" alt="profile-pic">
        
          </div>
          <div className="taapsee-pannu-parent">
            <div className="taapsee-pannu">Taapsee Pannu</div>
            <div className="filmmaker-and-television2">
              Indian actress and producer
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

export default ChatPage;
