import Header from "./components/header/Header"
import Landing from "./pages/Landing/Landing"
import CustomCursor from "./CustomCursor"
import Contact from "./pages/Contact/Contact"
import NavigationContainer from "./NavigationContainer"
import Projects from "./pages/Projects/Projects"
import About from "./pages/About/About"
import FullPageScroll from "./FullPageScroll"
import { useState, useEffect } from "react";

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
      <NavigationContainer 
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