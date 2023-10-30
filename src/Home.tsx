import Header from "./components/header/Header"
import Landing from "./pages/Landing/Landing"
import CustomCursor from "./components/CustomCursor"
import Contact from "./pages/Contact/Contact"
import NavigationContainer from "./components/NavigationContainer"
import Projects from "./pages/Projects/Projects"
import About from "./pages/About/About"
import FullPageScroll from "./components/FullPageScroll";
import SocialNavbar from "./SocialNavbar"
import { useState, useEffect } from "react";
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles";

const Home = () => {
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const sections = ["#page-1", "#page-2", "#page-3", "#page-4"];

  useEffect(() => {
    console.log("index: ", currentSectionIndex)
  }, [currentSectionIndex])

  return (
    <main>
      <Header />
      <CustomCursor />
      <Particles 
    id="tsparticles"
    options={{ 
        background: { 
            color: "rgb(10,10,25)", 
        }, 
        fpsLimit: 60,
        particles: { 
            shape: { 
                type: "char", 
                options: {
                    char: {
                        value: ["{}", "<>", "</>"],
                        font: "Verdana"
                    }
                }
            }, 
            size: { 
                random: { 
                    enable: true, 
                    minimumValue: 16, // Adjust based on desired font size 
                }, 
                value: 32, // Adjust based on desired font size 
            }, 
            color: { 
                value: "#f1f1f1", 
            },
            number: {
                density: {
                    enable: true,
                    area: 800,
                },
                limit: 0,
                value: 50,  // Adjust based on the number of characters you want
            },
            move: {
                speed: 2,  // Adjust for particle movement speed
            },
            opacity: { 
                value: 0.8,  // Adjust opacity if needed
            }, 
        }, 
    }} 
    />
      <NavigationContainer 
        activeSection={sections[currentSectionIndex]}
        onNavClick={index => setCurrentSectionIndex(index)}
      />
      <SocialNavbar />
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