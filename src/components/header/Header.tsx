import owlLogo from "../../assets/icons/owl_dark.png";
import robinLogo from "../../assets/icons/robin_dark.png";
import NavItem from "../../NavItem";
import BrushLogo from "../../assets/icons/tools/brush.svg";
import MLogo from "../../assets/icons/Mgray.png";
import { useState } from "react";


const navItems = [
  {id: 1, text: "About", href: "#page-2"},
  {id: 2, text: "Projects", href: "#page-3"},
  {id: 3, text: "Contact", href: "#page-4"},
]

const Header = () => {
  const [darkmodeLogo, setDarkModeLogo] = useState(owlLogo)

  const handleClickOnDarkMode = () => {
    if(darkmodeLogo === owlLogo) {
      setDarkModeLogo(robinLogo)
    } else {
      setDarkModeLogo(owlLogo)
    }
  };

  return (
    <header className="w-full h-20 pr-3 flex items-center justify-between bg-gray-300 fixed z-50 text-mediumGray border-b border-solid border-mediumGray">
      <div className="flex items-center gap-4">
        <div className="w-[80px] h-[80px] bg-gray-400 flex justify-center items-center border-r border-b border-solid border-mediumGray">
          <a href="#page-1" className="w-[60px] h-[60px] rounded-full bg-gray-300 flex justify-center items-center">
            <img src={MLogo} width="50" height="50" alt="the letter M" className="M-logo cursor-pointer"/>
          </a>
        </div>
        <div>
        <ul className="flex gap-1 items-center mr-20">
          <li>
            <img src={BrushLogo} width="40" height="40" alt="paint brush" className="cursor-pointer"/>
          </li>
        </ul>
      </div>
      </div>
      <div className="flex gap-10 items-center">
        <nav className="flex items-center">
          <ul className="flex gap-10 items-center">
           {navItems.map(item => <NavItem key={item.id} text={item.text} href={item.href}/>)}
          </ul>
        </nav>
        <img onClick={handleClickOnDarkMode} src={darkmodeLogo} className="cursor-pointer darkmode-toggle" width="40" height="40" alt="circle with one side black and the other white representing a toggle darkmode logo" />
      </div>
    </header>
  )
}

export default Header