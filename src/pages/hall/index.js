import React from "react";
import Helmet from "react-helmet";
import { navigate } from "gatsby-link";
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

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
};

const HallPage = ({
  data: {
    site: {
      siteMetadata: { title }
    }
  }
}) => {
  var state = {};

  const setState = newState => {
    state = {
      ...state,
      ...newState
    };
  };

  const handleChange = e => {
    setState({ [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    debugger;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state
      })
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error));
  };

  return (
    <Layout>
      <Helmet title={`The Village Hall | ${title}`} />
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
                    Our prices start from just <strong>£30 per hour</strong> and
                    we have special rates for local residents and repeat
                    bookings.
                  </p>
                  <table className="table is-bordered is-narrow is-hoverable is-fullwidth">
                    <thead>
                      <tr>
                        <th>{}</th>
                        <th>Weekday</th>
                        <th>Evening</th>
                        <th>Weekends</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>Hourly</th>
                        <td>£30 per hour</td>
                        <td>£40 per hour</td>
                        <td>£50 per hour</td>
                      </tr>
                      <tr>
                        <th>Day rate</th>
                        <td colSpan="2">£150 for the day</td>
                        <td>£250 for the day</td>
                      </tr>
                    </tbody>
                  </table>
                </article>
              </div>
              <div className="tile">
                <div className="tile is-parent">
                  <article className="tile is-child box">
                    <section id="weddings">
                      <h2 className="title">Request a booking</h2>

                      <p>
                        If you have any questions or would like to book the
                        hall, please contact us using the form below.
                      </p>
                      <p>
                        Alternatively, please call 0117 986 7011 and Caroline
                        will be very happy to help!
                      </p>

                      <br />
                      <div className="content">
                        <h2 className="title is-4">Contact</h2>
                        <form
                          name="contact"
                          method="post"
                          action="/hall"
                          data-netlify="true"
                          data-netlify-honeypot="bot-field"
                          onSubmit={handleSubmit}
                        >
                          {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                          <input
                            type="hidden"
                            name="form-name"
                            value="contact"
                          />
                          <div hidden>
                            <label>
                              Don’t fill this out:{" "}
                              <input name="bot-field" onChange={handleChange} />
                            </label>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"name"}>
                              Your name
                            </label>
                            <div className="control">
                              <input
                                className="input"
                                type={"text"}
                                name={"name"}
                                onChange={handleChange}
                                id={"name"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"email"}>
                              Email
                            </label>
                            <div className="control">
                              <input
                                className="input"
                                type={"email"}
                                name={"email"}
                                onChange={handleChange}
                                id={"email"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <label className="label" htmlFor={"message"}>
                              Message
                            </label>
                            <div className="control">
                              <textarea
                                className="textarea"
                                name={"message"}
                                onChange={handleChange}
                                id={"message"}
                                required={true}
                              />
                            </div>
                          </div>
                          <div className="field">
                            <button className="button is-link" type="submit">
                              Send
                            </button>
                          </div>
                        </form>
                      </div>
                    </section>
                  </article>
                </div>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <div className="content">
                  <h2 className="title">Essential information</h2>
                  <p>Available when you hire the hall are;</p>
                  <ul>
                    <li>Tables & Chairs</li>
                    <li>Table linen</li>
                    <li>Cutlery, Crockery & Glasses</li>
                    <li>Basic kitchen (no cooking)</li>
                    <li>Fridge</li>
                    <li>Toilets</li>
                  </ul>

                  <h2 className="title is-5">Capacity & Dimensions</h2>
                  <p>
                    The hall can hold up to 100 people standing, or 80 seated
                    with tables (for example at a Wedding Reception).
                  </p>
                  <p>
                    The hall is approximately 12 metres long by 6 metres wide
                  </p>

                  <h2 className="title is-5">Alcohol Licence</h2>
                  <p>The hall does not have a licence to sell alcohol.</p>

                  <h2 className="title is-5">Deposit</h2>
                  <p>We do not require a deposit for bookings.</p>

                  <h2 className="title is-5">Parking</h2>
                  <p>Parking is limited, so please enquire when booking.</p>
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
