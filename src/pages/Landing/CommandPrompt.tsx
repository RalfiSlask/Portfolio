import VSC from "../../assets/images/VSC.jpg"

const CommandPrompt = () => {
  return (
    <div className="w-full bg-black h-[140px] flex justify-center">
      <div className="w-[550px] h-full flex justify-center relative">
        <img src={VSC} alt="" className="w-full-full"/>
        <p className="absolute top-[38px] left-[40px] z-5 font-third font-bold text-lightgray">PS C:\Users\Matthias\&gt; npm run dev</p>
      </div>
    </div>
  )
}

export default CommandPrompt