import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Experience from "../components/Experience/Experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Skills from "../components/Skills/Skills";
import Certifications from "../components/Certifications/Certifications";
import Insights from "../components/Insights/Insights";



const Home = () => {
    return (
        <>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Projects />
          <Certifications />
          <Insights/>
          <Contact />
        </>
    );
};

export default Home;