import React from "react";
import down from "../../../NavBar/images/logo1.png";

import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import { Link } from "react-router-dom";

import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksItems,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialMediaLogo,
  WebsiteRight,
  SocialIcon,
  SocialIconLink,
} from "./FooterElement";

import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinksItems>
              <Link style={{ textDecoration: "none", color: "white" }} to="/">
                <FooterLinkTitle> Home </FooterLinkTitle>
              </Link>
              <FooterLink>How it work</FooterLink>
              <FooterLink>Testimonial</FooterLink>
              <FooterLink>Career</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/about"
              >
                <FooterLinkTitle> About us </FooterLinkTitle>
              </Link>
              <FooterLink>How it work</FooterLink>
              <FooterLink>Testimonial</FooterLink>
              <FooterLink>Career</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinksItems>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/event"
              >
                <FooterLinkTitle> Event </FooterLinkTitle>
              </Link>
              <FooterLink>How it work</FooterLink>
              <FooterLink>Testimonial</FooterLink>
              <FooterLink>Career</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterLinksItems>
            <FooterLinksItems>
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to="/contact"
              >
                <FooterLinkTitle> Contact us </FooterLinkTitle>
              </Link>
              <FooterLink>How it work</FooterLink>
              <FooterLink>Testimonial</FooterLink>
              <FooterLink>Career</FooterLink>
              <FooterLink>Investors</FooterLink>
              <FooterLink>Terms of Service</FooterLink>
            </FooterLinksItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrap>
            <SocialMediaLogo
              style={{ textDecoration: "none" }}
              onClick={toggleHome}
            >
              <img style={{ height: "80px", marginLeft: "px" }} src={down} />
              UTAC
            </SocialMediaLogo>
            <WebsiteRight
              href="www.brighterdayscodelab.com.ng"
              target="new page"
            >
              Developed by CodeLab 🚀 | © {new Date().getFullYear()} All rights
              reserved{" "}
            </WebsiteRight>
            <SocialIcon>
              <SocialIconLink
              // href="https://www.facebook.com/groups/brighterdayscodelab"
              // target="_blank"
              // aria-label="Facebook"
              >
                <FacebookIcon />
              </SocialIconLink>

              <SocialIconLink
              // href="https://www.youtube.com/channel/UCjHVNjp4cfxBfKRbbtUUYAg"
              // target="_blank"
              // aria-label="Youtube"
              >
                <YouTubeIcon />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <TwitterIcon />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <LinkedInIcon />
              </SocialIconLink>

              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <InstagramIcon />
              </SocialIconLink>
            </SocialIcon>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
