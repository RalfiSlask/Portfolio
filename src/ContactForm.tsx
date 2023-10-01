import { useState, ChangeEvent, FormEvent } from "react";
import axios from "axios";

type FormType = {
    name: string;
    email: string;
    message: string;
}

const ContactForm: React.FC = () => {
    const [formData, setFormData] = useState<FormType>({name: "", email: "", message: ""});

    const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({...formData, [event.target.name]: event.target.value})
    };

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post('http://localhost:3000/sendmail', formData);
            
            if (response.status === 200) {
                console.log("Email sent successfully!");
                // Here, you can also reset the form or navigate the user to a thank-you page.
                setFormData({ name: "", email: "", message: "" });
            } else {
                console.error("Error sending email.");
            }
        } catch (error) {
            console.error("There was an error sending the email.", error);
        }

    };

    return (
        <form className="text-black" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required onChange={handleChange} />
            <input type="email" name="email" placeholder="Your Email" required onChange={handleChange} />
            <textarea name="message" placeholder="Your Message" style={{resize: "none"}} required onChange={handleChange} />
            <input type="submit" value="Send" />
        </form>
    )
}

export default ContactForm