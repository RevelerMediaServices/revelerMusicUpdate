import Layout from "../components/Layout";

import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import NextSeo from "next-seo";

import { Row, Col } from "reactstrap";

import imgRMBusCard from "../static/images/RMBackofBusinessCard.png";
import imgRMLogo from "../static/images/RevelerLogo.png";
import imgJ from "../static/images/roughneckProfilePic.jpg";
import imgHeather from "../static/images/heatherSelfie.jpg";

const AboutDiv = styled.div`
  margin: 0;
  padding-left: 1vw;
  padding-right: 1vw;
  background: white;
  height: 80vh;
  overflow-y: auto;

  h1 {
    text-align: center;
    font-family: "Fjalla One", sans-serif;
    font-size: 4.855vw;

    @media only screen and (max-width: 767px) {
      font-size: 9.6vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      font-size: 6.855vw;
    }
  }

  .colStyle {
    @media only screen and (max-width: 767px) {
      margin-top: 2vh;
      margin-bottom: 2vh;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      margin-top: 1vh;
      margin-bottom: 1vh;
    }
  }

  h2 {
    text-align: center;
    font-family: "Fjalla One", sans-serif;
    font-size: 2.4vw;
    color: black;
    text-shadow: 0.05vw 0.05vw 0.05vw rgba(255, 255, 255, 1);
    height: 6vh;
    margin-bottom: 1vh;
    font-variant: small-caps;

    @media only screen and (max-width: 767px) {
      font-size: 9vw;
      height: 8vh;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      font-size: 5vw;
      height: 8vh;
    }
  }

  p {
    padding: 0;
    font-family: "Noto Sans", sans-serif;
    font-size: 0.95vw;

    width: 100%;
    overflow-y: auto;

    @media only screen and (max-width: 767px) {
      font-size: 5vw;
      height: 100%;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      font-size: 2vw;
      height: 100%;
    }
  }

  img {
    margin: 1vw;

    @media only screen and (max-width: 767px) {
      margin: 2vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      margin: 1vw;
    }
  }

  #imgRMBusCard {
    width: 21vw;
    float: left;

    @media only screen and (max-width: 767px) {
      width: 50vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      width: 30vw;
    }
  }

  #imgRMLogo {
    width: 16vw;
    float: right;

    @media only screen and (max-width: 767px) {
      width: 45vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      width: 27vw;
    }
  }

  #imgJ {
    width: 13vw;
    float: right;
    outline: 0.15vw dashed black;
    border: 0.4vw solid white;

    @media only screen and (max-width: 767px) {
      width: 45vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      width: 27vw;
    }
  }

  #imgHeather {
    width: 12vw;
    float: left;
    margin-top: 0.3vw;
    outline: 0.15vw dashed black;
    border: 0.4vw solid white;

    @media only screen and (max-width: 767px) {
      width: 45vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      width: 27vw;
    }
  }
`;

function About() {
  const aboutParagraph = useSpring({
    marginLeft: 0,
    opacity: 1,
    from: { marginLeft: -250, opacity: 0 },
    config: {
      duration: 2000
    },
    delay: 0
  });
  const aboutParagraph2 = useSpring({
    marginLeft: 0,
    opacity: 1,
    from: { marginLeft: -250, opacity: 0 },
    config: {
      duration: 2000
    },
    delay: 1000
  });
  const aboutParagraph3 = useSpring({
    marginLeft: 0,
    opacity: 1,
    from: { marginLeft: -250, opacity: 0 },
    config: {
      duration: 2000
    },
    delay: 2000
  });
  const aboutParagraph4 = useSpring({
    marginLeft: 0,
    opacity: 1,
    from: { marginLeft: -250, opacity: 0 },
    config: {
      duration: 2000
    },
    delay: 3000
  });

  return (
    <Layout>
      <AboutDiv>
        <NextSeo
          config={{
            title: "Reveler Music, LLC - About Page ",
            description:
              "Meet Reveler Music, LLC, we offer music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas."
          }}
        />
        <h1>About Reveler Music, LLC</h1>
        <div className="rowWrapper">
          <Row>
            <Col className="colStyle" xl={3} md={6}>
              <h2>Meet Reveler</h2>
              <animated.p style={aboutParagraph}>
                Most work very hard each and every day to provide for himself or{" "}
                <img
                  src={imgRMBusCard}
                  id="imgRMBusCard"
                  alt="Santa & the Mrs of West Texas"
                />
                herself and his or her family. With all of this struggle and
                sacrifice it is essential that the important days go well. You
                deserve to have your special events such as a daughter or son's
                wedding or his or her college graduation make you smile. Reveler
                Music wants to remove all worries one has about keeping the ones
                you love happy and having a good time.
              </animated.p>
            </Col>
            <Col className="colStyle" xl={3} md={6}>
              <h2>Reveler Process</h2>
              <animated.p style={aboutParagraph2}>
                In order to ensure 100% complete and total being happy and
                having a good time for you and your loved ones, Reveler Music,
                LLC created a 4 step Experience Guarantee Process. 1) You and
                Reveler will go through the Entertainment service options
                available, and together we will find the right option. 2) Next,
                together we will walk through the event and visualize the best
                outcome. 3) In the next step of the process, Reveler implements
                your vision in a way that ensures 100% complete and total
                satisfaction. No excuses! 4) Finally, the last and the best
                <img
                  src={imgRMLogo}
                  alt="Santa & the Mrs at the Odessa Movie Theatre"
                  id="imgRMLogo"
                />{" "}
                step, You go Party down, and enjoy what you have earned.
              </animated.p>
            </Col>
            <Col className="colStyle" xl={3} md={6} className="colStyle">
              <h2>J.</h2>
              <animated.p style={aboutParagraph3}>
                Although able to complete college degrees in Accounting,
                Business Administration and Information Architecture, J
                <img src={imgJ} id="imgJ" alt="Santa Baking Cookies" />{" "}
                maintains the blue-collar work ethic he learned growing up in
                Odessa Texas. From the oil rigs of West Texas to the board rooms
                of the largest tax accounting firm in the world, J has
                appreciated a diverse work history, as well as, a diverse
                understanding and tolerance of people and of cultures. Having
                played the guitar and having sang in bands from Heavy Metal to
                Country music for more than 30 years, J has an extensive
                background in music entertainment.
              </animated.p>
            </Col>
            <Col className="colStyle" xl={3} md={6}>
              <h2>Heather</h2>
              <animated.p style={aboutParagraph4}>
                Very few things in life light up a room like Heather when she
                walks in the room. God given natural beauty complimented with a
                <img
                  src={imgHeather}
                  id="imgHeather"
                  alt="the Mrs Enjoying Barbeque"
                />{" "}
                voice that could only be bestowed from the heavens. Coming from
                a family of outstanding musicians, Heather's natural talent was
                found very early, and she began formal training at the age of 4.
                Born and raised on the beaches near Tampa, FL, Heather was a bit
                of a beach bunni, but says she loves Colorado and now she is a
                snow bunni. 😊
              </animated.p>
            </Col>
          </Row>
        </div>
      </AboutDiv>
    </Layout>
  );
}

export default About;
