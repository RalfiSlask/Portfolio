import { useContext } from "react";
import Context from "../context/Context"; 

const NavigationContainer = () => {
    const context = useContext(Context);

    if (context === undefined) {
        throw new Error("Does not exist in Provider")
    }

    const { sections, currentSectionIndex, setCurrentSectionIndex } = context;

    return (
        <div className="nav-container">
            {sections.map((sectionId, index) => (
                <div 
                    key={index} 
                    className={`nav-square ${currentSectionIndex === index ? "active" : ""}`} 
                    onClick={() => {
                        setCurrentSectionIndex(index); 
                    }}
                />
            ))}
        </div>
    );
}

export default NavigationContainer;
