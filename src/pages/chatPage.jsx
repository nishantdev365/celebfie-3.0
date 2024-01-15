
import  { useEffect } from 'react';

const ChatPage = () =>{

       useEffect(() => {
  
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://cdn.machaao.com/prod/web/js/embed.js';
    script.async = true;
    script.setAttribute('mode', 'embed');
    script.setAttribute('isolate', 'true');
    script.setAttribute('themecolor', '#ec4036');
    script.setAttribute('header', 'off');
    script.setAttribute('accentcolor', '#080C19');
    script.setAttribute('textcolor', 'white');
    script.setAttribute('id', 'webchat');
    script.setAttribute('mkey', 'ZDhhY2RiNDAtYjE0OS0xMWVlLTk4OGEtYTU3YjI5Y2U0NWZk');
    script.setAttribute('style', 'min-height: 480px');
    script.setAttribute('chathost', 'https://messengerx.io');
    script.setAttribute('botname', 'mx-jarvis_');

    document.getElementById('mcontext').appendChild(script);

   
    return () => {
      
      document.getElementById('mcontext').removeChild(script)
    };
  }, []); 

  return (
    <>
      <section className="chatroom_area">
      {/* Sidebar Profile Section */}
      <div className="sidebar_profile_section">
        {/* Search Bar Section */}
        <div className="search_bar_section">
          <button></button>
          <p className="chats">Chats</p>
          <div className="custom_input">
            <svg xmlns="http://www.w3.org/2000/svg" className="svg_icon bi-search" viewBox="0 0 16 16">
              <path
                d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
              ></path>
            </svg>
            <input type="text" className="search_bar" placeholder="Search Chats" />
          </div>
        </div>

        {/* Chat Profile Options */}
        <div className="chat_profile_options">
          <div className="rectangle-group">
            <img className="rectangle-icon" alt="" src="./assets/Celebrity-profiles/Taapsee Pannu.png" />
            <div className="taapsee-pannu-parent">
              <div className="taapsee-pannu">Taapsee Pannu</div>
              <div className="filmmaker-and-television2">filmmaker and television personality</div>
            </div>
          </div>
          {/* Add more profile options as needed */}
        </div>
      </div>

      {/* Main Chatroom Section */}
      <div className="main_chatroom_section" id="mcontext" style={{ width: '85%', height: '100%' }}></div>
      </section>
    </>
  );
};

export default ChatPage;
