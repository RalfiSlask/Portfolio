import Typewriter from 'react-ts-typewriter';
import { useState, useEffect } from "react";

const AnimatedHeading = () => {
    const [isIntroDone, setIsIntroDone] = useState(false);
    const [isNameDone, setIsNameDone] = useState(false);
    const [startTyping, setStartTyping] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setStartTyping(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className='w-full h-[110px]'>
            {startTyping && 
                <p className='text-[1.75rem] text-black font-fourth'>
                    <Typewriter 
                        text="Hi, I'm"
                        onFinished={() => {
                            setIsIntroDone(true);
                        }}
                        speed={100}
                        cursor={false}
                    />
                </p>
            }
            {isIntroDone &&
                <h1 className="text-[3rem] text-mediumGray font-bold">
                    <Typewriter 
                        text="Matthias Nilsson"
                        onFinished={() => {
                            setIsNameDone(true);
                        }}
                        speed={100}
                        cursor={false}
                    />
                </h1>
            }
        </div>
    )
}

export default AnimatedHeading;
