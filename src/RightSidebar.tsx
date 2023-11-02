import NavigationContainer from "./components/NavigationContainer";
import HeaderNavigationContainer from "./components/header/HeaderNavigationContainer";

interface NavigationContainerProps {
    activeSection: string;
    onNavClick: (sectionIndex: number) => void; 
}

const RightSidebar: React.FC<NavigationContainerProps> = ( { activeSection, onNavClick } ) => {
  return (
    <div className='w-[400px] flex flex-col justify-between items-end min-h-screen fixed right-0 z-10 pt-2 pb-5 pr-8'>
         <HeaderNavigationContainer />
         <NavigationContainer 
          activeSection={activeSection}
          onNavClick={onNavClick}
        />
    </div>
  )
}

export default RightSidebar