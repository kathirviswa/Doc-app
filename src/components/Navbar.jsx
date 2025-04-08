// import React from 'react'
import { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiMenuFries } from "react-icons/ci";
import { assets } from "../assets/assets";
import {logout} from '../Firebase/Setup'



const Navbar = () => {
  const navigate = useNavigate();
  const [showMenu, setShowMenu] = useState (false)
  const [token,  setToken] = useState (true) ///boolean data token  default true. Suppose this token data false show the create account button
    
  return (

    <div className='flex items-center justify-around text-md py-5 mb-5 border-b border-b-neutral-400'>
{/* //logo */}

<img onClick={()=>navigate('/')} src={assets.logo} alt="logo" /> 
       <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>Home</li>
            <hr className='border-none outline-none h-0.5  bg-red-700 w-3/5 m-auto hidden'></hr>
        </NavLink>

        <NavLink to='/doctors'>
            <li className='py-1'>All Doctors</li>
            <hr className='border-none outline-none h-0.5 bg-red-700  w-3/5 m-auto hidden'></hr>
        </NavLink>

        <NavLink to='/about'>
            <li className='py-1'>About</li>
            <hr className='border-none outline-none h-0.5  bg-red-700 w-3/5 m-auto hidden'></hr>
        </NavLink>

       <NavLink to='/contact'>
       <li className='py-1'>Contact</li>
       <hr className='border-none outline-none h-0.5 bg-red-700 w-3/5 m-auto hidden'></hr>
       </NavLink>
       </ul>

       {/* //button tag */}
       <div className='flex items-center gap-4'>
     {/* use Ternory operator  */}
        {
          token ? //this token is true.

          //profile dropdown section..
          <div className=' flex items-center gap-2 cursor-pointer group relative'>
            <img className='w-8 rounded-full' src= { assets.profile_pic} alt=''/>
            <RiArrowDropDownLine  size={30}/> 
           <div className='absolute top-0 right-0 pt-14 text-base  font-medium text-gray-600 z-20 hidden group-hover:block shadow-md' >
            <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
            <p  onClick={()=>navigate('my-profile')}  className='hover:text-black cursor-pointer'>My Profile</p>
            <p  onClick={()=>navigate('my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
              {/*when click the logout buttons. To boolean data is false. Its show the createAccount Button */}
              <p onClick={() => { setToken(false); logout(); navigate('/login'); }} className='hover:text-black cursor-pointer py-1'>Logout</p>
            </div>
           </div>
          
          </div> : <button onClick={()=> navigate('/login')} className='bg-blue-500 hover:bg-red-600
           text-white px-5 py-3 font-light hidden md:block rounded-full'>Create Account</button>
        
        }
      < CiMenuFries size='25' onClick={() => setShowMenu(!showMenu)} className='md:hidden'/>

     {/* -----Mobile menu --------*/}
     <div className={`${showMenu ? 'fixed w-full' :'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
  
    <div className='flex  items-center justify-between px-5 py-6'>
    <img className='w-36'src={assets.logo} alt="logo" />
       <img className='w-7' onClick={()=>setShowMenu(false)} src={assets.cross_icon} alt="cross_icon" />
    </div>
  
     <ul className='flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium'>
       {/* I'will give a onclick property arrow function in setShowMenu when click any section link and hide the toggle */}
      <NavLink onClick={()=>setShowMenu(false)} to='/'><p className='px-4 py-2 rounded inline-block'>HOME</p></NavLink>
      <NavLink onClick={()=>setShowMenu(false) } to='/doctors'><p className='px-4 py-2 rounded inline-block'>ALL DOCTORS</p></NavLink>
      <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className='px-4 py-2 rounded inline-block'>ABOUT</p></NavLink>
     <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className='px-4 py-2 rounded inline-block'>CONTACT</p></NavLink>
     </ul>
   </div>
   
       </div>

    </div>
  )
}
export default Navbar