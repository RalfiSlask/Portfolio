import HeaderNavItem from "./HeaderNavItem";
import { useState } from "react";
import owlLogo from "../../assets/icons/owl_dark.png";
import robinLogo from "../../assets/icons/robin_dark.png";

const navItems = [
    {id: 1, text: "About", href: "#page-2"},
    {id: 2, text: "Projects", href: "#page-3"},
    {id: 3, text: "Contact", href: "#page-4"},
  ]

const HeaderNavigationContainer = () => {
    const [darkmodeLogo, setDarkModeLogo] = useState(owlLogo);

    const handleClickOnDarkMode = () => {
        if(darkmodeLogo === owlLogo) {
          setDarkModeLogo(robinLogo)
        } else {
          setDarkModeLogo(owlLogo)
        }
      };

    return (
        <div className="flex gap-10 items-center text-textColor">
            <nav className="flex items-center">
                <ul className="flex gap-10 items-center">
                    {navItems.map(item => <HeaderNavItem key={item.id} text={item.text} href={item.href}/>)}
                </ul>
            </nav>
            <img onClick={handleClickOnDarkMode} src={darkmodeLogo} className="cursor-pointer darkmode-toggle" width="40" height="40" alt="circle with one side black and the other white representing a toggle darkmode logo" />
        </div>
    )
}

export default HeaderNavigationContainer