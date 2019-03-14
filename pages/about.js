import Layout from "../components/Layout";

import styled from "styled-components";
import NextSeo from "next-seo";

import { Row, Col, Container } from "reactstrap";

import imgRMBusCard from "../static/images/RMBackofBusinessCard.png";
import imgRMLogo from "../static/images/RevelerLogo.png";
import imgJ from "../static/images/roughneckProfilePic.jpg";
import imgHeather from "../static/images/heatherSelfie.jpg";

const AboutDiv = styled.div`
  margin: 0;
  padding: 0;
  height: 83vh;
  background: white;

  .row {
    margin: 0;
    padding: 0;
  }

  h1 {
    font-family: "Cookie", cursive;
    font-size: 4.5vw;
    text-align: center;
  }

  h2 {
    font-family: "Permanent Marker", cursive;
    font-size: 2vw;
    text-align: center;
  }

  p {
    font-family: "Special Elite", cursive;
    font-size: 1vw;
    text-align: justify;
  }

  img {
    width: 10vw;
    float: right;
    margin: 0.5vw;
  }

  #imgRMBusCard {
    width: 21vw;
    float: left;
  }

  #imgRMLogo {
    width: 15vw;
    float: right;
  }

  #imgJ {
    width: 13vw;
    float: right;
    outline: 0.15vw dashed black;
    border: 0.4vw solid white;
  }

  #imgHeather {
    width: 12vw;
    float: left;
    margin-top: 0.3vw;
    outline: 0.15vw dashed black;
    border: 0.4vw solid white;
  }
`;

function About() {
  return (
    <Layout>
      <AboutDiv>
        <NextSeo
          config={{
            title: "Reveler Media Services Next.js/Firebase starter",
            description:
              "Next.js starter template with Styled-Components, Firebase, Next-SEO"
          }}
        />
        <h1>About Reveler Music, LLC</h1>
        <div className="rowWrapper">
          <Row>
            <Col>
              <h2>Meet Reveler</h2>
              <p>
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
              </p>
            </Col>
            <Col>
              <h2>The Reveler Process</h2>
              <p>
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
              </p>
            </Col>
            <Col>
              <h2>J.</h2>
              <p>
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
              </p>
            </Col>
            <Col>
              <h2>Heather</h2>
              <p>
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
              </p>
            </Col>
          </Row>
        </div>
      </AboutDiv>
    </Layout>
  );
}

export default About;
