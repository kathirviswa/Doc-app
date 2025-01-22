import { createContext } from "react";
import { doctors } from "../assets/assets";


export const DoctorContext =createContext();


// eslint-disable-next-line react/prop-types
const DoctorContextProvider = ({children:children}) => {
  
  // this is Appointment components {doctorInfo.fee}
  const currencySymbol = '$'

  const value = {
    doctors:doctors ,currencySymbol
    };
 
    return (
      <DoctorContext.Provider value={value}>
        {children}
      </DoctorContext.Provider>
    );
};
export default DoctorContextProvider;
