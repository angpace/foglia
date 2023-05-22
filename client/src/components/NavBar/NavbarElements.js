import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom'
import { Link as LinkS } from 'react-scroll'

export const Nav = styled.nav`
    background: #f5f5f5;
    opacity: 80%;
    height: 60px;
    /* margin-top: -60px; */
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`

export const NavbarContainer = styled.div`
display: flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%;
padding: 0 24px;
max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
color: #d9b99b;
justify-self: flex-start;
cursor: pointer;
font-size: 2.2rem;
display: flex;
align-items: center;
margin-left: 24px;
/* font-weight: light; */
text-decoration: none;
`
export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor:pointer;
    color: #d9b99b;
}
`
export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and (max-width: 768px){
    display: none;
}
`
export const NavItem = styled.li`
height: 60px;
`
export const NavLinks = styled(LinkS)`
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 110%;
cursor: pointer;

&:active {
    //this it the highlight whne active
    color: #d9b99b;
    border-bottom: 2px solid #d9b99b;
}
`
export const NavBtn = styled.nav`
display: flex;
align-items: center;

@media screen and (max-width: 768px) {
    display: none;
}
`

export const NavBtnLink = styled(LinkR)`
border-radius: 50px;
background: whitesmoke;
white-space: nowrap;
padding: 10px 20px;
color: #d9b99b;
font-size: 16px;
outline: none;
border: none;
cursor: pointer;
transition: all 0.2s ease-in-out;
text-decoration: none;

&:hover {
    transition: all 0.2s ease-in-out;
    text-decoration-color: brown;
    background: #fff;
    color: #d9b99b;
}
`