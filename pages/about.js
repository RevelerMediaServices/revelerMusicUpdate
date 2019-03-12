import Layout from "../components/Layout";

import styled from "styled-components";
import NextSeo from "next-seo";

const AboutDiv = styled.div`
  margin: 0;
  padding: 0;
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
        <h1>
          RMS Static Website Template
          <br /> w/Server Side Rendering
        </h1>
        <p>About Page</p>
      </AboutDiv>
    </Layout>
  );
}

export default About;
