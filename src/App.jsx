import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Intro from "./pages/introPage";
import Home from "./pages/home";
import AboutUs from "./pages/aboutUs"
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
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Forgot from "./pages/auth/ForgotPassword";
import Reset from "./pages/auth/ResetPassword";
import Error from "./Error";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { auth } from "./firebase/config";
import { loginUser, setLoading } from "./store/usersSlice";
import ReactGA from "react-ga4";

const trackingId = "G-21486S7D0P";
ReactGA.initialize(trackingId);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
        dispatch(setLoading(false));
      } else {
        dispatch(setLoading(false));
        console.log("User is not logged in.");
      }
    });
  }, []);

  const user = useSelector((state) => state.data.user.user);
  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <>
      {isLoading ? (
        <div className="full-page-loader">
          <div className="lds-dual-ring"></div>
        </div>
      ) : user ? (
        <BrowserRouter>
          <Routes>
            <>
              <Route
                path="/"
                element={
                  <>
                    <Navbar />
                    <Home />
                  </>
                }
              />
              <Route path="/taapsee-profile" element={<Taapsee />} />
              <Route path="/urvashi-profile" element={<Urvashi />} />
              <Route path="/sukhwinder-profile" element={<Sukhwinder />} />
              <Route path="/malaika-profile" element={<Malaika />} />
              <Route path="/karan-profile" element={<Karan />} />
              <Route path="/taapsee-pannu" element={<TaapseeChatPage />} />
              <Route path="/urvashi-rautela" element={<UrvashiChatPage />} />
              <Route
                path="/sukhwinder-singh"
                element={<SukhwinderChatPage />}
              />
              <Route path="/malaika-arora" element={<MalaikaChatPage />} />
              <Route path="/karan-johar" element={<KaranChatPage />} />
              <Route path="/AboutUs" element={<>
                <Navbar /> <AboutUs/> 
              </>}/>
              <Route path="*" element={<Error />} />
            </>
          </Routes>
        </BrowserRouter>
      ) : (
        <BrowserRouter>
          <Routes>
            <>
              <Route path="/" element={<Intro />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<Forgot />} />
              <Route path="/reset-password" element={<Reset />} />
              <Route path="*" element={<Error />} />
            </>
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
