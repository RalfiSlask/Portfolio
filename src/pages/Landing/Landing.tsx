import WebdevLogos from "../../WebdevLogos";
import AnimatedHeading from "./AnimatedHeading";
import CommandPrompt from "./CommandPrompt";
import LandingIntroduction from "./LandingIntroduction";

const Landing = () => {
  return (
    <section id="page-1" className="flex flex-col bg-mainBG items-center min-h-screen border-b border-solid border-mediumGray">
      <div className="flex flex-col gap-8 pt-[150px] max-w-[620px]">
        <AnimatedHeading />
        <LandingIntroduction />
      </div>
      <p></p>
        <WebdevLogos />
        <CommandPrompt />
    </section>
  )
}

export default Landing