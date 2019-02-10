import React from "react";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import { Carousel } from "react-responsive-carousel";
// eslint-disable-next-line no-unused-vars
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

const carouselData = [
  {
    src: "/img/qc/hall-front.jpg",
    title: "Our Village Hall",
    caption:
      "Everything you need for your next big occasion - or a just a little gathering.",
    url: "/hall#hire",
    btnText: "Find out more"
  },
  {
    src: "/img/qc/yoga-class.jpg",
    title: "It'll fit you just right",
    caption:
      "Try out or run an Exercise class, Choir session or many other things",
    url: "/hall#hire",
    btnText: "Hire the Hall"
  },
  {
    // src: "/img/qc/streamers.jpg",
    src: "/img/qc/annie-spratt-96526-unsplash.jpg",
    title: "Planning a party?",
    caption:
      "Granny's 80th or a Fairy Princess party, our Hall will be perfect.",
    url: "/hall#calendar",
    btnText: "Check our calendar for dates"
  },
  {
    src: "/img/qc/bouquet-on-table.jpg",
    title: "Share your special day",
    caption: "All your closest family and friends - bring on the good times.",
    url: "/hall#calendar",
    btnText: "Check our availability"
  }
];

const carouselOptions = {
  showThumbs: false,
  showStatus: false,
  autoPlay: true,
  interval: 6000,
  transitionTime: 700,
  infiniteLoop: true
};

const HallPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => {
  debugger;
  return (
    <Layout>
      <Helmet title={`The Village Hall | ${title}`} />
      <section>
        <div className="container content">
          <h1 className="title is-size-2 has-text-weight-bold ">
            Our Village Hall
          </h1>
        </div>
        <Carousel {...carouselOptions}>
          {carouselData.map(({ src, title, caption, url, btnText }) => (
            <div
              style={{
                position: "relative",
                paddingTop: "30%",
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center"
              }}
              key={src}
            >
              <div
                className="has-text-right has-z-2"
                style={{
                  position: "absolute",
                  right: "10%",
                  bottom: "4rem",
                  maxWidth: "60%"
                }}
              >
                <h1
                  className="title has-text-weight-bold has-text-white"
                  style={{
                    fontSize: "4rem",
                    textShadow: "rgba(0,0,0,0.6) 0px 0px 16px"
                  }}
                >
                  {title}
                </h1>
                <p
                  className="subtitle has-body-font has-text-white is-size-4"
                  style={{
                    textShadow: "rgba(0,0,0,0.6) 0px 0px 16px"
                  }}
                >
                  {caption}
                </p>
                <Link to={url} className="button is-medium is-primary">
                  {btnText}
                </Link>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      <section className="section" id="hire">
        <div className="container">
          <div className="columns">
            <div className="column">
              <h1 className="has-text-weight-bold title">Hire the hall</h1>
              <p>
                Why not have your wedding reception, birthday party or any other
                special occasion in our quaint Village Hall.
              </p>
              <ul>
                <li>Wooden floor</li>
                <li>tables & chairs</li>
                <li>linen</li>
                <li>glasses</li>
                <li>utlery</li>
              </ul>
              <p>
                Everything you need for that special occasion and the venue
                you’ve been looking for.
              </p>
              <p>
                Please complete the enquiry form or call 0117 986 7011 and
                Caroline will be very happy to help!
              </p>
              <hr />
              Essential information Price Measurements Facilities Parking
              Opening hours Booking Form
            </div>
            <div className="column is-one-third">
              <figure className="image is-16-9">
                <img src="/img/qc/hall-inside.jpg" alt="" />
              </figure>
            </div>
          </div>
        </div>
      </section>

      <section className="section container" id="calendar">
        <h1>Calendar the hall</h1>
      </section>
    </Layout>
  );
};

export default HallPage;

export const hallPageQuery = graphql`
  query HallQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
