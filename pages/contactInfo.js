import Layout from "../components/Layout";

import styled from "styled-components";
import NextSeo from "next-seo";

import BackOfBusCard from "../components/BackOfBusCard";
import RevelerContact from "../components/RevelerContact";

const ContactInfoDiv = styled.div`
  margin: 0;
  padding: 0;
  min-height: 90vh;
`;

function ContactInfo() {
  return (
    <Layout>
      <ContactInfoDiv>
        <NextSeo
          config={{
            title: "Reveler Music, LLC - Contact Page",
            description:
              "Next.js starter template with Styled-Components, Firebase, Next-SEO"
          }}
        />
        <RevelerContact />
      </ContactInfoDiv>
    </Layout>
  );
}

export default ContactInfo;
