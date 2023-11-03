import NavigationContainer from "./components/NavigationContainer";
import HeaderNavigationContainer from "./components/header/HeaderNavigationContainer";
import SidebarLine from "./SidebarLine";

interface NavigationContainerProps {
    activeSection: string;
    onNavClick: (sectionIndex: number) => void; 
}

const RightSidebar: React.FC<NavigationContainerProps> = ( { activeSection, onNavClick } ) => {
  return (
    <div className='w-[20px] flex flex-col justify-between items-end min-h-screen fixed right-0 z-10 pt-2 pr-8'>
         <HeaderNavigationContainer />
         <div className='flex flex-col items-center gap-6'>
          <NavigationContainer 
            activeSection={activeSection}
            onNavClick={onNavClick}
          />
          <SidebarLine />
         </div>
    </div>
  )
}

export default RightSidebar