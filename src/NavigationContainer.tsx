import React from 'react';

interface NavigationContainerProps {
    activeSection: string;
    onNavClick: (sectionIndex: number) => void; 
}

const NavigationContainer: React.FC<NavigationContainerProps> = ({ activeSection, onNavClick }) => {

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
                        onNavClick(index); 
                    }}
                />
            ))}
        </div>
    );
}

export default NavigationContainer;
