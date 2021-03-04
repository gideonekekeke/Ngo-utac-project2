import React from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
// import TransitionsModal from "../ModalComponents/Modal";
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SideBtnWrap,
  SidebarRoute,
  SidebarLink,
  SidebarWrapper,
  SidebarMenu,
} from "./SideBarElement";

const SideBar = ({ isOpen, toggle }) => {
  return (
    <>
      <SidebarContainer isOpen={isOpen} onClick={toggle}>
        <Icon onClick={toggle}>
          <CloseIcon />
        </Icon>
        <SidebarWrapper>
          <SidebarMenu>
            <Link to="/" style={{ textDecoration: "none" }}>
              <SidebarLink onClick={toggle}>Home</SidebarLink>
            </Link>
            <Link to="/about" style={{ textDecoration: "none" }}>
              <SidebarLink onClick={toggle}>ABOUT</SidebarLink>
            </Link>
            <Link to="/event" style={{ textDecoration: "none" }}>
              <SidebarLink onClick={toggle}>EVENT</SidebarLink>
            </Link>
            <Link to="/contact" style={{ textDecoration: "none" }}>
              <SidebarLink onClick={toggle}>CONTACT</SidebarLink>
            </Link>
            <Link>
              <Button
                style={{
                  fontSize: "20px",
                  fontWeight: "bold",
                  height: "50px",
                  textTransform: "uppercase",
                  width: "150px",

                  backgroundColor: "#FFDE00",
                  color: "Black",
                  outline: "none",
                  border: "1px solid silver",
                  cursor: "pointer",
                }}
              >
                DONATE
              </Button>
            </Link>
          </SidebarMenu>
          <SideBtnWrap></SideBtnWrap>
        </SidebarWrapper>
      </SidebarContainer>
    </>
  );
};
export default SideBar;
