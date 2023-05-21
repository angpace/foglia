import React from 'react'
import { SidebarContainer, Icon, CloseIcon, SideBarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute} from './SideBarElements'

const SideBar = () => {
  return (
    <SidebarContainer>
        <Icon>
            <CloseIcon/>
        </Icon>
        <SideBarWrapper>
            <SidebarMenu>
                <SidebarLink to="about">About</SidebarLink>
                <SidebarLink to="discover">Discover</SidebarLink>
                <SidebarLink to="shop">Shop</SidebarLink>
                <SidebarLink to="signup">Sign Up</SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                <SidebarRoute to="/signin">Sign In</SidebarRoute>
            </SideBtnWrap>
        </SideBarWrapper>
    </SidebarContainer>
   
   
  )
}

export default SideBar