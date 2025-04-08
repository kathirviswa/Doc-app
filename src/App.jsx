import { BrowserRouter,Route , Routes} from 'react-router-dom';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './Firebase/Setup';
import { useNavigate } from 'react-router-dom';
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

const App = () => {

  const useNavigate = useNavigate();
  useEffect(() => {      // Check if user is logged in..(user)parmeter passed
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        console.log("logged in");
        navigate ('/')
      } 
      else{
        console.log("logged out");
        navigate ('/login')
      }
    })
  }, []);

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