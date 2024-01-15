import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Intro from "./pages/introPage";
import Home from "./pages/home";
import ChatPage from "./pages/chatPage";
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter basename="/nishantdev365">
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/chatPage" element={<ChatPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
