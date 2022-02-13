import React from "react";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLink,
  FooterLinkTitle,
  EndOfFooter,
  EndOfFooterWrap,
  SiteMapLink,
  Logo,
} from "./styles/Footer.styled";


import FooterLogo from "./assets/logo.png";
const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Fakesite</FooterLinkTitle>
              <FooterLink to="/">About Us</FooterLink>
              <FooterLink to="/">Press</FooterLink>
              <FooterLink to="/">Policies</FooterLink>
              <FooterLink to="/">Help</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Account</FooterLinkTitle>
              <FooterLink to="/">Edit Profile</FooterLink>
              <FooterLink to="/">Friends</FooterLink>
              <FooterLink to="/">Social</FooterLink>
              <FooterLink to="/">Delete Profile</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
      <hr style={{ backgroundColor: "#88939e" }} />
      <EndOfFooter>
        <EndOfFooterWrap>
          <Logo src={FooterLogo} />
          <SiteMapLink to="/">Terms</SiteMapLink>
          <SiteMapLink to="/">Privacy</SiteMapLink>
          <SiteMapLink to="/">Site Map</SiteMapLink>
        </EndOfFooterWrap>
      </EndOfFooter>
    </FooterContainer>
  );
};

export default Footer;
