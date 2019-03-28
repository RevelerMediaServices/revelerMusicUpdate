import { useState } from "react";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

import styled from "styled-components";

const RMNavbarDiv = styled.div`
  height: 10vh;
  padding: 0;
  margin: 0;
  background: transparent;
  color: white;
  font-size: 1.5em;
  font-family: "Oswald", sans-serif;
  font-variant: small-caps;

  position: fixed;

  width: 100vw;
  max-width: 100%;

  z-index: 9999;

  @media only screen and (max-width: 767px) {
    padding: 0;
    margin: 0;
    font-size: 3em;
  }

  @media only screen and (max-width: 1200px) and (min-width: 700px) {
    padding: 0;
    margin: 0;
  }

  .fa.fa-navicon {
    color: white;
    font-size: 1.75em;
  }

  a {
    color: white;
  }

  .collapse {
    width: 100%;

    @media only screen and (max-width: 767px) {
      padding: 0;
      margin: 0;

      height: 78vh;
      max-height: 78vh;
    }

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      padding: 0;
      margin: 0;
    }
  }

  .nav-item {
    text-align: center;

    @media only screen and (max-width: 767px) {
      z-index: 9999;
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      margin: 0;
      padding: 0;
    }

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      z-index: 9999;
      background: rgba(0, 0, 0, 0.8);
      width: 100%;
      margin: 0;
      padding: 0;
    }
  }
`;

function RMNavbar() {
  const [toggle, setToggle] = useState(false);
  return (
    <RMNavbarDiv>
      <Navbar expand="md" sticky="top" className="justify-content-center">
        <NavbarToggler onClick={() => setToggle(!toggle)} className="">
          <i className="fa fa-navicon" />
        </NavbarToggler>
        <Collapse isOpen={toggle} navbar>
          <div className="navWrapper">
            <Nav navbar>
              <NavbarBrand />
              <NavItem>
                <NavLink
                  href={"/"}
                  className="nav-link"
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/about"}>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/contactInfo"}>
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/revelerProcess"}>
                  Process
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href={"/services"}>
                  Services
                </NavLink>
              </NavItem>
            </Nav>
          </div>
        </Collapse>
      </Navbar>
    </RMNavbarDiv>
  );
}

export default RMNavbar;
