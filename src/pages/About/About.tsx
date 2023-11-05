import PageHeading from "../../components/headings/PageHeading";
import MatteLogo from "../../assets/icons/Matte1.png";
import AboutInfo from "./AboutInfo";
import VueLogo from "../../assets/icons/webdev/vue.png";
import ReactLogo from "../../assets/icons/webdev/react.png";
import HtmlLogo from "../../assets/icons/webdev/html.png";
import CSSLogo from "../../assets/icons/webdev/css.png";
import JSLogo from "../../assets/icons/webdev/js.png";
import NodeLogo from "../../assets/icons/webdev/node.png";
import SassLogo from "../../assets/icons/webdev/sass.png";
import TSLogo from "../../assets/icons/webdev/typescript.png";
import GitLogo from "../../assets/icons/webdev/git.png";
import VSCLogo from "../../assets/icons/webdev/vsc.png";
import TailwindLogo from "../../assets/icons/webdev/tailwind.png";
import FigmaLogo from "../../assets/icons/webdev/Figma.png";
import BootstrapLogo from "../../assets/icons/webdev/Bootstrap.png";
import CategoryList from "./CategoryList";
import { useEffect, useState } from "react";

const CategoriesArray = [
  {
    id: 1, category: "Tools", skills: [
      {id: 1, skill: "Git", logo: GitLogo},
      {id: 2, skill: "VSC", logo: VSCLogo},
      {id: 3, skill: "Node", logo: NodeLogo},
      {id: 4, skill: "Figma", logo: FigmaLogo},
    ]
  }, 
  {
    id: 2, category: "Styling", skills: [
      {id: 5, skill: "CSS", logo: CSSLogo},
      {id: 6, skill: "Tailwind", logo: TailwindLogo},
      {id: 7, skill: "Sass", logo: SassLogo},
      {id: 8, skill: "Bootstrap", logo: BootstrapLogo}
    ]
  },
  {
    id: 3, category: "Development", skills: [
      {id: 9, skill: "HTML5", logo: HtmlLogo},
      {id: 10, skill: "Javascript", logo: JSLogo},
      {id: 11, skill: "Typescript", logo: TSLogo},
    ]
  },
  {
    id: 4, category: "JS Frameworks", skills: [
      {id: 12, skill: "React", logo: ReactLogo},
      {id: 13, skill: "Vue", logo: VueLogo},
    ]
  }
]

const About: React.FC<{isInView: boolean}> = ( {isInView} ) => {
  const [animate, setAnimate] = useState(false);

  
  useEffect(() => {
    // Assuming you have a way to know when the "About" section is in view
    if (isInView && !animate) {
      setAnimate(true);
    }
  }, [isInView, animate]);


  return (
    <section 
      id="page-2" 
      className={`about min-h-screen flex flex-col bg-lightgray items-center pt-[50px] gap-5 relative border-b border-solid border-mediumGray ${animate ? 'animate' : ''}`}
    >
      <PageHeading text="About"/>
      <div className="w-[800px] flex flex-col gap-4">
        <div className="w-full flex gap-4 items-center justify-center">
          <img src={MatteLogo} width="150" height="150" alt="Matthias" />
          <AboutInfo />
        </div>

        <div className="flex flex-col gap-10 items-center ">
          <h2 className="font-bold text-[2rem]">Technical Skills</h2>
          <div className="flex gap-x-4 gap-y-4 flex-wrap justify-center">
            {CategoriesArray.map(category => <CategoryList key={category.id} category={category.category} skills={category.skills}/>)}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About