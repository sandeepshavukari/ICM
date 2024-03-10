import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import pic from "../assests/p9.jpg";
import Destination from "../components/Destination";
import { Link } from "react-router-dom";

function Home(){
  return(
    <>
    <Navbar/>
    <Hero 
    cName="hero"
    heroImg={pic}
    title="Discover India's Rich Tapestry of Traditions"
    // text="Where Tradition meets Innovation"
    buttonText="Explore Now"
    url="/explore"
    btnClasss="nav-links"
    />
    {/* <Link  to="/explore" className="nav-links" >Explore Now</Link> */}
    <Destination/>
    </>

  )
}

export default Home;