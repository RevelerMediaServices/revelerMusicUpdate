import styled from "styled-components";

import Link from "next/link";

const FooterDiv = styled.div`
  padding: 0;
  margin: 0;

  background-color: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(0.5vw);

  footer {
    background-color: transparent;
    height: 7vh;
    padding-top: 0.5vw;
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
    font-size: 1.5vw;
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
            <div className="row text-center">
              <div className="col-md-6 col-sm-6 col-xs-12">
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
              </div>

              <div className="col-md-6 col-sm-6 col-xs-12">
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
                      <a>Reveler Process</a>
                    </Link>
                  </li>
                  <li className="list-inline-item">
                    <Link href="/services">
                      <a>Services</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </FooterDiv>
  );
}

export default Footer;
