import Banner from "../components/Banner"
import Hero from "../components/Hero"
import SpecialitySec from "../components/SpecialitySec"
import TopDoctors from "../components/TopDoctors"
import Appointment from "./Appointment"


const Home = () => {
  return (
    <div>

  <Hero/>
  <SpecialitySec/>
  <TopDoctors/>
  <Appointment/>
  <Banner/>
    </div>
  )
}
export default Home