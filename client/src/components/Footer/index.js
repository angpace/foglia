import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter} from 'react-icons/fa'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper, 
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink, 
    SocialMedia,
    SocialMediaWrap,
    SocialLogo, WebsiteRights,
    SocialIcons, SocialIconLink
} from './FooterElements'

const Footer = () => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }

  return (
    <FooterContainer>
        <FooterWrap>
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Shop</FooterLinkTitle>
                            <FooterLink to="/">Kombucha</FooterLink>
                            <FooterLink to="/">Bakery</FooterLink>
                            <FooterLink to="/">Pooch</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>About</FooterLinkTitle>
                            <FooterLink to="/">The Team</FooterLink>
                            <FooterLink to="/">The Kombucha</FooterLink>
                            <FooterLink to="/">The Crossaint Loaf</FooterLink>
                            {/* <FooterLink to="/">Corporate Orders</FooterLink> */}
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">FAQS</FooterLink>
                            {/* <FooterLink to="/">Careers</FooterLink> */}
                            <FooterLink to="/">Press</FooterLink>
                            {/* <FooterLink to="/">Terms of Service</FooterLink> */}
                    </FooterLinkItems>
                    {/* <FooterLinkItems>
                        <FooterLinkTitle>Socials</FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Tiktok</FooterLink>
                    </FooterLinkItems> */}
                </FooterLinksWrapper>
            </FooterLinksContainer>
            <SocialMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/' onClick={toggleHome}>
                        FOGLIA
                    </SocialLogo>
                    <WebsiteRights>FOGLIA © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href="//www.instagram.com/fogliabrand/" target="_blank" aria-label="Instagram">
                            <FaInstagram/>
                        </SocialIconLink>
                        <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                            <FaYoutube />
                        </SocialIconLink>
                        {/* <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                            <FaTwitter />
                        </SocialIconLink> */}
                    </SocialIcons>
                </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer