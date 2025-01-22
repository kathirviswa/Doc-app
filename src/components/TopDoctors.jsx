
import{useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { DoctorContext } from '../context/DoctorContext';
//  import { doctors } from '../assets/assets';

const TopDoctors = () => {
  const navigate = useNavigate();
   const {doctors} = useContext(DoctorContext);
 
  return (
    // Parent div
    <div className="flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10">
      <h1 className="text-3xl font-medium">Top Doctors to Book</h1>
      <p className="sm:w-1/3 text-center text-sm">
        Simply browse through our extensive list of trusted doctors.
      </p>
      {/* List of Doctors */}
      <div className="w-full grid grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0">
        {doctors.slice(0, 10).map((item,index)=>(
          <div onClick={() => {navigate(`/appointment/${index}`); scrollTo(0,0)}} // Navigate on click
            className="border border-red-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index} // Use unique _id as key
          >
            <img className="bg-red-200 hover:bg-red-600" src={item.image} alt={item.name} />
            <div className="p-4">
              {/* Card inside */}
              <div className="flex items-center gap-2 text-sm text-center text-green-500">
                <p className="w-2 h-2 bg-green-500 rounded-full"></p>
                <p className="font-semibold">Available</p>
              </div>
              {/* <p className={`mt-1 ${doctors.status === 'Available' ? 'text-green-500' : 'text-yellow-500'}`}>
                {doctors.status}
              </p> */}
              <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
              <p className="text-red-400 text-sm font-semibold">{item.speciality}</p>
            </div>
          </div>
        ))}
      </div>
      {/* 'More' button */}
      <button onClick={()=>{navigate('/doctors'); scrollTo(0,0)}}
      className="bg-red-100 hover:bg-red-400 text-gray-600 hover:text-black px-12 py-2 text-md font-medium rounded-full mt-10"
      >
        more
      </button>
    </div>
  );
};
export default TopDoctors;
