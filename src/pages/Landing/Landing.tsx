import AnchorText from "./AnchorText";
import WebdevLogos from "../../WebdevLogos";


const Landing = () => {
  return (
    <section id="page-1" className="flex flex-col bg-[#d1d0d0] items-center min-h-screen gap-10">
      <div className="flex flex-col gap-8 pt-[150px] max-w-[620px]">
{/*         {<img src={image1} alt="background" className="w-full min-h-screen object-cover"/>} */}
        <div>
          <p className="text-[1.75rem] text-black font-fourth">Hi, I'm</p>
          <h1 className="text-[3rem] text-mediumGray font-bold">Matthias Nilsson</h1>
        </div>
        <div className="flex flex-col gap-4">
          <p className="text-[1rem] text-mediumGray leading-9 font-medium font-fourth tracking-wide">
              Welcome to my digital canvas. While I'm still early in my career, my <AnchorText text="Projects"/> reflect a strong passion for frontend development and an eagerness to learn. Each project showcases my evolving skillset and the dedication I bring to the table.
          </p>
          <p className="text-[1rem] text-mediumGray leading-9 font-normal font-fourth">
              Beyond code, I find solace in poker, challenge in padel, and discipline in CrossFit. Want to know more? Dive deeper into my <AnchorText text="About"/> section.
          </p>
          <p className="text-[1rem] text-mediumGray leading-9 font-normal font-fourth ">
              I'm always open to collaboration, feedback, or just a friendly chat. If my work resonates with you, feel free to <AnchorText text="Contact Me"/>. The digital realm is vast, and I'm excited to explore it further with like-minded individuals.
          </p>
        </div>
      </div>
      <WebdevLogos />
    </section>
  )
}

export default Landing