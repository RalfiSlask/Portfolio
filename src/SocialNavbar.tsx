import GithubLogo from "./assets/icons/social/github_gray.svg";
import LinkedinLogo from "./assets/icons/social/linkedin_gray .svg";
import FrontendLogo from "./assets/icons/social/frontendmentor_gray.svg";

const SocialNavbar = () => {
  return (
    <div className='fixed flex gap-4 z-20 bottom-16 left-[2%]'>
        <img src={GithubLogo} width="25" alt="github logo, a black spider" className="fill-[green] text-green-200"/>
        <img src={LinkedinLogo} width="25" alt="linkedin logo, in text" />
        <div className="bg-black rounded-full w-[25px] h-[25px] flex justify-center items-center">
            <img src={FrontendLogo} width="25" alt="fontendmentor.io logo" className="w-[80%] h-[80%] object-cover"/>
        </div>
        
    </div>
  )
}

export default SocialNavbar