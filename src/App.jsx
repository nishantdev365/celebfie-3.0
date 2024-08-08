// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Navbar from "./components/navbar";
// import Intro from "./pages/introPage";
// import Home from "./pages/home";
// import LandingPage from "./pages/LandingPage";
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
// import Register from "./pages/auth/Register";
// import Login from "./pages/auth/Login";
// import Forgot from "./pages/auth/ForgotPassword";
// import Reset from "./pages/auth/ResetPassword";
// import Error from "./Error";
// import "./App.css";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from "react";
// import { auth } from "./firebase/config";
// import { loginUser, setLoading, logoutUser } from "./store/usersSlice";
// import ReactGA from "react-ga4";
// import ProtectedRoute from "./ProtectedRoute";

// const trackingId = "G-79ZRWZZ3M6";
// ReactGA.initialize(trackingId);

// function App() {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(setLoading(true));
//     const unsubscribe = auth.onAuthStateChanged((authUser) => {
//       if (authUser) {
//         dispatch(
//           loginUser({
//             uid: authUser.uid,
//             username: authUser.displayName,
//             email: authUser.email,
//           })
//         );
//       } else {
//         dispatch(logoutUser());
//         console.log("User is not logged in.");
//       }
//       dispatch(setLoading(false));
//     });

//     return () => unsubscribe();
//   }, [dispatch]);

//   const isLoading = useSelector((state) => state.data.user.isLoading);

//   return (
//     <>
//       {isLoading ? (
//         <div className="full-page-loader">
//           <div className="lds-dual-ring"></div>
//         </div>
//       ) : (
//         <BrowserRouter>
//           <Routes>
//             <Route
//               path="/"
//               element={
//                 <>
//                   <Navbar />
//                   <LandingPage />
//                 </>
//               }
//             />
//             <Route path="/signin" element={<Intro />} />
//             <Route path="/login" element={<Login />} />
//             <Route path="/register" element={<Register />} />
//             <Route path="/forgot-password" element={<Forgot />} />
//             <Route path="/reset-password" element={<Reset />} />
//             <Route
//               path="/home"
//               element={
//                 <ProtectedRoute>
//                   <>
//                     <Navbar />
//                     <Home />
//                   </>
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/taapsee-profile"
//               element={
//                 <ProtectedRoute>
//                   <Taapsee />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/urvashi-profile"
//               element={
//                 <ProtectedRoute>
//                   <Urvashi />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/sukhwinder-profile"
//               element={
//                 <ProtectedRoute>
//                   <Sukhwinder />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/malaika-profile"
//               element={
//                 <ProtectedRoute>
//                   <Malaika />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/karan-profile"
//               element={
//                 <ProtectedRoute>
//                   <Karan />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/taapsee-pannu"
//               element={
//                 <ProtectedRoute>
//                   <TaapseeChatPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/urvashi-rautela"
//               element={
//                 <ProtectedRoute>
//                   <UrvashiChatPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/sukhwinder-singh"
//               element={
//                 <ProtectedRoute>
//                   <SukhwinderChatPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/malaika-arora"
//               element={
//                 <ProtectedRoute>
//                   <MalaikaChatPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route
//               path="/karan-johar"
//               element={
//                 <ProtectedRoute>
//                   <KaranChatPage />
//                 </ProtectedRoute>
//               }
//             />
//             <Route path="*" element={<Error />} />
//           </Routes>
//         </BrowserRouter>
//       )}
//     </>
//   );
// }

// export default App;



import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Intro from "./pages/introPage";
import Home from "./pages/home";
import LandingPage from "./pages/LandingPage";
import ChatPage from "./pages/ChatPage";
import ProfilePage from "./pages/ProfilePage"
import SearchPage from "./pages/SearchPage";
// import TaapseeChatPage from "./pages/Taapsee_Chat_Page";
// import UrvashiChatPage from "./pages/Urvashi_Chat_Page";
// import SukhwinderChatPage from "./pages/Sukhwinder_Chat_Page";
// import MalaikaChatPage from "./pages/Malaika_Chat_Page";
// import KaranChatPage from "./pages/Karan_Chat_Page";
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
import { useEffect, useState } from "react";
import { auth } from "./firebase/config";
import { loginUser, setLoading, logoutUser } from "./store/usersSlice";
import ReactGA from "react-ga4";
import ProtectedRoute from "./routes/ProtectedRoute";

const trackingId = "G-79ZRWZZ3M6";
ReactGA.initialize(trackingId);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoading(true));
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(
          loginUser({
            uid: authUser.uid,
            username: authUser.displayName,
            email: authUser.email,
          })
        );
      } else {
        dispatch(logoutUser());
        console.log("User is not logged in.");
      }
      dispatch(setLoading(false));
    });

    return () => unsubscribe();
  }, [dispatch]);

  const [profiles, setProfiles] = useState(() => {
    const savedProfiles = localStorage.getItem('profiles');
    return savedProfiles ? JSON.parse(savedProfiles) : [];
  });

  const addProfileToSidebar = (profile) => {
    if (!profiles.find(p => p.id === profile.id)) {
      const updatedProfiles = [...profiles, profile];
      setProfiles(updatedProfiles);
      localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
    }
  };

  // const removeProfileFromSidebar = (profileId) => {
  //   const updatedProfiles = profiles.filter(p => p.id !== profileId);
  //   setProfiles(updatedProfiles);
  //   localStorage.setItem('profiles', JSON.stringify(updatedProfiles));
  // };

  // useEffect(() => {
  //   const savedProfiles = localStorage.getItem('profiles');
  //   if (savedProfiles) {
  //     setProfiles(JSON.parse(savedProfiles));
  //   }
  // }, []);

  const isLoading = useSelector((state) => state.data.user.isLoading);

  return (
    <>
      {isLoading ? (
        <div className="full-page-loader">
          <div className="lds-dual-ring"></div>
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar />
                  <LandingPage />
                </>
              }
            />
            <Route path="/signin" element={<Intro />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Register />} />
            <Route path="/forgot-password" element={<Forgot />} />
            <Route path="/reset-password" element={<Reset />} />
            <Route
              path="/home"
              element={
                <ProtectedRoute>
                  <>
                    <Navbar />
                    <Home addProfile={addProfileToSidebar}/>
                  </>
                </ProtectedRoute>
              }
            />
              <Route path="/profile/:name" element=  {<ProtectedRoute>{<ProfilePage />} </ProtectedRoute> } />
              {/* <Route path="/chat" element={<ChatPage />} /> */}
                  <Route path="/chat/:name" element={<ProtectedRoute><ChatPage /> </ProtectedRoute>} />
                  {/* <Route path="/search" element={<ProtectedRoute>  <Navbar /><SearchPage /> </ProtectedRoute>} /> */}
                  <Route path="/search" element={<> <Navbar /><SearchPage /> </>} />
            <Route
              path="/taapsee-profile"
              element={
                <ProtectedRoute>
                  <Taapsee />
                </ProtectedRoute>
              }
            />
            <Route
              path="/urvashi-profile"
              element={
                <ProtectedRoute>
                  <Urvashi />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sukhwinder-profile"
              element={
                <ProtectedRoute>
                  <Sukhwinder />
                </ProtectedRoute>
              }
            />
            <Route
              path="/malaika-profile"
              element={
                <ProtectedRoute>
                  <Malaika />
                </ProtectedRoute>
              }
            />
            <Route
              path="/karan-profile"
              element={
                <ProtectedRoute>
                  <Karan />
                </ProtectedRoute>
              }
            />
            {/* <Route
              path="/taapsee-pannu"
              element={
                <ProtectedRoute>
                  <TaapseeChatPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/urvashi-rautela"
              element={
                <ProtectedRoute>
                  <UrvashiChatPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/sukhwinder-singh"
              element={
                <ProtectedRoute>
                  <SukhwinderChatPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/malaika-arora"
              element={
                <ProtectedRoute>
                  <MalaikaChatPage />
                </ProtectedRoute>
              }
            />
            <Route
              path="/karan-johar"
              element={
                <ProtectedRoute>
                  <KaranChatPage />
                </ProtectedRoute>
              }
            /> */}
            <Route path="*" element={<Error />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;
