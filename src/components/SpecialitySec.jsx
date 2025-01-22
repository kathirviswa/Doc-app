// import { assets } from "../assets/assets"
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'
const SpecialitySec = () => {
 return (
//Find by Speciality 
<div className='flex flex-col items-center gap-4 py-16 text-gray-800' id="Speciality">
<h1 className='text-3xl font-medium'>Find by Speciality</h1>
<p className='sm:w-1/3 text-center text-sm'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free. </p>
   
   {/* list of speciality category */}
   <div className='flex sm:justify-center w-full gap-4 pt-5 overflow-scroll '>
    {specialityData.map((item,index)=>(  
//Explanation,Its Onclick scrollTo(0,0) is when ever user will scroll the webpage click on this SpecialitySec 
//menu,then it will then redirects to All Doctors pages and it will also scroll the webpage to the Top.    
   <Link onClick={()=>scrollTo(0,0)}className='flex flex-col item-center text-sm text-gray-600 cursor-pointer flex-shrink-0 
   hover:translate-y-[-10px] transition-all duration-500'key={index}to= {`/doctors/${item.speciality}`}>
   <img className='w-16 sm:w-24 mb-2 ' src={item.image} alt=""/>
   <p>{item.speciality}</p>
   </Link>
))}
   </div>
    {/* list of speciality category end  */}
   </div>
 )
}
export default SpecialitySec