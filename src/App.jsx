import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Intro from "./pages/introPage";
import Home from "./pages/home";
import Chat from "./pages/chat";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:profileName" element={<Chat />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
