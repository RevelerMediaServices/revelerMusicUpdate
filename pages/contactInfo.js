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
            title:
              "Reveler Music, LLC - #BringinTheParty ** Music Entertainment Services - Contact Page ",
            description:
              "Contact Reveler Music, LLC for music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
            canonical: "https://revelermusic.com",
            openGraph: {
              type: "website",
              url: "https://revelermusic.com/",
              title: "Reveler Music, LLC - Contact Page",
              description:
                "Contact Reveler Music, LLC for music entertainment services, such as, Live Music, Live Sound and Open Mics, Karaoke and DJ, to Pueblo, Colorado Springs, Castle Rock, Denver and the surrounding areas.",
              site_name: "Revler Music, LLC"
            },
            twitter: {
              handle: "@jwgravesco"
            }
          }}
        />
        <RevelerContact />
      </ContactInfoDiv>
    </Layout>
  );
}

export default ContactInfo;
