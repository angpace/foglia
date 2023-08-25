import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
// import NavBar from './components/NavBar';
// import SideBar from './components/SideBar';
import Footer from './components/Footer'
import About from './pages/About';
import Shop from './pages/Shop';




function App() {
  // const [isOpen, setIsOpen] = useState(false)

  // const toggle = () => {
  //     setIsOpen(!isOpen)
  // }

  return (
  <Router>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SigninPage/>}></Route>
        {/* <Route path="/about" element={<About/>}></Route> */}
        <Route path="/about/:about_id" element={<About/>}></Route>
        <Route path="/shop/:shop_id" element={<Shop/>}></Route>
   </Routes>
   <Footer/>
  </Router>
  );
}

export default App;
