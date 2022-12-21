import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import SocialLinks from './Components/SocialLInks/SocialLinks';
import Experience from './Components/Experience'

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Experience/>
      <Portfolio></Portfolio>
      <Skills></Skills>
      <Contact></Contact>
      <SocialLinks></SocialLinks>

    </div>
  );
}

export default App;
