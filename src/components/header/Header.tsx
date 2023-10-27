import darkModeLogo from "../../assets/icons/dark.svg";
import MLogo from "../../assets/icons/M-2.jpg";
import NavItem from "../../NavItem";


const navItems = [
  {id: 1, text: "About", href: ""},
  {id: 2, text: "Projects", href: ""},
  {id: 3, text: "Contact", href: ""},
]

const Header = () => {
  return (
    <header className="w-full h-20 px-3 flex items-center justify-between fixed z-5">
      <img src={MLogo} alt="m logo" width="20" height="20" />
      <div className="flex gap-10 items-center">
        <nav className="flex items-center">
          <ul className="flex gap-10 items-center text-[#CDBA9E] ">
           {navItems.map(item => <NavItem key={item.id} text={item.text} href={item.href}/>)}
          </ul>
        </nav>
        <img src={darkModeLogo} className="cursor-pointer darkmode-toggle" width="40" height="40" alt="circle with one side black and the other white representing a toggle darkmode logo" />
      </div>
    </header>
  )
}

export default Header