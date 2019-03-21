import styled from "styled-components";

import Link from "next/link";

import { Row, Col } from "reactstrap";

const FooterDiv = styled.div`
  font-size: 1.3em;
  background: rgba(0, 0, 0, 0.8);
  padding: 1vw;

  footer {
    height: 10vh;
    padding-top: 0.5vw;

    @media only screen and (max-width: 767px) {
      height: 20vh;
      font-size: 0.8em;
    }

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      height: 20vh;
      font-size: 1em;
    }
  }

  footer .menu li a {
    color: white;
    padding-left: 0.5vw;
    padding-right: 0.5vw;
    text-decoration: none;
  }

  footer .menu li a:hover {
    color: blue;
  }

  .fa.fa-facebook,
  .fa.fa-youtube-play,
  .fa.fa-instagram {
    color: #b1aca1;
    font-size: 1.5em;
    padding-left: 1vw;
    padding-right: 1vw;
  }

  .fa.fa-facebook:hover,
  .fa.fa-youtube-play:hover,
  .fa.fa-instagram:hover {
    color: #6794c2;
  }
`;

function Footer() {
  return (
    <FooterDiv>
      <div className="footerDiv">
        <footer>
          <div className="container">
            <Row className="text-center">
              <Col xl={6} className="">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <Link href="https://www.facebook.com/revelermusicllc">
                      <a target="_blank">
                        <i className="fa fa-facebook fa-2x" />
                      </a>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link href="https://www.facebook.com/revelermusicllc">
                      <a target="_blank">
                        <i className="fa fa-youtube-play fa-2x" />
                      </a>
                    </Link>
                  </li>

                  <li className="list-inline-item">
                    <Link href="https://www.instagram.com/revelermusicllc/">
                      <a target="_blank">
                        <i className="fa fa-instagram fa-2x " />
                      </a>
                    </Link>
                  </li>
                </ul>
              </Col>

              <Col xl={6} className="">
                <ul className="menu list-inline">
                  <li className="list-inline-item">
                    <Link href="/">
                      <a>Home</a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/about">
                      <a>About</a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/contactInfo">
                      <a>Contact</a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/revelerProcess">
                      <a>Process</a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                </ul>
              </Col>
            </Row>
          </div>
        </footer>
      </div>
    </FooterDiv>
  );
}

export default Footer;
