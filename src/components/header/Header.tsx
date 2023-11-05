import { useContext } from "react";
import HeaderNavigationContainer from "./HeaderNavigationContainer";
import HeaderLogo from "./HeaderLogo";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../utils/types";
import Context from "../../context/Context";
import seasonsLogo from "../../assets/icons/seasons.png";

const Header = () => {
  const context = useContext(Context);

  if(context === undefined) {
    throw new Error ("Does not exist in Provider") 
  }

  const { isActive } = context;


  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.BRUSH,
    item: {},
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <header className={`${isActive ? "translate-y-0" : ""} pr-3 transform -translate-y-full transition-transform duration-1000 ease-out px-8 h-20 w-full p-0 flex items-center justify-between fixed z-50 text-mediumGray`}>
      <div className="flex gap-4">
        <HeaderLogo /> 
        <img src={seasonsLogo} width="50" height="auto" alt="" className="object-cover"/>
      </div>
      
        <div>
          <ul className="flex gap-1 items-center mr-20">
            <li ref={drag} style={{ opacity: isDragging ? 0.4 : 1 }}>
              {/* <img src={BrushLogo} width="40" height="40" alt="paint brush" className="cursor-pointer"/> */}
            </li>
          </ul>
        </div>
      <HeaderNavigationContainer />
    </header>
  )
}

export default Header