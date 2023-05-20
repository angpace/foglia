import { Parallax } from 'react-scroll-parallax';
import './App.css';
import About from './components/About';
import { ParallaxProvider} from 'react-scroll-parallax'
import Landing from './components/Landing';
import { useRef } from 'react';


function App() {



  return (
    <ParallaxProvider>
      <nav id="navbar-example2" class="navbar fixed-bottom bg-light">
        <div className='container-fluid'>
    <a class="navbar-brand" href="#landing">Foglia</a>
    <ul class="nav nav-pills">
      <li class="nav-item">
        <a class="nav-link" href="#about">About</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#contact">Contact</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#shop">Shop</a>
      </li>
    </ul>
    </div>
  </nav>
  <div className='top-banner-text'><span className='top-banner'></span></div>
    <div className="parallax-container">
      <div className="parallax-layer"  >
        <Parallax y={[-20, 20]} tagOuter="div" id="landing">
          <Landing/>
        </Parallax>
      </div>
      <div className="parallax-layer">
        <Parallax y={[-30, 30]} tagOuter="div" id="about">
          <About/>
        </Parallax>
      </div>
      <div className="parallax-layer" id="contact">
        <Parallax y={[-40, 40]} tagOuter="div">
          Layer 3
        </Parallax>
      </div>
    </div>
  </ParallaxProvider>
  );
}

export default App;
