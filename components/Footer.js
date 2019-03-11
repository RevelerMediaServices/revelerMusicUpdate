import Layout from "../components/Layout";

import styled from "styled-components";
import NextSeo from "next-seo";

import { Row, Col } from "reactstrap";

const FooterDiv = styled.div``;

function Footer() {
  return (
    <Layout>
      <FooterDiv>
        <NextSeo
          config={{
            title: "Reveler Media Services Next.js/Firebase starter",
            description:
              "Next.js starter template with Styled-Components, Firebase, Next-SEO"
          }}
        />
        <Row>
          <Col>Col 1</Col>
          <Col>Col 2</Col>
          <Col>Col 3</Col>
        </Row>
      </FooterDiv>
    </Layout>
  );
}

export default Footer;
