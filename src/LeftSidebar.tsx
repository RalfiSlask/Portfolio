import SocialNavbar from './SocialNavbar';
import SidebarLine from './SidebarLine';
import { useContext } from "react";
import Context from './context/Context';

const LeftSidebar = () => {
  const context = useContext(Context);

  if(context === undefined) {
    throw new Error ("Does not exist in Provider") 
  }

  const { isActive } = context;

  return (
    <div className={`${isActive ? "translate-y-0" : "translate-y-full"} transition-transform duration-1000 ease-out w-[80px] flex flex-col justify-between items-center fixed left-0 bottom-0 z-10 pt-2 gap-6`}>
        <SocialNavbar />
        <SidebarLine />
    </div>
  )
}

export default LeftSidebar