import { useState } from 'react';
import {login, signup} from '../Firebase/Setup';
import { LoaderCircle } from 'lucide-react';
import { toast } from 'react-toastify';


const Login = () => {
  const [state, setState] = useState ('Sign In');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  

  // const onSubmitHandler = async (event) => {
  //   event.preventDefault();
  //   // Add logic to handle form submission
  // };

  // auth function
 const user_auth = async (event) => {
    event.preventDefault();
     setIsLoading(true);
    if (state === 'Sign In') {
      await login(email, password);
    } 
    else {
      if (password !== confirmPassword) {
        toast.error("Passwords do not match!");
        setIsLoading(false);
        return;
      }
      await signup(email, password, name); // ✅ correct parameter order
    }
  
    setIsLoading(false);
    delay = 1000;
  };

  return (
    isLoading?
    <LoaderCircle className='m-auto min-h-[80vh] w-9 animate-spin text-red-600'/>
    :  
    <form className="min-h-[80vh] flex items-center ">
     
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border text-zinc-600 rounded-xl shadow-2xl transform transition-all hover:scale-105 duration-500 '>
       
        <p className='text-2xl font-semibold'>{state === 'Sign Up' ? "Create your Account" : "Login to your account"}</p>
        <p className='text-sm'>Please {state === 'Sign Up' ? "sign up" : "login to your account"} to book an appointment!</p>
        
        <p className="mt-2 text-sm text-gray-600">
          { state === 'Sign Up' ? "Join us and start your Appointment!":"Welcome back!"}
          </p>
       {/*Ternory Operator/ If state is sign up then not showing name input label in login page*/}
          
       {
        state === "Sign Up" && <div className='w-full' >
        <p>Full Name</p>
       
          <input className='border border-red-300 rounded w-full p-2 mt-1'
            type="text" placeholder="Your Name" value={name} 
            onChange={(e) => setName(e.target.value)} required/> 
        </div> 
         }

        {/* E-mail */}
        <div className='w-full'>
        <p>E-mail</p>
        <input className='border border-red-300 rounded w-full p-2 mt-1'
          type="email" value={email}  placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} required/>
          </div>

        {/* Password */}
        <div className='w-full'>
        <p>Password</p>
        <input  className='border border-red-300 rounded w-full p-2 mt-1'
        type="password"value={password}  placeholder="Password "
        onChange={(e) => setPassword(e.target.value)} required/>
      </div>

      {/* Confrim-password */}
      {/* Ternory Operator/ If state is sign up then not showing confrim password input label in login page */}
   {/* { 
       state === "Sign Up" && <div className='w-full'>
       <p>Confrim Password</p>
          <input className='border border-red-300 rounded w-full p-2 mt-1'
            type="confirm-password" value={confirmPassword} placeholder="confirm-Password"
            onChange={(e) => setConfirmPassword(e.target.value)} required/>
            </div>
     }  */}
     
    {/* create account btn */}
    <button onClick={user_auth} type="submit" className='bg-red-500 hover:bg-red-700 w-full text-white text-base font-bold py-2 px-4 rounded-md'>
        {state}
        {/* {state === 'Sign Up' ? "Create Account" : "Login"} */}
     </button>
                                   
       <button type="button" onClick={() => setState(state === 'Sign Up' ? 'Login' : 'Sign Up')}>
        
         {/*when we get signup we will get the first message (already have a account) & click login the will get second message*/}
        {state === 'Sign Up' ? <span className='text-green-700 cursor-pointer'> Already have an account? <span onClick={()=> setState('Login')} className='text-red-600 underline'>Login here</span></span> 
        : <span className='text-red-600 cursor-pointer'>Don&apos;t have an account? <span onClick={()=> setState('Sign Up')} className='text-green-700 underline cursor-pointer'>SignUp here</span></span>}
        </button>
      
      </div>
    </form>
  );
};

export default Login;