import { Parallax } from 'react-scroll-parallax';
import './App.css';
import About from './components/About';
import { ParallaxProvider, ParallaxBanner } from 'react-scroll-parallax'


function App() {
  return (
    <ParallaxProvider>
    <div className="parallax-container">
      <div className="parallax-layer">
        <Parallax y={[-20, 20]} tagOuter="div">
          Foglia
        </Parallax>
      </div>
      <div className="parallax-layer">
        <Parallax y={[-30, 30]} tagOuter="div">
          <About/>
        </Parallax>
      </div>
      <div className="parallax-layer">
        <Parallax y={[-40, 40]} tagOuter="div">
          Layer 3
        </Parallax>
      </div>
    </div>
  </ParallaxProvider>

  );
}

export default App;
