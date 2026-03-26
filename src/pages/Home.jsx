import Hero from '../components/Hero';
import Ticker from '../components/Ticker';
import About from '../components/About';
import Tools from '../components/Tools';
import Experience from '../components/Experience';
import Education from '../components/Education';
import Projects from '../components/Projects';
import Resume from '../components/Resume';

const Home = () => {
  return (
    <>
      <Hero />
      <Ticker />
      <About />
      <Tools />
      <Experience />
      <Education />
      <Projects />
      {/* <Resume /> */}
    </>
  );
};

export default Home;
