import AnimatedHeading from "./AnimatedHeading";
import LandingIntroduction from "./LandingIntroduction";

const Landing = () => {
  return (
    <section id="page-1" className="flex flex-col min-h-screen border-b border-solid border-mediumGray">
      <div className="flex flex-col gap-4 pt-[180px] pb-48 max-w-[620px] ml-[10vw] h-full">
        <AnimatedHeading />
        <LandingIntroduction />
      </div>
      <div className="flex-1 border-t border-solid border-secB bg-[#807f7f] bg-opacity-25"></div>
    </section>
  )
}

export default Landing