// import { useState } from "react";
// import chatBot from "../api/chatBot";
// import { useNavigate } from "react-router-dom";

// const SearchPage = ({ addProfile }) => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   // Filter bots based on search query
//   const filteredBots = chatBot.filter((bot) =>
//     bot.celebname.toLowerCase().startsWith(searchQuery.toLowerCase())
//   );

//   // Handle the search input change
//   const handleInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//   // Handle clicking on a bot card
//   const handleClick = (event, bot) => {
//     event.preventDefault();
//     if (bot.mkey === null) {
//       // Handle the case where the bot's mkey is null (e.g., show a popup or message)
//       alert("This bot is coming soon!");
//     } else {
//       navigate(`/chat/${bot.name}`);
//       addProfile(bot);
//     }
//   };

//   return (
//     <>
//       <div className="search_page">
//         <div className="search">
//           <input
//             type="text"
//             className="search__input"
//             placeholder="Search Your Fav Celeb Profile Here...."
//             value={searchQuery}
//             onChange={handleInputChange}
//             autoFocus
//           />
//         </div>

//         <div className="explore_bollywood_section">
//           <div className="profile_cards">
//             {searchQuery && filteredBots.length > 0
//               ? filteredBots.map((bot) => (
//                   <div
//                     className="profile"
//                     key={bot.id}
//                     onClick={(event) => {
//                       handleClick(event, bot);
//                       addProfile(bot);
//                     }}
//                     style={{
//                       background: `linear-gradient(2deg, rgba(0, 0, 0, 0.79) 15.8%, rgba(0, 0, 0, 0) 55.83%), url(${bot.profileImage}), lightgray`,
//                       backgroundSize: "cover",
//                       backgroundRepeat: "no-repeat",
//                     }}
//                   >
//                     <div className="profile_center">
//                       <div className="horizontal_line"></div>
//                       <div className="red_circle"></div>
//                     </div>

//                     <div className="filmmaker-and-television">
//                       <b className="celeb_name">{bot.celebname}</b>
//                       <br />
//                       <p className="bottom_text">{bot.description}</p>
//                     </div>
//                     <p className="start">Start Chat</p>
//                   </div>
//                 ))
//               : searchQuery && <p>No profiles found matching your search.</p>}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SearchPage;







import { useState } from "react";
import chatBot from "../api/chatBot";
import { useNavigate } from "react-router-dom";


const SearchPage = ({ addProfile }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  // Filter bots based on search query
  const filteredBots = chatBot.filter((bot) =>
    bot.celebname.toLowerCase().startsWith(searchQuery.toLowerCase())
  );

  // Handle the search input change
  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle clicking on a bot card
  const handleClick = (event, bot) => {
    event.preventDefault();
    if (bot.mkey === null) {
      alert("This bot is coming soon!");
    } else {
      navigate(`/chat/${bot.name}`);
      addProfile(bot);
    }
  };

  return (
    <div className="search_page">
      <div className="search">
        <input
          type="text"
          className="search__input"
          placeholder="Search Your Fav Celeb Profile Here...."
          value={searchQuery}
          onChange={handleInputChange}
          autoFocus
        />
      </div>

      {searchQuery === "" ? (
        <p className="no_search_message">
      Start chatting with your favorite celebrities! Enter a name to find their profile.
        </p>
      ) : (
        <div className="profile_container_search_page">
          <div className="profile_cards_search_page">
            {filteredBots.length > 0 ? (
              filteredBots.map((bot) => (
                <div
                  className="profile_search_page"
                  key={bot.id}
                  onClick={(event) => handleClick(event, bot)}
                  style={{
                    background: `linear-gradient(2deg, rgba(0, 0, 0, 0.79) 15.8%, rgba(0, 0, 0, 0) 55.83%), url(${bot.profileImage}), lightgray`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className="card_inner_bottom_text">
                    <b className="celeb_name_search_page">{bot.celebname}</b>
                    <br />
                    <p className="bottom_text_search_page">{bot.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p>No profiles found matching your search.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchPage;



