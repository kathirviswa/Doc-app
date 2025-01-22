import { assets } from "../assets/assets"

const Footer = () => {
 
  return (
   

    <div className="md:mx-10 cursor-pointer">
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm md:text-md lg-text-xl">
  {/* <-----------Left section-----------> */}
  <div className="">
<img src={assets.logo} alt="logo" className="mb-5 w-40"/>
<p className="w-full md:w-2/3 text-gray-600 leading-6">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima voluptas atque sit, temporibus reprehenderit unde quos in, corrupti quis sed numquam laborum repudiandae culpa magni consequuntur officiis cum quasi maiores.</p>
  </div>

  {/* center Sections */}
<div>
<p className="text-xl font-medium mb-5">COMPANY</p>
<ul className="flex flex-col gap-2 text-gray-600 ">
<a href="/"> <li>Home</li></a>
    <a href="/about"><li className="cursor-pointer" >About</li></a>
    <a href="/Contact"><li className="cursor-pointer">Contact us</li></a>
    <a href="/"><li className="cursor-pointer">Privacy Policy</li></a>
</ul>

</div>
   {/* <-----------Right section-----------> */}
   <div className="">
    <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
    <ul className="flex flex-col gap-2 text-gray-600">
        <li>Phone: 1234567890</li>
        <li>Email: [info@company.com]</li>
    </ul>
    </div>
</div>
{/* <-------Copyright sections-------> */}
<hr/>
<p className="py-5 text-sm md:text-medium text-center">Copyright © 2024 [Devcommarde] - All Right Reserved. </p>
    </div>
  )
}

export default Footer