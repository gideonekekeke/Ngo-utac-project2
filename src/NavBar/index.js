import React, { useState, useEffect } from "react";
import { FaBars, FaMagento } from "react-icons/fa";
import logos from "../NavBar/images/logo1.png";
import { Button } from "antd";
import "./nav.css";

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcons,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBar.element";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { animateScroll as scroll } from "react-scroll";

const NavBar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(true);

  const changeNav = () => {
    if (window.scrolY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav
        style={{ backgroundColor: "black ", borderBottom: "" }}
        scrollNav={scrollNav}
      >
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            <img
              style={{ height: "70px", marginLeft: "100px", COLOR: "white" }}
              src={logos}
            />
            <div style={{ color: "white", fontWeight: "bold" }}>UTAC</div>
          </NavLogo>
          <MobileIcons onClick={toggle}>
            <FaBars />
          </MobileIcons>
          <NavMenu>
            <NavItem>
              <Link to="/" style={{ textDecoration: "none" }}>
                <NavLinks>Home</NavLinks>
              </Link>
            </NavItem>

            <NavItem>
              <Link to="/about" style={{ textDecoration: "none" }}>
                <NavLinks> About</NavLinks>
              </Link>
            </NavItem>
            <Link to="/event" style={{ textDecoration: "none" }}>
              <NavItem>
                <NavLinks>Events</NavLinks>
              </NavItem>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <NavItem>
                <NavLinks>Contact </NavLinks>
              </NavItem>
            </Link>
            <div style={{ marginLeft: "200px" }}>
              <NavItem>
                {/* <NavLinks className="down2">
                  Join Utac{" "}
                  <div className="downing2">
                    <a>Apply as a Volunteer</a>
                    <a>Apply as partner</a>
                  </div>
                </NavLinks> */}
              </NavItem>
            </div>
            <NavItem>
              <NavLinks>
                {" "}
                <Button
                  style={{
                    height: "35px",
                    width: "120px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "#E5D304",
                    fontWeight: "bold",
                    outline: "none",
                    color: "black",
                    fontFamily: "poppins",
                    fontWeight: "bold",
                  }}
                >
                  DONATE
                </Button>
              </NavLinks>
            </NavItem>
          </NavMenu>

          <NavBtn></NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default NavBar;
