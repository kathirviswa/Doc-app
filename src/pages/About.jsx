// import React from 'react'
 import { assets} from "../assets/assets"
const About = () => {
  return (
    <div className="container mx-auto px-4 py-8  ">
      <h2 className="text-2xl font-medium text-center text-gray-600 mb-8">ABOUT <span className="text-red-600">US</span></h2>
 {/* About Us Section */}
 <section className="flex flex-col md:flex-row items-start gap-12">
        {/* Image Section */}
        <div className="flex-shrink-0 my-10 ">
          <img src={assets.about_image}alt="Doctors" // Replace with the actual image URL
            className="rounded-lg shadow-lg w-full md:max-w-[360px] mb-10"/>
        </div>

        {/* Text Section */}
        <div className="pt-10 flex-1 md:w-2/4 text-gray-800 sm:pt-1">
        
          <p className=" leading-relaxed mb-8">
            Welcome To Prescripto, Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently.<br/>
            At Prescripto, We Understand The Challenges Individuals Face When It Comes To Scheduling Doctor<br/>Appointments
            And Managing Their Health Records.
          </p>
          <p className=" leading-relaxed mb-8">
            Prescripto Is Committed To Excellence In Healthcare Technology. We Continuously Strive To Enhance Our<br/>Platform,
            Integrating The Latest Advancements To Improve User Experience And Deliver Superior Service.<br/>
            Whether You&apos;re Booking Your First Appointment Or Managing Ongoing Care, Prescripto Is Here To Support You Every
            Step Of The Way.
          </p>
          <b className="text-xl font-semibold text-gray-800 ">Our Vision</b>
          <p className="leading-relaxed mb-8 pt-6">
            Our Vision At Prescripto Is To Create A Seamless Healthcare Experience For Every User. We Aim To Bridge The Gap
            Between Patients And Healthcare Providers, Making It Easier For You To Access The Care You Need, When You Need It.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="mt-20 my-5">
        <h2 className="text-2xl font-semibold text-gray-600 mb-6 ">WHY <span className="text-red-600">CHOOSE US</span></h2>
        <div className="flex flex-col md:flex-row mb-20">
          {/* Efficiency Card */}
          <div className="flex flex-col px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] border rounded-lg shadow-sm hover:bg-red-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer">
            <b>EFFICIENCY:</b>
            <p>Streamlined Appointment Scheduling That Fits Into Your Busy Lifestyle.</p>
          </div>

          {/* Convenience Card */}
          <div className="flex flex-col px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] border rounded-lg shadow-sm hover:bg-red-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer  ">
            <b>CONVENIENCE:</b>
            <p >Access To A Network Of Trusted Healthcare Professionals In Your Area.</p>
          </div>

          {/* Personalization Card */}
          <div className="flex flex-col px-10 md:px-16 py-8 sm:py-16 gap-5 text-[15px] border  rounded-lg shadow-sm hover:bg-red-600 hover:text-white transition-all duration-300 text-gray-600 cursor-pointer ">
            <b>PERSONALIZATION:</b>
            <p>Tailored Recommendations And Reminders To Help You Stay On Top Of Your Health.</p>
          </div>
        </div>
      </section>

    </div> 
  )
}

export default About