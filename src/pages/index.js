import React from "react";
import PropTypes from "prop-types";
import { graphql, Link } from "gatsby";
import ReactMarkdown from 'react-markdown'
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section
          class="hero is-primary has-gradient-dark"
          style={{
            backgroundImage: "url(img/qc/wall-leaves.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            paddingTop: "8vmin",
            paddingBottom: "8vmin"
          }}
        >
          <div class="hero-body content">
            <div class="container">
              <h1 class="title is-1">Queen Charlton</h1>
              <h2 class="subtitle is-3">Welcome to our Village</h2>
            </div>
          </div>
        </section>
        <section className="section container">
          <div class="columns">
            <div
              class="column is-one-third is-flex"
              style={{ flexDirection: "column" }}
            >
              <h1 className="title">Village Hall</h1>
              <Card
                image={{
                  src: "/img/qc/yoga-mat-roll.jpg",
                  alt: "Yoga matt being rolled up"
                }}
                title={"Our Village Hall"}
                desc={`Fitness class, Wedding Reception, Children's Birthday party or any
                  other special occasion. A lovely wooden floor, vaulted ceiling and period
                  features - there's everything you need.`}
                link={{ url: "/hall", msg: "Hire the hall or join a class?" }}
              />
            </div>
            <div
              class="column is-one-third is-flex"
              style={{ flexDirection: "column" }}
            >
              <h1 className="title">Village Fete</h1>
              <Card
                image={{
                  src: "img/qc/the-green.jpg",
                  alt: "People gathering on the village green during the fete"
                }}
                desc={`**Saturday 10th June - 2-5pm** Cake stalls, Brass Band, Morris Dancers and traditional
                  Fete games - what more could you want? We pride ourselves on
                   providing a large amount of varied and traditional
                   attractions for the whole family.`}
                link={{
                  url: "/fete",
                  msg: "What else is going on at our Village Fete?"
                }}
              />
            </div>
            <div
              class="column is-one-third is-flex"
              style={{ flexDirection: "column" }}
            >
              <h1 className="title">Village History</h1>
              <Card
                image={{
                  src: "/img/qc/church-lighter.jpg",
                  alt: "St Margarets Church, Queen Charlton"
                }}
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
        <section className="section container" id={"news"}>
          <h1 className="title">News and Events</h1>
          {posts.map(({ node: post }) => (
            <div
              className="content"
              style={{ border: "1px solid #eaecee", padding: "2em 4em" }}
              key={post.id}
            >
              <p>
                <Link className="has-text-primary" to={post.fields.slug}>
                  {post.frontmatter.title}
                </Link>
                <span> &bull; </span>
                <small>{post.frontmatter.date}</small>
              </p>
              <p>
                {post.excerpt}
                <br />
                <br />
                <Link className="button is-small" to={post.fields.slug}>
                  Keep Reading →
                </Link>
              </p>
            </div>
          ))}
        </section>
      </Layout>
    );
  }
}

const Card = ({ image, desc, link }) => (
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
        <ReactMarkdown>{desc}</ReactMarkdown>
      </div>
      <Link
        to={link.url}
        className="button has-text-weight-bold is-primary is-rounded"
      >
        {link.msg}
      </Link>
    </div>
  </div>
);

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array
    })
  })
};

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`;
