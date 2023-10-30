import AnchorText from "./AnchorText";

const LandingIntroduction = () => {
  return (
    <div className="flex flex-col gap-4 text-textColor">
      <p className="text-[1rem] text-mediumGray leading-9 font-medium font-fourth tracking-wide">Welcome to my digital canvas, highlighting my evolving frontend development <AnchorText text="Projects"/>. 
        Dive into my <AnchorText text="About"/>  section to uncover my passions from poker to CrossFit. Eager to collaborate or share feedback? Reach out via <AnchorText text="Contact Me"/>. Let's navigate the digital realm together!
      </p>
    </div>
  )
}

export default LandingIntroduction