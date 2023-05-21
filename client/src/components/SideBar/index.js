import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SideBarElements'

const SideBar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
            <CloseIcon/>
        </Icon>
        <SideBarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
                <SidebarLink to="discover" onClick={toggle}>Discover</SidebarLink>
                <SidebarLink to="shop" onClick={toggle}>Shop</SidebarLink>
                <SidebarLink to="signup" onClick={toggle}>Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SidebarContainer>
   
   
  )
}

export default SideBar