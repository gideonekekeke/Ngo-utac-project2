import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  /* background: ${({ scrollNav }) => (scrollNav ? "black" : "transparant")}; */
  background: 
  height: 80px;
  margin-top: -80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  width : 100%

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
    position: sticky;
    top: 0;
  }
`;

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
  color: white;
  margin-left: -150px;
  font-size: 10px;
  color: #000000;
`;

export const NavLogo = styled(LinkR)`
  color: white;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.5rem;
  display: flex;

  align-items: center;
  font-weight: bold;
  text-decoration: none;
`;

// export const MobileIcon = styled.div`
//   color: white;
// `;

export const MobileIcons = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: -10;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: white;
    margin-right: 30px;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLinks = styled.div`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
   color : #000000
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1.3px;
  height: 100%;
  cursor: pointer;



  &.active {
    border-bottom: 3px solid #01bf71;
  }
  &:hover {
    color: #E5D304;
    transition: 0.2s ease-in-out;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtnLink = styled(LinkR)`
  border-radius: 50px;
  background: red;
  white-space: nowrap;
  padding: 10px 22px;
  /* color: #010606; */
  color: #000000;
  font-weight: 600;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  /* display: none; */
  :hover {
    transition: background-color 0.2s ease-in-out;
    background-color: blue;
  }

  @media screen and(max-width: 768px) {
    /* display: none; */
    display: none;
    color: pink;
    background: black;
  }

  /* &: hover {
    transition: all 0.2s ease-in-out;
    background-color: white;
    color: #010606;
  } */
`;
