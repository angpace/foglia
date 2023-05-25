import React from 'react'
import HeroSection from '../components/HeroSection'
import InfoSection from '../components/InfoSection'
import { homeObjOne, homeObjThree, homeObjTwo } from '../components/InfoSection/Data'
import Services from '../components/Services'

const Home = () => {
    // const [isOpen, setIsOpen] = useState(false)

    // const toggle = () => {
    //     setIsOpen(!isOpen)
    // }

  return (
    <>
    {/* <SideBar isOpen={isOpen} toggle={toggle}/>
    <NavBar toggle={toggle}/> */}
    <HeroSection/>
    <InfoSection {...homeObjOne}/> 
    <Services/>
    <InfoSection {...homeObjTwo}/> 
    <InfoSection {...homeObjThree}/> 
    </>
  )
}

export default Home