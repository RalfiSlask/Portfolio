import { useState, useEffect } from "react";

const CustomCursor: React.FC = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isActive, setIsActive] = useState(false);
  
    useEffect(() => {
      const updatePosition = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
      };
  
      const activateCursor = () => setIsActive(true);
      const deactivateCursor = () => setIsActive(false);
  
      const hoverElements = document.querySelectorAll(".hoverable");
      hoverElements.forEach(el => {
        el.addEventListener('mouseenter', activateCursor);
        el.addEventListener('mouseleave', deactivateCursor);
      });
  
      window.addEventListener('mousemove', updatePosition);
  
      return () => {
        hoverElements.forEach(el => {
          el.removeEventListener('mouseenter', activateCursor);
          el.removeEventListener('mouseleave', deactivateCursor);
        });
        window.removeEventListener('mousemove', updatePosition);
      };
    }, []);
  
    return (
      <>
        <div
          className={`custom-cursor ${isActive ? 'active' : ''}`}
          style={{
            left: `${position.x}px`,
            top: `${position.y}px`
          }}
        ></div>
      </>
    );
  }

  export default CustomCursor;
  
