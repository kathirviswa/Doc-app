import { assets} from "../assets/assets"
import { useState } from "react";
import { auth } from "../Firebase/Setup"; // ensure this exports firebase auth instance
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";



useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserData((prev) => ({
        ...prev,
        name: user.displayName || "No Name",
        email: user.email || "",
        image: user.photoURL || assets.profile_pic, // fallback to default
      }));
    }
  });

  return () => unsubscribe(); // cleanup
}, []);

import { updateProfile } from "firebase/auth";

// Inside the onClick for Save:
const handleSave = async () => {
  try {
    if (auth.currentUser) {
      await updateProfile(auth.currentUser, {
        displayName: userData.name,
        photoURL: userData.image
      });
      // You could also save other info like phone/address to Firestore here
    }
    setIsEdit(false);
  } catch (err) {
    console.error("Error updating profile:", err);
  }
};





const MyProfile = () => {

  const [userData,setUserData] = useState({
    name: "Kathiresan",
    image:assets.profile_pic,
    email:'kathirviswa57@gmail.com',
    phone : '+ 91 1234567890',
    address: {
      line1:"57th Cross, Richmond",
       line2: "Circle, Church Road, London"
    },
    gender:'Male',
    dob: '2000-11-15',
    age: '24',
    // about: "I am a software engineer with 5 years of experience in developing web applications.",
  })
  // initiziles boolean data (false) and if the change it (true) is get input field
  const [isEdit, setIsEdit] = useState(false)
  return (
    
    <div className="max-w-lg flex flex-col gap-2 text-sm">
      {/* display the users images */}
     <img src= {userData.image} alt="" className="w-36 rounded"/>

 {/*Added Ternory operator */}
   {/* If isEdit is true.It means u have to Edit this name,that case we provide one inputfiled
   suppose It's false added <p> we have display the usersname.. */}
   {/*//Using the previous data we will modify the Name property.whenever Change input filed, it update the name property */}
   { 
     isEdit ? <input className="bg-gray-1000 text-3xl font-medium max-w-60 mt-4" type="text" value={userData.name} 
                                               //curd operator
       onChange={e =>setUserData(prev =>({...prev,name:e.target.value}))}/> 
        : <p className="font-medium text-3xl text-neutral-800 mt-4"> {userData.name}</p>
     }

   {/* display the users details */}
  <hr className="bg-red-500 h-[1px] border-none"/>
    {/* contact information details */}
    <div className="">
      <h2 className="text-neutral-500 underline mt-3 text-md">CONTACT INFORMATIONS</h2>
      <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 ">

      <p className="font-medium">Email :</p> 
      {
        isEdit ? <input type="email" className="bg-red-50" value={userData.email} 
        onChange={e =>setUserData(prev =>({...prev,email:e.target.value}))}/> 
         : <p className="text-red-500">{userData.email}</p>
      }

    {/* phone no details */}
      <p className="font-medium">Phone :</p>
      { 
     isEdit ? <input className="bg-red-50 max-w-52" type="text" value={userData.phone}
                                          //spread operator inside
       onChange={e =>setUserData(prev =>({...prev,phone:e.target.value}))}/> 
        : <p className="text-red-500">{userData.phone}</p>
     }

     {/* Address details */}
     <p className="font-medium">Address :</p>
   {  
    isEdit ?  //address on inputfield
      <p className="">  
      {/* updated the object that is stored inside the object         {*nexted spered operator */}
      <input className="bg-red-50" onChange={(e)=>setUserData(prev=>({...prev, address:{...prev.address, line1:e.target.value}}))} value={userData.line1}  type="text" /><br/>
      <input  className=" bg-red-50" onChange={(e)=>setUserData(prev=>({...prev, address:{...prev.address, line2:e.target.value}}))} value={userData.line2}   type="text" />
      </p> : <p className="text-gray-600">{userData.address.line1}<br/>
                {userData.address.line2}
      </p>  
     
   }
      </div>
    </div>
{/* <----------------------------------------------------> */}

     {/* Basic information details */}
    <div className=" ">
       <h2 className="text-neutral-500 underline mt-3 text-md"> BASIC INFORMATIONS</h2>
       
       <div className="grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700 ">
 {/* Gender details */}
        <p className="font-medium">Gender :</p>
        
        {
         isEdit ? 
         //Whenever we will change this data. it update the object..
         <select className="max-w-20 bg-red-100" onChange={(e)=> setUserData(prev =>({...prev, gender: e.target.value}))} value={userData.gender}> 
          <option value="Male">Male</option>
          <option value="Female">Female</option> 
         </select> : <p className="text-red-500">{userData.gender}</p>
          }

     {/* Birthday details */}
       <p className="font-medium">DOB :</p>
      {
        isEdit ? <input type="date" className="max-w-28 bg-red-50" onChange={(e)=> setUserData(prev =>({...prev, dob: e.target.value}))} value={userData.dob}/> 
        :<p className="text-red-500">{userData.dob}</p>
      }

 {/* Age details */}
 <p className="font-medium">Age :</p>
        {
         isEdit ? 
         //Whenever we will change this data it update the object..                  //spread operator inside        
        <input type="text" className="bg-red-50" value={userData.age} onChange={(e) =>setUserData(prev =>({...prev,age: e.target.value}))}/> 
       : <p className="text-red-500">{userData.age}</p>
        }
       </div>
    </div>
{/* <--------------------------------------> */}

 {/*Edit profile and save information button sections */}
<div className="mt-10">
  { //When the isEdit is (true), then we will add the save information btn.if it is (false) We provide Edit btn..                          
    isEdit ? 
    <button  className="border border-red-500 px-8 py-2 rounded-full shadow-md hover:bg-red-600 hover:text-white transition-all" onClick={handleSave}> Save Informations </button> 
  : <button className="border border-red-500 px-8 py-2 rounded-full shadow-md hover:bg-red-600 hover:text-white transition-all" onClick={()=>setIsEdit(true)}> Edit Profile </button>
}
</div>

</div>
  );
};
export default MyProfile