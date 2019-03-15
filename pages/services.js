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
  margin: 0;
  padding: 0;
  color: white;
  height: 83vh;

  img {
    width: 8vw;
    margin-left: 6.25vw;
  }

  @media only screen and (max-width: 1200px) and (min-width: 700px) {
    padding-top: 2vh;

    img {
      width: 10vw;
    }
  }

  @media only screen and (max-width: 700px) {
    padding-top: 2vh;

    img {
      width: 23vw;
    }
  }

  h1 {
    text-align: center;
    margin: 0;
    padding: 0;
    font-size: 3em;
    height: 13%;
  }

  .row {
    margin: auto;
    width: 98vw;
    height: 60%;
  }

  #pRevelerServicesGoal {
    margin-left: 30vw;
    margin-right: 30vw;
    font-size: 1.3em;
    height: 7%;
  }

  .col {
    margin: 0.25vw;
    width: 23.5vw;
    padding: 0;
    text-align: center;
    color: white;
  }

  .card {
    background: rgba(0, 0, 0, 0.6);
    height: 50vh;
    width: 100%;
    margin: 0;
    padding: 1vw;

    -webkit-box-shadow: 0 0 1vw rgba(154, 154, 154, 1);
    -moz-box-shadow: 0 0 1vw rgba(154, 154, 154, 1);
    box-shadow: 0 0 1vw rgba(154, 154, 154, 1);

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
    }

    @media only screen and (max-width: 700px) {
    }
  }

  .card-title {
    font-family: "Montserrat", sans-serif;
    font-weight: 800;
    font-variant: small-caps;
    margin: 0;
    padding: 0;

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
    }

    @media only screen and (max-width: 700px) {
    }
  }

  .card-text {
    margin: 0;
    padding: 0;
    font-family: "PT Serif", serif;
    font-size: 1.2em;
    font-weight: 600;
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
            title: "Reveler Media Services Next.js/Firebase starter",
            description:
              "Next.js starter template with Styled-Components, Firebase, Next-SEO"
          }}
        />
        <h1>Reveler Music, LLC Entertainment Services</h1>
        <p id="pRevelerServicesGoal">
          Reveler's goal is to provide an amazing experience at a fair price.
        </p>

        <Row>
          <Col className="colStyle" xl="3" md="6" xs="12">
            <animated.div style={card1}>
              <Card body outline color="secondary">
                <div>
                  <img src={imgLiveMusic} alt="Live Music icon" />
                </div>
                <CardBody>
                  <CardTitle>Live Music</CardTitle>
                  <CardText className="justify-content-center">
                    With music brands to cover any event or occasion, Reveler
                    Music offers Live Music services for Family Friendly or 21+
                    occasions. Acoustic Vocal Duo to a full band, and everything
                    in between.
                  </CardText>
                </CardBody>
              </Card>
            </animated.div>
          </Col>
          <Col className="colStyle" xl="3" md="6" xs="12">
            <animated.div style={card2}>
              <Card body outline color="secondary">
                <div>
                  <img src={imgOpenMic} alt="Open Mic icon" />
                </div>
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
                <div>
                  <img src={imgKaroke} alt="mixer icon" />
                </div>
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
                <div>
                  <img src={imgDJ} alt="mixer icon" />
                </div>
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
