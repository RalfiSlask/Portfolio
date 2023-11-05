import AnimatedHeading from "./AnimatedHeading";
import LandingIntroduction from "./LandingIntroduction";
import CloudContainer from "./CloudContainer";


const Landing = () => {
  return (
    <section id="page-1" className="landing flex flex-col min-h-screen border-b border-solid border-mediumGray">
      <div className="border-b border-solid border-black w-full h-full flex pb-30">
        <div className="flex flex-col gap-4 pt-[180px] pb-48 max-w-[620px] ml-[10vw] h-full ">
          <AnimatedHeading />
          <LandingIntroduction />
        </div>
      </div>
{/*       <div className="landing-lower"></div> */}
    </section>
  )
}

export default Landing