import React, { useState, useEffect, useContext } from 'react';
import Context from "../context/Context"; 

interface FullPageScrollProps {
    sectionComponents: React.ReactNode[];
    onInViewChange?: (index: number) => void;
}

const FullPageScroll: React.FC<FullPageScrollProps> = ({ sectionComponents, onInViewChange }) => {
    const [hasChanged, setHasChanged] = useState(false);

    const context = useContext(Context);

    if(context === undefined) {
      throw new Error ("Does not exist in Provider") 
    }
  
    const { currentSectionIndex, setCurrentSectionIndex } = context;

    const handleScroll = (event: WheelEvent) => {
        event.preventDefault();

        const direction = event.deltaY > 0 ? 1 : -1;

        if (direction === 1 && currentSectionIndex < sectionComponents.length - 1) {
            setCurrentSectionIndex(prevIndex => prevIndex + 1);
            setHasChanged(true);
        } else if (direction === -1 && currentSectionIndex > 0) {
            setCurrentSectionIndex(prevIndex => prevIndex - 1);
            setHasChanged(true);
        }
    };

    useEffect(() => {
        if (hasChanged) {
            setCurrentSectionIndex(currentSectionIndex);
            onInViewChange && onInViewChange(currentSectionIndex); // Notify about the section that is in view
            setHasChanged(false);
        }
    }, [hasChanged, currentSectionIndex, setCurrentSectionIndex, onInViewChange]);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSectionIndex, sectionComponents.length]);

    return (
        <div style={{ overflow: 'hidden' }}>
            {sectionComponents.map((section, index) => (
                <div
                    key={index}
                    style={{
                        transform: `translateY(-${currentSectionIndex * 100}vh)`,
                        transition: 'transform 1.5s ease'
                    }}
                >
                    {section}
                </div>
            ))}
        </div>
    );
};

export default FullPageScroll;

