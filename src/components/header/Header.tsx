
import BrushLogo from "../../assets/icons/tools/brush.svg";
import { useEffect, useState } from "react";
import HeaderNavigationContainer from "./HeaderNavigationContainer";
import HeaderLogo from "./HeaderLogo";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/types";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true)
    }, 4000)
  }, [])

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BRUSH,
    item: {},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <header className={`${isActive ? "translate-y-0" : ""} pr-3 transform -translate-y-full transition-transform duration-1000 ease-out h-20 p-0 flex items-center justify-between fixed right-20 z-50 text-mediumGray`}>
      <div className="flex items-center gap-4">
        <div>
          <ul className="flex gap-1 items-center mr-20">
            <li ref={drag} style={{ opacity: isDragging ? 0.4 : 1 }}>
              <img src={BrushLogo} width="40" height="40" alt="paint brush" className="cursor-pointer"/>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header