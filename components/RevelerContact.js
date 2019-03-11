import { useState, useCallback } from "react";

import { db } from "../Firebase";

import styled from "styled-components";

import {
  Row,
  Col,
  Card,
  Form,
  Input,
  Label,
  Container,
  Button
} from "reactstrap";

const RevelerContactDiv = styled.div`
  position: absolute;
  left: 50%;
  transform: translate(-50%, 0%);
  box-shadow: 0 0.8vw 0.45vw -0.6vw rgba(255, 255, 255, 0.2),
    0 0.45vw 0.45vw 0 rgba(255, 255, 255, 0.14),
    0 0.3vw 1.5vw 0 rgba(255, 255, 255, 0.12);
  width: 75vw;
  background-color: black;
  border: solid 0.01vw rgba(0, 0, 100, 1);

  .contactFormPageHeader {
    color: white;
    text-align: center;
    font-size: 4vw;
    font-family: "PT Sans", sans-serif;

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      font-size: 6vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 8vw;
    }
  }

  .newContactFormContainerDiv {
    text-align: center;
    color: white;
    font-family: "PT Sans", sans-serif;
    font-size: 2vw;

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      font-size: 2.5vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 6.5vw;
    }
  }

  .contactFormButtonRow {
  }

  .asLabel {
    padding-top: 0.5vh;
  }

  .asInput {
  }

  .newContactFormButtonDiv {
    padding-top: 2vh;
    padding-bottom: 2vh;
  }

  .contactCards {
    background-color: transparent;
    margin-left: 5%;
    margin-right: 10%;
    margin-top: 2vh;
    background-color: rgb(26, 26, 28, 1);

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      margin-left: 5%;
      margin-right: 10%;
    }

    @media only screen and (max-width: 700px) {
      margin-left: 5%;
      margin-right: 5%;
    }
  }

  .contactCardsWords {
    font-family: "PT Sans", sans-serif;
    font-size: 1vw;

    @media only screen and (max-width: 1200px) and (min-width: 700px) {
      font-size: 1.9vw;
    }

    @media only screen and (max-width: 700px) {
      font-size: 4.2vw;
    }
  }
`;

function RevelerContact() {
  const [fName, setFName] = useState("");
  const [lNameCompanyName, setLNameCompanyName] = useState("");
  const [dateOfEvent, setDateOfEvent] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [bestTimeToCall, setBestTimeToCall] = useState("");
  const [emailAddress, setEmailAdress] = useState("");
  const [zipCodeOfVenue, setZipCodeOfVenue] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = useCallback(e => {
    e.preventDefault();
    const newFormRef = db.ref("ContactForms");
    const form = {
      fName,
      lNameCompanyName,
      dateOfEvent,
      phoneNumber,
      bestTimeToCall,
      emailAddress,
      zipCodeOfVenue,
      message
    };
    newFormRef.push(form);
    setFName("");
    setLNameCompanyName("");
    setDateOfEvent("");
    setPhoneNumber("");
    setBestTimeToCall("");
    setEmailAdress("");
    setZipCodeOfVenue("");
    setMessage("");
  });

  return (
    <RevelerContactDiv>
      <div className="contactFormPageHeader">Contact Reveler Music</div>
      <Row>
        <Col xl="8" lg="7" md="6" xs="12">
          <Form onSubmit={onSubmit}>
            <Container className="newContactFormContainerDiv">
              <Row>
                <Col lg="6" xs="12">
                  <Label for="fname" className="asLabel">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    name="fname"
                    placeholder="Fist Name"
                    id="fname"
                    onChange={e => setFName(e.target.value)}
                    value={fName}
                    className="asInput"
                  />
                </Col>
                <Col lg="6" xs="12">
                  <Label for="lNameCompanyName" className="asLabel">
                    Last/Company Name
                  </Label>
                  <Input
                    type="text"
                    name="lNameCompanyName"
                    placeholder="Last Name or Company Name"
                    id="lNameCompanyName"
                    onChange={e => setLNameCompanyName(e.target.value)}
                    value={lNameCompanyName}
                    className="asInput"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6" xs="12">
                  <Label for="dateOfEvent" className="asLabel">
                    Date of Event
                  </Label>
                  <Input
                    type="text"
                    name="dateOfEvent"
                    placeholder="Date of Event"
                    id="dateOfEvent"
                    onChange={e => setDateOfEvent(e.target.value)}
                    value={dateOfEvent}
                    className="asInput"
                  />
                </Col>
                <Col lg="6" xs="12">
                  <Label for="phoneNumber" className="asLabel">
                    Phone Number
                  </Label>
                  <Input
                    type="text"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    id="phoneNumber"
                    onChange={e => setPhoneNumber(e.target.value)}
                    value={phoneNumber}
                    className="asInput"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg="6" xs="12">
                  <Label for="bestTimeToCall" className="asLabel">
                    Best Time to Call
                  </Label>
                  <Input
                    type="text"
                    name="bestTimeToCall"
                    placeholder="Best Time to Call"
                    id="bestTimeToCall"
                    onChange={e => setBestTimeToCall(e.target.value)}
                    value={bestTimeToCall}
                    className="asInput"
                  />
                </Col>
                <Col lg="6" xs="12">
                  <Label for="emailAddress" className="asLabel">
                    Email Address
                  </Label>
                  <Input
                    type="text"
                    name="emailAddress"
                    placeholder="Email Address"
                    id="emailAddress"
                    onChange={e => setEmailAdress(e.target.value)}
                    value={emailAddress}
                    className="asInput"
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <Label for="message" className="asLabel">
                    Message
                  </Label>
                  <Input
                    type="textarea"
                    name="message"
                    placeholder="Message"
                    id="message"
                    onChange={e => setMessage(e.target.value)}
                    value={message}
                    className="asInput"
                    rows="5"
                  />
                </Col>
              </Row>

              <div className="newContactFormButtonDiv">
                <Button type="submit">Send Message</Button>
              </div>
            </Container>
          </Form>
        </Col>
        <Col xl="4" lg="5" md="6" xs="12" id="MainColumn2">
          <div>
            <Card className="contactCards" body inverse>
              <div className="contactCardsWords">
                Colorado Springs - Pueblo
                <br />
                (719) 439-7950
              </div>
            </Card>

            <Card className="contactCards" body inverse>
              <div className="contactCardsWords">
                Denver - Castle Rock
                <br />
                (720) 306-1354
              </div>
            </Card>
            <Card className="contactCards" body inverse>
              <div className="contactCardsWords">Other Contacts</div>
              <div className="contactCardsWords">
                Email - contact@revelermusic.com
                <br />
                Facebook - @revelermusicllc
                <br />
                Instagram - @revelermusicllc
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </RevelerContactDiv>
  );
}

export default RevelerContact;
