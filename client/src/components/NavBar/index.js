import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa'
import { animateScroll as scroll } from 'react-scroll';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks} from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)


    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true)
        } else{
            setScrollNav(false)
        }
    }

    useEffect(() =>{
        window.addEventListener('scroll', changeNav)
    }, [])

    const toggleHome = () => {
        scroll.scrollToTop();
    }
  return (
    <>
        <Nav scrollNav={scrollNav}>
            <NavbarContainer>
                <NavLogo to="/" onClick={toggleHome}>FOGLIA</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about" 
                        smooth={true} duration={500} spy={true} exact='true' offset={-60}
                        >About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="shop"
                        smooth={true} duration={500} spy={true} exact='true' offset={-60}
                        >Shop</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact"
                        smooth={true} duration={500} spy={true} exact='true' offset={-60}
                        >Contact</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="signup"
                        smooth={true} duration={500} spy={true} exact='true' offset={-60}
                        >Sign Up</NavLinks>
                    </NavItem>
                </NavMenu>
                {/* <NavBtn>
                    <NavBtnLink to="/signin">Sign In</NavBtnLink>
                </NavBtn> */}
            </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar