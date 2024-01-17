

import { useEffect } from "react";
import { Link } from "react-router-dom";

const ChatPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.machaao.com/prod/web/js/embed_celebfie.js";
    script.async = true;
    script.setAttribute("mode", "embed");
    script.setAttribute("isolate", "true");
    script.setAttribute("themecolor", "#ec4036");
    script.setAttribute("header", "off");
    script.setAttribute("accentcolor", "#0A0F1F");
    script.setAttribute("textcolor", "white");
    script.setAttribute("id", "webchat");
    script.setAttribute(
      "mkey",
      "YmM0ODlhYTAtYWVjMS0xMWVlLThjMWQtMjM2MzE0Nzc1MTZh"
    );
    script.setAttribute("style", "min-height: 480px");
    script.setAttribute("chathost", "https://messengerx.io");
    script.setAttribute("botname", "mx-tp-ai");

    document.getElementById("mcontext").appendChild(script);

    // return () => {
    //   document.getElementById("mcontext").removeChild(script);
    // };
  }, []);

  return (
    <>
            <div className="profile_header">
              <Link to="/home">
   <div className="back_btn">
   
   </div>
{/* <div className="back_btn_mobile">

</div> */}


   </Link>
<div className="rectangle-group" id="profileName">
      {/* <img className="rectangle-icon" alt="profile-pic" src={Tapsee} /> */}
      <div className="rectangle-icon" alt="profile-pic"> </div>
      <div className="taapsee-pannu-parent">
        <div className="taapsee-pannu">Taapsee Pannu</div>
        <div className="filmmaker-and-television2">
        Indian actress and producer
        </div>
      </div>
    </div>

</div>
 
      <section className="chatroom_area">
      {/* <SidePanel /> */}
        <div
          className="main_chatroom_section"
          id="mcontext"
          style={{ width: "100%", height: "100%"}}
        ></div>
      </section>
 
    </>
  );
};

export default ChatPage;
