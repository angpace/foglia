import React, {useState} from 'react'
import SideBar from '../components/SideBar'
import NavBar from '../components/NavBar'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'

const Home = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggle = () => {
        setIsOpen(!isOpen)
    }

  return (
    <>
    <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/>
    <HeroSection/>
    <InfoSection {...homeObjOne}/> 
    <InfoSection {...homeObjTwo}/> 
    <InfoSection {...homeObjThree}/> 
    </>
  )
}

export default Home