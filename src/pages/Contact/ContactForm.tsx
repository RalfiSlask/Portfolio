import ContactInput from "./ContactInput";
import SubmitButton from "./SubmitButton";
import ContactMessage from "./ContactMessage";

const ContactForm: React.FC = () => {
   
    return (
        <form className="text-white flex flex-col gap-5 w-[700px]">
            <ContactInput 
                type="text"
                placeholder="Name"
                name="name"
            />
            <ContactInput 
                type="email"
                placeholder="Email"
                name="email"
            />
            <ContactMessage 
                name="message"
                placeholder="Message"
            />
           <SubmitButton />
        </form>
    )
}

export default ContactForm