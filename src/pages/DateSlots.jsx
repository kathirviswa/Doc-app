import { useEffect, useState } from "react";

const DateSlots = () => {
  const [doctorSlots, setDoctorSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState('');
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const getAvailableSlots = async () => {
    setDoctorSlots([]); // Clear slots before populating

    const today = new Date();

    for (let i = 0; i < 7; i++) {
      const currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      // Set the end time for the current day
      const endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0); // Set to (21,0,0,0) Time,date,minutes.Set to 9:00 PM for the current day (adjust as needed)

      // Initialize slots array for the current day
      let timeSlots = [];

      if (i === 0) {
        // Adjust current time if it's the first day (today)
        if (currentDate.getHours() >= 10) {
          currentDate.setHours(currentDate.getHours() + 1);
        } else {
          currentDate.setHours(10);
        }
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        // Start at 10:00 AM for future days
        currentDate.setHours(10, 0, 0, 0);
      }

      // Generate time slots for the current day
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        timeSlots.push({
        datetime: new Date(currentDate),
          time: formattedTime
        });

        // Increment current time by 30 minutes
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }

      // Add slots for the current day to the state
      setDoctorSlots(prev => [...prev, timeSlots]);
    }
  };

  useEffect(() => {
    getAvailableSlots();
  }, []);

  return (
    <div>
      {/****Booking Slots ****/}
      <div className="sm:ml-72 sm:pl-4 mt-4 font-medium text-gray-700">
        <p>Booking Slots</p>
         {/* Display the date and day */}
        <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">
        {doctorSlots.length > 0 && doctorSlots.map((item, index) => (
     //when click the button change the index
          <div key={index} onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index
            ? 'bg-red-600 text-white hover:text-white': 'text-red-700 border border-red-600'}`}>
            <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
            <p>{item[0] && item[0].datetime.getDate()}</p>
        </div>
            ))}
        </div>

   {/* set timeSlots div sec start */}
      <div className="flex gap-3 items-center w-full overflow-x-scroll mt-4">{doctorSlots.length > 0 &&
        doctorSlots[slotIndex].map((item, index) => (
        <p key={index} onClick={() => setSlotTime(item.time)}
            className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime
              ?'bg-red-600 text-white hover:text-white': 'text-red-700 border border-red-500'
                }`}
              >
                {item.time.toLowerCase()}
              </p>
            ))}
        </div>
        
   {/* BookAppointment Button start */}
        <button onClick={() => alert('Booking confirmed')} 
        className="bg-red-600 text-sm font-light text-white py-3 px-14 rounded-full my-6"
        >Book an Appointment</button>
      </div>
        {/* settimeSlots div sec End */}
    </div>
  );
};

export default DateSlots;
