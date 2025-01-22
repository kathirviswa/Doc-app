import { useContext } from 'react'
import { DoctorContext } from '../context/DoctorContext'

const MyAppointment = () => {

  const { doctors } = useContext(DoctorContext)

  return (
    <div>
      
      <h1 className='pb-3 mt-12 font-medium text-zinc-700 border-border-b-'>My appointment</h1>
      <div className="doctors-list">
        {doctors.slice(0, 3).map((item, index) => (
   // appointment Doctors details slot list
     <div key={index} className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-3 border-b'>
        
          <div>
            <img className='w-32 bg-red-200 hover:bg-red-600 rounded-md' src={item.image} alt={item.image}/>
          </div>
          {/* DOCTOR i'd list */}
         <div className='flex-1 text-sm text-zinc-600'>
       <p className='text-neutral-800 font-semibold'>{item.name}</p>
       <p className='text-red-400 text-sm font-semibold'>{item.speciality}</p>
       <p className='text-zinc-700 font-medium mt-1'>Address: </p>
       <p className='text-sm'>{item.address.line1}</p>
       <p className='text-sm'>{item.address.line2}</p>
       <p className='text-sm mt-1 text-green-700'>
         <span className='text-sm font-medium text-neutral-700'>Date & Time :</span>  28 ,November, 2024 | 8:30 PM</p>
         </div>
         {/* I'Will give a empty div reason is two button is right side left side space is given  */}
          <div></div> 
         {/* Button list */}
          <div className='flex flex-col gap-3 justify-end'>
            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-xl hover:bg-green-700 hover:text-white transition-all duration-300'> 💵 Pay Online</button>
            <button className='text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded-xl hover:bg-red-600 hover:text-white transition-all duration-300'>❌ Cancel Appointment</button>
          </div>

          </div>
        ))}
      </div>
    </div>
  );
};
export default MyAppointment