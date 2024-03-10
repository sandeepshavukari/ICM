import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import pic from "../assests/p8.jpg"
import ContactForm from "../components/ContactForm";

function Contact(){
    return(
      <>
      <Navbar/>
      <Hero 
      cName="hero-mid"
      heroImg={pic}
      title="Contact"
      
      />
      <ContactForm/>
      </>
  
    )
  }
  
  export default Contact;