import About from './Components/About';
import Contact from './Components/Contact';
import Skills from './Components/Skills';
import Header from './Components/Header';
import Navbar from './Components/Navbar';
import Projects from './Components/Projects';
import SocialLinks from './Components/SocialLInks/SocialLinks';
import Experience from './Components/Experience';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Components/Footer';
import 'antd/dist/reset.css';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'aos/dist/aos.css';
import AOS from 'aos';
import 'animate.css';

function App() {
  AOS.init({ duration : 2000});
  return (
    <div className='bg-[#101E34] overflow-x-hidden' >
      <Navbar></Navbar>
      <Header></Header>
      <About></About>
      <Experience/>
      <Projects/>
      <Skills></Skills>
      <Contact></Contact>
      <Footer/>
      <ToastContainer/>
    </div>
  );
}

export default App;
