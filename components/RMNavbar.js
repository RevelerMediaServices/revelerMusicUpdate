import { useState } from "react";
import Link from "next/link";

import {
  Navbar,
  Collapse,
  NavbarToggler,
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

  a {
    color: white;
  }
`;

function RMNavbar() {
  const [toggle, setToggle] = useState("");

  return (
    <RMNavbarDiv>
      <Navbar className="justify-content-center">
        <Nav>
          <NavItem>
            <NavLink href={process.env.BACKEND_URL + "/"} className="nav-link">
              Home
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={process.env.BACKEND_URL + "/about"}>About</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={process.env.BACKEND_URL + "/contactInfo"}>
              Contact
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href={process.env.BACKEND_URL + "/services"}>
              Services
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </RMNavbarDiv>
  );
}

export default RMNavbar;
