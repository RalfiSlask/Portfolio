import HeaderLogo from './components/header/HeaderLogo';
import SocialNavbar from './SocialNavbar';


const LeftSidebar = () => {
  return (
    <div className='w-[80px] flex flex-col justify-between items-center min-h-screen fixed left-0 z-10 pt-2 pb-5'>
        <HeaderLogo />
        <SocialNavbar />
    </div>
  )
}

export default LeftSidebar