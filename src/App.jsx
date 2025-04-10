import { BrowserRouter,Route ,Routes, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/Setup';


//Page Components
import Home from './pages/Home';
import About from './pages/About';
import Doctors from './pages/Doctors'
import Contact from './pages/Contact';
import Login from './pages/Login';
import Appointment from './pages/Appointment';
import MyAppointment from './pages/MyAppointment';
import MyProfile from './pages/MyProfile';
 
//Components reusable
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// const navigate = useNavigate();

const App = () => {

  // const navigate = useNavigate();

  // // to passed the parameter in user
  // useEffect(() => {    
  //   onAuthStateChanged(auth,async (user) => {
  //     if (user) {
  //       console.log ("Logged In");
  //       navigate("/");
  //     }
  //     else {
  //       console.log ("Logged Out");
  //       navigate("/login");
  //     }
  //   })
  // },[]);

  return (
    <div  className='mx-4 sm:mx-[10%]'>
    
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/doctors' element={<Doctors/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/doctors/:speciality" element={<Doctors/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointment />}/>
        <Route path="/appointment/:doctorId" element={<Appointment />}/>
        </Routes>
        </BrowserRouter>

    <Footer />
    </div>
  )
}
export default App