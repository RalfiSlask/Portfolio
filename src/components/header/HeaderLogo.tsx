import MLogo from "../../assets/icons/Mgray.png";

const HeaderLogo = () => {
  return (

        <a href="#page-1" className="w-[60px] h-[60px] rounded-full flex justify-center items-center">
          <img src={MLogo} width="50" height="50" alt="the letter M" className="M-logo cursor-pointer"/>
        </a>
  )
}

export default HeaderLogo