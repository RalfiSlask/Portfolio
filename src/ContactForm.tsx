import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

type FormType = {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
   
    return (
        <form className="text-black">
            <input type="text" name="name" placeholder="Your Name" required aria-required/>
            <input type="email" name="email" placeholder="Your Email" required aria-required/>
            <textarea name="message" placeholder="Your Message" style={{resize: "none"}} required aria-required/>
            <input type="submit" value="Send" />
        </form>
    )
}

export default ContactForm