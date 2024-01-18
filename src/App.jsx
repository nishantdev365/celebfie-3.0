import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";

import Home from "./pages/home";
import Chat from "./pages/chat";
// import Profile from "./pages/Profile";
// import Intro from "./pages/introPage";
// import Register from "./pages/Register";
// import Login from "./pages/Login"
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          {/* <Route path="/" element={<Intro />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/> */}
         
          {/* <Route path="/profile" element={<Profile />} /> */}
          <Route path="/chat" element={<Chat />} />
          <Route path="/chat/:profileName" element={<Chat />} />
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


