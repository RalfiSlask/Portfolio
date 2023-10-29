import AnchorText from "./AnchorText";
import WebdevLogos from "../../WebdevLogos";
import AnimatedHeading from "./AnimatedHeading";
import CommandPrompt from "./CommandPrompt";

const Landing = () => {
  return (
    <section id="page-1" className="flex flex-col bg-[#d1d0d0] items-center min-h-screen border-b border-solid border-mediumGray">
      <div className="flex flex-col gap-8 pt-[150px] max-w-[620px]">
        <AnimatedHeading />
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
      <p></p>
        <WebdevLogos />
        <CommandPrompt />
    </section>
  )
}

export default Landing