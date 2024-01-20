// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar";
// // import Intro from "./pages/introPage";
// import Home from "./pages/home";
// import TaapseeChatPage from "./pages/Taapsee_Chat_Page";
// import UrvashiChatPage from "./pages/Urvashi_Chat_Page";
// import SukhwinderChatPage from "./pages/Sukhwinder_Chat_Page";
// import MalaikaChatPage from "./pages/Malaika_Chat_Page";
// import KaranChatPage from "./pages/Karan_Chat_Page";
// import Taapsee from "./pages/Taapsee";
// import Urvashi from "./pages/Urvashi";
// import Sukhwinder from "./pages/Sukhwinder";
// import Malaika from "./pages/Malaika";
// import Karan from "./pages/Karan";
// // import Register from "./pages/Register";
// import Login from "./pages/Login"
// import "./App.css";

// function App() {
//   return (
//     <>
//       <BrowserRouter>
       
//         <Routes>
//           {/* <Route path="/" element={<Intro />} /> */}
//           <Route path="/" element={ <>  <Navbar /> <Home /></>} />
//           <Route path="/login" element={<Login />}/>
//           {/* <Route path="/register" element={<Register />}/> */}
         
//           <Route path="/taapsee-profile" element={<Taapsee />} />
//           <Route path="/urvashi-profile" element={<Urvashi />} />
//           <Route path="/sukhwinder-profile" element={<Sukhwinder />} />
//           <Route path="/malaika-profile" element={<Malaika />} />
//           <Route path="/karan-profile" element={<Karan />} />






//           {/* <Route path="/chat" element={<> <Navbar /> <Chat /></>} /> */}
//           {/* <Route path="/chat/taapsee/:profileName" element={<TaapseeChatPage />} />
//        <Route path="/chat/urvashi/:profileName" element={<UrvashiChatPage />} />
// <Route path="/chat/sukhwinder/:profileName" element={<SukhwinderChatPage />} />
// <Route path="/chat/malaika/:profileName" element={<MalaikaChatPage />} />
// <Route path="/chat/karan/:profileName" element={<KaranChatPage />} /> */}

// <Route path="/chat/taapsee-pannu" element={<TaapseeChatPage />} />
//       <Route path="/chat/urvashi-rautela" element={<UrvashiChatPage />} />
//       <Route path="/chat/sukhwinder-singh" element={<SukhwinderChatPage />} />
//       <Route path="/chat/malaika-arora" element={<MalaikaChatPage />} />
//       <Route path="/chat/karan-johar" element={<KaranChatPage />} />

       
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
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
import Login from "./pages/Login";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
       
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route path="/login" element={<Layout><Login /></Layout>} />
        <Route path="/taapsee-profile" element={<Layout><Taapsee /></Layout>} />
        <Route path="/urvashi-profile" element={<Layout><Urvashi /></Layout>} />
        <Route path="/sukhwinder-profile" element={<Layout><Sukhwinder /></Layout>} />
        <Route path="/malaika-profile" element={<Layout><Malaika /></Layout>} />
        <Route path="/karan-profile" element={<Layout><Karan /></Layout>} />

        <Route path="/chat/taapsee-pannu" element={<Layout><TaapseeChatPage /></Layout>} />
        <Route path="/chat/urvashi-rautela" element={<Layout><UrvashiChatPage /></Layout>} />
        <Route path="/chat/sukhwinder-singh" element={<Layout><SukhwinderChatPage /></Layout>} />
        <Route path="/chat/malaika-arora" element={<Layout><MalaikaChatPage /></Layout>} />
        <Route path="/chat/karan-johar" element={<Layout><KaranChatPage /></Layout>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
