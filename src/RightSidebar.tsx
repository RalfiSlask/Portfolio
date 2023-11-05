import NavigationContainer from "./components/NavigationContainer";
import SidebarLine from "./SidebarLine";
import { useContext } from "react";
import Context from "./context/Context";

interface NavigationContainerProps {
    activeSection: string;
    onNavClick: (sectionIndex: number) => void; 
}

const RightSidebar: React.FC<NavigationContainerProps> = ( { activeSection, onNavClick } ) => {
  const context = useContext(Context);

  if(context === undefined) {
    throw new Error ("Does not exist in Provider") 
  }

  const { isActive } = context;

  return (
    <div className={`${isActive ? "translate-y-0" : "translate-y-full"} transition-transform duration-1000 ease-out w-[80px] flex flex-col justify-between items-center fixed right-0 bottom-0 z-10 pt-2 gap-6`}>
        <NavigationContainer 
          activeSection={activeSection}
          onNavClick={onNavClick}
        />
        <SidebarLine />
    </div>
  )
}

export default RightSidebar