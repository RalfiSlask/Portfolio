import darkModeLogo from "../../assets/icons/dark.svg";
import NavItem from "../../NavItem";
import PlantLogo from "../../assets/icons/tools/plant.svg";
import EraserLogo from "../../assets/icons/tools/eraser.svg";
import MusicLogo from "../../assets/icons/tools/music.svg";
import BrushLogo from "../../assets/icons/tools/brush.svg";
import MLogo from "../../assets/icons/M1.png";


const navItems = [
  {id: 1, text: "About", href: "#page-2"},
  {id: 2, text: "Projects", href: "#page-3"},
  {id: 3, text: "Contact", href: "#page-4"},
]

const Header = () => {
  return (
    <header className="w-full h-20 pr-3 flex items-center justify-between bg-gray-300 fixed z-50 text-mediumGray border-b border-solid border-mediumGray">
      <div className="w-[80px] h-[80px] bg-gray-400 flex justify-center items-center border-r border-b border-solid border-mediumGray">
        <div className="w-[60px] h-[60px] rounded-full bg-gray-300 flex justify-center items-center">
          <img src={MLogo} width="50" height="50" alt="the letter M" />
        </div>
        
      </div>
      <div>
        <ul className="flex gap-1 items-center mr-20">
          <li>
            <img src={PlantLogo} width="40" height="40" alt="green plant in dirt" className="cursor-pointer"/>
          </li>
          <li>
            <img src={EraserLogo} width="40" height="40" alt="pink blue eraser" className="cursor-pointer"/>
          </li>
          <li>
            <img src={MusicLogo} width="40" height="40" alt="white note on green background" className="cursor-pointer"/>
          </li>
          <li>
            <img src={BrushLogo} width="40" height="40" alt="paint brush" className="cursor-pointer"/>
          </li>
        </ul>
      </div>
      <div className="flex gap-10 items-center">
        <nav className="flex items-center">
          <ul className="flex gap-10 items-center">
           {navItems.map(item => <NavItem key={item.id} text={item.text} href={item.href}/>)}
          </ul>
        </nav>
        <img src={darkModeLogo} className="cursor-pointer darkmode-toggle" width="40" height="40" alt="circle with one side black and the other white representing a toggle darkmode logo" />
      </div>
    </header>
  )
}

export default Header