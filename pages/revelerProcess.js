import Layout from "../components/Layout";

import styled from "styled-components";
import NextSeo from "next-seo";

import imgChoseService from "../static/images/multimedia.png";
import imgVisualize from "../static/images/view.png";
import imgImplement from "../static/images/implement.png";
import imgPartyDown from "../static/images/toast.png";

import {
  Row,
  Col,
  Card,
  CardBody,
  CardImg,
  CardTitle,
  CardSubtitle,
  CardText
} from "reactstrap";

const RevelerProcessDiv = styled.div`
  color: white;
  text-align: justify;
  margin: 0;
  padding: 0;
  height: 83vh;

  h1 {
    text-align: center;
  }

  #pRevelerProcessGoal {
    margin-left: 15vw;
    margin-right: 15vw;
  }

  img {
    width: 10vw;
    height: auto;

    margin-left: auto;
    margin-right: auto;
  }

  .col {
  }

  .card {
    -webkit-box-shadow: 0 0 1vw rgba(154, 154, 154, 1);
    -moz-box-shadow: 0 0 1vw rgba(154, 154, 154, 1);
    box-shadow: 0 0 1vw rgba(154, 154, 154, 1);
    padding: 1vw;
  }

  .card-title {
    text-align: center;
  }

  .card-subtitle {
    text-align: center;
    padding-bottom: 3vh;
  }

  .card-text {
    padding: 1vw;
  }
`;

function RevelerProcess() {
  return (
    <Layout>
      <RevelerProcessDiv>
        <NextSeo
          config={{
            title: "Reveler Media RevelerProcess Next.js/Firebase starter",
            description:
              "Next.js starter template with Styled-Components, Firebase, Next-SEO"
          }}
        />
        <div className="container">
          <h1>The Reveler Process</h1>
          <p id="pRevelerProcessGoal">
            Reveler's goal is to provide an amazing experience at a fair price.
            In order to guarantee the perfect experience within the budget,
            Reveler has a 4 step Experience Guarantee Process!
          </p>
          <Row>
            <Col>
              <Card className="bg-dark">
                <CardTitle className="">Together</CardTitle>
                <CardSubtitle className="">Let's Discuss!</CardSubtitle>
                <CardImg className="" top width="100%" src={imgChoseService} />
                <CardText className="">
                  Every event is unique in its specialness. If a live band is
                  the best option for your event, Reveler has those
                  capabilities. Maybe a DJ or Karaoke makes more sense.
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark">
                <CardTitle className="">Together</CardTitle>
                <CardSubtitle className="">Let's Visualize!</CardSubtitle>
                <CardImg className="" top width="100%" src={imgVisualize} />
                <CardText className="">
                  {" "}
                  In establishing your vision of the perfect experience, you and
                  Reveler will walk through and visualize the day or the event.
                  Being prepared is the Reveler Advantage.
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark">
                <CardTitle className="">Our Job</CardTitle>
                <CardSubtitle className="">Let's Get To It!</CardSubtitle>
                <CardImg className="" top width="100%" src={imgImplement} />
                <CardText className="">
                  With more than 30 years of music entertainment experience and
                  of high level customer satisfaction experience , You can leave
                  your focus on enjoying the event. NO EXCUSES!
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark">
                <CardTitle className="">Your Job</CardTitle>
                <CardSubtitle className="">Let's Party!</CardSubtitle>
                <CardImg className="" top width="100%" src={imgPartyDown} />
                <CardText className="">
                  You deserve this! You have worked hard each and every day to
                  provide for your family. Now it is time to enjoy the benefits
                  of all your hard work. GET AFTER IT!
                </CardText>
              </Card>
            </Col>
          </Row>
        </div>
      </RevelerProcessDiv>
    </Layout>
  );
}

export default RevelerProcess;
