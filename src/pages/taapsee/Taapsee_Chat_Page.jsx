import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";


const TaapseeChatPage = () => {
  const navigate = useNavigate();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {

    let MemberSpace = window.MemberSpace || {"subdomain":"celebfie"};
    (function(d){
      var s = d.createElement("script");
      s.src = "https://cdn.memberspace.com/scripts/widgets.js";
      var e = d.getElementsByTagName("script")[0];
      e.parentNode.insertBefore(s, e);
    })(document);

    return () => {
     
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
    
    if (window.Memberspace && !window.Memberspace.isMember()) {
      
      navigate("/?msopen=/member/sign_in");
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
 
      navigate("/");
   
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Taapsee Pannu</title>
        <meta name="description" content="Indian actress and producer" />
        <link rel="canonical" href="https://celebfie.vercel.app/chat/taapsee-pannu" />
        <link rel="icon" href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png" />
      
       
        <meta property="og:title" content="Taapsee Pannu" />
        <meta property="og:description" content="Indian actress and producer" />
        <meta property="og:image" content="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705619416/Taapsee-Pannu-bg_ik7nfo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://celebfie.vercel.app/chat/taapsee-pannu" />
      </Helmet>

      <div className="profile_header">
       
        <div className="back_btn" onClick={handleCardClick}></div>
       

        
        <div className="rectangle-group" id="profileName">
         
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
        
        <div
          className="main_chatroom_section"
          id="mcontext"
          style={{ width: "100%", height: "100%" }}
        ></div>
      </div>
    </>
  );
};

export default TaapseeChatPage;
