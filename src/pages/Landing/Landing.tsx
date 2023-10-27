import image from "./assets/bg1.jpg";
import image1 from "./assets/looking.jpg";
import AnchorText from "../../AnchorText";


const Landing = () => {
  return (
    <section id="page-1" className="flex flex-col bg-gray-800 items-center min-h-screen">
      <div className="flex flex-col gap-14 pt-[200px] max-w-[620px]">
{/*         {<img src={image1} alt="background" className="w-full min-h-screen object-cover"/>} */}
        <div>
          <p className="text-[1.75rem] text-greenColor">Hi, I'm</p>
          <h1 className="text-[3rem] text-[white] font-bold">Matthias Nilsson</h1>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[1rem] text-[lightgray] leading-9 font-normal font-secondary tracking-wide">
              Welcome to my digital canvas. While I'm still early in my career, my <AnchorText text="Projects"/> reflect a strong passion for frontend development and an eagerness to learn. Each project showcases my evolving skillset and the dedication I bring to the table.
          </p>
          <p className="text-[1rem] text-[lightgray] leading-9 font-normal font-secondary">
              Beyond code, I find solace in poker, challenge in padel, and discipline in CrossFit. Want to know more? Dive deeper into my <AnchorText text="About"/> section.
          </p>
          <p className="text-[1rem] text-[lightgray] leading-9 font-normal font-secondary">
              I'm always open to collaboration, feedback, or just a friendly chat. If my work resonates with you, feel free to <AnchorText text="Contact Me"/>. The digital realm is vast, and I'm excited to explore it further with like-minded individuals.
          </p>
        </div>
      </div>

    </section>
  )
}

export default Landing