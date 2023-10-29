import { createContext, useState } from "react";
import { ContextProps } from "../utils/types";
import { useEffect } from "react";

type ContextValueProps = {
    currentSectionIndex: number,
    setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>,
    sections: string[];
    clickingOnNav: (sectionIndex: number) => void;
}

const Context = createContext<ContextValueProps | undefined>(undefined);

export const ContextProvider: React.FC<ContextProps> = ( { children } ) => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const sections = ["#page-1", "#page-2", "#page-3", "#page-4"];

    useEffect(() => {
        console.log(currentSectionIndex)
    }, [currentSectionIndex])

    const clickingOnNav = (sectionIndex: number) => {
        setCurrentSectionIndex(sectionIndex)
    }

    const contextValue: ContextValueProps = {
        currentSectionIndex: currentSectionIndex,
        setCurrentSectionIndex: setCurrentSectionIndex,
        sections: sections,
        clickingOnNav: clickingOnNav
    };

return (
    <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
)

};

export default Context;