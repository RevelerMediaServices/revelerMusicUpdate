import Head from "next/head";
import Navbar from "./Navbar";

const Layout = props => (
  <div>
    <Head>
      <title>Reveler Media Services SEO Template</title>
      <meta property="og:title" content="Reveler Media Services SEO Template" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="Generate a Canonical Pague URL" />
      <meta property="og:image" content=" Image associated with the Page " />

      {/* Bootstrap CDN, remove and add UI Library of choice */}
      <link
        rel="stylesheet"
        href="https://bootswatch.com/4/cerulean/bootstrap.min.css"
      />
    </Head>
    <Navbar />
    <div className="container">{props.children}</div>
  </div>
);

export default Layout;
