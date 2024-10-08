import React from "react";
import Helmet from "react-helmet";
// import { navigate } from "gatsby-link";
import { Link, graphql } from "gatsby";
import Layout from "../../components/Layout";
import { HallForm } from "../../components/hall-form";
import { Carousel } from "react-responsive-carousel";
// eslint-disable-next-line no-unused-vars
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

if (typeof window !== "undefined") {
  // Make scroll behavior of internal links smooth
  require("smooth-scroll")('a[href*="#"]');
}

const carouselData = [
  {
    src: "/img/qc/hall-front.jpg",
    title: "Our Village Hall",
    caption:
      "Everything you need for your next big occasion - or a just a little gathering.",
    url: "/hall#booking-form",
    btnText: "Find out more",
  },
  {
    src: "/img/qc/yoga-class.jpg",
    title: "It'll fit you just right",
    caption:
      "Try out or run an Exercise class, Choir session or many other things",
    url: "/hall#booking-form",
    btnText: "Hire the Hall",
  },
  {
    // src: "/img/qc/streamers.jpg",
    src: "/img/qc/annie-spratt-96526-unsplash.jpg",
    title: "Planning a party?",
    caption:
      "Granny's 80th or a Fairy Princess party, our Hall will be perfect.",
    url: "/hall#booking-form",
    btnText: "Request a booking",
  },
  {
    src: "/img/qc/bouquet-on-table.jpg",
    title: "Share your special day",
    caption: "All your closest family and friends - bring on the good times.",
    url: "/hall#booking-form",
    btnText: "Request a booking",
  },
];

const carouselOptions = {
  showThumbs: false,
  showStatus: false,
  autoPlay: true,
  interval: 6000,
  transitionTime: 700,
  infiniteLoop: true,
};

// const encode = data => {
//   return Object.keys(data)
//     .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
//     .join("&");
// };

const HallPage = ({
  data: {
    site: {
      siteMetadata: { title },
    },
  },
}) => {
  return (
    <Layout>
      <Helmet title={`The Village Hall | ${title}`} />
      <Carousel {...carouselOptions}>
        {carouselData.map(({ src, title, caption, url, btnText }) => (
          <div
            className="hall-carousel"
            style={{ backgroundImage: `url(${src})` }}
            key={src}
          >
            <div className="hall-carousel-slide has-text-right has-z-2">
              <h1 className="title has-text-weight-bold has-text-white">
                {title}
              </h1>
              <p className="subtitle has-body-font has-text-white">{caption}</p>
              <Link to={url} className="button is-medium is-primary">
                {btnText}
              </Link>
            </div>
          </div>
        ))}
      </Carousel>

      <section className="section">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-vertical is-8">
              <div className="tile is-parent">
                <article className="tile is-child box content">
                  <h1 className="title is-spaced">Hire our Village Hall</h1>
                  <p className="subtitle">
                    Why not have your wedding reception, birthday party or any
                    other special occasion in our quaint Village Hall.
                  </p>
                  <p>
                    Our prices start from just <strong>£18 per hour</strong>{" "}
                    Monday - Friday or <strong>£21.50 per hour</strong> on
                    weekends, where 2 hours is the minimum hire time. We have
                    special rates for local residents and repeat bookings.
                  </p>
                  <p>
                    Regular weekly Monday - Friday bookings are usually for the
                    duration of term times or 7/8 weeks block bookings; these
                    bookings can be reduced to £14 per hour.
                  </p>
                  <p>
                    Regular monthly Monday - Friday bookings of 3 months as a
                    minimum can be reduced to <strong>£16 per hour</strong>{" "}
                    please apply.
                  </p>
                  <p>
                    <strong>Ultrafast fibre WiFi broadband</strong> is now
                    available at the hall.
                  </p>

                  <br />
                  <hr />
                  <br />

                  <section id="weddings">
                    <h2 className="title">Request a booking</h2>

                    <p>
                      If you have any questions or would like to book the hall,
                      please contact us using the form below.
                    </p>
                    <p>
                      Alternatively, please call 0117 986 7011 and Caroline will
                      be very happy to help!
                    </p>

                    <br />

                    <div className="content" id="booking-form">
                      <h2 className="title is-4">Contact</h2>

                      <HallForm />
                    </div>
                  </section>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="content">
                  <h2 className="title">Essential information</h2>
                  <p>Available when you hire the hall are;</p>
                  <ul>
                    <li>Main Hall</li>
                    <li>Tables & Chairs</li>
                    <li>Tea & Dinner Crockery</li>
                    <li>Cutlery & Glasses</li>
                    <li>Kettle, Cooker, Microwave, Servery</li>
                    <li>Ultrafast WiFi Broadband</li>
                    <li>Sound Equipment</li>
                    <li>Fridge</li>
                    <li>Accessible Toilets</li>
                    <li>Store Room</li>
                    <li>Wheelchair Access</li>
                  </ul>

                  <h2 className="title is-5">Capacity & Dimensions</h2>
                  <p>
                    The hall can hold approximately 60 people standing, or 50
                    seated with tables (for example at a Wedding Reception).
                  </p>
                  <p>
                    The hall is approximately 12 metres long by 6 metres wide
                  </p>

                  <h2 className="title is-5">Alcohol Licence</h2>
                  <p>
                    The hall does not have a licence to sell alcohol but you are
                    welcome to bring your own.
                  </p>

                  <h2 className="title is-5">Parking</h2>
                  <p>
                    Parking in our small village is quite limited, so please
                    enquire when booking.
                  </p>

                  <h2 className="title is-5">The Address</h2>
                  <p class="subtitle">
                    <a
                      href="https://www.google.com/maps/dir/Unnamed+Road,+Bristol+BS31+2SJ/51.4013777,-2.5262606/@51.4011618,-2.5274224,353m/data=!3m1!1e3"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Find us on Google Maps
                    </a>
                  </p>
                  <p>
                    Village Hall <br />
                    Queen Charlton <br />
                    Keynsham <br />
                    Bristol <br />
                    BS31 2SJ <br />
                  </p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </section>

      {/* What are the prices for hiring the hall? Hourly rate, daily rate,
      recurring booking rates? Do the prices vary based on times or dates
      (evening, weekends, etc...) Does the hall have an alcohol license? Do we
      ask for deposits for bookings, damage and so on. If so, what are they?
      What is the Hall's capacity in terms of numbers of people? When seated
      When standing / without tables Any safety certification that stipulate
      numbers What are the general facilities available? Cutlery, crockery,
      toilets, kitchen, fridges etc? What are the dimensions of the hall? */}
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
