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
  margin: 0;
  padding: 0;
  width: 100vw;

  #jName {
    font-size: 2.5vw;
    position: absolute;
    top: 70%;
    left: 20%;
    font-family: "Allerta Stencil", sans-serif;
    font-weight: 500;

    @media only screen and (max-width: 600px) {
      font-size: 5vw;
      top: 8%;
      left: 2%;
    }

    @media only screen and (max-width: 1200px) and (min-width: 600px) {
    }
  }

  #heatherName {
    text-align: center;
    font-size: 2.5vw;
    position: absolute;
    top: 35%;
    right: 19%;
    font-family: "Allerta Stencil", sans-serif;
    font-weight: 500;

    @media only screen and (max-width: 600px) {
      top: 40%;
      right: 7%;
      font-size: 5vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 600px) {
    }
  }

  #rmLogo {
    position: absolute;
    top: 0;
    left: 50%;
    width: 25vw;

    @media only screen and (max-width: 600px) {
      left: 5%;
      top: 15%;
      width: 50vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 600px) {
    }
  }

  #jhLogo {
    position: absolute;
    top: 50%;
    left: 40%;

    img {
      width: 16vw;
    }

    @media only screen and (max-width: 600px) {
      position: absolute;
      top: 48%;
      left: 1%;

      img {
        width: 42vw;
      }
    }

    @media only screen and (max-width: 1200px) and (min-width: 600px) {
    }
  }

  #cdLogo {
    position: absolute;
    top: 68%;
    left: 60%;

    img {
      width: 16vw;
    }

    @media only screen and (max-width: 600px) {
      position: absolute;
      top: 60%;

      img {
        width: 50vw;
      }
    }

    @media only screen and (max-width: 1200px) and (min-width: 600px) {
    }
  }

  #landingPageWordsAtBottom {
    position: absolute;
    font-size: 2vw;
    left: 6%;
    bottom: 0;
    color: white;
    font-family: "Luckiest Guy", cursive;

    @media only screen and (max-width: 600px) {
      font-size: 3vw;
      bottom: 15%;
    }

    @media only screen and (max-width: 1200px) and (min-width: 600px) {
    }
  }

  #heatherLoveInstagram {
    position: absolute;
    font-size: 1.5vw;
    right: 10%;
    top: 55%;
    color: white;
    font-family: "Luckiest Guy", cursive;

    img {
      width: 3vw;
    }

    @media only screen and (max-width: 600px) {
      position: absolute;
      font-size: 5vw;
      top: 20%;
      right: 5%;

      color: white;
      font-family: "Luckiest Guy", cursive;

      img {
        width: 10vw;
      }
    }

    @media only screen and (max-width: 1200px) and (min-width: 600px) {

    }
  }
`;

function Index() {
  const animIndexRMLogo = useSpring({
    from: { width: "50%" },
    width: "100%",
    config: {
      duration: 3000
    }
  });

  const animJHLogo = useSpring({
    from: { marginLeft: -250, opacity: 0 },
    to: async (next, cancel) => {
      await next({ marginLeft: 0, opacity: 1, config: { duration: 1000 } });
      await next({ opacity: 0, config: { duration: 1000 } });
      await next({ opacity: 1, config: { duration: 1000 } });
    }
  });

  const animCDLogo = useSpring({
    from: { marginLeft: 250, opacity: 0 },
    to: async (next, cancel) => {
      await next({ marginLeft: -50, opacity: 1, config: { duration: 1000 } });
      await next({ opacity: 0, config: { duration: 1000 } });
      await next({ opacity: 1, config: { duration: 1000 } });
    }
  });

  return (
    <Layout>
      <IndexDiv>
        <NextSeo
          config={{
            title:
              "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services",
            description:
              "Reveler Music, LLC offers music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
            canonical: "https://revelermusic.com",
            openGraph: {
              type: "website",
              url: "https://revelermusic.com/",
              title: "Reveler Music, LLC - Landing Page",
              description:
                "Reveler Music, LLC offers music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
              site_name: "Revler Music, LLC"
            },
            twitter: {
              handle: "@jwgravesco"
            }
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
