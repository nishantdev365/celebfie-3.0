import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import TaapseeChatPage from "./pages/Taapsee_Chat_Page";
import UrvashiChatPage from "./pages/Urvashi_Chat_Page";
import SukhwinderChatPage from "./pages/Sukhwinder_Chat_Page";
import MalaikaChatPage from "./pages/Malaika_Chat_Page";
import KaranChatPage from "./pages/Karan_Chat_Page";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                {" "}
                <Navbar /> <Home />
              </>
            }
          />
       
       
          <Route path="/chat/taapsee-pannu" element={<TaapseeChatPage />} />
          <Route path="/chat/urvashi-rautela" element={<UrvashiChatPage />} />
          <Route
            path="/chat/sukhwinder-singh"
            element={<SukhwinderChatPage />}
          />
          <Route path="/chat/malaika-arora" element={<MalaikaChatPage />} />
          <Route path="/chat/karan-johar" element={<KaranChatPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
