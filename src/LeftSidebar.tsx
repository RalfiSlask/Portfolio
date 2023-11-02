import HeaderLogo from './components/header/HeaderLogo';
import SocialNavbar from './SocialNavbar';
import SidebarLine from './SidebarLine';

const LeftSidebar = () => {
  return (
    <div className='w-[80px] flex flex-col justify-between items-center min-h-screen fixed left-0 z-10 pt-2'>
        <HeaderLogo />
        <div className='flex flex-col items-center gap-6'>
          <SocialNavbar />
          <SidebarLine />
        </div>
    </div>
  )
}

export default LeftSidebar