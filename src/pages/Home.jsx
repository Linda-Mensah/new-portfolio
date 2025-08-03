import About from "./About";
import WorkExperience from "./WorkExperience";
import Skills from "./Skills";
import Projects from "./Projects";
import Cta from "../components/Cta";

const Home = () => {
  return (
    <>
      <About />
      <Skills />
      <WorkExperience />
      <Projects />
      <Cta />
    </>
  );
};

export default Home;
