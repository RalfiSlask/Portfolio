import AnimatedHeading from "./AnimatedHeading";
import LandingIntroduction from "./LandingIntroduction";

const Landing = () => {
  return (
    <section id="page-1" className="flex flex-col bg-mainBG min-h-screen border-b border-solid border-mediumGray">
      <div className="flex flex-col gap-4 pt-[300px] max-w-[620px] ml-[10vw]">
        <AnimatedHeading />
        <LandingIntroduction />
      </div>
    </section>
  )
}

export default Landing