import About from './Components/About';
import Contact from './Components/Contact';
import Experience from './Components/Experience/Experience';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Portfolio from './Components/Portfolio/Portfolio';
import SocialLinks from './Components/SocialLInks/SocialLinks';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Portfolio></Portfolio>
      <Experience></Experience>
      <Contact></Contact>
      <SocialLinks></SocialLinks>

    </div>
  );
}

export default App;
