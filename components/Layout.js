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

  @media screen and (max-width: 700px) {
    background-image: url(${imgMobileBG});
    background-size: 100% 100%;
  }

  #imgRMLogoLayout {
    width: 20vw;
    position: fixed;
    top: 1vh;
    left: 1vw;
    z-index: 9999;
  }
`;

function Layout(props) {
  return (
    <LayoutDiv>
      <NextSeo
        config={{
          title: "Reveler Media Services Next.js/Firebase starter",
          description:
            "Next.js starter template with Styled-Components, Firebase, Next-SEO"
        }}
      />
      <img
        id="imgRMLogoLayout"
        src={imgRMLogoLayout}
        alt="Reveler Music, LLC Logo"
      />
      <RMNavbar />
      <div>{props.children}</div>
      <Footer />
    </LayoutDiv>
  );
}

export default Layout;
