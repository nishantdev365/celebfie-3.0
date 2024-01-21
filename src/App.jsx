import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
// import Intro from "./pages/introPage";
import Home from "./pages/home";
import TaapseeChatPage from "./pages/Taapsee_Chat_Page";
import UrvashiChatPage from "./pages/Urvashi_Chat_Page";
import SukhwinderChatPage from "./pages/Sukhwinder_Chat_Page";
import MalaikaChatPage from "./pages/Malaika_Chat_Page";
import KaranChatPage from "./pages/Karan_Chat_Page";
import Taapsee from "./pages/Taapsee";
import Urvashi from "./pages/Urvashi";
import Sukhwinder from "./pages/Sukhwinder";
import Malaika from "./pages/Malaika";
import Karan from "./pages/Karan";
// import Register from "./pages/Register";
import Login from "./pages/Login";
import { Helmet } from "react-helmet";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Intro />} /> */}
          <Route
            path="/"
            element={
              <>
                <Helmet>
                  <title>Home Page</title>
                  <meta
                    name="description"
                    content="Description for the home page"
                  />
                  {/* Open Graph Meta Tags */}
                  <meta property="og:title" content="Home Page" />
                  <meta
                    property="og:description"
                    content="Description for the home page"
                  />
                  <meta property="og:type" content="website" />
                </Helmet>
                <Navbar />
                <Home />
              </>
            }
          />

          <Route path="/login" element={<Login />} />
          {/* <Route path="/register" element={<Register />}/> */}

          <Route path="/taapsee-profile" element={<Taapsee />} />
          <Route path="/urvashi-profile" element={<Urvashi />} />
          <Route path="/sukhwinder-profile" element={<Sukhwinder />} />
          <Route path="/malaika-profile" element={<Malaika />} />
          <Route path="/karan-profile" element={<Karan />} />

          {/* <Route path="/chat" element={<> <Navbar /> <Chat /></>} /> */}
          {/* <Route path="/chat/taapsee/:profileName" element={<TaapseeChatPage />} />
       <Route path="/chat/urvashi/:profileName" element={<UrvashiChatPage />} />
<Route path="/chat/sukhwinder/:profileName" element={<SukhwinderChatPage />} />
<Route path="/chat/malaika/:profileName" element={<MalaikaChatPage />} />
<Route path="/chat/karan/:profileName" element={<KaranChatPage />} /> */}

          <Route
            path="/chat/taapsee-pannu"
            element={
              <>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>Taapsee Pannu</title>
                  <meta name="description" content="Chat with Taapsee Pannu" />
                  {/* Open Graph Meta Tags */}
                  <meta property="og:title" content="Taapsee Pannu Chat" />
                  <meta
                    property="og:description"
                    content="Chat with Taapsee Pannu"
                  />
                  <meta property="og:type" content="article" />
                </Helmet>
                <TaapseeChatPage />
              </>
            }
          />
          <Route
            path="/chat/urvashi-rautela"
            element={
              <>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>Urvashi Rautela</title>
                  <meta
                    name="description"
                    content="Bollywood actress, ace dancer"
                  />
                  <link
                    rel="canonical"
                    href="https://celebfie.vercel.app/chat/urvashi-rautela"
                  />
                  <link
                    rel="icon"
                    href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
                  />

                  <meta property="og:title" content="Urvashi Rautela" />
                  <meta
                    property="og:description"
                    content="Bollywood actress, ace dancer"
                  />
                  <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
                  />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:url"
                    content="https://celebfie.vercel.app/chat/urvashi-rautela"
                  />
                </Helmet>

                <UrvashiChatPage />
              </>
            }
          />
          <Route
            path="/chat/sukhwinder-singh"
            element={
              <>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>Sukhwinder Singh</title>
                  <meta
                    name="description"
                    content="Singer, Rockstar Performer"
                  />
                  <link
                    rel="canonical"
                    href="https://celebfie.vercel.app/chat/sukhwinder-singh"
                  />
                  <link
                    rel="icon"
                    href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
                  />

                  <meta property="og:title" content="Sukhwinder Singh" />
                  <meta
                    property="og:description"
                    content="Singer, Rockstar Performer"
                  />
                  <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
                  />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:url"
                    content="https://celebfie.vercel.app/chat/sukhwinder-singh"
                  />
                </Helmet>
                <SukhwinderChatPage />
              </>
            }
          />
          <Route
            path="/chat/malaika-arora"
            element={
              <>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>Malaika Arora</title>
                  <meta
                    name="description"
                    content="Bollywood actress, global influencer"
                  />
                  <link
                    rel="canonical"
                    href="https://celebfie.vercel.app/chat/malaika-arora"
                  />
                  <link
                    rel="icon"
                    href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
                  />

                  <meta property="og:title" content="Malaika Arora" />
                  <meta
                    property="og:description"
                    content="IBollywood actress, global influencer"
                  />
                  <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
                  />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:url"
                    content="https://celebfie.vercel.app/chat/malaika-arora"
                  />
                </Helmet>{" "}
                <MalaikaChatPage />
              </>
            }
          />
          <Route
            path="/chat/karan-johar"
            element={
              <>
                <Helmet>
                  <meta charSet="utf-8" />
                  <title>Karan Johar</title>
                  <meta
                    name="description"
                    content="Producer, Director and TV host"
                  />
                  <link
                    rel="canonical"
                    href="https://celebfie.vercel.app/chat/karan-johar"
                  />
                  <link
                    rel="icon"
                    href="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
                  />

                  <meta property="og:title" content="Karan Johar" />
                  <meta
                    property="og:description"
                    content="Producer, Director and TV host"
                  />
                  <meta
                    property="og:image"
                    content="https://res.cloudinary.com/dzhl8bgd9/image/upload/v1705656033/rpw8cgny9xvuecv9tcho.png"
                  />
                  <meta property="og:type" content="website" />
                  <meta
                    property="og:url"
                    content="https://celebfie.vercel.app/chat/karan-johar"
                  />
                </Helmet>{" "}
                <KaranChatPage />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
