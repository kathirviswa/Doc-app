// import React from 'react'
import { assets} from "../assets/assets"
const Contact = () => {
  return (
    
    <div className="text-center text-2xl pt-10 text-gray-500">
      <p className="text-2xl font-semibold text-gray-600 mb-8">CONTACT <span className="text-red-600">US</span></p>
    
      <div className="my-10 flex flex-col text-sm sm:flex-row md:flex-row justify-center gap-10 mb-28">
        <img src={assets.contact_image} alt="Doctor and child"
          className="w-full max-w-[360px] rounded-lg shadow-md"/>
    
          <div className="flex flex-col justify-center items-start gap-6 text-left">
            <h2 className="text-lg  font-semibold text-gray-600">OUR OFFICE</h2>
            <p className="text-gray-500">54709 Willms Station<br />Suite 350, Washington, USA</p>
            <p className="mt-2 text-gray-500">Tel: (415) 555-0132<br/>Email: Devcommarde@gmail.com</p>
          
            <h2 className="text-lg font-semibold text-gray-600">CAREERS AT PRESCRIPTO</h2>
            <p className="text-gray-500">Learn more about our teams and job openings.</p>
            <button className="border border-gray-700 px-8 py-4  rounded-sm hover:bg-red-600 hover:text-white transition-all duration-500">
              Explore Jobs
            </button>
        </div>
      </div>
      </div>
  )
}
export default Contact