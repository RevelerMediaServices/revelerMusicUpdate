import Layout from "../components/Layout";

import styled from "styled-components";
import NextSeo from "next-seo";
import { useSpring, animated } from "react-spring";

import imgChoseService from "../static/images/multimedia.png";
import imgVisualize from "../static/images/view.png";
import imgImplement from "../static/images/implement.png";
import imgPartyDown from "../static/images/toast.png";

import {
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

const RevelerProcessDiv = styled.div`
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

  #pRevelerProcessGoal {
    margin-left: 30vw;
    margin-right: 30vw;
    font-size: 1vw;
    font-family: "Noto Sans", sans-serif;

    @media only screen and (max-width: 767px) {
      margin-left: 5vw;
      margin-right: 5vw;
      font-size: 3.2vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      margin-left: 15vw;
      margin-right: 15vw;
      font-size: 1.618vw;
    }
  }

  .cardImg {
    width: 10vw;
    height: 10vw;
    margin-left: auto;
    margin-right: auto;

    @media only screen and (max-width: 767px) {
      width: 50vw;
      height: 50vw;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      width: 30vw;
      height: 30vw;
    }
  }

  .processCols {
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
    height: 50vh;
    padding: 1vh;

    -webkit-box-shadow: 0 0 1vw rgba(154, 154, 154, 1);
    -moz-box-shadow: 0 0 1vw rgba(154, 154, 154, 1);
    box-shadow: 0 0 1vw rgba(154, 154, 154, 1);

    @media only screen and (max-width: 767px) {
      height: 100%;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      height: 100%;
    }
  }

  .card-title {
    text-align: center;
    font-family: "Fjalla One", sans-serif;
    font-size: 2.5vw;
    height: 8vh;

    @media only screen and (max-width: 767px) {
      font-size: 12vw;
      height: 100%;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      font-size: 5vw;
      height: 10vh;
    }
  }

  .card-subtitle {
    text-align: center;
    font-family: "Fjalla One", sans-serif;
    font-size: 2.4vw;
    color: black;
    text-shadow: 0.05vw 0.05vw 0.05vw rgba(255, 255, 255, 1);
    height: 6vh;
    margin-bottom: 1vh;

    @media only screen and (max-width: 767px) {
      font-size: 7.2vw;
      height: 100%;
    }

    @media only screen and (max-width: 1200px) and (min-width: 767px) {
      font-size: 3.6vw;
      height: 8vh;
    }
  }

  .card-text {
    padding: 1vh;
    font-family: "Noto Sans", sans-serif;
    font-size: 0.9vw;

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

function RevelerProcess() {
  const col1 = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -250 },
    delay: 0,
    config: {
      mass: 1,
      tension: 180,
      friction: 12,
      duration: 1000
    }
  });
  const col2 = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -200 },
    delay: 500,
    config: {
      mass: 7,
      friction: 150,
      tension: 2500,
      duration: 1000
    }
  });
  const col3 = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -150 },
    delay: 1000,
    config: {
      mass: 7,
      friction: 150,
      tension: 2500,
      duration: 1000
    }
  });
  const col4 = useSpring({
    opacity: 1,
    marginTop: 0,
    from: { opacity: 0, marginTop: -100 },
    delay: 1500,
    config: {
      mass: 7,
      friction: 150,
      tension: 2500,
      duration: 1000
    }
  });

  return (
    <Layout>
      <RevelerProcessDiv>
        <NextSeo
          config={{
            title:
              "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services - Process Page ",
            description:
              "In order to guarantee a great product at a fair price, Reveler Music, LLC has a 4 step Experience Guarantee Process.",
            canonical: "https://revelermusic.com",
            openGraph: {
              type: "website",
              url: "https://revelermusic.com/revelerProcess",
              title: "Reveler Music, LLC - Process Page",
              description:
                "In order to guarantee a great product at a fair price, Reveler Music, LLC has a 4 step Experience Guarantee Process.",
              site_name: "Revler Music, LLC"
            },
            twitter: {
              handle: "@jwgravesco"
            }
          }}
        />
        <h1>The Reveler Process</h1>

        <p id="pRevelerProcessGoal">
          Reveler's goal is to provide an amazing experience at a fair price. In
          order to guarantee the perfect experience within the budget, Reveler
          has a 4 step Experience Guarantee Process!
        </p>
        <Row>
          <Col className="processCols" xl={3} md={6}>
            <animated.div style={col1}>
              <Card className="bg-dark">
                <CardTitle className="">Together</CardTitle>
                <CardSubtitle className="">Let's Discuss!</CardSubtitle>
                <CardImg
                  top
                  src={imgChoseService}
                  alt="Choose Service"
                  className="cardImg"
                  id="imgChoseService"
                />
                <CardText className="">
                  Every event is unique in its specialness. If a live band is
                  the best option for your event, Reveler has those
                  capabilities. Maybe a DJ or Karaoke makes more sense.
                </CardText>
              </Card>
            </animated.div>
          </Col>
          <Col className="processCols" xl={3} md={6}>
            <animated.div style={col2}>
              <Card className="bg-dark">
                <CardTitle className="">Together</CardTitle>
                <CardSubtitle className="">Let's Visualize!</CardSubtitle>
                <CardImg
                  top
                  src={imgVisualize}
                  alt="Visualize"
                  className="cardImg"
                  id="imgVisualize"
                />
                <CardText className="">
                  {" "}
                  In establishing your vision of the perfect experience, you and
                  Reveler will walk through and visualize the day or the event.
                  Being prepared is the Reveler Advantage.
                </CardText>
              </Card>
            </animated.div>
          </Col>
          <Col className="processCols" xl={3} md={6}>
            <animated.div style={col3}>
              <Card className="bg-dark">
                <CardTitle className="">Our Job</CardTitle>
                <CardSubtitle className="">Let's Get To It!</CardSubtitle>
                <CardImg
                  top
                  src={imgImplement}
                  alt="Implement"
                  className="cardImg"
                />
                <CardText className="">
                  With more than 30 years of music entertainment experience and
                  of customer satisfaction experience, Reveker leaves your focus
                  on the event. NO EXCUSES!
                </CardText>
              </Card>
            </animated.div>
          </Col>
          <Col className="processCols" xl={3} md={6}>
            <animated.div style={col4}>
              <Card className="bg-dark">
                <CardTitle className="">Your Job</CardTitle>
                <CardSubtitle className="">Let's Party!</CardSubtitle>
                <CardImg
                  top
                  src={imgPartyDown}
                  alt="Implement"
                  className="cardImg"
                />
                <CardText className="">
                  You deserve this! You have worked hard each and every day to
                  provide for your family. Now it is time to enjoy the benefits
                  of all your hard work. GET AFTER IT!
                </CardText>
              </Card>
            </animated.div>
          </Col>
        </Row>
      </RevelerProcessDiv>
    </Layout>
  );
}

export default RevelerProcess;
