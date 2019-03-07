import Navbar from "./Navbar";

import styled from "styled-components";
import NextSeo from "next-seo";

const LayoutDiv = styled.div``;

function Layout(props) {
  return (
    <LayoutDiv>
      <NextSeo
        config={{
          title: "Reveler Media Services Next.js/Firebase starter",
          description:
            "Next.js starter template with Styled-Components, Firebase, Next-SEO"
        }}
      />
      <div>
        <Navbar />
        <div className="container">{props.children}</div>
      </div>
    </LayoutDiv>
  );
}

export default Layout;
