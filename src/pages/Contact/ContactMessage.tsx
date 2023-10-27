type MessageProps = {
    name: string;
    placeholder: string;
}

const ContactMessage: React.FC<MessageProps> = ( { name, placeholder } ) => {
  return (
    <textarea 
        name={name}
        placeholder={placeholder} 
        style={{resize: "none"}} 
        required 
        aria-required
        spellCheck="false" 
        className="rounded-[4px] outline-none h-40 pl-4 pt-4 bg-gray-600 border border-greenColor focus:bg-black focus:text-white"
    />
  )
}

export default ContactMessage