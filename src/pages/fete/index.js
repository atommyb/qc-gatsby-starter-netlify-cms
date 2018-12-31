import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";

const FetePage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Helmet title={`Our Village Fete | ${title}`} />
    <section className="section">
      <div className="container content">
        <h1 className="title is-size-2 has-text-weight-bold ">
          The Annual Village Fete
        </h1>
        <p>
          At the Queen Charlton Vllage Fete we pride ourselves on providing a
          large amount of varied and traditional attractions for the whole
          family.
        </p>
        <p>Come on down this summer for the likes of:</p>
        <ul>
          <li>Cake stall</li>
          <li>Ice creams</li>
          <li>Arts and Crafts stalls</li>
          <li>Plant stall</li>
          <li>BBQ & Beer Tent</li>
          <li>Bouncy Castle</li>
          <li>Keynsham Brass Band</li>
          <li>Traditional Morris Dancers</li>
          <li>Bric-a-brac</li>
          <li>Coconut Shy</li>
          <li>Bottle stall</li>
          <li>Raffle - STAR PRIZE - WIN AN APPLE IPAD! Or Champagne Or....</li>
          <li>Famous Classic racing cars from the 60's</li>
          <li>Plus much more...</li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default FetePage;

export const fetePageQuery = graphql`
  query FeteQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
