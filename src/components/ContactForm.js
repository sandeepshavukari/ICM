import { useState } from "react"
import "./ContactFormStyles.css"
import axios from "axios"

function ContactForm(){
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [message,setMessage]=useState('')
    async function submit(e){
        e.preventDefault();

        try{

            await axios.post("http://localhost:8000/contactus",{
                name,email,subject,message
            })
            
        }
        catch(e){
            console.log(e);

        }
    }
    return(
        <div className="from-container">
            <h1>Send a message to us!</h1>
            <form action="POST">
                <input type="name" placeholder="Name" onChange={(e) => { setName(e.target.value) }}/>
                <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"/>
                <input type="subject" onChange={(e) => { setSubject(e.target.value) }} placeholder="Subject"/>
                <textarea type="message" onChange={(e) => { setMessage(e.target.value) }} placeholder="Message" rows="4"></textarea>
                <button onClick={submit}>Send Message</button>
            </form>
        </div>
    )
}

export default ContactForm;