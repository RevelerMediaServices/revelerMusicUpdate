import Link from "next/link";

import styled from "styled-components";

const NavbarDiv = styled.div`
  height: 10vh;
`;

function Navbar() {
  return (
    <NavbarDiv>
      <nav className="navbar navbar-expand navbar-dark bg-dark mb-4">
        <div className="container">
          <Link href={process.env.BACKEND_URL + "/"}>
            <a className="navbar-brand">Reveler Media Services</a>
          </Link>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link href={process.env.BACKEND_URL + "/"}>
                  <a className="nav-link">Home</a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href={process.env.BACKEND_URL + "/about"}>
                  <a className="nav-link">About</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </NavbarDiv>
  );
}

export default Navbar;
