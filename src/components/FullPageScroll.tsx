// FullPageScroll.tsx
import React, { useState, useEffect } from 'react';

interface FullPageScrollProps {
    sections: React.ReactNode[];
    onSectionChange: React.Dispatch<React.SetStateAction<number>>;
    currentSectionIndex: number;
}

const FullPageScroll: React.FC<FullPageScrollProps> = ({ sections, onSectionChange, currentSectionIndex }) => {
    const [hasChanged, setHasChanged] = useState(false);

    const handleScroll = (event: WheelEvent) => {
        event.preventDefault();

        const direction = event.deltaY > 0 ? 1 : -1;

        if (direction === 1 && currentSectionIndex < sections.length - 1) {
            onSectionChange(prevIndex => prevIndex + 1);
            setHasChanged(true);
        } else if (direction === -1 && currentSectionIndex > 0) {
            onSectionChange(prevIndex => prevIndex - 1);
            setHasChanged(true);
        }
    };

    useEffect(() => {
        if (hasChanged) {
            onSectionChange(currentSectionIndex);
            setHasChanged(false);
        }
    }, [hasChanged, currentSectionIndex, onSectionChange]);

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false });

        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [currentSectionIndex, sections.length]);

    return (
        <div style={{ overflow: 'hidden' }}>
            {sections.map((section, index) => (
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

