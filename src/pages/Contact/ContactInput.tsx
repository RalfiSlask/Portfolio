import React from 'react'

type InputProps = {
    type: string;
    placeholder: string;
    name: string;
}

const ContactInput: React.FC<InputProps> = ( { type, placeholder, name }) => {
  return (
    <input 
        type={type}
        name={name} 
        placeholder={placeholder} 
        spellCheck="false" 
        required 
        aria-required 
        className="rounded-[4px] outline-none h-11 pl-4 font-secondary bg-gray-600 border border-greenColor focus:bg-black focus:text-white"
    />
  )
}

export default ContactInput