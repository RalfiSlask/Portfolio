import Header from "./components/header/Header";
import Landing from "./pages/Landing/Landing";
import CustomCursor from "./components/CustomCursor";
import Contact from "./pages/Contact/Contact";
import NavigationContainer from "./components/NavigationContainer";
import Projects from "./pages/Projects/Projects";
import About from "./pages/About/About";
import FullPageScroll from "./components/FullPageScroll";
import SocialNavbar from "./SocialNavbar";
import { useState, useEffect, useCallback } from "react";
import FirstScreen from "./FirstScreen";
import { ItemTypes } from "./utils/types";
import LeftSidebar from "./LeftSidebar";

// Particles

import Particles from "react-tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim"; 
import { particlesCode } from "./utils/particlesCode";
import { particlesRain } from "./utils/particlesRain";

// React-DnD

import { useDrop } from 'react-dnd';
import CustomDragLayer from "./CustomDragLayer";
import RightSidebar from "./RightSidebar";

const Home = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [showFirstScreen, setShowFirstScreen] = useState(true);
  const [particlesOptions, setParticlesOptions] = useState(particlesRain);
  const sections = ["#page-1", "#page-2", "#page-3", "#page-4"];
  
  const handleFadeComplete = () => {
    setShowFirstScreen(true);
  };

  useEffect(() => {
  }, [currentSectionIndex])

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);

const [{ isOver }, drop] = useDrop({
  accept: ItemTypes.BRUSH,
  drop: () => {
    console.log("hej")
    setParticlesOptions(particlesRain);
  },
  collect: monitor => ({
    isOver: !!monitor.isOver(),
  }),
});

  return (
        <main>
            {/* <CustomDragLayer /> */}
            <div className="particles-container fixed w-[100vw] h-[100vh] z-[-1]" ref={drop}>
              <Particles
                  id="tsparticles"
                  init={particlesInit}
                  loaded={particlesLoaded}
                  options={particlesOptions}
              />
            </div>
        {showFirstScreen && <FirstScreen />}
        <Header />
       {/*  <CustomCursor />  */}
        <LeftSidebar />
        <RightSidebar 
            activeSection={sections[currentSectionIndex]}
            onNavClick={index => setCurrentSectionIndex(index)}  
        />
        <FullPageScroll 
            sections={[
                <Landing />,
                <About />,
                <Projects />,
                <Contact />
                ]}
            currentSectionIndex={currentSectionIndex}
            onSectionChange={setCurrentSectionIndex}
            />
        </main>
  )
}

export default Home