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
  padding-top: 2vh;
  font-size: 1.5em;
  font-family: "Oswald", sans-serif;

  width: 100%;

  @media only screen and (max-width: 767px) {
    padding: 0;
    margin: 0;
    font-size: 4em;
  }

  @media only screen and (max-width: 1000px) and (min-width: 700px) {
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
  }

  .nav-item {
    padding-left: 2vw;
    text-align: center;
    @media (max-width: 767px) {
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
        <NavbarToggler className="" onClick={() => setToggle(!toggle)}>
          <i className="fa fa-navicon" />
        </NavbarToggler>
        <Collapse isOpen={toggle} navbar>
          <div className="navWrapper">
            <Nav navbar>
              <NavbarBrand />
              <NavItem>
                <NavLink
                  href={process.env.BACKEND_URL + "/"}
                  className="nav-link"
                  onClick={() => setToggle(!toggle)}
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={process.env.BACKEND_URL + "/about"}
                  onClick={() => setToggle(!toggle)}
                >
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={process.env.BACKEND_URL + "/contactInfo"}
                  onClick={() => setToggle(!toggle)}
                >
                  Contact
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={process.env.BACKEND_URL + "/revelerProcess"}
                  onClick={() => setToggle(!toggle)}
                >
                  Process
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  href={process.env.BACKEND_URL + "/services"}
                  onClick={() => setToggle(!toggle)}
                >
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
