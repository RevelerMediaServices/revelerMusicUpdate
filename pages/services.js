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

const ServicesDiv = styled.div`
  min-height: 90vh;
  color: white;
  text-align: justify;
  padding: 1vw;

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
        <div className="container">
          <h1>The Reveler Process</h1>
          <p>
            Reveler's goal is to provide an amazing experience at a fair price.
            In order to guarantee the perfect experience within the budget,
            Reveler has a 4 step Experience Guarantee Process!
          </p>
          <Row>
            <Col>
              <Card className="bg-dark">
                <CardTitle className="">Together</CardTitle>
                <CardSubtitle className="">Choose a Service</CardSubtitle>
                <CardImg className="" top width="100%" src={imgChoseService} />
                <CardText className="">
                  Every event is unique in its specialness. If a live band is
                  the best option for your event, Reveler has those
                  capabilities. Maybe a DJ or Karaoke makes more sense. Lets
                  Discuss!
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark">
                <CardTitle className="">Together</CardTitle>
                <CardSubtitle className="">
                  Visualize the Experience
                </CardSubtitle>
                <CardImg className="" top width="100%" src={imgVisualize} />
                <CardText className="">
                  Every event is unique in its specialness. If a live band is
                  the best option for your event, Reveler has those
                  capabilities. Maybe a DJ or Karaoke makes more sense. Lets
                  Discuss!
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark">
                <CardTitle className="">Our Job</CardTitle>
                <CardSubtitle className="">Implement the Plan</CardSubtitle>
                <CardImg className="" top width="100%" src={imgImplement} />
                <CardText className="">
                  Every event is unique in its specialness. If a live band is
                  the best option for your event, Reveler has those
                  capabilities. Maybe a DJ or Karaoke makes more sense. Lets
                  Discuss!
                </CardText>
              </Card>
            </Col>
            <Col>
              <Card className="bg-dark">
                <CardTitle className="">Your Job</CardTitle>
                <CardSubtitle className="">Party Down</CardSubtitle>
                <CardImg className="" top width="100%" src={imgPartyDown} />
                <CardText className="">
                  Every event is unique in its specialness. If a live band is
                  the best option for your event, Reveler has those
                  capabilities. Maybe a DJ or Karaoke makes more sense. Lets
                  Discuss!
                </CardText>
              </Card>
            </Col>
          </Row>
        </div>
      </ServicesDiv>
    </Layout>
  );
}

export default Services;
