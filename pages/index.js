import Layout from "../components/Layout";

import styled from "styled-components";
import NextSeo from "next-seo";

const IndexDiv = styled.div``;

function Index() {
  return (
    <Layout>
      <IndexDiv>
        <h1>
          RMS Static Website Template
          <br /> w/Server Side Rendering
        </h1>
        <p>Reveler Media Services Base SEO Template</p>
      </IndexDiv>
    </Layout>
  );
}

export default Index;
