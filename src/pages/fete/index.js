import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import ImageGallery from "react-image-gallery";

const carouselImages = [
  { original: "/img/qc/fete/5.jpg" },
  { original: "/img/qc/fete/1.jpg" },
  { original: "/img/qc/fete/2.jpg" },
  { original: "/img/qc/fete/3.jpg" },
  { original: "/img/qc/fete/4.jpg" },
  { original: "/img/qc/fete/6.jpg" },
  { original: "/img/qc/fete/7.jpg" },
  { original: "/img/qc/fete/8.jpg" },
  { original: "/img/qc/fete/9.jpg" },
  { original: "/img/qc/fete/10.jpg" },
  { original: "/img/qc/fete/11.jpg" },
  { original: "/img/qc/fete/12.jpg" },
  { original: "/img/qc/fete/13.jpg" },
  { original: "/img/qc/fete/16.jpg" },
  { original: "/img/qc/fete/17.jpg" },
  { original: "/img/qc/fete/18.jpg" },
  { original: "/img/qc/fete/20.jpg" },
  { original: "/img/qc/fete/21.jpg" },
  { original: "/img/qc/fete/22.jpg" },
  { original: "/img/qc/fete/23.jpg" },
  { original: "/img/qc/fete/25.jpg" }
];

const carouselOptions = {
  items: carouselImages,
  showThumbnails: false,
  lazyLoad: true,
  useBrowserFullscreen: false,
  defaultImage: "https://via.placeholder.com/300"
};

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
      className="hero is-medium is-primary is-bold has-gradient-dark"
      style={{
        backgroundImage: "url(/img/qc/fete-panorama.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center center"
      }}
    >
      <div className="hero-body content">
        <div className="container">
          <h1 className="title is-size-2 has-text-weight-bold">
            The Annual Village Fete
          </h1>
          <p className="subtitle">
            Saturday 11th June 2022
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
                Stalls are placed all around the village and the road is closed
                so you are free to wander. Plenty of free parking is organised a
                short walk away.
              </p>
              <p>All proceeds go to help the Village Hall and Church funds.</p>

              <p>Come on down this summer for the likes of:</p>
              <ul>
                <li>Cake stall</li>
                <li>Cream Teas</li>
                <li>Children's Trail</li>
                <li>Bell ringers</li>
                <li>Owl display</li>
                <li>Mini-Pub</li>
                <li>Drinks and BBQ</li>
                <li>Gin stall</li>
                <li>Bee Keepers</li>
                <li>Coconut shy</li>
                <li>Ice creams</li>
                <li>Bat the rat</li>
                <li>Skittles</li>
                <li>Arts and Crafts stalls</li>
                <li>Famous Classic racing cars from the 60's</li>
                <li>Cider stall</li>
                <li>Bouncy Castle</li>
                <li>Keynsham Brass Band</li>
                <li>Traditional Morris Dancers</li>
                <li>Plus much more...</li>
              </ul>
            </div>
          </div>
          <div className="tile is-parent is-8">
            <div className="tile is-child">
              <ImageGallery {...carouselOptions} />
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
