import React from "react";
import Helmet from "react-helmet";
import { graphql } from "gatsby";
import Layout from "../../components/Layout";
import { Carousel } from "react-responsive-carousel";

const carouselOptions = {
  showThumbs: true,
  showStatus: false,
  transitionTime: 700
};

const HistoryPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => (
  <Layout>
    <Helmet title={`The Village History | ${title}`} />
    <section class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <div class="container">
          <h1 className="title is-size-2 has-text-weight-bold ">
            The History of Queen Charlton
          </h1>
          <p className="subtitle">
            Queen Charlton is a small village located 2 miles outside of
            Keynsham in the West Country.
          </p>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <div className="columns content">
          <div className="column">
            <h2 className="title">Charlton...</h2>
            <p>
              Originally simply named ‘Charlton’, the prefix was added when the
              estate was given by Henry VIII to Queen Catherine Parr.
            </p>
            <p>
              The Church of St Margaret dates from the 12th century and has been
              designated by English Heritage as a Grade II listed building.
              There is a late medieval cross on the village green.
            </p>
            <p>
              A fair, granted by Queen Elizabeth I when she passed through the
              village in 1573, is held annually on the second Saturday of June.
              The tradition continues to this day so please join us for our next
              fete on Saturday 8th June, 2019!
            </p>
            <p>
              A Royal charter was granted by Queen Elizabeth in 1574. The manor
              belonged to Keynsham Abbey. The last abbot, John Stourton, retired
              to the village reputedly bringing the Norman arch from the Abbey
              with him.
            </p>
          </div>
          <div className="column">
            <h2 className="title">Did you know...</h2>
            <ul>
              <li>
                The church, dedicated to St Margaret of Antioch, was built circa
                1200, probably superseding a timber building from before the
                Norman Conquest.
              </li>
              <li>A Norman arch, possibly from Keynsham Abbey.</li>
              <li>The oldest house recorded is Tolsey House in 1549.</li>
              <li>
                18th century Manor House. Wilkie Collins wrote most of the
                "Woman in White" while staying at the manor house.
              </li>
              <li>
                The village cross was probably a medieval market cross and has
                been in a number of different locations, until settling in its
                present position on the newly-created green in 1897 to celebrate
                Queen Victoria's Jubilee.
              </li>
              <li>
                The author Dick King-Smith lived in Queen Charlton until his
                death in 2011 - writer of "The Sheep Pig" adapted for the big
                screen as "Babe".
              </li>
            </ul>
          </div>
        </div>
        <div className="gallery">
          <h2 className="title">Historical Images</h2>
          <Carousel {...carouselOptions}>
            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => (
              <img src={`/img/qc/history/village-0${n}.jpg`} alt="" key={n} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  </Layout>
);

export default HistoryPage;

export const historyPageQuery = graphql`
  query HistoryQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
