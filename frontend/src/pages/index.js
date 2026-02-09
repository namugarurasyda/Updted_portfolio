import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Technologies from '../components/Technologies';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Skills from '../components/Skills';

const Home = () => {
  return (
    <div id='home'>
      <Hero />
      <Skills />
      <About />
      <Projects />
      <Technologies />
      <Testimonials />
      <Contact />
      
    </div>
  );
};

export default Home;
