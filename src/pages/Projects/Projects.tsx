import LinkSharing from "../../assets/images/projects/linksharing_gray.png";
import Kanban from "../../assets/images/projects/kanban_gray.png";
import Audiophile from "../../assets/images/projects/audiophile_gray.png";
import Feedback from "../../assets/images/projects/feedback_gray.png";
import TechButton from "./TechButton";
import PageHeading from "../../components/headings/PageHeading";
import ProjectHeading from "./ProjectHeading";

const Projects = () => {
  return (
    <section className='projects min-h-screen flex flex-col gap-20 items-center bg-lightgray pt-[100px] border-b border-solid border-mediumGray'>
      <div id="page-3">
        <PageHeading text="Recent Works"/>
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-[900px]">
        <div className="w-[400px] flex flex-col gap-6 text-mediumGray">
          <div className="w-[400px] h-[170px] p-1border border-solid border-mediumGray rounded-lg flex justify-center items-center cursor-pointer">
            <img src={LinkSharing} alt="Project that lets user share links" className="w-full h-full rounded-lg"/>
          </div>
          <div className="flex flex-col gap-3 font-fourth w-[400px]">
            <ProjectHeading text="Link Sharing App"/>
            <p>React project that lets users create own links from relevant platforms and be able to share these. </p>
            <div className="flex gap-2">
              <TechButton text="React"/>
              <TechButton text="Styled Components"/>
            </div>
          </div>
        </div>
        <div className="w-[400px] flex flex-col gap-6 text-mediumGray">
          <div className="w-[400px] h-[170px] p-1 border border-solid border-mediumGray rounded-lg flex justify-center items-center cursor-pointer">
            <img src={Kanban} alt="Project that is a Kanban app" className="w-full h-full rounded-lg"/>
          </div>
          <div className="flex flex-col gap-3 font-fourth w-[400px]">
            <ProjectHeading text="Kanban"/>
            <p>React project that lets users create own links from relevant platforms and be able to share these. </p>
            <div className="flex gap-2">
              <TechButton text="React"/>
              <TechButton text="Tailwind"/>
            </div>
          </div>
        </div>
        <div className="w-[400px] flex flex-col gap-6 text-mediumGray">
          <div className="w-full h-[170px] p-1  border border-solid border-mediumGray rounded-lg flex justify-center items-center cursor-pointer">
            <img src={Audiophile} alt="Project that is a webshop audio site" className="w-full h-full rounded-lg"/>
          </div>
          <div className="flex flex-col gap-3 font-fourth w-full">
            <ProjectHeading text="Audiophile E-commerce"/>
            <p className="text-mediumGray">React project that lets users create own links from relevant platforms and be able to share these. </p>
            <div className="flex gap-2">
              <TechButton text="React"/>
              <TechButton text="Tailwind"/>
            </div>
          </div>
        </div>
        <div className="w-[400px] flex flex-col gap-6 text-mediumGray">
          <div className="w-full h-[170px] p-1 border border-solid border-mediumGray rounded-lg flex justify-center items-center cursor-pointer">
            <img src={Feedback} alt="Project that focuses on user feedback" className="w-full h-full rounded-lg"/>
          </div>
          <div className="flex flex-col gap-3 font-fourth w-full">
            <ProjectHeading text="Product Feedback App"/>
            <p>React project that lets users create own links from relevant platforms and be able to share these. </p>
            <div className="flex gap-2">
              <TechButton text="React"/>
              <TechButton text="Tailwind"/>
              <TechButton text="Typescript"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects