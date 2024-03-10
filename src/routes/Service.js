import Hero from "../components/Hero";
import Navbar from "../components/Navbar";


function Service(){
    return(
      <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg="https://images.unsplash.com/photo-1597735881932-d9664c9bbcea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aW5kaWFuJTIwY3VsdHVyZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1400&q=60"
      title="Service"
      />
      
      </>
  
    )
  }
  
  export default Service;