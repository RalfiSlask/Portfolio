import GithubLogo from "./assets/icons/social/github.svg";
import LinkedinLogo from "./assets/icons/social/linkedin.svg";
import FrontendLogo from "./assets/icons/social/frontend.png";
import SocialIcon from "./SocialIcon";
import { useContext } from "react";
import Context from "./context/Context";

const SocialArray = [
  {id: 1, logo: GithubLogo, alt: "github logo, a black spider", link: "https://github.com/RalfiSlask"},
  {id: 2, logo: LinkedinLogo, alt: "linkedin logo, in text", link: "https://www.linkedin.com/in/matthias-nilsson-68023b294/"},
  {id: 3, logo: FrontendLogo, alt: "fontendmentor.io logo", link: "https://www.frontendmentor.io/profile/RalfiSlask"}
];

const SocialNavbar = () => {
  const context = useContext(Context);

  if(context === undefined) {
    throw new Error("Does not exist in Provider")
  }

  const { mode } = context;

  return (
    <div className='flex flex-col gap-4'>
      {SocialArray.map((icon => {
        const { id, logo, alt, link } = icon;
        return (
         <SocialIcon 
          key={id} 
          logo={`${mode.gray ? logo.replace(".svg", "_gray.svg").replace(".png", "_gray.png") : logo}`}
          alt={alt}
          link={link}
        />
         )}))}        
    </div>
  )
}

export default SocialNavbar