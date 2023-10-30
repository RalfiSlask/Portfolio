import CommandPromptHeading from "./CommandPromptHeading";
import { useState, useEffect } from "react";
import Typewriter from "react-ts-typewriter";

const VscHeadings = [
  {id: 1, title: "Problems"},
  {id: 2, title: "Output"},
  {id: 3, title: "Debug Console"},
  {id: 4, title: "Terminal", underline: true},
  {id: 5, title: "Ports"},
  {id: 6, title: "Comments"}
]

const CommandPrompt = () => {
  const [npmStart, setNpmStart] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNpmStart(true)
    }, 3000)
    return () => clearTimeout(timer)
  }, [])


  return (
    <div className="w-[50vw] rounded-[5px] bg-secBG border-2 border-solid border-secBG h-[140px] flex justify-center relative bottom-0 pt-4 text-textColor">
      <div className="w-[550px] h-full flex flex-col gap-6">
        <ul className="flex gap-4 uppercase font-third text-[1rem]">
          {VscHeadings.map(heading => <CommandPromptHeading key={heading.id} title={heading.title} underline={heading.underline}/>)}
        </ul>
        <div className="flex items-center gap-4">
          <div className="w-3 h-3 border-4 border-solid border-textColor rounded-full"></div>
      
            <p className="font-third font-bold">PS C:\Users\Matthias\&gt;  
              {npmStart && <Typewriter 
                text=" npm run dev "
                speed={100}
              />}
          
            </p>
        </div>
       
      </div>
    </div>
  )
}

export default CommandPrompt