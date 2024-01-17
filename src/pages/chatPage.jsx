import SidePanel from "../components/SidePanel";
import Footer from "../components/Footer"
import { useEffect } from "react";

const ChatPage = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = "https://cdn.machaao.com/prod/web/js/embed.js";
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
      "ZDhhY2RiNDAtYjE0OS0xMWVlLTk4OGEtYTU3YjI5Y2U0NWZk"
    );
    script.setAttribute("style", "min-height: 480px");
    script.setAttribute("chathost", "https://messengerx.io");
    script.setAttribute("botname", "mx-jarvis_");

    document.getElementById("mcontext").appendChild(script);

    return () => {
      document.getElementById("mcontext").removeChild(script);
    };
  }, []);

  return (
    <>
      
      <section className="chatroom_area">
      <SidePanel />
       
        <div
          className="main_chatroom_section"
          id="mcontext"
          style={{  height: "100%", position:"absolute", right:"0", padding:"20px"}}
        ></div>
      </section>
      <Footer />
    </>
  );
};

export default ChatPage;
