import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";
import Layout from "../components/Layout";

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props;
    const { edges: posts } = data.allMarkdownRemark;

    return (
      <Layout>
        <section
          class="hero is-primary"
          style={{
            // backgroundImage: "url(img/qc/wall-leaves-bw.jpg)",
            backgroundImage: "url(img/qc/wall-leaves.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            paddingTop: "8rem",
            paddingBottom: "8rem"
          }}
        >
          <div class="hero-body">
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
        <p>{desc}</p>
      </div>
      <Link to={link.url} className="button is-primary is-rounded">
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
