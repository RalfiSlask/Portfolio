
import BrushLogo from "../../assets/icons/tools/brush.svg";
import { useEffect, useState } from "react";
import HeaderNavigationContainer from "./HeaderNavigationContainer";
import HeaderLogo from "./HeaderLogo";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsActive(true)
    }, 4000)
  }, [])

  return (
    <header className={`${isActive ? "translate-y-0" : ""} pr-3 transform -translate-y-full transition-transform duration-1000 ease-out w-full h-20 p-0 flex items-center justify-between bg-secBG fixed z-50 text-mediumGray border-b border-solid border-thirdBG`}>
      <div className="flex items-center gap-4">
        <HeaderLogo />
        <div>
          <ul className="flex gap-1 items-center mr-20">
            <li>
              <img src={BrushLogo} width="40" height="40" alt="paint brush" className="cursor-pointer"/>
            </li>
          </ul>
        </div>
      </div>
      <HeaderNavigationContainer />
    </header>
  )
}

export default Header