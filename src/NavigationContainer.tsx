import React, { useState, useEffect } from 'react';

const NavigationContainer: React.FC = () => {
    const [activeSection, setActiveSection] = useState<string>("#page-1");

    useEffect(() => {
        const handleScroll = () => {
            const currentScroll = window.scrollY;
            const sections = ["#page-1", "#page-2", "#page-3", "#page-4"];
        
            for (let sectionId of sections) {
                const section = document.querySelector(sectionId);
                if (section && section instanceof HTMLElement) {  // check if section is an instance of HTMLElement
                    const top = section.offsetTop;
                    const height = section.offsetHeight;
        
                    if (currentScroll >= top && currentScroll < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="nav-container">
            {["#page-1", "#page-2", "#page-3", "#page-4"].map((sectionId, index) => (
                <div 
                    key={index} 
                    className={`nav-square ${activeSection === sectionId ? "active" : ""}`} 
                    onClick={() => {
                        const section = document.querySelector(sectionId);
                        if (section) {
                            section.scrollIntoView({ behavior: 'smooth' });
                        }
                    }}
                />
            ))}
        </div>
    );
}

export default NavigationContainer;
