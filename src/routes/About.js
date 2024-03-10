import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import pic from "../assests/p10.jpg"
import AboutUs from "../components/AboutUs";

function About(){
    return(
      <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={pic}
      title="About"
      />
      <AboutUs/>
      </>
  
    )
  }
  
  export default About;