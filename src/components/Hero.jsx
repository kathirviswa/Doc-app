import { assets } from "../assets/assets"
const Hero = () => {
  return (
    // parent div 
    <div className=" flex flex-col md:flex-row flex-wrap bg-red-600 rounded-lg px-6 md:px-10 lg:px-20">
      {/* <----------Left side-------> =*/}
      <div className="md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 md:py-[10vw] m-auto md:mb-[-30px] ">
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight md:leading-tight lg:leading-tight text-white">Book Appointment<br/>with Trusted Doctors</p>
          {/* group profile and paragraph sections */}
          <div className=" flex flex-col md:flex-row items-center gap-3 text-sm font-thin text-white">
            <img src={assets.group_profiles} alt='group-profiles' className="w-28"/>
           <p className="">Simple browse through our extensive list of trusted doctors,<br className="hidden sm:block"/>I schedule your appointment hassle-free.</p>
          </div>
          {/* Book appointment button div*/}
     <a href="#Speciality"> 
     <div id="container" className="grid place-items-center">
        <button className="relative inline-block w-52 h-auto cursor-pointer outline-none border-0 align-middle bg-transparent p-0 font-inherit group">
          <span className="relative block m-0 w-12 h-12 bg-[#282936] rounded-[1.625rem] transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full" aria-hidden="true">
            <span className="absolute top-0 bottom-0 left-2.5 w-[1.125rem] h-0.5 m-auto bg-transparent transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:bg-white group-hover:translate-x-4">
              <span className="absolute top-[-0.25rem] right-[0.0625rem] w-2.5 h-2.5 border-t-2 border-r-2 border-white rotate-45"></span>
            </span>
          </span>
          <span className="absolute top-0 left-3 right-0 bottom-0 py-3 pl-[1.85rem] text-[#eaebed] font-bold leading-[1.6] font-['Mukta',sans-serif] text-center  transition-all duration-[450ms] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:text-white">
            Book Appointment
          </span>
        </button>
      </div>
     </a>
 {/* Book appointment button div End*/}
      </div>
           {/* <----------Right side--------- */}
           <div className="relative md:w-1/2">
          <img className="md:absolute  w-full bottom-0 h-auto rounded-lg" src ={assets.header_img} alt=''/>
           </div>
    </div>
  )
}

export default Hero