import LinkSharing from "../../assets/images/projects/linksharing_gray.png";
import Kanban from "../../assets/images/projects/kanban_gray.png";
import Audiophile from "../../assets/images/projects/audiophile_gray.png";
import Feedback from "../../assets/images/projects/feedback_gray.png";
import TechButton from "./TechButton";

const Projects = () => {
  return (
    <section className='min-h-screen flex flex-col gap-20 items-center bg-gray-700 pt-[100px]'>
      <div id="page-3">
        <h2 className="text-[3rem]">Recent Work</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 w-[900px]">
        <div className="w-[400px] flex flex-col gap-6">
          <div className="w-[400px] h-[170px] p-1 bg-gray-500 border border-solid border-mediumGray rounded-lg flex justify-center items-center cursor-pointer">
            <img src={LinkSharing} alt="" className="w-full h-full rounded-lg"/>
          </div>
          <div className="flex flex-col gap-3 font-fourth w-[400px]">
            <h2 className="font-bold text-[1.25rem]">Link-Sharing App</h2>
            <p>React project that lets users create own links from relevant platforms and be able to share these. </p>
            <div className="flex gap-2">
              <TechButton text="React"/>
              <TechButton text="Styled Components"/>
            </div>
          </div>
        </div>
        <div className="w-[400px] flex flex-col gap-6">
          <div className="w-[400px] h-[170px] p-1 bg-gray-500 border border-solid border-mediumGray rounded-lg flex justify-center items-center cursor-pointer">
            <img src={LinkSharing} alt="" className="w-full h-full rounded-lg"/>
          </div>
          <div className="flex flex-col gap-3 font-fourth w-[400px]">
            <h2 className="font-bold text-[1.25rem]">Link-Sharing App</h2>
            <p>React project that lets users create own links from relevant platforms and be able to share these. </p>
            <div className="flex gap-2">
              <TechButton text="React"/>
              <TechButton text="Styled Components"/>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-6">
          <div className="w-full h-[170px] p-1 bg-gray-500 border border-solid border-mediumGray rounded-lg flex justify-center items-center cursor-pointer">
            <img src={LinkSharing} alt="" className="w-full h-full rounded-lg"/>
          </div>
          <div className="flex flex-col gap-3 font-fourth w-full">
            <h2 className="font-bold text-[1.25rem]">Link-Sharing App</h2>
            <p>React project that lets users create own links from relevant platforms and be able to share these. </p>
            <div className="flex gap-2">
              <TechButton text="React"/>
              <TechButton text="Styled Components"/>
            </div>
          </div>
        </div>
        <div className="w-full flex gap-6">
          <div className="w-full h-[170px] p-1 bg-gray-500 border border-solid border-mediumGray rounded-lg flex justify-center items-center cursor-pointer">
            <img src={LinkSharing} alt="" className="w-full h-full rounded-lg"/>
          </div>
          <div className="flex flex-col gap-3 font-fourth w-full">
            <h2 className="font-bold text-[1.25rem]">Link-Sharing App</h2>
            <p>React project that lets users create own links from relevant platforms and be able to share these. </p>
            <div className="flex gap-2">
              <TechButton text="React"/>
              <TechButton text="Styled Components"/>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects