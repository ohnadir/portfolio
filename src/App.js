import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Works from './Components/Works';
import SocialLinks from './Components/SocialLInks/SocialLinks';
import Experience from './Components/Experience';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Experience/>
      <Works></Works>
      <Skills></Skills>
      <Contact></Contact>
      <SocialLinks></SocialLinks>
      <Footer/>
    </div>
  );
}

export default App;
