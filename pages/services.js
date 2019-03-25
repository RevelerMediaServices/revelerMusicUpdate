import Layout from "../components/Layout";

import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import NextSeo from "next-seo";

import { Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

import imgLiveMusic from "../static/images/sliders.png";
import imgOpenMic from "../static/images/guitar-player.png";
import imgDJ from "../static/images/dj.png";
import imgKaroke from "../static/images/singer.png";

const ServicesDiv = styled.div`
  color: white;
  text-align: left;
  margin: 0;
  padding: 2vw;
  height: 80vh;
  font-size: 2vw;

  background: rgba(0, 0, 0, 0.8);

  @media only screen and (max-width: 767px) {
    height: auto;
  }

  @media only screen and (max-width: 1200px) and (min-width: 767px) {
    height: auto;
  }

  h1 {
    text-align: center;
    font-family: "Fjalla One", sans-serif;
    font-size: 4.855vw;

    @media only screen and (max-width: 767px) {
      font-size: 9.6vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
    }
  }

  #pServicesGoal {
    margin-left: 30vw;
    margin-right: 30vw;
    font-size: 1vw;
    font-family: "Noto Sans", sans-serif;
    text-align: center;

    @media only screen and (max-width: 767px) {
      margin-left: 5vw;
      margin-right: 5vw;
      font-size: 5vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      margin-left: 15vw;
      margin-right: 15vw;
      font-size: 1.618vw;
    }
  }

  .cardImg {
    width: 5vw;
    height: 5vw;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 767px) {
      width: 25vw;
      height: 25vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      width: 15vw;
      height: 15vw;
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

  .card {
    background: rgba(0, 0, 0, 0.6);
    height: 50vh;
    width: 100%;
    padding: 2vw;

    -webkit-box-shadow: 0.2vw 0.2vw 1vw rgba(154, 154, 154, 1);
    -moz-box-shadow: 0.2vw 0.2vw 1vw rgba(154, 154, 154, 1);
    box-shadow: 0.2vw 0.2vw 1vw rgba(154, 154, 154, 1);

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      height: 100%;
    }

    @media only screen and (max-width: 700px) {
      height: 100%;
    }
  }

  .card-title {
    text-align: center;
    font-family: "Fjalla One", sans-serif;
    font-size: 2.5vw;
    height: 8vh;
    font-variant: small-caps;

    @media only screen and (max-width: 767px) {
      font-size: 12vw;
      height: 100%;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      font-size: 5vw;
      height: 10vh;
    }
  }

  .card-text {
    padding: 1vh;
    font-family: "Noto Sans", sans-serif;
    font-size: 1vw;

    height: 28vh;
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
`;

function Services() {
  const card1 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 0,
    config: {
      mass: 1,
      tension: 180,
      friction: 12,
      duration: 500
    }
  });
  const card2 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 500,
    config: {
      mass: 1,
      tension: 180,
      friction: 12,
      duration: 500
    }
  });
  const card3 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1000,
    config: {
      mass: 1,
      tension: 180,
      friction: 12,
      duration: 500
    }
  });
  const card4 = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: 1500,
    config: {
      mass: 1,
      tension: 180,
      friction: 12,
      duration: 500
    }
  });
  return (
    <Layout>
      <ServicesDiv>
        <NextSeo
          config={{
            title:
              "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services - Service Page",
            description:
              "Reveler Music, LLC offers music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
            canonical: "https://revelermusic.com",
            openGraph: {
              type: "website",
              url: "https://revelermusic.com/services",
              title: "Reveler Music, LLC - Service Page",
              description:
                "Reveler Music, LLC offers music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
              site_name: "Revler Music, LLC"
            },
            twitter: {
              handle: "@jwgravesco"
            }
          }}
        />
        <h1>Reveler Music, LLC Services</h1>
        <p id="pServicesGoal">
          Reveler's goal is to provide an amazing experience at a fair price.
        </p>

        <Row>
          <Col className="colStyle" xl="3" md="6" xs="12">
            <animated.div style={card1}>
              <Card body outline color="secondary">
                <img
                  className="cardImg"
                  src={imgLiveMusic}
                  alt="Live Music icon"
                />
                <CardBody>
                  <CardTitle>Live Music</CardTitle>
                  <CardText className="justify-content-center">
                    With music brands to cover any event or occasion, Reveler
                    Music offers Live Music services for Family Friendly or 21+
                    occasions.
                  </CardText>
                </CardBody>
              </Card>
            </animated.div>
          </Col>
          <Col className="colStyle" xl="3" md="6" xs="12">
            <animated.div style={card2}>
              <Card body outline color="secondary">
                <img className="cardImg" src={imgOpenMic} alt="Open Mic icon" />
                <CardBody>
                  <CardTitle>Open Mics</CardTitle>
                  <CardText className="justify-content-center">
                    With professional modern sound equipment, Reveler Music
                    offers talented Open Mic services for Music or Comedy
                    events.
                  </CardText>
                </CardBody>
              </Card>
            </animated.div>
          </Col>
          <Col className="colStyle" xl="3" md="6" xs="12">
            <animated.div style={card3}>
              <Card body outline color="secondary">
                <img className="cardImg" src={imgKaroke} alt="mixer icon" />
                <CardBody>
                  <CardTitle>Karaoke</CardTitle>
                  <CardText className="justify-content-center">
                    With 77,000+ songs of all skill level, Reveler Music offers
                    entertaining and fun karaoke services for occasion, event or
                    genre.
                  </CardText>
                </CardBody>
              </Card>
            </animated.div>
          </Col>
          <Col className="colStyle" xl="3" md="6" xs="12">
            <animated.div style={card4}>
              <Card body outline color="secondary">
                <img className="cardImg" src={imgDJ} alt="mixer icon" />
                <CardBody>
                  <CardTitle>DJ</CardTitle>
                  <CardText className="justify-content-center">
                    With more than 30 years of music experience, Reveler Music
                    offers spectacular dynamic DJ services to create the perfect
                    experience.
                  </CardText>
                </CardBody>
              </Card>
            </animated.div>
          </Col>
        </Row>
      </ServicesDiv>
    </Layout>
  );
}

export default Services;
