import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { Carousel } from "react-responsive-carousel";

const carouselOptions = {
  showThumbs: false,
  showStatus: false,
  transitionTime: 700,
  dynamicHeight: true
};

//
const carouselImages = [
  5,
  1,
  2,
  3,
  4,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  16,
  17,
  18,
  20,
  21,
  22,
  23,
  25
];

const FetePage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Helmet title={`Our Village Fete | ${title}`} />
    <section
      class="hero is-medium is-primary is-bold has-gradient-dark"
      style={{
        backgroundImage: "url(/img/qc/fete-panorama.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div class="hero-body content">
        <div class="container">
          <h1 className="title is-size-2 has-text-weight-bold">
            The Annual Village Fete
          </h1>
          <p className="subtitle">
            Saturday 8th June 2019, 2pm - £2.50 Adults, £1 concessions, under
            16s free.
          </p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container content">
        <div className="tile is-ancestor">
          <div className="tile is-parent is-4">
            <div className="tile is-child box">
              <h2 className="subtitle">Family Attractions</h2>
              <p>
                At the Queen Charlton Vllage Fete we pride ourselves on
                providing a large amount of varied and traditional attractions
                for the whole family.
              </p>
              <p>
                Stalls are placed all around the village and theroad is closed
                so you are free to wander. Plenty of free parking is organised a
                short walk away.
              </p>
              <p>All proceeds go to help the Village Hall and Church funds.</p>
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
                <li>
                  Raffle - STAR PRIZE - WIN AN APPLE IPAD! Or Champagne Or....
                </li>
                <li>Famous Classic racing cars from the 60's</li>
                <li>Plus much more...</li>
              </ul>
            </div>
          </div>
          <div className="tile is-parent is-8">
            <div className="tile is-child">
              <Carousel {...carouselOptions}>
                {carouselImages.map(n => (
                  <img src={`/img/qc/fete/${n}.jpg`} alt="" key={n} />
                ))}
              </Carousel>
            </div>
          </div>
        </div>
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
