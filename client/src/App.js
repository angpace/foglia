import { BrowserRouter as Router } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
import { useState } from 'react';
import About from './pages/about';


function App() {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => {
      setIsOpen(!isOpen)
  }

  return (
  <Router>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/signin" element={<SigninPage/>}></Route>
        <Route path="/about/:about_id" element={<About/>}></Route>
   </Routes>
  </Router>
  );
}

export default App;
