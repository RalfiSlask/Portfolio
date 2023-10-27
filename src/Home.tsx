import Header from "./components/header/Header"
import Landing from "./pages/Landing/Landing"
import CustomCursor from "./CustomCursor"
import Contact from "./pages/Contact/Contact"
import NavigationContainer from "./NavigationContainer"
import Projects from "./pages/Projects/Projects"
import About from "./pages/About/About"

const Home = () => {
  return (
    <main>
      <Header />
      <Landing />
      <About />
      <Projects />
      <Contact />
      <CustomCursor />
      <NavigationContainer />
    </main>
  )
}

export default Home