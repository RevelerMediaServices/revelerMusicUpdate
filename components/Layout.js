import RMNavbar from "./RMNavbar";

import Footer from "./Footer";

import styled from "styled-components";
import NextSeo from "next-seo";

import imgBG from "../static/images/landingPage.jpg";
import imgMobileBG from "../static/images/mobileLandingPage.jpg";

import imgRMLogoLayout from "../static/images/RevelerLogoWhiteShadow.png";

const LayoutDiv = styled.div`
  height: 100vh;
  background-image: url(${imgBG});
  background-size: 100% 100%;

  @media screen and (max-width: 767px) {
    background-image: url(${imgMobileBG});
    background-size: 100% 100%;
  }

  .mainViewDiv {
    position: fixed;
    top: 10vh;
    width: 100vw;
    height: 80vh;

    @media only screen and (max-width: 767px) {
      height: 77vh;
    }

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      height: 77vh;
      font-size: 1em;
      overflow: scroll;
    }
  }

  #navbarDiv {
    z-index: 9999;
  }

  #imgRMLogoLayout {
    width: 20vw;
    position: fixed;
    bottom: 8%;
    right: 0;
    z-index: 9999;

    @media only screen and (max-width: 767px) {
      width: 40vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
    }
  }
`;

function Layout(props) {
  return (
    <LayoutDiv>
      <NextSeo
        config={{
          title:
            "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services",
          description:
            "Reveler Music, LLC provides Music Entertainment Services for the Colorado Corridor, Denver, Castle Rock, Colorado Springs, Pueblow and the surrounding areas.  Live Music, Live Sound and Open Mics, Karaoke and DJ"
        }}
      />
      <img
        id="imgRMLogoLayout"
        src={imgRMLogoLayout}
        alt="Reveler Music, LLC Logo"
      />
      <div id="navbarDiv">
        <RMNavbar />
      </div>
      <div className="mainViewDiv">{props.children}</div>
      <Footer />
    </LayoutDiv>
  );
}

export default Layout;
