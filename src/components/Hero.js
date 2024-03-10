import "./HeroStyles.css";
// import pic from "../assests/p5.jpg";

function Hero(props){
    return(
        <>
         <div className={props.cName}>
         <img alt="HerpImg" src={props.heroImg}/>
      </div>

      <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
        {/* <button>{props.buttonText}</button> */}
        </div>
        </>
     
  
    )
  }
  
  export default Hero;