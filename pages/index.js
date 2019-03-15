import Layout from "../components/Layout";

import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import NextSeo from "next-seo";

import imgInstagramLogo from "../static/images/instagramLogo.png";
import imgRMWhiteLogo from "../static/images/RevelerLogoWhiteShadow.png";
import imgCDLogo from "../static/images/421CDLogo.png";
import imgJHLogo from "../static/images/J&Heather.png";

const IndexDiv = styled.div`
  color: white;
  height: 83vh;
  margin: 0;
  padding: 0;

  #jName {
    font-size: 2.5vw;
    position: absolute;
    top: 65%;
    left: 20%;
    font-family: "Allerta Stencil", sans-serif;
    font-weight: 500;

    @media only screen and (max-width: 700px) {
      font-size: 10vw;
      top: 70%;
      left: 20%;
    }
  }

  #heatherName {
    text-align: center;
    font-size: 2.5vw;
    position: absolute;
    top: 35%;
    left: 70%;
    font-family: "Allerta Stencil", sans-serif;
    font-weight: 500;

    @media only screen and (max-width: 700px) {
      font-size: 10vw;
      top: 20%;
      left: 35%;
    }
  }

  #rmLogo {
    position: absolute;
    top: 5%;
    left: 50%;

    img {
      width: 25vw;
    }

    @media only screen and (max-width: 700px) {
      position: absolute;
      top: 7%;
      left: 30%;

      img {
        width: 40vw;
      }
    }
  }

  #jhLogo {
    position: absolute;
    top: 58%;
    left: 40%;

    img {
      width: 16vw;
    }

    @media only screen and (max-width: 700px) {
      position: absolute;
      top: 45%;
      left: 10%;

      img {
        width: 32vw;
      }
    }
  }

  #cdLogo {
    position: absolute;
    top: 68%;
    left: 60%;

    img {
      width: 16vw;
    }

    @media only screen and (max-width: 700px) {
      position: absolute;
      top: 55%;
      left: 55%;

      img {
        width: 38vw;
      }
    }
  }

  #landingPageWordsAtBottom {
    position: absolute;
    font-size: 2vw;
    left: 10%;
    bottom: 8%;
    color: white;
    font-family: "Luckiest Guy", cursive;

    @media only screen and (max-width: 700px) {
      font-size: 3.5vw;
    }
  }

  #heatherLoveInstagram {
    position: absolute;
    font-size: 1.5vw;
    left: 65%;
    top: 53%;
    color: white;
    font-family: "Luckiest Guy", cursive;

    img {
      width: 3vw;
    }

    @media only screen and (max-width: 700px) {
      position: absolute;
      font-size: 5vw;
      left: 55%;
      top: 32%;
      color: white;
      font-family: "Luckiest Guy", cursive;

      img {
        width: 12vw;
        float: right;
      }
    }
  }
`;

function Index() {
  const animIndexRMLogo = useSpring({
    from: { width: "15vw" },
    width: "25vw",
    config: {
      duration: 1000
    }
  });

  const animJHLogo = useSpring({
    from: { marginLeft: -250, opacity: 0 },
    to: async (next, cancel) => {
      await next({ marginLeft: 0, opacity: 1, config: { duration: 500 } });
      await next({ opacity: 0, config: { duration: 500 } });
      await next({ opacity: 1, config: { duration: 500 } });
    }
  });

  const animCDLogo = useSpring({
    from: { marginLeft: 250, opacity: 0 },
    to: async (next, cancel) => {
      await next({ marginLeft: 0, opacity: 1, config: { duration: 500 } });
      await next({ opacity: 0, config: { duration: 500 } });
      await next({ opacity: 1, config: { duration: 500 } });
    }
  });

  return (
    <Layout>
      <IndexDiv>
        <NextSeo
          config={{
            title: "Reveler Media Services Next.js/Firebase starter",
            description:
              "Next.js starter template with Styled-Components, Firebase, Next-SEO"
          }}
        />
        <div id="jName">J. Graves</div>
        <div id="heatherName">
          Heather <br /> Love
        </div>
        <div id="heatherLoveInstagram">
          <img src={imgInstagramLogo} alt="Instagram Logo" /> <br />{" "}
          <a href="https://www.instagram.com/xheatherlovex/">xheatherlovex</a>
        </div>
        <div id="rmLogo">
          <animated.img
            style={animIndexRMLogo}
            src={imgRMWhiteLogo}
            alt="Reveler Music Logo"
          />
        </div>
        <div id="jhLogo">
          <animated.img
            style={animJHLogo}
            src={imgJHLogo}
            alt="Reveler Music Logo"
          />
        </div>
        <div id="cdLogo">
          <animated.img
            style={animCDLogo}
            src={imgCDLogo}
            alt="Cowboy Drive Logo"
          />
        </div>
        <div id="landingPageWordsAtBottom">
          Corporate, Wedding, Family Friendly or 21+
          <br />
          Live Music, Open Mic, Karaoke and DJ Services
        </div>
      </IndexDiv>
    </Layout>
  );
}

export default Index;
