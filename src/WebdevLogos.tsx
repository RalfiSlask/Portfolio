import VueLogo from "./assets/icons/webdev/vue_gray.png";
import ReactLogo from "./assets/icons/webdev/react_gray.png";
import AngularLogo from "./assets/icons/webdev/angular_gray.png";
import HtmlLogo from "./assets/icons/webdev/html_gray.png";
import CSSLogo from "./assets/icons/webdev/css_gray.png";
import JSLogo from "./assets/icons/webdev/js_gray.png";
import CLogo from "./assets/icons/webdev/csharp_gray.png";
import NodeLogo from "./assets/icons/webdev/node_gray.png";
import MatteLogo from "./assets/icons/Matte1_gray.png";

const WebdevLogos = () => {
  return (
    <div className="relative w-[400px] h-[250px] flex justify-center">
      <img src={MatteLogo} width="150" height="150" alt="Matthias" className="absolute bottom-0"/>
      <div className='flex items-center absolute z-10 bottom-6'>
        <img src={VueLogo} width="50" height="50" alt="" />
        <img src={ReactLogo} width="50" height="50" alt="" />
        <img src={AngularLogo} width="50" height="50" alt="" />
        <img src={HtmlLogo} width="50" height="50" alt="" />
        <img src={CSSLogo} width="50" height="50" alt="" />
        <img src={CLogo} width="50" height="50" alt="" />
        <img src={JSLogo} width="50" height="50" alt="" />
        <img src={NodeLogo} width="50" height="50" alt="" />
      </div>
    </div>
 
  )
}

export default WebdevLogos