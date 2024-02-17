import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";


const SukhwinderChatPage = () => {
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
    ReactGA.event({
      category: "ChatPage",
      action: "Click",
      label: "Back Button Clicked",
    });

    if (isMobile) {
      navigate("/sukhwinder-profile");
    } else {
      navigate("/home");
    }
  };

  const handleChatroomInteraction = () => {
    ReactGA.event({
      category: 'ChatPage',
      action: 'Interaction',
      label: 'ChatpageInteraction',
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Sukhwinder Singh</title>
        <meta name="description" content="Singer, Rockstar Performer" />
        <link rel="canonical" href={window.location.pathname} />
        <link rel="icon" href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png" />
      
      </Helmet>

      <div className="profile_header">
   
        <div className="back_btn" onClick={handleCardClick}></div>
       
        <div className="rectangle-group" id="profileName">
         
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
    
        <div
          className="main_chatroom_section"
          id="mcontext"
          style={{ width: "100%", height: "100%" }}
          onClick={handleChatroomInteraction}
        ></div>
      </div>
    </>
  );
};

export default SukhwinderChatPage;
