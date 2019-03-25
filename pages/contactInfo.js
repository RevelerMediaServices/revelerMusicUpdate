import Layout from "../components/Layout";

import styled from "styled-components";
import NextSeo from "next-seo";

import RevelerContact from "../components/RevelerContact";

const ContactInfoDiv = styled.div`
  margin: 0;
  padding: 0;
  height: 80vh;

  width: 100vw;
`;

function ContactInfo() {
  return (
    <Layout>
      <ContactInfoDiv>
        <NextSeo
          config={{
            title: "Reveler Music, LLC - Service Page ",
            description:
              "Contact Reveler Music, LLC for music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas."
          }}
        />
        <RevelerContact />
      </ContactInfoDiv>
    </Layout>
  );
}

export default ContactInfo;
