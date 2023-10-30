import PageHeading from "../../components/headings/PageHeading";
import MatteLogo from "../../assets/icons/Matte1_gray.png";
import AboutInfo from "./AboutInfo";
import VueLogo from "../../assets/icons/webdev/vue_gray.png";
import ReactLogo from "../../assets/icons/webdev/react_gray.png";
import AngularLogo from "../../assets/icons/webdev/angular_gray.png";
import HtmlLogo from "../../assets/icons/webdev/html_gray.png";
import CSSLogo from "../../assets/icons/webdev/css_gray.png";
import JSLogo from "../../assets/icons/webdev/js_gray.png";
import CLogo from "../../assets/icons/webdev/csharp_gray.png";
import NodeLogo from "../../assets/icons/webdev/node_gray.png";

const About = () => {
  return (
    <section id="page-2" className='min-h-screen flex flex-col bg-lightgray items-center pt-[50px] gap-20 relative border-b border-solid border-mediumGray'>
      <PageHeading text="About"/>
      <div className="w-[1110px] flex flex-col gap-4">
        <div className="w-full flex gap-4 items-center justify-center">
          <img src={MatteLogo} width="150" height="150" alt="Matthias" />
          <AboutInfo />
        </div>

        <div className="flex flex-col gap-20 items-center">
          <h2 className="font-bold text-[2rem]">Technical Skills</h2>
     
          <div className="flex gap-20">
            <div className="flex flex-col gap-4 items-center">
              <h3>Programming</h3>
              <ul className="flex gap-2">
                <div className="flex flex-col items-center">
                  <img src={ReactLogo} width="50" alt="" />
                  <li>React</li>
                  
                </div>
                
                <li>Typescript</li>
                <div className="flex flex-col items-center">
                  
                  <img src={CSSLogo} width="50" alt="" />
                  <li>CSS</li>
                </div>
                <div className="flex flex-col items-center">
                  
                  <img src={HtmlLogo} width="50" alt="" />
                  <li>HTML5</li>
                </div>
                <li>Vue</li>
                <li>Tailwind</li>
                <li>Sass</li>
              </ul>
            </div>
           <div className="flex flex-col gap-4 items-center">
            <h3>Tools</h3>
            <ul className="flex gap-2">
              <li>Figma</li>
              <li>Git</li>
              <div className="flex flex-col items-center">
                  <li>Node</li>
                  <img src={NodeLogo} width="50" alt="" />
              </div>
              <li>Visual Studio Code</li>
            </ul>
           </div>
         
          </div>
      
        </div>
      </div>
    </section>
  )
}

export default About