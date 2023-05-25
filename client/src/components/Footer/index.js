import React from 'react'
import { 
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper, 
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink
} from './FooterElements'

const Footer = () => {
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
                            <FooterLink to="/">Chef Angela</FooterLink>
                            <FooterLink to="/">The Kombucha</FooterLink>
                            <FooterLink to="/">The Crossaint Loaf</FooterLink>
                            <FooterLink to="/">Corporate Orders</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/">FAQS</FooterLink>
                            <FooterLink to="/">Careers</FooterLink>
                            <FooterLink to="/">Press</FooterLink>
                            <FooterLink to="/">Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>Socials</FooterLinkTitle>
                            <FooterLink to="/">Instagram</FooterLink>
                            <FooterLink to="/">Facebook</FooterLink>
                            <FooterLink to="/">Youtube</FooterLink>
                            <FooterLink to="/">Tiktok</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer