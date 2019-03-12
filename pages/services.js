import Layout from "../components/Layout";

import styled from "styled-components";
import NextSeo from "next-seo";

import { Row, Col, Card, CardBody, CardTitle, CardText } from "reactstrap";

import imgLiveMusic from "../static/images/sliders.png";
import imgOpenMic from "../static/images/guitar-player.png";
import imgDJ from "../static/images/dj.png";
import imgKaroke from "../static/images/singer.png";

const ServicesDiv = styled.div`
  min-height: 80vh;
  padding: 2vw;

  .colStyle {
    text-align: center;
    color: white;

    img {
      width: 5vw;
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
  }

  .card {
    background: rgba(0, 0, 0, 0.8);
    height: 100%;
  }

  .card-title {
    font-family: "Montserrat", sans-serif;
    font-size: 2.5vw;
    font-weight: 800;
    font-variant: small-caps;

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      font-size: 5vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 10vw;
    }
  }

  .card-text {
    font-family: "PT Serif", serif;
    font-size: 0.8vw;
    font-weight: 600;

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      font-size: 1.8vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 3.5vw;
    }
  }
`;

function Services() {
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
        <h1>Services Page</h1>

        <Row>
          <Col className="colStyle" xl="3" md="6" xs="12">
            <Card body outline color="secondary">
              <div>
                <img src={imgLiveMusic} alt="Live Music icon" />
              </div>
              <CardBody>
                <CardTitle>Live Music</CardTitle>
                <CardText className="justify-content-center">
                  With music brands to cover any event or occasion, Reveler
                  Music offers Live Music services for Family Friendly or 21+
                  occasions.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col className="colStyle" xl="3" md="6" xs="12">
            <Card body outline color="secondary">
              <div>
                <img src={imgOpenMic} alt="Open Mic icon" />
              </div>
              <CardBody>
                <CardTitle>Open Mics</CardTitle>
                <CardText className="justify-content-center">
                  With professional modern sound equipment, Reveler Music offers
                  talented Open Mic services for Music or Comedy events.
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col className="colStyle" xl="3" md="6" xs="12">
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
          </Col>
          <Col className="colStyle" xl="3" md="6" xs="12">
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
          </Col>
        </Row>
      </ServicesDiv>
    </Layout>
  );
}

export default Services;
