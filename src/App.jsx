import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Intro from "./pages/introPage";
import Home from "./pages/home";
import Chat from "./pages/chat";
import Profile from "./pages/Profile";
import Register from "./pages/Register";
import Login from "./pages/Login"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Intro />} />
          <Route path="/register" element={<Register />}/>
          <Route path="/home" element={<Home />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/login" element={<Login />}/>
          <Route path="/profile" element={<Profile />} />
          <Route path="/chat/:profileName" element={<Chat />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


