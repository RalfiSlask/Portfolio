import { useEffect, useState } from "react";
import Typewriter from "react-ts-typewriter";

const FirstScreen = ( ) => {
    const [textVisible, setTextVisible] = useState(true);
    const [screenVisible, setScreenVisible] = useState(true);
    const [npmStart, setNpmStart] = useState(false);
    const [removeScreen, setRemoveScreen] = useState(false);

    useEffect(() => {
      const timer = setTimeout(() => {
        setNpmStart(true)
      }, 1000)
      return () => clearTimeout(timer)
    }, [])
  
    useEffect(() => {
      // Start the text fade-out effect after a delay
      const textTimer = setTimeout(() => {
        setTextVisible(false);
      }, 3000); // 3-second delay for text
  
      // Start the screen fade-out effect after a longer delay
      const screenTimer = setTimeout(() => {
        setScreenVisible(false);
      }, 4000); // 6-second delay for screen

      const removeTimer = setTimeout(() => {
        setRemoveScreen(true);
      }, 5000);
  
      return () => {
        clearTimeout(textTimer);
        clearTimeout(screenTimer);
        clearTimeout(removeTimer)
      };
    }, []);

    if(removeScreen) {
        return null;
    }
  
    return (
      <section className={`first-screen flex flex-col gap-10 items-center ${!screenVisible ? 'fade-out' : ''}`}>
        <div className={`${!textVisible ? 'fade-out' : ''} flex flex-col gap-10 items-center `}>
            <div className="flex gap-4 font-bold items-end">
                <h2 className={`font-bold text-[1.85rem]`}>Matthias Nilsson</h2>
                <p className="font-bold text-[1.25rem] text-textColor font-first">Developer</p>
            </div>
            <p className="font-third text-[1rem] font-bold w-[500px] text-center">PS C:\Users\Matthias\&gt;  
                {npmStart && <Typewriter 
                    text=" npm start "
                    speed={100}
                />}
            </p>
        </div>
      </section>
    );
}

export default FirstScreen