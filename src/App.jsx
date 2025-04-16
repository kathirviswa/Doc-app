// import { Route, Routes, useNavigate } from "react-router-dom";
// import React, { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./Firebase/Setup";

// //Page Components
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Doctors from "./pages/Doctors";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Appointment from "./pages/Appointment";
// import MyAppointment from "./pages/MyAppointment";
// import MyProfile from "./pages/MyProfile";

// //Components reusable
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";


 

 
// const App = () => {

//   const navigate = useNavigate();
  
//   useEffect(() => {
//     onAuthStateChanged(auth, async (user) => {
//       if (user) {
//         console.log("user logged in");
//         navigate("/");
//       } else {
//         console.log("user logged out");
//         navigate("/login");
//       }
//     });
//   }, []);

//   return (
//     <div className="mx-4 sm:mx-[10%]">
      
        
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/doctors" element={<Doctors />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/doctors/:speciality" element={<Doctors />} />
//           <Route path="/About" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/my-profile" element={<MyProfile />} />
//           <Route path="/my-appointments" element={<MyAppointment />} />
//           <Route path="/appointment/:doctorId" element={<Appointment />} />
//         </Routes>
//         <Footer />
    
//     </div>
//   );
// };

// export default App;


// import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
// import { useEffect } from "react";
// import { onAuthStateChanged } from "firebase/auth";
// import { auth } from "./Firebase/Setup";

// // Page Components
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Doctors from "./pages/Doctors";
// import Contact from "./pages/Contact";
// import Login from "./pages/Login";
// import Appointment from "./pages/Appointment";
// import MyAppointment from "./pages/MyAppointment";
// import MyProfile from "./pages/MyProfile";

// // Reusable Components
// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// const App = () => {
//   const navigate = useNavigate();
//   const location = useLocation();

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       const isLoginPage = location.pathname === "/login";

//       if (user) {
//         if (isLoginPage) {
//           navigate("/");
//         }
//         console.log("User logged in");
//       } else {
//         if (!isLoginPage) {
//           navigate("/login");
//         }
//         console.log("User logged out");
//       }
//     });

//     return () => unsubscribe(); // clean up
//   }, [location.pathname, navigate]);

//   return (
//     <div className="mx-4 sm:mx-[10%]">
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/doctors/:speciality" element={<Doctors />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/my-profile" element={<MyProfile />} />
//         <Route path="/my-appointments" element={<MyAppointment />} />
//         <Route path="/appointment/:doctorId" element={<Appointment />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;

import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/Setup";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Page Components
import Home from "./pages/Home";
import About from "./pages/About";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Appointment from "./pages/Appointment";
import MyAppointment from "./pages/MyAppointment";
import MyProfile from "./pages/MyProfile";

// Components reusable
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Track login state

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      const isLoginPage = location.pathname === "/login";

      if (user) {
        setIsLoggedIn(true);
        if (isLoginPage) navigate("/");
      } else {
        setIsLoggedIn(false);
        if (!isLoginPage) navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [location.pathname, navigate]);

  return (
    <div className="mx-4 sm:mx-[10%]">
    

      {/* Show Navbar only when user is logged in */}
      {isLoggedIn && <Navbar />}
      <ToastContainer theme="colored" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointment />} />
        <Route path="/appointment/:doctorId" element={<Appointment />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
