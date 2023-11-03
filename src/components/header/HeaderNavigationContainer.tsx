import HeaderNavItem from "./HeaderNavItem";
import { useState } from "react";
import owlLogo from "../../assets/icons/dark2.svg";

const navItems = [
  {
    id: 1,
    text: "Menu",
    href: "#",
    dropdownItems: [
      { id: 1, text: "About", href: "#page-2" },
      { id: 2, text: "Projects", href: "#page-3" },
      { id: 3, text: "Contact", href: "#page-4" },
    ],
  },
];

const HeaderNavigationContainer = () => {
  const [darkmodeLogo, setDarkModeLogo] = useState(owlLogo);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleClickOnDarkMode = () => {
    if (darkmodeLogo === owlLogo) {
      setDarkModeLogo("robinLogo");
    } else {
      setDarkModeLogo(owlLogo);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div className="flex flex-col gap-10 items-center text-textColor">
      <div className="w-[50px] h-[50px] flex justify-center items-center">
        <img
          onClick={handleClickOnDarkMode}
          src={darkmodeLogo}
          className="cursor-pointer darkmode-toggle"
          width="40"
          height="40"
          alt="circle with one side black and the other white representing a toggle darkmode logo"
        />
      </div>

      <nav className="flex items-center">
        <ul className="flex flex-col gap-10 items-center">
          {navItems.map((item) => (
            <HeaderNavItem
              key={item.id}
              text={item.text}
              href={item.href}
              dropdownItems={item.dropdownItems}
              dropdownOpen={dropdownOpen}
              toggleDropdown={toggleDropdown}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default HeaderNavigationContainer;
