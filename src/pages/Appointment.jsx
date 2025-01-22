import { useParams } from "react-router-dom";
import { DoctorContext } from "../context/DoctorContext";
import { useContext, useState, useEffect } from "react";
import { assets } from "../assets/assets";
import DateSlots from "./DateSlots";
import RelatedDoctors from '../components/RelatedDoctors';

const Appointment = () => {
  const { doctorId } = useParams();
  const { doctors, currencySymbol } = useContext(DoctorContext);

  const [doctorInfo, setDoctorInfo] = useState(null);
  
  useEffect(() => {
   
      const fetchDoctorInfo = async ()=>{
        const doctorInfo = doctors.find((doctor) => doctor._id === doctorId);
        setDoctorInfo(doctorInfo);
        // console.log(doctorInfo); // Log the fetched doctor info
    
    };

    fetchDoctorInfo();
  }, [doctors, doctorId]);

  return doctorInfo && (
    <div>
     <div className="flex flex-col sm:flex-row gap-5">

      <div>
      <img className="bg-red-200 w-full sm:max-w-72 hover:bg-red-600 rounded-xl" 
      src={doctorInfo.image} alt=""/>
      </div>

   <div className='flex-1 border border-red-300 rounded-xl p-8 py-7 bg-white mx-2 sm:mx-2 mt-[-80px] sm:mt-0'>
     {/* Mention doc Info: Name,Degree,Experience */}
      
      {/* doctor images */}
     <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>
      {doctorInfo.name}<img className='w-5' src={assets.verified_icon} alt='star'/></p>
 
     {/* degree */}
     <div className='flex item-center gap-2 font-semibold text-sm mt-1 text-red-400  '> 
     <p>{doctorInfo.degree} - {doctorInfo.speciality}</p>
     <button className='py-0.5 px-2 border hover:bg-red-600 hover:text-white border-red-300 text-xs rounded-full'>
      {doctorInfo.experience}</button>
     </div>
{/* Doctor About Section Start*/}
<div>
  <p className="flex item-center gap-2 text-md font-medium text-gray-900 mt-3"><img src={assets.info_icon} alt='info'/>About</p>
  <p className="flex text-sm text-gray-600 md:w-[700px] w-full mt-1">{doctorInfo.about}</p>
</div>
{/* Doctor About Section End */}

{/* Appointment fees */}
<p className="text-gray-700 font-medium mt-4">Appointment fee :
<span className="text-green-700 font-medium">{currencySymbol}{doctorInfo.fees}</span>
</p>
     </div>
     </div>
     <DateSlots />
     {/* Listing Related Doctors */}
   <RelatedDoctors doctorId={doctorId} speciality={doctorInfo.speciality} /> 

    </div>
  
  );
};
export default Appointment;
