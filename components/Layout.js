import RMNavbar from "./RMNavbar";

import styled from "styled-components";
import NextSeo from "next-seo";

import imgBG from "../static/images/landingPage.jpg";
import imgMobileBG from "../static/images/mobileLandingPage.jpg";

const LayoutDiv = styled.div`
  height: 100vh;
  background-image: url(${imgBG});
  background-size: 100% 100%;

  @media screen and (max-width: 700px) {
    background-image: url(${imgMobileBG});
    background-size: 100% 100%;
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
      <div>
        <RMNavbar />
        <div>{props.children}</div>
      </div>
    </LayoutDiv>
  );
}

export default Layout;
