import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import ReactGA from "react-ga4";
import chatBot from "../api/chatBot";
import chatBot2 from "../api/chatBot2";
import { Link } from "react-router-dom";

const KaranChatPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const [isMobile, setIsMobile] = useState(false);
  const [profiles, setProfiles] = useState([]);

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
    script.setAttribute("mkey", bot.mkey);
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
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1450);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const savedProfiles = localStorage.getItem("profiles");
    if (savedProfiles) {
      setProfiles(JSON.parse(savedProfiles));
    }
  }, []);

  const handleCardClick = () => {
    ReactGA.event({
      category: "ChatPage",
      action: "Click",
      label: "Back Button Clicked",
    });

    if (isMobile) {
      navigate("/home");
    } else {
      navigate("/home");
    }
  };

  const handleChatroomInteraction = () => {
    ReactGA.event({
      category: "ChatPage",
      action: "Interaction",
      label: "ChatpageInteraction",
    });
  };

  const handleProfileClick = () => {
    if (window.innerWidth <= 1450) {
      setIsMobile(true);
    }
  };

  const bot =
    chatBot.find((bot) => bot.name.toLowerCase() === name.toLowerCase()) ||
    chatBot2.find((bot) => bot.name.toLowerCase() === name.toLowerCase());

  console.log(bot);

  if (!bot) {
    // Handle bot not found, you can redirect to an error page or do something else
    return;
  }

  const openChatPage = (profileName) => {
    navigate(`/chat/${profileName}`);
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{bot.celebname}</title>
        <meta name="description" content="Producer, Director and TV host" />
        <link rel="canonical" href={window.location.pathname} />
        <link
          rel="icon"
          href={bot.profileImage}        />
      </Helmet>

      <div className="app">
        <div className={`sidebar ${isMobile ? "slide-out" : ""}`}>
          <div className="back_component">
            <div className="back_btn" onClick={handleCardClick}></div>
            <p>Chats</p>
          </div>
          {profiles.map((profile) => (
            <Link
              key={profile.id}
              to={`/chat/${profile.name}`}
              className="profile-link"
              onClick={() => {
                openChatPage(profile.bot.mkey());
                handleProfileClick();
              }}
            >
              <div
                className={`profile_sidebar  ${
                  location.pathname === `/chat/${profile.name}` ? "active" : ""
                }`}
              >
                <img src={profile.profileImage} alt={profile.name} />
             <div style={{display: "flex", flexDirection: "column"}}>
             <span>{profile.celebname}</span>
                {/* <span className="online-status">{profile.online}</span> */}
                
                <span style={{fontSize: "0.8em"}}> {bot.description}</span>
             </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="chat-page">
          <div className="profile_header">
            <div
              className="back_btn_mobile_header"
              onClick={handleCardClick}
            ></div>
            <div className="rectangle-group" id="profileName">
              <div
                className="karan_pic"
                style={{
                  backgroundImage: `url(${bot.profileImage})`,
                }}
              ></div>

              <div className="taapsee-pannu-parent">
                <div className="taapsee-pannu">{bot.celebname}</div>
                <div className="filmmaker-and-television2">
                  {bot.description}
                </div>
              </div>
            </div>
          </div>

          <div className="chatroom_area">
            <div
              className="main_chatroom_section"
              id="mcontext"
              style={{ width: "100%", height: "100%"}}
              onClick={handleChatroomInteraction}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KaranChatPage;
