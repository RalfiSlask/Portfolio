import MLogo from "../../assets/icons/Mgray.png";

const HeaderLogo = () => {
  return (
    <div className="w-[80px] h-[80px] bg-thirdBG flex justify-center items-center border-r border-b border-solid border-thirdBG">
        <a href="#page-1" className="w-[60px] h-[60px] rounded-full bg-secBG flex justify-center items-center">
        <img src={MLogo} width="50" height="50" alt="the letter M" className="M-logo cursor-pointer"/>
        </a>
    </div>
  )
}

export default HeaderLogo