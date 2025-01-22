import { useParams } from 'react-router-dom'
import { useContext, useState } from 'react'
import { DoctorContext } from '../context/DoctorContext'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { LiaFilterSolid } from "react-icons/lia";
const Doctors = () => {
  const navigate = useNavigate();
const {speciality} = useParams();//I'WILL GET THE SPECIALITY FROM THE URL PARAMETER.
//I'WILL GET THE DOCTORS FROM THE CONTEXT. and I'WILL RENDER THE DOCTORS.
// And import the TopDoctors component and get the doctors from the context.
const {doctors} = useContext(DoctorContext); 
const [filterDoctors, setFilterDoctors] = useState([]);
 const [showFilter ,setShowFilter] = useState(false);
const applyFilter =()=>{
  if(speciality){
    setFilterDoctors(doctors.filter(doctors=>doctors.speciality === speciality ));
  
  }else{ //whenever doctors OR Speciality Get changed it will be rendered the 
    //doctors and setFilterDoctors will be called.
    setFilterDoctors(doctors);
  }
}
useEffect(()=>{
  applyFilter();},//Whenever doctors or speciality get changed it will be rendered
// eslint-disable-next-line react-hooks/exhaustive-deps
[doctors,speciality]);//And Here we will added dependencies array[doctors,speciality]
  return (

    <div>
      <p className='text-md text-gray-600 font-medium'>Browse through the doctors specialist.</p>
    <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
      {/* Filter btn  */}
       <button className={`py-1 px-3  border rounded-md text-sm transition-all sm:hidden ${showFilter ? 'bg-red-200 text-black' : ''}`} onClick={()=>setShowFilter(prev => ! prev)}><LiaFilterSolid size={15}/>
        Filters</button> 
      {/* doctors speciality list */}
      
      <div className={`flex-col gap-4 text-gray-900 text-sm ${showFilter ? 'flex' :'hidden sm:flex'}`}>
       {/* <div className='flex flex-col gap-4 text-gray-900 text-sm'> */} 
   {/*Inside the p tag and in the onClick event handler we are going to use speciality === 'General physician' ? navigate('/doctors') :navigate('/doctors/General physician')  
    And All this classname we are going to use in  Ternory operator.*/}                                 
   {/* speciality Ternory operator inside the ex: 'Neurologist''Pediatricians'                                                                                                                                                          using the templeteing drill  we will pass the string */}
    <p onClick={()=> speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "General physician" ? "bg-red-200 text-black" : ""}`}>General physician</p>
    <p onClick={()=> speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16  border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Gynecologist" ? "bg-red-200 text-black" : ""}`} > Gynecologist </p>
    <p onClick={()=> speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Dermatologist" ? "bg-red-200 text-black" : ""}`} >Dermatologist</p>  
    <p onClick={()=> speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16  border  border-gray-300 rounded transition-all cursor-pointer ${speciality === "Pediatricians" ? "bg-red-200 text-black" : "" }`} >Pediatricians</p>
    <p onClick={()=> speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className= {`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16   border border-gray-300 rounded transition-all cursor-pointer ${speciality === "Neurologist" ? "bg-red-200 text-black" : "" }`} > Neurologist</p>
    <p onClick={()=> speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className= {`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16  hover:text-blue-950 border border-grey-300 rounded transition-all cursor-pointer ${speciality === "Gastroenterologist" ? "bg-red-200 text-black" : "" }`} >Gastroenterologist</p>
    
    </div>
   {/* doctors speciality list End*/}
    
    {/* doctors list start */}
    <div className=" w-full grid grid-cols-auto gap-5 gap-y-6">
   {
    filterDoctors.map((item,index)=>(
      <div onClick={()=> navigate (`/appointment/${item._id}`)}// Navigate on click
        className="border border-red-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
        key={index} // Use unique _id as key
      >
        <img className="bg-red-200 hover:bg-red-600" src={item.image} alt=""/>
        <div className="p-4">
          {/* Card inside */}
          <div className="flex items-center gap-2 text-sm text-center text-green-500">
            <p className="w-2 h-2 bg-green-500 rounded-full"></p>
            <p className="font-semibold">Available</p>
          </div>
          <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
          <p className="text-red-400 text-sm font-semibold">{item.speciality}</p>
        </div>
      </div>
    ))
  }
    </div>
    {/* doctors list end */}
    </div>
    </div>
   
  )
}
export default Doctors;