import { createContext, useState } from "react";
import { ContextProps } from "../utils/types";
import { useEffect } from "react";

type ContextValueProps = {
    currentSectionIndex: number,
    setCurrentSectionIndex: React.Dispatch<React.SetStateAction<number>>,
    sections: string[];
    mode: {
        gray: boolean;
        black: boolean;
        color: boolean;
    };
}

const Context = createContext<ContextValueProps | undefined>(undefined);

export const ContextProvider: React.FC<ContextProps> = ( { children } ) => {
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [mode, setMode] = useState({gray: true, black: false, color: false});
    const sections = ["#page-1", "#page-2", "#page-3", "#page-4"];

    const contextValue: ContextValueProps = {
        currentSectionIndex: currentSectionIndex,
        setCurrentSectionIndex: setCurrentSectionIndex,
        sections: sections,
        mode: mode,
    };

return (
    <Context.Provider value={contextValue}>
        {children}
    </Context.Provider>
)

};

export default Context;