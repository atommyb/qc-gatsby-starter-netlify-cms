import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <section
          class="hero is-primary"
          style={{
            backgroundImage: "url(img/qc/field-trees-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "bottom center",
            paddingTop: "10rem",
            paddingBottom: "10rem"
          }}
        >
          <div class="hero-body">
            <div class="container">
              <h1 class="title is-bold is-1" style={{ fontSize: "5rem" }}>
                Queen Charlton
              </h1>
              <h2 class="subtitle is-2">Welcome to our Village</h2>
            </div>
          </div>
        </section>
        <section className="section container">
          <div class="columns">
            <div class="column is-one-third is-flex">
              <Card
                image={{
                  src: "/img/qc/hall-inside.jpg",
                  alt: "Village hall Wedding reception"
                }}
                title={"Our Village Hall"}
                desc={`Why not have your wedding reception, birthday party or any
                  other special occasion in our quaint Village Hall. Wooden
                  floor- table chairs- linen- glasses-cutlery- Everything you
                  need for that special occasion and the venue you’ve been
                  looking for.`}
                link={{ url: "/hall", msg: "Would you like to hire the hall?" }}
              />
            </div>
            <div class="column is-one-third is-flex">
              <Card
                image={{
                  src: "img/qc/the-green.jpg",
                  alt: "People gathering on the village green during the fete"
                }}
                title={"The Village Fete"}
                desc={`Cake stalls, Brass Band, Morris Dancers and traditional
                  Fete games - what more could you want? We pride ourselves on
                   providing a large amount of varied and traditional
                   attractions for the whole family.`}
                link={{
                  url: "/fete",
                  msg: "What else is going on at our Village Fete?"
                }}
              />
            </div>
            <div class="column is-one-third is-flex">
              <Card
                image={{
                  src: "/img/qc/church-lighter.jpg",
                  alt: "St Margarets Church, Queen Charlton"
                }}
                title={"The Village History"}
                desc={`Originally simply named ‘Charlton’, the prefix was added
                  when the estate was given by Henry VIII to Queen Catherine
                  Parr. We bet you didn't know that?`}
                link={{
                  url: "/village",
                  msg: "Find out more about our beautiful little village."
                }}
              />
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

const Card = ({ image, title, desc, link }) => (
  <div
    class="card is-flex flex-dir-col"
    style={{ flexDirection: "column", flex: "1" }}
  >
    <div class="card-image">
      <figure class="image is-16by9" style={{ overflow: "hidden" }}>
        <img
          src={image.src}
          alt={image.alt}
          style={{
            height: "auto",
            minHeight: "100%",
            top: "50%",
            transform: "translateY(-50%)"
          }}
        />
      </figure>
    </div>
    <div
      class="card-content is-flex"
      style={{ flexDirection: "column", flex: "1" }}
    >
      <div
        class="content is-flex"
        style={{ flexDirection: "column", flex: "1" }}
      >
        <h1 className="is-size-4" style={{ marginTop: 0 }}>
          {title}
        </h1>
        <p>{desc}</p>
      </div>
      <Link to={link.url} className="button is-primary is-rounded">
        {link.msg}
      </Link>
    </div>
  </div>
);
