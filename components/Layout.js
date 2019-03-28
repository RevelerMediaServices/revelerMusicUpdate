import { Link } from 'next/link'

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

  min-height: 30vw;

  @media screen and (max-width: 767px) {
    background-image: url(${imgMobileBG});
    background-size: 100% 100%;
  }

  .mainViewDiv {
    position: fixed;
    top: 10vh;
    width: 100vw;
    height: 80vh;
      overflow-y: scroll;
      overflow-x: hidden;

    @media only screen and (max-width: 767px) {
      height: 77vh;
    }

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      font-size: 1em;
    }
  }

  #navbarDiv {
    z-index: 9999;
  }

  #imgRMLogoLayout {
    width: 20vw;
    position: fixed;
    right: 0;
    z-index: 9999;

    @media only screen and (max-width: 767px) {
      position: fixed;
      bottom: 8%;
      right: 0;
      z-index: 9999;
      width: 40vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
    width: 20vw;
    position: fixed;
    right: 0;
    z-index: 9999;
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
            "Reveler Music, LLC provides Music Entertainment Services for the Colorado Corridor, Denver, Castle Rock, Colorado Springs, Pueblow and the surrounding areas.  Live Music, Live Sound and Open Mics, Karaoke and DJ",
          canonical: "https://revelermusic.com",
          openGraph: {
            type: "website",
            url: "https://revelermusic.com/",
            title: "Reveler Music, LLC - Contact Page",
            description:
              "Contact Reveler Music, LLC for music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
            site_name: "Revler Music, LLC"
          },
          twitter: {
            handle: "@jwgravesco"
          }
        }}
      />
      
      <a href={"/"} >
       <img
        id="imgRMLogoLayout"
        src={imgRMLogoLayout}
        alt="Reveler Music, LLC Logo"
      />
      </a>
      <div id="navbarDiv">
        <RMNavbar />
      </div>
      <div className="mainViewDiv">{props.children}</div>
      <Footer />
    </LayoutDiv>
  );
}

export default Layout;
